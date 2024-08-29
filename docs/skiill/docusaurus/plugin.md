---
id: docusaurus-plugin
slug: /docusaurus-plugin
title: Plugins
authors: vnambs
---

In `docusaurus.config.ts` under the `plugins` section, you can see all plugins and their configurations. As shown below:

```typescript title='docusaurus.config.ts' icon='logos:docusaurus'
plugins: [
  'docusaurus-plugin-image-zoom',
  'docusaurus-plugin-sass',
  '@docusaurus/plugin-ideal-image',
  ['docusaurus-plugin-baidu-tongji', { token: 'xxxxxxxxxxxxxxx' }],
  [
    '@docusaurus/plugin-pwa',
    {
      debug: process.env.NODE_ENV === 'development',
      offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
      pwaHead: [
        { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
        { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
        { tagName: 'meta', name: 'theme-color', content: '#12affa' },
      ],
    },
  ],
  [
    './src/plugin/plugin-content-blog', // To make blog data global, the plugin-content-blog is customized
    {
      path: 'blog',
      editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
        `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
      editLocalizedFiles: false,
      blogDescription: 'Code Life: A Journey Through Technology and Blogging',
      blogSidebarCount: 10,
      blogSidebarTitle: 'Blogs',
      postsPerPage: 10,
      showReadingTime: true,
      readingTime: ({ content, frontMatter, defaultReadingTime }) =>
        defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
      feedOptions: {
        type: 'all',
        title: 'Kuizuo',
        copyright: `Copyright © ${new Date().getFullYear()} Kuizuo. Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_link">${beian}</a></p>`,
      },
    },
  ],
],
```

## [plugin-image-zoom](https://github.com/flexanalytics/plugin-image-zoom)

A plugin for image zooming in Docusaurus.

## plugin-sass

Supports the Sass preprocessor.



## [plugin-pwa](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-pwa)

Creates a PWA (Progressive Web App) documentation site that supports offline mode and app installation, as shown below:

![image-20221204153401244](https://img.kuizuo.cn/image-20221204153401244.png)

## plugin-content-blog

The official [plugin-content-blog](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog)oes not set blog data globally. It can only be accessed on the blog list page `BlogListPage `component. However, some components in this blog require access to certain data. Therefore, this plugin is customized to make blog information available globally, allowing access to all blog information from any page.

```typescript title='src/plugin/plugin-content-blog.ts'
async function blogPluginEnhanced(context, options) {
  const blogPluginInstance = await blogPlugin(context, options)

  return {
    ...blogPluginInstance,
    async contentLoaded({ content, allContent, actions }) {
      // Create default plugin pages
      await blogPluginInstance.contentLoaded({ content, allContent, actions })

      // Create your additional pages
      const { blogPosts, blogTags } = content
      const { setGlobalData } = actions

      setGlobalData({
        posts: blogPosts.slice(0, 10), // Only store 10 posts
        postNum: blogPosts.length,
        tagNum: Object.keys(blogTags).length,
      })
    },
  }
}
```

:::warning These data may occupy some space. [Click here](https://github.com/facebook/docusaurus/pull/7163#issuecomment-1096780257) for more details.

:::
