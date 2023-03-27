"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3785],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=r(2962),o=r(2742),a=(r(9496),r(9613)),p=["components"],s={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},i=void 0,c={unversionedId:"pnpm-workspace_yaml",id:"version-8.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"O arquivo pnpm-workspace.yaml define a raiz do workspace  e possibilita que voc\xea inclua / exclua diret\xf3rios do workspace. Por padr\xe3o, todos os pacotes de todos os subdiret\xf3rios est\xe3o inclu\xeddos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-8.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/pt/pnpm-workspace_yaml",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"8.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-8.x/docs",previous:{title:".npmrc",permalink:"/pt/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/pt/pnpmfile"}},l={},m=[],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"O arquivo ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," define a raiz do workspace ","[][]"," e possibilita que voc\xea inclua / exclua diret\xf3rios do workspace. Por padr\xe3o, todos os pacotes de todos os subdiret\xf3rios est\xe3o inclu\xeddos."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # todos os pacotes em subdiret\xf3rios diretos de packages/\n  - 'packages/*'\n  # todos os pacotes em subdiret\xf3rios de components/\n  - 'components/**'\n  # exclui pacotes que est\xe3o dentro dos diret\xf3rios de teste\n  - '!* */teste/**'\n")),(0,a.kt)("p",null,"O pacote raiz \xe9 sempre inclu\xeddo, mesmo quando os curingas de localiza\xe7\xe3o customizado s\xe3o usados."))}d.isMDXComponent=!0}}]);