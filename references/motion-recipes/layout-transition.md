# Motion recipe - layout transition

- Product job: preserve orientation when an item expands, moves, filters, or opens detail.
- Library/API: Motion for React layout animation, View Transitions for route/detail where suitable.
- Trigger: click, selection, tab change, filter, route change.
- State owner: selected item or route segment.
- Accessibility: focus remains on the selected item or moves to the opened panel; reduced motion becomes fade/no movement.
- Performance traps: animating dense tables, animating height for many rows, layout thrash from measuring on every frame.
- When to remove: if the change is tiny, repeated very often, or makes scanning slower.

Pattern:

```tsx
import { motion, useReducedMotion } from "motion/react";

const reduce = useReducedMotion();

<motion.div
  layout
  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 28 }}
>
  {children}
</motion.div>
```

QA:

- selection remains clear before/during/after motion
- keyboard selection works
- reduced motion preserves state change
- no table/list jump on hover
