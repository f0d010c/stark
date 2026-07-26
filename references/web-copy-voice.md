# Web Copy And Product Voice

Use this before writing headlines, UI labels, CTAs, product proof, empty states, errors, onboarding, pricing, docs, and animated hero text. Copy is part of the interface: bad text can make strong visual design feel cheap.

## Copy brief

```md
Copy system
- Surface:
- User mode:
- Copy job: explain / prove / guide / compare / warn / recover / sell / orient
- Voice:
- Hero headline:
- Proof labels:
- CTA:
- State/error copy:
- Banned phrases:
- Specifics to include:
- QA checks:
```

## Research-backed rules

- GOV.UK content guidance treats plain English as mandatory and frames content design as planning, writing, and managing content so users can complete tasks: https://www.gov.uk/guidance/content-design/writing-for-gov-uk
- Material Design writing guidance says text should be understandable by anyone, anywhere, regardless of culture or language: https://m1.material.io/style/writing.html
- Apple HIG writing guidance emphasizes clear, concise, useful interface text and platform-appropriate terminology: https://developer.apple.com/design/human-interface-guidelines/writing
- NN/g usability heuristics require match between system and real world, error prevention, recognition over recall, and useful error recovery: https://www.nngroup.com/articles/ten-usability-heuristics/

## Universal ban list

Reject these unless the brief explicitly demands parody or a known brand voice:

- "Built for modern teams"
- "Powered by AI"
- "AI-powered" without saying what the AI does
- "Reimagined"
- "Redefining"
- "The new way to"
- "Next level"
- "10x faster"
- "10x productivity"
- "Seamless"
- "Supercharge"
- "Unlock"
- "Elevate your workflow"
- "Delightful"
- "Beautiful, intuitive, fast"
- "Thoughtfully designed"
- "Crafted with care"
- "Try free for 14 days" unless true
- "Lorem ipsum" or placeholder copy

If the line could fit any SaaS homepage, rewrite it around the product object, user action, proof, or risk.

## Replacement patterns

| Weak copy | Stronger pattern |
|---|---|
| "Powered by AI" | Name the output, decision, or artifact the model produces |
| "10x faster" | Use a real metric, time, count, or omit the claim |
| "Built for modern teams" | Name the actual role or workflow |
| "Seamless workflow" | Name the step removed or the handoff preserved |
| "Unlock insights" | Name the question the screen answers |
| "Delightful events start here" | Name the event object, audience, or action |
| "Error occurred" | State what failed, what was preserved, and what to do next |
| "Manage settings" | Name the exact setting group or consequence |

## Surface voice matrix

| Surface | Voice | Headlines | Body/UI | Avoid |
|---|---|---|---|---|
| Campaign/editorial | precise, memorable, image-led | short position or object name | sensory/proof details | generic value props |
| Developer tool | technical, direct, concrete | workflow or artifact | exact commands, states, files, runs | vague "ship faster" claims |
| AI/media launch | cinematic but specific | transformation or output | prompt, model, frame, timeline, artifact | "AI magic" |
| Dashboard/admin | operational | status or queue thesis | owner, time, risk, next action | playful marketing voice |
| Editor/canvas | tool-like | artifact or mode | selected state, undo, export, constraints | copy that competes with canvas |
| Checkout/pricing | calm, explicit | plan or decision | price, terms, cancellation, recovery | cleverness near money |
| Docs/API | instructional | task outcome | steps, examples, constraints | brand poetry |
| Agent/tool run | traceable | work state | plan, tool, artifact, blocked reason, retry | spinner-only "working..." copy |

## Hero copy rules

- Hero headline should usually be 2-8 words.
- The headline should name the product object, user outcome, or transformation.
- Supporting copy should answer one concrete question: what is it, who is it for, what changes, or why trust it?
- Do not make the CTA wait for the animation.
- If the hero art already carries drama, keep the text quieter.
- Do not copy a reference site's headline rhythm when transforming references.

Examples:

