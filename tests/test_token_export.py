import unittest

from scripts.token_export import (
    export_compose,
    export_swiftui,
    export_tailwind,
    flatten,
    resolve,
)


class TokenExportTests(unittest.TestCase):
    def test_group_level_type_is_inherited(self) -> None:
        flat = flatten({
            "color": {
                "$type": "color",
                "brand": {"primary": {"$value": "#ff0000"}},
            }
        })

        self.assertEqual(flat["color.brand.primary"]["$type"], "color")

    def test_circular_reference_raises(self) -> None:
        flat = flatten({
            "a": {"$value": "{b}", "$type": "dimension"},
            "b": {"$value": "{a}", "$type": "dimension"},
        })

        with self.assertRaisesRegex(ValueError, "Circular token reference"):
            resolve(flat["a"]["$value"], flat)

    def test_resolves_references_inside_composite_typography_values(self) -> None:
        flat = flatten({
            "size": {"body": {"$value": "18sp", "$type": "dimension"}},
            "leading": {"body": {"$value": 1.2, "$type": "number"}},
            "typography": {
                "body": {
                    "$type": "typography",
                    "$value": {
                        "fontSize": "{size.body}",
                        "lineHeight": "{leading.body}",
                        "fontWeight": 600,
                    },
                }
            },
        })

        resolved = resolve(flat["typography.body"]["$value"], flat)

        self.assertEqual(resolved["fontSize"], "18sp")
        self.assertEqual(resolved["lineHeight"], 1.2)

    def test_tailwind_strips_type_prefixes(self) -> None:
        flat = flatten({
            "color": {
                "$type": "color",
                "brand": {"primary": {"$value": "#ff0000"}},
            },
            "spacing": {
                "$type": "dimension",
                "tight": {"$value": "16px"},
            },
            "typography": {
                "display": {
                    "$type": "typography",
                    "$value": {"fontFamily": "Editorial", "fontSize": "72px"},
                }
            },
        })

        css = export_tailwind(flat)

        self.assertIn("--color-brand-primary: #ff0000;", css)
        self.assertIn("--spacing-tight: 16px;", css)
        self.assertIn("--font-display: Editorial;", css)
        self.assertNotIn("--color-color-brand-primary", css)
        self.assertNotIn("--spacing-spacing-tight", css)

    def test_tailwind_dark_color_group_uses_dark_namespace(self) -> None:
        flat = flatten({
            "color-dark": {
                "ink": {"$value": "#ffffff", "$type": "color"},
            }
        })

        css = export_tailwind(flat)

        self.assertIn("--color-dark-ink: #ffffff;", css)
        self.assertNotIn("--color-color-dark-ink", css)

    def test_compose_emits_color_scheme_and_scaled_unitless_line_height(self) -> None:
        flat = flatten({
            "color": {
                "primary": {"$value": "#6750A4", "$type": "color"},
                "on-primary": {"$value": "#FFFFFF", "$type": "color"},
            },
            "typography": {
                "display-large": {
                    "$value": {
                        "fontFamily": "Roboto Flex",
                        "fontSize": "48sp",
                        "lineHeight": 0.95,
                        "fontWeight": 600,
                    },
                    "$type": "typography",
                }
            },
        })

        kotlin = export_compose(flat)

        self.assertIn("val colorScheme: ColorScheme = lightColorScheme(", kotlin)
        self.assertIn("primary = colorPrimary", kotlin)
        self.assertIn("onPrimary = colorOnPrimary", kotlin)
        self.assertIn("lineHeight = 45.6.sp", kotlin)
        self.assertIn("displayLarge = typographyDisplayLarge", kotlin)

    def test_swiftui_scales_unitless_line_height_constants(self) -> None:
        flat = flatten({
            "typography": {
                "display": {
                    "$value": {
                        "fontFamily": "Editorial",
                        "fontSize": "48px",
                        "lineHeight": 0.95,
                        "fontWeight": 400,
                    },
                    "$type": "typography",
                }
            }
        })

        swift = export_swiftui(flat)

        self.assertIn("static let typographyDisplayLineHeight: CGFloat = 45.6", swift)


if __name__ == "__main__":
    unittest.main()
