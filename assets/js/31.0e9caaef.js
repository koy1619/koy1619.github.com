(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{341:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-you-cant-specify-target-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-you-cant-specify-target-table","aria-hidden":"true"}},[t._v("#")]),t._v(" mysql You cant specify target table")]),t._v(" "),a("p",[t._v("今天在写SQL语句的时候遇到一个比较特殊的问题。\nmysql 语句如下:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" \n  pms_project_product \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v("\n  area_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    area_list \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n    pms_project_product \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48468")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  area_list_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    area_list_name \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n    pms_project_product \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48468")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47098")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),t._v(" "),a("p",[t._v("运行时提出如下提示： ** You can't specify target table 'pms_project_product' for update in FROM clause **")]),t._v(" "),a("p",[t._v("运行 set 里面的 select 语句:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n         area_list\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n         pms_project_product\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48468")]),t._v("\n")])])]),a("p",[t._v("可以正确 select 正确结果。再把结果直接写到 ** SET area_list = **里面，改后语句如下：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" \n  pms_project_product \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v("\n  area_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  area_list_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47098")]),t._v("\n")])])]),a("p",[t._v("再运行可以正确执行更新。")]),t._v(" "),a("p",[t._v("原因是：mysql中不能这么用。 （等待mysql升级吧）。那串英文错误提示就是说，不能先select出同一表中的某些值，")]),t._v(" "),a("p",[t._v("再update这个表(在同一语句中)。 于是我打算改用临时表的方案。")]),t._v(" "),a("p",[t._v("改写后的 sql 如下所示，大家仔细区别一下。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" \n  pms_project_product \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v("\n  area_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    tmp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("area_list \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" pms_project_product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" tmp1\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" tmp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48468")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  area_list_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    tmp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("area_list_name \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" pms_project_product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" tmp2 \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" tmp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48468")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" activity_product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47098")]),t._v("\n")])])]),a("p",[t._v("也就是说将select出的结果再通过临时表在select一遍，这样就规避了错误。注意，这个问题只出现于mysql，mssql和oracle不会出现此问题。")])])}),[],!1,null,null,null);s.default=e.exports}}]);