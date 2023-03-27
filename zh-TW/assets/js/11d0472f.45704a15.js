"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6066],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(2962),o=n(2742),i=(n(9496),n(9613)),l=["components"],a={id:"git",title:"\u4f7f\u7528 Git"},p=void 0,c={unversionedId:"git",id:"version-7.x/git",title:"\u4f7f\u7528 Git",description:"Lockfiles",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/git.md",sourceDirName:".",slug:"/git",permalink:"/zh-TW/7.x/git",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"git",title:"\u4f7f\u7528 Git"},sidebar:"version-7.x/docs",previous:{title:"\u6301\u7e8c\u6574\u5408 (CI)",permalink:"/zh-TW/7.x/continuous-integration"},next:{title:"\u932f\u8aa4\u78bc",permalink:"/zh-TW/7.x/errors"}},u={},s=[{value:"Lockfiles",id:"lockfiles",level:2},{value:"\u5408\u4f75\u885d\u7a81",id:"\u5408\u4f75\u885d\u7a81",level:3}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,i.kt)("p",null,"\u60a8\u61c9\u8a72\u8981\u6bcf\u6b21\u90fd\u63d0\u4ea4lockfile\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\uff09\u3002 \u9019\u6709\u5f88\u591a\u539f\u56e0\uff0c\u5176\u4e2d\u4e3b\u8981\u539f\u56e0\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u7701\u7565\u4e86\u89e3\u6790\u5957\u4ef6\u7684\u6b65\u9a5f\uff0c\u53ef\u4ee5\u8b93 CI \u53ca\u4e0a\u7dda\u74b0\u5883\u66f4\u5feb\u5730\u5b89\u88dd"),(0,i.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u958b\u767c\u3001\u6e2c\u8a66\u3001\u4e0a\u7dda\u74b0\u5883\u9593\u7684\u5957\u4ef6\u5b89\u88dd\u53ca\u89e3\u6790\u7dad\u6301\u4e00\u81f4\uff0c\u5982\u6b64\u4e00\u4f86\u7576\u60a8\u958b\u767c\u5c08\u6848\u6642\uff0c\u6e2c\u8a66\u53ca\u6b63\u5f0f\u4e0a\u7dda\u74b0\u5883\u5c07\u4f7f\u7528\u5b8c\u5168\u76f8\u540c\u7684\u5957\u4ef6")),(0,i.kt)("h3",{id:"\u5408\u4f75\u885d\u7a81"},"\u5408\u4f75\u885d\u7a81"),(0,i.kt)("p",null,"pnpm \u53ef\u4ee5\u81ea\u52d5\u89e3\u6c7a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u4e2d\u7684\u5408\u4f75\u885d\u7a81\u3002 \u5982\u679c\u60a8\u9047\u5230\u4e86\u5408\u4f75\u885d\u7a81\uff0c\u60a8\u53ea\u9700\u8981\u57f7\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u547d\u4ee4\u4e26\u63d0\u4ea4\u8b8a\u66f4\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u8acb\u6ce8\u610f\uff1a \u5efa\u8b70\u60a8\u5728\u63d0\u4ea4\u8b8a\u66f4\u4e4b\u524d\uff0c\u6aa2\u67e5\u60a8\u6240\u505a\u7684\u8b8a\u66f4\uff0c\u56e0\u70ba\u6211\u5011\u7121\u6cd5\u4fdd\u8b49 pnpm \u6703\u9078\u64c7\u6b63\u78ba\u7684\u982d\uff0d\u5927\u90e8\u5206\u7406\u60f3\u72c0\u6cc1\u4e0b\uff0c\u5b83\u6703\u5efa\u7f6e\u5927\u90e8\u5206\u7684 lockfile \u66f4\u65b0\u3002"))}m.isMDXComponent=!0}}]);