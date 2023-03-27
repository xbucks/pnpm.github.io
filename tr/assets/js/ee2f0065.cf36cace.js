"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8101],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,h=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(2962),a=n(2742),o=(n(9496),n(9613)),l=["components"],i={id:"completion",title:"Komut sat\u0131r\u0131 oto-tamamlama"},p=void 0,s={unversionedId:"completion",id:"version-7.x/completion",title:"Komut sat\u0131r\u0131 oto-tamamlama",description:"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/tr/7.x/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"completion",title:"Komut sat\u0131r\u0131 oto-tamamlama"},sidebar:"version-7.x/docs",previous:{title:"Lakaplar",permalink:"/tr/7.x/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/tr/7.x/using-changesets"}},c={},m=[{value:"Fig (on macOS only)",id:"fig-on-macos-only",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Unlike other popular package managers, which usually require plugins, pnpm supports command line tab-completion for Bash, Zsh, Fish, and similar shells."),(0,o.kt)("p",null,"Oto tamamlama \xf6zelli\u011fini kurmak i\xe7in, \u015funu \xe7al\u0131\u015ft\u0131r\u0131n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,o.kt)("p",null,"The CLI will ask for which shell to generate the autocompletion script. Alternatively, the target shell may be specified in the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,o.kt)("p",null,"Tamamlama ile ilgili daha fazla \xf6rnek i\xe7in, ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"bu makaleyi")," okuyabilirsiniz."),(0,o.kt)("h2",{id:"fig-on-macos-only"},"Fig (on macOS only)"),(0,o.kt)("p",null,"You can get IDE-style autocompletions for pnpm with ",(0,o.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". It works in Bash, Zsh, and Fish."),(0,o.kt)("p",null,"To install, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")))}f.isMDXComponent=!0}}]);