(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{374:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("show slave status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 1062error  \nstop slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sql_slave_skip_counter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##1是指跳过一个错误 ")]),s._v("\nslave start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nshow slave status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看正常")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("强制跳过1062错误了，修改从库的/etc/my.cnf文件"),a("br"),s._v("\n在[mysqld]下面加入了一行"),a("br"),s._v(" "),a("code",[s._v("slave-skip-errors = 1062")]),s._v(" (忽略所有的1062错误)")]),s._v(" "),a("p",[s._v("注：此法只能应急，造成的后果是主从数据差异，如果对于数据一致性要求极高的，请不要使用此方案！切记！！")])])}),[],!1,null,null,null);t.default=e.exports}}]);