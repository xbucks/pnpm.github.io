"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[397],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),d=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,f=s["".concat(a,".").concat(m)]||s[m]||u[m]||p;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,l=new Array(p);l[0]=s;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<p;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(2962),o=t(2742),p=(t(9496),t(9613)),l=["components"],i={id:"deploy",title:"pnpm deploy"},a=void 0,d={unversionedId:"cli/deploy",id:"version-8.x/cli/deploy",title:"pnpm deploy",description:"\uc791\uc5c5 \uc601\uc5ed\uc5d0\uc11c \ud328\ud0a4\uc9c0\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-8.x/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/ko/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ko",tags:[],version:"8.x",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"version-8.x/docs",previous:{title:"pnpm init",permalink:"/ko/cli/init"},next:{title:"pnpm doctor",permalink:"/ko/cli/doctor"}},c={},u=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"\ubc30\ud3ec\ub41c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud3ec\ud568\ub41c \ud30c\uc77c",id:"\ubc30\ud3ec\ub41c-\ud504\ub85c\uc81d\ud2b8\uc5d0-\ud3ec\ud568\ub41c-\ud30c\uc77c",level:2}],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\uc791\uc5c5 \uc601\uc5ed\uc5d0\uc11c \ud328\ud0a4\uc9c0\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc0ac\uc6a9\ubc95:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,p.kt)("p",null,"\ubc30\ud3ec \uc804\uc5d0 \ud504\ub85c\uc81d\ud2b8\ub97c \ube4c\ub4dc\ud558\ub294 \uacbd\uc6b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \uc124\uce58\ub97c \uac74\ub108\ub701\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,p.kt)("p",null,"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\uc5d0\uc11c\uc758 \uc0ac\uc6a9. After building everything in your monorepo, do this in a second image that uses your monorepo base image as a build context or in an additional build stage:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\uc5d0 \uad00\uacc4\uc5c6\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \ub9cc \uc124\uce58\ub429\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \uac00 \uc124\uce58\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")),(0,p.kt)("h2",{id:"\ubc30\ud3ec\ub41c-\ud504\ub85c\uc81d\ud2b8\uc5d0-\ud3ec\ud568\ub41c-\ud30c\uc77c"},"\ubc30\ud3ec\ub41c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud3ec\ud568\ub41c \ud30c\uc77c"),(0,p.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8\uc758 \ubaa8\ub4e0 \ud30c\uc77c\uc740 \ubc30\ud3ec \uc911\uc5d0 \ubcf5\uc0ac\ub429\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc758 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),' \uc5d0\ub294 \ubcf5\uc0ac\ud574\uc57c \ud558\ub294 \ud30c\uc77c \ubc0f \ub514\ub809\ud130\ub9ac\ub97c \ub098\uc5f4\ud558\ub294 "files" \ud544\ub4dc\uac00 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'))}m.isMDXComponent=!0}}]);