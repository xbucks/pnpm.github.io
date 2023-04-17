"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7652],{1532:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2022/12/30/yearly-update","metadata":{"permalink":"/zh-TW/blog/2022/12/30/yearly-update","editUrl":"https://translate.pnpm.io/project/pnpm/zh-TW","source":"@site/i18n/zh-TW/docusaurus-plugin-content-blog/2022-12-30-yearly-update.md","title":"The year 2022 for pnpm","description":"It is the end of the year. A really hard year. As you may know, I live in Ukraine, so due to Russia\'s war against us, it was harder to lead this project than in previous years. Nevertheless, it was a good year for pnpm. We\'ve got a lot of new users, contributors, and we have implemented many great features.","date":"2022-12-30T00:00:00.000Z","formattedDate":"2022\u5e7412\u670830\u65e5","tags":[],"readingTime":2.505,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"The year 2022 for pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48","image":"/img/blog/2022-review.png"},"nextItem":{"title":"2021 \u5e74\u7684 pnpm","permalink":"/zh-TW/blog/2021/12/29/yearly-update"}},"content":"It is the end of the year. A really hard year. As you may know, I live in Ukraine, so due to Russia\'s war against us, it was harder to lead this project than in previous years. Nevertheless, it was a good year for pnpm. We\'ve got a lot of new users, contributors, and we have implemented many great features.\\n\\n![](/img/blog/2022-review.png)\\n\\n(the above illustration was generated by Midjourney. The tiger symolizes the year of the tiger)\\n\\n\x3c!--truncate--\x3e\\n\\n## \u4f7f\u7528\u65b9\u6cd5\\n\\n### \u4e0b\u8f09\u7d71\u8a08\\n\\n\u6211\u4eca\u5e74\u7684\u76ee\u6a19\u662f\u5728\u4e0b\u8f09\u91cf\u4e0a\u64ca\u6557Lerna\u3002 We were able to achieve this goal [in August](https://npm-stat.com/charts.html?package=pnpm&package=lerna&from=2022-01-01&to=2022-12-30):\\n\\n![](/img/blog/pnpm-vs-lerna-stats.png)\\n\\npnpm was downloaded more than [5 times more](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2022-12-30) in 2022 than in 2021:\\n\\n![](/img/blog/download-stats-2022.png)\\n\\n### \u8a2a\u554fDocs\u7d71\u8a08\\n\\n\u6211\u5011\u5f9e Google \u5206\u6790\u6536\u96c6\u4e86\u4e00\u4e9b\u8a2a\u554f docs \u7684\u5ba2\u89c0\u7684\u6578\u64da\u3002 In 2022, sometimes we had more than 20,000 unique visitors a week. This is 10 times more than in 2021!\\n\\n![](/img/blog/ga-unique-visits-2022.png)\\n\\n### GitHub\u4e0a\u7684\u661f\u661f\u7d71\u8a08\\n\\nOur [main GitHub repository](https://github.com/pnpm/pnpm) received almost +7,000 stars this year.\\n\\n![](/img/blog/stars-2022.png)\\n\\n### Our contributors\\n\\nWe had a lot of new and active contributors this year. These are the people the merge at least one PR in 2022:\\n\\n* [Zoltan Kochan](https://github.com/zkochan)\\n* [chlorine](https://github.com/lvqq)\\n* [await-ovo](https://github.com/await-ovo)\\n* [Brandon Cheng](https://github.com/gluxon)\\n* [Dominic Elm](https://github.com/d3lm)\\n* [MCMXC](https://github.com/mcmxcdev)\\n* [\u90a3\u91cc\u597d\u810f\u4e0d\u53ef\u4ee5](https://github.com/dev-itsheng)\\n* [Homyee King](https://github.com/HomyeeKing)\\n* [Shinobu Hayashi](https://github.com/Shinyaigeek)\\n* [Black-Hole](https://github.com/BlackHole1)\\n* [Kenrick](https://github.com/kenrick95)\\n* [Weyert de Boer](https://github.com/weyert)\\n* [Glen Whitney](https://github.com/gwhitney)\\n* [Cheng](https://github.com/chengcyber)\\n* [zoomdong](https://github.com/fireairforce)\\n* [thinkhalo](https://github.com/ufec)\\n* [\u5b50\u77bb Luci](https://github.com/LuciNyan)\\n* [spencer17x](https://github.com/Spencer17x)\\n* [liuxingbaoyu](https://github.com/liuxingbaoyu)\\n* [\uc7a5\uc9c0\ud6c8](https://github.com/WhiteKiwi)\\n* [Jon de la Motte](https://github.com/jondlm)\\n* [Jack Works](https://github.com/Jack-Works)\\n* [milahu](https://github.com/milahu)\\n* [David Collins](https://github.com/David-Collins)\\n* [nikoladev](https://github.com/nikoladev)\\n* [Igor Bezkrovnyi](https://github.com/ibezkrovnyi)\\n* [Lev Chelyadinov](https://github.com/illright)\\n* [javier-garcia-meteologica](https://github.com/javier-garcia-meteologica)\\n\\n## \u7279\u8272\u529f\u80fd\\n\\n### Supporting a symlinkless hoisted `node_modules` (since [v6.25.0](https://github.com/pnpm/pnpm/releases/tag/v6.25.0))\\n\\nRight at the beginning of 2022, we have added support for the \\"traditional\\" hoisted (a.k.a flat `node_modules`). We use Yarn\'s hoisting algorithm to create a proper hoisted `node_modules`. This new setting has basically made pnpm compatible with all Node.js stack that are compatible with npm CLI.\\n\\nTo use the hoisted `node_modules` directory structure, use the `node-linker=hoisted` setting in an `.npmrc` file.\\n\\n### Side effects cache (since [v7.0.0](https://github.com/pnpm/pnpm/releases/tag/v7.0.0))\\n\\nSince v7, [side-effect-cache][] is enabled by default, so dependencies that should be built are only built once on a machine. This improves installation speed by a lot in projects that have dependencies with build scripts.\\n\\n### Dependencies patching (since [v7.4.0](https://github.com/pnpm/pnpm/releases/tag/v7.4.0))\\n\\nThe [`pnpm patch`][] command have been added for patching dependencies in your `node_modules`.\\n\\n### Time-based resolution strategy (since [v7.10.0](https://github.com/pnpm/pnpm/releases/tag/v7.10.0))\\n\\nA new resolution mode was added to pnpm, which should make updating dependencies more secure. You can change the resolution mode with the [resolution-mode][] setting.\\n\\n### Listing licenses of dependencies (since [v7.17.0](https://github.com/pnpm/pnpm/releases/tag/v7.17.0))\\n\\nYou may now use the [`pnpm licenses list`][] command to check the licenses of the installed packages.\\n\\n[side-effect-cache]: /npmrc#side-effects-cache\\n\\n[`pnpm patch`]: /cli/patch\\n\\n[resolution-mode]: https://pnpm.io/npmrc#resolution-mode\\n\\n[`pnpm licenses list`]: /cli/licenses"},{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/zh-TW/blog/2021/12/29/yearly-update","editUrl":"https://translate.pnpm.io/project/pnpm/zh-TW","source":"@site/i18n/zh-TW/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"2021 \u5e74\u7684 pnpm","description":"\u5c0dpnpm\u4f86\u8aaa\u597d\u7684\u4e00\u5e74\u5df2\u7d93\u5230\u4e86\u5c3e\u8072\uff0c\u8b93\u6211\u4f86\u770b\u4e00\u4e0b\u6211\u5011\u7684\u9032\u5c55\u3002","date":"2021-12-29T00:00:00.000Z","formattedDate":"2021\u5e7412\u670829\u65e5","tags":[],"readingTime":4.025,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"2021 \u5e74\u7684 pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"The year 2022 for pnpm","permalink":"/zh-TW/blog/2022/12/30/yearly-update"},"nextItem":{"title":"Pnpm \u7684 Node-Modules \u8a2d\u5b9a\u9078\u9805","permalink":"/zh-TW/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"\u5c0dpnpm\u4f86\u8aaa\u597d\u7684\u4e00\u5e74\u5df2\u7d93\u5230\u4e86\u5c3e\u8072\uff0c\u8b93\u6211\u4f86\u770b\u4e00\u4e0b\u6211\u5011\u7684\u9032\u5c55\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u4f7f\u7528\u7d71\u8a08\\n\\n### \u4e0b\u8f09\u7d71\u8a08\\n\\n\u4eca\u5e74\u6211\u7684\u76ee\u6a19\u662f\u5728\u4e0b\u8f09\u7d71\u8a08\u6578\u64da\u4e0a\u6253\u6557 Bower\u3002 \u6211\u5011[\u5728\u5341\u4e00\u6708\u6642](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29)\u5df2\u7d93\u5b8c\u6210\u4e86\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\n\u5728 2021 \u5e74\u6642\uff0cpnpm\u4e0b\u8f09\u91cf\u5927\u7d04\u6bd4 2020 \u6642[\u591a 3 \u6b21\u4ee5\u4e0a](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29)\uff1a\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\n\u9019\u4e9b\u6578\u64da\u6c92\u6709\u6e2c\u91cf\u5230 pnpm \u6240\u6709\u4e0d\u540c\u7684\u5b89\u88dd\u65b9\u5f0f\uff01 \u90a3\u4e9b\u6578\u64da\u662f\u53ea\u6709\u6e2c\u91cf\u900f\u904e [pnpm npm package](https://www.npmjs.com/package/pnpm) \u4e0b\u8f09\u7684\u6578\u64da\u3002 \u5728\u4eca\u5e74\uff0c\u6211\u5011\u4e5f\u6709\u65b0\u589e\u5df2\u7de8\u8b6f\u6210\u4e8c\u9032\u4f4d\u7248\u7684 pnpm\uff0c\u5176\u767c\u9001\u65b9\u5f0f\u8207\u5176\u4ed6\u7248\u672c\u4e0d\u540c\\n\\n:::\\n\\n### \u8a2a\u554fDocs\u7d71\u8a08\\n\\n\u6211\u5011\u5f9e Google \u5206\u6790\u6536\u96c6\u4e86\u4e00\u4e9b\u8a2a\u554f docs \u7684\u5ba2\u89c0\u7684\u6578\u64da\u3002 \u5728 2021 \u5e74\uff0c\u6211\u5011\u6709\u6642\u6bcf\u9031\u6703\u6709\u591a\u65bc2000\u500b\u7368\u4e00\u7121\u4e8c\u7684\u95b1\u8b80\u8005\u3002\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\n\u5927\u591a\u6578\u7684\u4f7f\u7528\u8005\u7686\u4f86\u81ea\u7f8e\u570b\u548c\u4e2d\u570b\\n\\n![](/img/blog/countries-2021.png)\\n\\n### GitHub\u4e0a\u7684\u661f\u661f\u7d71\u8a08\\n\\n\u6211\u5011\u7684[\u4e3b\u8981 GitHub \u6578\u64da\u5eab](https://github.com/pnpm/pnpm)\u4eca\u5e74\u6536\u5230 5000 \u591a\u500b\u661f\u661f\u3002\\n\\n![](/img/blog/stars-2021.png)\\n\\n### \u65b0\u4f7f\u7528\u8005\u7d71\u8a08\\n\\n\u4eca\u5e74\u6211\u5011\u6700\u5927\u7684\u65b0\u7528\u6236\u662f [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) \uff08\u6296\u97f3\u80cc\u5f8c\u7684\u516c\u53f8\uff09\\n\\n\u4e26\u4e14\uff0c\u5f88\u591a\u4e0d\u932f\u7684\u958b\u6e90\u5c08\u6848\u958b\u59cb\u4f7f\u7528 pnpm\u4e86\u3002 \u4e00\u4e9b\u5c08\u6848\u56e0\u70ba monorepos \u7684\u826f\u597d\u652f\u63f4\u6240\u4ee5\u5207\u63db\u81f3 pnpm\uff1a\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* \u9084\u6709[\u5176\u4ed6](https://pnpm.io/workspaces#usage-examples)......\\n\\n\u6216\u8005\u4e00\u4e9b\u5c08\u6848\u56e0\u70ba\u4ed6\u5011\u559c\u6b61 pnpm \u5982\u6b64\u5730\u9ad8\u6548\u3001\u5feb\u901f\u3001\u8207\u7f8e\u89c0\uff1a\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## \u7279\u8272\u529f\u80fd\\n\\n### \u65b0\u7684 lockfile \u683c\u5f0f (\u65bc [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0) \u65b0\u589e)\\n\\n\u5728\u4eca\u5e74\u7684\u91cd\u8981\u66f4\u65b0\u4e2d\uff0c\u6700\u91cd\u8981\u4e14\u7b2c\u4e00\u500b\u66f4\u65b0\u5c31\u662f\u65b0\u7684 `pnpm-lock.yaml` \u683c\u5f0f\u3002 \u9019\u662f\u4e00\u500b\u7a81\u7834\u6027\u66f4\u65b0\uff0c\u6240\u4ee5\u6211\u5011\u9700\u8981\u4ee5\u7b2c 6 \u7248\u91cb\u51fa\u3002 \u4f46\u90a3\u662f\u500b\u6210\u529f\u3002 \u820a\u7684 lockfile \u5e38\u5e38\u9020\u6210 Git \u885d\u7a81\u3002 \u81ea\u5f9e\u65b0\u7684\u683c\u5f0f\u63a8\u51fa\u5f8c\uff0c\u6211\u5011\u6c92\u6709\u518d\u63a5\u6536\u5230\u8207 Git \u885d\u7a81\u76f8\u95dc\u7684\u62b1\u6028\u3002\\n\\n### \u7ba1\u7406 Node.js \u7248\u672c (\u65bc [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0) \u65b0\u589e)\\n\\n\u6211\u5011\u63a8\u51fa\u4e86\u65b0\u547d\u4ee4 `pnpm env`\uff0c\u8a72\u547d\u4ee4\u80fd\u8b93\u60a8\u7ba1\u7406 Node.js \u7248\u672c\u3002 \u6240\u4ee5\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u4f86\u53d6\u4ee3\u50cf nvm\u3001Volta \u7b49 Node.js \u7248\u672c\u7ba1\u7406\u5668\\n\\n\u4e26\u4e14\uff0cpnpm\u53ef\u4ee5\u7368\u7acb\u4e0b\u8f09\u8207\u904b\u884c\uff0c\u6240\u4ee5\u5373\u4f7f\u60a8\u6c92\u6709\u9810\u5148\u5b89\u88dd Node.js\uff0c\u60a8\u9084\u662f\u53ef\u4ee5\u904b\u884c pnpm\u3002\\n\\n### \u6ce8\u5165\u672c\u5730\u4f9d\u8cf4\u5957\u4ef6 \uff08\u65bc [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0) \u65b0\u589e\uff09\\n\\n\u60a8\u53ef\u4ee5\u300c\u6ce8\u5165\u300d\u4e00\u500b\u672c\u5730\u4f9d\u8cf4\u5957\u4ef6\u3002 \u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u672c\u5730\u4f9d\u8cf4\u5957\u4ef6\u6703\u8edf\u9023\u7d50\u81f3 `node_modules`\uff0c\u4f46\u6709\u4e86\u9019\u65b0\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u4f7f pnpm \u786c\u9023\u7d50\u6a21\u7d44\u6587\u4ef6\u3002\\n\\n### \u6539\u5584 peer dependency \u554f\u984c\u56de\u5831 \uff08\u65bc [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0) \u6539\u5584\uff09\\n\\nPeer dependency \u554f\u984c\u5831\u544a\u4ee5\u524d\u662f\u50c5\u5370\u51fa\u7d14\u6587\u5b57\u800c\u4e14\u5f88\u96e3\u7406\u89e3\u7684\u3002 \u73fe\u5728\u5b83\u5011\u5df2\u7d93\u5168\u90e8\u88ab\u5206\u985e\uff0c\u4e26\u4e14\u8f38\u51fa\u80fd\u4ee5\u5f88\u597d\u7684\u5c64\u6b21\u7d50\u69cb\u8868\u9032\u884c\u5448\u73fe\\n\\n## \u7af6\u722d\\n\\n### Yarn\\n\\nYarn \u5728[\u7248\u672c 3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-) \u4e2d\u65b0\u589e\u4e86 pnpm \u9023\u7d50\u5668\u3002 \u6240\u4ee5 Yarn \u73fe\u5728\u4e5f\u53ef\u4ee5\u5275\u9020\u51fa\u8207 pnpm \u76f8\u4f3c\u7684\u8cc7\u6599\u593e\u7d50\u69cb\u3002\\n\\n\u800c\u4e14\uff0cYarn \u958b\u767c\u5718\u968a\u8a08\u756b\u8981\u5be6\u4f5c\u4e00\u500b\u5167\u5bb9\u53ef\u5b9a\u5740\u7684\u5132\u5b58\u5340\u4ee5\u9054\u5230\u9ad8\u6548\u5229\u7528\u78c1\u789f\u7a7a\u9593\\n\\n### npm\\n\\nNpm \u958b\u767c\u5718\u968a\u4e5f\u6c7a\u5b9a\u63a1\u53d6 pnpm\u4f7f\u7528\u7684\u8edf\u9023\u7d50 node_modules \u8cc7\u6599\u593e\u7d50\u69cb\uff08\u76f8\u95dc\u7684 [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)\uff09\\n\\n### \u5176\u4ed6\\n\\n\u4f7f\u7528Zig\u3001[Volt](https://github.com/voltpkg/volt) \u548c Rust \u5beb\u51fa\u4f86\u7684 [Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) \u5ba3\u7a31\u5b83\u6bd4 npm\u3001Yarn\u3001pnpm \u90fd\u9084\u8981\u5feb\u3002 \u4f46\u662f\u6211\u9084\u6c92\u5c0d\u9019\u4e9b\u6a21\u7d44\u7ba1\u7406\u5668\u9032\u884c\u8dd1\u5206\u3002\\n\\n## \u672a\u4f86\u5c55\u671b\\n\\n\u66f4\u5feb\u3001\u66f4\u597d"},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/zh-TW/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://translate.pnpm.io/project/pnpm/zh-TW","source":"@site/i18n/zh-TW/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Pnpm \u7684 Node-Modules \u8a2d\u5b9a\u9078\u9805","description":"\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u5275\u5efa nodemodules \u76ee\u9304\u3002 \u76ee\u6a19\u4e00\u5b9a\u662f\u5275\u5efa\u6700\u56b4\u683c\u7684 nodemodules\uff0c\u4f46\u5982\u679c\u90a3\u4e0d\u53ef\u80fd\u7684\u8a71\uff0c\u4e5f\u6709\u9078\u9805\u8b93\u60a8\u53ef\u4ee5\u7522\u751f\u4e00\u500b\u9b06\u6563\u7684 node_modules\u3002","date":"2020-10-17T00:00:00.000Z","formattedDate":"2020\u5e7410\u670817\u65e5","tags":[],"readingTime":2.965,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Pnpm \u7684 Node-Modules \u8a2d\u5b9a\u9078\u9805","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"2021 \u5e74\u7684 pnpm","permalink":"/zh-TW/blog/2021/12/29/yearly-update"},"nextItem":{"title":"\u5e73\u9762\u5316node_module\u4e0d\u6703\u662f\u552f\u4e00\u7684\u65b9\u6cd5","permalink":"/zh-TW/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u5275\u5efa node_modules \u76ee\u9304\u3002 \u76ee\u6a19\u4e00\u5b9a\u662f\u5275\u5efa\u6700\u56b4\u683c\u7684 node_modules\uff0c\u4f46\u5982\u679c\u90a3\u4e0d\u53ef\u80fd\u7684\u8a71\uff0c\u4e5f\u6709\u9078\u9805\u8b93\u60a8\u53ef\u4ee5\u7522\u751f\u4e00\u500b\u9b06\u6563\u7684 node_modules\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u9810\u8a2d\u8a2d\u5b9a\\n\\n\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c pnpm \u7b2c\u4e94\u7248\u6703\u5275\u5efa\u4e00\u500b\u534a\u56b4\u683c\u7684 node_modules \u8cc7\u6599\u593e\u3002 \u300c\u534a\u56b4\u683c\u300d\u610f\u601d\u662f\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u53ea\u80fd\u532f\u5165\u65b0\u589e\u81f3 `package.json` \u7684\u4f9d\u8cf4\u5957\u4ef6\uff08\u7576\u7136\u4e5f\u6709\u4e00\u4e9b\u4f8b\u5916\uff09\u3002 \u4e0d\u904e\u9019\u6a23\u7684\u8a71\uff0c\u60a8\u7684\u4f9d\u8cf4\u5957\u4ef6\u5c07\u80fd\u5b58\u53d6\u4efb\u4f55\u5957\u4ef6\u3002\\n\\n\u9810\u8a2d\u7684\u8a2d\u5b9a\u770b\u8d77\u4f86\u50cf\u9019\u6a23\uff1a\\n\\n```ini\\n;\u5c07\u6240\u6709\u6a21\u7d44\u90fd\u63d0\u5347\u81f3 node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n;\u5c07\u6240\u6709\u578b\u5225\u5ba3\u544a\u63d0\u5347\u81f3\u6839\u76ee\u9304\u4ee5\u8b93 TypeScript \u80fd\u627e\u5230\\npublic-hoist-pattern[]=*types*\\n\\n;\u5c07\u6240\u6709\u8207ESLint\u76f8\u95dc\u7684\u6a21\u7d44\u63d0\u5347\u81f3\u6839\u76ee\u9304\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play\uff0d \u6700\u56b4\u683c\u7684\u8a2d\u5b9a\\n\\npnpm \u5f9e 5.9 \u7248\u958b\u59cb\u652f\u63f4 [Yarn \u7684 Plug\'n\'Play](https://yarnpkg.com/features/pnp) \u3002 \u7576\u4f7f\u7528 PnP \u6642\uff0c\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u548c\u5176\u4f9d\u8cf4\u5957\u4ef6\u5c07\u53ea\u80fd\u5b58\u53d6\u5b83\u5011\u5ba3\u544a\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002 \u9019\u6bd4\u8a2d\u5b9a `hoist=false` \u9084\u8981\u56b4\u683c\uff0c\u56e0\u70ba\u5728 Monorepo \u4e2d\uff0c\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u751a\u81f3\u7121\u6cd5\u5b58\u53d6\u6839\u5c08\u6848\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002\\n\\n\u5982\u679c\u8981\u4f7f\u7528 Plug\'n\'Play\uff0c\u8acb\u4f7f\u7528\u4ee5\u4e0b\u8a2d\u5b9a\uff1a\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## \u4e00\u500b\u56b4\u683c\uff0c\u50b3\u7d71\u7684\u6a21\u7d44\u76ee\u9304\\n\\n\u5982\u679c\u60a8\u9084\u6c92\u6709\u6e96\u5099\u597d\u8981\u4f7f\u7528 PnP\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u900f\u904e\u5c07\u4ee5\u4e0b\u8a2d\u5b9a\u8a2d\u5b9a\u70ba false \u4f86\u5141\u8a31\u6a21\u7d44\u53ea\u80fd\u5b58\u53d6\u81ea\u5df1\u7684\u4f9d\u8cf4\u6a21\u7d44\uff0c\u4ee5\u4fdd\u969c\u5176\u56b4\u683c\u6027\uff1a\\n\\n```ini\\nhoist=false\\n```\\n\\n\u4e0d\u904e\uff0c\u5982\u679c\u60a8\u7684\u4e00\u4e9b\u4f9d\u8cf4\u6a21\u7d44\u5617\u8a66\u5b58\u53d6\u6c92\u6709\u4f9d\u8cf4\u5957\u4ef6\u7684\u6a21\u7d44\uff0c\u60a8\u6709\u5169\u500b\u9078\u64c7\uff1a\\n\\n1. \u5275\u5efa\u4e00\u500b `pnpmfile.js` \u6a94\u6848\u4e26\u4e14\u4f7f\u7528[\u9264\u5b50](/pnpmfile)\u5c07\u907a\u5931\u7684\u4f9d\u8cf4\u5957\u4ef6\u65b0\u589e\u81f3\u4f9d\u8cf4\u5957\u4ef6\u540d\u55ae\u3002\\n\\n2. \u5c07\u4e00\u7d44\u8868\u9054\u5f0f\u586b\u5165 `hoist-pattern` \u8a2d\u5b9a\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u662f `babel-core` \u6a21\u7d44\u627e\u4e0d\u5230\uff0c\u8acb\u5c07\u4ee5\u4e0b\u8a2d\u5b9a\u52a0\u5165 `.npmrc`\uff1a\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## \u6700\u4e0d\u597d\u7684\u60c5\u6cc1\uff0d\u63d0\u5347\u6240\u6709\u6771\u897f\u81f3\u6839\u76ee\u9304\\n\\n\u4e00\u4e9b\u5de5\u5177\u53ef\u80fd\u5373\u4f7f\u4f7f\u7528 pnpm \u9810\u8a2d\u8a2d\u5b9a\u4e5f\u6c92\u8fa6\u6cd5\u6b63\u5e38\u57f7\u884c\uff0c\u56e0\u70bapnpm\u9810\u8a2d\u8a2d\u5b9a\u6703\u5c07\u6240\u6709\u6771\u897f\u63d0\u5347\u81f3\u6839\u76ee\u9304\u4e26\u5c07\u4e00\u4e9b\u6a21\u7d44\u63d0\u5347\u81f3\u6839\u76ee\u9304\u3002 \u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u5c07\u6240\u6709\u6771\u897f\u6216\u8005\u90e8\u5206\u4f9d\u8cf4\u5957\u4ef6\u63d0\u5347\u81f3\u6839\u76ee\u9304\uff1a\\n\\n\u5c07\u6240\u6709\u9805\u76ee\u63d0\u5347\u5230 node_modules \u7684\u6839\u76ee\u9304:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\n\u50c5\u63d0\u5347\u7b26\u5408\u4ee5\u4e0b\u8868\u9054\u5f0f\u7684\u6a21\u7d44\uff1a\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/zh-TW/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://translate.pnpm.io/project/pnpm/zh-TW","source":"@site/i18n/zh-TW/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"\u5e73\u9762\u5316node_module\u4e0d\u6703\u662f\u552f\u4e00\u7684\u65b9\u6cd5","description":"\u65b0\u4f7f\u7528\u8005\u7d93\u5e38\u554f\u6211\u95dc\u65bc pnpm \u751f\u6210\u51fa\u4f86\u7684\u5947\u602a node_modules \u8cc7\u6599\u593e\u7d50\u69cb\u3002 \u70ba\u4ec0\u9ebc\u5b83\u4e0d\u662f\u6241\u5e73\u5316\u7684\uff1f \u800c\u4e14\u5168\u90e8\u7684\u5b50\u4f9d\u8cf4\u5957\u4ef6\u8dd1\u53bb\u54ea\u4e86\uff1f","date":"2020-05-27T00:00:00.000Z","formattedDate":"2020\u5e745\u670827\u65e5","tags":[],"readingTime":4.405,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"\u5e73\u9762\u5316node_module\u4e0d\u6703\u662f\u552f\u4e00\u7684\u65b9\u6cd5","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"Pnpm \u7684 Node-Modules \u8a2d\u5b9a\u9078\u9805","permalink":"/zh-TW/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"\u65b0\u4f7f\u7528\u8005\u7d93\u5e38\u554f\u6211\u95dc\u65bc pnpm \u751f\u6210\u51fa\u4f86\u7684\u5947\u602a `node_modules` \u8cc7\u6599\u593e\u7d50\u69cb\u3002 \u70ba\u4ec0\u9ebc\u5b83\u4e0d\u662f\u6241\u5e73\u5316\u7684\uff1f \u800c\u4e14\u5168\u90e8\u7684\u5b50\u4f9d\u8cf4\u5957\u4ef6\u8dd1\u53bb\u54ea\u4e86\uff1f\\n\\n\x3c!--truncate--\x3e\\n\\n> \u5728\u6b64\u6703\u5047\u8a2d\u6b64\u6587\u8b80\u8005\u5df2\u7d93\u719f\u6089\u4e86 npm \u548c Yarn \u5275\u5efa\u51fa\u4f86\u7684\u6241\u5e73\u5316 `node_modules` \u8cc7\u6599\u593e\u3002 \u5982\u679c\u60a8\u4e0d\u4e86\u89e3\u70ba\u4ec0\u9ebc npm \u8981\u5728\u7b2c\u4e09\u7248\u958b\u59cb\u4f7f\u7528\u6241\u5e73\u5316 `node_modules`\uff0c\u60a8\u53ef\u4ee5\u5728[\u70ba\u4ec0\u9ebc\u6211\u5011\u61c9\u8a72\u4f7f\u7528pnpm](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html)\u6587\u7ae0\u4e2d\u627e\u5230\u4e00\u4e9b\u80cc\u666f\\n\\n\u6240\u4ee5\u70ba\u4ec0\u9ebc pnpm \u7684 `node_modules` \u5982\u6b64\u7279\u6b8a\uff1f \u8b93\u6211\u5011\u5148\u5275\u5efa\u5169\u500b\u8cc7\u6599\u593e\uff0c\u7136\u5f8c\u5728\u5176\u4e2d\u4e00\u500b\u8cc7\u6599\u593e\u57f7\u884c `npm add express`\uff0c\u53e6\u4e00\u500b\u8cc7\u6599\u593e\u57f7\u884c `pnpm add express` \u4ee5\u4e0b\u662f\u60a8\u80fd\u5728\u7b2c\u4e00\u500b\u8cc7\u6599\u593e\u4e2d\u7684 `node_modules` \u5167\u80fd\u770b\u5230\u7684\u8cc7\u6599\u593e\uff1a\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\n\u60a8\u53ef\u4ee5\u5728[\u9019\u88e1](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules)\u770b\u5230\u6574\u500b\u8cc7\u6599\u593e\u7d50\u69cb\\n\\n\u4ee5\u53ca\uff0c\u9019\u662f\u60a8\u80fd\u5728 pnpm \u5275\u5efa\u7684 `node_modules` \u8cc7\u6599\u593e\u4e2d\u770b\u5230\u7684\uff1a\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\n\u60a8\u53ef\u4ee5\u5728[\u9019\u88e1](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules)\u67e5\u770b\\n\\n\u6240\u4ee5\u5168\u90e8\u7684\u4f9d\u8cf4\u5957\u4ef6\u8dd1\u53bb\u54ea\u4e86\uff1f `node_modules` \u88e1\u9762\u53ea\u6709\u4e00\u500b\u540d\u70ba `.pnpm` \u7684\u8cc7\u6599\u593e\u9084\u6709\u4e00\u500b\u540d\u70ba `express` \u7684\u8edf\u9023\u7d50\u3002 \u55ef\uff0c\u56e0\u70ba\u6211\u5011\u53ea\u6709\u5b89\u88dd `express`\uff0c\u6240\u4ee5\u53ea\u6709\u90a3\u500b\u5957\u4ef6\u662f\u60a8\u7684\u7a0b\u5f0f\u53ef\u4ee5\u5b58\u53d6\u7684\u3002\\n\\n> \u60a8\u53ef\u4ee5[\u5728\u6b64](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u70ba\u4ec0\u9ebcpnpm\u7684\u56b4\u683c\u6027\u662f\u597d\u7684\u6771\u897f\\n\\n\u8b93\u6211\u5011\u770b\u770b `express`\u8cc7\u6599\u593e\u5167\u6709\u4ec0\u9ebc\uff1a\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n  .modules.yaml\\n```\\n\\n`express` \u4e2d\u6c92\u6709 `node_modules` \u8cc7\u6599\u593e\uff1f \u90a3 `express` \u7684\u5168\u90e8\u4f9d\u8cf4\u5957\u4ef6\u8dd1\u53bb\u54ea\u4e86\uff1f\\n\\n\u79d8\u8a23\u5c31\u662f `express` \u53ea\u662f\u4e00\u500b\u8edf\u9023\u7d50\u3002 \u7576 Node.js \u89e3\u6790\u4f9d\u8cf4\u5957\u4ef6\u6642\uff0c\u56e0\u70ba Node.js \u6703\u4f7f\u7528\u5b83\u5011\u7684\u771f\u5be6\u4f4d\u7f6e\uff0c\u6240\u4ee5 Node.js \u4e0d\u6703\u4fdd\u7559\u8edf\u9023\u7d50\u3002 \u6216\u8a31\u4f60\u6703\u60f3\u554f\uff1a `express` \u7684\u771f\u5be6\u4f4d\u7f6e\u5728\u54ea\u88e1\uff1f\\n\\n\u7b54\u6848\u662f\u5728\u9019\u88e1\uff1a[node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express)\u3002\\n\\n\u597d\u7684\uff0c\u6240\u4ee5\u6211\u5011\u73fe\u5728\u77ad\u89e3\u4e86 `.pnpm/` \u8cc7\u6599\u593e\u7684\u4f5c\u7528\u3002 `.pnpm/` \u662f\u4ee5\u6241\u5e73\u5316\u7684\u65b9\u5f0f\u5132\u5b58\u6240\u6709\u6a21\u7d44\uff0c\u6240\u4ee5\u6240\u6709\u6a21\u7d44\u53ef\u4ee5\u5728\u4ee5\u4e0b\u9019\u500b\u8def\u5f91\u627e\u5230\uff1a\\n\\n```text\\n.pnpm/<\u6a21\u7d44\u540d\u7a31>@<\u6a21\u7d44\u7248\u672c>/node_modules/<\u6a21\u7d44\u540d\u7a31>\\n```\\n\\n\u6211\u5011\u7a31\u5b83\u70ba\u865b\u64ec\u7684\u5132\u5b58\u8cc7\u6599\u593e\\n\\n\u4e0d\u50cf npm \u7b2c 3\u30014\u30015\u30016 \u7248\u6216Yarn\u7684\u7b2c 1 \u7248\u7684\u6241\u5e73\u5316 `node_modules`\uff0c\u9019\u500b\u6241\u5e73\u5316\u7d50\u69cb\u9664\u4e86\u53ef\u4ee5\u907f\u514d\u5de2\u72c0 `node_modules` \u5e36\u4f86\u7684\u9577\u8def\u5f91\u554f\u984c\uff0c\u4e5f\u80fd\u4f7f\u6a21\u7d44\u4fdd\u6301\u7368\u7acb\u3002\\n\\n\u73fe\u5728\uff0c\u8b93\u6211\u5011\u4f86\u770b\u4e00\u4e0b `express` \u771f\u6b63\u7684\u4f4d\u7f6e\uff1a\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\u9019\u662f\u5728\u9a19\u4eba\u55ce\uff1f \u9084\u662f\u6c92\u6709 `node_modules` \u8cc7\u6599\u593e\u5440\uff01 \u7b2c\u4e8c\u500b pnpm \u7684 `node_modules` \u8cc7\u6599\u593e\u7d50\u69cb\u79d8\u8a23\u5c31\u662f\uff0c\u6a21\u7d44\u7684\u4f9d\u8cf4\u5957\u4ef6\u6703\u548c\u4f9d\u8cf4\u5957\u4ef6\u5be6\u969b\u4f4d\u7f6e\u5728\u540c\u4e00\u5c64\u8cc7\u6599\u593e\u3002 \u6240\u4ee5 `express` \u7684\u4f9d\u8cf4\u5957\u4ef6\u4f4d\u7f6e\u4e0d\u662f\u5728 `.pnpm/express@4.17.1/node_modules/express/node_modules/`\uff0c\u800c\u662f\u5728 [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules)\uff1a\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\n`express` \u7684\u5168\u90e8\u4f9d\u8cf4\u5957\u4ef6\u90fd\u6703\u8edf\u9023\u7d50\u81f3 `node_modules/.pnpm/` \u5167\u5c0d\u61c9\u7684\u8cc7\u6599\u593e\u3002 \u5c07 `express` \u7684\u4f9d\u8cf4\u6a21\u7d44\u653e\u5728\u540c\u4e00\u5c64\u8cc7\u6599\u593e\u53ef\u4ee5\u907f\u514d\u8edf\u9023\u7d50\u5faa\u74b0\u3002\\n\\n\u6240\u4ee5\u5982\u60a8\u6240\u898b\uff0c\u96d6\u7136\u4e00\u958b\u59cb\u4f3c\u4e4e\u6703\u89ba\u5f97 pnpm \u7684 `node_modules` \u7d50\u69cb\u5f88\u7279\u6b8a\uff1a\\n\\n1. \u4f46\u4ed6\u548c Node.js \u5b8c\u5168\u76f8\u5bb9\\n2. \u4e26\u4e14\u6a21\u7d44\u548c\u5176\u4f9d\u8cf4\u5957\u4ef6\u53ef\u4ee5\u88ab\u5f88\u597d\u7684\u5206\u985e\\n\\n\u5c0d\u65bc\u6709\u5c0d\u7b49\u4f9d\u8cf4\u5957\u4ef6\u7684\u6a21\u7d44\uff0c\u7d50\u69cb\u6703\u7a0d\u5fae[\u66f4\u8907\u96dc\u4e00\u9ede](/how-peers-are-resolved)\uff0c\u4f46\u6982\u5ff5\u9084\u662f\u4e00\u6a23\u7684\uff1a\u4f7f\u7528\u8edf\u9023\u7d50\u548c\u6241\u5e73\u5316\u8cc7\u6599\u593e\u7d50\u69cb\u5275\u5efa\u5de2\u72c0\u7d50\u69cb"}]}')}}]);