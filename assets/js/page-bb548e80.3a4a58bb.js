(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{332:function(a,e,t){"use strict";t.r(e);var s=t(1),l=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"如何搭master-slave-slave"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何搭master-slave-slave","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何搭master-slave-slave")]),a._v(" "),t("p",[a._v("假设现有M, Sa, Sb，Sa是M的slave, 要将Sb做为Sa的slave，M和Sa的binlog保证都是打开的")]),a._v(" "),t("p",[a._v("在Sa的/etc/my.cnf中[mysqld]组中加入log_slave_updates=1（以保证Sa从M上同步的更新能被记录到binlog中）")]),a._v(" "),t("p",[a._v("将Sa上的mysqld停掉，并清掉Sa上的binlog(注1）")]),a._v(" "),t("p",[a._v("将Sa上的数据Copy到Sb上")]),a._v(" "),t("p",[a._v("启动Sa")]),a._v(" "),t("p",[a._v('启动Sb, change master to master_host="Sa的ip";')]),a._v(" "),t("p",[a._v("在Sa和Sb上start slave")]),a._v(" "),t("p",[a._v('注1：如果Sa上没有清掉binlog，第6步须: change master to master_host="Sa的ip", master_log_file="Sa上最新的binlog"')])])}),[],!1,null,null,null);e.default=l.exports}}]);