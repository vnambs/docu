# NGINX and Strapi
# **Strapi on NGINX, AWS ec2 ubuntu server**

The available NGINX Ubuntu release support is listed at [this distribution page](https://nginx.org/packages/ubuntu/dists/). For a mapping of Ubuntu versions to release names, please visit the [Official Ubuntu Releases page](https://wiki.ubuntu.com/Releases).

Append the appropriate stanza to `/etc/apt/sources.list`. If there is concern about persistence of repository additions (i.e. DigitalOcean Droplets), the appropriate stanza may instead be added to a different list file under `/etc/apt/sources.list.d/`, such as `/etc/apt/sources.list.d/nginx.list`.

> Replace $release with your corresponding Ubuntu release.

```bas
deb https://nginx.org/packages/ubuntu/ $release nginx
deb-src https://nginx.org/packages/ubuntu/ $release nginx
```

e.g. Ubuntu 20.04 (Focal Fossa):

```bash
deb https://nginx.org/packages/ubuntu/ focal nginx
deb-src https://nginx.org/packages/ubuntu/ focal nginx
```

To install the packages, execute in your shell:

```bash
sudo apt update
sudo apt install nginx
```

If a `W: GPG error: https://nginx.org/packages/ubuntu focal InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY $key` is encountered during the NGINX repository update, execute the following:

> Replace $key with the corresponding $key from your GPG error.

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys $key
sudo apt update
sudo apt install nginx
```

You have now nginx installed on your server but not ready to serve web pages. you have to start the nginx. You can do this by using this command:

```bash
sudo systemctl start nginx
```

### Ubuntu PPA

This PPA is maintained by volunteers and is not distributed by nginx.org. It has some additional compiled-in modules and may be more fitting for your environment.

You can get the latest stable version of NGINX from the [NGINX PPA](https://launchpad.net/~nginx/+archive/ubuntu/development) on Launchpad: You will need to have root privileges to perform the following commands.

For Ubuntu 20.04 and newer:

```bash
sudo -s
nginx=stable # use nginx=development for latest development version
add-apt-repository ppa:nginx/$nginx
apt update
apt install nginx
```

If you get an error about add-apt-repository not existing, you will want to install `python-software-properties`. For other Debian/Ubuntu based distributions, you can try the lucid variant of the PPA which is the most likely to work on older package sets:

```bash
sudo -s
nginx=stable # use nginx=development for latest development version
echo "deb http://ppa.launchpad.net/nginx/$nginx/ubuntu lucid main" > /etc/apt/sources.list.d/nginx-$nginx-lucid.list
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C300EE8C
apt update
apt install nginx
```

[https://www.nginx.com/resources/wiki/start/topics/tutorials/install/](Nginx installation)https://www.simplified.guide/ssh/copy-file