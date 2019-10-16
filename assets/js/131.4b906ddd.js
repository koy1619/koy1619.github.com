(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{436:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"red-hat-enterprise-linux-server-yum配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-enterprise-linux-server-yum配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Red Hat Enterprise Linux Server YUM配置")]),s._v(" "),t("p",[s._v("由于 redhat的yum在线更新是收费的，如果没有注册的话不能使用，如果要使用，需将redhat的yum卸载后，重启安装，再配置其他源.\n")]),s._v(" "),t("h2",{attrs:{id:"删除redhat原有的yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除redhat原有的yum","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除redhat原有的yum")]),s._v(" "),t("pre",[t("code",[s._v("rpm -aq|grep yum|xargs rpm -e --nodeps \n")])]),s._v(" "),t("h2",{attrs:{id:"下载yum安装文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载yum安装文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载yum安装文件")]),s._v(" "),t("p",[s._v("注意，由于官方不断更新版本，如果下载时找不到文件，就到：http://mirrors.163.com/centos/6/os/x86_64/Packages 上查找相应的头文件。然后再下载。")]),s._v(" "),t("pre",[t("code",[s._v("wget http://mirrors.163.com/centos/6/os/x86_64/Packages/yum-3.2.29-60.el6.centos.noarch.rpm\nwget http://mirrors.163.com/centos/6/os/x86_64/Packages/yum-metadata-parser-1.1.2-16.el6.x86_64.rpm\nwget http://mirrors.163.com/centos/6/os/x86_64/Packages/yum-plugin-fastestmirror-1.1.30-30.el6.noarch.rpm\nwget http://mirrors.163.com/centos/6/os/x86_64/Packages/python-iniparse-0.3.1-2.1.el6.noarch.rpm\n")])]),s._v(" "),t("h2",{attrs:{id:"进行安装yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进行安装yum","aria-hidden":"true"}},[s._v("#")]),s._v(" 进行安装yum")]),s._v(" "),t("pre",[t("code",[s._v("rpm -ivh python-iniparse-0.3.1-2.1.el6.noarch.rpm\nrpm -ivh yum-metadata-parser-1.1.2-16.el6.x86_64.rpm\nrpm -ivh yum-3.2.29-40.el6.centos.noarch.rpm yum-plugin-fastestmirror-1.1.30-14.el6.noarch.rpm\n")])]),s._v(" "),t("p",[s._v("注意最后两个包必需同时安装，否则会相互依赖")]),s._v(" "),t("h2",{attrs:{id:"配置源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置源","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置源")]),s._v(" "),t("p",[s._v("新建/etc/yum.repos.d/CentOS6-Base-163.repo\n内容如下：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Base - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/os/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=os")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#released updates")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("updates"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Updates - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/updates/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=updates")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#additional packages that may be useful")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("extras"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Extras - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/extras/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=extras")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#additional packages that extend functionality of existing packages")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("centosplus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Plus - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/centosplus/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=centosplus")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#contrib - packages by Centos Users")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("contrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Contrib - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/contrib/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=contrib")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("h2",{attrs:{id:"yum-clean-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-clean-all","aria-hidden":"true"}},[s._v("#")]),s._v(" yum clean all")]),s._v(" "),t("h2",{attrs:{id:"yum-install-vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-install-vim","aria-hidden":"true"}},[s._v("#")]),s._v(" yum install vim")]),s._v(" "),t("p",[s._v("测试一下可不可以用")])])}),[],!1,null,null,null);a.default=e.exports}}]);