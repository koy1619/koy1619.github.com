(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{468:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--在`menber`表的`name`字段前面按照条件批量加`jc100`这个字符串")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("usrdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("menber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jc100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" provice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'678'")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" input_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2015-07-30 00:00:00'")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2015-07-30 23:59:59'")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("mysql的**"),a("code",[s._v("CONCAT()")]),s._v("**函数用于将多个字符串连接成一个字符串，是最重要的mysql函数之一。")]),s._v(" "),a("p",[s._v("如果要在字段后面添加字符串则是这样写")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("usrdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("menber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("jc100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" provice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'678'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" input_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("BETWEEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2015-07-30 00:00:00'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2015-07-30 23:59:59'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);