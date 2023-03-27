"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5869],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=l,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(2962),l=n(2742),a=(n(9496),n(9613)),p=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-7.x/cli/exec",title:"pnpm exec",description:"\u5728\u5c08\u6848\u7684\u7bc4\u570d\u4e2d\u57f7\u884c Shell \u547d\u4ee4\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/zh-TW/7.x/cli/exec",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-7.x/docs",previous:{title:"pnpm test",permalink:"/zh-TW/7.x/cli/test"},next:{title:"pnpm dlx",permalink:"/zh-TW/7.x/cli/dlx"}},u={},m=[{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"\u53c3\u6578\u9078\u9805",id:"\u53c3\u6578\u9078\u9805",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b-1",level:4},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5c08\u6848\u7684\u7bc4\u570d\u4e2d\u57f7\u884c Shell \u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u6703\u88ab\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"\uff0c\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u5141\u8a31\u57f7\u884c\u4f9d\u8cf4\u95dc\u4fc2\u7684\u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u7684\u5c08\u6848\u4f7f\u7528 Jest \u4f5c\u70ba\u4f9d\u9644\u5957\u4ef6\uff0c\u5247\u7121\u9700\u5168\u57df\u5b89\u88dd Jest\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u57f7\u884c\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"\u7576\u547d\u4ee4\u540d\u7a31\u8207 pnpm \u7684\u5167\u5efa\u547d\u4ee4\u4e0d\u885d\u7a81\u6642\uff0c\u5be6\u969b\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u662f\u53ef\u7701\u7565\u7684\uff0c\u56e0\u6b64\u60a8\u4e5f\u53ef\u4ee5\u53ea\u57f7\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"\u53c3\u6578\u9078\u9805"},"\u53c3\u6578\u9078\u9805"),(0,a.kt)("p",null,"\u6709\u95dc ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u547d\u4ee4\u7684\u9078\u9805\u9700\u7f6e\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u95dc\u9375\u5b57\u524d\u3002 \u7f6e\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \u95dc\u9375\u5b57\u5f8c\u7684\u9078\u9805\u5c07\u6703\u63d0\u4f9b\u7d66\u57f7\u884c\u7684\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u6b63\u78ba\u7bc4\u4f8b\uff0c pnpm \u5c07\u905e\u8ff4\u5730\u57f7\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"\u932f\u8aa4\u7bc4\u4f8b\uff0cpnpm \u4e0d\u6703\u905e\u8ff4\u5730\u57f7\u884c\uff0c\u4f46 ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," \u6703\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," \u9078\u9805\u57f7\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u5728 workspace \u7684\u6bcf\u500b\u5c08\u6848\u4e2d\u90fd\u57f7\u884c shell \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u53ef\u900f\u904e\u74b0\u5883\u8b8a\u6578 ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," \u53d6\u5f97\u76ee\u524d\u7684\u5957\u4ef6\u540d\u7a31\u3002"),(0,a.kt)("h4",{id:"\u7bc4\u4f8b-1"},"\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u522a\u53bb\u6240\u6709\u5957\u4ef6\u5b89\u88dd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7684\u6a94\u6848\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"\u6aa2\u8996\u6240\u6709\u5957\u4ef6\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002 \u6b64\u547d\u4ee4\u61c9\u8207 ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode"),"\uff08\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),"\uff09\u9078\u9805\u4f7f\u7528\uff0c\u4ee5\u4f7f\u74b0\u5883\u8b8a\u6578\u4f5c\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,a.kt)("p",null,"\u65b0\u589e\u65bc v7.22.0"),(0,a.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-TW/7.x/cli/run#--report-summary"},"Read about this option in the run command docs")),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-TW/7.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);