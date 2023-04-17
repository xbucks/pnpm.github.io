"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4831],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return n?o.createElement(f,i(i({ref:t},m),{},{components:n})):o.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(2962),r=n(2742),l=(n(9496),n(9613)),i=["components"],a={id:"completion",title:"Command line tab-completion"},p=void 0,c={unversionedId:"completion",id:"version-8.x/completion",title:"Command line tab-completion",description:"Unlike other popular package managers, which usually require plugins, pnpm",source:"@site/versioned_docs/version-8.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/completion",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/completion.md",tags:[],version:"8.x",frontMatter:{id:"completion",title:"Command line tab-completion"},sidebar:"version-8.x/docs",previous:{title:"Aliases",permalink:"/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/using-changesets"}},m={},s=[{value:"Fig (on macOS only)",id:"fig-on-macos-only",level:2},{value:"g-plane/pnpm-shell-completion",id:"g-planepnpm-shell-completion",level:2}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Unlike other popular package managers, which usually require plugins, pnpm\nsupports command line tab-completion for Bash, Zsh, Fish, and similar shells."),(0,l.kt)("p",null,"To setup autocompletion, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,l.kt)("p",null,"The CLI will ask for which shell to generate the autocompletion script.\nAlternatively, the target shell may be specified in the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,l.kt)("p",null,"To see examples of completion, read ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"this article"),"."),(0,l.kt)("h2",{id:"fig-on-macos-only"},"Fig (on macOS only)"),(0,l.kt)("p",null,"You can get IDE-style autocompletions for pnpm with ",(0,l.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". It works in Bash, Zsh, and Fish."),(0,l.kt)("p",null,"To install, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")),(0,l.kt)("h2",{id:"g-planepnpm-shell-completion"},"g-plane/pnpm-shell-completion"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/g-plane/pnpm-shell-completion"},"pnpm-shell-completion")," is a shell plugin maintained by Pig Fang on Github."),(0,l.kt)("p",null,"Features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provide completion for ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm --filter <package>"),"."),(0,l.kt)("li",{parentName:"ul"},"Provide completion for ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm remove")," command, even in workspace's packages (by specifying ",(0,l.kt)("inlineCode",{parentName:"li"},"--filter")," option)."),(0,l.kt)("li",{parentName:"ul"},"Provide completion for scripts in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),".")))}d.isMDXComponent=!0}}]);