"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5999],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,f=s["".concat(a,".").concat(m)]||s[m]||u[m]||p;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,l=new Array(p);l[0]=s;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<p;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(2962),o=t(2742),p=(t(9496),t(9613)),l=["components"],i={id:"deploy",title:"pnpm \u90e8\u7f72"},a=void 0,c={unversionedId:"cli/deploy",id:"version-8.x/cli/deploy",title:"pnpm \u90e8\u7f72",description:"\u5f9e\u5de5\u4f5c\u5340\u90e8\u7f72\u6a21\u7d44\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-8.x/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/zh-TW/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"8.x",frontMatter:{id:"deploy",title:"pnpm \u90e8\u7f72"},sidebar:"version-8.x/docs",previous:{title:"pnpm init",permalink:"/zh-TW/cli/init"},next:{title:"pnpm doctor",permalink:"/zh-TW/cli/doctor"}},d={},u=[{value:"Options",id:"options",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"\u5df2\u90e8\u7f72\u5b8c\u6210\u7684\u5c08\u6848\u4e2d\u5305\u542b\u7684\u6a94\u6848",id:"\u5df2\u90e8\u7f72\u5b8c\u6210\u7684\u5c08\u6848\u4e2d\u5305\u542b\u7684\u6a94\u6848",level:2}],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5f9e\u5de5\u4f5c\u5340\u90e8\u7f72\u6a21\u7d44\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u5728\u90e8\u7f72\u524d\u5df2\u5efa\u7f6e\u5c08\u6848\uff0c\u8acb\u4e00\u4f75\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," \u9078\u9805\u4f86\u7565\u904e ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u7684\u5b89\u88dd\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,p.kt)("p",null,"\u4f7f\u7528\u65bc Docker \u6620\u50cf\u4e2d\u3002 \u5728\u60a8\u7684 Monorepo \u4e2d\u7d44\u5efa\u5b8c\u6240\u6709\u5167\u5bb9\u5f8c\uff0c\u8acb\u5728\u7b2c\u4e8c\u500b\u4f7f\u7528 Monorepo \u57fa\u672c\u6620\u50cf\u4f5c\u70ba\u5efa\u7f6e\u5167\u5bb9\u7684\u5f71\u50cf\u4e2d\u6216\u5728\u5176\u4ed6\u7d44\u5efa\u6bb5\u4e2d\u57f7\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Only ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",(0,p.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u672a\u5b89\u88dd\u3002"),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh-TW/filtering"},"Read more about filtering.")),(0,p.kt)("h2",{id:"\u5df2\u90e8\u7f72\u5b8c\u6210\u7684\u5c08\u6848\u4e2d\u5305\u542b\u7684\u6a94\u6848"},"\u5df2\u90e8\u7f72\u5b8c\u6210\u7684\u5c08\u6848\u4e2d\u5305\u542b\u7684\u6a94\u6848"),(0,p.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u90e8\u7f72\u671f\u9593\u6703\u8907\u88fd\u5c08\u6848\u4e2d\u7684\u6240\u6709\u6a94\u6848\u3002 \u8a72\u5c08\u6848\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u53ef\u4ee5\u5305\u542b\u4e00\u500b\u300cfiles\u300d\u6b04\u4f4d\u4f86\u5217\u51fa\u6240\u6709\u61c9\u88ab\u8907\u88fd\u7684\u6a94\u6848\u53ca\u76ee\u9304\u3002"))}m.isMDXComponent=!0}}]);