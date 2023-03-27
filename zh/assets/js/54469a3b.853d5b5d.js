"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5143],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),h=a,g=m["".concat(o,".").concat(h)]||m[h]||u[h]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=t(2962),a=t(2742),i=(t(9496),t(9613)),s=["components"],p={id:"using-changesets",title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets"},o=void 0,l={unversionedId:"using-changesets",id:"version-8.x/using-changesets",title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets",description:"\u5728\u7f16\u5199\u672c\u6587\u6863\u65f6\uff0c\u6700\u65b0\u7684 pnpm \u7248\u672c\u4e3a v6.14\u3002 \u6700\u65b0\u7684 Changesets \u7248\u672c\u662f v2.16.0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-8.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/zh/using-changesets",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-CN",tags:[],version:"8.x",frontMatter:{id:"using-changesets",title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets"},sidebar:"version-8.x/docs",previous:{title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168",permalink:"/zh/completion"},next:{title:"\u6301\u7eed\u96c6\u6210",permalink:"/zh/continuous-integration"}},c={},u=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u6dfb\u52a0\u65b0\u7684 changesets",id:"\u6dfb\u52a0\u65b0\u7684-changesets",level:2},{value:"\u53d1\u5e03\u53d8\u66f4",id:"\u53d1\u5e03\u53d8\u66f4",level:2},{value:"\u4f7f\u7528 GitHub Actions",id:"\u4f7f\u7528-github-actions",level:2},{value:"\u53d8\u66f4\u7248\u672c\u53f7",id:"\u53d8\u66f4\u7248\u672c\u53f7",level:3},{value:"\u53d1\u5e03",id:"\u53d1\u5e03",level:3}],m={toc:u};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5728\u7f16\u5199\u672c\u6587\u6863\u65f6\uff0c\u6700\u65b0\u7684 pnpm \u7248\u672c\u4e3a v6.14\u3002 \u6700\u65b0\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," \u7248\u672c\u662f v2.16.0\u3002")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u8981\u5728 pnpm \u5de5\u4f5c\u7a7a\u95f4\u4e0a\u914d\u7f6e changesets\uff0c\u8bf7\u5c06 changesets \u4f5c\u4e3a\u5f00\u53d1\u4f9d\u8d56\u9879\u5b89\u88c5\u5728\u5de5\u4f5c\u7a7a\u95f4\u7684\u6839\u76ee\u5f55\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,i.kt)("p",null,"\u7136\u540e changesets \u7684\u521d\u59cb\u5316\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u65b0\u7684-changesets"},"\u6dfb\u52a0\u65b0\u7684 changesets"),(0,i.kt)("p",null,"\u8981\u751f\u6210\u65b0\u7684 changesets\uff0c\u8bf7\u5728\u4ed3\u5e93\u7684\u6839\u76ee\u5f55\u4e2d\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm changeset"),"\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset")," \u76ee\u5f55\u4e2d\u751f\u6210\u7684 markdown \u6587\u4ef6\u9700\u8981\u88ab\u63d0\u4ea4\u5230\u5230\u4ed3\u5e93\u3002"),(0,i.kt)("h2",{id:"\u53d1\u5e03\u53d8\u66f4"},"\u53d1\u5e03\u53d8\u66f4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset version"),"\u3002 \u8fd9\u5c06\u63d0\u9ad8\u5148\u524d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," \uff08\u4ee5\u53ca\u5b83\u4eec\u7684\u4efb\u4f55\u4f9d\u8d56\u9879\uff09\u7684\u7248\u672c\uff0c\u5e76\u66f4\u65b0\u53d8\u66f4\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install"),"\u3002 \u8fd9\u5c06\u66f4\u65b0\u9501\u6587\u4ef6\u5e76\u91cd\u65b0\u6784\u5efa\u5305\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u66f4\u6539\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),"\u3002 \u6b64\u547d\u4ee4\u5c06\u53d1\u5e03\u6240\u6709\u5305\u542b\u88ab\u66f4\u65b0\u7248\u672c\u4e14\u5c1a\u672a\u51fa\u73b0\u5728\u5305\u6ce8\u518c\u6e90\u4e2d\u7684\u5305\u3002")),(0,i.kt)("h2",{id:"\u4f7f\u7528-github-actions"},"\u4f7f\u7528 GitHub Actions"),(0,i.kt)("p",null,"\u8981\u81ea\u52a8\u6267\u884c\u6b64\u8fc7\u7a0b\uff0c\u60a8\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version")," \u4e0e GitHub actions \u4e00\u8d77\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"\u53d8\u66f4\u7248\u672c\u53f7"},"\u53d8\u66f4\u7248\u672c\u53f7"),(0,i.kt)("p",null,"\u5f53\u68c0\u6d4b\u5230 changeset \u6587\u4ef6\u88ab\u5408\u5e76\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u65f6\uff0c\u8be5 action \u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 PR\uff0c\u5217\u51fa\u6240\u6709\u5e94\u8be5\u53d8\u66f4\u7248\u672c\u53f7\u7684\u5305\u3002 \u5408\u5e76\u540e\uff0c\u5305\u5c06\u88ab\u66f4\u65b0\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," \u5c5e\u6027\u6765\u51b3\u5b9a\u662f\u5426\u53d1\u5e03\u3002"),(0,i.kt)("h3",{id:"\u53d1\u5e03"},"\u53d1\u5e03"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u65b0\u811a\u672c ",(0,i.kt)("inlineCode",{parentName:"p"},"ci:publish")," \u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish -r"),"\u3002 It will publish to the registry once the PR is opened by ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n      "ci:publish": "pnpm publish -r"\n   },\n...\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,i.kt)("p",null,"\u6709\u5173\u6b64\u64cd\u4f5c\u7684\u66f4\u591a\u4fe1\u606f\u548c\u6587\u6863\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"\u6b64\u5904"),"\u627e\u5230\u3002"))}h.isMDXComponent=!0}}]);