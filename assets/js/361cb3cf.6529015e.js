"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7551],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=p,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(2962),p=n(2742),r=(n(9496),n(9613)),l=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-8.x/cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/versioned_docs/version-8.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/cli/update",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/update.md",tags:[],version:"8.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-8.x/docs",previous:{title:"pnpm install",permalink:"/cli/install"},next:{title:"pnpm remove",permalink:"/cli/remove"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aliases: ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified\nrange."),(0,r.kt)("p",null,"When used without arguments, updates all dependencies."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, adhering to ranges specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates ",(0,r.kt)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,r.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,r.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,r.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,r.kt)("p",null,"You can use patterns to update specific dependencies."),(0,r.kt)("p",null,"Update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*"\n')),(0,r.kt)("p",null,"Update all dependencies, except ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,r.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*" !@babel/core\n')),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,"Concurrently runs update in all subdirectories with a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (excluding\nnode_modules)."),(0,r.kt)("p",null,"Usage examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,r.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,r.kt)("p",null,"Ignores the version range specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Update global packages."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the\nversions of packages inside the workspace."),(0,r.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated\ndependencies are not found inside the workspace. For instance, the following\ncommand fails if ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"Only update packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"Only update packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,"Don't update packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,r.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);