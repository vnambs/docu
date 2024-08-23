"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[478],{3622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(4848),s=t(8453);const o={},i=void 0,c={id:"Strapi/Production basis/Certbot",title:"Certbot",description:"Nginx on Ubuntu 20",source:"@site/docs/Strapi/Production basis/Certbot.md",sourceDirName:"Strapi/Production basis",slug:"/Strapi/Production basis/Certbot",permalink:"/docu/docs/Strapi/Production basis/Certbot",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Strapi/Production basis/Certbot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Deployement",permalink:"/docu/docs/Strapi/Production basis/AWS Deployement"},next:{title:"Nginx Proxying",permalink:"/docu/docs/Strapi/Production basis/NGINX-Proxy"}},a={},l=[{value:"Nginx on Ubuntu 20",id:"nginx-on-ubuntu-20",level:2},{value:"Either get and install your certificates...",id:"either-get-and-install-your-certificates",level:6},{value:"Or, just get a certificate",id:"or-just-get-a-certificate",level:6}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"nginx-on-ubuntu-20",children:"Nginx on Ubuntu 20"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SSH into the server"})}),"\n",(0,r.jsx)(n.p,{children:"SSH into the server running your HTTP website as a user with sudo privileges."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Install snapd"})}),"\n",(0,r.jsx)(n.p,{children:"You'll need to install snapd and make sure you follow any instructions to enable classic snap support."}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively,\xa0",(0,r.jsx)(n.em,{children:"snapd"}),"\xa0can be installed from the command line:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\r\nsudo apt install snapd\n"})}),"\n",(0,r.jsx)(n.p,{children:"Either log out and back in again, or restart your system, to ensure snap\u2019s paths are updated correctly."}),"\n",(0,r.jsxs)(n.p,{children:["To test your system, install the\xa0",(0,r.jsx)(n.a,{href:"https://snapcraft.io/hello-world",children:"hello-world"}),"\xa0snap and make sure it runs correctly:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ sudo snap install hello-world\r\nhello-world 6.4 from Canonical\u2713 installed\r\n$ hello-world\r\nHello World!\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Remove certbot-auto and any Certbot OS packages"})}),"\n",(0,r.jsxs)(n.p,{children:["If you have any Certbot packages installed using an OS package manager like\xa0",(0,r.jsx)(n.code,{children:"apt"}),",\xa0",(0,r.jsx)(n.code,{children:"dnf"}),", or\xa0",(0,r.jsx)(n.code,{children:"yum"}),", you should remove them before installing the Certbot snap to ensure that when you run the command\xa0",(0,r.jsx)(n.code,{children:"certbot"}),"\xa0the snap is used rather than the installation from your OS package manager. The exact command to do this depends on your OS, but common examples are\xa0",(0,r.jsx)(n.code,{children:"sudo apt-get remove certbot"}),",\xa0",(0,r.jsx)(n.code,{children:"sudo dnf remove certbot"}),", or\xa0",(0,r.jsx)(n.code,{children:"sudo yum remove certbot"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Install Certbot"})}),"\n",(0,r.jsx)(n.p,{children:"Run this command on the command line on the machine to install Certbot."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo snap install --classic certbot\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Prepare the Certbot command"})}),"\n",(0,r.jsxs)(n.p,{children:["Execute the following instruction on the command line on the machine to ensure that the\xa0",(0,r.jsx)(n.code,{children:"certbot"}),"\xa0command can be run."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /snap/bin/certbot /usr/bin/certbot\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Choose how you'd like to run Certbot"})}),"\n",(0,r.jsx)(n.h6,{id:"either-get-and-install-your-certificates",children:"Either get and install your certificates..."}),"\n",(0,r.jsx)(n.p,{children:"Run this command to get a certificate and have Certbot edit your nginx configuration automatically to serve it, turning on HTTPS access in a single step."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo certbot --nginx\n"})}),"\n",(0,r.jsx)(n.h6,{id:"or-just-get-a-certificate",children:"Or, just get a certificate"}),"\n",(0,r.jsx)(n.p,{children:"If you're feeling more conservative and would like to make the changes to your nginx configuration by hand, run this command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo certbot certonly --nginx\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Test automatic renewal"})}),"\n",(0,r.jsx)(n.p,{children:"The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command:"}),"\n",(0,r.jsx)(n.p,{children:"sudo certbot renew --dry-run"}),"\n",(0,r.jsx)(n.p,{children:"The command to renew certbot is installed in one of the following locations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/etc/crontab/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/etc/cron.*/*"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"systemctl list-timers"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Confirm that Certbot worked"})}),"\n",(0,r.jsxs)(n.p,{children:["To confirm that your site is set up properly, visit\xa0",(0,r.jsx)(n.code,{children:"https://yourwebsite.com/"}),"\xa0in your browser and look for the lock icon in the URL bar."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["[",(0,r.jsx)(n.a,{href:"https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal%5D(Certbot",children:"https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal](Certbot"})," nginx)"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);