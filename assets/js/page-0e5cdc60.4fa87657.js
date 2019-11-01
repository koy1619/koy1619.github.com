(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{389:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("之前有写过"),t("a",{attrs:{href:"http://linux48.com/archives/74/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mysql慢查询设置"),t("OutboundLink")],1),s._v("，现在需要对Mysql进行深入的分析，发现mysql性能瓶颈和寻找优化策略，这就要对全部的sql执行语句进行查询，慢查询是满足不了的，binlog也只是记录了update语句，这个时候就需要设置mysql的全局log了。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test mysql5.5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# cat /etc/my.cnf |grep -v "#" |grep "log"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/row.log\nslow-query-log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on\nslow_query_log_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/mysql/binlog/slowquery_3.log\nlog-queries-not-using-indexes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nlog-bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql-bin\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binlog_format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mixed\ninnodb_log_group_home_dir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/mysql/data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("指定一下log参数，重启mysql服务即可，如果不能重启mysql服务器可以使用"),t("code",[s._v("mysql> set global log=1;")]),s._v("来开启")]),s._v(" "),t("p",[s._v("这样子就可以查看全局log了")]),s._v(" "),t("p",[s._v("此log记录了服务器接收到的每一个"),t("code",[s._v("查询")]),s._v("，"),t("code",[s._v("插入")]),s._v("，"),t("code",[s._v("更新")]),s._v("命令，无论这些是命令是否正确甚至是否包含语法错误，都会将其记录下来 ，记录的格式为 {Time ，Id ，Command，Argument }")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test mysql5.5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail -f /tmp/row.log")]),s._v("\n/usr/local/mysql/bin/mysqld, Version: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".25-log "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Source distribution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". started with:\nTcp port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("  Unix socket: /data/mysql/mysql.sock\nTime                 Id Command    Argument\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150625")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":08:24     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Connect   xiaolei@10.10.3.165 on\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     /*"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40101")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" @@session.wait_timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28800")]),s._v(" */\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SET PROFILING "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SET profiling_history_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SET profiling_history_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SHOW STATUS\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SELECT COUNT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" FROM "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" LIMIT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150625")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":08:43     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     TRUNCATE TABLE test.1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150625")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":08:49     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     INSERT INTO test.1 SELECT * FROM test."),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("gc_1_17500"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     /*"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40101")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" @@session.wait_timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28800")]),s._v(" */\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     TRUNCATE TABLE test.1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150625")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":13:26     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     INSERT INTO test.1 SELECT * FROM test."),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("gc_1_17500"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("150625")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":13:49     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SET PROFILING "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SET profiling_history_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SET profiling_history_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SHOW STATUS\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SELECT COUNT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" FROM "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" LIMIT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SHOW STATUS\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SHOW PROFILES\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" state, round"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("duration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" as "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("duration "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("summed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" from information_schema.profiling where query_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" group by state order by "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("duration "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("summed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" desc\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     SET PROFILING "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Query     EXPLAIN SELECT COUNT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" FROM "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" LIMIT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("但是当我查看了一些mysql的err日志发现其中log参数是过时的，但是从日志输出效果看来也没什么问题,")]),s._v(" "),t("pre",[t("code",[s._v("150625 14:35:05 [Warning] The syntax '--log' is deprecated and will be removed in a future release. Please use '--general-log'/'--general-log-file' instead.\n")])]),s._v(" "),t("p",[s._v("Warning提示“--log”已经过时，并将在以后的版本中删除。请使用'--general-log'")]),s._v(" "),t("p",[s._v("有强迫症的我还是遵从官方的说明,使用"),t("code",[s._v("general-log")]),s._v("吧")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test mysql5.5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# cat /etc/my.cnf |grep -v "#" |grep "log"')]),s._v("\ngeneral-log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on\ngeneral_log_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/mysql/binlog/general.log\nslow-query-log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on\nslow_query_log_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/mysql/binlog/slowquery_3.log\nlog-queries-not-using-indexes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nlog-bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql-bin\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binlog_format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mixed\ninnodb_log_group_home_dir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/mysql/data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("通过分析全局log，我们可以得到诸如下信息：")]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("1、Mysql访问得最多的数据")]),s._v(" "),t("li",[s._v("2、Mysql执行得最多的查询的种类")]),s._v(" "),t("li",[s._v("3、Mysql停留时间最长的状态")]),s._v(" "),t("li",[s._v("4、Mysql用来执行查询的使用得最频繁的子系统")]),s._v(" "),t("li",[s._v("5、Mysql查询过程中访问的数据种类")]),s._v(" "),t("li",[s._v("6、Mysql执行了多少种不同类型的活动，比如索引扫描。")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);