(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("有时候需要对sql语句进行优化，就需要查看慢查询语句"),t("br"),s._v(" "),t("code",[s._v("mysql>show variables like %slow%;")]),s._v(" 查看慢查询配置"),t("br"),s._v("\n设置方法有下面两种：")]),s._v(" "),t("p",[s._v("1.进入mysql设置不用重启服务,但是重启mysql会失效")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" log_slow_queries"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启慢查询log  ")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" slow_query_log_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 指定log路径  \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" long_query_time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置超过1s的查询记录到log")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("2.修改my.cnf，需要重启mysql")]),s._v(" "),t("p",[s._v("5.0版")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("queries "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysqldata"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("slowquery"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志目录  ")]),s._v("\nlong_query_time "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#记录下查询时间查过1秒  ")]),s._v("\nlog"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("queries"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("indexes "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#表示记录下没有使用索引的查询")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("5.1.29版後")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("slow_query_log  \nslow_query_log_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log  \nlong_query_time "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);