"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8394],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(r),d=i,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=r(2848),i=r(9213),l=(r(9496),r(9613)),a=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,c={unversionedId:"cli/publish",id:"version-7.x/cli/publish",title:"pnpm publish",description:"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/ru/cli/publish",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-7.x/docs",previous:{title:"pnpm env <\u043a\u043e\u043c\u0430\u043d\u0434\u0430>",permalink:"/ru/cli/env"},next:{title:"pnpm pack",permalink:"/ru/cli/pack"}},s={},u=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--tag &lt;\u0442\u0435\u0433&gt;",id:"--tag-\u0442\u0435\u0433",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",level:2}],h={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/workspaces"},"workspace")," \u0444\u0430\u0439\u043b \u041b\u0418\u0426\u0415\u041d\u0417\u0418\u0418 \u0438\u0437 \u043a\u043e\u0440\u043d\u044f \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0443\u043f\u0430\u043a\u043e\u0432\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043f\u0430\u043a\u0435\u0442\u043e\u043c (\u0435\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438)."),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043b\u044f \u043f\u0435\u0440\u0435\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u043e\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/package_json#publishconfig"},"publishConfig")," \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"/ru/package_json#publishconfigdirectory"},(0,l.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 (\u043e\u0431\u044b\u0447\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0431\u043e\u0440\u043a\u0438)."),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u044d\u0442\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),") pnpm \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0432\u0435\u0440\u0441\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0449\u0435 \u043d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u044b \u0432 \u0440\u0435\u0435\u0441\u0442\u0440\u0435."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"--tag-\u0442\u0435\u0433"},"--tag ","<","\u0442\u0435\u0433",">"),(0,l.kt)("p",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0442\u0435\u0433\u043e\u043c. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439")," \u0442\u0435\u0433."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,l.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,l.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,l.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,l.kt)("p",null,"Don't check if current branch is your publish branch, clean, and up-to-date with remote."),(0,l.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"master")," and ",(0,l.kt)("strong",{parentName:"li"},"main")),(0,l.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,l.kt)("strong",{parentName:"li"},"String"))),(0,l.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,l.kt)("h3",{id:"--force"},"--force"),(0,l.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,l.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,l.kt)("p",null,"Save the list of published packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,l.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,l.kt)("p",null,"Does everything a publish would do except actually publishing to the registry."),(0,l.kt)("h3",{id:"--otp"},"--otp"),(0,l.kt)("p",null,"When publishing packages that require two-factor authentication, this option can specify a one-time password."),(0,l.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ru/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")),(0,l.kt)("h2",{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"),(0,l.kt)("p",null,"You can also set ",(0,l.kt)("inlineCode",{parentName:"p"},"git-checks"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"publish-branch")," options in the ",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc")," file."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")))}d.isMDXComponent=!0}}]);