(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{406:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("线上A和B互为主主，A为业务写库，B为读库")]),s._v(" "),t("p",[s._v("19号下午收到短信报警A的slave delay，果断VPN上去数据库查看到")]),s._v(" "),t("pre",[t("code",[s._v("Last_SQL_Error: Error 'Duplicate entry '4960446' for key 'transaction_id'' on query. Default database\n")])]),s._v(" "),t("p",[s._v("又是熟悉的主键冲突，但是这个时候不能让业务出现任何问题，就果断在A")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" STOP SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET GLOBAL sql_slave_skip_counter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" START SLAVE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("经过2次重复的上述操作，同步OK了，然后根据这两条报错的主键ID在两台数据库查询发现都不一样，\n此时我清楚的知道已经有2条数据差异了，如果不及时处理早晚有一天被掩盖的问题会再次爆发出来。")]),s._v(" "),t("p",[s._v("后来经过一些列的排查之后知道问题所在了")]),s._v(" "),t("p",[s._v("因为7月2号晚上在B"),t("code",[s._v("alter")]),s._v("表的时候，导致B锁表，而A还在写入，并且正好在更新服务，导致数据的差异")]),s._v(" "),t("p",[s._v("查"),t("code",[s._v("general log")]),s._v("得知7月19号人为的在B上插入了两条"),t("code",[s._v('transaction_id="4960446"')]),s._v("和"),t("code",[s._v('transaction_id="4960426"')]),s._v("的记录和A的id冲突，导致A同步挂掉")]),s._v(" "),t("p",[s._v("因为A为业务写库，所以现在需要把A上这两条正确的数据插入到B，并在B上面删除错误的。")]),s._v(" "),t("p",[s._v("由于这个是自增的主键，所以还不好操作，下面大概就测试环境详细说明一下复现方案以及解决办法。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"复现方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复现方案"}},[s._v("#")]),s._v(" 复现方案")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("192.168.1.52  模拟线上A 负责写入")]),s._v(" "),t("li",[s._v("192.168.1.42  模拟线上B 负责读取")])])]),s._v(" "),t("h3",{attrs:{id:"设置my-cnf，差开自增id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置my-cnf，差开自增id"}},[s._v("#")]),s._v(" 设置my.cnf，差开自增ID")]),s._v(" "),t("p",[s._v("52配置")]),s._v(" "),t("pre",[t("code",[s._v("auto-increment-increment=10\nauto-increment-offset=8\n")])]),s._v(" "),t("p",[s._v("42配置")]),s._v(" "),t("pre",[t("code",[s._v("auto-increment-increment=10\nauto-increment-offset=6\n")])]),s._v(" "),t("h3",{attrs:{id:"创建测试表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建测试表"}},[s._v("#")]),s._v(" 创建测试表")]),s._v(" "),t("p",[s._v("随便在其中一台的test库中创建测试表，双主自动同步到另一台")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("qrpay_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主键'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("transaction_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("qrpay_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("transaction_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("transaction_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USING")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BTREE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("896")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"插入测试数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入测试数据"}},[s._v("#")]),s._v(" 插入测试数据")]),s._v(" "),t("p",[s._v('在52插入测试数据，可以发现"qrpay_id"的值是依照 auto-increment-offset 格式的, 同步过去也是如此')]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("INSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v('在42插入测试数据，可以发现"qrpay_id"的值是依照 auto-increment-offset 格式的, 同步过去也是如此')]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("INSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"模拟同步异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模拟同步异常"}},[s._v("#")]),s._v(" 模拟同步异常")]),s._v(" "),t("p",[s._v("停掉42的同步")]),s._v(" "),t("pre",[t("code",[s._v("slave stop;\n")])]),s._v(" "),t("p",[s._v("并在52上插入数据")]),s._v(" "),t("pre",[t("code",[s._v("INSERT INTO `test` VALUES ('null','7');\n")])]),s._v(" "),t("p",[s._v("在42上插入数据")]),s._v(" "),t("pre",[t("code",[s._v("INSERT INTO `test` VALUES ('null','7');\n")])]),s._v(" "),t("p",[s._v("开启42的同步")]),s._v(" "),t("pre",[t("code",[s._v("slave start;\n")])]),s._v(" "),t("p",[s._v("在两边都show slave status \\G; 可以发现都提示")]),s._v(" "),t("pre",[t("code",[s._v("Error 'Duplicate entry '7' for key 'transaction_id'' on query. Default database: 'test'. Query: 'INSERT INTO `test` VALUES ('null','7')'\n")])]),s._v(" "),t("p",[s._v("因为停掉了42的同步，所以插入到52的数据不会同步到42，并且也在42上面插入了相同值的transaction_id，同步到52的时候就导致了主键重复，最后开启42的同步，双方都互相冲突")]),s._v(" "),t("p",[s._v("这个时候两边主从都是挂掉的，然后两边都跳过这个错误")]),s._v(" "),t("pre",[t("code",[s._v("stop slave;\nset global sql_slave_skip_counter=1;\nslave start;\n")])]),s._v(" "),t("p",[s._v("再show slave status \\G;查看正常")]),s._v(" "),t("h3",{attrs:{id:"模拟数据差异1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模拟数据差异1"}},[s._v("#")]),s._v(" 模拟数据差异1")]),s._v(" "),t("p",[s._v("在42上面删掉transaction_id刚才冲突的那条transaction_id='7'的记录,按照qrpay_id找")]),s._v(" "),t("pre",[t("code",[s._v("delete from test where qrpay_id='1166';\n")])]),s._v(" "),t("p",[s._v("继续在52写入测试数据")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("INSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这个时候52上面比42的多了一条transaction_id='7'的记录")]),s._v(" "),t("p",[s._v("以上目地是模拟出真实数据库A比B多数据的场景")]),s._v(" "),t("h3",{attrs:{id:"修复同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复同步"}},[s._v("#")]),s._v(" 修复同步")]),s._v(" "),t("p",[s._v("在42上插入数据")]),s._v(" "),t("pre",[t("code",[s._v("INSERT INTO `test` VALUES ('null','7');\n")])]),s._v(" "),t("p",[s._v("这时因为52上已有transaction_id='7'的记录的值导致52同步挂掉")]),s._v(" "),t("p",[s._v("只有52报")]),s._v(" "),t("pre",[t("code",[s._v("Error 'Duplicate entry '7' for key 'transaction_id'' on query. Default database: 'test'. Query: 'INSERT INTO `test` VALUES ('null','7')'\n")])]),s._v(" "),t("p",[s._v("在52上跳过错误")]),s._v(" "),t("pre",[t("code",[s._v("stop slave;\nset global sql_slave_skip_counter=1;\nslave start;\n")])]),s._v(" "),t("p",[s._v("再show slave status \\G;查看正常")]),s._v(" "),t("p",[s._v("52继续插入数据")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("INSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'11'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nINSERT INTO "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'13'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("发现42也健康的同步过来了")]),s._v(" "),t("h3",{attrs:{id:"复现完毕"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复现完毕"}},[s._v("#")]),s._v(" 复现完毕")]),s._v(" "),t("p",[s._v("数据差异为transaction_id='7'这条记录,需要修复")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"线上解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线上解决方案"}},[s._v("#")]),s._v(" 线上解决方案")]),s._v(" "),t("h3",{attrs:{id:"备份线上数据表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份线上数据表"}},[s._v("#")]),s._v(" 备份线上数据表")]),s._v(" "),t("p",[s._v("晚上12点过后备份A和B的"),t("code",[s._v("test")]),s._v("表（需要恢复的表，为了隐私这里用test代替）")]),s._v(" "),t("p",[s._v("还好这张表里只有100多万条数据，很快就备份出来了，要不然备份锁表就不能这样搞了")]),s._v(" "),t("h3",{attrs:{id:"导库到测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导库到测试"}},[s._v("#")]),s._v(" 导库到测试")]),s._v(" "),t("p",[s._v("次日上班处理")]),s._v(" "),t("p",[s._v("停掉测试环境52，42双方的slave")]),s._v(" "),t("p",[s._v("线上A备份导入到52的test库，线上B备份导入到42的test库,两个库的input_date框在同一时间,并比对一下条数记录是否一致")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    delete from "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" where input_date "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2015-07-22 00:00:00'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" from "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("双方重新 记录**"),t("code",[s._v("show master status")]),t("strong",[s._v("的值  并")]),t("code",[s._v("change master")]),s._v("**")]),s._v(" "),t("p",[s._v("开启双方"),t("code",[s._v("slave")]),s._v(",这个时候双方的数据就有差异，而不会双向同步问题数据咯")]),s._v(" "),t("h3",{attrs:{id:"修复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修复数据"}},[s._v("#")]),s._v(" 修复数据")]),s._v(" "),t("p",[s._v("因为52和42是双主模式，具体正确数据以线上A导入到52的数据为准")]),s._v(" "),t("p",[s._v("在52上面执行下面命令，来检测数据的一致性")]),s._v(" "),t("pre",[t("code",[s._v("pt-table-checksum --nocheck-replication-filters  --no-check-binlog-format  --replicate=test.checksums  --databases=test --tables=test  --host=localhost    --password=123456\n")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("tip:\n参数解释\n--nocheck-replication-filters ：不检查复制过滤器，建议启用。后面可以用--databases来指定需要检查的数据库。\n--no-check-binlog-format      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 不检查复制的binlog模式，要是binlog模式是ROW，则会报错。\n--replicate-check-only :只显示不同步的信息。\n--replicate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("   ：把checksum的信息写入到指定表中，建议直接写到被检查的数据库当中。 \n--databases"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("   ：指定需要被检查的数据库，多个则用逗号隔开。\n--tables"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("      ：指定需要被检查的表，多个用逗号隔开\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("h")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1    ：Master的地址\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("u")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root         ：用户名\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("       ：密码\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("P")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("         ：端口\n\n\n输出解释\nTS            ：完成检查的时间。\nERRORS        ：检查时候发生错误和警告的数量。\nDIFFS         ：差异的条数。当指定--no-replicate-check时，会一直为0，当指定--replicate-check-only会显示不同的信息。\nROWS          ：表的行数。\nCHUNKS        ：被划分到表中的块的数目。\nSKIPPED       ：由于错误或警告或过大，则跳过块的数目。\nTIME          ：执行的时间。\nTABLE         ：被检查的表名。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("由于线上A和B已经存在差异，所以肯定DIFFS是一个非0的值")]),s._v(" "),t("p",[s._v("需要在42创建checksum用户供52使用")]),s._v(" "),t("pre",[t("code",[s._v("grant SELECT, PROCESS, SUPER, REPLICATION SLAVE on *.* to checksum @'192.168.1.52' identified by '123456' ;\nflush privileges;\n")])]),s._v(" "),t("p",[s._v("在52执行下面命令，通过（--print）打印出需要修复数据的sql语句，然后记录下来，然后经过处理，手动的拿去线上B去行执行，让他们数据保持一致性")]),s._v(" "),t("pre",[t("code",[s._v("pt-table-sync --replicate=test.checksums h=localhost,u=root,p=123456 h=192.168.1.42,u=checksum,p=123456 --print --charset=utf8\n")])]),s._v(" "),t("p",[s._v("tip:为什么要print直接打印出来问题sql，这是因为pt-table-sync会重建数据，所以有一定的风险，最好提前备份好数据。如果仍然不放心，可以使用它提供的「print」选项，它会打印出相应的SQL，你可以审查一下到底执行了那些操作，然后通过手动执行来完成同步, "),t("strong",[t("code",[s._v("--charset=utf8")])]),s._v("  这个参数是让打印出来的sql语句中的汉字正常显示，不然会是乱码。")]),s._v(" "),t("pre",[t("code",[s._v("也可以通过(--execute)直接修复，但是建议千万不要这么做。\n")])]),s._v(" "),t("h2",{attrs:{id:"附："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附："}},[s._v("#")]),s._v(" 附：")]),s._v(" "),t("p",[s._v("-----------------Percona Toolkit INSTALL-------------------------")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" perl-ExtUtils-CBuilder perl-ExtUtils-MakeMaker -y\nyum perl-DBD-MySQL -y\nyum perl-Time-HiRes -y\nyum perl-TermReadKey -y\nyum perl-DBI\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://www.percona.com/downloads/percona-toolkit/2.2.14/tarball/percona-toolkit-2.2.14.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf percona-toolkit-2.2.14.tar.gz \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" percona-toolkit-2.2.14\nperl Makefile.PL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/percona-toolkit\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PATH='),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/local/percona-toolkit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);