"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3455],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(2962),o=t(2742),a=(t(9496),t(9613)),i=["components"],l={id:"only-allow-pnpm",title:"Consenti solo pnpm"},p=void 0,c={unversionedId:"only-allow-pnpm",id:"version-7.x/only-allow-pnpm",title:"Consenti solo pnpm",description:"Quando usi pnpm in un progetto, non vuoi che gli altri eseguano accidentalmente npm install o yarn. Per evitare che gli sviluppatori usino altri gestori di pacchetti, puoi aggiungere il seguente script preinstall nel tuo package.json:",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/only-allow-pnpm.md",sourceDirName:".",slug:"/only-allow-pnpm",permalink:"/it/7.x/only-allow-pnpm",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"only-allow-pnpm",title:"Consenti solo pnpm"}},s={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Quando usi pnpm in un progetto, non vuoi che gli altri eseguano accidentalmente ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". Per evitare che gli sviluppatori usino altri gestori di pacchetti, puoi aggiungere il seguente script ",(0,a.kt)("inlineCode",{parentName:"p"},"preinstall")," nel tuo ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "preinstall": "npx only-allow pnpm"\n    }\n}\n')),(0,a.kt)("p",null,"Ora, ogni volta che qualcuno esegue ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),", otterr\xe0 un messaggio di errore e l'installazione non proceder\xe0."),(0,a.kt)("p",null,"Se usi npm v7, usa ",(0,a.kt)("inlineCode",{parentName:"p"},"npx -y"),"."))}d.isMDXComponent=!0}}]);