# AI as a Coworker: demo repo

The live-demo repo for the Kickstart session. Three moments, each under three
minutes, each using a prompt straight from the deck. Plain Node, nothing to
install.

Deck: https://deckdrop.live/shayk/ai-as-a-coworker

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

## Moment 2, 12:49: the review comment

There is an open PR that adds `siteSource` with the value `TEMPLATE`, right
next to `siteType`, which already has `TEMPLATE`. Ask the agent:

```
Walk me through the open PR: what changed, and why.
Which parts are risky? What do the tests not cover?
Check it against our review skill.
Questions only. I make the call on each one.
```

Point out: the semantic-overlap rule it applies comes from
`.claude/skills/review/SKILL.md`. Open the file. A skill is a file. You can
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

## Homework

Clone this repo, run Moment 1 yourself, and fix the bug with the agent:
theory first, proof second, then the fix, then a test that covers old sites.

## Demo notes for the presenter

- Rehearse each moment once before the session. Agents word things
  differently run to run; the findings stay the same.
- Keep screenshots of one good run as a fallback.
- Tests pass on main on purpose: they only cover new sites. Whether the
  agent flags that gap is a nice unscripted moment in Moment 1.
