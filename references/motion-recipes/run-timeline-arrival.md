# Motion recipe - run timeline arrival

- Product job: show progress, tool calls, artifacts, blocked states, and recovery without feeling like a spinner.
- Library/API: CSS for status pulses, Motion for item arrival/layout continuity.
- Trigger: new plan step, tool call, artifact, blocked state, retry/resume.
- State owner: run status, active step, events, artifacts, blocked reason.
- Accessibility: statuses are text, not color-only; live region only for important updates; stop/retry controls are keyboard reachable.
- Performance traps: animating long logs, unbounded event lists, constant pulse on many rows.
- When to remove: when the run is short enough that static progress is clearer.

Choreography:

1. New step enters with small vertical offset.
2. Active step gets restrained status pulse.
3. Tool call row expands with output preview.
4. Artifact moves into shelf or inspector.
5. Blocked/error state interrupts the rhythm and takes priority.

QA:

- queued/running/blocked/failed/succeeded/cancelled states exist
- stop/retry/resume visible
- logs scroll inside their own region
- reduced motion keeps updates visible
