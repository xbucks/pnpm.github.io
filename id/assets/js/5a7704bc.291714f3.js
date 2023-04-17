"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5171],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(v,p(p({ref:n},u),{},{components:t})):r.createElement(v,p({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,p=new Array(a);p[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(2962),l=t(2742),a=(t(9496),t(9613)),p=["components"],o={id:"env",title:"pnpm env <cmd>"},i=void 0,s={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Mengelola lingkungan Node.js.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/id/next/cli/env",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/id/next/cli/start"},next:{title:"pnpm publish",permalink:"/id/next/cli/publish"}},u={},c=[{value:"Perintah",id:"perintah",level:2},{value:"use",id:"use",level:3},{value:"remove, rm",id:"remove-rm",level:3},{value:"list, ls",id:"list-ls",level:3},{value:"Pilihan",id:"pilihan",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mengelola lingkungan Node.js."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"Demo perintah patch pnpm",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"perintah"},"Perintah"),(0,a.kt)("h3",{id:"use"},"use"),(0,a.kt)("p",null,"Instal dan gunakan versi Node.js yang ditentukan"),(0,a.kt)("p",null,"Instal versi LTS dari Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,a.kt)("p",null,"Instal Node.js v16:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,a.kt)("p",null,"Instal versi pra-rilis Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,a.kt)("p",null,"Instal versi terbaru Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,a.kt)("p",null,"Instal versi LTS dari Node.js menggunakan ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release/blob/main/CODENAMES.md"},"codename"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global argon\n")),(0,a.kt)("h3",{id:"remove-rm"},"remove, rm"),(0,a.kt)("p",null,"Menghapus versi Node.JS yang ditentukan."),(0,a.kt)("p",null,"Contoh penggunaan:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env remove --global 14.0.0\n")),(0,a.kt)("h3",{id:"list-ls"},"list, ls"),(0,a.kt)("p",null,"Daftar versi Node.js yang tersedia secara lokal atau remote."),(0,a.kt)("p",null,"Cetak versi yang terinstal secara lokal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env list\n")),(0,a.kt)("p",null,"Cetak versi Node.js yang tersedia dari remote:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env list --remote\n")),(0,a.kt)("p",null,"Cetak versi Node.js v16 yang tersedia dari remote:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env list --remote 16\n")),(0,a.kt)("h2",{id:"pilihan"},"Pilihan"),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"Perubahan dilakukan di seluruh sistem."))}m.isMDXComponent=!0}}]);