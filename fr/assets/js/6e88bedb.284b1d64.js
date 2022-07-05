"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3992],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(2848),i=t(9213),l=(t(9496),t(9613)),r=["components"],o={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,s={unversionedId:"pnpmfile",id:"pnpmfile",title:".pnpmfile.cjs",description:"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called .pnpmfile.cjs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/fr/next/pnpmfile",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"docs",previous:{title:"pnpm-workspace.yaml",permalink:"/fr/next/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/fr/next/workspaces"}},c={},d=[{value:"Hooks",id:"hooks",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Utilisation",id:"utilisation",level:4},{value:"Limitations connues",id:"limitations-connues",level:4},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promesse&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promesselockfile",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:4},{value:"Limitations connues",id:"limitations-connues-1",level:4},{value:"Configuration associ\xe9e",id:"configuration-associ\xe9e",level:2},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",level:3},{value:"pnpmfile",id:"pnpmfile",level:3},{value:"global-pnpmfile",id:"global-pnpmfile",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm lets you hook directly into the installation process via special functions (hooks). Hooks can be declared in a file called ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,l.kt)("p",null,"Par d\xe9faut, ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," doit \xeatre situ\xe9 dans le m\xeame r\xe9pertoire que le fichier de verrouillage. Par exemple, dans un ",(0,l.kt)("a",{parentName:"p",href:"/fr/next/workspaces"},"workspace")," avec un fichier de verrouillage partag\xe9, ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," doit \xeatre \xe0 la racine du monorepo."),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("h3",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Hook Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Processus"),(0,l.kt)("th",{parentName:"tr",align:null},"Uses"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,l.kt)("td",{parentName:"tr",align:null},"Appel\xe9 apr\xe8s que pnpm ait analys\xe9 le manifeste du paquet de la d\xe9pendance"),(0,l.kt)("td",{parentName:"tr",align:null},"Permet de modifier le ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json")," d\u2019une d\xe9pendance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,l.kt)("td",{parentName:"tr",align:null},"Appel\xe9 apr\xe8s que les d\xe9pendances aient \xe9t\xe9 r\xe9solues."),(0,l.kt)("td",{parentName:"tr",align:null},"Permet de modifier le fichier lockfile")))),(0,l.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,l.kt)("p",null,"Permet de modifier le ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," d\u2019une d\xe9pendance apr\xe8s l\u2019analyse et avant la r\xe9solution. Ces mutations ne sont pas enregistr\xe9es dans le syst\xe8me de fichiers, cependant, elles affecteront ce qui est r\xe9solu dans le fichier lockfile et donc ce qui est install\xe9."),(0,l.kt)("p",null,"Notez que vous devrez supprimer le ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," si vous avez d\xe9j\xe0 r\xe9solu la d\xe9pendance que vous souhaitez modifier."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Si vous avez besoin d'enregistrer les modificitions de ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", vous devez utiliser la commande ",(0,l.kt)("a",{parentName:"p",href:"/fr/next/cli/patch"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," et patcher le fichier ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". Cela peut \xeatre utile si vous souhaitez supprimer le champs ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," d'une d\xe9pendance par exemple."))),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pkg")," - Le manifeste du package. Soit la r\xe9ponse du registre, soit le contenu de ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context")," - Objet de contexte pour l'\xe9tape. La m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"li"},"#log(msg)")," permet d'utiliser un journal de d\xe9bogage pour l'\xe9tape.")),(0,l.kt)("h4",{id:"utilisation"},"Utilisation"),(0,l.kt)("p",null,"Exemple ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (change les d\xe9pendances d'une d\xe9pendance) :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,l.kt)("h4",{id:"limitations-connues"},"Limitations connues"),(0,l.kt)("p",null,"Supprimer le champ ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," du manifeste d'une d\xe9pendance via ",(0,l.kt)("inlineCode",{parentName:"p"},"readPackage")," n'emp\xeachera pas de construire la d\xe9pendance. Lors de la construction d'une d\xe9pendance, pnpm lit le ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," du package \xe0 partir de l'archive du package, qui n'est pas affect\xe9e par le hook. Pour ignorer la construction d'un paquet, utilisez le champ ",(0,l.kt)("a",{parentName:"p",href:"/fr/next/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),"."),(0,l.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promesselockfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promesse<lockfile>")),(0,l.kt)("p",null,"Vous permet de modifier la sortie du fichier de verrouillage avant qu\u2019elle ne soit s\xe9rialis\xe9e."),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lockfile")," - Le fichier de r\xe9solution lockfile s\xe9rialis\xe9 dans ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context")," - Objet de contexte pour l'\xe9tape. La m\xe9thode ",(0,l.kt)("inlineCode",{parentName:"li"},"#log(msg)")," permet d'utiliser un journal de d\xe9bogage pour l'\xe9tape.")),(0,l.kt)("h4",{id:"exemple-dutilisation"},"Exemple d'utilisation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,l.kt)("h4",{id:"limitations-connues-1"},"Limitations connues"),(0,l.kt)("p",null,"Il n'y en a pas - tout ce qui peut \xeatre fait avec le fichier de verrouillage peut \xeatre via cette fonction, et vous pouvez m\xeame \xe9tendre les fonctionnalit\xe9s du fichier de verrouillage."),(0,l.kt)("h2",{id:"configuration-associ\xe9e"},"Configuration associ\xe9e"),(0,l.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Par d\xe9faut: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Bool\xe9en"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," sera ignor\xe9. Utile avec ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-scripts")," lorsque vous voulez vous assurer qu'aucun script n'est ex\xe9cut\xe9 pendant l'installation."),(0,l.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Par d\xe9faut : ",(0,l.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"chemin")),(0,l.kt)("li",{parentName:"ul"},"Exemple\xa0: ",(0,l.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,l.kt)("p",null,"L'emplacement du pnpmfile local."),(0,l.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Par d\xe9faut : ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"chemin")),(0,l.kt)("li",{parentName:"ul"},"Exemple\xa0: ",(0,l.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,l.kt)("p",null,"L'emplacement du pnpmfile global. Un fichier pnpm global est utilis\xe9 par tous les projets lors de l'installation."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Il est recommand\xe9 d'utiliser les fichiers pnpmfiles locaux. N'utilisez un pnpmfile global que si vous utilisez pnpm sur des projets qui n'utilisent pas pnpm comme gestionnaire de packages principal."))))}u.isMDXComponent=!0}}]);