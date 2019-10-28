(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{392:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("以前写过一篇mysql的主从搭建\n最近在Centos6.2上配置MySQL5.5.25的主从复制时在my.cnf里面设置好主从的参数后，MySQL提示PID失败无法启动，查看mysql.err发现unknown variable ‘master-host=master_host′"),t("br"),s._v("\nGoogle了一下，据网上消息介绍，Mysql版本从5.1.7以后开始就不支持“master-host” 写进my.cnf类似的参数。")]),s._v(" "),t("p",[s._v("而是通过如下方式：")]),s._v(" "),t("p",[t("strong",[s._v("主数据库设置")])]),s._v(" "),t("p",[s._v("my.cnf配置就一项："),t("br"),s._v("\nserver-id = 1"),t("br"),s._v("\n然后给从主机创建用来同步的mysql用户")]),s._v(" "),t("pre",[t("code",[s._v("grant replication slave,reload,super on *.* to backup@192.168.1.87 identified by 123456;\nservice mysqld restart\n")])]),s._v(" "),t("p",[t("strong",[s._v("从数据库设置")])]),s._v(" "),t("p",[s._v("my.cnf只要添加两项就ok了：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server-id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \nreplicate-do-db "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mydatabase "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#需要同步的库名，不填默认同步所有库")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CHANGE MASTER TO  \n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MASTER_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master_host_name,  \n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MASTER_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("back,\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MASTER_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(",  \n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MASTER_LOG_FILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql-bin.000027,  \n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MASTER_LOG_POS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5963597")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("pre",[t("code",[s._v("service mysqld restart\n")])]),s._v(" "),t("p",[s._v("其中master_log_file和master_log_pos通过在主数据库show master status;得到。")]),s._v(" "),t("p",[s._v("端口不是默认端口的话，如master_port=3307，不要加引号。")]),s._v(" "),t("p",[s._v("然后执行")]),s._v(" "),t("p",[s._v("start slave;\nstart master;\nshow一下\nshow slave status\\G;")])])}),[],!1,null,null,null);a.default=r.exports}}]);