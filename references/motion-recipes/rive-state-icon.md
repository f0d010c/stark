# Motion recipe - Rive state icon

- Product job: show a compact interactive state machine, brand mark, onboarding illustration, or status icon.
- Library/API: Rive web runtime.
- Trigger: hover, selected state, progress, validation, permission, success/error.
- State owner: named Rive state-machine inputs plus surrounding app state.
- Accessibility: important label/status remains real text outside the Rive artboard; static fallback/poster exists.
- Performance traps: too many looping artboards, essential UI baked into animation, brittle frame-based control.
- When to remove: if CSS/SVG can communicate the state with less runtime cost.

Rules:

- Drive animation through named inputs.
- Keep important UI text code-native.
- Pause/stop when offscreen when practical.
- Use for authored illustration, not dense UI.

QA:

- fallback visible
- state-machine inputs map to app states
- reduced motion pauses or shows static state
- no unreadable text inside animation
