---
name: repo-review-rules
description: This repo's review rules. Read this file before reviewing any diff in this repo, even if another review skill is loaded.
---

# Repo review rules

Team knowledge, written down. The agent reads this before every review.
When it misses something, we add the lesson here. Plain words, one example each.

## Always check

1. Tests cover the change. New behavior with no test is a finding.
2. Old sites: fixtures include sites that predate the `settings` object. Any code
   that touches `settings` must handle a site without it.
3. Names say what the thing is in this domain. `processData` is a finding.
4. One method does one thing. Fifty lines is a finding.

## New field or enum: semantic-overlap check (always on)

Trigger: the diff adds a field next to a similar one.

1. Read the existing field's full value list from main, not just the diff.
2. Build the overlap table yourself, value by value.
3. Do not just accept the author's "why not reuse X". Check it.

Risk to name: when two fields overlap, the same situation can be written two
ways, and readers of the data can get contradicting answers. Ask what prevents
a contradictory combination, and which field wins if they disagree.
