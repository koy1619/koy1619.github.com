(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{340:function(s,t,r){"use strict";r.r(t);var e=r(1),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"mysql主从同步故障事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从同步故障事件","aria-hidden":"true"}},[s._v("#")]),s._v(" MYSQL主从同步故障事件")]),s._v(" "),r("p",[s._v("从库show slave status \\G; 有1062error"),r("br"),s._v("\nstop slave;"),r("br"),s._v("\nset global sql_slave_skip_counter=1; （1是指跳过一个错误）"),r("br"),s._v("\nslave start;"),r("br"),s._v("\n再show slave status \\G;查看正常")]),s._v(" "),r("p",[s._v("强制跳过1062错误了，修改从库的/etc/my.cnf文件"),r("br"),s._v("\n在[mysqld]下面加入了一行"),r("br"),s._v("\nslave-skip-errors = 1062 (忽略所有的1062错误)")]),s._v(" "),r("p",[s._v("注：此法只能应急，造成的后果是主从数据差异，如果对于数据一致性要求极高的，请不要使用此方案！切记！！")])])}),[],!1,null,null,null);t.default=a.exports}}]);