"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6053],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(h,p(p({ref:n},c),{},{components:t})):r.createElement(h,p({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(2962),a=t(2742),i=(t(9496),t(9613)),p=["components"],s={id:"using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b"},o=void 0,l={unversionedId:"using-changesets",id:"version-8.x/using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b",description:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u70b9\u3067\u306e\u3001\u6700\u65b0\u306e pnpm \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v6.14 \u3067\u3059\u3002 \u6700\u65b0\u306e Changesets \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v2.16.0 \u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-8.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/ja/using-changesets",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"8.x",frontMatter:{id:"using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b"},sidebar:"version-8.x/docs",previous:{title:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 Tab \u88dc\u5b8c",permalink:"/ja/completion"},next:{title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/continuous-integration"}},c={},u=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0",id:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0",level:2},{value:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9",id:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9",level:2},{value:"GitHub Actions\u306e\u4f7f\u7528",id:"github-actions\u306e\u4f7f\u7528",level:2},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u66f4\u65b0",id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u66f4\u65b0",level:3},{value:"\u516c\u958b",id:"\u516c\u958b",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u70b9\u3067\u306e\u3001\u6700\u65b0\u306e pnpm \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v6.14 \u3067\u3059\u3002 \u6700\u65b0\u306e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v2.16.0 \u3067\u3059\u3002")),(0,i.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,i.kt)("p",null,"changesets \u3092 pnpm \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u306b\u306f\u3001changesets \u3092 devDependency \u3068\u3057\u3066\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30eb\u30fc\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,i.kt)("p",null,"changesets \u306e\u521d\u671f\u5316\u30b3\u30de\u30f3\u30c9:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,i.kt)("h2",{id:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0"},"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0"),(0,i.kt)("p",null,"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u306b\u306f\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm changeset")," \u3092\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30eb\u30fc\u30c8\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u751f\u6210\u3055\u308c\u305f\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u30d5\u30a1\u30a4\u30eb\u306f\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9"},"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset version")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u5148\u307b\u3069 ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," \u306b\u3088\u3063\u3066\u6307\u5b9a\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8 (\u3068\u305d\u308c\u3089\u306e\u3059\u3079\u3066\u306e\u4f9d\u5b58) \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u66f4\u65b0\u3092\u9069\u7528\u3057\u3001\u30c1\u30a7\u30f3\u30b8\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308a\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u3068\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d3\u30eb\u30c9\u3092\u884c\u3044\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5909\u66f4\u3092\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm publish -r")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u307e\u3060\u5b58\u5728\u3057\u306a\u3044 BUMP \u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6301\u3064\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3059\u3002")),(0,i.kt)("h2",{id:"github-actions\u306e\u4f7f\u7528"},"GitHub Actions\u306e\u4f7f\u7528"),(0,i.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u81ea\u52d5\u5316\u3059\u308b\u305f\u3081\u306b\u3001GitHub \u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3067 ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version")," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u66f4\u65b0"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u66f4\u65b0"),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u304c ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," \u30d6\u30e9\u30f3\u30c1\u306b\u5230\u9054\u3057\u305f\u3053\u3068\u3092\u691c\u77e5\u3057\u3001BUMP \u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6301\u3064\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4e00\u89a7\u3092\u8868\u793a\u3059\u308b\u65b0\u3057\u3044PR\u3092\u958b\u304d\u307e\u3059\u3002 \u30de\u30fc\u30b8\u3055\u308c\u308b\u3068\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u66f4\u65b0\u3055\u308c\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u516c\u958b\u3059\u308b\u304b\u3069\u3046\u304b\u6c7a\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u516c\u958b"},"\u516c\u958b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish -r")," \u3092\u5b9f\u884c\u3059\u308b\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8 ",(0,i.kt)("inlineCode",{parentName:"p"},"ci:publish")," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 PR \u304c ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version")," \u306b\u3088\u3063\u3066\u30aa\u30fc\u30d7\u30f3\u3055\u308c\u308b\u3068\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u516c\u958b\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n      "ci:publish": "pnpm publish -r"\n   },\n   ...\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,i.kt)("p",null,"\u3053\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306a\u60c5\u5831\u3068\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"\u3053\u3061\u3089")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);