---
layout: post
title: "Unit tests so you don't lose your levitating plant"
excerpt: "AI can do some pretty interesting things. We see more and more people using it to build infra and net new tech stacks. It’s interesting to see these changes after living the DevOps evolution over the years. So I thought, if AI builds an app, what scaffolding will people need to be successful?"
author: Beth Fuller
image: /assets/images/women-at-conference-table.png
thumb: /assets/images/thumbs/women-at-conference-table.png
tags: ai devops security operations
---

AI can do some pretty interesting things. We see more and more people using it to build infra and net new tech stacks. It’s interesting to see these changes after living the DevOps evolution over the years. So I thought, if AI builds an app, what scaffolding will people need to be successful?

One thing to know when working with a tool that is non-deterministic like GenAI is that you HAVE TO HAVE best practices in place. Best practices are the required maintenance to keep things running.

To understand why, let's play a game! Look at three AI generated pictures and find the differences.

Image 1

[![Futuristic office illustration 1](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fo9p55b8mluvm036hvb0o.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fo9p55b8mluvm036hvb0o.png)

Image 2

[![Futuristic office illustration 2](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy1vely06eq13k4780wjz.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy1vely06eq13k4780wjz.png)

Image 3

[![Futuristic office illustration 3](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi37qseebiqwmnqzdwp6f.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi37qseebiqwmnqzdwp6f.png)

What did you find? More than 1? 5? 10?

Some of the differences include gender, skyline, and room design. There is that levitating plant in images 1 and 2. Desk legs are different in each. What’s on the desk changes, the Iron Man wall design shifts from each picture, I don’t even know what’s happening with the legs in image 2, and outfits change from picture to picture.

While the theme is the same there are some obvious differences. So you may be asking yourself, why these pictures?

Image 1: I did that ChatGPT prompt to create an image of what AI thinks my life looks like based on my interactions with it.

Image 2: I prompted ChatGPT to change the person to be a woman instead of a man, directing it not to change anything else.

Image 3: I prompted ChatGPT by explaining it’s unrealistic to have someone in 4-inch heels stand on a rolling chair, and asked if it can show a picture that reflects what it knows about me but with a woman who is not standing on a chair, without changing anything else.

In a nutshell, this is what happens with a non-deterministic model. It will recreate your request from scratch. It's not set up to hold the original characteristics. So if you asked it to do something simple like change the person from a man to a woman it can't just swap out that one aspect. It does get in the ballpark which is pretty cool.

This is why we say, you need best practices in place to catch some of these shifts before they become a problem. At some point, you’ll want to hire DevOps and Security folks and it’s important to have the proper infrastructure in place.

Every time you tear down one piece of your stack you need to be mindful of what changed, what was dropped, and if you have any misshapen desk legs or you removed a levitating pot in your stack.

The solution? Test, add more tests, and definitely build out a CI/CD workflow. You need these best practices so they catch the drift and shift created by building with a non-deterministic system.

If you or someone you know is building using AI, 3Mór can help you identify and recommend some of those best practices.

We can help you bridge the gap between now and hiring a DevOps team and build out a practice of operational efficiency out of the gate.
