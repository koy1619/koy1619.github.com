(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{463:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("误卸载python导致yum无法使用,所以要升级python不能卸载之前的版本，由于源码安装的python都是平滑安装的，它不会覆盖原python目录而是新建目录安装的")]),s._v(" "),a("p",[s._v("所以需要升级python版本的源码安装就是了")]),s._v(" "),a("p",[s._v("1.源码安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" jxvf  Python2.7.2.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Python2.7.2\n./configure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("2.查看Python版本：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/bin/python2.7 -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.建立软连接，使系统默认的python指向python2.7"),a("br"),s._v("\n正常情况下即使python2.7安装成功后，系统默认指向的python仍然是2.6.6版本，考虑到yum是基于python2.6.6才能正常工作"),a("br"),s._v("\n所以需要将系统默认的python指向到2.6版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/python  /usr/bin/python.bak\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s //usr/local/bin/python2.7 /usr/bin/python\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("4.检验python指向是否成功")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("python -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5.解决系统python软链接指向python2.7版本后，yum不能正常工作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/bin/yum\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将文本编辑显示的#/usr/bin/python修改为#/usr/bin/python2.6，保存修改")])])}),[],!1,null,null,null);n.default=e.exports}}]);