- Weak: "Delightful events start here."
- Better: "Publish the room before tickets sell."
- Weak: "Supercharge your workflow."
- Better: "Review every failed deploy from one queue."
- Weak: "AI-powered video creation."
- Better: "Turn a prompt into a timed shot list."

## Product proof labels

Hero art, screenshots, diagrams, and dashboards need real labels, not filler.

Good proof labels include:

- status: `blocked`, `queued`, `review needed`, `synced 2m ago`
- owner/source: `Maya`, `GitHub`, `Stripe`, `policy engine`
- time: `09:42`, `3m remaining`, `last run 12:08`
- action: `retry`, `assign`, `approve narrower scope`, `copy trace`
- artifact: `diff`, `invoice`, `frame 023`, `SAML trace`, `render log`
- risk/cost: `$184k`, `renewal at risk`, `admin scope`, `destructive`

Bad proof labels:

- "Dashboard"
- "Analytics"
- "Feature one"
- "Smart insights"
- "All-in-one"
- fake unreadable UI text inside an image

## CTAs

CTA text should describe the action.

| Context | Good CTA | Avoid |
|---|---|---|
| Product demo | `Inspect sample run` | `Learn more` as the only action |
| Checkout | `Start monthly plan` | `Continue` without context |
| Docs | `Copy install command` | `Get started` everywhere |
| Editor | `Export selected frames` | `Done` for irreversible output |
| Permissions | `Request admin approval` | `Allow` without scope |
| Agent run | `Stop run`, `Retry failed step`, `Open artifact` | `OK` |

Use one primary CTA per viewport or surface. Secondary actions can be quieter but must remain understandable.

## State and recovery copy

Every real product surface needs useful state text.

| State | Copy must answer |
|---|---|
| Empty | Why is this empty? How does data arrive? What can I do now? |
| Loading | What is happening? Is the layout stable? Can I cancel? |
| Partial | What is missing? What still works? |
| Permission | What is blocked? Who can grant access? What remains visible? |
| Error | What failed? Was my input preserved? What can I do next? |
| Success | What changed? Where should I go next? |
| Long-running | What is the plan, progress, artifact, stop/retry/resume path? |

Error formula:

```text
[Thing] failed because [specific reason]. [Preserved state]. [Next action].
```

Example:

```text
Webhook delivery timed out after 10s. The payload is still saved. Retry, edit the URL, or copy the trace.
```

## Direction voice notes

### Editorial Swiss

- Short declarative sentences.
- One italic emphasis in a headline can work.
- Specific craft details beat abstract belief statements.
- Avoid "we believe", "crafted", and vague mission copy.

### Tactile Brutalism

- Blunt, direct, numbered.
- All caps can work for labels.
- No softeners.
- Avoid polished SaaS reassurance.

### Type-As-Hero

- Single word or short phrase can carry the page.
- Body copy should be quiet and precise.
- Pull quotes can become layout.
- Avoid decorative imagery competing with text.

### Glow + Grain

- Slightly cinematic, but still concrete.
- Let the atmosphere be visual; keep claims grounded.
- Avoid "made for the next decade" unless it is supported by proof.

### Industrial Mono

- Use specs, version, run, status, and trace language.
- `key: value` labels work well.
- Avoid all-mono paragraphs unless the product is terminal/editor-heavy.

### Active Bento

- Tiles need short titles and one-line value.
- Details belong in expanded views.
- Avoid stuffing paragraphs into every tile.

## QA checks

- No banned phrase appears.
- Headlines are concrete and short enough for mobile.
- CTA text describes the action.
- Proof labels refer to real product states, artifacts, owners, time, cost, or risk.
- Error and permission states offer recovery.
- Pricing/checkout copy keeps cost, cancellation, renewal, and risk near the action.
- Docs copy is procedural, not poetic.
- AI product copy names what the model produces or changes.
- Animated hero copy does not copy the reference site's structure.
- Important text is real HTML/native text, not baked into bitmap, video, Rive, Lottie, or canvas.
