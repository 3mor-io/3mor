---
layout: post
title: "Hack the Planet as a Service"
excerpt: "Things have escalated to the point where we have a thriving Ransomware as a Service industry."
author: Beth Fuller
image: /assets/images/hackers.png
thumb: /assets/images/thumbs/hackers.png
tags: devops security observation 
---

Risk is complicated. Everyday life is full of risk, we just don’t think of it that way. With the state of the world right now, I sometimes wonder if there are so many risky things that we tune them out. We know that alert fatigue is real but maybe we have hit a point where we [don’t even see the risks](https://cybersecuritynews.com/cyber-attacks-2024/) until they impact our day. 

Things have escalated to the point we have a thriving [Ransomware as a Service](https://www.crowdstrike.com/en-us/cybersecurity-101/ransomware/ransomware-as-a-service-raas/) industry. At a certain point it can feel like, why play whackamole? In corporations teams feel like it’s easier to wait for something bad to happen. As individuals, we know that our personal identifying information is now in the hands of nation states through breach after breach after breach. 

So much so that when the [US government banned TikTok](https://apnews.com/article/tiktok-timeline-ban-biden-india-d3219a32de913f8083612e71ecf1f428) in the US due to security reasons. The push back from users was pretty loud, “that’s fine, I’ll send the Chinese government my data myself.” FWIW, I thought the ban by the US government was rubbish but that’s a talk for a different day. 

It was a fascinating few months to see such swift action by the US Government to fix “security” followed by a curious set of EO’s and actions that actively removed the safeguards being put in place at the [speed of government](https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2025/01/16/executive-order-on-strengthening-and-promoting-innovation-in-the-nations-cybersecurity/).  

All of this got me thinking about categories of risk. This category is vast but I’m going to focus on a few kinds of risk that impact our DevOps/SRE teams. 

So let’s break down some of those ways. I’m specifically not addressing the security risk of tools that manage the supply chain. Think of tools like Blue Yonder. They are an obvious target for ransomware attacks because of the one to many relationship. Not to be confused with supply chain management. 

With that in mind let’s break down some of the most common risks we face on a daily basis. Risk we have control over. 

Deployments: What happens when we don’t have the right guardrails in place? Mostly, nothing but when it goes bad it goes really bad.

* [Crowdstrike](https://www.techtarget.com/WhatIs/feature/Explaining-the-largest-IT-outage-in-history-and-whats-next)  
* [AWS S3 Buckets](https://cybersecuritynews.com/abandoned-aws-s3-buckets/)

Dependencies between services or repositories are so tricky because teams are like, eh I sort of care but do I care. I’ll see if it matters. The catch is, it matters when you are building out proper CI and CD. I sometimes wonder if the reason we stop at CI is because the connectivity of our code makes CD too hard to manage. 

* [Best practices vary](https://www.reddit.com/r/devops/comments/wmo3sk/how_to_handle_crossrepo_dependencies/) a Reddit thread

Vulnerability: Oof I get it, that spreadsheet of doom is miserable. How do you decide what to take care of, do you have enough information to make informed decisions. And really the only piece of secure tech, is the tech that is unplugged and buried in cement. That said, it’s important to be smart about your approach when you have a growing industry like RaaS.

* [Blue Yonder](https://www.inc.com/kit-eaton/hackers-claim-to-have-stolen-data-from-supply-chain-company-blue-yonder/91062698)  
* [Salt Typhoon](https://thehackernews.com/2025/02/cisco-confirms-salt-typhoon-exploited.html)

AI: Everything that can be used for good can be used for bad. 

* [Easier to identify 0days](https://cybersecuritynews.com/40000-cves-published-in-2024/)  
* [Ransomware as a Service](https://www.bitdefender.com/en-us/blog/businessinsights/funksec-an-ai-centric-and-affiliate-powered-ransomware-group)

Maybe this makes you feel more anxious instead of less but here’s my advice, like anything, pick what’s important to you. Understand your risks. Find the tools that make your life easier and split the load. We talk about shifting left but maybe it’s less shift left and more you own this piece and I’ll own the next. 

I continue to believe that we are better together but in order to be better together, we need to understand what’s at stake, how to help, and how to play to each other’s strengths. [3Mór is helping](https://3mor.io/) to address many of these risks. Whether you feel security is a vitamin or a painkiller, it will impact you in some way shape or form.   
