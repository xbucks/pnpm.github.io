"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9217],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(t),f=p,d=s["".concat(i,".").concat(f)]||s[f]||u[f]||l;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,o=new Array(l);o[0]=s;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(2962),p=t(2742),l=(t(9496),t(9613)),o=["components"],a={id:"uninstall",title:"\u5378\u8f7d pnpm"},i=void 0,c={unversionedId:"uninstall",id:"version-8.x/uninstall",title:"\u5378\u8f7d pnpm",description:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-8.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/zh/uninstall",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-CN",tags:[],version:"8.x",frontMatter:{id:"uninstall",title:"\u5378\u8f7d pnpm"},sidebar:"version-8.x/docs",previous:{title:"peers \u662f\u5982\u4f55\u88ab\u5904\u7406\u7684",permalink:"/zh/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/zh/pnpm-vs-npm"}},m={},u=[{value:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",id:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",level:2},{value:"\u79fb\u9664 pnpm CLI",id:"\u79fb\u9664-pnpm-cli",level:2},{value:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8",id:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8",level:2}],s={toc:u};function f(e){var n=e.components,t=(0,p.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305"},"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305"),(0,l.kt)("p",null,"\u5f53\u60a8\u5728\u5220\u9664 pnpm CLI \u4e4b\u524d\uff0c\u5220\u9664 pnpm \u5b89\u88c5\u7684\u5168\u5c40\u5305\u53ef\u80fd\u5177\u6709\u4e00\u5b9a\u610f\u4e49\u3002"),(0,l.kt)("p",null,"\u8981\u5217\u51fa\u6240\u6709\u5168\u5c40\u5305\uff0c\u8bf7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),"\u3002 \u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5220\u9664\u5168\u5c40\u5305\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," \u5217\u51fa\u6bcf\u4e2a\u5168\u5c40\u5305\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," \u627e\u5230\u5168\u5c40\u76ee\u5f55\u7684\u4f4d\u7f6e\u5e76\u624b\u52a8\u5220\u9664\u5b83\u3002")),(0,l.kt)("h2",{id:"\u79fb\u9664-pnpm-cli"},"\u79fb\u9664 pnpm CLI"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7684 pnpm \u662f\u901a\u8fc7\u72ec\u7acb\u811a\u672c\u8fdb\u884c\u5b89\u88c5\u7684\uff0c\u60a8\u5e94\u8be5\u53ef\u4ee5\u76f4\u63a5\u5220\u9664 pnpm \u7684\u4e3b\u76ee\u5f55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,l.kt)("p",null,"\u60a8\u53ef\u80fd\u8fd8\u60f3\u6e05\u7406 shell \u914d\u7f6e\u6587\u4ef6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," \u7684\u73af\u5883\u53d8\u91cf\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),"\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 npm \u5b89\u88c5 pnpm\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u4f7f\u7528 npm \u5378\u8f7d pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8"},"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u5728\u4e3b\u78c1\u76d8\u4e2d\u4f7f\u7528 pnpm \uff0c\u60a8\u5fc5\u987b\u5728\u4f7f\u7528 pnpm \u7684\u6bcf\u4e00\u4e2a\u78c1\u76d8\u4e2d\u8fd0\u884c\u4e0a\u8ff0\u547d\u4ee4\u3002 \u56e0\u4e3a pnpm \u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u78c1\u76d8\u521b\u5efa\u4e00\u4e2a\u4e13\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"))}f.isMDXComponent=!0}}]);