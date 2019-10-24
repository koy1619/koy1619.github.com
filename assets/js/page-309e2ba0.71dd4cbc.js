(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{415:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" install")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##############install mysqlsla################")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/daniel-nichter/hackmysql.com.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hackmysql.com/mysqlsla/\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y perl perl-DBI perl-Time-HiRes perl-DBD-MySQL\nperl Makefile.PL \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/mysql/binlog/\nmysqlsla -lt slow  -sf "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+select"')]),s._v(" -top "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("  slow\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"crontab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontab"}},[s._v("#")]),s._v(" crontab")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" 09 * * *    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /opt/slowlog/mysqlsla.sh\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" opt/slowlog/mysqlsla.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATE2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y%m%d"')]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1day"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/slowlog\n\ngunzip -c /nas/DB120/logs/slowlog/slowquery_3.log."),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATE")]),s._v("*  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" slowquery120\n\n/usr/local/bin/mysqlsla -lt  slow -top "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -sort t_sum  slowquery120 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 120_slow_t_sum_"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATE2")]),s._v(".sql\n\n/usr/local/bin/mysqlsla -lt  slow -top "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -sort c_sum  slowquery120 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 120_slow_c_sum_"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATE2")]),s._v(".sql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);