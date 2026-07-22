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

## Moment 2, 12:49: review

- Should find: `siteSource: TEMPLATE` next to `siteType: TEMPLATE`. The two
  questions: what prevents a contradictory combination, and which field wins.
- Found in rehearsal: built the overlap table itself, showed `siteSource`
  fully determines `siteType`, and rejected the PR's "why not reuse" text.
  Bonus findings: no tests for the new field, missing `siteSource` is silently
  dropped from the response.
- Point the room at: the table first. Then open
  `.claude/skills/repo-review-rules/SKILL.md` and show the rule that made it
  happen. A skill is a file.
- Tip: add "Keep it short: the biggest finding first." to the prompt when
  presenting on stage.

## Moment 3, 18:05: investigation

- Should find: campaign c-778, job sj-4411 starts 16:58:02, gateway timeout
  16:58:12, second job sj-4412 starts 16:58:19, both deliver. Bucket: ours.
- Found in rehearsal: the timeline with both job ids and the timeout between
  the two clicks.
- Point the room at: the evidence lines it quotes. Then ask the room, not the
  agent: what is the fix? A guard so a double click cannot send twice.
