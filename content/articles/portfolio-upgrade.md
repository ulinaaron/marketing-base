---
title: Portfolio Upgrade, A Go!
hidden: true
date: 2020-04-17
featured_image: 
image_caption: Photo by Dylan Gillis on Unsplash
excerpt: A meeting is a gathering of two or more people that has been convened for the purpose of achieving a common goal through verbal interaction.
tags:
    - blog
    - personal
---

It has been four years since I've properly given my portfolio website an update. It has for far too long not be an accurate representation of my abilities nor been the platform I have needed.

The previous iteration of my portfolio was powered by a static site generator (SSG) called HarpJS. It served it's purpose well when I initially needed something to push up. However in the long term with several areas of my website needing updated, it just couldn't measure up to many of the new breakthrough SSGs out there.

### Where To Start

Admitally, I've probably built 6-8 versions of my portfolio in the last few years with many different stacks of technology. Never so much as permanent solutions, but always as a means to try out new ways to build a website. It just so happened that my portfolio was always the test subject for these endevaours. I've been down the road with Jekyll, Gridsome, and Sapper, just to name a few SSGs.

Ultimately for the current iteration of my portfolio, I landed on 11ty. I was really starting to fall deeply in love with the component world using VueJS via Gridsome. I'm a huge advocate of design systems, so anytime code can be reused and documented I am all for it.

What struck me as interesting with 11ty is that is wasn't that prespective to how to build a website. Surely there is an overarching foundation but it gives you several templating languages to chose from. In all fairness so do many other SSGs.

I choose to start with the 11ty boilerplate, Skeleventy. Particularly because it was utilizing TailwindCSS as the UI framework. TailwindCSS has been my go-to choice for styling personal projects for quite a while. Given my history with creating my own utility framework in the past, Tailwind has made a lot of sense for me. It has felt like the natural evolution of where I wanted my own framework to go.

### Make It Fly

Is has been important to me to make sure sites I create are ultra performant. 

![alt text](/static/images/blog/portfolio-upgrade/benchmark.png "Benchmark scores for homepage")

