"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2505],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||p;return t?a.createElement(k,r(r({ref:n},m),{},{components:t})):a.createElement(k,r({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=t.length,r=new Array(p);r[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<p;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(2962),l=t(2742),p=(t(9496),t(9613)),r=["components"],i={id:"installation",title:"\uc124\uce58\ud558\uae30"},o=void 0,s={unversionedId:"installation",id:"installation",title:"\uc124\uce58\ud558\uae30",description:"\ud544\uc218 \uad6c\uc131 \uc694\uc18c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ko/next/installation",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"installation",title:"\uc124\uce58\ud558\uae30"},sidebar:"docs",previous:{title:"\ub3d9\uae30",permalink:"/ko/next/motivation"},next:{title:"pnpm CLI",permalink:"/ko/next/pnpm-cli"}},m={},u=[{value:"\ud544\uc218 \uad6c\uc131 \uc694\uc18c",id:"\ud544\uc218-\uad6c\uc131-\uc694\uc18c",level:2},{value:"\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc124\uce58\ud558\uae30",id:"\uc2a4\ud06c\ub9bd\ud2b8\ub85c-\uc124\uce58\ud558\uae30",level:2},{value:"\uc708\ub3c4\uc6b0",id:"\uc708\ub3c4\uc6b0",level:3},{value:"POSIX systems",id:"posix-systems",level:3},{value:"Alpine Linux",id:"alpine-linux",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Corepack \uc0ac\uc6a9\ud558\uae30",id:"corepack-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"npm \uc0ac\uc6a9\ud558\uae30",id:"npm-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Homebrew \uc0ac\uc6a9\ud558\uae30",id:"homebrew-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Scoop \uc0ac\uc6a9\ud558\uae30",id:"scoop-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Using Choco",id:"using-choco",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"POSIX \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30",id:"posix-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30",level:4},{value:"Powershell (Windows)\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30",id:"powershell-windows\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30",level:4},{value:"pnpm \uc0ad\uc81c",id:"pnpm-\uc0ad\uc81c",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\ud544\uc218-\uad6c\uc131-\uc694\uc18c"},"\ud544\uc218 \uad6c\uc131 \uc694\uc18c"),(0,p.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8 \ub610\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"@pnpm/exe")," \uac00 \uc544\ub2cc \ubc29\ubc95\uc73c\ub85c pnpm\uc744 \uc124\uce58\ud558\ub294 \uacbd\uc6b0 \uc2dc\uc2a4\ud15c\uc5d0 Node.js(v16.14 \uc774\uc0c1)\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"\uc2a4\ud06c\ub9bd\ud2b8\ub85c-\uc124\uce58\ud558\uae30"},"\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc124\uce58\ud558\uae30"),(0,p.kt)("p",null,"Node.js\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub354\ub77c\ub3c4 \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"\uc708\ub3c4\uc6b0"},"\uc708\ub3c4\uc6b0"),(0,p.kt)("p",null,"Powershell:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,p.kt)("h3",{id:"posix-systems"},"POSIX systems"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("p",null,"curl\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 wget\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("h3",{id:"alpine-linux"},"Alpine Linux"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'# bash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -\n# sh\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -\n# dash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -\n')),(0,p.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,p.kt)("p",null,"Prior to running the install script, you may optionally set an env variable ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\uadf8 \ub2e4\uc74c ",(0,p.kt)("a",{parentName:"p",href:"/ko/next/cli/env"},"pnpm env")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud574 Node.js\ub97c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("h2",{id:"corepack-\uc0ac\uc6a9\ud558\uae30"},"Corepack \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"v16.13\ubd80\ud130 Node.js\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uc2e4\ud5d8\uc801\uc778 \uae30\ub2a5\uc774\ubbc0\ub85c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uc5ec \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,p.kt)("p",null,"If you installed Node.js using Homebrew, you'll need to install corepack separately:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,p.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \uc2dc\uc2a4\ud15c\uc5d0 pnpm\uc774 \uc790\ub3d9\uc73c\ub85c \uc124\uce58\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc544\ub9c8\ub3c4 \ucd5c\uc2e0 \ubc84\uc804\uc758 pnpm\uc774 \uc544\ub2d0 \uac83\uc785\ub2c8\ub2e4. \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub824\uba74 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\ucd5c\uc2e0 pnpm \ubc84\uc804")," \uc774 \ubb34\uc5c7\uc778\uc9c0 \ud655\uc778\ud558\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc2ed\uc2dc\uc624."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,p.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,p.kt)("h2",{id:"npm-\uc0ac\uc6a9\ud558\uae30"},"npm \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"We provide two packages of pnpm CLI, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"@pnpm/exe"),"."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/pnpm"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm"))," is a ordinary version of pnpm, which needs Node.js to run."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@pnpm/exe"},(0,p.kt)("inlineCode",{parentName:"a"},"@pnpm/exe"))," is packaged with Node.js into an executable, so it may be used on a system with no Node.js installed.")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,p.kt)("p",null,"\ub610\ub294"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @pnpm/exe\n")),(0,p.kt)("h2",{id:"homebrew-\uc0ac\uc6a9\ud558\uae30"},"Homebrew \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"\uc774\ubbf8 \uc124\uce58\ub41c package manager\uac00 \uc788\ub2e4\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub85c pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,p.kt)("h2",{id:"scoop-\uc0ac\uc6a9\ud558\uae30"},"Scoop \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"Scoop\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc73c\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,p.kt)("h2",{id:"using-choco"},"Using Choco"),(0,p.kt)("p",null,"If you have Chocolatey installed, you can install pnpm using the following command:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"choco install pnpm\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,p.kt)("a",{parentName:"p",href:"/ko/next/continuous-integration"},"Continuous Integration"),".")),(0,p.kt)("h2",{id:"compatibility"},"Compatibility"),(0,p.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 7"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 8"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 20"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"?"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,p.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,p.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,p.kt)("p",null,"Let's assume you have the following error when running ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,p.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,p.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,p.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,p.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,p.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,p.kt)("h4",{id:"posix-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30"},"POSIX \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30"),(0,p.kt)("p",null,"Just put the following line to your ",(0,p.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,p.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,p.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,p.kt)("h4",{id:"powershell-windows\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30"},"Powershell (Windows)\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30"),(0,p.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,p.kt)("p",null,"In the ",(0,p.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,p.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,p.kt)("h2",{id:"pnpm-\uc0ad\uc81c"},"pnpm \uc0ad\uc81c"),(0,p.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,p.kt)("a",{parentName:"p",href:"/ko/next/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);