(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{466:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"centos6-2升级python后处理sqlite3库事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos6-2升级python后处理sqlite3库事件"}},[s._v("#")]),s._v(" centos6.2升级python后处理sqlite3库事件")]),s._v(" "),n("p",[s._v("前段时间服务器升级了python，现在又需要 Python Sqlite 3 支持库，由于centos6.2自带了SQLite version 3.6.20，所以此处就不赘述sqlite3的安装了，下文会提到升级sqlite3")]),s._v(" "),n("p",[s._v("下面说一下此事件的过程：")]),s._v(" "),n("p",[s._v("由于centos.2 默认安装的python版本是2.6。之前服务器升级到python2.7.2之后，导入sqlite3报错：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" sqlite3  \nTraceback "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  \nFile "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stdin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(", line "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \nFile /usr/local/lib/python2.7/sqlite3/__init__.py, line "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \nfrom dbapi2 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" *  \nFile /usr/local/lib/python2.7/sqlite3/dbapi2.py, line "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \nfrom _sqlite3 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" *  \nImportError: No module named _sqlite3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("解决办法：")]),s._v(" "),n("p",[s._v("centos 6.2 默认没有安装sqlite-devel，所以要先安装sqlite-devel，再编译升级python，才可以使用sqlite3库。")]),s._v(" "),n("p",[s._v("1、先安装sqlite-devel：")]),s._v(" "),n("pre",[n("code",[s._v("yum install -y sqlite-devel\n")])]),s._v(" "),n("p",[s._v("2、之后编译安装python 2.7.2")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" vxf Python-2.7.2.tar\n\t./configure\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v('3.如果已经升级python则上一步只是重新编译，如果需要升级请参考"Centos平滑升级python事件"')]),s._v(" "),n("p",[s._v("4.验证")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python  ")]),s._v("\nPython "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".2 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default, Aug "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2012")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":37:32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GCC "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(".6 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20120305")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Red Hat "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(".6-4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" on linux2  \nType help, copyright,credits or license "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information.  \n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" sqlite3  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);