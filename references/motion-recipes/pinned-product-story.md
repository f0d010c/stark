# Motion recipe - pinned product story

- Product job: explain one product transformation through a controlled proof sequence.
- Library/API: GSAP ScrollTrigger for authored timelines; native sticky + CSS/JS when simpler.
- Trigger: scroll through a proof section.
- State owner: section progress.
- Accessibility: normal stacked sections or static frames for reduced motion; CTA remains reachable.
- Performance traps: long scroll traps, many pinned sections, animating layout properties, no mobile fallback.
- When to remove: if static before/after, table, or short video proves the point faster.

Choreography:

1. Establish the object.
2. Reveal input or initial state.
3. Transform through 2-3 beats.
4. Show proof state with labels.
5. Resolve to action or next section.

QA:

- one pinned section is usually enough
- mobile uses simplified stacked frames
- reduced motion shows all important frames
- scroll range does not feel trapped
- no console/timeline cleanup errors
