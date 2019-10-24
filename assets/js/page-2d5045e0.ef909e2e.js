(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{404:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本文实例，运行于 MySQL 5.0 及以上版本。")]),t._v(" "),a("p",[t._v("MySQL 赋予用户权限命令的简单格式可概括为：")]),t._v(" "),a("pre",[a("code",[t._v("grant 权限 on 数据库对象 to 用户\n")])]),t._v(" "),a("h2",{attrs:{id:"普通数据库用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通数据库用户权限"}},[t._v("#")]),t._v(" 普通数据库用户权限")]),t._v(" "),a("p",[t._v("一、grant 普通数据用户，查询、插入、更新、删除 数据库中所有表数据的权利。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" common_user"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" common_user"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" common_user"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" common_user"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("或者，用一条 MySQL 命令来替代：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" common_user"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'%'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"数据库开发人员权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库开发人员权限"}},[t._v("#")]),t._v(" 数据库开发人员权限")]),t._v(" "),a("p",[t._v("二、grant 数据库开发人员，创建表、索引、视图、存储过程、函数。。。等权限。")]),t._v(" "),a("p",[t._v("grant 创建、修改、删除 MySQL 数据表结构权限。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" developer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.0.%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" developer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.0.%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" developer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.0.%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("grant 操作 MySQL 外键权限。")]),t._v(" "),a("pre",[a("code",[t._v("grant references on testdb.* to developer@'192.168.0.%';\n")])]),t._v(" "),a("p",[t._v("grant 操作 MySQL 临时表权限。")]),t._v(" "),a("pre",[a("code",[t._v("grant create temporary tables on testdb.* to developer@'192.168.0.%';\n")])]),t._v(" "),a("p",[t._v("grant 操作 MySQL 索引权限。")]),t._v(" "),a("pre",[a("code",[t._v("grant index on testdb.* to developer@'192.168.0.%';\n")])]),t._v(" "),a("p",[t._v("grant 操作 MySQL 视图、查看视图源代码 权限。")]),t._v(" "),a("pre",[a("code",[t._v("grant create view on testdb.* to developer@'192.168.0.%';\ngrant show   view on testdb.* to developer@'192.168.0.%';\n")])]),t._v(" "),a("p",[t._v("grant 操作 MySQL 存储过程、函数 权限。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("routine")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" developer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.0.%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- now, can show procedure status")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("routine")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" developer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.0.%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- now, you can drop a procedure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("execute")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" testdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" developer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.0.%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"普通dba权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通dba权限"}},[t._v("#")]),t._v(" 普通DBA权限")]),t._v(" "),a("p",[t._v("三、grant 普通 DBA 管理某个 MySQL 数据库的权限。")]),t._v(" "),a("pre",[a("code",[t._v("grant all privileges on testdb to dba@'localhost'\n")])]),t._v(" "),a("p",[t._v("其中，关键字 “privileges” 可以省略。")]),t._v(" "),a("h2",{attrs:{id:"高级dba权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级dba权限"}},[t._v("#")]),t._v(" 高级DBA权限")]),t._v(" "),a("p",[t._v("四、grant 高级 DBA 管理 MySQL 中所有数据库的权限。")]),t._v(" "),a("pre",[a("code",[t._v("grant all on *.* to dba@'localhost'\n")])]),t._v(" "),a("h2",{attrs:{id:"实际运用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际运用"}},[t._v("#")]),t._v(" 实际运用")]),t._v(" "),a("p",[t._v("五、MySQL grant 权限，分别可以作用在多个层次上。")]),t._v(" "),a("h3",{attrs:{id:"grant-作用在整个-mysql-服务器上："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-作用在整个-mysql-服务器上："}},[t._v("#")]),t._v(" grant 作用在整个 MySQL 服务器上：")]),t._v(" "),a("pre",[a("code",[t._v("grant select on *.* to dba@localhost; \n-- dba 可以查询 MySQL 中所有数据库中的表。\n\ngrant all    on *.* to dba@localhost; \n-- dba 可以管理 MySQL 中的所有数据库\n")])]),t._v(" "),a("h3",{attrs:{id:"grant-作用在单个数据库上："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-作用在单个数据库上："}},[t._v("#")]),t._v(" grant 作用在单个数据库上：")]),t._v(" "),a("pre",[a("code",[t._v("grant select on testdb.* to dba@localhost; \n-- dba 可以查询 testdb 中的表。\n")])]),t._v(" "),a("h3",{attrs:{id:"grant-作用在单个数据表上："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-作用在单个数据表上："}},[t._v("#")]),t._v(" grant 作用在单个数据表上：")]),t._v(" "),a("pre",[a("code",[t._v("grant select, insert, update, delete on testdb.orders to dba@localhost;\n")])]),t._v(" "),a("p",[t._v("这里在给一个用户授权多张表时，可以多次执行以上语句。例如：")]),t._v(" "),a("pre",[a("code",[t._v("grant select(user_id,username) on smp.users to mo_user@'%' identified by '123345';\ngrant select on smp.mo_sms to mo_user@'%' identified by '123345';\n")])]),t._v(" "),a("h3",{attrs:{id:"grant-作用在表中的列上："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-作用在表中的列上："}},[t._v("#")]),t._v(" grant 作用在表中的列上：")]),t._v(" "),a("pre",[a("code",[t._v("grant select(id, se, rank) on testdb.apache_log to dba@localhost;\n")])]),t._v(" "),a("h3",{attrs:{id:"grant-作用在存储过程、函数上："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-作用在存储过程、函数上："}},[t._v("#")]),t._v(" grant 作用在存储过程、函数上：")]),t._v(" "),a("pre",[a("code",[t._v("grant execute on procedure testdb.pr_add to 'dba'@'localhost'\ngrant execute on function testdb.fn_add to 'dba'@'localhost'\n")])]),t._v(" "),a("h2",{attrs:{id:"查看权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看权限"}},[t._v("#")]),t._v(" 查看权限")]),t._v(" "),a("p",[t._v("六、查看 MySQL 用户权限")]),t._v(" "),a("p",[t._v("查看当前用户（自己）权限：")]),t._v(" "),a("pre",[a("code",[t._v("show grants;\n")])]),t._v(" "),a("p",[t._v("查看其他 MySQL 用户权限：")]),t._v(" "),a("pre",[a("code",[t._v("show grants for dba@localhost;\n")])]),t._v(" "),a("h2",{attrs:{id:"撤销权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销权限"}},[t._v("#")]),t._v(" 撤销权限")]),t._v(" "),a("p",[t._v("七、撤销已经赋予给 MySQL 用户权限的权限。")]),t._v(" "),a("p",[t._v("revoke 跟 grant 的语法差不多，只需要把关键字 “to” 换成 “from” 即可：")]),t._v(" "),a("pre",[a("code",[t._v("grant  all on *.* to   dba@localhost;\nrevoke all on *.* from dba@localhost;\n")])]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[t._v("八、MySQL grant、revoke 用户权限注意事项")]),t._v(" "),a("p",[t._v("grant, revoke 用户权限后，该用户只有重新连接 MySQL 数据库，权限才能生效。")]),t._v(" "),a("p",[t._v("如果想让授权的用户，也可以将这些权限 grant 给其他用户，需要选项 “grant option“")]),t._v(" "),a("pre",[a("code",[t._v("grant select on testdb.* to dba@localhost with grant option;\n")])]),t._v(" "),a("p",[t._v("这个特性一般用不到。实际中，数据库权限最好由 DBA 来统一管理。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("遇到 SELECT command denied to user '用户名'@'主机名' for table '表名' 这种错误，解决方法是需要把吧后面的表名授权，即是要你授权核心数据库也要。")]),t._v(" "),a("p",[t._v("我遇到的是SELECT command denied to user 'my'@'%' for table 'proc'，是调用存储过程的时候出现，原以为只要把指定的数据库授权就行了，什么存储过程、函数等都不用再管了，谁知道也要把数据库mysql的proc表授权")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参考：http://zhidao.baidu.com/question/19633785.html")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("mysql授权表共有5个表：user、db、host、tables_priv和columns_priv。")]),t._v(" "),a("p",[t._v("授权表的内容有如下用途：\nuser表\nuser表列出可以连接服务器的用户及其口令，并且它指定他们有哪种全局（超级用户）权限。在user表启用的任何权限均是全局权限，并适用于所有数据库。例如，如果你启用了DELETE权限，在这里列出的用户可以从任何表中删除记录，所以在你这样做之前要认真考虑。")]),t._v(" "),a("p",[t._v("db表\ndb表列出数据库，而用户有权限访问它们。在这里指定的权限适用于一个数据库中的所有表。")]),t._v(" "),a("p",[t._v("host表\nhost表与db表结合使用在一个较好层次上控制特定主机对数据库的访问权限，这可能比单独使用db好些。这个表不受GRANT和REVOKE语句的影响，所以，你可能发觉你根本不是用它。")]),t._v(" "),a("p",[t._v("tables_priv表\ntables_priv表指定表级权限，在这里指定的一个权限适用于一个表的所有列。")]),t._v(" "),a("p",[t._v("columns_priv表\ncolumns_priv表指定列级权限。这里指定的权限适用于一个表的特定列。")]),t._v(" "),a("hr")])}),[],!1,null,null,null);s.default=r.exports}}]);