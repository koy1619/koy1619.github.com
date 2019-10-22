(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{363:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql慢日志分析工具mysqlsla"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql慢日志分析工具mysqlsla","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL慢日志分析工具mysqlsla")]),s._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" install")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##############install mysqlsla################")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/daniel-nichter/hackmysql.com.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hackmysql.com/mysqlsla/\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y perl perl-DBI perl-Time-HiRes perl-DBD-MySQL\nperl Makefile.PL \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/mysql/binlog/\nmysqlsla -lt slow  -sf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+select"')]),s._v(" -top "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("  slow\n")])])]),t("h2",{attrs:{id:"crontab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crontab","aria-hidden":"true"}},[s._v("#")]),s._v(" crontab")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" 09 * * *    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /opt/slowlog/mysqlsla.sh\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" opt/slowlog/mysqlsla.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATE2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y%m%d"')]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1day"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/slowlog\n\ngunzip -c /nas/DB120/logs/slowlog/slowquery_3.log."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATE")]),s._v("*  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" slowquery120\n\n/usr/local/bin/mysqlsla -lt  slow -top "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -sort t_sum  slowquery120 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 120_slow_t_sum_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATE2")]),s._v(".sql\n\n/usr/local/bin/mysqlsla -lt  slow -top "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -sort c_sum  slowquery120 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 120_slow_c_sum_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATE2")]),s._v(".sql\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);