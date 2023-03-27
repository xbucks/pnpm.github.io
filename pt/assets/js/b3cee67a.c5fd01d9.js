"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[282],{9613:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(9496);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=o,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||r;return a?t.createElement(k,l(l({ref:n},m),{},{components:a})):t.createElement(k,l({ref:n},m))}));function c(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3233:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var t=a(2962),o=a(2742),r=(a(9496),a(9613)),l=["components"],p={id:"installation",title:"Instala\xe7\xe3o"},i=void 0,s={unversionedId:"installation",id:"version-7.x/installation",title:"Instala\xe7\xe3o",description:"Usando um script",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/pt/7.x/installation",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"installation",title:"Instala\xe7\xe3o"},sidebar:"version-7.x/docs",previous:{title:"Motiva\xe7\xe3o",permalink:"/pt/7.x/motivation"},next:{title:"Compara\xe7\xe3o de features",permalink:"/pt/7.x/feature-comparison"}},m={},d=[{value:"Usando um script",id:"usando-um-script",level:2},{value:"No Windows",id:"no-windows",level:3},{value:"Nos sistemas POSIX",id:"nos-sistemas-posix",level:3},{value:"No Alpine Linux",id:"no-alpine-linux",level:3},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",level:3},{value:"Instalando uma vers\xe3o espec\xedfica",id:"instalando-uma-vers\xe3o-espec\xedfica",level:3},{value:"Usando Corepack",id:"usando-corepack",level:2},{value:"Usando npm",id:"usando-npm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilidade",id:"compatibilidade",level:2},{value:"Solu\xe7\xe3o de Problemas",id:"solu\xe7\xe3o-de-problemas",level:2},{value:"Usando um alias mais curto",id:"usando-um-alias-mais-curto",level:2},{value:"Como adicionar um alias permanente em sistemas POSIX",id:"como-adicionar-um-alias-permanente-em-sistemas-posix",level:4},{value:"Adicionando um alias permanente no Powershell (Windows):",id:"adicionando-um-alias-permanente-no-powershell-windows",level:4},{value:"Desinstalando o pnpm",id:"desinstalando-o-pnpm",level:2}],u={toc:d};function c(e){var n=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usando-um-script"},"Usando um script"),(0,r.kt)("p",null,"Voc\xea pode instalar o pnpm, ainda que voc\xea n\xe3o tenha o Node.js instalado, usando os scripts a seguir."),(0,r.kt)("h3",{id:"no-windows"},"No Windows"),(0,r.kt)("p",null,"Usando o PowerShell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("h3",{id:"nos-sistemas-posix"},"Nos sistemas POSIX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Se voc\xea n\xe3o tiver curl instalado, poder\xe1 usar wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("h3",{id:"no-alpine-linux"},"No Alpine Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# bash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -\n# sh\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -\n# dash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -\n')),(0,r.kt)("h3",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),(0,r.kt)("p",null,"Se voc\xea n\xe3o usar a vers\xe3o aut\xf4nomo para instalar o pnpm, precisar\xe1 ter o Node.js (pelo menos v14) para ser instalado em seu sistema."),(0,r.kt)("h3",{id:"instalando-uma-vers\xe3o-espec\xedfica"},"Instalando uma vers\xe3o espec\xedfica"),(0,r.kt)("p",null,"Antes de rodar o script de instala\xe7\xe3o, voc\xea pode, opcionalmente, setar uma vari\xe1vel de ambiente (. env) ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," para instalar uma vers\xe3o espec\xedfica do pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ent\xe3o, voc\xea pode utilizar o comando ",(0,r.kt)("a",{parentName:"p",href:"/pt/7.x/cli/env"},"pnpm env")," para instalar Node.js.")),(0,r.kt)("h2",{id:"usando-corepack"},"Usando Corepack"),(0,r.kt)("p",null,"Desde a vers\xe3o v16.13, Node.js inclui ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," para controlar a instala\xe7\xe3o de gerenciadores de pacotes. Esta \xe9 uma ferramenta experimental, ent\xe3o voc\xea precisa habilit\xe1-la com o seguinte comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"Se voc\xea instalou o Node.js usando o Homebrew, voc\xea precisar\xe1 instalar o corepack separadamente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,r.kt)("p",null,"Isso ir\xe1 automaticamente instalar pnpm no seu sistema. Entretanto, provavelmente n\xe3o ser\xe1 a vers\xe3o mais recente do pnpm. Para atualiz\xe1-lo, verifique qual \xe9 a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\xfaltima vers\xe3o do pnpm")," e execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"Com o Node.js v16.17 ou mais recente, voc\xea pode instalar a vers\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," (mais recente) do pnpm ao especificar a tag (etiqueta):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"usando-npm"},"Usando npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,r.kt)("p",null,"Se voc\xea tiver o Homebrew instalado, poder\xe1 instalar pnpm usando o seguinte comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,r.kt)("p",null,"Se voc\xea tiver Scoop instalado, poder\xe1 instalar pnpm usando o seguinte comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Voc\xea gostaria de utilizar o pnpm em servidores de Integra\xe7\xe3o Cont\xednua (CI)? Veja: ",(0,r.kt)("a",{parentName:"p",href:"/pt/7.x/continuous-integration"},"Integra\xe7\xe3o Cont\xednua"),".")),(0,r.kt)("h2",{id:"compatibilidade"},"Compatibilidade"),(0,r.kt)("p",null,"Aqui est\xe1 uma lista de vers\xf5es anteriores do pnpm com suas respectivas vers\xf5es do Node.js suportadas."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"solu\xe7\xe3o-de-problemas"},"Solu\xe7\xe3o de Problemas"),(0,r.kt)("p",null,"Se o pnpm falhar, e n\xe3o for resolvido por meio de uma reinstala\xe7\xe3o, voc\xea pode precisar remov\xea-lo manualmente do PATH."),(0,r.kt)("p",null,"Assumindo que voc\xea t\xeam o seguinte erro ao rodar ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"Primeiro, tente encontrar a localiza\xe7\xe3o do pnpm rodando: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Se voc\xea usar Windows, execute este comando no Git Bash. Voc\xea ir\xe1 ver a localiza\xe7\xe3o do comando pnpm, como:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Arquivos de Programas/nodejs/pnpm\n")),(0,r.kt)("p",null,"Agora que voc\xea sabe onde est\xe1 localizado o pnpm, abra este diret\xf3rio e remova qualquer arquivo relacionado ao pnpm (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Ent\xe3o, instale o pnpm novamente, e ele deve funcionar como esperado."),(0,r.kt)("h2",{id:"usando-um-alias-mais-curto"},"Usando um alias mais curto"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," pode ser dif\xedcil de digitar, ent\xe3o voc\xea pode usar um ali\xe1s mais curto como ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," ao inv\xe9s disso."),(0,r.kt)("h4",{id:"como-adicionar-um-alias-permanente-em-sistemas-posix"},"Como adicionar um alias permanente em sistemas POSIX"),(0,r.kt)("p",null,"Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h4",{id:"adicionando-um-alias-permanente-no-powershell-windows"},"Adicionando um alias permanente no Powershell (Windows):"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"desinstalando-o-pnpm"},"Desinstalando o pnpm"),(0,r.kt)("p",null,"Se voc\xea precisar remover a CLI do pnpm de seu sistema operacional, assim como quaisquer arquivos que ele tenha gravado em seu disco, consulte ",(0,r.kt)("a",{parentName:"p",href:"/pt/7.x/uninstall"},"Desinstalando o pnpm"),"."))}c.isMDXComponent=!0}}]);