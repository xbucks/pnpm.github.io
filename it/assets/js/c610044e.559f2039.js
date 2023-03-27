"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2080],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(v,a(a({ref:t},d),{},{components:n})):i.createElement(v,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=n(2962),r=n(2742),o=(n(9496),n(9613)),a=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"version-7.x/cli/audit",title:"pnpm audit",description:"Verifica la presenza di problemi di sicurezza noti con i pacchetti installati.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/it/7.x/cli/audit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-7.x/docs",previous:{title:"pnpm dedupe",permalink:"/it/7.x/cli/dedupe"},next:{title:"pnpm list",permalink:"/it/7.x/cli/list"}},d={},u=[{value:"Opzioni",id:"opzioni",level:2},{value:"--audit-livello &lt;gravit\xe0&gt;",id:"--audit-livello-gravit\xe0",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Verifica la presenza di problemi di sicurezza noti con i pacchetti installati."),(0,o.kt)("p",null,"Se vengono rilevati problemi di sicurezza, prova ad aggiornare le tue dipendenze tramite ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Se un semplice aggiornamento non risolve tutti i problemi, usa le ",(0,o.kt)("a",{parentName:"p",href:"/it/7.x/package_json#pnpmoverrides"},"sostituzioni")," per forzare versioni che non sono vulnerabili. Ad esempio, se ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," \xe8 vulnerabile, usa questo override per forzare ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"In alternativa, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,o.kt)("p",null,"Se si desidera tollerare alcune vulnerabilit\xe0 poich\xe9 non influiscono sul progetto, \xe8 possibile utilizzare l'impostazione ",(0,o.kt)("a",{parentName:"p",href:"/it/7.x/package_json#pnpmauditconfigignorecves"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm.auditConfig.ignoreCves")),"."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--audit-livello-gravit\xe0"},"--audit-livello ","<","gravit\xe0",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Stampa solo avvisi con gravit\xe0 maggiore o uguale a ",(0,o.kt)("inlineCode",{parentName:"p"},"<gravit\xe0>"),"."),(0,o.kt)("h3",{id:"--fix"},"--fix"),(0,o.kt)("p",null,"Aggiungi sostituzioni al ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," per forzare versioni non vulnerabili delle dipendenze."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Rapporto di audit in uscita in formato JSON."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Controlla solo le dipendenze di sviluppo."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Controlla solo le dipendenze di produzione."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Non controllare le dipendenze opzionali (",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,o.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,o.kt)("p",null,"Se il registro risponde con un codice di stato diverso da 200, il processo dovrebbe terminare con 0. Quindi il processo fallir\xe0 solo se il registro risponde effettivamente con successo con le vulnerabilit\xe0 trovate."))}m.isMDXComponent=!0}}]);