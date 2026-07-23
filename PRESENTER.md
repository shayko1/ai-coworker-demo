# Presenter cheat sheet

Three moments, under three minutes each. For each one: what the agent should
find, what it found in rehearsal, and where to point the room.

## Moment 1, 09:15: debug

- Should find: old sites in `data/sites.json` have no `settings`, and
  `getMetadata` reads `site.settings.locale` unguarded.
- Found in rehearsal: names the missing `settings` object, proposes proving it
  by running `node src/cli.js 3f2a-77b1` against a new site. Often also flags
  that the tests only cover new sites.
- Point the room at: the last line of the prompt, suspects and proof before
  any fix. That one line is the lesson.

## Moment 2, 14:30: review

- Should find: `state` duplicates `status` value for value; only ARCHIVED is
  new. The two questions: what prevents a contradictory combination (c-201 is
  already status SENT, state ARCHIVED), and which field wins.
- Also there to find: `listByState` is a copy of `listByStatus`, and the new
  field has no tests.
- Point the room at: the table first. Then open
  `.claude/skills/repo-review-rules/SKILL.md` and show the rule that made it
  happen. A skill is a file.
- Tip: add "Keep it short: the biggest finding first." to the prompt when
  presenting on stage.

## Moment 3, 13:20: make the reviewer smarter

- The gap is planted: no rule covers near-duplicate functions, and PR #2 has
  one (`listByState` copies `listByStatus`).
- They add rule 5 to `.claude/skills/repo-review-rules/SKILL.md`, re-run the
  Moment 2 prompt, and the review cites their rule.
- Point the room at: the diff between the two runs. One sentence of markdown
  changed the reviewer. No model was retrained.

## Moment 4, 18:05: investigation

- Should find: campaign c-778, job sj-4411 starts 16:58:02, gateway timeout
  16:58:12, second job sj-4412 starts 16:58:19, both deliver. Bucket: ours.
- Found in rehearsal: the timeline with both job ids and the timeout between
  the two clicks.
- Point the room at: the evidence lines it quotes. Then ask the room, not the
  agent: what is the fix? A guard so a double click cannot send twice.
