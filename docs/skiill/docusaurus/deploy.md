---
id: docusaurus-deploy
slug: /docusaurus-deploy
title: Deployment
authors: vnambs
---

Previously, I used [Vercel](https://vercel.com) for deployment with minimal configuration. This allowed me to focus solely on content creation. You can check out my article on deploying with Vercel [here](/blog/vercel-deploy-blog).

However, `vercel.app` has been affected by DNS pollution, which means it is blocked in mainland China. Even though using a custom domain pointed to Vercel might work, the speed of DNS resolution for mainland China will inevitably slow down, affecting site performance.

To improve the visitor experience, I decided to use different resolution methods for domestic and international access. This involves configuring different records for domestic and international access, using a domestic CDN for domestic traffic and Vercel for international traffic.

![CDN Configuration](https://img.kuizuo.cn/image-20221204161431863.png)

With this setup, visitors in mainland China will use the domestic CDN, while international visitors will use Vercel's CDN. This setup improves access speed for different regions. You can test your site’s performance at [Ping.cn: Website Speed Test](https://www.ping.cn/).

Here are the results of my website speed tests, and you can also view them at [kuizuo.cn National Speed Test - Ping.cn](https://www.ping.cn/http/kuizuo.cn).

![Speed Test Results](https://img.kuizuo.cn/image-20221204161146327.png)

## Continuous Integration

Since Vercel can automatically pull code from repositories and build and deploy it, minimal configuration is required.

For code pushed to a repository (like GitHub), a CI service is needed to handle these tasks. I use [GitHub Actions](https://github.com/marketplace) for this purpose. Build logs can be viewed in [Actions · kuizuo/blog](https://github.com/kuizuo/blog/actions). Here is my configuration file:

```yaml title='.github/workflows/ci.yml' icon='logos:github-actions'
name: CI

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest] # macos-latest, windows-latest
        node: [18]

    steps:
      - uses: actions/checkout@v4

      - name: Set node version to ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}

      - run: corepack enable

      - name: Setup
        run: npm i -g @antfu/ni

      - name: Install
        run: nci

      - name: Build
        run: nr build

      - name: SSH Deploy
        uses: easingthemes/ssh-deploy@v4.1.10
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          ARGS: '-avzr --delete'
          SOURCE: 'build'
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: 'root'
          TARGET: '/opt/1panel/apps/openresty/openresty/www/sites/kuizuo.cn/index'

```

Once CI finishes building the output, it will be deployed to the server via rsync, completing the deployment process.

After configuring everything, I just push the code to the remote repository, and GitHub Actions and Vercel will handle their respective tasks. After a short wait, the newly pushed code will be live on the site.

## Deploying Without a Domain or Server

The above is my configuration setup. For those without their own domain or server and looking for a free option, I recommend [Netlify](https://www.netlify.com/)， You can use Netlify’s subdomain, such as `https://yourname.netlify.app`， and it will be deployed to Netlify’s CDN. However, it is not recommended to use Netlify for production environments due to its limited bandwidth and other limitations.


This section covers deploying a Docusaurus site, including setting up CDN configurations for better performance in different regions, using CI/CD with GitHub Actions, and recommendations for those without a domain or server.

