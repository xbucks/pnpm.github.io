"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(r),d=i,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,p(p({ref:t},m),{},{components:r})):n.createElement(f,p({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(2962),i=r(2742),o=(r(9496),r(9613)),p=["components"],a={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"version-8.x/cli/import",title:"pnpm import",description:"pnpm import genera un pnpm-lock.yaml dal lockfile di un altro gestore di pacchetti. File di origine supportati:",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-8.x/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/it/cli/import",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"8.x",frontMatter:{id:"import",title:"pnpm import"},sidebar:"version-8.x/docs",previous:{title:"pnpm unlink",permalink:"/it/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/it/cli/rebuild"}},m={},u=[],s={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm import")," genera un ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," dal lockfile di un altro gestore di pacchetti. File di origine supportati:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn.lock"))),(0,o.kt)("p",null,"Nota che se hai spazi di lavoro per cui desideri importare le dipendenze, dovranno essere dichiarate in ",(0,o.kt)("a",{parentName:"p",href:"/it/pnpm-workspace_yaml"},"pnpm-workspace.yaml"),"."))}d.isMDXComponent=!0}}]);