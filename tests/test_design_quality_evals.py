import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
EVALS = ROOT / "evals" / "design-quality-prompts.json"
GOAL_COVERAGE = ROOT / "evals" / "design-goal-coverage.json"


class DesignQualityEvalTests(unittest.TestCase):
    def setUp(self) -> None:
        with EVALS.open(encoding="utf-8") as handle:
            self.data = json.load(handle)

    def test_eval_file_has_required_shape(self) -> None:
        self.assertIn("tags", self.data)
        self.assertIn("prompts", self.data)
        self.assertGreaterEqual(len(self.data["prompts"]), 10)

        for prompt in self.data["prompts"]:
            self.assertIn("id", prompt)
            self.assertIn("prompt", prompt)
            self.assertIn("expected", prompt)
            self.assertTrue(prompt["id"])
            self.assertTrue(prompt["prompt"])
            self.assertGreaterEqual(len(prompt["expected"]), 4)

    def test_tags_cover_goal_dimensions(self) -> None:
        tags = set(self.data["tags"])
        required = {
            "design_orchestration",
            "design_director_runbook",
            "design_preflight",
            "design_mode_router",
            "ambition_calibration_contract",
            "ambition_surface_recipe",
            "taste_calibration_system",
            "variant_selection_loop",
            "product_intent_matrix",
            "surface_playbook_matrix",
            "generation_blueprint_contract",
            "prompt_to_build_compiler",
            "implementation_pattern_library",
            "signature_surface_recipe",
            "navigation_information_architecture",
            "experience_continuity_system",
            "pattern_selection",
            "composition_system",
            "layout_precision_system",
            "spatial_rhythm_density_system",
            "progressive_disclosure_information_scent",
            "adaptive_composition_system",
            "responsive_adaptation_gate",
            "page_proof_architecture",
            "conversion_proof_system",
            "animation_direction",
            "premium_animation_direction",
            "animation_composition_cohesion_gate",
            "choreography_state_machine",
            "motion_timing_easing",
            "motion_pattern_atlas",
            "motion_library_playbook",
            "designer_authored_motion_handoff",
            "motion_frame_qa_contract",
            "typography_system",
            "typography_strategy",
            "font_selection_matrix",
            "typography_pairing_lab",
            "type_recipe",
            "font_implementation_contract",
            "rendered_typography_quality_gate",
            "copy_system",
            "copy_quality_gate",
            "product_data_content_system",
            "text_resilience_localization_system",
            "style_diversity_matrix",
            "visual_language_decision_matrix",
            "design_fingerprint_diversity_gate",
            "brand_identity_motif_system",
            "native_desktop_app_quality",
            "execution_protocol",
            "component_anatomy",
            "component_api_variant_contract",
            "component_visual_composition",
            "interaction_state_matrix",
            "input_interaction_model",
            "interaction_physics_direct_manipulation",
            "transition_continuity_contract",
            "interactive_prototype_contract",
            "component_state_gallery",
            "story_driven_qa_harness",
            "design_system_production_loop",
            "microinteraction_affordance_system",
            "form_state_validation_system",
            "material_system",
            "visual_token_recipe",
            "color_material_contrast_gate",
            "visual_finish_system",
            "theme_mode_density_system",
            "token_implementation_contract",
            "asset_realism_matrix",
            "asset_production",
            "art_direction_asset_board",
            "media_loading_contract",
            "icon_illustration_system",
            "frontend_technique_matrix",
            "capability_maximization_matrix",
            "library_capability_fit",
            "capability_recipe_cookbook",
            "frontend_library_production_preset",
            "library_implementation_blueprint",
            "library_source_verification_gate",
            "capability_stack_rendered_gate",
            "library_orchestration_system",
            "stack_blueprint",
            "component_architecture",
            "product_library_playbook",
            "product_library_composition",
            "library_de_defaulting_system",
            "reference_board",
            "research_synthesis_contract",
            "benchmark_repair_loop",
            "motion_recipe",
            "quality_metrics",
            "generated_output_scorecard",
            "quality_calibration_ladder",
            "dogfood_generation_loop",
            "dogfood_batch_matrix",
            "showcase_selection_quality",
            "rendered_quality_gate",
            "first_draft_triage_loop",
            "design_critique_panel",
            "design_taste_diagnostics",
            "visual_repair_playbook",
            "feedback_memory_loop",
            "qa_evidence_contract",
            "browser_qa_matrix",
            "runtime_evidence_regression",
            "frontend_quality_automation_gate",
            "implementation_review_loop",
            "visual_qa",
            "visual_qa_workflow",
            "usability_states",
            "task_ergonomics",
            "first_run_empty_state_system",
            "usability_pattern_matrix",
            "usability_heuristic_evaluation",
            "usability_scenario_testing",
            "task_flow_acceptance_harness",
            "rendered_usability_acceptance_gate",
            "reference_transformation",
            "responsive_containment",
            "accessibility",
            "accessibility_interaction_contract",
            "accessibility_acceptance_gate",
            "advanced_visual_system",
            "design_acceptance_gate",
            "performance_budget_contract",
            "performance",
            "data_viz_library",
            "dashboard_insight_hierarchy",
            "ux_measurement_instrumentation",
        }

        self.assertTrue(required.issubset(tags))

    def test_prompt_expectations_reference_known_tags(self) -> None:
        tags = set(self.data["tags"])

        for prompt in self.data["prompts"]:
            self.assertTrue(set(prompt["expected"]).issubset(tags), prompt["id"])

    def test_goal_dimensions_are_exercised_by_multiple_prompts(self) -> None:
        counts = {tag: 0 for tag in self.data["tags"]}
        for prompt in self.data["prompts"]:
            for tag in prompt["expected"]:
                counts[tag] += 1

        for tag in [
            "motion_library_playbook",
            "motion_pattern_atlas",
            "motion_frame_qa_contract",
            "designer_authored_motion_handoff",
            "design_preflight",
            "design_mode_router",
            "ambition_calibration_contract",
            "ambition_surface_recipe",
            "design_director_runbook",
            "taste_calibration_system",
            "variant_selection_loop",
            "product_intent_matrix",
            "surface_playbook_matrix",
            "generation_blueprint_contract",
            "prompt_to_build_compiler",
            "implementation_pattern_library",
            "signature_surface_recipe",
            "navigation_information_architecture",
            "experience_continuity_system",
            "premium_animation_direction",
            "animation_composition_cohesion_gate",
            "choreography_state_machine",
            "motion_timing_easing",
            "typography_system",
            "font_selection_matrix",
            "typography_pairing_lab",
            "type_recipe",
            "font_implementation_contract",
            "rendered_typography_quality_gate",
            "copy_system",
            "copy_quality_gate",
            "product_data_content_system",
            "text_resilience_localization_system",
            "style_diversity_matrix",
            "visual_language_decision_matrix",
            "design_fingerprint_diversity_gate",
            "brand_identity_motif_system",
            "native_desktop_app_quality",
            "qa_evidence_contract",
            "implementation_review_loop",
            "visual_repair_playbook",
            "feedback_memory_loop",
            "composition_system",
            "layout_precision_system",
            "spatial_rhythm_density_system",
            "progressive_disclosure_information_scent",
            "adaptive_composition_system",
            "responsive_adaptation_gate",
            "page_proof_architecture",
            "conversion_proof_system",
            "browser_qa_matrix",
            "runtime_evidence_regression",
            "frontend_quality_automation_gate",
            "visual_qa",
            "pattern_selection",
            "accessibility",
            "accessibility_interaction_contract",
            "accessibility_acceptance_gate",
            "performance_budget_contract",
            "performance",
            "dashboard_insight_hierarchy",
            "component_anatomy",
            "component_api_variant_contract",
            "component_visual_composition",
            "interaction_state_matrix",
            "input_interaction_model",
            "interaction_physics_direct_manipulation",
            "transition_continuity_contract",
            "interactive_prototype_contract",
            "component_state_gallery",
            "story_driven_qa_harness",
            "design_system_production_loop",
            "microinteraction_affordance_system",
            "form_state_validation_system",
            "task_ergonomics",
            "first_run_empty_state_system",
            "usability_pattern_matrix",
            "usability_heuristic_evaluation",
            "usability_scenario_testing",
            "task_flow_acceptance_harness",
            "rendered_usability_acceptance_gate",
            "product_library_playbook",
            "product_library_composition",
            "library_de_defaulting_system",
            "benchmark_repair_loop",
            "visual_token_recipe",
            "color_material_contrast_gate",
            "visual_finish_system",
            "theme_mode_density_system",
            "token_implementation_contract",
            "art_direction_asset_board",
            "media_loading_contract",
            "frontend_technique_matrix",
            "capability_maximization_matrix",
            "library_capability_fit",
            "capability_recipe_cookbook",
            "frontend_library_production_preset",
            "library_implementation_blueprint",
            "library_source_verification_gate",
            "capability_stack_rendered_gate",
            "library_orchestration_system",
            "data_viz_library",
            "advanced_visual_system",
            "design_acceptance_gate",
            "ux_measurement_instrumentation",
        ]:
            self.assertGreaterEqual(counts[tag], 3, tag)

        self.assertGreaterEqual(counts["execution_protocol"], 3)
        for tag in [
            "material_system",
            "asset_realism_matrix",
            "asset_production",
            "icon_illustration_system",
            "visual_qa_workflow",
            "stack_blueprint",
            "component_architecture",
            "reference_board",
            "research_synthesis_contract",
            "motion_recipe",
            "typography_strategy",
            "quality_metrics",
            "generated_output_scorecard",
            "quality_calibration_ladder",
            "dogfood_generation_loop",
            "dogfood_batch_matrix",
            "showcase_selection_quality",
            "rendered_quality_gate",
            "first_draft_triage_loop",
            "design_critique_panel",
            "design_taste_diagnostics",
        ]:
            self.assertGreaterEqual(counts[tag], 2, tag)

    def test_dogfood_batches_have_repeatable_harness_shape(self) -> None:
        batches_path = ROOT / "evals" / "dogfood-batches.json"
        with batches_path.open(encoding="utf-8") as handle:
            data = json.load(handle)

        self.assertIn("batches", data)
        self.assertGreaterEqual(len(data["batches"]), 6)

        ids = {batch["id"] for batch in data["batches"]}
        required_ids = {
            "product_proof_landing",
            "operator_workbench",
            "agent_run_review",
            "editor_canvas",
            "animated_product_story",
            "trust_flow",
        }
        self.assertTrue(required_ids.issubset(ids))

        for batch in data["batches"]:
            for key in [
                "id",
                "surface",
                "quality_target",
                "prompt",
                "guidance_under_test",
                "required_evidence",
                "pass_bar",
                "failure_stress",
                "gallery_rule",
            ]:
                self.assertIn(key, batch, batch.get("id"))
                self.assertTrue(batch[key], batch.get("id"))

            self.assertGreaterEqual(len(batch["guidance_under_test"]), 4, batch["id"])
            self.assertGreaterEqual(len(batch["required_evidence"]), 6, batch["id"])
            self.assertIn("desktop", " ".join(batch["required_evidence"]).lower(), batch["id"])
            self.assertIn("mobile", " ".join(batch["required_evidence"]).lower(), batch["id"])
            self.assertIn("rendered quality gate", " ".join(batch["required_evidence"]).lower(), batch["id"])

    def test_goal_coverage_manifest_maps_objective_to_tags_and_files(self) -> None:
        with GOAL_COVERAGE.open(encoding="utf-8") as handle:
            coverage = json.load(handle)

        tags = set(self.data["tags"])
        counts = {tag: 0 for tag in self.data["tags"]}
        for prompt in self.data["prompts"]:
            for tag in prompt["expected"]:
                counts[tag] += 1

        required_dimensions = {
            "library_selection",
            "capability_maximization",
            "choreography_motion",
            "qa_evidence",
            "design_patterns",
            "font_typography",
            "usability",
            "research_originality",
            "implementation_handoff",
        }

        dimensions = coverage["dimensions"]
        ids = {dimension["id"] for dimension in dimensions}
        self.assertTrue(required_dimensions.issubset(ids))

        for dimension in dimensions:
            self.assertTrue(dimension["requirement"], dimension["id"])
            self.assertGreaterEqual(len(dimension["required_tags"]), 4, dimension["id"])
            self.assertGreaterEqual(len(dimension["required_files"]), 4, dimension["id"])
            self.assertTrue(set(dimension["required_tags"]).issubset(tags), dimension["id"])

            for tag in dimension["required_tags"]:
                self.assertGreaterEqual(counts[tag], 2, f"{dimension['id']}:{tag}")

            for relative_path in dimension["required_files"]:
                self.assertTrue((ROOT / relative_path).is_file(), f"{dimension['id']}:{relative_path}")


if __name__ == "__main__":
    unittest.main()
