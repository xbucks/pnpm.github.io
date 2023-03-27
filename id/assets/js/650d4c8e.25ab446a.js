"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4013],{9613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(o,".").concat(u)]||m[u]||s[u]||p;return a?t.createElement(k,l(l({ref:n},d),{},{components:a})):t.createElement(k,l({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<p;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7568:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=a(2962),r=a(2742),p=(a(9496),a(9613)),l=["components"],i={id:"dlx",title:"pnpm dlx"},o=void 0,c={unversionedId:"cli/dlx",id:"version-8.x/cli/dlx",title:"pnpm dlx",description:"Mengambil paket dari registri tanpa menginstalnya sebagai dependensi, meng-hotloadnya, dan menjalankan perintah biner apapun yang dieksposnya.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-8.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/id/cli/dlx",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"8.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-8.x/docs",previous:{title:"pnpm exec",permalink:"/id/cli/exec"},next:{title:"pnpm create",permalink:"/id/cli/create"}},d={},s=[{value:"Options",id:"options",level:2},{value:"--paket &lt;nama&gt;",id:"--paket-nama",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],m={toc:s};function u(e){var n=e.components,a=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Mengambil paket dari registri tanpa menginstalnya sebagai dependensi, meng-hotloadnya, dan menjalankan perintah biner apapun yang dieksposnya."),(0,p.kt)("p",null,"Misalnya, Untuk menggunakan ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," di mana saja untuk mem-bootstrap react app tanpa harus menginstall di projek lainya, Anda dapat menjalankan dengan cara:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Ini akan mengambil ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," dari registri dan menjalankannya dengan argumen yang diberikan."),(0,p.kt)("p",null,"Anda juga dapat menentukan versi pasti dari paket yang ingin Anda gunakan:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--paket-nama"},"--paket ","<","nama",">"),(0,p.kt)("p",null,"Paket yang perlu diinstal sebelum menjalankan perintah."),(0,p.kt)("p",null,"Contoh:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Beberapa paket dapat disediakan untuk instalasi:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,p.kt)("p",null,"Menjalankan perintah di dalam shell. Uses ",(0,p.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,p.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,p.kt)("p",null,"Contoh:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package cowsay --package lolcatjs -c dlx 'echo \"hi pnpm\" | cowsay | lolcatjs'\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Hanya output dari perintah yang dieksekusi yang dicetak."))}u.isMDXComponent=!0}}]);