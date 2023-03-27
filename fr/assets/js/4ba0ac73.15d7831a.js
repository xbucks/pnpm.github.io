"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8604],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var s=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},c=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?s.createElement(k,a(a({ref:n},d),{},{components:t})):s.createElement(k,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var p=2;p<o;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var s=t(2962),i=t(2742),o=(t(9496),t(9613)),a=["components"],r={id:"faq",title:"Questions fr\xe9quemment pos\xe9es"},l=void 0,p={unversionedId:"faq",id:"version-7.x/faq",title:"Questions fr\xe9quemment pos\xe9es",description:"Pourquoi mon dossier node_modules utilise-t-il de l'espace disque si les packages sont stock\xe9s dans un magasin global\xa0?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/fr/7.x/faq",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"faq",title:"Questions fr\xe9quemment pos\xe9es"}},d={},u=[{value:"Pourquoi mon dossier <code>node_modules</code> utilise-t-il de l&#39;espace disque si les packages sont stock\xe9s dans un magasin global\xa0?",id:"pourquoi-mon-dossier-node_modules-utilise-t-il-de-lespace-disque-si-les-packages-sont-stock\xe9s-dans-un-magasin-global",level:2},{value:"Cela fonctionne-t-il sous Windows ?",id:"cela-fonctionne-t-il-sous-windows-",level:2},{value:"Mais l&#39;approche des <code>node_modules</code> imbriqu\xe9s est incompatible avec Windows ?",id:"mais-lapproche-des-node_modules-imbriqu\xe9s-est-incompatible-avec-windows-",level:2},{value:"Qu&#39;en est-il des liens symboliques circulaires\xa0?",id:"quen-est-il-des-liens-symboliques-circulaires",level:2},{value:"Pourquoi avoir des liens durs ? Pourquoi ne pas cr\xe9er un lien symbolique directement vers le magasin global\xa0?",id:"pourquoi-avoir-des-liens-durs--pourquoi-ne-pas-cr\xe9er-un-lien-symbolique-directement-vers-le-magasin-global",level:2},{value:"Pnpm fonctionne-t-il sur plusieurs disques ou syst\xe8mes de fichiers\u202f?",id:"pnpm-fonctionne-t-il-sur-plusieurs-disques-ou-syst\xe8mes-de-fichiers",level:2},{value:"Store path is specified",id:"store-path-is-specified",level:3},{value:"Store path is NOT specified",id:"store-path-is-not-specified",level:3},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",level:2},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",level:2},{value:"Solution 1",id:"solution-1",level:3},{value:"Solution 2",id:"solution-2",level:3},{value:"Solution 3",id:"solution-3",level:3}],c={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pourquoi-mon-dossier-node_modules-utilise-t-il-de-lespace-disque-si-les-packages-sont-stock\xe9s-dans-un-magasin-global"},"Pourquoi mon dossier ",(0,o.kt)("inlineCode",{parentName:"h2"},"node_modules")," utilise-t-il de l'espace disque si les packages sont stock\xe9s dans un magasin global\xa0?"),(0,o.kt)("p",null,"pnpm cr\xe9e des ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"liens")," du magasin global vers le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," du projet. Les liens mat\xe9riels pointent vers le m\xeame endroit sur le disque o\xf9 se trouvent les fichiers originaux. Donc, par exemple, si vous avez ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," dans votre projet en tant que d\xe9pendance et qu'il occupe 1Mo d'espace, alors, il semblera qu'il utilise 1 Mo d'espace dans le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," du projet et la m\xeame quantit\xe9 d'espace dans le magasin global. Cependant, ce 1 Mo est ",(0,o.kt)("em",{parentName:"p"},"le m\xeame espace")," sur le disque adress\xe9 \xe0 partir de deux emplacements diff\xe9rents. Donc au total, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," occupe 1 Mo, et non 2 Mo."),(0,o.kt)("p",null,"Pour en savoir plus sur ce sujet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Pourquoi les liens physiques semblent-ils occuper le m\xeame espace que les originaux\xa0?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Un fil de discussion du salon pnpm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Un issue dans le d\xe9p\xf4t pnpm"))),(0,o.kt)("h2",{id:"cela-fonctionne-t-il-sous-windows-"},"Cela fonctionne-t-il sous Windows ?"),(0,o.kt)("p",null,"R\xe9ponse courte : oui. R\xe9ponse longue : l'utilisation des liens symboliques sous Windows est pour le moins probl\xe9matique, cependant pnpm a une solution de contournement. Pour Windows, nous utilisation les ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/sysinternals/downloads/junction"}," jonctions")," \xe0 la place."),(0,o.kt)("h2",{id:"mais-lapproche-des-node_modules-imbriqu\xe9s-est-incompatible-avec-windows-"},"Mais l'approche des ",(0,o.kt)("inlineCode",{parentName:"h2"},"node_modules")," imbriqu\xe9s est incompatible avec Windows ?"),(0,o.kt)("p",null,"Les premi\xe8res versions de npm ont eu des probl\xe8mes \xe0 cause de l'imbrication de tous les ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," (voir ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"cette issue"),"). Cependant, pnpm ne cr\xe9e pas de dossiers profonds, il stocke tous les packages \xe0 plat et utilise des liens symboliques pour cr\xe9er l'arborescence des d\xe9pendances."),(0,o.kt)("h2",{id:"quen-est-il-des-liens-symboliques-circulaires"},"Qu'en est-il des liens symboliques circulaires\xa0?"),(0,o.kt)("p",null,"Bien que pnpm utilise un lien pour mettre les d\xe9pendances dans les dossiers ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," , les liens symboliques circulaires sont \xe9vit\xe9s car les paquets parents sont plac\xe9s dans le m\xeame dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," dans lequel se trouvent leurs d\xe9pendances. Ainsi, les d\xe9pendances de ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," ne sont pas dans ",(0,o.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", mais ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," se trouve dans ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," avec ses propres d\xe9pendances."),(0,o.kt)("h2",{id:"pourquoi-avoir-des-liens-durs--pourquoi-ne-pas-cr\xe9er-un-lien-symbolique-directement-vers-le-magasin-global"},"Pourquoi avoir des liens durs ? Pourquoi ne pas cr\xe9er un lien symbolique directement vers le magasin global\xa0?"),(0,o.kt)("p",null,"Un package peut avoir diff\xe9rents ensembles de d\xe9pendances sur une machine."),(0,o.kt)("p",null,"Dans le projet ",(0,o.kt)("strong",{parentName:"p"},"A")," ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," peut avoir une d\xe9pendance r\xe9solue en ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", mais dans le projet ",(0,o.kt)("strong",{parentName:"p"},"B")," la m\xeame d\xe9pendance de ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," peut \xeatre r\xe9solue en ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"\xa0; alors, pnpm relie en dur ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \xe0 chaque projet o\xf9 il est utilis\xe9, afin de cr\xe9er diff\xe9rents ensembles de d\xe9pendances pour celui-ci."),(0,o.kt)("p",null,"La cr\xe9ation de liens symboliques directs vers le magasin global fonctionnerait avec l'option ",(0,o.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," de Node, cependant, cette approche s'accompagne d'une panoplie de ses propres probl\xe8mes, donc nous avons d\xe9cid\xe9 de garder les liens durs. Pour plus de d\xe9tails sur les raisons de cette d\xe9cision, lisez ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"cette issue"),"."),(0,o.kt)("h2",{id:"pnpm-fonctionne-t-il-sur-plusieurs-disques-ou-syst\xe8mes-de-fichiers"},"Pnpm fonctionne-t-il sur plusieurs disques ou syst\xe8mes de fichiers\u202f?"),(0,o.kt)("p",null,"The package store should be on the same drive and filesystem as installations, otherwise packages will be copied, not linked. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,o.kt)("p",null,"pnpm functions differently in the 2 cases below:"),(0,o.kt)("h3",{id:"store-path-is-specified"},"Store path is specified"),(0,o.kt)("p",null,"If the store path is specified via ",(0,o.kt)("a",{parentName:"p",href:"/fr/7.x/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),(0,o.kt)("p",null,"If you run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", then the pnpm store must be on disk ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),". If the pnpm store is located on disk ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", then all required packages will be directly copied to the project location instead of being linked. This severely inhibits the storage and performance benefits of pnpm."),(0,o.kt)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),(0,o.kt)("p",null,"If the store path is not set, then multiple stores are created (one per drive or filesystem)."),(0,o.kt)("p",null,"If installation is run on disk ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on disk ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," at ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),(0,o.kt)("h2",{id:"what-does-pnpm-stand-for"},"What does ",(0,o.kt)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm")," stands for ",(0,o.kt)("inlineCode",{parentName:"p"},"performant npm"),". ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," came up with the name."),(0,o.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,o.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),(0,o.kt)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),(0,o.kt)("h3",{id:"solution-1"},"Solution 1"),(0,o.kt)("p",null,"In case there are issues, you can use the ",(0,o.kt)("a",{parentName:"p",href:"npmrc#node-linker"},(0,o.kt)("inlineCode",{parentName:"a"},"node-linker=hoisted"))," setting. This creates a flat ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,o.kt)("h3",{id:"solution-2"},"Solution 2"),(0,o.kt)("p",null,"In the following example, a dependency does ",(0,o.kt)("strong",{parentName:"p"},"not")," have the ",(0,o.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,o.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,o.kt)("strong",{parentName:"p"},"add ",(0,o.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,o.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,o.kt)("p",null,"Vous pouvez le faire en l'installant via ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", et \xe7a sera automatiquement ajout\xe9 au ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"de votre projet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,o.kt)("h3",{id:"solution-3"},"Solution 3"),(0,o.kt)("p",null,"One of the solutions is to use ",(0,o.kt)("a",{parentName:"p",href:"/fr/7.x/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,"An example was ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,o.kt)("p",null,"It used to throw an error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,o.kt)("p",null,"The problem was that ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,o.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.kt)("p",null,"The solution was to create a ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,o.kt)("p",null,"After creating a ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then, rebuild the dependencies & it should be working."))}m.isMDXComponent=!0}}]);