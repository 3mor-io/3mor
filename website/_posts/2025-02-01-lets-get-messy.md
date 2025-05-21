---
layout: post
title: "Let's get messy"
excerpt: "I want to take a moment to shout out to all the people who are not working with all the latest tech. You know, like at most companies."
author: Beth Fuller
image: /assets/images/class-car.png
thumb: /assets/images/thumbs/classic-car.png
tags: devops security observation 
---

I want to take a moment to shout out to all the people who are not working with all the latest tech. You know, like at most companies. 

Anyone who has been in the tech space for any length of time knows that once you build the foundation of your company that’s it. That’s what you have. The rest is context, language, and maybe a little acceptance. I think this is where the discussion of technical debt or something else is critical. Emily Rosengren has a great talk called [“Can We Please Stop Talking About Tech Debt?”](https://www.youtube.com/watch?v=DvfMOJaIzhY&t=500s)  It’s amazing. 

I think of it this way mostly because I enjoy “classic cars” — the minute you drive a car off the lot the value drops significantly.

But the reality is you can drive that car for your lifetime and pass it on to kids, cousins, neighbors, with the right care and attention. With some bits being replaced or rebuilt over time, cars last a long time. The same goes for tech. I like to think of these stacks as the tech version of a 1968 Camaro. It’s a solid car. Ok maybe more like an International Scout? You get the idea.

Just like a 1968 Camaro you need to have the right tools, documentation, or someone who has enough experience to guide the team. As Emily talked about, context is everything and language matters. Understanding what tradeoffs are the best for the stack you have is what’s important. 

Old tech isn’t the problem. [Southwest airlines avoided the Crowdstrike](https://www.govtech.com/question-of-the-day/why-isnt-southwest-affected-by-the-crowdstrike-microsoft-outage#:~:text=Answer:%20Because%20it's%20using%20an%20outdated%20version%20of%20Windows.&text=Southwest%20has%20taken%20heat%20in,has%20done%20itself%20a%20favor.) outage because they are using a version of Windows that predates Clippy. Ok that might not make you feel better. Let’s take the Mars explorers. They aren’t using the latest tech and they landed on Mars, took samples, pictures, and brought all of us a little bit of joy as we watched the rover roam Mars. 

All of that to say, you are doing a great job and hindsight is 20/20. Maybe your stack runs on an old version of Ruby or Python and you are just now starting to set up CD. That’s HARD and more importantly, you need the context relevant to your stack in order to make appropriate decisions on policies when building out CD pipelines. You get to be more creative in your implementation. 

For us at [3Mór](https://3mor.io), we know that there are amazing tools to help people on the newest versions of their stack and we LOVE this. We are focused on tidying up the rest of your stack. As we start looking into how to identify dependencies, there are tools we can integrate for Python and after that we will look into Ruby. Our role is to augment what you have, and surface up the context you need to make the hard tradeoffs. 

And remember that AI isn’t running on the latest and greatest versions. AI is constantly living in the past. 
