"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5491],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=t(2962),l=t(2742),r=(t(9496),t(9613)),i=["components"],p={id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},o=void 0,s={unversionedId:"installation",id:"version-8.x/installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"Prerequisites",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-8.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ru/installation",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"8.x",frontMatter:{id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},sidebar:"version-8.x/docs",previous:{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",permalink:"/ru/motivation"},next:{title:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439",permalink:"/ru/feature-comparison"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using a standalone script",id:"using-a-standalone-script",level:2},{value:"\u041d\u0430 Windows",id:"\u043d\u0430-windows",level:3},{value:"\u041d\u0430 POSIX-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",id:"\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",level:3},{value:"\u041d\u0430 Alpine Linux",id:"\u043d\u0430-alpine-linux",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Using Corepack",id:"using-corepack",level:2},{value:"Using npm",id:"using-npm",level:2},{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Using Scoop",id:"using-scoop",level:2},{value:"Using Choco",id:"using-choco",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u043d\u0430 POSIX \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445",level:4},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u0432 PowerShell (Windows):",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u0432-powershell-windows",level:4},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"If you don't use the standalone script or ",(0,r.kt)("inlineCode",{parentName:"p"},"@pnpm/exe")," to install pnpm, then you need to have Node.js (at least v16.14) to be installed on your system."),(0,r.kt)("h2",{id:"using-a-standalone-script"},"Using a standalone script"),(0,r.kt)("p",null,"You may install pnpm even if you don't have Node.js installed, using the following scripts."),(0,r.kt)("h3",{id:"\u043d\u0430-windows"},"\u041d\u0430 Windows"),(0,r.kt)("p",null,"Using PowerShell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("h3",{id:"\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"},"\u041d\u0430 POSIX-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"If you don't have curl installed, you would like to use wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("h3",{id:"\u043d\u0430-alpine-linux"},"\u041d\u0430 Alpine Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# bash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -\n# sh\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -\n# dash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -\n')),(0,r.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441\u0440\u0435\u0434\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u0442\u0435\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,r.kt)("a",{parentName:"p",href:"/ru/cli/env"},"pnpm env")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Node.js.")),(0,r.kt)("h2",{id:"using-corepack"},"Using Corepack"),(0,r.kt)("p",null,"\u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 16.13, Node.js \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432. \u042d\u0442\u043e \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0435\u0451, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"If you installed Node.js using Homebrew, you'll need to install corepack separately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,r.kt)("p",null,"This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"using-npm"},"Using npm"),(0,r.kt)("p",null,"We provide two packages of pnpm CLI, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pnpm/exe"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/pnpm"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm"))," is a ordinary version of pnpm, which needs Node.js to run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@pnpm/exe"},(0,r.kt)("inlineCode",{parentName:"a"},"@pnpm/exe"))," is packaged with Node.js into an executable, so it may be used on a system with no Node.js installed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @pnpm/exe\n")),(0,r.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,r.kt)("p",null,"If you have the package manager installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"using-scoop"},"Using Scoop"),(0,r.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("h2",{id:"using-choco"},"Using Choco"),(0,r.kt)("p",null,"If you have Chocolatey installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"choco install pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/ru/continuous-integration"},"Continuous Integration"),".")),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 20"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,r.kt)("p",null,"Let's assume you have the following error when running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,r.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,r.kt)("h4",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u043d\u0430-posix-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u043d\u0430 POSIX \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445"),(0,r.kt)("p",null,"Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h4",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e-\u0430\u043b\u0438\u0430\u0441\u0430-\u0432-powershell-windows"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0430\u043b\u0438\u0430\u0441\u0430 \u0432 PowerShell (Windows):"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm"),(0,r.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,r.kt)("a",{parentName:"p",href:"/ru/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);