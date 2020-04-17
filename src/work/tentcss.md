---
title: TentCSS
date: 2018-09-30
featured_image: /static/images/work/tentcss.png
featured_image_alt: Laptop mockup of TentCSS website.
image_caption: 
tagline: A CSS Utility framework
excerpt: This was a passion project of mine to create a minimalistic CSS framework. Additionally I wanted the framework to adhere to the BEM methodology which I found to be missing from large-scale UI frameworks.
year: 2017
roles: 
    - Product Owner
    - Developer
bg_color: '#3d9970'
tags:
    - work
---

### The Problem

As a developer, I found frameworks such as Bootstrap and Zurb Foundation to be too heavy handed for many of my own projects. Often to offset this weight I would employ a CSS reset stylesheet and continue to only create the CSS styles I needed at the time. While this approach worked, it was ineffective to scale and often had many repeat commonalities from project to project. You can only create `.button` so many times to were the properities are only subtly different.

Additonally I could not find many frameworks that adhered to the BEM methodology (Block, Element Modifier). Bootstrap did not allow a way easily modify class names to fit any sort of methodology.

While these were struggles of my own, I knew other developers were having similar challenges too.

#### Key Pain Points

- Large-scale frameworks added too much code weight with only a small amount of features being utilized. This weight often meant user performance was impacted.
- Frameworks required a lot of modifcation to use a CSS methodology

### The Solution

I created TentCSS to have very minimal opinions on visual design. This allowed me to keep the overall code weight very small for user experience. This also meant developers would not have to remove or modify a lot of unneeded properities. The framework in it's minified form weighed in at 16.3k.

All the components I created adhered to the BEM methodology. Here is an example of the Flexbox Grid:

```css
<div class="grid">
    <div class="grid__column grid__column--12 grid__column--#--sm ">...</div>
    <div class="grid__column grid__column--12 grid__column--#--md ">...</div>
    <div class="grid__column grid__column--12 grid__column--#--lg ">...</div>
    <div class="grid__column grid__column--12 grid__column--#--xl ">...</div>
</div>
```



While this resulted in longer CSS class names, it also provided consistency. I believe consistency can lead to efficiency once a system becomes familiar.

### Summary

I released TentCSS publicly in February of 2017 on Github and promoted it via HackerNews. As of this writing the framework currently has 387 stars on Gituhb and is mentioned from time to time in top lists of CSS frameworks. I currently do not have plans to release updates to the TentCSS 1.x.x versions. I am very statisifed with the results the framework gave myself and others. I am not  using TentCSS on projects going forward because technology in the front-end development world moves fast. I am always learning and looking for the best solutions even if that means cutting out my own work for the better.

[TentCSS Website](https://css.sitetent.com/)