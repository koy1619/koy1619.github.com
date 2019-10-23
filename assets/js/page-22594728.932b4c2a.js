(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{400:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql中把一个表的数据插入到另一个表中的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql中把一个表的数据插入到另一个表中的实现"}},[s._v("#")]),s._v(" MySql中把一个表的数据插入到另一个表中的实现")]),s._v(" "),t("p",[s._v("1.如果2张表的字段一致，并且希望插入全部数据，可以用这种方法：")]),s._v(" "),t("pre",[t("code",[s._v("INSERT INTO 目标表 SELECT * FROM 来源表;\ninsert into insertTest select * from insertTest2;\n")])]),s._v(" "),t("p",[s._v("2.如果只希望导入指定字段，可以用这种方法：")]),s._v(" "),t("pre",[t("code",[s._v("INSERT INTO 目标表 (`字段1`, `字段2`, ...) SELECT `字段1`, `字段2`, ... FROM 来源表;(这里的话字段必须保持一致)\ninsert into insertTest2(`id`) select `id` from insertTest2;\n")])]),s._v(" "),t("p",[s._v("3.如果您需要只导入目标表中不存在的记录，可以使用这种方法：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("INSERT INTO 目标表  \n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("字段1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("字段2"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n SELECT "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("字段1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("字段2"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".  \n FROM 来源表  \n WHERE not exists "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("select * from 目标表  \n where 目标表.比较字段 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 来源表.比较字段"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n   \n "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(".插入多条记录：\ninsert into insertTest2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nfrom insertTest\nwhere not exists "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("select * from insertTest2\nwhere insertTest2."),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("insertTest.id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(".插入一条记录：\ninsert into insertTest    \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \nSELECT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'liudehua'")]),s._v("   \nFROM dual    \nWHERE not exists "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("select * from insertTest    \nwhere insertTest."),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);