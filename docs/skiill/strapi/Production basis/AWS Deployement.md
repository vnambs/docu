---
id: aws-deploy
slug: /aws-deploy
title: AWS deployement
authors: vnambs
---

### Configure EC2 as a Node.js server[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#configure-ec2-as-a-nodejs-server "Direct link to Configure EC2 as a Node.js server")

You will set-up your EC2 server as a Node.js server. Including basic configuration and Git.

You will need your **EC2** ip address:

- In the `AWS Console`, navigate to the `AWS EC2`. In the top menu, click on `Services` and do a search for `ec2`, click on `Virtual Servers in the cloud`.
- Click on `1 Running Instance` and note the `IPv4 Public OP` address. E.g. `1.2.3.4`.

#### 1. Setup the `.pem` file[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#1-setup-the-pem-file "Direct link to 1-setup-the-pem-file")

- You downloaded, in a previous step, your `User` .pem file. e.g. `ec2-strapi-key-pair.pem`. This needs to be included in each attempt to `SSH` into your `EC2 server`. Move your `.pem` file to `~/.ssh/`, follow these steps:
- On your local machine, navigate to the folder that contains your .pem file. e.g. `downloads`
- Move the .pem file to `~/.ssh/` and set file permissions: `Path:./path-to/.pem-file/`

```bash
mv ec2-strapi-key-pair.pem ~/.ssh/
chmod 400 ~/.ssh/ec2-strapi-key-pair.pem
```

#### 2. Log in to your server as the default `ubuntu` user:[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#2-log-in-to-your-server-as-the-default-ubuntu-user "Direct link to 2-log-in-to-your-server-as-the-default-ubuntu-user")

💡 Tip

In the future, each time you log into your `EC2` server, you will need to add the path to the .pem file and add the IP address for your EC2 instance at the end, e.g. `ssh -i ~/.ssh/ec2-strapi-key-pair.pem ubuntu@1.2.3.4`.

```bash
ssh -i ~/.ssh/ec2-strapi-key-pair.pem 
ubuntu@1.2.3.4Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 4.15.0-1032-aws x86_64)

...

To run a command as administrator (user "root"), use "sudo <command>".See "man sudo_root" for details.

*ubuntu@ip-1.2.3.4:~$
```

#### 3. Install **Node.js** with **npm**:[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#3-install-nodejs-with-npm "Direct link to 3-install-nodejs-with-npm")

Strapi currently supports `Node.js` `v16.x.x`, `v18.x.x`, and `v20.x.x`. The following steps will install Node.js onto your EC2 server.

