---
id: docusaurus-search
slug: /docusaurus-search
title: Search
authors: kuizuo
---

> [Search | Docusaurus](https://docusaurus.io/docs/search)

## [Algolia](https://www.algolia.com/)

There are two options for configuring Algolia.

1. Let Docsearch (specifically, [Algolia Crawler](https://crawler.algolia.com/)) crawl your website weekly (or you can manually trigger crawling). **This is free only if your project is open source; otherwise, it’s a paid service**. The advantage is that no additional configuration is needed, although applying for this service can be cumbersome (the method used by this blog).

2. Run your own DocSearch crawler, which allows you to crawl your site anytime but requires setting up an account and a crawling environment yourself, or you can use GitHub Actions to automate the crawling.

### Option 1

The application process for Algolia DocSearch is detailed in the documentation. It involves a lengthy application process that requires email verification and confirmation from Algolia. While the conditions for free hosting by DocSearch are quite stringent, it is almost a one-time setup if successful, and it is highly recommended. If approved, you can view the crawler status in the [Crawler Admin Console](https://crawler.algolia.com/admin/crawlers).

![image-20220627232545640](https://img.kuizuo.cn/image-20220627232545640.png)

Then, enter the Algolia `appId`, `apiKey`, and `indexName` into your `docusaurus.config.ts`.

```javascript title='docusaurus.config.ts'
algolia: {
  appId: 'GV6YN1ODMO',
  apiKey: '50303937b0e4630bec4a20a14e3b7872',
  indexName: 'vnambs',
}

```

After crawling, Algolia will also send periodic updates to your email.

![image-20230219144035031](https://img.kuizuo.cn/image-20230219144035031.png)

### 方案2

[Run your own | DocSearch (algolia.com)](https://docsearch.algolia.com/docs/run-your-own)

Because Option 1 is often difficult to obtain and may fail, Option 2 becomes necessary.

First, apply for an [Algolia](https://www.algolia.com/) account, then create an index under the left menu "indices" and get the Application ID and API Key (note that there are two API Keys).



![image-20210821230135749](https://img.kuizuo.cn/image-20210821230135749.png)

![image-20210821230232837](https://img.kuizuo.cn/image-20210821230232837.png)

he API Key you need to enter in `docusaurus.config.ts` is the Search-Only API Key.

```js
themeConfig: {
    algolia: {
      apiKey: "xxxxxxxxxxx",
      appId: "xxxxxxxxxxx",
      indexName: "kuizuo",
    },
}
```
I use Linux and run the crawler code in a Docker environment. First, [install jq](https://github.com/stedolan/jq/wiki/Installation#zero-install) (I used 0install for installation, which may be a bit slow), then verify the installation in the console.

```
[root@vnserver xxxx.com]# jq --version
jq-1.6
```
Next, create a `.env` file in any directory and enter the corresponding APPID and API KEY (here it should be the `Admin API Key`, which I mistakenly thought was the Search API Key 😭).

```js
APPLICATION_ID = YOUR_APP_ID
API_KEY = YOUR_API_KEY
```
Create a `docsearch.json` file in your project directory with content similar to this (replace highlighted parts with your website information).

```json title='docsearch.json' {2-4}
{
  "index_name": "xxxx",
  "start_urls": ["https://example.com"],
  "sitemap_urls": ["https://example.com"],
  "selectors": {
    "lvl0": {
      "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
      "type": "xpath",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": "header h1, article h1",
    "lvl2": "article h2",
    "lvl3": "article h3",
    "lvl4": "article h4",
    "lvl5": "article h5, article td:first-child",
    "lvl6": "article h6",
    "text": "article p, article li, article td:last-child"
  },
  "custom_settings": {
    "attributesForFaceting": ["type", "lang", "language", "version", "docusaurus_tag"],
    "attributesToRetrieve": ["hierarchy", "content", "anchor", "url", "url_without_anchor", "type"],
    "attributesToHighlight": ["hierarchy", "content"],
    "attributesToSnippet": ["content:10"],
    "camelCaseAttributes": ["hierarchy", "content"],
    "searchableAttributes": [
      "unordered(hierarchy.lvl0)",
      "unordered(hierarchy.lvl1)",
      "unordered(hierarchy.lvl2)",
      "unordered(hierarchy.lvl3)",
      "unordered(hierarchy.lvl4)",
      "unordered(hierarchy.lvl5)",
      "unordered(hierarchy.lvl6)",
      "content"
    ],
    "distinct": true,
    "attributeForDistinct": "url",
    "customRanking": ["desc(weight.pageRank)", "desc(weight.level)", "asc(weight.position)"],
    "ranking": ["words", "filters", "typo", "attribute", "proximity", "exact", "custom"],
    "highlightPreTag": "<span class='algolia-docsearch-suggestion--highlight'>",
    "highlightPostTag": "</span>",
    "minWordSizefor1Typo": 3,
    "minWordSizefor2Typos": 7,
    "allowTyposOnNumericTokens": false,
    "minProximity": 1,
    "ignorePlurals": true,
    "advancedSyntax": true,
    "attributeCriteriaComputedByMinProximity": true,
    "removeWordsIfNoResults": "allOptional",
    "separatorsToIndex": "_",
    "synonyms": [
      ["js", "javascript"],
      ["ts", "typescript"]
    ]
  }
}
```

Run the Docker command:

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper
```

Wait for the container to run and crawl your site. If you see the success page in the Algolia console, it means it worked.

![image-20210821225934002](https://img.kuizuo.cn/image-20210821225934002.png)

To ensure the project is deployed before triggering, you can use the following trigger conditions if deploying with Vercel.

```yaml title='.github/workflows/docsearch.yml'
name: docsearch

on: deployment

jobs:
  algolia:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Get the content of docsearch.json as config
        id: algolia_config
        run: echo "::set-output name=config::$(cat docsearch.json | jq -r tostring)"

      - name: Run algolia/docsearch-scraper image
        env:
          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          CONFIG: ${{ steps.algolia_config.outputs.config }}
        run: |
          docker run \
            --env APPLICATION_ID=${ALGOLIA_APP_ID} \
            --env API_KEY=${ALGOLIA_API_KEY} \
            --env "CONFIG=${CONFIG}" \
            algolia/docsearch-scraper
```

Add [secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)  to your GitHub repository, and pushing code will trigger the crawling rules.

## [orama](https://docs.oramasearch.com/open-source/plugins/plugin-docusaurus)

If you find the Algolia application process cumbersome, you can integrate [orama](https://docs.oramasearch.com/open-source/plugins/plugin-docusaurus) into Docusaurus. Orama provides full-text, vector, and hybrid search query services running in browsers, servers, and at the edge. The final result looks like this:



![](https://img.kuizuo.cn/2024/0118082834-202401180828818.png)

## Local Search

If you find Algolia's application process too complicated, Docusaurus also offers a local search option, though it is less powerful compared to full-text search.

Local search plugin:[docusaurus-search-local](https://github.com/cmfcmf/docusaurus-search-local)
