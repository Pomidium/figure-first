# Figure first

A LearnHarness community plugin. It makes a figure appear when it is made, instead
of after you answer the next question.

## Why

The built-in `visual` tool draws a figure in the background, usually within half a
minute. LearnHarness holds a finished background result while a question is open
and shows it once you answer. So when the teacher dispatches a figure and asks a
question in the same reply, the figure is ready in seconds and shown minutes late.

The hold is deliberate (nothing lands in the middle of a question you are
answering) and this plugin leaves it alone. It adds one instruction for the
teacher: in a reply that calls `visual`, open no question; explain in prose, end
the turn, and ask in the turn the figure arrives in.

## Limits

- It is an instruction, so it works as far as the model follows it.
- Each figure costs one extra teacher turn.
- Teacher only, built-in `visual` only.

## Install

```sh
git clone https://github.com/Pomidium/figure-first "<plugins-directory>/figure-first"
```

The plugins directory is shown in **Settings → Community plugins**. Press
**Refresh**, enable **Figure first**, and restart LearnHarness. There is nothing to
build: `dist/backend.cjs` is the source. Requires LearnHarness 0.6.0 or newer.
