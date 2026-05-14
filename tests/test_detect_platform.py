import unittest

from scripts.detect_platform import detect


class DetectPlatformTests(unittest.TestCase):
    def test_plain_ios_routes_to_apple(self) -> None:
        self.assertEqual(detect("Build an iOS settings screen"), "apple")

    def test_single_platform_dashboards_keep_named_platform(self) -> None:
        self.assertEqual(detect("Build an iOS app dashboard"), "apple")
        self.assertEqual(detect("Build an Android app dashboard"), "android")
        self.assertEqual(detect("Make a Win11 dashboard with Mica"), "windows")
        self.assertEqual(detect("Build a Windows app"), "windows")

    def test_translation_with_plain_windows_routes_cross_platform(self) -> None:
        self.assertEqual(detect("Translate this iOS settings screen into a Windows app"), "cross-platform")

    def test_explicit_multi_platform_routes_cross_platform(self) -> None:
        self.assertEqual(detect("Build the same app for iOS and Android"), "cross-platform")
        self.assertEqual(detect("Use one codebase for web and desktop"), "cross-platform")

    def test_web_dashboard_without_native_signal_routes_web(self) -> None:
        self.assertEqual(detect("Build a React dashboard"), "web")

    def test_no_signal_is_ambiguous(self) -> None:
        self.assertEqual(detect("Make this easier to use"), "ambiguous")


if __name__ == "__main__":
    unittest.main()
