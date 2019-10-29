(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{508:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[t("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Let's Encrypt"),t("OutboundLink")],1),s._v(" 是一个由非营利性组织 "),t("a",{attrs:{href:"https://letsencrypt.org/isrg/",target:"_blank",rel:"noopener noreferrer"}},[s._v("互联网安全研究小组"),t("OutboundLink")],1),s._v("（ISRG）提供的免费、自动化和开放的证书颁发机构（CA）。")]),s._v(" "),t("p",[s._v("简单的说，借助 Let's Encrypt 颁发的证书可以为我们的网站免费启用 HTTPS(SSL/TLS) 。")])]),s._v(" "),t("h2",{attrs:{id:"let-s-encrypt-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-s-encrypt-简介"}},[s._v("#")]),s._v(" Let's Encrypt 简介")]),s._v(" "),t("p",[s._v("由于前文"),t("router-link",{attrs:{to:"/system/2016-05-24-free-ssl.html"}},[s._v("Startssl免费SSL证书+Nginx搭建https")]),s._v(",Startssl关闭了,所以改换Let’s Encrypt域名SSL证书")],1),s._v(" "),t("p",[s._v("Let's Encrypt免费证书的签发/续签都是脚本自动化的，官方提供了几种证书的申请方式方法，"),t("a",{attrs:{href:"https://letsencrypt.org/docs/client-options/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击此处"),t("OutboundLink")],1),s._v(" 快速浏览。")]),s._v(" "),t("p",[s._v("官方推荐使用 "),t("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Certbot"),t("OutboundLink")],1),s._v(" 客户端来签发证书，这种方式可参考文档自行尝试，不做评价。")]),s._v(" "),t("p",[s._v("我这里直接使用第三方客户端 "),t("a",{attrs:{href:"https://github.com/Neilpang/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("acme.sh"),t("OutboundLink")],1),s._v(" 申请，据了解这种方式可能是目前 Let's Encrypt 免费证书客户端最简单、最智能的 shell 脚本，可以自动发布和续订 Let's Encrypt 中的免费证书。")]),s._v(" "),t("h2",{attrs:{id:"安装-acme-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-acme-sh"}},[s._v("#")]),s._v(" 安装 acme.sh")]),s._v(" "),t("p",[s._v("安装很简单，一条命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下命令请在Linux系统执行，root和普通用户均可安装：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://get.acme.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("整个安装过程进行了以下几步，了解一下即可：")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("1.把 acme.sh 安装到当前用户的主目录$HOME下的.acme.sh文件夹中，即~/.acme.sh/，之后所有生成的证书也会放在这个目录下；")]),s._v(" "),t("p",[s._v("2.创建了一个指令别名alias acme.sh=~/.acme.sh/acme.sh，这样我们可以通过acme.sh命令方便快速地使用 acme.sh 脚本；")]),s._v(" "),t("p",[s._v("3.自动创建cronjob定时任务, 每天 0:00 点自动检测所有的证书，如果快过期了，则会自动更新证书。")])]),s._v(" "),t("p",[s._v("安装命令执行完毕后，执行acme.sh --version确认是否能正常使用acme.sh命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@demo ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ acme.sh --version\nhttps://github.com/Neilpang/acme.sh\nv2.8.4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("如有版本信息输出则表示环境正常；如果提示命令未找到，执行source ~/.bashrc命令重载一下环境配置文件。")]),s._v(" "),t("p",[s._v("整个安装过程不会污染已有的系统任何功能和文件，所有的修改都限制在安装目录~/.acme.sh/中。")]),s._v(" "),t("p",[s._v("据 acme.sh 官方文档介绍，其实现了 "),t("a",{attrs:{href:"https://github.com/ietf-wg-acme/acme/",target:"_blank",rel:"noopener noreferrer"}},[s._v("acme"),t("OutboundLink")],1),s._v(" 协议支持的所有验证协议，一般有两种方式验证：http 和 dns 验证；也就是我们有两种选择签发证书")]),s._v(" "),t("h2",{attrs:{id:"生成证书-http方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成证书-http方式"}},[s._v("#")]),s._v(" 生成证书(http方式)")]),s._v(" "),t("p",[s._v("签发证书也很简单，一条命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("acme.sh --issue -d linux48.com -d www.linux48.com -w /home/wwwroot/linux48.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("简单解释下这条命令涉及的几个参数：")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("--issue是 acme.sh 脚本用来颁发证书的指令；")]),s._v(" "),t("p",[s._v("-d是--domain的简称，其后面须填写已备案的域名；")]),s._v(" "),t("p",[s._v("-w是--webroot的简称，其后面须填写网站的根目录。")])]),s._v(" "),t("p",[s._v("生成的证书放在了~/.acme.sh/linux48.com/目录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@demo wwwroot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ll ~/.acme.sh/linux48.com/\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1648")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":02 ca.cer\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3567")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":02 fullchain.cer\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1919")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":02 linux48.com.cer\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("563")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":02 linux48.com.conf\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("989")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":01 linux48.com.csr\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("224")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":01 linux48.com.csr.conf\n-rw-rw-r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1675")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":17 linux48.com.key\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@demo wwwroot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("另外，可以通过下面两个常用acme.sh命令查看和删除证书：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看证书列表")]),s._v("\nacme.sh --list \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除证书")]),s._v("\nacme.sh remove linux48.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("nginx SSL配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    ssl_certificate      /home/demo/.acme.sh/linux48.com/fullchain.cer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ssl_certificate_key  /home/demo/.acme.sh/linux48.com/linux48.com.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"生成泛域名证书-dns-验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成泛域名证书-dns-验证"}},[s._v("#")]),s._v(" 生成泛域名证书(dns 验证)")]),s._v(" "),t("p",[s._v("目前泛域名证书仅支持DNS验证，acme.sh通过DNS提供商的API自动完成操作，因此需要先设置DNS API，以DNSPOD为例。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://console.dnspod.cn/account/token",target:"_blank",rel:"noopener noreferrer"}},[s._v("登陆DNSPOD控制台创建密钥"),t("OutboundLink")],1),s._v("，首次创建务必记录下token")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入密钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DP_Id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"122345"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DP_Key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"43cb8cc3123f94478c36gnjb94f5a8d562cd"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#申请证书")]),s._v("\nacme.sh --issue --dns dns_dp -d linux48.com -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.linux48.com'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如果提示")]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[s._v("[Mon Oct 28 11:26:49 CST 2019] *.linux48.com:Verify error:CAA record for *.linux48.com prevents issuance")])]),s._v(" "),t("p",[s._v("先暂停所有CNAME解析，方可成功。")]),s._v(" "),t("h3",{attrs:{id:"其它常用dns-api设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它常用dns-api设置"}},[s._v("#")]),s._v(" 其它常用DNS API设置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("阿里云\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入密钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Ali_Key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sdfsdfsdfljlbjkljlkjsdfoiwje"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Ali_Secret")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jlsdflanljkljlfdsaklkjflsa"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#申请证书")]),s._v("\nacme.sh --issue --dns dns_ali -d example.com -d www.example.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("CloudXNS\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CX_Key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CX_Secret")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sADDsdasdgdsf"')]),s._v("\nacme.sh --issue --dns dns_cx -d awk.sh -d *.awk.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("CloudFlare\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入密钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CF_Key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sdfsdfsdfljlbjkljlkjsdfoiwje"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CF_Email")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx@sss.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#申请证书")]),s._v("\nacme.sh --issue --dns dns_cf -d example.com -d www.example.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("更多DNS API设置请参考：https://github.com/Neilpang/acme.sh/tree/master/dnsapi")]),s._v(" "),t("h2",{attrs:{id:"更新证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新证书"}},[s._v("#")]),s._v(" 更新证书")]),s._v(" "),t("p",[s._v("目前 Let's Encrypt 的证书有效期是90天，时间到了会自动更新，您无需任何操作。 今后有可能会缩短这个时间， 不过都是自动的，不需要您关心。")]),s._v(" "),t("p",[s._v("但是，您也可以强制续签证书：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# crontba -l")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v(" 03 * * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  acme.sh --renew -d linux48.com --force\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"更新-acme-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新-acme-sh"}},[s._v("#")]),s._v(" 更新 acme.sh")]),s._v(" "),t("p",[s._v("目前由于 acme 协议和 letsencrypt CA 都在频繁的更新, 因此 acme.sh 也经常更新以保持同步。")]),s._v(" "),t("p",[s._v("升级 acme.sh 到最新版：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("acme.sh --upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果您不想手动升级,，可以开启自动升级：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("acme.sh  --upgrade  --auto-upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("您也可以随时关闭自动更新：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("acme.sh --upgrade  --auto-upgrade  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参考")]),s._v(" "),t("p",[s._v("https://www.cnblogs.com/esofar/p/9291685.html")]),s._v(" "),t("p",[s._v("https://jszbug.com/zxaiacja34.html")]),s._v(" "),t("p",[s._v("https://github.com/Neilpang/acme.sh/wiki/%E8%AF%B4%E6%98%8E")])])}),[],!1,null,null,null);a.default=n.exports}}]);