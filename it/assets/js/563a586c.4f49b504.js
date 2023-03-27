"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3138],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var r=n(2962),i=n(2742),a=(n(9496),n(9613)),o=["components"],p={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"version-7.x/cli/patch",title:"pnpm patch <pkg>",description:"Aggiunto in: v7.4.0",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/it/7.x/cli/patch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-7.x/docs",previous:{title:"pnpm install-test",permalink:"/it/7.x/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/it/7.x/cli/patch-commit"}},u={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aggiunto in: v7.4.0"),(0,a.kt)("p",null,"Prepara un pacchetto per l'applicazione delle patch (ispirato a un comando simile in Yarn)."),(0,a.kt)("p",null,"Questo comando far\xe0 s\xec che un pacchetto venga estratto in una directory temporanea destinata a essere modificabile a piacimento."),(0,a.kt)("p",null,"Una volta terminate le modifiche, esegui ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (dove ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," \xe8 la directory temporanea che hai ricevuto) per generare un file di patch e registrarlo nel tuo manifest di primo livello tramite il campo ",(0,a.kt)("a",{parentName:"p",href:"/it/7.x/package_json#pnpmpatcheddependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"patchedDependencies")),"."),(0,a.kt)("p",null,"Utilizzo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"La demo del comando patch pnpm",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,a.kt)("p",null,"Aggiunto nella versione: v7.11.0"),(0,a.kt)("p",null,"Il pacchetto che deve essere corretto verr\xe0 estratto in questa directory."),(0,a.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,a.kt)("p",null,"Added in: v7.25.0"),(0,a.kt)("p",null,"Ignore existing patch files when patching."))}m.isMDXComponent=!0}}]);