example using Node.js 20

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
...
sudo apt-get install nodejs
...
node -v && npm -v
```

The last command `node -v && npm -v` should output two versions numbers, eg. `v20.x.x, 6.x.x`.

#### 4. Create and change npm's default directory.[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#4-create-and-change-npms-default-directory "Direct link to 4. Create and change npm's default directory.")

The following steps are based on [how to resolve access permissions from npmjs.com](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally):

- Create a `.npm-global` directory and set the path to this directory for `node_modules`

```bash
cd ~
mkdir ~/.npm-globalnpm config set prefix '~/.npm-global'
```

- Create (or modify) a `~/.profile` file:

```bash
sudo nano ~/.profile
```

Add these lines at the bottom of the `~/.profile` file.

```bash
# set PATH so global node modules install without permission issues
export PATH=~/.npm-global/bin:$PATH
```

- Lastly, update your system variables:

```bash
source ~/.profile
```

You are now ready to continue to the next section.

### Install and Configure Git versioning on your server[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#install-and-configure-git-versioning-on-your-server "Direct link to Install and Configure Git versioning on your server")

A convenient way to maintain your Strapi application and update it during and after initial development is to use [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control). In order to use Git, you will need to have it installed on your EC2 instance. EC2 instances should have Git installed by default, so you will first check if it is installed and if it is not installed, you will need to install it.

The next step is to configure Git on your server.

#### 1. Check to see if `Git` is installed[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#1-check-to-see-if-git-is-installed "Direct link to 1-check-to-see-if-git-is-installed")

If you see a `git version 2.x.x` then you do have `Git` installed. Check with the following command:

```bash
git --version
```

#### 2. **OPTIONAL:** Install Git.[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#2-optional-install-git "Direct link to 2-optional-install-git")

💡 Tip

Only do if *not installed*, as above. Please follow these directions on [how to install Git on Ubuntu 22.04](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

#### 3. Configure the global **username** and **email** settings: [Setting up Git - Your Identity](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#3-configure-the-global-username-and-email-settings-setting-up-git---your-identity "Direct link to 3-configure-the-global-username-and-email-settings-setting-up-git---your-identity")

After installing and configuring Git on your EC2 instance. Please continue to the next step.

### Prepare and clone Strapi project to server[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#prepare-and-clone-strapi-project-to-server "Direct link to Prepare and clone Strapi project to server")

These instructions assume that you have already created a **Strapi** project, and have it in a **GitHub** repository.

You will need to update the `database.json` file to configure Strapi to connect to the `RDS` database. And you will need to install an npm package called `pg` locally on your development server.

💡 Tip

The `pg` package install is only necessary if you are using **PostgresSQL** as your database. Make sure to uninstall the sqlite3 package if you changed your database to PostgresSQL.

#### 1. Install `pg` in your Strapi project.[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#1-install-pg-in-your-strapi-project "Direct link to 1-install-pg-in-your-strapi-project")

On your development machine, navigate to your Strapi project root directory: `Path: ./my-project/`

```bash
npm install pg
```

#### 2. Edit the `./config/database.js` file.[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#2-edit-the-configdatabasejs-file "Direct link to 2-edit-the-configdatabasejs-file")

Copy/paste the following:

- TypeScript

path: ./my-project/config/database.ts

```typescript
export default ({ env }) => ({  
    connection: {    
        client: "postgres",    
        connection: {      
              host: env("DATABASE_HOST", "127.0.0.1"),
              port: env.int("DATABASE_PORT", 5432),
              database: env("DATABASE_NAME", "strapi"),
              user: env("DATABASE_USERNAME", ""),
              password: env("DATABASE_PASSWORD", ""),
        },    useNullAsDefault: true,
  },
});
```

#### 3. Install the **Strapi AWS S3 Upload Provider**:[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#3-install-the-strapi-aws-s3-upload-provider "Direct link to 3-install-the-strapi-aws-s3-upload-provider")

Path: `./my-project/`.

```bash
npm install @strapi/provider-upload-aws-s3
```

To enable and configure the provider, create or edit the file at `./config/plugins.js`.

- TypeScript

```typescript
export default ({ env }) => ({
  upload: {
      config: {
          provider: 'aws-s3',
          providerOptions: {
              s3Options: {
                  accessKeyId: env('AWS_ACCESS_KEY_ID'),
                  secretAccessKey: env('AWS_ACCESS_SECRET'),
                  region: env('AWS_REGION'),
                  params: {
                    Bucket: env('AWS_BUCKET_NAME'),
                  },
              }
          },
      },
  }
});
```

See the documentation about using an upload provider [here](https://docs.strapi.io/dev-docs/providers).

#### 4. Push your local changes to your project's GitHub repository[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#4-push-your-local-changes-to-your-projects-github-repository "Direct link to 4. Push your local changes to your project's GitHub repository")

```git
git add .
git commit -m 'Installed pg, aws-S3 upload provider and updated the config files'
git push
```

#### 5. Deploy from GitHub[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#5-deploy-from-github "Direct link to 5. Deploy from GitHub")

You will next deploy your Strapi project to your EC2 instance by **cloning it from GitHub**.

✏️ Note

Cloning a GitHub repository requires a personal access token. See the [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for how to generate and use a personal access token.

From your terminal and logged into your EC2 instance as the `ubuntu` user:

```bash
cd ~git clone https://github.com/your-name/your-project-repo.git
```

Next, navigate to the `my-project` folder, the root for Strapi. You will need to run `npm install` to install the packages for your project. Make sure to uninstall the sqlite3 package if you changed your database to PostgresSQL.

`Path: ./my-project/`

```bash
cd ./my-project/npm installNODE_ENV=production npm run build
```

Next, you need to install **PM2 Runtime** and configure the `ecosystem.config.js` file

#### 6. Install **PM2 Runtime**[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#6-install-pm2-runtime "Direct link to 6-install-pm2-runtime")

[PM2 Runtime](https://pm2.keymetrics.io/) allows you to keep your Strapi project alive and to reload it without downtime.

Ensure you are logged in as a **non-root** user. You will install **PM2** globally:

```bash
npm install pm2@latest -g
```

Now, you will need to configure an `ecosystem.config.js` file. This file will set `env` variables that connect Strapi to your database. It will also be used to restart your project whenever any changes are made to files within the Strapi file system itself (such as when an update arrived from Github). You can read more about this file [here](https://pm2.keymetrics.io/docs/usage/application-declaration/).

- You will need to open your `nano` editor and then `copy/paste` the following:

```bash
cd ~pm2 initsudo 
nano ecosystem.config.js
```

- Next, replace the boilerplate content in the file, with the following:

- TypeScript

```typescript
export default {
  apps: [
    {
      name: 'your-app-name',
      cwd: '/home/ubuntu/my-project',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: 'your-unique-url.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapi', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'postgres', // default username
        DATABASE_PASSWORD: 'Password',
        AWS_ACCESS_KEY_ID: 'aws-access-key-id',
        AWS_ACCESS_SECRET: 'aws-access-secret', // Find it in Amazon S3 Dashboard
        AWS_REGION: 'aws-region',
        AWS_BUCKET_NAME: 'my-project-bucket-name',
      },
    },
  ],
};
```

You can also set your environment variables in a `.env` file in your project like so:

```
DATABASE_HOST=your-unique-url.rds.amazonaws.com
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=Password
AWS_ACCESS_KEY_ID=aws-access-key-id
AWS_ACCESS_SECRET=aws-access-secret
AWS_REGION=aws-region
AWS_BUCKET_NAME=my-project-bucket-name
```

We recommend you continue setting the `NODE_ENV` variable in the `ecosystem.config.js` file.

Use the following command to start `pm2`:

```bash
cd ~pm2 start ecosystem.config.js
```

Your Strapi project should now be available on `http://your-ip-address:1337/`. Your IP address will be the one corresponding to your Ubuntu server.

