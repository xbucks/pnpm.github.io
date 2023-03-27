"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6813],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(2962),o=n(2742),i=(n(9496),n(9613)),l=["components"],a={id:"git",title:"Git\uc73c\ub85c \uc791\uc5c5\ud558\uae30"},p=void 0,c={unversionedId:"git",id:"version-8.x/git",title:"Git\uc73c\ub85c \uc791\uc5c5\ud558\uae30",description:"Lockfiles",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-8.x/git.md",sourceDirName:".",slug:"/git",permalink:"/ko/git",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ko",tags:[],version:"8.x",frontMatter:{id:"git",title:"Git\uc73c\ub85c \uc791\uc5c5\ud558\uae30"},sidebar:"version-8.x/docs",previous:{title:"Continuous Integration",permalink:"/ko/continuous-integration"},next:{title:"\uc5d0\ub7ec \ucf54\ub4dc",permalink:"/ko/errors"}},u={},s=[{value:"Lockfiles",id:"lockfiles",level:2},{value:"\ubcd1\ud569 \ucda9\ub3cc",id:"\ubcd1\ud569-\ucda9\ub3cc",level:3}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,i.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 \ud56d\uc0c1 lockfile (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),") \uc744 \ucee4\ubc0b\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc774\uc720\uac00 \uc788\uc73c\uba70 \uadf8 \uc911 \uc8fc\ub41c \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud328\ud0a4\uc9c0 \uacb0\uc758\ubb38\uc744 \uac74\ub108\ub6f8 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 CI \ubc0f \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc5d0\uc11c \ube60\ub978 \uc124\uce58\ub97c \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac1c\ubc1c, \ud14c\uc2a4\ud2b8 \uadf8\ub9ac\uace0 \ud504\ub85c\ub355\uc158 \ud658\uacbd \uc0ac\uc774\uc5d0 \uc77c\uad00\uc131 \uc788\ub294 \uc124\uce58 \ubc0f resolution\uc744 \uac15\uc81c\ud558\uba70, \uc774\ub294 \uc5ec\ub7ec\ubd84\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uac1c\ubc1c\ud560 \ub54c\uc640 \uc644\uc804\ud788 \ub3d9\uc77c\ud558\uac8c \ud14c\uc2a4\ud2b8 \ubc0f \ud504\ub85c\ub355\uc158\uc5d0\uc11c\ub3c4 \ud658\uacbd\uc744 \uc77c\uce58\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ubcd1\ud569-\ucda9\ub3cc"},"\ubcd1\ud569 \ucda9\ub3cc"),(0,i.kt)("p",null,"pnpm\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \ubcd1\ud569 \ucda9\ub3cc\uc744 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucda9\ub3cc\uc774 \ubc1c\uc0dd\ud55c\ub2e4\uba74, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uc744 \uc2e4\ud589\ud558\uace0 \ubcc0\ud654\ub97c \ucee4\ubc0b\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\ub098 \uc8fc\uc758\ud558\uc2ed\uc2dc\uc624. \ucee4\ubc0b\uc744 \uc2a4\ud14c\uc774\uc9d5\ud558\uae30 \uc804\uc5d0 \ubcc0\uacbd\uc0ac\ud56d\uc744 \uac80\ud1a0\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud558\ub294\ub370, \uadf8 \uc774\uc720\ub85c \uc6b0\ub9ac\ub294 pnpm\uc774 \uc815\ud655\ud55c head\ub97c \uc120\ud0dd\ud55c\ub2e4\uace0 \ubcf4\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4 - \ub300\uc2e0 \uac00\uc7a5 \ube48\ubc88\ud788 \uc5c5\ub370\uc774\ud2b8\ub41c lockfile\uc744 \ube4c\ub4dc\ud558\uba70, \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uc774\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);