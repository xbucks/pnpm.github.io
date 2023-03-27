"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3592],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(2962),a=n(2742),o=(n(9496),n(9613)),i=["components"],p={id:"store",title:"pnpm store"},s=void 0,l={unversionedId:"cli/store",id:"version-7.x/cli/store",title:"pnpm store",description:"Gesti\xf3n del almac\xe9n de paquetes.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/es/7.x/cli/store",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-7.x/docs",previous:{title:"pnpm server",permalink:"/es/7.x/cli/server"},next:{title:"pnpm root",permalink:"/es/7.x/cli/root"}},u={},c=[{value:"Commands",id:"commands",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gesti\xf3n del almac\xe9n de paquetes."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"Busca por paquetes modificados en el almacen de paquetes."),(0,o.kt)("p",null,"Devuelve el c\xf3digo de salida 0 si el contenido del paquete es el mismo que en el momento de desempaquetar."),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"Funcionalmente equivalente a ",(0,o.kt)("a",{parentName:"p",href:"/es/7.x/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm a\xf1adir")),", excepto esto a\xf1ade nuevos paquetes a la tienda directamente sin modificar ning\xfan proyecto o archivos fuera de la tienda."),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"Remueve ",(0,o.kt)("em",{parentName:"p"},"paquetes no referenciados")," del almac\xe9n de paquetes."),(0,o.kt)("p",null,"Los paquetes no referenciados son paquetes que no son utilizados por ning\xfan proyecto en el sistema. Los paquetes pueden dejar de ser referenciados despu\xe9s de la mayor\xeda de las operaciones de instalaci\xf3n, por ejemplo cuando las dependencias son redundantes."),(0,o.kt)("p",null,"Por ejemplo, durante ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),", el paquete ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," es actualizado a ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm mantendr\xe1 el paquete ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," en el almac\xe9n de paquetes, ya que no remueve paquetes autom\xe1ticamente. Si el paquete ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," no es utilizado por ning\xfan otro proyecto en el sistema, deja de ser referenciado. Ejecutar ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," remover\xeda el paquete ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," del almac\xe9n de paquetes."),(0,o.kt)("p",null,"Ejecutar ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," no representa un riesgo y no tiene efectos secundarios en tus proyectos. En el caso de que futuras instalaci\xf3nes requieran paquetes removidos, pnpm los descargar\xe1 de nuevo."),(0,o.kt)("p",null,"It is best practice to run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,o.kt)("p",null,"Please note that this command is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/es/7.x/cli/server"},"store server")," is running."),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"Returns the path to the active store directory."))}m.isMDXComponent=!0}}]);