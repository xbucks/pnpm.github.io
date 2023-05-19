"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[774],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=a(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var a=2;a<o;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(2962),i=n(2742),o=(n(9496),n(9613)),c=["components"],l={id:"dedupe",title:"pnpm dedupe"},p=void 0,a={unversionedId:"cli/dedupe",id:"version-8.x/cli/dedupe",title:"pnpm dedupe",description:"Perform an install removing older dependencies in the lockfile if a newer version can be used.",source:"@site/versioned_docs/version-8.x/cli/dedupe.md",sourceDirName:"cli",slug:"/cli/dedupe",permalink:"/cli/dedupe",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/dedupe.md",tags:[],version:"8.x",frontMatter:{id:"dedupe",title:"pnpm dedupe"},sidebar:"version-8.x/docs",previous:{title:"pnpm install-test",permalink:"/cli/install-test"},next:{title:"pnpm patch <pkg>",permalink:"/cli/patch"}},d={},s=[{value:"Options",id:"options",level:2},{value:"<code>--check</code>",id:"--check",level:3}],u={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Perform an install removing older dependencies in the lockfile if a newer version can be used."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--check"},(0,o.kt)("inlineCode",{parentName:"h3"},"--check")),(0,o.kt)("p",null,"Added in: v8.3.0"),(0,o.kt)("p",null,"Check if running dedupe would result in changes without installing packages or editing the lockfile. Exits with a non-zero status code if changes are possible."))}f.isMDXComponent=!0}}]);