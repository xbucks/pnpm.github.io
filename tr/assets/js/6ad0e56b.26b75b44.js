"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9603],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),g=l,m=s["".concat(c,".").concat(g)]||s[g]||f[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>f});var r=n(2962),l=n(2742),o=(n(9496),n(9613)),i=["components"],a={id:"config",title:"pnpm config"},c=void 0,p={unversionedId:"cli/config",id:"version-7.x/cli/config",title:"pnpm config",description:"Ayr\u0131ca: c",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/tr/7.x/cli/config",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"config",title:"pnpm config"},sidebar:"version-7.x/docs",previous:{title:"pnpm doctor",permalink:"/tr/7.x/cli/doctor"},next:{title:"package.json",permalink:"/tr/7.x/package_json"}},u={},f=[{value:"Komutlar",id:"komutlar",level:2},{value:"set &lt;key&gt; &lt;value&gt;",id:"set-key-value",level:3},{value:"get &lt;key&gt;",id:"get-key",level:3},{value:"delete &lt;key&gt;",id:"delete-key",level:3},{value:"list",id:"list",level:3},{value:"Parametreler",id:"parametreler",level:2},{value:"--global, -g",id:"--global--g",level:3}],s={toc:f};function g(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ayr\u0131ca: ",(0,o.kt)("inlineCode",{parentName:"p"},"c")),(0,o.kt)("p",null,"Manage the configuration files."),(0,o.kt)("p",null,"The configuration files are in ",(0,o.kt)("inlineCode",{parentName:"p"},"INI")," format."),(0,o.kt)("p",null,"The local configuration file is located in the root of the project and is named ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,o.kt)("p",null,"The global configuration file is located at one of the following locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME")," env variable is set, then ",(0,o.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,o.kt)("li",{parentName:"ul"},"On Windows: ",(0,o.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,o.kt)("li",{parentName:"ul"},"On macOS: ",(0,o.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,o.kt)("li",{parentName:"ul"},"On Linux: ",(0,o.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,o.kt)("h2",{id:"komutlar"},"Komutlar"),(0,o.kt)("h3",{id:"set-key-value"},"set ","<","key> ","<","value>"),(0,o.kt)("p",null,"Set the config key to the value provided."),(0,o.kt)("h3",{id:"get-key"},"get ","<","key>"),(0,o.kt)("p",null,"Print the config value for the provided key."),(0,o.kt)("h3",{id:"delete-key"},"delete ","<","key>"),(0,o.kt)("p",null,"Remove the config key from the config file."),(0,o.kt)("h3",{id:"list"},"list"),(0,o.kt)("p",null,"Show all the config settings."),(0,o.kt)("h2",{id:"parametreler"},"Parametreler"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"See the configuration in the global config file."))}g.isMDXComponent=!0}}]);