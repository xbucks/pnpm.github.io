"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1683],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(2962),i=r(2742),a=(r(9496),r(9613)),p=["components"],o={id:"pack",title:"pnpm pack"},c=void 0,l={unversionedId:"cli/pack",id:"version-8.x/cli/pack",title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-8.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/fr/cli/pack",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"8.x",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-8.x/docs",previous:{title:"pnpm publish",permalink:"/fr/cli/publish"},next:{title:"pnpm -r, --recursive",permalink:"/fr/cli/recursive"}},s={},u=[{value:"Options",id:"options",level:2},{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",level:3},{value:"Life Cycle Scripts",id:"life-cycle-scripts",level:2}],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a tarball from a package."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,a.kt)("p",null,"Directory in which ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."),(0,a.kt)("h2",{id:"life-cycle-scripts"},"Life Cycle Scripts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prepare")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postpack"))))}d.isMDXComponent=!0}}]);