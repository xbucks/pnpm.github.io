"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6894],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(n),m=l,u=c["".concat(d,".").concat(m)]||c[m]||k[m]||r;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>k});var a=n(2962),l=n(2742),r=(n(9496),n(9613)),i=["components"],p={id:"update",title:"pnpm update"},d=void 0,o={unversionedId:"cli/update",id:"version-8.x/cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-8.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/tr/cli/update",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"8.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-8.x/docs",previous:{title:"pnpm install",permalink:"/tr/cli/install"},next:{title:"pnpm remove",permalink:"/tr/cli/remove"}},s={},k=[{value:"K\u0131saca;",id:"k\u0131saca",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Parametreler",id:"parametreler",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],c={toc:k};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aliases: ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm update")," komutu ile k\xfct\xfcphaneleri/paketleri, belirleyece\u011fin \u015fekilde son s\xfcr\xfcmlerine g\xfcncelleye-bilirsin."),(0,r.kt)("p",null,"Parametresiz bir \u015fekilde kullan\u0131ld\u0131\u011f\u0131 zaman, t\xfcm k\xfct\xfcphaneleri g\xfcnceller."),(0,r.kt)("h2",{id:"k\u0131saca"},"K\u0131saca;"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Komut"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"package.json")," i\xe7erisinde tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri, aral\u0131klar\u0131na g\xf6re g\xfcnceller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"package.json")," i\xe7erisinde tan\u0131ml\u0131 olan t\xfcm k\xfct\xfcphaneleri, son s\xfcr\xfcme g\xfcnceller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foo")," k\xfct\xfcphanesini, b\xfcy\xfck s\xfcr\xfcm\xfc 2.x.x olan aral\u0131\u011f\u0131n en son s\xfcr\xfcm\xfcne g\xfcnceller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@babel")," alan ad\u0131na sahip t\xfcm k\xfct\xfcphaneleri g\xfcnceller")))),(0,r.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,r.kt)("p",null,"You can use patterns to update specific dependencies."),(0,r.kt)("p",null,"Update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*"\n')),(0,r.kt)("p",null,"Update all dependencies, except ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,r.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*" !@babel/core\n')),(0,r.kt)("h2",{id:"parametreler"},"Parametreler"),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,"Workspace i\xe7erisinde ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," dosyas\u0131 bulunan t\xfcm alt dizinleri, e\u015f zamanl\u0131 bi\xe7imde g\xfcnceller."),(0,r.kt)("p",null,"\u015eu \u015fekilde kullan\u0131l\u0131r:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\n# 100 adete kadar alt dizindeki k\xfct\xfcphaneleri g\xfcnceller\npnpm --recursive update --depth 100\n# \xe7al\u0131\u015fma alan\u0131ndaki t\xfcm typescript k\xfct\xfcphanelerini, son s\xfcr\xfcme g\xfcnceller \npnpm --recursive update typescript@latest\n")),(0,r.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," i\xe7erisinde belirtilen s\xfcr\xfcm aral\u0131klar\u0131n\u0131/s\u0131n\u0131rlar\u0131n\u0131 yok saymay\u0131 sa\u011flar. Y\xfckleme s\u0131ras\u0131nda k\xfct\xfcphanelerin, ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," etiketiyle belirlenen s\xfcr\xfcm\xfc y\xfckler (paketlerin en b\xfcy\xfck s\xfcr\xfcm numaras\u0131n\u0131 hedefleyerek en son s\xfcr\xfcmlerine g\xfcnceller)."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Global olarak y\xfcklenen k\xfct\xfcphaneleri/paketleri g\xfcnceller."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Workspace i\xe7erisinde t\xfcm paketleri ili\u015fkilendirmeye \xe7al\u0131\u015f\u0131r. G\xfcncelleme i\u015flemi s\u0131ras\u0131nda proje i\xe7erisindeki di\u011fer projeyi eski s\xfcr\xfcm\xfcyle miras alan paket s\xfcr\xfcmlerini, paketin kayna\u011f\u0131nda belirtilen s\xfcr\xfcmle de\u011fi\u015ftirir."),(0,r.kt)("p",null,"G\xfcncelleme i\u015flemi sadece belirli paketlere uyguland\u0131\u011f\u0131nda, hedef paketler workspace i\xe7erisinde bulunmad\u0131\u011f\u0131 zaman, i\u015flem hata vererek sonlan\u0131r. \xd6rne\u011fin, ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," k\xfct\xfcphanesi workspace i\xe7erisinde bulunmazsa e\u011fer a\u015fa\u011f\u0131daki komut hata vererek sonlan\u0131r:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"Sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," ve ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131s\u0131mlar\u0131na eklenmi\u015f k\xfct\xfcphaneleri/paketleri g\xfcnceller."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Sadece ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131na eklenmi\u015f k\xfct\xfcphaneleri/paketleri g\xfcnceller."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,"G\xfcncelleme yaparken, ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131na eklenmi\u015f paketleri g\xf6z ard\u0131 eder."),(0,r.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,r.kt)("p",null,"G\xfcncellenmesi gereken paketleri/k\xfct\xfcphaneleri listeleyerek, se\xe7im yap\u0131lmas\u0131n\u0131 bekler ve sonra g\xfcncelleme yapar."),(0,r.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}m.isMDXComponent=!0}}]);