(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{445:function(n,t,o){"use strict";o.r(t);var p=o(2),r=Object(p.a)({},(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"centos平滑升级python事件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#centos平滑升级python事件"}},[n._v("#")]),n._v(" Centos平滑升级python事件")]),n._v(" "),o("p",[n._v("误卸载python导致yum无法使用,所以要升级python不能卸载之前的版本，由于源码安装的python都是平滑安装的，它不会覆盖原python目录而是新建目录安装的")]),n._v(" "),o("p",[n._v("所以需要升级python版本的源码安装就是了\n")]),n._v(" "),o("p",[n._v("1.源码安装"),o("br"),n._v("\ntar jxvf  Python2.7.2.tar.bz2\ncd Python2.7.2\n./configure\nmake\t\nmake install")]),n._v(" "),o("p",[n._v("2.查看Python版本：")]),n._v(" "),o("pre",[o("code",[n._v("/usr/local/bin/python2.7 -V\n")])]),n._v(" "),o("p",[n._v("3.建立软连接，使系统默认的python指向python2.7"),o("br"),n._v("\n正常情况下即使python2.7安装成功后，系统默认指向的python仍然是2.6.6版本，考虑到yum是基于python2.6.6才能正常工作"),o("br"),n._v("\n所以需要将系统默认的python指向到2.6版本")]),n._v(" "),o("pre",[o("code",[n._v("mv /usr/bin/python  /usr/bin/python.bak\nln -s //usr/local/bin/python2.7 /usr/bin/python\n")])]),n._v(" "),o("p",[n._v("4.检验python指向是否成功")]),n._v(" "),o("pre",[o("code",[n._v("python -V\n")])]),n._v(" "),o("p",[n._v("5.解决系统python软链接指向python2.7版本后，yum不能正常工作"),o("br"),n._v("\nvi /usr/bin/yum\n将文本编辑显示的#/usr/bin/python修改为#/usr/bin/python2.6，保存修改")])])}),[],!1,null,null,null);t.default=r.exports}}]);