"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1107],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(t),f=p,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,o=new Array(a);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6438:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,assets:()=>m,toc:()=>u,default:()=>f});var r=t(7813),p=t(7044),a=(t(9496),t(9613)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",title:"pnpx CLI",description:"\u65b0\u7528\u6237",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/zh/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/zh/5.x/pnpm-cli"},next:{title:"\u914d\u7f6e",permalink:"/zh/5.x/configuring"}},m={},u=[{value:"\u65b0\u7528\u6237",id:"\u65b0\u7528\u6237",level:2},{value:"npm \u7528\u6237",id:"npm-\u7528\u6237",level:2}],s={toc:u};function f(e){var n=e.components,t=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b0\u7528\u6237"},"\u65b0\u7528\u6237"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4ed6\u4ece\u6e90\u83b7\u53d6\u5305\uff0c\u4f46\u4e0d\u5c06\u5b83\u5b89\u88c5\u4e3a\u4f9d\u8d56\u9879\uff0c\u70ed\u52a0\u8f7d\u5b83\uff0c\u5e76\u8fd0\u884c\u4efb\u4f55\u5b83\u66b4\u9732\u7684\u9ed8\u8ba4\u4e8c\u8fdb\u5236\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u82e5\u8981\u5728\u4efb\u4f55\u5730\u65b9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create-react-app")," \u6765\u521d\u59cb\u5316\u4e00\u4e2a react \u5e94\u7528\uff0c\u800c\u4e0d\u9700\u8981 \u6765\u5728\u53e6\u4e00\u4e2a\u9879\u76ee\u4e0b\u5b89\u88c5\u5b83\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u4ece\u6e90\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create-react-app")," \u5e76\u4f7f\u7528\u7ed9\u5b9a\u7684\u53c2\u6570\u8fd0\u884c\u5b83\u3002 \u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u5728 npm \u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," \uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u4e86\u76f8\u540c\u7684\u63a5\u53e3\uff0c\u9664\u4e86\u5b83\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," \u800c\u4e0d\u662f\u8fd9\u91cc\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u3002"),(0,a.kt)("h2",{id:"npm-\u7528\u6237"},"npm \u7528\u6237"),(0,a.kt)("p",null,"npm \u6709\u4e00\u4e2a\u5f88\u68d2\u7684\u5305\u8fd0\u884c\u5668\u53eb\u505a ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),"\u3002 pnpm \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," \u547d\u4ee4\u63d0\u4f9b\u76f8\u540c\u7684\u5de5\u5177\u3002 \u552f\u4e00\u7684\u4e0d\u540c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," \u5b89\u88c5\u8f6f\u4ef6\u5305\u3002"))}f.isMDXComponent=!0}}]);