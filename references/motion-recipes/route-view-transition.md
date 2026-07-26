# Motion recipe - route view transition

- Product job: preserve orientation between list/gallery/docs route and detail route.
- Library/API: View Transitions API, Motion shared layout, or framework route transition.
- Trigger: navigation from object to detail, docs section change, gallery open.
- State owner: route segment and selected object.
- Accessibility: focus moves to the destination heading or detail panel; fallback is instant/fade; browser back restores orientation.
- Performance traps: hiding loading/error states, animating huge bitmaps, fighting browser scroll restoration.
- When to remove: if route changes are frequent operational actions where speed matters more than continuity.

Rules:

- Use shared element transition only for the object that stays conceptually the same.
- Do not animate every card.
- Preserve scroll/focus deliberately.
- Provide no-op fallback when View Transitions are unsupported.

QA:

- direct URL load works
- back/forward works
- focus is visible after navigation
- loading/error/permission routes are not hidden by transition