💡 Tip

Earlier, `Port 1337` was allowed access for **testing and setup** purposes. After setting up **NGINX**, the **Port 1337** needs to have access **denied**.

#### 7. Configure **PM2 Runtime** to launch project on system startup.[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#7-configure-pm2-runtime-to-launch-project-on-system-startup "Direct link to 7-configure-pm2-runtime-to-launch-project-on-system-startup")

Follow the steps below to have your app launch on system startup.

💡 Tip

These steps are based on the [PM2 Runtime Startup Guide](https://pm2.keymetrics.io/docs/usage/startup/#startup-script-generator).

- Generate and configure a startup script to launch PM2, it will generate a Startup Script to copy/paste, do so:

```bash
$ cd ~
$ pm2 startup systemd

[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u your-name --hp /home/your-name
```

- Copy/paste the generated command:

```bash
$ sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u your-name --hp /home/your-name

[PM2] Init System found: systemd
Platform systemd

. . .


[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
   $ pm2 save[PM2] Remove init script via:
   $ pm2 unstartup systemd
```

- Next, `Save` the new PM2 process list and environment.

```bash
pm2 save

[PM2] Saving current process list...
[PM2] Successfully saved in /home/your-name/.pm2/dump.pm2
```

- **OPTIONAL**: You can test to see if the script above works whenever your system reboots with the `sudo reboot` command. You will need to login again with your **non-root user** and then run `pm2 list` and `systemctl status pm2-ubuntu` to verify everything is working.

### Create you first Administrator user[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#create-you-first-administrator-user "Direct link to Create you first Administrator user")

The next steps will create an Administrator user on the strapi AWS instance.

#### 1. Locate your `IPv4 Public IP`[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#1-locate-your-ipv4-public-ip "Direct link to 1-locate-your-ipv4-public-ip")

- Login as your regular user to your `EC2 Dashboard`
- Click on `1 Running Instances`.
- Below, in the **Description** tab, locate your **IPv4 Public IP**

#### 2. Next, create your **Administrator** user, and login to Strapi[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#2-next-create-your-administrator-user-and-login-to-strapi "Direct link to 2-next-create-your-administrator-user-and-login-to-strapi")

- Go to `http://your-ip-address:1337/admin`
- Complete the registration form.
- Click `Ready to Start`

### Set up a webhook[​](https://docs.strapi.io/dev-docs/deployment/amazon-aws#set-up-a-webhook "Direct link to Set up a webhook")

Providing that your project is set-up on GitHub, you will need to configure your **Strapi Project Repository** with a webhook. The following article provides additional information to the steps below: [GitHub Creating Webhooks Guide](https://developer.github.com/webhooks/creating/).

- You need to access the `Settings` tab for your `Strapi Project Repository`:
  
  1. Navigate and click to `Settings` for your repository.
  2. Click on `Webhooks`, then click `Add Webhook`.
  3. The fields are filled out like this:
     - Payload URL: Enter `http://your-ip-address:8080`
     - Content type: Select `application/json`
     - Which events would you like to trigger this webhook: Select `Just the push event`
     - Secret: Enter `YourSecret`
     - Active: Select the checkbox
  4. Review the fields and click `Add Webhook`.

- Next, you need to create a `Webhook Script` on your server. These commands create a new file called `webhook.js` which will hold two variables:

```bash
cd ~mkdir NodeWebHookscd NodeWebHookssudo nano webhook.js
```

- In the `nano` editor, copy/paste the following script, but make sure to replace `your_secret_key` and `repo` with the values that correspond to your project, then save and exit.

(This script creates a variable called `PM2_CMD` which is used after pulling from GitHub to update your project. The script first changes to the home directory and then runs the variable `PM2_CMD` as `pm2 restart strapi`. The project uses the `ecosystem.config.js` as the point of starting your application.)

```js
var secret = 'your_secret_key'; // Your secret key from Settings in GitHub
var repo = '~/path-to-strapi-root-folder/'; // path to the root of your Strapi project on server

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;
const PM2_CMD = 'cd ~ && pm2 startOrRestart ecosystem.config.js';

http
  .createServer(function(req, res) {
    req.on('data', function(chunk) {
      let sig = 
       'sha1=' +
        crypto
          .createHmac('sha1', secret)
          .update(chunk.toString())
          .digest('hex');

      if (req.headers['x-hub-signature'] == sig) {
        exec(`cd ${repo} && git pull && ${PM2_CMD}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
      }
    });
    res.end();
  })
  .listen(8080);
