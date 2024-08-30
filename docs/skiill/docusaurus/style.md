---
id: docusaurus-style
slug: /docusaurus-style
title: Styles and Pages
authors: vnambs
---

## [Styles and Layouts](https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima)

A Docusaurus site is a React single-page application. You can style the site as you would a typical React application, and libraries like [Tailwind CSS](https://tailwindcss.com/) and component libraries are supported. However, integrating these can increase the code size, so in this theme, I use global styles and CSS modules.

## Modifying Theme Colors

You can set the primary color and background color [here](https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima) to see how it looks in light and dark modes. For example, my theme color is <font color="#12AFFA">#12AFFA</font>.

`@docusaurus/preset-classic` uses [Infima](https://infima.dev/) as the underlying styling framework. Infima provides flexible layouts and common UI component styles suitable for content-focused websites (blogs, documentation, homepages). For more details, check out the [Infima website](https://infima.dev/).

## Homepage

Since I set the site to [blog-only mode](https://docusaurus.io/zh-CN/docs/blog#blog-only-mode), there is no dedicated homepage; instead, the blog post list is used as the homepage. You need to delete (or rename) the `src/pages/index.tsx` file to avoid a homepage path conflict. Of course, you can also create a dedicated homepage like Docusaurus does and then redirect to the blog post list page.

Thus, the blog page also serves as the homepage. However, just having a blog is not enough, so I added a Hero component to represent how the site looks on first visit.

The SVG background file for the homepage is located at `src/components/Hero/img/hero_main.svg`. The illustration comes from [unDraw](https://undraw.co/illustrations), where you can find similar illustration styles for backgrounds. Alternatively, you can hire a designer to create custom illustrations.

## Custom Pages

Pages such as [Archive](/blog/archive), [Links](/topic), [Navigation](/docs/skill), [Projects](/project), and [About Me](/about) are defined in the `src/pages` directory, with routes mapped according to the file names. For more on creating pages, see [Creating Pages | Docusaurus](https://docusaurus.io/zh-CN/docs/creating-pages).
