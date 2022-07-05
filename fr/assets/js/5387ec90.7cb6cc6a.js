"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4414],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var o=t(9496);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=o.createContext({}),p=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(r.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=s,h=m["".concat(r,".").concat(c)]||m[c]||u[c]||i;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function c(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=t(2848),s=t(9213),i=(t(9496),t(9613)),a=["components"],l={id:"faq",title:"Questions fr\xe9quemment pos\xe9es"},r=void 0,p={unversionedId:"faq",id:"version-6.x/faq",title:"Questions fr\xe9quemment pos\xe9es",description:"Pourquoi mon dossier node_modules utilise-t-il de l'espace disque si les packages sont stock\xe9s dans un magasin global\xa0?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/fr/6.x/faq",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"faq",title:"Questions fr\xe9quemment pos\xe9es"}},d={},u=[{value:"Pourquoi mon dossier <code>node_modules</code> utilise-t-il de l&#39;espace disque si les packages sont stock\xe9s dans un magasin global\xa0?",id:"pourquoi-mon-dossier-node_modules-utilise-t-il-de-lespace-disque-si-les-packages-sont-stock\xe9s-dans-un-magasin-global",level:2},{value:"Cela fonctionne-t-il sous Windows ?",id:"cela-fonctionne-t-il-sous-windows-",level:2},{value:"Mais l&#39;approche des <code>node_modules</code> imbriqu\xe9s est incompatible avec Windows ?",id:"mais-lapproche-des-node_modules-imbriqu\xe9s-est-incompatible-avec-windows-",level:2},{value:"Qu&#39;en est-il des liens symboliques circulaires\xa0?",id:"quen-est-il-des-liens-symboliques-circulaires",level:2},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",level:2},{value:"Does pnpm work across multiple drives or filesystems?",id:"does-pnpm-work-across-multiple-drives-or-filesystems",level:2},{value:"Store path is specified",id:"store-path-is-specified",level:3},{value:"Store path is NOT specified",id:"store-path-is-not-specified",level:3},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",level:2},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",level:2},{value:"Solution 1",id:"solution-1",level:3},{value:"Solution 2",id:"solution-2",level:3},{value:"Solution 3",id:"solution-3",level:3}],m={toc:u};function c(e){var n=e.components,t=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pourquoi-mon-dossier-node_modules-utilise-t-il-de-lespace-disque-si-les-packages-sont-stock\xe9s-dans-un-magasin-global"},"Pourquoi mon dossier ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," utilise-t-il de l'espace disque si les packages sont stock\xe9s dans un magasin global\xa0?"),(0,i.kt)("p",null,"pnpm cr\xe9e des ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"liens")," du magasin global vers le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," du projet. Les liens mat\xe9riels pointent vers le m\xeame endroit sur le disque o\xf9 se trouvent les fichiers originaux. Donc, par exemple, si vous avez ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," dans votre projet en tant que d\xe9pendance et qu'il occupe 1Mo d'espace, alors, il semblera qu'il utilise 1 Mo d'espace dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," du projet et la m\xeame quantit\xe9 d'espace dans le magasin global. Cependant, ce 1 Mo est ",(0,i.kt)("em",{parentName:"p"},"le m\xeame espace")," sur le disque adress\xe9 \xe0 partir de deux emplacements diff\xe9rents. Donc au total, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," occupe 1 Mo, et non 2 Mo."),(0,i.kt)("p",null,"Pour en savoir plus sur ce sujet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Pourquoi les liens physiques semblent-ils occuper le m\xeame espace que les originaux\xa0?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Un fil de discussion du salon pnpm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Un issue dans le d\xe9p\xf4t pnpm"))),(0,i.kt)("h2",{id:"cela-fonctionne-t-il-sous-windows-"},"Cela fonctionne-t-il sous Windows ?"),(0,i.kt)("p",null,"R\xe9ponse courte : oui. R\xe9ponse longue : l'utilisation des liens symboliques sous Windows est pour le moins probl\xe9matique, cependant pnpm a une solution de contournement. Pour Windows, nous utilisation les ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/sysinternals/downloads/junction"}," jonctions")," \xe0 la place."),(0,i.kt)("h2",{id:"mais-lapproche-des-node_modules-imbriqu\xe9s-est-incompatible-avec-windows-"},"Mais l'approche des ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," imbriqu\xe9s est incompatible avec Windows ?"),(0,i.kt)("p",null,"Early versions of npm had issues because of nesting all ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"this issue"),". Cependant, pnpm ne cr\xe9e pas de dossiers profonds, il stocke tous les packages \xe0 plat et utilise des liens symboliques pour cr\xe9er l'arborescence des d\xe9pendances."),(0,i.kt)("h2",{id:"quen-est-il-des-liens-symboliques-circulaires"},"Qu'en est-il des liens symboliques circulaires\xa0?"),(0,i.kt)("p",null,"Bien que pnpm utilise un lien pour mettre les d\xe9pendances dans les dossiers ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," , les liens symboliques circulaires sont \xe9vit\xe9s car les paquets parents sont plac\xe9s dans le m\xeame dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," dans lequel se trouvent leurs d\xe9pendances. Ainsi, les d\xe9pendances de ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"ne sont pas dans ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", mais ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," se trouve dans ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," avec ses propres d\xe9pendances."),(0,i.kt)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),(0,i.kt)("p",null,"One package can have different sets of dependencies on one machine."),(0,i.kt)("p",null,"In project ",(0,i.kt)("strong",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but in project ",(0,i.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so, pnpm hard links ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),(0,i.kt)("p",null,"Direct symlinking to the global store would work with Node's ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its own issues, so we decided to stick with hard links. For more details about why this decision was made, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),(0,i.kt)("h2",{id:"does-pnpm-work-across-multiple-drives-or-filesystems"},"Does pnpm work across multiple drives or filesystems?"),(0,i.kt)("p",null,"The package store should be on the same drive and filesystem as installations, otherwise packages will be copied, not linked. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,i.kt)("p",null,"pnpm functions differently in the 2 cases below:"),(0,i.kt)("h3",{id:"store-path-is-specified"},"Store path is specified"),(0,i.kt)("p",null,"If the store path is specified via ",(0,i.kt)("a",{parentName:"p",href:"/fr/6.x/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", then the pnpm store must be on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". If the pnpm store is located on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", then all required packages will be directly copied to the project location instead of being linked. This severely inhibits the storage and performance benefits of pnpm."),(0,i.kt)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),(0,i.kt)("p",null,"If the store path is not set, then multiple stores are created (one per drive or filesystem)."),(0,i.kt)("p",null,"If installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," at ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),(0,i.kt)("h2",{id:"what-does-pnpm-stand-for"},"What does ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"performant npm"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," came up with the name."),(0,i.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),(0,i.kt)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),(0,i.kt)("h3",{id:"solution-1"},"Solution 1"),(0,i.kt)("p",null,"In the following example, a dependency does ",(0,i.kt)("strong",{parentName:"p"},"not")," have the ",(0,i.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,i.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,i.kt)("strong",{parentName:"p"},"add ",(0,i.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,i.kt)("p",null,"You can do so, by installing it via ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be automatically added to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,i.kt)("h3",{id:"solution-2"},"Solution 2"),(0,i.kt)("p",null,"One of the solutions is to use ",(0,i.kt)("a",{parentName:"p",href:"/fr/6.x/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"An example was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,i.kt)("p",null,"It used to throw an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,i.kt)("p",null,"The problem was that ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("p",null,"The solution was to create a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,i.kt)("p",null,"After creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then, rebuild the dependencies & it should be working."),(0,i.kt)("h3",{id:"solution-3"},"Solution 3"),(0,i.kt)("p",null,"In case there are too many issues, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," option. This creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary purpose of pnpm's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," approach."),(0,i.kt)("p",null,"To use it, try ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}c.isMDXComponent=!0}}]);