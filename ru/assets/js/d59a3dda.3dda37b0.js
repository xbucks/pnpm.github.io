"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8969],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},p=Object.keys(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=l.createContext({}),s=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,u=c["".concat(r,".").concat(k)]||c[k]||m[k]||p;return n?l.createElement(u,i(i({ref:t},d),{},{components:n})):l.createElement(u,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=c;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var l=n(2962),a=n(2742),p=(n(9496),n(9613)),i=["components"],o={id:"pnpmfile",title:".pnpmfile.cjs"},r=void 0,s={unversionedId:"pnpmfile",id:"version-7.x/pnpmfile",title:".pnpmfile.cjs",description:"pnpm \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 (\u0445\u0443\u043a\u043e\u0432). \u0425\u0443\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b \u0432 \u0444\u0430\u0439\u043b\u0435 .pnpmfile.cjs.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/ru/7.x/pnpmfile",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-7.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/ru/7.x/pnpm-workspace_yaml"},next:{title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u044b",permalink:"/ru/7.x/workspaces"}},d={},m=[{value:"\u0425\u0443\u043a\u0438",id:"\u0445\u0443\u043a\u0438",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",level:4},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:4},{value:"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",level:3},{value:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:4},{value:"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f-1",level:4},{value:"\u041e\u043f\u0446\u0438\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],c={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 (\u0445\u0443\u043a\u043e\u0432). \u0425\u0443\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,p.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0432 \u0442\u043e\u043c \u0436\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u0447\u0442\u043e \u0438 \u043b\u043e\u043a-\u0444\u0430\u0439\u043b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 ",(0,p.kt)("a",{parentName:"p",href:"/ru/7.x/workspaces"},"\u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 (\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435)")," \u0441 \u043e\u0431\u0449\u0438\u043c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b\u043e\u043c, ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043a\u043e\u0440\u043d\u0435 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e."),(0,p.kt)("h2",{id:"\u0445\u0443\u043a\u0438"},"\u0425\u0443\u043a\u0438"),(0,p.kt)("h3",{id:"tldr"},"TL;DR"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u0425\u0443\u043a-\u0444\u0443\u043d\u043a\u0446\u0438\u044f"),(0,p.kt)("th",{parentName:"tr",align:null},"Process"),(0,p.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,p.kt)("td",{parentName:"tr",align:null},"Called after pnpm parses the dependency's package manifest"),(0,p.kt)("td",{parentName:"tr",align:null},"Allows you to mutate a dependency's ",(0,p.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,p.kt)("td",{parentName:"tr",align:null},"Called after the dependencies have been resolved."),(0,p.kt)("td",{parentName:"tr",align:null},"Allows you to mutate the lockfile.")))),(0,p.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,p.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,p.kt)("p",null,"Allows you to mutate a dependency's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," after parsing and prior to resolution. These mutations are not saved to the filesystem, however, they will affect what gets resolved in the lockfile and therefore what gets installed."),(0,p.kt)("p",null,"Note that you will need to delete the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," if you have already resolved the dependency you want to modify."),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"If you need changes to ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," saved to the filesystem, you need to use the ",(0,p.kt)("a",{parentName:"p",href:"/ru/7.x/cli/patch"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," command and patch the ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," file. This might be useful if you want to remove the ",(0,p.kt)("inlineCode",{parentName:"p"},"bin")," field of a dependency for instance.")),(0,p.kt)("h4",{id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"pkg")," - The manifest of the package. Either the response from the registry or the ",(0,p.kt)("inlineCode",{parentName:"li"},"package.json")," content."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,p.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,p.kt)("h4",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,p.kt)("p",null,"Example ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (changes the dependencies of a dependency):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,p.kt)("h4",{id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"},"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,p.kt)("p",null,"Removing the ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," field from a dependency's manifest via ",(0,p.kt)("inlineCode",{parentName:"p"},"readPackage")," will not prevent pnpm from building the dependency. When building a dependency, pnpm reads the ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," of the package from the package's archive, which is not affected by the hook. In order to ignore a package's build, use the ",(0,p.kt)("a",{parentName:"p",href:"/ru/7.x/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies")," field."),(0,p.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,p.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,p.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u043b\u043e\u043a\u0444\u0430\u0439\u043b\u0430 \u0434\u043e \u0435\u0433\u043e \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."),(0,p.kt)("h4",{id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b-1"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"lockfile")," - The lockfile resolutions object that is serialized to ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"context")," - Context object for the step. Method ",(0,p.kt)("inlineCode",{parentName:"li"},"#log(msg)")," allows you to use a debug log for the step.")),(0,p.kt)("h4",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,p.kt)("h4",{id:"\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f-1"},"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,p.kt)("p",null,"There are none - anything that can be done with the lockfile can be modified via this function, and you can even extend the lockfile's functionality."),(0,p.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"),(0,p.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u041f\u043e\u043b\u0435\u0437\u043d\u043e \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 ",(0,p.kt)("inlineCode",{parentName:"p"},"--ignore-scripts"),", \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u043d\u0438 \u043e\u0434\u0438\u043d \u0441\u043a\u0440\u0438\u043f\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."),(0,p.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,p.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,p.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,p.kt)("strong",{parentName:"li"},"\u043f\u0443\u0442\u044c")),(0,p.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,p.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,p.kt)("p",null,"\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e pnpmfile."),(0,p.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,p.kt)("strong",{parentName:"li"},"null")),(0,p.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,p.kt)("strong",{parentName:"li"},"\u043f\u0443\u0442\u044c")),(0,p.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u043c\u0435\u0440: ",(0,p.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,p.kt)("p",null,"\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u0433\u043e pnpmfile. \u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 pnpm-\u0444\u0430\u0439\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u0441\u0435\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 pnpm-\u0444\u0430\u0439\u043b\u044b. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 pnpm-\u0444\u0430\u0439\u043b, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 pnpm \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 pnpm \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432.")))}k.isMDXComponent=!0}}]);