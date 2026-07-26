# Motion recipe - native scroll reveal

- Product job: reveal sections, progress, or light parallax without heavy JavaScript.
- Library/API: CSS `animation-timeline: view()` / `scroll()` with fallback, or IntersectionObserver fallback.
- Trigger: element enters viewport or root scroll progresses.
- State owner: CSS when progressive; JS observer only for fallback.
- Accessibility: reduced motion disables travel and keeps content visible.
- Performance traps: relying on unsupported browser behavior for critical content, animating paint/layout-heavy properties.
- When to remove: if reveal delays reading or the surface is dense repeated work.

CSS shape:

```css
@supports (animation-timeline: view()) {
  .reveal {
    animation: fade-up linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
}
```

QA:

- content visible without animation support
- `prefers-reduced-motion` keeps content static
- no essential information depends on scroll reveal
- mobile section spacing still works
