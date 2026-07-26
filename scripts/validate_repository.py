#!/usr/bin/env python3
"""Validate Stark source, runtime routing, and release-package hygiene."""

from __future__ import annotations

import json
import re
import subprocess
import tempfile
import zipfile
from pathlib import Path

from build_package import FORBIDDEN_PARTS, ROOT, build_archive


TEXT_SUFFIXES = {".json", ".md", ".py", ".svg", ".yaml", ".yml"}
SECRET_PATTERNS = [
    re.compile(r"C:\\Users\\", re.I),
    re.compile(r"OneDrive\\Desktop", re.I),
    re.compile(r"sk-[A-Za-z0-9]{20,}"),
    re.compile(r"ghp_[A-Za-z0-9]{20,}"),
    re.compile(r"github_pat_[A-Za-z0-9_]{20,}"),
    re.compile(r"-----BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----"),
]
MARKDOWN_LINK = re.compile(r"!?\[[^\]]*]\(([^)]+)\)")


def text_files(root: Path = ROOT) -> list[Path]:
    return [
        path
        for path in root.rglob("*")
        if path.is_file()
        and ".git" not in path.parts
        and "node_modules" not in path.parts
        and "dist" not in path.parts
        and path.suffix.lower() in TEXT_SUFFIXES
    ]


def validate_versions(errors: list[str]) -> None:
    sources = {
        "codex": json.loads((ROOT / ".codex-plugin/plugin.json").read_text(encoding="utf-8"))["version"],
        "claude": json.loads((ROOT / ".claude-plugin/plugin.json").read_text(encoding="utf-8"))["version"],
        "marketplace": json.loads((ROOT / ".claude-plugin/marketplace.json").read_text(encoding="utf-8"))["plugins"][0]["version"],
        "npm": json.loads((ROOT / "package.json").read_text(encoding="utf-8"))["version"],
    }
    if len(set(sources.values())) != 1:
        errors.append(f"version mismatch: {sources}")


def validate_skills(errors: list[str]) -> None:
    limits = {
        ROOT / "SKILL.md": (300, 3_000),
        ROOT / "skills/web-design/SKILL.md": (300, 3_000),
    }
    for path in [ROOT / "SKILL.md", *sorted((ROOT / "skills").glob("*/SKILL.md"))]:
        text = path.read_text(encoding="utf-8")
        if not re.match(r"^---\nname: [^\n]+\ndescription: [^\n]+\n---\n", text):
            errors.append(f"invalid skill frontmatter: {path.relative_to(ROOT)}")
        if path in limits:
            max_lines, max_words = limits[path]
            lines = len(text.splitlines())
            words = len(text.split())
            if lines > max_lines or words > max_words:
                errors.append(
                    f"skill context budget exceeded: {path.relative_to(ROOT)} "
                    f"({lines}/{max_lines} lines, {words}/{max_words} words)"
                )

    root_skill = (ROOT / "SKILL.md").read_text(encoding="utf-8")
    mandatory_block = re.search(
        r"After UX routing and before implementation, read:", root_skill, re.I
    )
    if mandatory_block:
        errors.append("root skill contains the removed broad mandatory-reading instruction")


def validate_text_hygiene(errors: list[str]) -> None:
    for path in text_files():
        data = path.read_bytes()
        relative = path.relative_to(ROOT).as_posix()
        if b"\r\n" in data:
            errors.append(f"CRLF line endings: {relative}")
        text = data.decode("utf-8")
        for line_number, line in enumerate(text.splitlines(), start=1):
            if line.rstrip() != line:
                errors.append(f"trailing whitespace: {relative}:{line_number}")
            for pattern in SECRET_PATTERNS:
                if pattern.search(line):
                    if relative == "docs/public-plugin-readiness.md" and "rg -n" in line:
                        continue
                    errors.append(f"possible private value: {relative}:{line_number}")


def validate_local_links(errors: list[str]) -> None:
    for path in ROOT.rglob("*.md"):
        if ".git" in path.parts or "node_modules" in path.parts:
            continue
        text = path.read_text(encoding="utf-8")
        for match in MARKDOWN_LINK.finditer(text):
            target = match.group(1).strip().split()[0].strip("<>")
            if target.startswith(("http://", "https://", "mailto:", "#", "data:")):
                continue
            target = target.split("#", 1)[0]
            if target and not (path.parent / target).resolve().exists():
                line = text[: match.start()].count("\n") + 1
                errors.append(
                    f"broken local link: {path.relative_to(ROOT).as_posix()}:{line} -> {target}"
                )


def validate_git_diff(errors: list[str]) -> None:
    result = subprocess.run(
        ["git", "diff", "--check"],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    if result.returncode:
        errors.extend(line for line in result.stdout.splitlines() if line)


def validate_archive(errors: list[str]) -> None:
    with tempfile.TemporaryDirectory() as directory:
        archive_path = Path(directory) / "stark.zip"
        build_archive(archive_path)
        with zipfile.ZipFile(archive_path) as archive:
            names = archive.namelist()
        for name in names:
            if FORBIDDEN_PARTS.intersection(Path(name).parts):
                errors.append(f"forbidden archive path: {name}")
            if name.endswith((".pyc", ".pyo", ".log")):
                errors.append(f"generated archive file: {name}")


def main() -> int:
    errors: list[str] = []
    validate_versions(errors)
    validate_skills(errors)
    validate_text_hygiene(errors)
    validate_local_links(errors)
    validate_git_diff(errors)
    validate_archive(errors)
    if errors:
        print("Repository validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1
    print("Repository validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
