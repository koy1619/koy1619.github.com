(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{317:function(l,s,e){"use strict";e.r(s);var o=e(2),_=Object(o.a)({},(function(){var l=this,s=l.$createElement,e=l._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[e("h1",{attrs:{id:"mysql慢查询设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql慢查询设置","aria-hidden":"true"}},[l._v("#")]),l._v(" Mysql慢查询设置")]),l._v(" "),e("p",[l._v("有时候需要对sql语句进行优化，就需要查看慢查询语句"),e("br"),l._v("\nmysql>show variables like %slow%; 查看慢查询配置"),e("br"),l._v("\n设置方法有下面两种：")]),l._v(" "),e("p",[l._v("1.进入mysql设置不用重启服务,但是重启mysql会失效")]),l._v(" "),e("pre",[e("code",[l._v("mysql> set global log_slow_queries=on; #开启慢查询log  \nmysql> set global slow_query_log_file=/data/mysql/mysql.slow.log; 指定log路径  \nmysql> set global long_query_time=1; #设置超过1s的查询记录到log\n")])]),l._v(" "),e("p",[l._v("2.修改my.cnf，需要重启mysql")]),l._v(" "),e("p",[l._v("5.0版"),e("br"),l._v("\nlog-slow-queries = /data/mysqldata/slowquery.log #日志目录"),e("br"),l._v("\nlong_query_time = 1 #记录下查询时间查过1秒"),e("br"),l._v("\nlog-queries-not-using-indexes #表示记录下没有使用索引的查询")]),l._v(" "),e("p",[l._v("5.1.29版後")]),l._v(" "),e("pre",[e("code",[l._v("slow_query_log  \nslow_query_log_file = /var/log/mysql-slow.log  \nlong_query_time = 5\n")])])])}),[],!1,null,null,null);s.default=_.exports}}]);