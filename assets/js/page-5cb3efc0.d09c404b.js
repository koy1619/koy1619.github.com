(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{454:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux下删除乱码文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下删除乱码文件","aria-hidden":"true"}},[t._v("#")]),t._v(" linux下删除乱码文件")]),t._v(" "),a("p",[t._v("根据inode 来修改或删除linux 下乱码的文件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建测试文件：\ntouch 1?.txt")])]),t._v(" "),a("li",[a("p",[t._v("查询inode ：")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("oracle@test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ ll -i\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14694452")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17956913")]),t._v(" -rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" oracle oinstall          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":24 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("?.txt\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("修改测试文件名：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -inum "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17956913")]),t._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" file.txt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("检查修改结果")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("oracle@test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ ll\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14694452")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" oracle oinstall          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":24 file.txt\n")])])]),a("p",[t._v("记录：删除乱码的文件可使用")]),t._v(" "),a("pre",[a("code",[t._v("find . -inum 17956913 -exec rm {} \\;")])])])}),[],!1,null,null,null);s.default=e.exports}}]);