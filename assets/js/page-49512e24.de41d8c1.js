(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{546:function(s,e,t){"use strict";t.r(e);var a=t(2),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vuepress-reco-vuepress-plugin-comments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-reco-vuepress-plugin-comments"}},[s._v("#")]),s._v(" @vuepress-reco/vuepress-plugin-comments")]),s._v(" "),t("h2",{attrs:{id:"introduce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduce"}},[s._v("#")]),s._v(" Introduce")]),s._v(" "),t("p",[s._v("Comments plugin for vuepress-theme-reco or other vuepress theme.")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("As plugin")]),s._v(": "),t("code",[s._v("@vuepress-reco/vuepress-plugin-comments")])]),s._v(" "),t("li",[t("strong",[s._v("As component")]),s._v(": "),t("code",[s._v("Comments (评论)")]),s._v(" / "),t("code",[s._v("AccessNumber (使用 Valine 时的访问量)")]),s._v("（主题开发时使用）")])]),s._v(" "),t("h2",{attrs:{id:"option-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-api"}},[s._v("#")]),s._v(" Option API")]),s._v(" "),t("p",[s._v("组件会在 "),t("code",[s._v("$themeConfig")]),s._v(" 注入一个参数 "),t("code",[s._v("commentsSolution")]),s._v("，如果使用 "),t("code",[s._v("Valine")]),s._v("，其值为 "),t("code",[s._v("valine")]),s._v("，如果使用 "),t("code",[s._v("Vssue")]),s._v("，其值为 "),t("code",[s._v("vssue")]),s._v("，可以使用这个参数来主题中做差异化处理，比如是否显示阅读数量。")]),s._v(" "),t("h3",{attrs:{id:"valine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[s._v("#")]),s._v(" Valine")]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"language-javscript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    valineConfig: {\n      appId: '...',// your appId\n      appKey: '...', // your appKey\n    }\n  }  \n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("或者：")]),s._v(" "),t("div",{staticClass:"language-javscript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module.exports = {\n  theme: 'reco',\n  plugins: [['@vuepress-reco/comments', {\n    solution: 'valine',\n    options: {\n      appId: '...',// your appId\n      appKey: '...', // your appKey\n    }\n  }]] \n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"vssue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vssue"}},[s._v("#")]),s._v(" Vssue")]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"language-javscript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module.exports = {\n  theme: 'reco',\n  themeConfig: {\n    vssueConfig: {\n      platform: 'github',\n      owner: 'OWNER_OF_REPO',\n      repo: 'NAME_OF_REPO',\n      clientId: 'YOUR_CLIENT_ID',\n      clientSecret: 'YOUR_CLIENT_SECRET',\n    }\n  }  \n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("或者：")]),s._v(" "),t("div",{staticClass:"language-javscript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module.exports = {\n  theme: 'reco',\n  plugins: [['@vuepress-reco/comments', {\n    solution: 'vuess',\n    options: {\n      title: 'vuepress-theme-reco',\n      platform: 'github',\n      owner: 'OWNER_OF_REPO',\n      repo: 'NAME_OF_REPO',\n      clientId: 'YOUR_CLIENT_ID',\n      clientSecret: 'YOUR_CLIENT_SECRET',\n    }\n  }]] \n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[t("code",[s._v("options")]),s._v(" 详解：")])]),s._v(" "),t("ul",[t("li",[s._v("title: 在这里设置当前页面的 "),t("code",[s._v("Issue")]),s._v(" 标题")]),s._v(" "),t("li",[s._v("platform: 支持的代码托管平台")]),s._v(" "),t("li",[s._v("owner: 对应 "),t("code",[s._v("repository")]),s._v(" 的拥有者帐号或者团队")]),s._v(" "),t("li",[s._v("repo: 用来存储评论的 repository")]),s._v(" "),t("li",[s._v("clientId: "),t("code",[s._v("OAuth App")]),s._v(" 的 "),t("code",[s._v("client id")])]),s._v(" "),t("li",[s._v("clientSecret: "),t("code",[s._v("OAuth App")]),s._v(" 的 "),t("code",[s._v("client secret")]),s._v("（只有在使用某些平台时需要）")])]),s._v(" "),t("p",[t("strong",[t("code",[s._v("platform")]),s._v(" 详解（点击查看"),t("a",{attrs:{href:"https://vssue.js.org/zh/guide/supported-platforms.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("支持的代码托管平台"),t("OutboundLink")],1),s._v("）：")])]),s._v(" "),t("ul",[t("li",[s._v("github: "),t("code",[s._v("@vssue/api-github-v3")])]),s._v(" "),t("li",[s._v("github-v4: "),t("code",[s._v("@vssue/api-github-v4")])]),s._v(" "),t("li",[s._v("gitlab: "),t("code",[s._v("@vssue/api-gitlab-v4")])]),s._v(" "),t("li",[s._v("bitbucket: "),t("code",[s._v("@vssue/api-bitbucket-v2")])]),s._v(" "),t("li",[s._v("gitee: "),t("code",[s._v("@vssue/api-gitee-v5")])]),s._v(" "),t("li")]),s._v(" "),t("h3",{attrs:{id:"accessnumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessnumber"}},[s._v("#")]),s._v(" AccessNumber")]),s._v(" "),t("blockquote",[t("p",[s._v("仅在 使用 "),t("code",[s._v("Valine")]),s._v(" 时才有效。")])]),s._v(" "),t("h4",{attrs:{id:"idval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idval"}},[s._v("#")]),s._v(" idVal")]),s._v(" "),t("ul",[t("li",[s._v("description: valine 记录浏览数的 id 值")]),s._v(" "),t("li",[s._v("type: "),t("code",[s._v("String")])])]),s._v(" "),t("h4",{attrs:{id:"numstyle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numstyle"}},[s._v("#")]),s._v(" numStyle")]),s._v(" "),t("ul",[t("li",[s._v("description: 浏览量的数字样式（用于调整不同位置的显示风格）")]),s._v(" "),t("li",[s._v("type: "),t("code",[s._v("Object")])])]),s._v(" "),t("h4",{attrs:{id:"flagtitle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flagtitle"}},[s._v("#")]),s._v(" flagTitle")]),s._v(" "),t("ul",[t("li",[s._v("description: 文章标题")]),s._v(" "),t("li",[s._v("type: "),t("code",[s._v("String")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);