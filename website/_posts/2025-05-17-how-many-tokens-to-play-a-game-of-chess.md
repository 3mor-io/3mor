---
layout: post
title: "How Many AI Tokens to Play a Game of Chess?"
excerpt: "Just because AI tokens are cheap today doesn’t mean they’ll stay that way."
author: Beth Fuller
image: /assets/images/chess.png
thumb: /assets/images/thumbs/chess.png
tags: ai aiops devops security
---

> Just because AI tokens are cheap today doesn’t mean they’ll stay that way.

When cloud adoption peaked around 2015, everyone migrated to “save money.” But many teams didn’t fully understand their on-prem costs, nor did they have a realistic plan for managing spend once they migrated. It’s as though we forgot about all our best practices.*  
*In 2015, cloud spend was projected to grow from [$49B to $67B](https://www.forbes.com/sites/louiscolumbus/2015/09/27/roundup-of-cloud-computing-forecasts-and-market-estimates-q3-update-2015/) by 2018\. In 2023? It hit [**$563.6 billion**, with **$678.8 billion**](https://www.cloudzero.com/state-of-cloud-cost/) forecasted for 2024.

Alongside that growth came tool sprawl, security risk, and unexpected costs. Sound familiar? AI token usage is on a similar path only this time, the underlying mechanics are even more opaque.

## What’s a Token, Really?

Let’s demystify it. A “token” is just a chunk of text (words, punctuation, etc.) that an AI model processes. But the cost and impact of using tokens isn’t always clear especially when engineers interact with AI in iterative cycles.

You might wonder:

* How many tokens do I use per prompt?
* What does it actually cost?
* Should I care, if they’re so cheap?

The answer is **yes**. Because scale hides cost until it doesn’t. Think of those surprise cloud bills.

## Understanding Context Windows & Token Accumulation

Let’s look at how developers commonly use AI in practice particularly when “vibe coding,” which is where prompts evolve over time rather than being sent all at once.

Imagine each set of 10,000 tokens as a crow: 🐦‍⬛

### Example: Three-Crow Vibe Coding Session

1. 🐦‍⬛ Initial Prompt
   * You upload a small repo, TypeScript rules in Markdown, README, visuals, and your prompt. That’s your initial 10k tokens.
2. 🐦‍⬛🐦‍⬛ Model Response
   * The AI responds using more tokens. This response, plus your initial input, is now part of the context for the next round.
3. 🐦‍⬛🐦‍⬛🐦‍⬛ Follow-up Prompt
   * You send a second prompt, which includes all previous input and output — stacking more tokens.

This adds up quickly — especially on large codebases.

Most models (e.g., GPT-4 Turbo) max out at 200k tokens. For anything complex, like Shopify or HubSpot sized repos, you’ll hit that limit fast if you're not careful. In fact, you can’t send a full repo. You need to have a level of expertise to parse a crows worth of context in your initial prompt.

## Best Practices for SRE & AppSec Leaders

Uncontrolled token usage presents three key risks:

* **Cost Overruns**
* **Security Exposure**
* **Operational Complexity**

Here’s how to keep your AI interactions efficient:

* **Explicitly scope code slices**: Only include relevant modules or services.
* **Externalize business rules**: Use Markdown docs instead of bloating prompts.
* **Link strategically**: Reference specific parts of your README or API docs.
* **Document architecture**: Provide structural context only where necessary.
* **Use visuals sparingly**: Only include component libraries or mockups when critical.
* **Write focused prompts**: Avoid solving multiple problems at once.

Your goal: **include only what’s essential to solve the task at hand**.

## Token Costs Today (But Not Forever)

Here’s what OpenAI charges for GPT-4 Turbo as of now:

| **Model** | **Input Tokens** | **Output Tokens** |
| :---- | :---- | :---- |
| GPT-4 Turbo | $0.01 / 1,000 tokens | $0.03 / 1,000 tokens |

This seems cheap and it is. But AI compute is expensive. [OpenAI still operates at a loss](https://www.lesswrong.com/posts/CCQsQnCMWhJcCFY9x/openai-lost-usd5-billion-in-2024-and-its-losses-are) but investors won’t tolerate that forever. Sam Altman himself has talked about how much OpenAl loses with every [“please” and “thank you.”](https://www.vice.com/en/article/telling-chatgpt-please-and-thank-you-costs-openai-millions-ceo-claims/) It’s only a matter of time: token costs will rise.

> Just like cloud costs, token costs will follow a hockey stick trajectory.

What feels like a minor cost today can quickly become **a multi-thousand-dollar surprise** if you're running CI/CD workflows or incident response playbooks on top of AI agents.

## Optimize Early — Before It’s Too Late

If you're a platform, AppSec, or SRE leader, think of AI tokens like CPU cycles or S3 buckets:

* You track them.
* You optimize them.
* You don’t leave them unmanaged.

Educate your teams. Create internal best practices. Monitor usage.

Just like we learned in the cloud migration, **getting efficient early pays off in scale, security, and speed**.

## ***🔗 Further Reading***

* [*AI Tokens Explained: Complete Guide to Usage, Optimization, & Cost Management*](https://guptadeepak.com/complete-guide-to-ai-tokens-understanding-optimization-and-cost-management/)  
* [*OpenAI Tokenizer Tool*](https://platform.openai.com/tokenizer)
