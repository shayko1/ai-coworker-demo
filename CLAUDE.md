# ai-coworker-demo

A tiny site-metadata service used in the "AI as a Coworker" Kickstart session.

## Conventions

- Plain Node, no dependencies. Run things with `node`, nothing to install.
- Tests: `node test/run-tests.js`. Green before any PR.
- Try a single site: `node src/cli.js <msid>`.
- Metadata responses must always include `locale` and `timezone`.
- Site fixtures live in `data/sites.json`. Some sites are old and predate the `settings` object.
- Review rules live in `.claude/skills/review/SKILL.md`. Read them before reviewing any diff.
