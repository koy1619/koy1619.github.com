(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{410:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"腾讯云的yum-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云的yum-repo","aria-hidden":"true"}},[s._v("#")]),s._v(" 腾讯云的YUM repo")]),s._v(" "),t("p",[s._v("用了半年多的腾讯云和ucloud，发现他们都是和阿里云一样自建的软件源")]),s._v(" "),t("pre",[t("code",[s._v("http://centos.mirrors.cs.ucloud.cn/centos\nhttp://mirrors.tencentyun.com/centos\n")])]),s._v(" "),t("p",[s._v("特别是软件包非常全，而且也很稳定。")]),s._v(" "),t("p",[s._v("以前要"),t("code",[s._v("yum")]),s._v("安装"),t("code",[s._v("nginx")]),s._v(" "),t("code",[s._v("php-fpm")]),s._v("等等还要下载源码编译，或者添加"),t("code",[s._v("安装epel yum源")])]),s._v(" "),t("pre",[t("code",[s._v("rpm -ivh  http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm\n")])]),s._v(" "),t("p",[s._v("用过的都知道，此源位于国外，国内访问很慢。那我们大可以把yum源换成腾讯或者是ucloud的地址即可！")]),s._v(" "),t("p",[s._v("但你有没发觉上面的地址不能访问呢？是的，我们发现这域名指向了腾讯云的内网。")]),s._v(" "),t("p",[s._v("没关系，在腾讯云内通过nginx使用反向代理建立一个mirrors吧，nginx配置信息如下，其中mirrors.linux48.com改成你自己的服务器地址。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_190_46_centos /etc/nginx/conf.d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim mirrors.linux48.com.conf ")]),s._v("\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name mirrors.linux48.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass    http://mirrors.tencentyun.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_redirect default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("service nginx restart")]),s._v(" 即可访问 http://mirrors.linux48.com/ 是不是很赞呢！")]),s._v(" "),t("p",[s._v("附腾讯云的"),t("code",[s._v("epel.repo")]),s._v("和"),t("code",[s._v("centos.repo")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tx-dispatch ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/yum.repos.d/epel.repo ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("epel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Enterprise Linux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/epel/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("failovermethod")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("priority\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6\n~                                                                                                                                                                                                                                           \n                                                                                                                                                                                                                                        \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_190_46_centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/yum.repos.d/centos.repo ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tlinux"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Qcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/ustc/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/os/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("updates"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tlinux"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Qcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/ustc/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/updates/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("centosplus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tlinux"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Qcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/ustc/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/centosplus/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("contrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tlinux"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Qcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/ustc/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/contrib/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tlinux"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Qcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/ustc/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/cr/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("extras"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tlinux"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Qcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/ustc/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/extras/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fasttrack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tlinux"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Qcloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.tencentyun.com/centos/ustc/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/fasttrack/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n~                                                                                                                                                                                                                                           \n                                                                                                                                                                                                                                           \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_190_46_centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);