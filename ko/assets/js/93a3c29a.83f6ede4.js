"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8583],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||p;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,r=new Array(p);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<p;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(2962),l=n(2742),p=(n(9496),n(9613)),r=["components"],i={id:"installation",title:"\uc124\uce58\ud558\uae30"},o=void 0,s={unversionedId:"installation",id:"version-7.x/installation",title:"\uc124\uce58\ud558\uae30",description:"\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc124\uce58\ud558\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ko/7.x/installation",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"installation",title:"\uc124\uce58\ud558\uae30"},sidebar:"version-7.x/docs",previous:{title:"\ub3d9\uae30",permalink:"/ko/7.x/motivation"},next:{title:"\uae30\ub2a5 \ube44\uad50",permalink:"/ko/7.x/feature-comparison"}},m={},u=[{value:"\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc124\uce58\ud558\uae30",id:"\uc2a4\ud06c\ub9bd\ud2b8\ub85c-\uc124\uce58\ud558\uae30",level:2},{value:"\uc708\ub3c4\uc6b0",id:"\uc708\ub3c4\uc6b0",level:3},{value:"POSIX systems",id:"posix-systems",level:3},{value:"Alpine Linux",id:"alpine-linux",level:3},{value:"\ud544\uc218 \uad6c\uc131 \uc694\uc18c",id:"\ud544\uc218-\uad6c\uc131-\uc694\uc18c",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Corepack \uc0ac\uc6a9\ud558\uae30",id:"corepack-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"npm \uc0ac\uc6a9\ud558\uae30",id:"npm-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Homebrew \uc0ac\uc6a9\ud558\uae30",id:"homebrew-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Scoop \uc0ac\uc6a9\ud558\uae30",id:"scoop-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ud638\ud658\uc131",id:"\ud638\ud658\uc131",level:2},{value:"\ubb38\uc81c \ud574\uacb0",id:"\ubb38\uc81c-\ud574\uacb0",level:2},{value:"\ub2e8\ucd95\uc5b4 \uc0ac\uc6a9\ud558\uae30",id:"\ub2e8\ucd95\uc5b4-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"POSIX \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30",id:"posix-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30",level:4},{value:"Powershell (Windows)\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30",id:"powershell-windows\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30",level:4},{value:"pnpm \uc0ad\uc81c",id:"pnpm-\uc0ad\uc81c",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\uc2a4\ud06c\ub9bd\ud2b8\ub85c-\uc124\uce58\ud558\uae30"},"\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc124\uce58\ud558\uae30"),(0,p.kt)("p",null,"Node.js\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub354\ub77c\ub3c4 \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"\uc708\ub3c4\uc6b0"},"\uc708\ub3c4\uc6b0"),(0,p.kt)("p",null,"Powershell:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,p.kt)("h3",{id:"posix-systems"},"POSIX systems"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("p",null,"curl\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 wget\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,p.kt)("h3",{id:"alpine-linux"},"Alpine Linux"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'# bash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -\n# sh\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -\n# dash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -\n')),(0,p.kt)("h3",{id:"\ud544\uc218-\uad6c\uc131-\uc694\uc18c"},"\ud544\uc218 \uad6c\uc131 \uc694\uc18c"),(0,p.kt)("p",null,"If you don't use the standalone script to install pnpm, then you need to have Node.js (at least v14) to be installed on your system."),(0,p.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,p.kt)("p",null,"Prior to running the install script, you may optionally set an env variable ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\uadf8 \ub2e4\uc74c ",(0,p.kt)("a",{parentName:"p",href:"/ko/7.x/cli/env"},"pnpm env")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud574 Node.js\ub97c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("h2",{id:"corepack-\uc0ac\uc6a9\ud558\uae30"},"Corepack \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"v16.13\ubd80\ud130 Node.js\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 ",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uc2e4\ud5d8\uc801\uc778 \uae30\ub2a5\uc774\ubbc0\ub85c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uc5ec \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,p.kt)("p",null,"If you installed Node.js using Homebrew, you'll need to install corepack separately:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,p.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \uc2dc\uc2a4\ud15c\uc5d0 pnpm\uc774 \uc790\ub3d9\uc73c\ub85c \uc124\uce58\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc544\ub9c8\ub3c4 \ucd5c\uc2e0 \ubc84\uc804\uc758 pnpm\uc774 \uc544\ub2d0 \uac83\uc785\ub2c8\ub2e4. \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub824\uba74 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\ucd5c\uc2e0 pnpm \ubc84\uc804")," \uc774 \ubb34\uc5c7\uc778\uc9c0 \ud655\uc778\ud558\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc2ed\uc2dc\uc624."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,p.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,p.kt)("h2",{id:"npm-\uc0ac\uc6a9\ud558\uae30"},"npm \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,p.kt)("h2",{id:"homebrew-\uc0ac\uc6a9\ud558\uae30"},"Homebrew \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"\uc774\ubbf8 \uc124\uce58\ub41c package manager\uac00 \uc788\ub2e4\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub85c pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,p.kt)("h2",{id:"scoop-\uc0ac\uc6a9\ud558\uae30"},"Scoop \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"Scoop\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc73c\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"pnpm\uc744 CI \uc11c\ubc84\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub098\uc694? ",(0,p.kt)("a",{parentName:"p",href:"/ko/7.x/continuous-integration"},"Continuous Integration"),"\uc744 \ucc38\uace0\ud558\uc138\uc694.")),(0,p.kt)("h2",{id:"\ud638\ud658\uc131"},"\ud638\ud658\uc131"),(0,p.kt)("p",null,"Node.js \ubc84\uc804\uc5d0 \ud638\ud658\ub418\ub294 pnpm \ubc84\uc804 \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,p.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,p.kt)("h2",{id:"\ubb38\uc81c-\ud574\uacb0"},"\ubb38\uc81c \ud574\uacb0"),(0,p.kt)("p",null,"pnpm\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uace0 \uc7ac\uc124\uce58\ub85c\ub3c4 \ud574\uacb0\ud560 \uc218 \uc5c6\ub2e4\uba74 PATH\uc5d0\uc11c \uc9c1\uc811 \uc81c\uac70\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\uc744 \ucce4\ub354\ub2c8 \uc774\ub7f0 \uc5d0\ub7ec\uac00 \ub5b4\ub2e4\uace0 \ud569\uc2dc\ub2e4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,p.kt)("p",null,"\uba3c\uc800, ",(0,p.kt)("inlineCode",{parentName:"p"},"which pnpm"),"\uc744 \uc2e4\ud589\ud574\uc11c pnpm\uc758 \uc704\uce58\ub97c \ucc3e\uc73c\uc138\uc694. Windows\ub77c\uba74, Git Bash\ub85c \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uc138\uc694. \uadf8\ub7fc pnpm\uc774 \uc5b4\ub514\uc5d0 \uc788\ub294\uc9c0 \ucc3e\uc744 \uc218 \uc788\uc744 \uac81\ub2c8\ub2e4. \uc608:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,p.kt)("p",null,"\uc774\uc81c pnpm CLI\uac00 \uc5b4\ub528\ub294\uc9c0 \uc54c\uc558\uc73c\ub2c8, \ud574\ub2f9 \ud3f4\ub354\ub97c \uc5f4\uace0 pnpm\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 \ud30c\uc77c\uc744 \uc9c0\uc6b0\uc138\uc694 (",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm"),", \ub4f1\ub4f1). \uc644\ub8cc\ub41c \ud6c4, pnpm\uc744 \ub2e4\uc2dc \uc124\uce58\ud558\uba74 \uc81c\ub300\ub85c \uc791\ub3d9\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"\ub2e8\ucd95\uc5b4-\uc0ac\uc6a9\ud558\uae30"},"\ub2e8\ucd95\uc5b4 \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm"),"\uc744 \uc9c1\uc811 \uc785\ub825\ud558\uae30 \ubcf4\ub2e4 ",(0,p.kt)("inlineCode",{parentName:"p"},"pn"),"\uacfc \uac19\uc740 \ub2e8\ucd95\uc5b4\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h4",{id:"posix-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30"},"POSIX \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},".bashrc "),", ",(0,p.kt)("inlineCode",{parentName:"p"},".zshrc"),", ",(0,p.kt)("inlineCode",{parentName:"p"}," config.fish")," \uc640 \uac19\uc740 \uc544\ub798\uc758 \uc124\uc815\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,p.kt)("h4",{id:"powershell-windows\uc5d0\uc11c-\ub2e8\ucd95\uc5b4-\uc124\uc815\ud558\uae30"},"Powershell (Windows)\uc5d0\uc11c \ub2e8\ucd95\uc5b4 \uc124\uc815\ud558\uae30"),(0,p.kt)("p",null,"Powershell\uc5d0\uc11c \uad00\ub9ac\uc790 \uad8c\ud55c\uc73c\ub85c \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,p.kt)("p",null,"\ud604\uc7ac \uc5f4\ub824\uc788\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"profile.ps1")," \ud30c\uc77c\uc5d0 \ub2e4\uc74c \uc124\uc815\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,p.kt)("p",null,"\ud30c\uc77c\uc744 \uc800\uc7a5\ud558\uace0 \ud3b8\uc9d1\ucc3d\uc744 \ub2eb\uc2b5\ub2c8\ub2e4. \ubcc4\uce6d\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uc5f4\ub824 \uc788\ub294 Powershell \ucc3d\uc744 \ub2eb\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"pnpm-\uc0ad\uc81c"},"pnpm \uc0ad\uc81c"),(0,p.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0\uc11c pnpm CLI\ub97c \uc81c\uac70\ud558\uace0 \ub514\uc2a4\ud06c\uc5d0 \uae30\ub85d\ud55c \ubaa8\ub4e0 \ud30c\uc77c\uc744 \uc81c\uac70\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,p.kt)("a",{parentName:"p",href:"/ko/7.x/uninstall"},"pnpm \uc81c\uac70"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}c.isMDXComponent=!0}}]);