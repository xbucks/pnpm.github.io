"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1354],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9238:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(2962),l=t(2742),i=(t(9496),t(9613)),o=["components"],r={id:"installation",title:"Instala\xe7\xe3o"},p=void 0,s={unversionedId:"installation",id:"version-8.x/installation",title:"Instala\xe7\xe3o",description:"Prerequisites",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-8.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/pt/installation",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"8.x",frontMatter:{id:"installation",title:"Instala\xe7\xe3o"},sidebar:"version-8.x/docs",previous:{title:"Motiva\xe7\xe3o",permalink:"/pt/motivation"},next:{title:"Compara\xe7\xe3o de Recursos",permalink:"/pt/feature-comparison"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using a standalone script",id:"using-a-standalone-script",level:2},{value:"No Windows",id:"no-windows",level:3},{value:"Nos sistemas POSIX",id:"nos-sistemas-posix",level:3},{value:"No Alpine Linux",id:"no-alpine-linux",level:3},{value:"Installing a specific version",id:"installing-a-specific-version",level:3},{value:"Using Corepack",id:"using-corepack",level:2},{value:"Using npm",id:"using-npm",level:2},{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Using Scoop",id:"using-scoop",level:2},{value:"Using Choco",id:"using-choco",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Como adicionar um alias permanente em sistemas POSIX",id:"como-adicionar-um-alias-permanente-em-sistemas-posix",level:4},{value:"Adicionando um alias permanente no Powershell (Windows):",id:"adicionando-um-alias-permanente-no-powershell-windows",level:4},{value:"Desinstalando o pnpm",id:"desinstalando-o-pnpm",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"If you don't use the standalone script or ",(0,i.kt)("inlineCode",{parentName:"p"},"@pnpm/exe")," to install pnpm, then you need to have Node.js (at least v16.14) to be installed on your system."),(0,i.kt)("h2",{id:"using-a-standalone-script"},"Using a standalone script"),(0,i.kt)("p",null,"You may install pnpm even if you don't have Node.js installed, using the following scripts."),(0,i.kt)("h3",{id:"no-windows"},"No Windows"),(0,i.kt)("p",null,"Using PowerShell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,i.kt)("h3",{id:"nos-sistemas-posix"},"Nos sistemas POSIX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("p",null,"If you don't have curl installed, you would like to use wget:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("h3",{id:"no-alpine-linux"},"No Alpine Linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# bash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -\n# sh\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -\n# dash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -\n')),(0,i.kt)("h3",{id:"installing-a-specific-version"},"Installing a specific version"),(0,i.kt)("p",null,"Antes de rodar o script de instala\xe7\xe3o, voc\xea pode, opcionalmente, setar uma vari\xe1vel de ambiente (. env) ",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," para instalar uma vers\xe3o espec\xedfica do pnpm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Ent\xe3o, voc\xea pode utilizar o comando ",(0,i.kt)("a",{parentName:"p",href:"/pt/cli/env"},"pnpm env")," para instalar Node.js.")),(0,i.kt)("h2",{id:"using-corepack"},"Using Corepack"),(0,i.kt)("p",null,"Desde a vers\xe3o v16.13, Node.js inclui ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," para controlar a instala\xe7\xe3o de gerenciadores de pacotes. Esta \xe9 uma ferramenta experimental, ent\xe3o voc\xea precisa habilit\xe1-la com o seguinte comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,i.kt)("p",null,"Se voc\xea instalou o Node.js usando o Homebrew, voc\xea precisar\xe1 instalar o corepack separadamente:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,i.kt)("p",null,"Isso ir\xe1 automaticamente instalar pnpm no seu sistema. Entretanto, provavelmente n\xe3o ser\xe1 a vers\xe3o mais recente do pnpm. Para atualiz\xe1-lo, verifique qual \xe9 a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\xfaltima vers\xe3o do pnpm")," e execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,i.kt)("p",null,"Com o Node.js v16.17 ou mais recente, voc\xea pode instalar a vers\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," (mais recente) do pnpm ao especificar a tag (etiqueta):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,i.kt)("h2",{id:"using-npm"},"Using npm"),(0,i.kt)("p",null,"We provide two packages of pnpm CLI, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@pnpm/exe"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/pnpm"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm"))," is a ordinary version of pnpm, which needs Node.js to run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@pnpm/exe"},(0,i.kt)("inlineCode",{parentName:"a"},"@pnpm/exe"))," is packaged with Node.js into an executable, so it may be used on a system with no Node.js installed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @pnpm/exe\n")),(0,i.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,i.kt)("p",null,"If you have the package manager installed, you can install pnpm using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,i.kt)("h2",{id:"using-scoop"},"Using Scoop"),(0,i.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,i.kt)("h2",{id:"using-choco"},"Using Choco"),(0,i.kt)("p",null,"If you have Chocolatey installed, you can install pnpm using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"choco install pnpm\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,i.kt)("a",{parentName:"p",href:"/pt/continuous-integration"},"Continuous Integration"),".")),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 7"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 20"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"?"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,i.kt)("p",null,"Let's assume you have the following error when running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,i.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,i.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,i.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,i.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,i.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,i.kt)("h4",{id:"como-adicionar-um-alias-permanente-em-sistemas-posix"},"Como adicionar um alias permanente em sistemas POSIX"),(0,i.kt)("p",null,"Just put the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,i.kt)("h4",{id:"adicionando-um-alias-permanente-no-powershell-windows"},"Adicionando um alias permanente no Powershell (Windows):"),(0,i.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,i.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,i.kt)("h2",{id:"desinstalando-o-pnpm"},"Desinstalando o pnpm"),(0,i.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,i.kt)("a",{parentName:"p",href:"/pt/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);