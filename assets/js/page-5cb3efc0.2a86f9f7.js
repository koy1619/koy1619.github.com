(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{507:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("根据inode 来修改或删除linux 下乱码的文件")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建测试文件：\ntouch 1?.txt")])]),s._v(" "),a("li",[a("p",[s._v("查询inode ：")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oracle@test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ll -i\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14694452")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17956913")]),s._v(" -rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" oracle oinstall          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":24 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("?.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("修改测试文件名：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -inum "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17956913")]),s._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" file.txt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("检查修改结果")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oracle@test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ll\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14694452")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" oracle oinstall          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":24 file.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("记录：删除乱码的文件可使用")]),s._v(" "),a("pre",[a("code",[s._v("find . -inum 17956913 -exec rm {} \\;")])])])}),[],!1,null,null,null);t.default=e.exports}}]);