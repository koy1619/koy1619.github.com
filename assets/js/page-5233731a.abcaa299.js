(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{372:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"case-when遇上sum或count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-when遇上sum或count","aria-hidden":"true"}},[t._v("#")]),t._v(" case when遇上sum或count")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("每日凌晨12点后统计前一天的数据汇总；并生成统计到一个新的表中")])])]),t._v(" "),a("p",[t._v("新表需求字段如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("解释")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("eg")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("StatisticalTime")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("昨天")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("昨天")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ticket_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ticket_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006100")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ticket_id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SaleNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("售卖总数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("120")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sta IN ('00', '01', '05', '08')")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VerifyNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("核销数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sta='01'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("RefundNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("退款数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sta='05'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UnusedNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("未使用数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sta='00'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ActFailNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("未激活数量")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sta='08'")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("需要按５个维度来分组，求出按这５个维度分组的总数情况"),a("code",[t._v("count")]),t._v("，但同时也需要在这５个维度下求出按不同条件得出的总数，这些不同条件下分别得出的总数相加的和即为不加上条件的情况下的总数\n即\n"),a("code",[t._v("SaleNum＝VerifyNum＋RefundNum＋UnusedNum＋ActFailNum")])])]),t._v(" "),a("p",[t._v("需求SQL")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("statistics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("StatisticalTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ticket_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("SaleNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("VerifyNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("RefundNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("UnusedNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ActFailNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNODB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("statistics")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    DATE_FORMAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("update_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y%m%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" StatisticalTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ticket_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" SaleNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" sta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'01'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" VerifyNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" sta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'05'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" RefundNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" sta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'00'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" UnusedNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" sta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'08'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" ActFailNum\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" sta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'05'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'08'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" DATEDIFF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("update_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NOW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" \n    ticket_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("生成表格如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("StatisticalTime")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ticket_id")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("SaleNum")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("VerifyNum")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("RefundNum")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("UnusedNum")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ActFailNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006144")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("905")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("276")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("629")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006145")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("140")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("140")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006146")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006147")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("57")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("57")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006148")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2292")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1445")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("847")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006149")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("944")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("944")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006150")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("144")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("124")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006151")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("893")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("458")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("435")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("20191015")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000000006152")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1366")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("434")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("932")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])])])]),t._v(" "),a("p",[t._v("之后就是加定时每天0点过后跑。")]),t._v(" "),a("p",[t._v("参考\nhttps://www.iteye.com/blog/raising-2280269")])])}),[],!1,null,null,null);e.default=n.exports}}]);