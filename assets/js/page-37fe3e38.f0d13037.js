(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{265:function(t,e,v){},362:function(t,e,v){"use strict";var _=v(265);v.n(_).a},534:function(t,e,v){"use strict";v.r(e);v(362);var _=v(2),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"自定义域名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),v("h3",{attrs:{id:"gitlab"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[t._v("#")]),t._v(" GitLab")]),t._v(" "),v("h4",{attrs:{id:"添加域名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加域名"}},[t._v("#")]),t._v(" 添加域名")]),t._v(" "),v("p",[t._v("点击 "),v("code",[t._v("设置 --\x3e Pages")]),t._v(" 的 "),v("code",[t._v("New Domain")]),t._v(" 按钮，来添加你自己的域名（证书和密钥可以先不添加）")]),t._v(" "),v("h4",{attrs:{id:"解析域名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解析域名"}},[t._v("#")]),t._v(" 解析域名")]),t._v(" "),v("table",[v("tr",[v("th",{staticStyle:{width:"55rem"}},[t._v("主域名")]),t._v(" "),v("th",{staticStyle:{width:"55rem"}},[t._v("解析类型")]),t._v(" "),v("th",{staticStyle:{width:"55rem"}},[t._v("解析值")]),t._v(" "),v("th",{staticStyle:{width:"27rem"}},[t._v("作用")])]),t._v(" "),v("tr",[v("td",[t._v("domain.com")]),t._v(" "),v("td",[t._v("A")]),t._v(" "),v("td",[t._v("35.185.44.232")]),t._v(" "),v("td",[t._v("解析")])]),t._v(" "),v("tr",[v("td",[t._v("www.domain.com")]),t._v(" "),v("td",[t._v("A")]),t._v(" "),v("td",[t._v("35.185.44.232")]),t._v(" "),v("td",[t._v("解析")])]),t._v(" "),v("tr",[v("td",[t._v("_gitlab-pages-verification-code.www.domain.com")]),t._v(" "),v("td",{staticStyle:{width:"55rem"}},[t._v("TXT")]),t._v(" "),v("td",[t._v("gitlab-pages-verification-code=00112233445566778899aabbccddeeff")]),t._v(" "),v("td",{staticStyle:{width:"55rem"}},[t._v("校验")])])]),t._v(" "),v("table",[v("tr",[v("th",{staticStyle:{width:"55rem"}},[t._v("子域名")]),t._v(" "),v("th",{staticStyle:{width:"55rem"}},[t._v("解析类型")]),t._v(" "),v("th",{staticStyle:{width:"55rem"}},[t._v("解析值")]),t._v(" "),v("th",{staticStyle:{width:"27rem"}},[t._v("作用")])]),t._v(" "),v("tr",[v("td",[t._v("subdomain.domain.com")]),t._v(" "),v("td",[t._v("CNAME")]),t._v(" "),v("td",[t._v("namespace.gitlab.io")]),t._v(" "),v("td",[t._v("解析")])]),t._v(" "),v("tr",[v("td",[t._v("_gitlab-pages-verification-code.subdomain.domain.com")]),t._v(" "),v("td",{staticStyle:{width:"55rem"}},[t._v("TXT")]),t._v(" "),v("td",[t._v("gitlab-pages-verification-code=00112233445566778899aabbccddeeff")]),t._v(" "),v("td",{staticStyle:{width:"55rem"}},[t._v("校验")])])]),t._v(" "),v("h3",{attrs:{id:"github"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),v("ol",[v("li",[t._v("解析域名。在你的域名服务平台的控制台进行解析，设置两条记录，记录的类型都选择 "),v("code",[t._v("CNAME")]),t._v("，记录值都选择 "),v("code",[t._v("nickname.github.io")]),t._v("，主机记录一条为空，另一条填写 "),v("code",[t._v("www")]),t._v("；")]),t._v(" "),v("li",[t._v("设置 "),v("code",[t._v("pages")]),t._v("。在github上打开你的工程，点击 "),v("code",[t._v("Settings")]),t._v("，然后找到 "),v("code",[t._v("GitHub Pages")]),t._v(" 下的 "),v("code",[t._v("Custom domain")]),t._v(" ，填写你的 "),v("code",[t._v("www")]),t._v(" 域名，点击 "),v("code",[t._v("save")]),t._v(" 保存，这时域名就可以访问到你的网站了；")]),t._v(" "),v("li",[t._v("修复本地工程。"),v("code",[t._v("GitHub")]),t._v(" 工程里会出现一个"),v("code",[t._v("CNAME")]),t._v(" 文件里面写着你域名，见这个文件放到你的本地工程的所用主题下的source文件夹下，不然下次发布时会清空这个文件。")])]),t._v(" "),v("h2",{attrs:{id:"免费https证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#免费https证书"}},[t._v("#")]),t._v(" 免费HTTPS证书")]),t._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://freessl.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("申请网址"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://blog.freessl.cn/how-to-use-freessl-issue-free-certificates/",target:"_blank",rel:"noopener noreferrer"}},[t._v("申请教程"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://blog.freessl.cn/free-certificate-verification-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("域名验证"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);