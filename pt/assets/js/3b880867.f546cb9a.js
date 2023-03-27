"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8172],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(2962),o=t(2742),p=(t(9496),t(9613)),a=["components"],i={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"version-7.x/cli/prune",title:"pnpm prune",description:"Remove pacotes desnecess\xe1rios.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/pt/7.x/cli/prune",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-7.x/docs",previous:{title:"pnpm rebuild",permalink:"/pt/7.x/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/pt/7.x/cli/fetch"}},s={},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Remove pacotes desnecess\xe1rios."),(0,p.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,"Remova os pacotes especificados em ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"Remova os pacotes especificados em ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"O comando prune n\xe3o suporta execu\xe7\xe3o recursiva em um monorepo atualmente. Para instalar apenas depend\xeancias de produ\xe7\xe3o em um monorepo as pastas de ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," podem ser exclu\xeddas e reinstaladas com ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),".")))}m.isMDXComponent=!0}}]);