"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7357],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=o,m=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var r=n(2962),o=n(2742),i=(n(9496),n(9613)),c=["components"],p={id:"dedupe",title:"pnpm dedupe"},a=void 0,l={unversionedId:"cli/dedupe",id:"cli/dedupe",title:"pnpm dedupe",description:"\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u4f7f\u7528\u3067\u304d\u308b\u5834\u5408\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u53e4\u3044\u4f9d\u5b58\u95a2\u4fc2\u3092\u524a\u9664\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/dedupe.md",sourceDirName:"cli",slug:"/cli/dedupe",permalink:"/ja/next/cli/dedupe",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"dedupe",title:"pnpm dedupe"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/ja/next/cli/install-test"},next:{title:"pnpm patch <pkg>",permalink:"/ja/next/cli/patch"}},u={},d=[{value:"Options",id:"options",level:2},{value:"<code>--check</code>",id:"--check",level:3}],s={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u4f7f\u7528\u3067\u304d\u308b\u5834\u5408\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u53e4\u3044\u4f9d\u5b58\u95a2\u4fc2\u3092\u524a\u9664\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--check"},(0,i.kt)("inlineCode",{parentName:"h3"},"--check")),(0,i.kt)("p",null,"Added in: v8.3.0"),(0,i.kt)("p",null,"Check if running dedupe would result in changes without installing packages or editing the lockfile. Exits with a non-zero status code if changes are possible."))}f.isMDXComponent=!0}}]);