"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4302],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),f=a,h=u["".concat(p,".").concat(f)]||u[f]||c[f]||l;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var r=n(2962),a=n(2742),l=(n(9496),n(9613)),o=["components"],i={id:"completion",title:"Komut sat\u0131r\u0131 oto-tamamlama"},p=void 0,m={unversionedId:"completion",id:"version-8.x/completion",title:"Komut sat\u0131r\u0131 oto-tamamlama",description:"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-8.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/tr/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"8.x",frontMatter:{id:"completion",title:"Komut sat\u0131r\u0131 oto-tamamlama"},sidebar:"version-8.x/docs",previous:{title:"Lakaplar",permalink:"/tr/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/tr/using-changesets"}},s={},c=[{value:"Fig (on macOS only)",id:"fig-on-macos-only",level:2},{value:"g-plane/pnpm-shell-completion",id:"g-planepnpm-shell-completion",level:2}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells."),(0,l.kt)("p",null,"Oto tamamlama \xf6zelli\u011fini kurmak i\xe7in, \u015funu \xe7al\u0131\u015ft\u0131r\u0131n:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,l.kt)("p",null,"The CLI will ask for which shell to generate the autocompletion script. Alternatively, the target shell may be specified in the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,l.kt)("p",null,"Tamamlama ile ilgili daha fazla \xf6rnek i\xe7in, ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"bu makaleyi")," okuyabilirsiniz."),(0,l.kt)("h2",{id:"fig-on-macos-only"},"Fig (on macOS only)"),(0,l.kt)("p",null,"You can get IDE-style autocompletions for pnpm with ",(0,l.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". It works in Bash, Zsh, and Fish."),(0,l.kt)("p",null,"To install, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")),(0,l.kt)("h2",{id:"g-planepnpm-shell-completion"},"g-plane/pnpm-shell-completion"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/g-plane/pnpm-shell-completion"},"pnpm-shell-completion")," is a shell plugin maintained by Pig Fang on Github."),(0,l.kt)("p",null,"Features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Provide completion for ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm --filter <package>"),"."),(0,l.kt)("li",{parentName:"ul"},"Provide completion for ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm remove")," command, even in workspace's packages (by specifying ",(0,l.kt)("inlineCode",{parentName:"li"},"--filter")," option)."),(0,l.kt)("li",{parentName:"ul"},"Provide completion for scripts in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),".")))}f.isMDXComponent=!0}}]);