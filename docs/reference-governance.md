# Stark reference governance

Stark gets stronger when references solve real failure modes. It gets weaker when references only add more taste words.

## Admission test

Add a new reference only when it does at least one of these:

- Covers a missing design failure mode.
- Replaces duplicated guidance with a clearer source of truth.
- Unlocks a new measurable quality eval.
- Adds a platform/library decision that changes implementation behavior.
- Provides a compact recipe agents can actually follow before code.

Reject a new reference when it:

- Only says "make it polished", "modern", or "beautiful".
- Duplicates an existing checklist with different adjectives.
- Encourages generic decoration without product behavior.
- Requires loading broad docs for a narrow task.
- Adds a library without clear use cases, anti-use cases, and quality gates.

## Required header

Every new runtime reference should start with:

```md
# Reference name

Use when:
- ...

Do not use when:
- ...

Improves:
- Platform idiom / product specificity / state coverage / hierarchy / originality / typography / motion / responsiveness / assets / accessibility / dependency restraint
```

## Runtime size rule

Prefer small, sharp references and indexes.

- Root `SKILL.md` should route.
- Platform skills should preserve platform contracts.
- `references/ui-patterns/README.md` should decide which 2-4 narrow files to read.
- Full generated apps, temporary previews, and Playwright artifacts should stay out of runtime.

## Review checklist

Before merging a reference:

- It names the trigger context.
- It names the failure mode solved.
- It avoids copying trade dress, brand assets, or proprietary layouts.
- It includes quality gates or examples specific enough to audit.
- It does not force every design task to load more files.
