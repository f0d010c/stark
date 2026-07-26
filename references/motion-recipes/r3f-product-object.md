# Motion recipe - R3F product object

- Product job: let the user inspect a spatial product object, material, machine, data sculpture, or generated artifact.
- Library/API: Three.js or React Three Fiber.
- Trigger: load, pointer inspection, scroll/camera beat, mode switch.
- State owner: scene controls and selected object/material state.
- Accessibility: HTML labels/controls outside canvas; poster/static fallback; reduced motion disables camera travel.
- Performance traps: high DPR, heavy post-processing, unbounded render loop, oversized textures, blank canvas on resize/mobile.
- When to remove: if the object can be clearer as SVG, video, screenshot, or CSS illustration.

Rules:

- Canvas owns spatial object only.
- Text, buttons, labels, and proof stay code-native.
- Cap DPR.
- Lazy-load scene or show poster.
- Verify nonblank canvas on desktop and mobile.

QA:

- screenshot desktop/mobile
- canvas dimensions nonzero
- pixel/screenshot nonblank
- resize/framing works
- reduced-motion fallback visible
- no WebGL console errors
