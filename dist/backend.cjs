// Figure first.
//
// The app holds a finished background result while a question is open and
// delivers it when the learner answers. A figure dispatched in the same reply
// as a question is therefore drawn in seconds and shown minutes late.
// The hold itself is left alone (nothing lands in the middle of a question);
// this only tells the teacher to order its turns so the hold has nothing to hold.

const text = `## Figures land before questions (\`visual\`)

A \`visual\` figure is usually drawn within half a minute, but the app never puts a finished figure in front of the learner while a question is open: it holds the figure and shows it only after he answers. So a question opened in the same reply as the dispatch hides the figure for exactly as long as he is working — he answers without it and sees it afterwards, when it is no use to him.

In any reply where you call \`visual\`:

- **Open no question in that reply.** No \`explain\`, no \`ask_user_question\`, no other tool that waits for his answer. The dispatch acknowledgement tells you to continue your turn; continue it in prose only (\`send_to_user\`: resolve his last answer, set the idea up in words), then end the turn. Do not mention waiting.
- **Ask in the turn the figure gives you.** The figure arrives as a new message moments later and you get a turn with it. Point him at it in a line, then ask your next question there.
- **This holds even when the next question does not read from the figure.** He should see a figure when it is made, not one answer later.
- If the figure could not be made you are told the same way: carry on in prose and ask.

Unchanged: the hold itself is deliberate — nothing lands in the middle of a question he is answering — so never try to work around it, and never dispatch a figure that would answer a prediction he has not made yet.`;

exports.activate = (ctx) => {
	ctx.registerInstructions({ agents: ["teacher"], text });
};
