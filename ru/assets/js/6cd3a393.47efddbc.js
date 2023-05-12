"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9558],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var o=2;o<l;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(2962),i=r(2742),l=(r(9496),r(9613)),a=["components"],p={id:"pack",title:"pnpm pack"},c=void 0,o={unversionedId:"cli/pack",id:"cli/pack",title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/ru/next/cli/pack",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"docs",previous:{title:"pnpm publish",permalink:"/ru/next/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/ru/next/cli/recursive"}},u={},s=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3},{value:"--pack-gzip-level &lt;level&gt;",id:"--pack-gzip-level-level",level:3},{value:"Life Cycle Scripts",id:"life-cycle-scripts",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create a tarball from a package."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,l.kt)("p",null,"Directory in which ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."),(0,l.kt)("h3",{id:"--pack-gzip-level-level"},"--pack-gzip-level ","<","level",">"),(0,l.kt)("p",null,"Added in: v8.3.0"),(0,l.kt)("p",null,"Specifying custom compression level."),(0,l.kt)("h2",{id:"life-cycle-scripts"},"Life Cycle Scripts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prepack")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prepare")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"postpack"))))}m.isMDXComponent=!0}}]);