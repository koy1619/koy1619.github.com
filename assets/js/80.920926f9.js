(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{385:function(r,e,t){"use strict";t.r(e);var o=t(2),n=Object(o.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"误卸载python导致yum无法使用修复事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#误卸载python导致yum无法使用修复事件","aria-hidden":"true"}},[r._v("#")]),r._v(" 误卸载python导致yum无法使用修复事件")]),r._v(" "),t("p",[r._v("由于服务器需要升级python，参照了一篇坑爹的文章卸载了旧版python\n卸载旧的python"),t("br"),r._v(" "),t("code",[r._v("sudo rpm -evf --nodeps python")]),t("br"),r._v("\n导致yum无法使用  "),r._v(" "),t("code",[r._v("# yum -v There was a problem importing one of the Python modules<br /> required to run yum. The error leading to this problem was:<br /> No module named yum<br /> Please install a package which provides this module, or<br /> verify that the module is installed correctly.<br /> It's possible that the above module doesn't match the<br /> current version of Python, which is:<br /> 2.4.3 (#1, Sep 3 2009, 15:37:12)<br /> [GCC 4.1.2 20080704 (Red Hat 4.1.2-46)]<br /> If you cannot solve this problem yourself, please go to<br /> the yum faq at:http://wiki.linux.duke.edu/YumFaq")])]),r._v(" "),t("p",[r._v("由于yum是基于python"),t("br"),r._v("\ncentos6.2默认使用python2.6.6，我又源码安装了一遍python2.6.6，"),t("br"),r._v("\n修改了vi /usr/bin/yum"),t("br"),r._v("\n#/usr/bin/python修改为#/usr/bin/python2.4"),t("br"),r._v("\n执行yum-v还是不行~~")]),r._v(" "),t("p",[r._v("于是就从centos6.2光盘找python和yum的rpm包安装，一番尝试之后，发现有N个package需要重新安装，这里就不写尝试过程，终于搞定！")]),r._v(" "),t("p",[r._v("解决方法如下")]),r._v(" "),t("blockquote",[t("p",[r._v("cnetos6.2*64光盘rpm包地址http://mirrors.ustc.edu.cn/centos/6.2/os/x86_64/Packages/")]),r._v(" "),t("p",[r._v("需要安装这几个包"),t("br"),r._v("\npython-2.6.6-29.el6.x86_64.rpm"),t("br"),r._v("\npython-devel-2.6.6-29.el6.x86_64.rpm"),t("br"),r._v("\npython-iniparse-0.3.1-2.1.el6.noarch.rpm"),t("br"),r._v("\npython-setuptools-0.6.10-3.el6.noarch.rpm"),t("br"),r._v("\npython-urlgrabber-3.9.1-8.el6.noarch.rpm"),t("br"),r._v("\nrpm-python-4.8.0-19.el6.x86_64.rpm"),t("br"),r._v("\nyum-3.2.29-22.el6.centos.noarch.rpm"),t("br"),r._v("\nyum-metadata-parser-1.1.2-16.el6.x86_64.rpm"),t("br"),r._v("\npython-pycurl-7.19.0-8.el6.x86_64.rpm")]),r._v(" "),t("p",[r._v("注意rpm命令，必须要追加 –replacepkgs 参数，强制其重新安装，否则rpm会报告说package已安装。"),t("br"),r._v("\nrpm -Uvh –replacepkgs ***.rpm"),t("br"),r._v("\n如果仍然无法运行Yum，则运行 Python，import yum，查询下缺少什么东西。")]),r._v(" "),t("p",[r._v("# python"),t("br"),r._v("\nPython 2.6.6 (r266:84292, Dec 7 2011, 20:48:22)"),t("br"),r._v("\n[GCC 4.4.6 20110731 (Red Hat 4.4.6-3)] on linux2"),t("br"),r._v("\nType “help”, “copyright”, “credits” or “license” for more information.")]),r._v(" "),t("blockquote",[t("blockquote",[t("blockquote",[t("p",[r._v("import yum")])])])]),r._v(" "),t("p",[r._v("如果仍有packag 缺失，import yum，会提示相关的错误，查找对应的rpm，装上即可，重复此过程，直到 yum 正常。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);