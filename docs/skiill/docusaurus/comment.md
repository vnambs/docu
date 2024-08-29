---
id: docusaurus-comment
slug: /docusaurus-comment
title: Comment Services
authors: vnambs
---

Here are two recommended comment services:

Giscus: Based on GitHub Discussions, it is relatively friendly for developers. Comment notifications are sent through GitHub email.

Waline: Requires setting up a backend service and database service, providing comment and view count services with strong extensibility.

## [giscus](https://giscus.app)

Previously, I used gitalk for comments, but it was based on GitHub issues, and the issues could not be closed. Every time I opened the repository, I would see dozens of issues, which was particularly unfriendly.

So, I decided to switch to [giscus](https://giscus.app/en), a comment system driven by [GitHub Discussions](https://docs.github.com/en/discussions). You need to ensure the following:

1. **The repository is [public](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#making-a-repository-public)**, otherwise visitors cannot view the discussions (it doesn’t necessarily have to be the blog's project; any repository will work).
2. The **[giscus](https://github.com/apps/giscus) app is installed**, or visitors will not be able to comment or reply.
3. The **Discussions** feature is [enabled in your repository](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository).

The blog already has a built-in comment component [src/component/Comment](https://github.com/kuizuo/blog/blob/main/src/components/Comment/index.tsx), so you only need to configure giscus in `docusaurus.config.ts`.

### Configuring giscus

Visit the [giscus](https://giscus.app/) website, fill in the required information, and you will get a pre-configured `<script>` tag.

```html
<script src="https://giscus.app/client.js"
        data-repo="[ENTER REPO HERE]"
        data-repo-id="[ENTER REPO ID HERE]"
        data-category="[ENTER CATEGORY NAME HERE]"
        data-category-id="[ENTER CATEGORY ID HERE]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="fr"
        crossorigin="anonymous"
        async>
</script>
