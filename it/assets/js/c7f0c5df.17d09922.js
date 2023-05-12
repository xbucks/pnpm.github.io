"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[788],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var l=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||a;return n?l.createElement(f,r(r({ref:t},u),{},{components:n})):l.createElement(f,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var l=n(2962),i=n(2742),a=(n(9496),n(9613)),r=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"version-8.x/cli/install",title:"pnpm install",description:"Alias: i",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-8.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/it/cli/install",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"8.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-8.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/it/cli/add"},next:{title:"pnpm update",permalink:"/it/cli/update"}},u={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"--force",id:"--force",level:3},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;nome&gt;",id:"--reporternome",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3},{value:"--resolution-only",id:"--resolution-only",level:3}],m={toc:d};function c(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"i")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," viene utilizzato per installare tutte le dipendenze di un progetto."),(0,a.kt)("p",null,"In un ambiente CI, l'installazione fallisce se un lockfile \xe8 presente ma necessita di un aggiornamento."),(0,a.kt)("p",null,"All'interno di uno ",(0,a.kt)("a",{parentName:"p",href:"/it/workspaces"},"spazio di lavoro"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," installa tutte le dipendenze in tutti i progetti. Se vuoi disabilitare questo comportamento, imposta l'opzione ",(0,a.kt)("inlineCode",{parentName:"p"},"recursive-install")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8476).Z,width:"940",height:"472"})),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Comando"),(0,a.kt)("th",{parentName:"tr",align:null},"Significato"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,a.kt)("td",{parentName:"tr",align:null},"Installa offline solo dall'archivio")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," non viene aggiornato")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,a.kt)("td",{parentName:"tr",align:null},"Solo ",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," viene aggiornato")))),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"Force reinstall dependencies: refetch packages modified in store, recreate a lockfile and/or modules directory created by a non-compatible version of pnpm. Install all optionalDependencies even they don't satisfy the current environment(cpu, os, arch)."),(0,a.kt)("h3",{id:"--offline"},"--offline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use only packages already available in the store. If a package won't be found locally, the installation will fail."),(0,a.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", i controlli di obsolescenza per i dati memorizzati nella cache verranno ignorati, ma i dati mancanti verranno richiesti dal server. Per forzare la modalit\xe0 offline completa, utilizzare ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"pnpm will not install any package listed in ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," and will remove those insofar they were already installed, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production status from this flag instead."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Only ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed and ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," are removed insofar they were already installed, regardless of the ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Le dipendenze opzionali (",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),") non vengono installate."),(0,a.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se utilizzato, aggiorna solo ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," e ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". Non viene scritto nulla nella cartella ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,a.kt)("p",null,"Correggi automaticamente le voci del file di blocco non funzionanti."),(0,a.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Per non CI: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Per CI: ",(0,a.kt)("strong",{parentName:"li"},"true"),", se \xe8 presente un lockfile"))),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Se ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm non genera un lockfile e l'installazione fallisce se il lockfile \xe8 fuori sincronizzazione con il manifesto / un aggiornamento \xe8 necessario o nessun lockfile \xe8 presente."),(0,a.kt)("p",null,"This setting is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," by default in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/watson/ci-info#supported-ci-tools"},"CI environments"),". The following code is used to detect CI environments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"',title:'"https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"'},"exports.isCI = !!(\n  env.CI || // Travis CI, CircleCI, Cirrus CI, GitLab CI, Appveyor, CodeShip, dsari\n  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI\n  env.BUILD_NUMBER || // Jenkins, TeamCity\n  env.RUN_ID || // TaskCluster, dsari\n  exports.name ||\n  false\n)\n")),(0,a.kt)("h3",{id:"--reporternome"},"--reporter=","<","nome",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Per TTY stdout: ",(0,a.kt)("strong",{parentName:"li"},"default")),(0,a.kt)("li",{parentName:"ul"},"Per stdout non TTY: ",(0,a.kt)("strong",{parentName:"li"},"append-only")))),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"default"),", ",(0,a.kt)("strong",{parentName:"li"},"append-only"),", ",(0,a.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,a.kt)("strong",{parentName:"li"},"silent"))),(0,a.kt)("p",null,"Consente di scegliere il segnalatore che registrer\xe0 le informazioni di debug al terminale circa l'avanzamento dell'installazione."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"silent")," - nessun output viene registrato nella console, neanche degli errori fatali"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"default")," - il segnalatore predefinito quando lo stdout \xe8 TTY"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"append-only")," - l'output viene sempre aggiunto alla fine. Non vengono eseguite manipolazioni del cursore"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ndjson")," - il segnalatore pi\xf9 verboso. Stampa tutti i log nel formato ",(0,a.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson"))),(0,a.kt)("p",null,"If you want to change what type of information is printed, use the ",(0,a.kt)("a",{parentName:"p",href:"/it/npmrc#loglevel"},"loglevel")," setting."),(0,a.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Avvia un server di archiviazione in background. Il server di archiviazione continuer\xe0 a funzionare al termine dell'installazione. Per arrestare il server di archiviazione, eseguire ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,a.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Crea una struttura flat di ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", simile a quella di ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,a.kt)("strong",{parentName:"p"},"ATTENZIONE"),": Questo \xe8 altamente sconsigliato."),(0,a.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"Booleano"))),(0,a.kt)("p",null,"Non eseguire alcun script definito nel file ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," del progetto e nelle sue dipendenze."),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto>"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")),(0,a.kt)("h3",{id:"--resolution-only"},"--resolution-only"),(0,a.kt)("p",null,"Aggiunto nella versione: v8.3.0"),(0,a.kt)("p",null,"Re-runs resolution: useful for printing out peer dependency issues."))}c.isMDXComponent=!0},8476:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);