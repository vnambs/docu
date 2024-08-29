---
id: docusaurus-config
slug: /docusaurus-config
title: Configuration File
authors: vnambs
---

## `docusaurus.config.ts`

The `docusaurus.config.ts` file is located at the root directory of your website and contains your site's configuration information.

Here, you can modify the logo, site title, author name, top announcements (announcementBar), navbar, footer, etc.

```typescript title='docusaurus.config.ts' icon='logos:docusaurus'
const config: Config = {
  title: "Kuizuo's Site",
  url: 'https://kuizuo.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'kuizuo',
  projectName: 'blog',
  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content: 'Kuizuo, blog, JavaScript, TypeScript, Node, React, Vue, web, frontend, backend',
      },
    ],
    // ...
}

export default config
```

Most configuration settings, such as search (Algolia), comments (Giscus), and social links, can be added here. These settings can be accessed using Docusaurus' built-in hooks (useThemeConfig, useDocusaurusContext).

For the complete configuration details, see [docusaurus.config.ts | Docusaurus](https://docusaurus.io/zh-CN/docs/api/docusaurus-config)

## sidebars.js

This file is used to configure the sidebar for the documentation, such as the[Technical Notes](/docs/skill/)，[Recommended Tools](/docs/tools/)。in this blog. Each item in the sidebar corresponds to a markdown file, and all these files are stored in the docs directory for easy management.

[See more on Sidebar | Docusaurus](https://docusaurus.io/zh-CN/docs/sidebar)

## Related Information

### About Me Page

ou can view and modify the content in src/pages/about.mdx.

If you want to display your tech stack, I recommend using [skillicons](https://skillicons.dev/) to generate icons, like this:

[![My Skills](https://skillicons.dev/icons?i=ts,nodejs,vue,nuxt,react,nextjs,tailwind,nestjs,prisma,postgres,redis,supabase,rust,wasm,vscode)](https://skillicons.dev)

To show your GitHub stats, you can use [GitHub Profile Summary Cards](https://github-profile-summary-cards.vercel.app/demo.html) 或 [github-stats](https://github.com/jstrieb/github-stats) ， I prefer github-stats because it includes animations, though you must build the images yourself.

![](https://raw.githubusercontent.com/vnambs/github-stats/master/generated/overview.svg#gh-light-mode-only)

![](https://raw.githubusercontent.com/vnambs/github-stats/master/generated/languages.svg#gh-light-mode-only)

### Friend Links, Navigation, and Project Pages

These three pages are implemented through [plugin-content-pages](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-pages). To learn more about custom page implementations, check [Custom Pages](/docs/docusaurus-style#custom-pages)

Focus mainly on the data parts. The data is stored in the `/data` directory at the root and uses TypeScript for type hints. This data will be rendered on these pages, so you only need to define the data according to the types and visit the corresponding pages to see the results.


### Social Links

To update social links, modify the social object in `data/social.ts.`

Several mainstream social accounts are built-in and available for selection.

```typescript title='social.ts' icon='logos:typescript-icon'
export type Social = {
  github?: string
  twitter?: string
  juejin?: string
  qq?: string
  wx?: string
  cloudmusic?: string
  zhihu?: string
  email?: string
  discord?: string
}

```

## Other Configurations

You might also need to configure Giscus for comments, search, site analytics, and more. These details will be covered in the[Plugins](/docs/docusaurus-plugin)section.

