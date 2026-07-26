import tempfile
import unittest
import zipfile
from pathlib import Path

from scripts.build_package import FORBIDDEN_PARTS, ROOT, build_archive, package_files


class RepositoryHealthTests(unittest.TestCase):
    def test_package_allowlist_excludes_local_and_generated_files(self) -> None:
        relative_paths = [path.relative_to(ROOT).as_posix() for path in package_files()]
        for relative in relative_paths:
            self.assertFalse(FORBIDDEN_PARTS.intersection(Path(relative).parts), relative)
            self.assertFalse(relative.endswith((".pyc", ".pyo", ".log")), relative)

    def test_built_archive_matches_allowlist(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "stark.zip"
            expected = build_archive(output)
            with zipfile.ZipFile(output) as archive:
                actual = archive.namelist()
            self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
