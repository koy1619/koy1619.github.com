(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{468:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("前段时间服务器升级了python，现在又需要 Python Sqlite 3 支持库，由于centos6.2自带了SQLite version 3.6.20，所以此处就不赘述sqlite3的安装了，下文会提到升级sqlite3")]),s._v(" "),a("p",[s._v("下面说一下此事件的过程")]),s._v(" "),a("p",[s._v("由于centos.2 默认安装的python版本是2.6。之前服务器升级到python2.7.2之后，导入sqlite3报错：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" sqlite3  \nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  \nFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stdin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \nFile /usr/local/lib/python2.7/sqlite3/__init__.py, line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \nfrom dbapi2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" *  \nFile /usr/local/lib/python2.7/sqlite3/dbapi2.py, line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \nfrom _sqlite3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" *  \nImportError: No module named _sqlite3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("解决办法：")]),s._v(" "),a("p",[s._v("centos 6.2 默认没有安装sqlite-devel，所以要先安装sqlite-devel，再编译升级python，才可以使用sqlite3库。")]),s._v(" "),a("p",[s._v("1、先安装sqlite-devel：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y sqlite-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、之后编译安装python 2.7.2")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" vxf Python-2.7.2.tar\n./configure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v('3.如果已经升级python则上一步只是重新编译，如果需要升级请参考"Centos平滑升级python事件"')]),s._v(" "),a("p",[s._v("4.验证")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python  ")]),s._v("\nPython "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default, Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2012")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":37:32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GCC "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(".6 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20120305")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Red Hat "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(".6-4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" on linux2  \nType help, copyright,credits or license "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information.  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" sqlite3  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);