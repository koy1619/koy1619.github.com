(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{379:function(r,t,a){"use strict";a.r(t);var o=a(2),e=Object(o.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"oracle-startup-failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-startup-failure"}},[r._v("#")]),r._v(" oracle startup failure")]),r._v(" "),a("p",[r._v("SQL> startup"),a("br"),r._v("\nORA-01078: failure in processing system parameters"),a("br"),r._v("\nLRM-00109: could not open parameter file ‘/data/oracle/product/11.2.0/db_1/dbs/initORA10G.ora’")]),r._v(" "),a("p",[r._v("查找文件，不存在，估计是非法关机造成的。")]),r._v(" "),a("p"),r._v(" "),a("p",[a("strong",[r._v("解决方法：")])]),r._v(" "),a("p",[r._v("将$ORACLE_BASE/admin/数据库名称/pfile目录下的init.ora.012009233838形式的文件copy到$ORACLE_HOME/dbs目录下initoracle.ora即可。（注：initoracle.ora中的oracle为你的实例名 即我的为 initora10g.ora）")]),r._v(" "),a("p"),r._v(" "),a("p",[r._v("[root@localhost dbs]# cp init.ora.721200911530 $ORACLE_HOME/dbs/initora10g.ora")]),r._v(" "),a("p"),r._v(" "),a("p",[r._v("然后继续切换到oracle 帐号,连接到 sqlplus,运行 startup")])])}),[],!1,null,null,null);t.default=e.exports}}]);