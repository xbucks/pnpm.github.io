"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[223],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(2962),o=r(2742),a=(r(9496),r(9613)),p=["components"],c={id:"create",title:"pnpm create"},i=void 0,l={unversionedId:"cli/create",id:"version-8.x/cli/create",title:"pnpm create",description:"Cria um projeto a partir de um pacote create- ou @foo/create-.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-8.x/cli/create.md",sourceDirName:"cli",slug:"/cli/create",permalink:"/pt/cli/create",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"8.x",frontMatter:{id:"create",title:"pnpm create"},sidebar:"version-8.x/docs",previous:{title:"pnpm dlx",permalink:"/pt/cli/dlx"},next:{title:"pnpm start",permalink:"/pt/cli/start"}},u={},s=[{value:"Exemplos",id:"exemplos",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cria um projeto a partir de um pacote ",(0,a.kt)("inlineCode",{parentName:"p"},"create-*")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"@foo/create-*"),"."),(0,a.kt)("h2",{id:"exemplos"},"Exemplos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm create react-app my-app\n")))}f.isMDXComponent=!0}}]);