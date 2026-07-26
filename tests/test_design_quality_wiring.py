import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MARKDOWN_PATH = re.compile(r"`((?:\.\./)*references/[^`]+\.md)`")


def read_text(relative_path: str) -> str:
    return (ROOT / relative_path).read_text(encoding="utf-8")


def resolved_reference(source: Path, raw_path: str) -> Path:
    return (source.parent / raw_path).resolve()


class DesignQualityWiringTests(unittest.TestCase):
    def test_routed_skills_and_commands_exist(self) -> None:
        root_skill = ROOT / "SKILL.md"
        text = root_skill.read_text(encoding="utf-8")
        paths = re.findall(r"`((?:skills|commands)/[^`]+\.md)`", text)
        self.assertGreaterEqual(len(paths), 10)
        for relative in paths:
            self.assertTrue((ROOT / relative).is_file(), relative)

    def test_root_reference_routes_resolve(self) -> None:
        root_skill = ROOT / "SKILL.md"
        paths = MARKDOWN_PATH.findall(root_skill.read_text(encoding="utf-8"))
        self.assertGreaterEqual(len(paths), 20)
        for relative in paths:
            self.assertTrue(resolved_reference(root_skill, relative).is_file(), relative)

    def test_web_reference_routes_resolve(self) -> None:
        web_skill = ROOT / "skills/web-design/SKILL.md"
        paths = MARKDOWN_PATH.findall(web_skill.read_text(encoding="utf-8"))
        self.assertGreaterEqual(len(paths), 10)
        for relative in paths:
            self.assertTrue(resolved_reference(web_skill, relative).is_file(), relative)

    def test_router_enforces_progressive_disclosure(self) -> None:
        root = read_text("SKILL.md").lower()
        web = read_text("skills/web-design/SKILL.md").lower()
        for text in (root, web):
            self.assertIn("two core references", text)
            self.assertRegex(text, r"(?:at most|no more than) two conditional references")
            self.assertNotIn("read all", text)
        self.assertIn("post-render gates only after rendered evidence exists", root)

    def test_primary_skill_context_stays_bounded(self) -> None:
        for relative in ("SKILL.md", "skills/web-design/SKILL.md"):
            text = read_text(relative)
            self.assertLessEqual(len(text.splitlines()), 300, relative)
            self.assertLessEqual(len(text.split()), 3_000, relative)

    def test_reference_catalogs_explain_selective_loading(self) -> None:
        for relative in (
            "references/ui-patterns/README.md",
            "references/ux-patterns/README.md",
            "references/web-patterns/README.md",
        ):
            text = read_text(relative).lower()
            self.assertIn("use", text, relative)
            self.assertGreater(len(text.splitlines()), 10, relative)

    def test_eval_files_are_structured_and_nonempty(self) -> None:
        trigger_data = json.loads(read_text("evals/evals.json"))
        trigger_evals = trigger_data["train"] + trigger_data["validation"]
        quality_data = json.loads(read_text("evals/design-quality-prompts.json"))
        quality_evals = quality_data["prompts"]
        self.assertGreaterEqual(len(trigger_evals), 40)
        self.assertGreaterEqual(len(quality_evals), 20)

        prompts = [item["prompt"].strip().lower() for item in trigger_evals]
        self.assertEqual(len(prompts), len(set(prompts)))
        self.assertTrue(any(not item["should_trigger"] for item in trigger_evals))

    def test_skillforge_examples_cover_major_surfaces(self) -> None:
        data = json.loads(read_text("skillforge.json"))
        prompts = " ".join(example["prompt"].lower() for example in data["examples"])
        for concept in (
            "winui",
            "swiftui",
            "android",
            "landing",
            "dashboard",
            "accessibility",
            "animation",
            "design system",
            "usability",
        ):
            self.assertIn(concept, prompts)


if __name__ == "__main__":
    unittest.main()
