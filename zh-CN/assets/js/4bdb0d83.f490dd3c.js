"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1781],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},266:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,assets:()=>s,toc:()=>u,default:()=>m});var r=n(7813),o=n(7044),a=(n(9496),n(9613)),i=["components"],p={id:"configuring",title:"Configuring"},c=void 0,l={unversionedId:"configuring",id:"configuring",title:"Configuring",description:"pnpm uses [npm's configuration] formats. Hence, you should set configuration",source:"@site/docs/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/zh-CN/next/configuring",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615635994,formattedLastUpdatedAt:"2021/3/13",frontMatter:{id:"configuring",title:"Configuring"},sidebar:"docs",previous:{title:"pnpx CLI",permalink:"/zh-CN/next/pnpx-cli"},next:{title:"Filtering",permalink:"/zh-CN/next/filtering"}},s={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm uses ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm's configuration")," formats. Hence, you should set configuration\nthe same way you would for npm. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,a.kt)("p",null,"If no store is configured, then pnpm will automatically create a store on the\nsame drive. If you need pnpm to work across multiple hard drives or filesystems,\nplease read ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/next/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"."),(0,a.kt)("p",null,"Furthermore, pnpm uses the same configuration that npm uses for doing\ninstallations. If you have a private registry and npm is configured to work with\nit, pnpm should be able to authorize requests as well, with no additional\nconfiguration."),(0,a.kt)("p",null,"In addition to those options, pnpm also allows you to use all parameters that\nare flags (for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") as options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/next/cli/config"},(0,a.kt)("inlineCode",{parentName:"a"},"config")," command")," for more information."))}m.isMDXComponent=!0}}]);