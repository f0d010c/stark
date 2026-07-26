#!/usr/bin/env python3
"""Build a deterministic, allowlisted Stark plugin archive."""

from __future__ import annotations

import argparse
import json
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PACKAGE_EXACT = {
    "CHANGELOG.md",
    "LICENSE",
    "NOTICE",
    "README.md",
    "SECURITY.md",
    "SKILL.md",
    "docs/review-contract.md",
    "scripts/detect_platform.py",
    "scripts/token_export.py",
}
PACKAGE_PREFIXES = (
    ".claude-plugin/",
    ".codex-plugin/",
    "agents/",
    "assets/",
    "commands/",
    "references/",
    "skills/",
)
FORBIDDEN_PARTS = {
    "__pycache__",
    "design-previews",
    "dist",
    "evals",
    "node_modules",
    "tests",
}


def is_package_path(relative: str) -> bool:
    return relative in PACKAGE_EXACT or relative.startswith(PACKAGE_PREFIXES)


def package_files(root: Path = ROOT) -> list[Path]:
    files: list[Path] = []
    for path in root.rglob("*"):
        if not path.is_file() or path.is_symlink():
            continue
        relative = path.relative_to(root).as_posix()
        if is_package_path(relative):
            files.append(path)
    return sorted(files, key=lambda path: path.relative_to(root).as_posix())


def validate_package_files(files: list[Path], root: Path = ROOT) -> None:
    errors: list[str] = []
    relative_paths = [path.relative_to(root).as_posix() for path in files]
    for relative in relative_paths:
        if FORBIDDEN_PARTS.intersection(Path(relative).parts):
            errors.append(f"forbidden package path: {relative}")
        if relative.endswith((".pyc", ".pyo", ".log")):
            errors.append(f"generated file in package: {relative}")

    manifest = json.loads((root / ".codex-plugin/plugin.json").read_text(encoding="utf-8"))
    for include in manifest.get("include", []):
        normalized = include.removeprefix("./").rstrip("/")
        if not any(path == normalized or path.startswith(f"{normalized}/") for path in relative_paths):
            errors.append(f"manifest include has no packaged files: {include}")

    if errors:
        raise ValueError("\n".join(errors))


def build_archive(output: Path, root: Path = ROOT) -> list[str]:
    files = package_files(root)
    validate_package_files(files, root)
    output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for path in files:
            relative = path.relative_to(root).as_posix()
            info = zipfile.ZipInfo(relative)
            info.date_time = (1980, 1, 1, 0, 0, 0)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, path.read_bytes())
    return [path.relative_to(root).as_posix() for path in files]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    files = build_archive(args.output.resolve())
    print(f"wrote {args.output} ({len(files)} allowlisted files)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
