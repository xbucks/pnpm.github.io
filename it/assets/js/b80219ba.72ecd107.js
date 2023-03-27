"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7344],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var i=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),v=l,f=u["".concat(p,".").concat(v)]||u[v]||s[v]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(2962),l=n(2742),r=(n(9496),n(9613)),o=["components"],a={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"version-7.x/cli/why",title:"pnpm why",description:"Visualizza tutti i pacchetti che dipendono dal pacchetto specificato.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/it/7.x/cli/why",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-7.x/docs",previous:{title:"pnpm outdated",permalink:"/it/7.x/cli/outdated"},next:{title:"pnpm licenses",permalink:"/it/7.x/cli/licenses"}},d={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],u={toc:s};function v(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Visualizza tutti i pacchetti che dipendono dal pacchetto specificato."),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,"Mostra l'albero delle dipendenze per il pacchetto specificato di ogni pacchetto nelle sottocartelle o di ogni pacchetto dello spazio di lavoro quando eseguito all'interno di uno spazio di lavoro."),(0,r.kt)("h3",{id:"--json"},"--json"),(0,r.kt)("p",null,"Visualizza le informazioni in formato JSON."),(0,r.kt)("h3",{id:"--long"},"--long"),(0,r.kt)("p",null,"Visualizza output dettagliato."),(0,r.kt)("h3",{id:"--parseable"},"--parseable"),(0,r.kt)("p",null,"Visualizza output analizzabile invece della visualizzazione ad albero."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Elenca i pacchetti nella cartella di installazione globale invece che nel progetto corrente."),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"Visualizza l'albero delle dipendenze per i pacchetti nelle dipendenze (",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),")."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Visualizza l'albero delle dipendenze per i pacchetti nelle dipendenze di sviluppo (",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,r.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,r.kt)("p",null,"Added in: v7.22.0"),(0,r.kt)("p",null,"Display only dependencies that are also projects within the workspace."),(0,r.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/it/7.x/filtering"},"Ulteriori informazioni sui filtri.")))}v.isMDXComponent=!0}}]);