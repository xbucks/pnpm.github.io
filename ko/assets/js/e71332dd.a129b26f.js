"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1066],{9613:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=m(a),u=l,c=k["".concat(o,".").concat(u)]||k[u]||d[u]||r;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4825:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var n=a(2081),l=a(4604),r=(a(9496),a(9613)),i=["components"],p={},o="Benchmarks of JavaScript Package Managers",m={type:"mdx",permalink:"/ko/benchmarks",source:"@site/src/pages/benchmarks.md",title:"Benchmarks of JavaScript Package Managers",description:"Last benchmarked at23 AM (daily updated).",frontMatter:{}},s=[{value:"Lots of Files",id:"lots-of-files",level:2},{value:"The reason pnpm is fast",id:"the-reason-pnpm-is-fast",level:2}],d={toc:s};function k(t){var e=t.components,p=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Last benchmarked at"),": ",(0,r.kt)("em",{parentName:"p"},"Aug 28, 2022, 4:23 AM")," (",(0,r.kt)("em",{parentName:"p"},"daily")," updated)."),(0,r.kt)("p",null,"This benchmark compares the performance of npm, pnpm, Yarn Classic, and Yarn PnP (check ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/benchmarks"},"Yarn's benchmarks")," for any other Yarn modes that are not included here)."),(0,r.kt)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),(0,r.kt)("h2",{id:"lots-of-files"},"Lots of Files"),(0,r.kt)("p",null,"The app's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"action"),(0,r.kt)("th",{parentName:"tr",align:null},"cache"),(0,r.kt)("th",{parentName:"tr",align:null},"lockfile"),(0,r.kt)("th",{parentName:"tr",align:null},"node_modules"),(0,r.kt)("th",{parentName:"tr",align:null},"npm"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,r.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,r.kt)("th",{parentName:"tr",align:null},"Yarn PnP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"37.6s"),(0,r.kt)("td",{parentName:"tr",align:null},"21s"),(0,r.kt)("td",{parentName:"tr",align:null},"24s"),(0,r.kt)("td",{parentName:"tr",align:null},"30.3s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2s"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8s"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10.5s"),(0,r.kt)("td",{parentName:"tr",align:null},"5.7s"),(0,r.kt)("td",{parentName:"tr",align:null},"9.4s"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"15.1s"),(0,r.kt)("td",{parentName:"tr",align:null},"10.2s"),(0,r.kt)("td",{parentName:"tr",align:null},"16.2s"),(0,r.kt)("td",{parentName:"tr",align:null},"9.1s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"16.8s"),(0,r.kt)("td",{parentName:"tr",align:null},"17.6s"),(0,r.kt)("td",{parentName:"tr",align:null},"16.3s"),(0,r.kt)("td",{parentName:"tr",align:null},"22.9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5s"),(0,r.kt)("td",{parentName:"tr",align:null},"2.9s"),(0,r.kt)("td",{parentName:"tr",align:null},"10.1s"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2s"),(0,r.kt)("td",{parentName:"tr",align:null},"1.7s"),(0,r.kt)("td",{parentName:"tr",align:null},"9.9s"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5s"),(0,r.kt)("td",{parentName:"tr",align:null},"10.2s"),(0,r.kt)("td",{parentName:"tr",align:null},"16.7s"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"2s"),(0,r.kt)("td",{parentName:"tr",align:null},"13.2s"),(0,r.kt)("td",{parentName:"tr",align:null},"21.8s"),(0,r.kt)("td",{parentName:"tr",align:null},"37.4s")))),(0,r.kt)("img",{alt:"Graph of the alotta-files results",src:"/img/benchmarks/alotta-files.svg"}),(0,r.kt)("h2",{id:"the-reason-pnpm-is-fast"},"The reason pnpm is fast"),(0,r.kt)("p",null,'Why is pnpm so crazy fast compared to other "traditional" package managers?'),(0,r.kt)("p",null,"pnpm doesn't have blocking stages of installation. Each dependency has its own stages and the next stage starts as soon as possible."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4352).Z,width:"1420",height:"801"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1858).Z,width:"1419",height:"798"})))}k.isMDXComponent=!0},4352:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/installation-stages-of-other-pms-0933800341e399b76e0d33b2a0c7a312.png"},1858:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/installation-stages-of-pnpm-92606757de93a7535153ade5a829dff4.jpg"}}]);