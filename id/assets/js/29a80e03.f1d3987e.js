"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8131],{9613:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>k});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(a),k=r,m=s["".concat(o,".").concat(k)]||s[k]||u[k]||p;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=s;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<p;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1663:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=a(2962),r=a(2742),p=(a(9496),a(9613)),i=["components"],l={id:"deploy",title:"pnpm deploy"},o=void 0,d={unversionedId:"cli/deploy",id:"cli/deploy",title:"pnpm deploy",description:"deploy paket dari workspace.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/id/next/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/id/next/cli/init"},next:{title:"pnpm doctor",permalink:"/id/next/cli/doctor"}},c={},u=[{value:"Pengaturan",id:"pengaturan",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Berkas-berkas yang termasuk di dalam projek yang dideploy",id:"berkas-berkas-yang-termasuk-di-dalam-projek-yang-dideploy",level:2}],s={toc:u};function k(e){var n=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"deploy paket dari workspace."),(0,p.kt)("p",null,"Penggunaan:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> terapkan <target directory>\n")),(0,p.kt)("p",null,"Jika Anda membangun proyek Anda sebelum deploy, gunakan juga opsi ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod"),"  untuk melewati instalasi ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,p.kt)("p",null,"Penggunaan di docker image. Setelah membangun keseluruhan yang ada pada monorepo anda, lakukan hal ini pada image kedua dimana digunakan pada image monorepo dasar anda sebagai konteks pembuatan atau dalam tahap pembangunan tambahan:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app / dipangkas .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"pengaturan"},"Pengaturan"),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Hanya akan menginstall ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," apapun yang ada di dalam ",(0,p.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," tidak akan diinstal."),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Paket dalam ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," tidak akan diinstal."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/id/next/filtering"},"Baca lebih lanjut tentang filtering.")),(0,p.kt)("h2",{id:"berkas-berkas-yang-termasuk-di-dalam-projek-yang-dideploy"},"Berkas-berkas yang termasuk di dalam projek yang dideploy"),(0,p.kt)("p",null,"Secara default, semua file proyek disalin selama proses deploy. Paket proyek ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),' mungkin berisi sebuah bidang "file" untuk mencantumkan berkas dan direktori yang harus disalin.'))}k.isMDXComponent=!0}}]);