---
layout: post
title: "Stop giving hackers the easy button"
excerpt: "Vulnerability management is like tending a garden. When I weed my strawberry patch, I’m rewarded with strawberries in early summer. But weeding isn’t enough."
author: Beth Fuller
image: /assets/images/winding-road.jpg
thumb: /assets/images/thumbs/winding-road.png
tags: devops security observation 
---

I’ve been tracking the [Salt Typhoon attack](https://www.reuters.com/technology/cybersecurity/chinese-salt-typhoon-cyberespionage-targets-att-networks-secure-carrier-says-2024-12-29/) off and on. In part that’s because I’m a customer of one of the telecom companies impacted. Also in part because I’ve been seeing an uptick in attacks that use Advanced Persistent Threat (APT) methodology. After digging in a little and learning about more APT attacks that are impacting our infrastructure, I wanted to understand what I can do. 

The quick explanation of an APT is they find a way in via a known Common Vulnerability and Exploit (CVE) and start to traverse through the stack until they get to the information they want. As they traverse, they cover their tracks so they can hang out. It’s like a woodboring beetle. Here is a link to a [technical description from Crowdstrike](https://www.crowdstrike.com/en-us/cybersecurity-101/threat-intelligence/advanced-persistent-threat-apt/). The attackers are patient and have a specific goal in mind. Whether it’s an infrastructure attack like with [Volt Typhon](https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/) or [Silk Typhoon](https://www.microsoft.com/en-us/security/blog/2025/03/05/silk-typhoon-targeting-it-supply-chain/) targeting IT supply chains.

Prevention is a long, tedious game but there are some simple practices you can put in place. It’s kind of like dealing with dishes, laundry, or weeding your garden. It can become overwhelming unless you set up a routine to take care of the day-to-day. These are your best practices.

* Strong access control and user authentication  
* Endpoint Protection  
* Internal education around phishing and social engineering  
* Monitoring of suspicious activity  
* Vulnerability management

I’m going to focus on one aspect of the hack, the fact that they compromised existing CVEs. I know that vulnerability management is a chore. It’s easy to let time pass and assume since nothing happened, you are safe. The risk of not remediating includes increased risk of data breaches which have an [average cost of $4.88M](https://www.securitymagazine.com/articles/101321-488m-was-the-average-cost-of-a-data-breach-in-2024)\! And also [ransomware attacks](https://www.csoonline.com/article/3842496/the-state-of-ransomware-fragmented-but-still-potent-despite-takedowns.html). Not addressing CVEs negatively impacts your compliance for critical regulations like HIPPA, PCI DSS, and GDPR. 

Vulnerability management is like tending a garden. When I weed my strawberry patch, I’m rewarded with strawberries in early summer. But weeding isn’t enough. Strawberries need friends to help add nutrients into the ground and plants that deter pests. Companion plants and coffee grounds are the best practices in action.

## Celebrate the small stuff

There is no reward for avoiding incidents. My suggestion: celebrate the small stuff\! As DevOps and Security teams we understand that technology is deeply connected, whether it’s through companies like Blue Yonder or our use of open source software. DevOps teams are master gardeners.

Before we can talk about solutions, we need to understand why fixing CVEs in a timely fashion is hard.

* Fragmented data across multiple scanning tools   
* Risk scores not being relevant to the companies technical stack   
* Finding the teams to fix the problem is just hard

For more details check out the blog, [“Swimlane report finds 68% of organizations fail to remediate critical vulnerabilities on time.”](https://www.securityinfowatch.com/cybersecurity/press-release/55261252/swimlane-report-finds-68-of-organizations-fail-to-remediate-critical-vulnerabilities-on-time)

Ok, now that we get the problem, let’s talk about steps to get you started on the right path.   

**Find the right tools.** I follow the Portland growing zone 8b to know when to grow my plant starts inside vs outside. Which means I do things differently than friends in LA, Alabama, or Ohio. Your tools need to fit your unique technical stack.  Tools that simply scan but don’t provide intelligence based on the unique technical stack configuration, are going to make keeping up to date on vulnerability remediation hard. Luckily, there is a new generation of tools on the rise. 

Here are a few companies taking a unique approach for you to check out:

* [AppMap](https://appmap.io/product/security-scanning) Instantly scan your AppMap data for security gaps and attack vectors.   
* [DryRun Security](https://www.dryrun.security) Helps you uncover risks that pattern matching SAST tools miss.   
* [3Mór](https://3mor.io) Maps and prioritizes CVEs based on customers' unique code & infrastructure.

**Find your community.** Once you have the right tools, you need to find ways to sustain the project long term. Like weeding your garden if you let it go too long, the weeds win. I like picking fresh strawberries on a warm summer day. To get those, I need to pull weeds in the cold and rain. Weeding is boring. I like to track and celebrate my progress. 

**Support Open Source.** Don’t reinvent the wheel, follow the Golang community which has gardening days. Set up some gardening days that are dedicated to squashing those CVEs internally and in partnership with open source projects. 

**Celebrate the small stuff.** Set a milestone and how you’ll celebrate achieving it. It’s hard because companies don’t often recognize the incidents they missed. You need to make time celebrate your prevention efforts. 

As Former [NSA Director, Gen Nakasone said](https://www.scworld.com/brief/tackling-chinese-cyber-threats-should-be-us-priority-says-ex-nsa-head), “You know, after decades of talking about hygiene and patching, the software is not getting that much better and the attack surface is only growing.”  I’m confident that the DevSecOps community can get us to a good place, quickly.  Find the tools that work for your team, set up those best practices, create a plan, celebrate the small stuff. You’ll have fewer security incidents and will be better prepared when one happens.   
