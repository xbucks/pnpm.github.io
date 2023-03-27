"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8612],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||p;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(2962),i=n(2742),p=(n(9496),n(9613)),a=["components"],o={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"version-7.x/cli/patch",title:"pnpm patch <pkg>",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/ja/7.x/cli/patch",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-7.x/docs",previous:{title:"pnpm install-test",permalink:"/ja/7.x/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/ja/7.x/cli/patch-commit"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0"),(0,p.kt)("p",null,"\u30d1\u30c3\u30c1\u3092\u9069\u7528\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6e96\u5099\u3057\u307e\u3059(Yarn\u306e\u540c\u69d8\u306e\u30b3\u30de\u30f3\u30c9\u306b\u89e6\u767a\u3055\u308c\u307e\u3057\u305f)\u3002"),(0,p.kt)("p",null,"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u4e00\u6642\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5c55\u958b\u3055\u308c\u3001\u305d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u3067\u306e\u7de8\u96c6\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u5909\u66f4\u304c\u7d42\u308f\u3063\u305f\u3089\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (",(0,p.kt)("inlineCode",{parentName:"p"},"<path>")," \u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5c55\u958b\u3055\u308c\u305f\u4e00\u6642\u30c7\u30a3\u30ec\u30af\u30c8\u30ea) \u3092\u5b9f\u884c\u3057\u3066\u30d1\u30c3\u30c1\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u3001",(0,p.kt)("a",{parentName:"p",href:"/ja/7.x/package_json#pnpmpatcheddependencies"},(0,p.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4ecb\u3057\u3066\u30c8\u30c3\u30d7\u30ec\u30d9\u30eb\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306b\u305d\u308c\u3092\u767b\u9332\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u4f7f\u3044\u65b9"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,p.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"pnpm patch \u30b3\u30de\u30f3\u30c9\u306e\u30c7\u30e2",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av7.11.0"),(0,p.kt)("p",null,"\u30d1\u30c3\u30c1\u306e\u9069\u7528\u304c\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3001\u3053\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u5c55\u958b\u3055\u308c\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av7.25.0"),(0,p.kt)("p",null,"\u30d1\u30c3\u30c1\u9069\u7528\u6642\u306b\u65e2\u5b58\u306e\u30d1\u30c3\u30c1 \u30d5\u30a1\u30a4\u30eb\u3092\u7121\u8996\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);