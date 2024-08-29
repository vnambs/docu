---
id: docusaurus-component
slug: /docusaurus-component
title: Custom Components
authors: vnambs
description: Introduction to customizing Docusaurus components
---

An initialized Docusaurus project already has reserved components, such as blog layout, tag archive pages, and more. However, the styles of these components may not meet your aesthetic needs, or you might want to add something to these theme components. This is where [Swizzle](https://docusaurus.io/docs/swizzling) comes in.

## Theme Components

In Docusaurus, theme components are located under **@docusaurus/theme-classic/theme**. If you want to override a specific component, you can create a file with the same path structure under the `src/theme` directory.

For example:

```
website
├── node_modules
│   └── @docusaurus/theme-classic
│       └── theme
│           └── Navbar.js
└── src
    └── theme
        └── Navbar.js
```


Whenever `@theme/Navbar` is imported, `website/src/theme/Navbar.js` will be loaded first.

For more on *layered architecture*, see [Client Architecture | Docusaurus](https://docusaurus.io/docs/advanced/client).

## Swizzle Components

To get an overview of all `@docusaurus/theme-classic` components, you can run:

```bash
npm run swizzle @docusaurus/theme-classic -- --list
```

Let's take the archive page as an example; the official archive page component is `theme/BlogArchivePage`

Let's take the archive page as an example; the official archive page component is：[Ejecting Components](https://docusaurus.io/zh-CN/docs/swizzling#ejecting)or[Wrapping Components](https://docusaurus.io/zh-CN/docs/swizzling#wrapping)

To eject a component, you can execute the following[command:](https://docusaurus.io/zh-CN/docs/cli#docusaurus-swizzle)：

```bash
npm run swizzle @docusaurus/theme-classic BlogArchivePage -- --eject --typescript
```

This will create src/theme/BlogArchivePage/index.tsx, which contains the archive page code. You only need to modify the code to achieve the desired styles and functionality.

However, this will only give you the index.tsx file, and there might be subcomponents. So my usual approach is to find the component folder in node_modules/@docusaurus/theme-classic/src/theme and copy the entire folder to src/theme. This gives you the original TS files and more places to customize, making it easier for personalization.

However, there are some risks when using custom components. Upgrading Docusaurus may become more difficult if there are changes in the properties passed or the internal theme API, which could cause page rendering failures.

For example, when I upgraded Docusaurus to version 2.0.0, there were page errors because the data passed to the component by[plugin-content-blog](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog)  had changed, causing data parsing issues and, consequently, page rendering failures.

If you don't upgrade the dependencies, there won't be a problem, but who can guarantee that new features in future versions won't tempt users to upgrade? Therefore, when customizing components, you may need to maintain some code after upgrading dependencies. You may need to swizzle a new copy of the latest files, compare the changes, and troubleshoot issues.

:::tip
If you want to customize the theme, you can also create a custom theme. See [Custom Theme](https://docusaurus.io/zh-CN/docs/theming) for more information.
:::