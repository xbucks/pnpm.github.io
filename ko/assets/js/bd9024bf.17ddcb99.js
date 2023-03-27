"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6836],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=l,k=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(k,p(p({ref:t},u),{},{components:r})):n.createElement(k,p({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,p=new Array(a);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=r(2962),l=r(2742),a=(r(9496),r(9613)),p=["components"],o={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"version-8.x/cli/exec",title:"pnpm exec",description:"\ud504\ub85c\uc81d\ud2b8 \ubc94\uc704\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-8.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ko/cli/exec",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ko",tags:[],version:"8.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-8.x/docs",previous:{title:"pnpm test",permalink:"/ko/cli/test"},next:{title:"pnpm dlx",permalink:"/ko/cli/dlx"}},u={},m=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",level:4},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:m};function d(e){var t=e.components,r=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \ubc94\uc704\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ucd94\uac00\ub418\ubbc0\ub85c, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \uc5d0\uc11c\ub294 \uc758\uc874\uc131 \uba85\ub839\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc758 \uc758\uc874\uc131\uc73c\ub85c Jest\uac00 \uc788\ub294 \uacbd\uc6b0 Jest\ub97c \uc804\uc5ed\uc801\uc73c\ub85c \uc124\uce58\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e8\uc9c0 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\uc744 \uc2e4\ud589\ud558\uba74 \ub429\ub2c8\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \ubd80\ubd84\uc740 \uc2e4\uc81c\ub85c \uc120\ud0dd \uc0ac\ud56d\uc774\ubbc0\ub85c \ub2e4\uc74c\uc744 \uc2e4\ud589\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \uba85\ub839\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uc635\uc158\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \ud0a4\uc6cc\ub4dc \uc55e\uc5d0 \ub098\uc5f4\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \ud0a4\uc6cc\ub4dc \ub4a4\uc5d0 \ub098\uc5f4\ub41c \uc635\uc158\uc740 \uc2e4\ud589\ub41c \uba85\ub839\uc73c\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"Good. pnpm\uc740 \uc7ac\uadc0\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"Bad, pnpm\uc740 \uc7ac\uadc0\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uc9c0\ub9cc ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," \uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," \uc635\uc158\uacfc \ud568\uaed8 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub0b4\uc758 \ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud604\uc7ac \ud328\ud0a4\uc9c0\uc758 \uc774\ub984\uc740 \ud658\uacbd \ubcc0\uc218 ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,a.kt)("p",null,"\ubaa8\ub4e0 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \uc124\uce58\ub97c \uc815\ub9ac\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"\ubaa8\ub4e0 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c \ud328\ud0a4\uc9c0 \uc815\ubcf4\ub97c \ubd05\ub2c8\ub2e4. \ud658\uacbd \ubcc0\uc218\uac00 \uc791\ub3d9\ud558\ub824\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (\ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") \uc635\uc158\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,a.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"\uc258 \ub0b4\ubd80\uc5d0\uc11c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. UNIX\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," \uc744 \uc0ac\uc6a9\ud558\uace0 Windows\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," \uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ko/cli/run#--report-summary"},"Read about this option in the run command docs")),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}d.isMDXComponent=!0}}]);