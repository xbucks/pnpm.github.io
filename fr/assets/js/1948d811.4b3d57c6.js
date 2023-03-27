"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7266],{9613:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9009:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var t=r(2962),a=r(2742),o=(r(9496),r(9613)),i=["components"],p={id:"errors",title:"Codes d'erreur"},l=void 0,s={unversionedId:"errors",id:"version-8.x/errors",title:"Codes d'erreur",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-8.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/fr/errors",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"8.x",frontMatter:{id:"errors",title:"Codes d'erreur"},sidebar:"version-8.x/docs",previous:{title:"Travailler avec Git",permalink:"/fr/git"},next:{title:"Logos",permalink:"/fr/logos"}},u={},c=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2},{value:"ERR_PNPM_TARBALL_INTEGRITY",id:"err_pnpm_tarball_integrity",level:2}],d={toc:c};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"Un r\xe9pertoire de modules est pr\xe9sent et est li\xe9 \xe0 un autre r\xe9pertoire de magasins."),(0,o.kt)("p",null,"Si vous avez modifi\xe9 intentionnellement le r\xe9pertoire de la boutique, ex\xe9cutez ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," et pnpm r\xe9installera les d\xe9pendances en utilisant le nouveau magasin."),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"Un projet a une d\xe9pendance d'espace de travail qui n'existe pas dans l'espace de travail."),(0,o.kt)("p",null,"Par exemple, le paquet ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," dans les ",(0,o.kt)("inlineCode",{parentName:"p"},"d\xe9pendances"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"Cependant, il n'y a que ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," dans l'espace de travail, donc ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \xe9chouera."),(0,o.kt)("p",null,"Pour corriger cette erreur, toutes les d\xe9pendances qui utilisent le ",(0,o.kt)("a",{parentName:"p",href:"/fr/workspaces#workspace-protocol-workspace"},"protocole d'espace de travail")," doivent \xeatre mises \xe0 jour pour utiliser les versions des paquets pr\xe9sents dans l'espace de travail. Cela peut \xeatre fait soit manuellement, soit en utilisant la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \xe9chouera si le projet a des d\xe9pendances de pairs non r\xe9solues ou si les d\xe9pendances de pairs ne correspondent pas aux plages souhait\xe9es. Pour r\xe9soudre ce probl\xe8me, installez les d\xe9pendances homologues manquantes."),(0,o.kt)("p",null,"Vous pouvez \xe9galement ignorer ces erreurs de mani\xe8re s\xe9lective en utilisant les champs ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," et ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," dans ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"Cette erreur se produit lorsqu'une installation ne peut \xeatre effectu\xe9e sans modification du lockfile. Elle peut arriver dans un environnement CI si quelqu'un a modifi\xe9 le contenu de ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," sans ex\xe9cuter ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," par la suite. Elle peut aussi se produire si quelqu'un a oubli\xe9 de commit les modifications apport\xe9es au lockfile."),(0,o.kt)("p",null,"Pour corriger cette erreur, ex\xe9cutez ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," et fa\xeetes un commit des modifications apport\xe9es au lockfile."),(0,o.kt)("h2",{id:"err_pnpm_tarball_integrity"},"ERR","_","PNPM","_","TARBALL","_","INTEGRITY"),(0,o.kt)("p",null,"This error indicates that the downloaded package's tarball did not match the expected integrity checksum."),(0,o.kt)("p",null,"If you use the npm registry (",(0,o.kt)("inlineCode",{parentName:"p"},"registry.npmjs.org"),"), then this probably means that the integrity in your lockfile is incorrect. This might happen if a lockfile had badly resolved merge conflicts."),(0,o.kt)("p",null,"If you use a registry that allows to override existing versions of a package, then it might mean that in your local metadata cache you have the integrity checksum of an older version of the package. In this case, you should run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune"),". This command will remove your local metadata cache. Then you can retry the command that failed."),(0,o.kt)("p",null,"But also be careful and verify that the package is downloaded from the right URL. The URL should be printed in the error message."))}m.isMDXComponent=!0}}]);