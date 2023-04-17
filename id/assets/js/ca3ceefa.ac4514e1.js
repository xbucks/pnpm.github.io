"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6620],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=n(2962),l=n(2742),i=(n(9496),n(9613)),r=["components"],p={id:"filtering",title:"Filtering"},o=void 0,s={unversionedId:"filtering",id:"version-8.x/filtering",title:"Filtering",description:"Filtering memungkinkan anda membatasi perintah ke subset paket tertentu.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-8.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/id/filtering",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"8.x",frontMatter:{id:"filtering",title:"Filtering"},sidebar:"version-8.x/docs",previous:{title:"Mengonfigurasi",permalink:"/id/configuring"},next:{title:"Scripts",permalink:"/id/scripts"}},d={},m=[{value:"Sesuai dengan",id:"sesuai-dengan",level:2},{value:"--filter &lt;nama_paket&gt;",id:"--filter-nama_paket",level:3},{value:"--filter &lt;nama_paket&gt;...",id:"--filter-nama_paket-1",level:3},{value:"--filter &lt;nama_paket&gt;^...",id:"--filter-nama_paket-2",level:3},{value:"--filter ...&lt;nama_paket&gt;",id:"--filter-nama_paket-3",level:3},{value:"--filter &quot;...^&lt;nama_paket&gt;&quot;",id:"--filter-nama_paket-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Diluar dari",id:"diluar-dari",level:2},{value:"Pilih banyak",id:"pilih-banyak",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filtering memungkinkan anda membatasi perintah ke subset paket tertentu."),(0,i.kt)("p",null,"pnpm mendukung banyak sintaks selektor untuk memilih paket berdasarkan nama atau relasi."),(0,i.kt)("p",null,"Selektor dapat dispesifikasikan dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," (atau dengan flag ",(0,i.kt)("inlineCode",{parentName:"p"}," -F"),") :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,i.kt)("h2",{id:"sesuai-dengan"},"Sesuai dengan"),(0,i.kt)("h3",{id:"--filter-nama_paket"},"--filter ","<","nama_paket>"),(0,i.kt)("p",null,"Untuk memilih paket yang tepat identik, cukup tentukan namanya (",(0,i.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") atau gunakan pola untuk memilih satu set paket (",(0,i.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,i.kt)("p",null,"Contohnya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,i.kt)("p",null,"Menentukan cakupan paket adalah opsional, jadi ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter=core")," akan memilih ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," jika ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," tidak ditemukan. Namun, jika ruang kerja (folder workspace) memiliki beberapa paket dengan nama yang sama (misalnya, ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/core")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/core"),"), maka pemfilteran tanpa cakupan tidak akan menghasilkan apa-apa."),(0,i.kt)("h3",{id:"--filter-nama_paket-1"},"--filter ","<","nama_paket>..."),(0,i.kt)("p",null,"Untuk memilih paket dan dependensinya (langsung dan tidak langsung), akhiri nama paket dengan elipsis: ",(0,i.kt)("inlineCode",{parentName:"p"},"<name_paket>..."),". Sebagai contoh, perintah berikutnya akan menjalankan pengujian dari ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," dan semua dependensinya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,i.kt)("p",null,"Anda dapat menggunakan pola untuk memilih satu set paket root:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,i.kt)("h3",{id:"--filter-nama_paket-2"},"--filter ","<","nama_paket>^..."),(0,i.kt)("p",null,"Untuk HANYA memilih dependensi suatu paket (baik langsung maupun tidak langsung), akhiri nama dengan elipsis yang disebutkan di atas didahului dengan chevron. Sebagai contoh, perintah berikutnya akan menjalankan pengujian dari ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," dan semua dependensinya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,i.kt)("h3",{id:"--filter-nama_paket-3"},"--filter ...","<","nama_paket>"),(0,i.kt)("p",null,"Untuk memilih paket dan dependensinya (langsung dan tidak langsung), akhiri nama paket dengan elipsis: ",(0,i.kt)("inlineCode",{parentName:"p"},"<nama_paket>..."),". Sebagai contoh, kode ini akan menjalankan tes dari ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," dan semua paket yang bergantung padanya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,i.kt)("h3",{id:"--filter-nama_paket-4"},'--filter "...^',"<",'nama_paket>"'),(0,i.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,i.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,i.kt)("p",null,"A glob pattern relative to the current working directory matching projects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,i.kt)("p",null,"Includes all projects that are under the specified directory."),(0,i.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,i.kt)("p",null,"It may also be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,i.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,i.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,i.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,i.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,i.kt)("h2",{id:"diluar-dari"},"Diluar dari"),(0,i.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,i.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,i.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,i.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,i.kt)("h2",{id:"pilih-banyak"},"Pilih banyak"),(0,i.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,i.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,i.kt)("p",null,"Acts the same a ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,i.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,i.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,i.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,i.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}k.isMDXComponent=!0}}]);