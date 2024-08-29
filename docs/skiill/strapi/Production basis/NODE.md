---
id: node
slug: /node
title: Installing Node
authors: vnambs
---

# Install NVM on Ubuntu 20.04

[https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/](installing node version manager)

## Prerequisites

- You must have a running Ubuntu 20.04 Linux system with shell access.
- Log in with a user account to which you need to install node.js.

## 1. Installing NVM on Ubuntu

A shell script is available for the installation of nvm on the Ubuntu 20.04 Linux system. Open a terminal on your system or connect a remote system using SSH. Use the following commands to install curl on your system, then run the nvm installer script.

```bash
sudo apt install curl 
```

The nvm installer script creates an environment entry to the login script of the current user. You can either log out and log in again to load the environment or execute the below command to do the same.

```bash
source ~/.bashrc   
```

The nvm installation is successfully completed on your Ubuntu system.

## 2. Installing Node using NVM

You can install multiple node.js versions using nvm. And use the required version for your application from installed node.js.

Install the latest version of node.js. Here node is the alias for the latest version.

```bash
nvm install node 
```

To install a specific version of node:

```bash
nvm install 18.16.0 
```

Replace 18.16.0 with the desired version number.

You can also install the latest LTS (Long Term Support) version of Node.js by running:

```bash
nvm install --lts 
```

You can choose any other version to install using the above command. The very first version installed becomes the default. New shells will start with the default version of the node (e.g., nvm alias default).

## 3. Working with NVM

You can use the following command to list installed versions of the node for the current user.

```bash
nvm ls 
```

With this command, you can find the available node.js version for the installation.

```bash
nvm ls-remote 
```

You can also select a different version for the current session. The selected version will be the currently active version for the current shell only.

```bash
nvm use 18.16.0 
```

To find the default Node version set for the current user, type:

```bash
nvm run default --version 
```

You can run a Node script with the desired version of node.js using the below command:

```bash
nvm exec 18.16.0 server.js 
```

## 4. Uninstall Node Version

To uninstall a specific Node.js version, use the nvm uninstall command followed by the version number. You can find the installed versions using **`nvm ls`** command. For example, if you want to uninstall Node.js version 18.16.0, run the following command:

```bas
nvm uninstall 18.16.0 
```

Replace 14.18.1 with the desired version number you want to uninstall.
