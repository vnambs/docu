---
id: certbot
slug: /certbot
title: Certbot
authors: vnambs
---

## Nginx on Ubuntu 20

- **SSH into the server**
  
  SSH into the server running your HTTP website as a user with sudo privileges.

- **Install snapd**
  
  You'll need to install snapd and make sure you follow any instructions to enable classic snap support.
  
  Alternatively, *snapd* can be installed from the command line:
  
  ```bash
  sudo apt update
  sudo apt install snapd
  ```
  
  Either log out and back in again, or restart your system, to ensure snap’s paths are updated correctly.
  
  To test your system, install the [hello-world](https://snapcraft.io/hello-world) snap and make sure it runs correctly:
  
  ```bash
  $ sudo snap install hello-world
  hello-world 6.4 from Canonical✓ installed
  $ hello-world
  Hello World!
  ```

- **Remove certbot-auto and any Certbot OS packages**
  
  If you have any Certbot packages installed using an OS package manager like `apt`, `dnf`, or `yum`, you should remove them before installing the Certbot snap to ensure that when you run the command `certbot` the snap is used rather than the installation from your OS package manager. The exact command to do this depends on your OS, but common examples are `sudo apt-get remove certbot`, `sudo dnf remove certbot`, or `sudo yum remove certbot`.

- **Install Certbot**
  
  Run this command on the command line on the machine to install Certbot.
  
  ```bash
  sudo snap install --classic certbot
  ```

- **Prepare the Certbot command**
  
  Execute the following instruction on the command line on the machine to ensure that the `certbot` command can be run.
  
  ```bash
  sudo ln -s /snap/bin/certbot /usr/bin/certbot
  ```

- **Choose how you'd like to run Certbot**
  
  ###### Either get and install your certificates...
  
  Run this command to get a certificate and have Certbot edit your nginx configuration automatically to serve it, turning on HTTPS access in a single step.
  
  ```bash
  sudo certbot --nginx
  ```
  
  ###### Or, just get a certificate
  
  If you're feeling more conservative and would like to make the changes to your nginx configuration by hand, run this command.
  
  ```bash
  sudo certbot certonly --nginx
  ```

- **Test automatic renewal**
  
  The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command:
  
  sudo certbot renew --dry-run
  
  The command to renew certbot is installed in one of the following locations:
  
  - `/etc/crontab/`
  - `/etc/cron.*/*`
  - `systemctl list-timers`

- **Confirm that Certbot worked**
  
  To confirm that your site is set up properly, visit `https://yourwebsite.com/` in your browser and look for the lock icon in the URL bar.

[https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal](Certbot nginx)


