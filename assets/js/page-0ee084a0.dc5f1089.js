(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{378:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql5-1主从服务设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql5-1主从服务设置"}},[s._v("#")]),s._v(" Mysql5.1主从服务设置")]),s._v(" "),e("p",[s._v("Mysql主从服务设置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("master IP:192.168.1.84\nslave IP:192.168.1.87\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",[e("li")]),s._v(" "),e("p",[s._v("编辑master的/etc/my.cnf 在[mysqld]选项中加入下列两行：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Server-id=1 //标识为主库\nLog-bin //设置需要记录log, 如果有特殊要求可以设置特定的数据库作为同步数据库：binlog-do-db=DB_name[/php]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li")]),s._v(" "),e("p",[s._v("考虑到安全问题，增加用户“backup”作为slave登陆备份数据的用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("useradd backup\n\npasswd 123456\n\n/etc/init.d/mysqld restart\n\nmysql -u root -p\n\nmysql> grant replication slave,reload,super on *.* to backup@192.168.1.87 identified by 123456;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li")]),s._v(" "),e("p",[s._v("slave连接master测试")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/usr/bin/mysql –u backup –p123456 –h192.168.1.84\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("出现mysql提示符就OK啦!")]),s._v(" "),e("p",[s._v("4.关闭slave数据库,编辑它的/etc/my.cnf 在选项[mysqld]下增加以下几列")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Server-id=2 //标识slave 只要不和master相同就可以了  \nMaster-host=192.168.1.84  \nMaster-user=backup //同步用户  \nMaster-password=123456[/php]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li")]),s._v(" "),e("p",[s._v("启动slave,并确定slave、master都已启动，再让slave进行同步master数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/etc/init.d/mysqld start\n\nmysql\n\nmysql>load data from master; (这一步的功能相当于在master中直接拷贝数据到slave)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li")]),s._v(" "),e("p",[s._v("测试")]),s._v(" "),e("p",[s._v("在master中：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql>create database chenggong;\nmysql>use chenggong;\nmysql>create table worker (name char(8),addr char(20));\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后进入slave：mysql>show databases; (结果中应有“chenggong”)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql>Use chenggong;\nmysql>show tables; （结果中应有“worker”）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("另外："),e("code",[s._v("mysql>SHOW SLAVE STATUS\\G；")])])])}),[],!1,null,null,null);a.default=t.exports}}]);