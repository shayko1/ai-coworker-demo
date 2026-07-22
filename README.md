# AI as a Coworker: demo repo

The live-demo repo for the Kickstart session. Three moments, each under three
minutes, each using a prompt straight from the deck. Plain Node, nothing to
install.

Deck: https://deckdrop.live/shayk/ai-as-a-coworker (source in `deck/index.html`)

## Before you start

You need Node, git, and a coding agent. On a Wix machine, Claude Code and
Cursor are part of the standard setup. Check yours:

```
node --version
claude --version
```

If `claude` is missing, install it once with npm: the package is
`@anthropic-ai/claude-code`, installed globally from the public registry.

Then get the repo and start the agent inside it:

```
git clone https://github.com/shayko1/ai-coworker-demo.git
cd ai-coworker-demo
claude
```

Cursor works the same way: open this folder, then paste the prompts into the
agent panel. The agent must run inside this folder, that is how it sees the
code, the fixtures, and the review rules.

Quick check that everything works: `node src/cli.js 9d41-a2f7` prints
metadata for a healthy site.

## Moment 1, 09:15: debug with a theory

The service throws for some sites. See it:

```
node src/cli.js 3f2a-77b1
```

Open your agent in this repo and paste the prompt from the deck:

```
getSiteMetadata returns 500 for some sites.
The handler is src/siteMetadataService.js, getMetadata.
Expected: metadata response. Actual: TypeError.
Reproduce: node src/cli.js 3f2a-77b1 fails every time. New sites work.

Before you change anything: give me your two best
suspects, and how we prove each one.
```

Point out: it reads the code and the fixtures itself, names the missing
`settings` object on old sites, and proposes how to prove it before any fix.

Then fix it, the same four moves as the deck:

```
The first suspect was right. Fix it:
old sites without settings fall back to locale "en", timezone "UTC".
Plan first. Small diff.
Then run node test/run-tests.js, show the output,
and add a test that covers an old site.
```

Point out: it plans before touching code, the diff stays small, and green
tests are the finish line. Reset for the next run: `git checkout .`

## Moment 2, 12:49: the review comment

There is an open PR that adds `siteSource` with the value `TEMPLATE`, right
next to `siteType`, which already has `TEMPLATE`. Ask the agent:

```
Walk me through the open PR: what changed, and why.
Which parts are risky? What do the tests not cover?
Check it against the rules in .claude/skills/repo-review-rules/SKILL.md.
Questions only. I make the call on each one.
```

Point out: the semantic-overlap rule it applies comes from
`.claude/skills/repo-review-rules/SKILL.md`. Open the file. A skill is a file. You can
edit it, live, during the session.

## Moment 3, 18:05: the investigation

A support ticket says a campaign email went out twice. The evidence is in
`logs/send-jobs.log`. Ask:

```
Support ticket: a site owner says campaign c-778 was sent twice
to every subscriber. The logs are in logs/send-jobs.log.
Is this ours? Build me a timeline of what happened.
Show the evidence for each step.
```

Point out: two send jobs for the same campaign, nine seconds apart, both
delivered, and a gateway timeout in between. The agent finds it; you judge it;
the fix you decide on is a guard so a double click cannot send twice.

## Workshop

Clone this repo and run Moment 1 end to end yourself: theory, proof, fix,
and a test that covers old sites.