```

- Allow the port to communicate with outside web traffic for `port 8080`:
  - Within your **AWS EC2** dashboard:
    - In the left hand menu, click on `Security Groups`,
    - Select with the checkbox, the correct `Group Name`, e.g. `strapi`,
    - At the bottom of the screen, in the **Inbound** tab, click `Edit`, and then `Add Rule`:
      - Type: `Custom TCP`
      - Protocol: `TCP`
      - Port Range: `8080`
      - Source: `Custom` `0.0.0.0/0, ::/0`
    - Then `Save`
  - If the `ufw` firewall is enabled, configure settings to include `port 8080` by running the following command:

```bash
sudo ufw allow 8080/tcp
```

Earlier you setup `pm2` to start the services (your **Strapi project**) whenever the **EC2 instance** reboots or is started. You will now do the same for the `webhook` script.

- Install the webhook as a `Systemd` service
  
  - Run `echo $PATH` and copy the output for use in the next step.

```bash
cd ~
echo $PATH
/home/your-name/.npm-global/bin:/home/your-name/bin:/home/your-name/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

- Create a `webhook.service` file:

```bash
sudo nano /etc/systemd/system/webhook.service
```

- In the `nano` editor, copy/paste the following script, but make sure to replace `ubuntu` **in two places** if you changed the default `ubuntu` user, and `paste the $PATH` from above.

✋ Caution

Delete the #comments before saving, then save and exit.

```bash
[Unit]
Description=Github webhook
After=network.target[Service]
Environment=PATH=/PASTE-PATH_HERE #path from echo $PATH (as above)
Type=simpleUser=ubuntu #replace with your name, if changed from default ubuntu 
userExecStart=/usr/bin/node /home/ubuntu/NodeWebHooks/webhook.js #replace with your name, if changed from default ubuntu user
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

- Enable and start the new service so it starts when the system boots:

```bash
sudo systemctl enable webhook.servicesudo systemctl start webhook
```

- Check the status of the webhook:

```bs
sudo systemctl status webhook
```

- You may test your **webhook** by following the instructions [here](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync#step-4-testing-the-webhook).
