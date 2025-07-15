---
layout: post
title: "How to get started with GitHub Copilot: Tips for experienced coders"
excerpt: "If you’re trying to figure out how to make use of AI in your everyday programming work, here’s where to start."
author: Alice Chen
image: /assets/images/vscode-copilot.png
thumb: /assets/images/thumbs/vscode-copilot.jpg
tags: ai copilot tooling tutorial vscode
---

# How to get started with GitHub Copilot: Tips for experienced coders

For years I’ve been writing everything from bash scripts to code fixes using my go-to editor: vi / vim. But I also find that an IDE like VSCode is great when I need to see the whole picture. Routine tasks don’t need extra help — but AI tools like GitHub Copilot and Gemini help me when I’m working in a new language or need a quick scaffold to build on. If you’re trying to figure out how to make use of AI in your everyday programming work, here’s where to start.

## What it’s good for

Despite the hype, AI is better at some tasks than others. You’ll have fewer headaches if you play to its strengths. Things I’ve found it useful for:

Scaffolding a new project in a particular language or quick prototyping of features. Sometimes I need to throw together something in a specific language that I don’t have experience with. I can give the AI a set of tasks and have it generate the needed code.

Q\&A help — the AI can give me a technical description of a piece of code, or show how to construct a specific SQL query based on a partial example.

Writing docs and READMEs. I can use it to write inline documentation for a function, or create instructions to build and install the package. Watch: [Prompting GitHub Copilot](https://youtu.be/HSP1XrLQxXM)

This one is a big time saver: I can use it to generate additional test data from an existing data set. This is great when you’re load-testing and need to go from 3 to 3000\.

## How to set things up

If you mostly work from a terminal window, the first thing you’ll need is a code editor that integrates with AI tools. VSCode is a popular option because it integrates with basically everything. If you go another route, make sure the tool you pick has an extension for the AI services you intend to use.

You can use vi key bindings in VSCode too. Sometimes the GitHub Copilot extension can get confused by vi macros though, so keep in mind you may need to disable it temporarily if things are acting up. I find that switching to insert mode before triggering GitHub Copilot can help too. Watch: [Setting up Visual Studio Code with Vi / Vim  and GitHub Copilot](https://youtu.be/xYFf7oz6Uic)

GitHub Copilot has three modes to switch between:

- **Ask** will let you interact with the chat agent to get information (like the examples above).   
- **Agent** has the entire workspace in context, so it may not be as effective on bigger projects if the project has not been indexed in some way. This is the mode you would use to write larger features across multiple files, or when you don’t know where in the code the change should happen.  
- **Edit** is targeted to selected file(s) or code section(s). You select the context where it can act.

Context is a key issue because it affects token usage, performance, and accuracy. Whatever text or data is in context for the AI agent determines the scope of operations to answer questions, make edits, or update files. You’ll get the best results if you limit the AI context only to what you want it to work with. Edit mode will give you the most control, or you can use Agent mode when creating new files or making edits across multiple files at once. Context grows as you work and after a certain point the AI may start to seem like it’s going in circles instead of doing what you want. If that happens, click to start a new chat. It will automatically add the current open file to a new context.

GitHub Copilot can make use of several different AI models, which will also impact how effective it is for your purposes. If you’re using VSCode, there’s a selection box for this to the right of the mode setting in the GitHub Copilot window. Gemini has the largest context window so it’s the best choice for handling multiple large files at once. It also seems to be the best option for Terraform, Kubernetes, and Golang. For other coding tasks, Claude is my pick. Watch: [GitHub Copilot Settings in Visual Studio Code](https://youtu.be/J90oosEIvjc)

Don’t assume that newer models will necessarily be more effective. Newer models incorporate additional data and training that may lead to different, oftentimes unexpected, results. I have had several encounters with a new model giving me unexpected results. Most of the time the solution is to find a slightly different prompt to get what you want. If you want to use the newer models then test it out for a while so you get to know its quirks before completely changing over to the new model for everything. If you find that a particular model is working well for you, stick with it until you find a prompt that works with the newer models.

Finally, you’ll need a ‘rules for AI’ file to feed the agent to ensure it interacts with you in a specific way and uses the specific tools and package versions you need. You can also give it guidelines for the output you expect, like “create clear and readable code”. This can include things from your standard formatting requirements, like ending all lines with a semicolon. Keep adding to it when the AI does something you don’t want, like using `async await` instead of `.then` or vice versa. Watch: [GitHub Copilot Custom Instructions](https://youtu.be/hnDFj7u3HWs)

To wrap up: using AI for coding may feel a little fiddly at first, but it can be helpful as part of your workflow. If you get the basics down, you’ll be able to experiment and see what works best for you. Love it or hate it, this is becoming the industry standard for software engineering. I hope these tips help you move past the pain points so you can get work done.
