(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{356:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql双主主键冲突排查修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql双主主键冲突排查修复","aria-hidden":"true"}},[t._v("#")]),t._v(" mysql双主主键冲突排查修复")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("线上A和B互为主主，A为业务写库，B为读库")]),t._v(" "),a("p",[t._v("19号下午收到短信报警A的slave delay，果断VPN上去数据库查看到")]),t._v(" "),a("pre",[a("code",[t._v("Last_SQL_Error: Error 'Duplicate entry '4960446' for key 'transaction_id'' on query. Default database\n")])]),t._v(" "),a("p",[t._v("又是熟悉的主键冲突，但是这个时候不能让业务出现任何问题，就果断在A")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" STOP SLAVE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SET GLOBAL sql_slave_skip_counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" START SLAVE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("经过2次重复的上述操作，同步OK了，然后根据这两条报错的主键ID在两台数据库查询发现都不一样，\n此时我清楚的知道已经有2条数据差异了，如果不及时处理早晚有一天被掩盖的问题会再次爆发出来。")]),t._v(" "),a("p",[t._v("后来经过一些列的排查之后知道问题所在了")]),t._v(" "),a("p",[t._v("因为7月2号晚上在B"),a("code",[t._v("alter")]),t._v("表的时候，导致B锁表，而A还在写入，并且正好在更新服务，导致数据的差异")]),t._v(" "),a("p",[t._v("查"),a("code",[t._v("general log")]),t._v("得知7月19号人为的在B上插入了两条"),a("code",[t._v('transaction_id="4960446"')]),t._v("和"),a("code",[t._v('transaction_id="4960426"')]),t._v("的记录和A的id冲突，导致A同步挂掉")]),t._v(" "),a("p",[t._v("因为A为业务写库，所以现在需要把A上这两条正确的数据插入到B，并在B上面删除错误的。")]),t._v(" "),a("p",[t._v("由于这个是自增的主键，所以还不好操作，下面大概就测试环境详细说明一下复现方案以及解决办法。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"复现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复现方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 复现方案")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("192.168.1.52  模拟线上A 负责写入")]),t._v(" "),a("li",[t._v("192.168.1.42  模拟线上B 负责读取")])])]),t._v(" "),a("h3",{attrs:{id:"设置my-cnf，差开自增id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置my-cnf，差开自增id","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置my.cnf，差开自增ID")]),t._v(" "),a("p",[t._v("52配置")]),t._v(" "),a("pre",[a("code",[t._v("auto-increment-increment=10\nauto-increment-offset=8\n")])]),t._v(" "),a("p",[t._v("42配置")]),t._v(" "),a("pre",[a("code",[t._v("auto-increment-increment=10\nauto-increment-offset=6\n")])]),t._v(" "),a("h3",{attrs:{id:"创建测试表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建测试表","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建测试表")]),t._v(" "),a("p",[t._v("随便在其中一台的test库中创建测试表，双主自动同步到另一台")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("qrpay_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("transaction_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("qrpay_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("transaction_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("transaction_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("896")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"插入测试数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入测试数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 插入测试数据")]),t._v(" "),a("p",[t._v('在52插入测试数据，可以发现"qrpay_id"的值是依照 auto-increment-offset 格式的, 同步过去也是如此')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("INSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v('在42插入测试数据，可以发现"qrpay_id"的值是依照 auto-increment-offset 格式的, 同步过去也是如此')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("INSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"模拟同步异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟同步异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 模拟同步异常")]),t._v(" "),a("p",[t._v("停掉42的同步")]),t._v(" "),a("pre",[a("code",[t._v("slave stop;\n")])]),t._v(" "),a("p",[t._v("并在52上插入数据")]),t._v(" "),a("pre",[a("code",[t._v("INSERT INTO `test` VALUES ('null','7');\n")])]),t._v(" "),a("p",[t._v("在42上插入数据")]),t._v(" "),a("pre",[a("code",[t._v("INSERT INTO `test` VALUES ('null','7');\n")])]),t._v(" "),a("p",[t._v("开启42的同步")]),t._v(" "),a("pre",[a("code",[t._v("slave start;\n")])]),t._v(" "),a("p",[t._v("在两边都show slave status \\G; 可以发现都提示")]),t._v(" "),a("pre",[a("code",[t._v("Error 'Duplicate entry '7' for key 'transaction_id'' on query. Default database: 'test'. Query: 'INSERT INTO `test` VALUES ('null','7')'\n")])]),t._v(" "),a("p",[t._v("因为停掉了42的同步，所以插入到52的数据不会同步到42，并且也在42上面插入了相同值的transaction_id，同步到52的时候就导致了主键重复，最后开启42的同步，双方都互相冲突")]),t._v(" "),a("p",[t._v("这个时候两边主从都是挂掉的，然后两边都跳过这个错误")]),t._v(" "),a("pre",[a("code",[t._v("stop slave;\nset global sql_slave_skip_counter=1;\nslave start;\n")])]),t._v(" "),a("p",[t._v("再show slave status \\G;查看正常")]),t._v(" "),a("h3",{attrs:{id:"模拟数据差异1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟数据差异1","aria-hidden":"true"}},[t._v("#")]),t._v(" 模拟数据差异1")]),t._v(" "),a("p",[t._v("在42上面删掉transaction_id刚才冲突的那条transaction_id='7'的记录,按照qrpay_id找")]),t._v(" "),a("pre",[a("code",[t._v("delete from test where qrpay_id='1166';\n")])]),t._v(" "),a("p",[t._v("继续在52写入测试数据")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("INSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个时候52上面比42的多了一条transaction_id='7'的记录")]),t._v(" "),a("p",[t._v("以上目地是模拟出真实数据库A比B多数据的场景")]),t._v(" "),a("h3",{attrs:{id:"修复同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复同步","aria-hidden":"true"}},[t._v("#")]),t._v(" 修复同步")]),t._v(" "),a("p",[t._v("在42上插入数据")]),t._v(" "),a("pre",[a("code",[t._v("INSERT INTO `test` VALUES ('null','7');\n")])]),t._v(" "),a("p",[t._v("这时因为52上已有transaction_id='7'的记录的值导致52同步挂掉")]),t._v(" "),a("p",[t._v("只有52报")]),t._v(" "),a("pre",[a("code",[t._v("Error 'Duplicate entry '7' for key 'transaction_id'' on query. Default database: 'test'. Query: 'INSERT INTO `test` VALUES ('null','7')'\n")])]),t._v(" "),a("p",[t._v("在52上跳过错误")]),t._v(" "),a("pre",[a("code",[t._v("stop slave;\nset global sql_slave_skip_counter=1;\nslave start;\n")])]),t._v(" "),a("p",[t._v("再show slave status \\G;查看正常")]),t._v(" "),a("p",[t._v("52继续插入数据")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("INSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'11'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nINSERT INTO "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'13'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("发现42也健康的同步过来了")]),t._v(" "),a("h3",{attrs:{id:"复现完毕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复现完毕","aria-hidden":"true"}},[t._v("#")]),t._v(" 复现完毕")]),t._v(" "),a("p",[t._v("数据差异为transaction_id='7'这条记录,需要修复")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"线上解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 线上解决方案")]),t._v(" "),a("h3",{attrs:{id:"备份线上数据表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份线上数据表","aria-hidden":"true"}},[t._v("#")]),t._v(" 备份线上数据表")]),t._v(" "),a("p",[t._v("晚上12点过后备份A和B的"),a("code",[t._v("test")]),t._v("表（需要恢复的表，为了隐私这里用test代替）")]),t._v(" "),a("p",[t._v("还好这张表里只有100多万条数据，很快就备份出来了，要不然备份锁表就不能这样搞了")]),t._v(" "),a("h3",{attrs:{id:"导库到测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导库到测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 导库到测试")]),t._v(" "),a("p",[t._v("次日上班处理")]),t._v(" "),a("p",[t._v("停掉测试环境52，42双方的slave")]),t._v(" "),a("p",[t._v("线上A备份导入到52的test库，线上B备份导入到42的test库,两个库的input_date框在同一时间,并比对一下条数记录是否一致")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("    delete from "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" where input_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2015-07-22 00:00:00'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),a("p",[t._v("双方重新 记录**"),a("code",[t._v("show master status")]),a("strong",[t._v("的值  并")]),a("code",[t._v("change master")]),t._v("**")]),t._v(" "),a("p",[t._v("开启双方"),a("code",[t._v("slave")]),t._v(",这个时候双方的数据就有差异，而不会双向同步问题数据咯")]),t._v(" "),a("h3",{attrs:{id:"修复数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 修复数据")]),t._v(" "),a("p",[t._v("因为52和42是双主模式，具体正确数据以线上A导入到52的数据为准")]),t._v(" "),a("p",[t._v("在52上面执行下面命令，来检测数据的一致性")]),t._v(" "),a("pre",[a("code",[t._v("pt-table-checksum --nocheck-replication-filters  --no-check-binlog-format  --replicate=test.checksums  --databases=test --tables=test  --host=localhost    --password=123456\n")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tip:\n参数解释\n--nocheck-replication-filters ：不检查复制过滤器，建议启用。后面可以用--databases来指定需要检查的数据库。\n--no-check-binlog-format      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" 不检查复制的binlog模式，要是binlog模式是ROW，则会报错。\n--replicate-check-only :只显示不同步的信息。\n--replicate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   ：把checksum的信息写入到指定表中，建议直接写到被检查的数据库当中。 \n--databases"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   ：指定需要被检查的数据库，多个则用逗号隔开。\n--tables"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("      ：指定需要被检查的表，多个用逗号隔开\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1    ：Master的地址\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("u")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root         ：用户名\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("       ：密码\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("P")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("         ：端口\n\n\n输出解释\nTS            ：完成检查的时间。\nERRORS        ：检查时候发生错误和警告的数量。\nDIFFS         ：差异的条数。当指定--no-replicate-check时，会一直为0，当指定--replicate-check-only会显示不同的信息。\nROWS          ：表的行数。\nCHUNKS        ：被划分到表中的块的数目。\nSKIPPED       ：由于错误或警告或过大，则跳过块的数目。\nTIME          ：执行的时间。\nTABLE         ：被检查的表名。\n")])])]),a("p",[t._v("由于线上A和B已经存在差异，所以肯定DIFFS是一个非0的值")]),t._v(" "),a("p",[t._v("需要在42创建checksum用户供52使用")]),t._v(" "),a("pre",[a("code",[t._v("grant SELECT, PROCESS, SUPER, REPLICATION SLAVE on *.* to checksum @'192.168.1.52' identified by '123456' ;\nflush privileges;\n")])]),t._v(" "),a("p",[t._v("在52执行下面命令，通过（--print）打印出需要修复数据的sql语句，然后记录下来，然后经过处理，手动的拿去线上B去行执行，让他们数据保持一致性")]),t._v(" "),a("pre",[a("code",[t._v("pt-table-sync --replicate=test.checksums h=localhost,u=root,p=123456 h=192.168.1.42,u=checksum,p=123456 --print --charset=utf8\n")])]),t._v(" "),a("p",[t._v("tip:为什么要print直接打印出来问题sql，这是因为pt-table-sync会重建数据，所以有一定的风险，最好提前备份好数据。如果仍然不放心，可以使用它提供的「print」选项，它会打印出相应的SQL，你可以审查一下到底执行了那些操作，然后通过手动执行来完成同步, "),a("strong",[a("code",[t._v("--charset=utf8")])]),t._v("  这个参数是让打印出来的sql语句中的汉字正常显示，不然会是乱码。")]),t._v(" "),a("pre",[a("code",[t._v("也可以通过(--execute)直接修复，但是建议千万不要这么做。\n")])]),t._v(" "),a("h2",{attrs:{id:"附："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附：","aria-hidden":"true"}},[t._v("#")]),t._v(" 附：")]),t._v(" "),a("p",[t._v("-----------------Percona Toolkit INSTALL-------------------------")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" perl-ExtUtils-CBuilder perl-ExtUtils-MakeMaker -y\nyum perl-DBD-MySQL -y\nyum perl-Time-HiRes -y\nyum perl-TermReadKey -y\nyum perl-DBI\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.percona.com/downloads/percona-toolkit/2.2.14/tarball/percona-toolkit-2.2.14.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf percona-toolkit-2.2.14.tar.gz \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" percona-toolkit-2.2.14\nperl Makefile.PL "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/percona-toolkit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(':/usr/local/percona-toolkit"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);