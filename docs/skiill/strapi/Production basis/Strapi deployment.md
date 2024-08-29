---
id: strapi-deploy
slug: /strapi-deploy
title: Strapi deployement
authors: vnambs
---

# Strapi Deployment

#### 1. Configure[​](https://docs.strapi.io/dev-docs/deployment#1-configure "Direct link to 1. Configure")

We recommend using environment variables to configure your application based on the environment, for example:

/config/server.js

```js
module.exports = ({ env }) => ({  
    host: env('HOST', '0.0.0.0'),  
    port: env.int('PORT', 1337),
});
```

Then you can create a `.env` file or directly set environment variables in your chosen deployment platform:

```
HOST=10.0.0.1 
PORT=1338
```

💡 Tip

To learn more about configuration details, see the [configurations](https://docs.strapi.io/dev-docs/configurations) documentation.

#### 2. Launch the server[​](https://docs.strapi.io/dev-docs/deployment#2-launch-the-server "Direct link to 2. Launch the server")

Before running your server in production you need to build your admin panel for production:

- yarn
- npm
- windows

```bash
NODE_ENV=production yarn build
```

Run the server with the `production` settings:

- yarn
- npm
- windows

```bash
NODE_ENV=production npm run start
```

✋ Caution

We highly recommend using [pm2](https://github.com/Unitech/pm2/) to manage your process.

If you need a server.js file to be able to run `node server.js` instead of `npm run start` then create a `./server.js` file as follows:

path: ./server.js

```js
const strapi = require('@strapi/strapi');
strapi(/* {...} */).start();
```

[https://docs.strapi.io/dev-docs/deployment](Deployment Strapi)
