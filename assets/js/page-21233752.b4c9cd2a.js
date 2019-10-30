(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{495:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("由于 redhat的yum在线更新是收费的，如果没有注册的话不能使用，如果要使用，需将redhat的yum卸载后，重启安装，再配置其他源.")])]),s._v(" "),t("p",[s._v("由于 redhat的yum在线更新是收费的，如果没有注册的话不能使用，如果要使用，需将redhat的yum卸载后，重启安装，再配置其他源.")]),s._v(" "),t("h2",{attrs:{id:"删除redhat原有的yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除redhat原有的yum"}},[s._v("#")]),s._v(" 删除redhat原有的yum")]),s._v(" "),t("pre",[t("code",[s._v("rpm -aq|grep yum|xargs rpm -e --nodeps \n")])]),s._v(" "),t("h2",{attrs:{id:"下载yum安装文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载yum安装文件"}},[s._v("#")]),s._v(" 下载yum安装文件")]),s._v(" "),t("p",[s._v("注意，由于官方不断更新版本，如果下载时找不到文件，就到：http://mirrors.163.com/centos/6/os/x86_64/Packages 上查找相应的头文件。然后再下载。")]),s._v(" "),t("pre",[t("code",[s._v("wget http://mirrors.163.com/centos/6/os/x86_64/Packages/yum-3.2.29-60.el6.centos.noarch.rpm\nwget http://mirrors.163.com/centos/6/os/x86_64/Packages/yum-metadata-parser-1.1.2-16.el6.x86_64.rpm\nwget http://mirrors.163.com/centos/6/os/x86_64/Packages/yum-plugin-fastestmirror-1.1.30-30.el6.noarch.rpm\nwget http://mirrors.163.com/centos/6/os/x86_64/Packages/python-iniparse-0.3.1-2.1.el6.noarch.rpm\n")])]),s._v(" "),t("h2",{attrs:{id:"进行安装yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进行安装yum"}},[s._v("#")]),s._v(" 进行安装yum")]),s._v(" "),t("pre",[t("code",[s._v("rpm -ivh python-iniparse-0.3.1-2.1.el6.noarch.rpm\nrpm -ivh yum-metadata-parser-1.1.2-16.el6.x86_64.rpm\nrpm -ivh yum-3.2.29-40.el6.centos.noarch.rpm yum-plugin-fastestmirror-1.1.30-14.el6.noarch.rpm\n")])]),s._v(" "),t("p",[s._v("注意最后两个包必需同时安装，否则会相互依赖")]),s._v(" "),t("h2",{attrs:{id:"配置源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置源"}},[s._v("#")]),s._v(" 配置源")]),s._v(" "),t("p",[s._v("新建/etc/yum.repos.d/CentOS6-Base-163.repo\n内容如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Base - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/os/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=os")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#released updates")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("updates"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Updates - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/updates/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=updates")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#additional packages that may be useful")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("extras"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Extras - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/extras/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=extras")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#additional packages that extend functionality of existing packages")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("centosplus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Plus - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/centosplus/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=centosplus")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#contrib - packages by Centos Users")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("contrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS-6 - Contrib - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v(".com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.163.com/centos/6/contrib/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mirrorlist=http://mirrorlist.centos.org/?release=6&arch=$basearch&repo=contrib")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-6\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br")])]),t("h2",{attrs:{id:"yum-clean-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-clean-all"}},[s._v("#")]),s._v(" yum clean all")]),s._v(" "),t("h2",{attrs:{id:"yum-install-vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-install-vim"}},[s._v("#")]),s._v(" yum install vim")]),s._v(" "),t("p",[s._v("测试一下可不可以用")])])}),[],!1,null,null,null);a.default=e.exports}}]);