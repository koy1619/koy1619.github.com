(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{407:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("Master-Master复制的两台服务器，既是master，又是另一台服务器的slave。这样，任何一方所做的变更，都会通过复制应用到另外一方的数据库中。\n这样做的好很多，主要是下面几点:")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("可以做灾备，其中一个坏了可以切换到另一个。")]),s._v(" "),a("li",[s._v("可以做负载均衡，可以将请求分摊到其中任何一台上，提高网站吞吐量。")]),s._v(" "),a("li",[s._v("对于异地热备，尤其适合灾备。")]),s._v(" "),a("li",[s._v("...")])])])]),s._v(" "),a("p",[s._v("今天在测试环境部署一套下来，简单总结一下过程以及经验")]),s._v(" "),a("p",[s._v("过程大致和主从配置一样,此处就不在赘述")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("按照主从配置步骤将MasterB配置成MasterA的从库\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-flow line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[s._v("op1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("operation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MASTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("\nop2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("operation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MASTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),s._v("\nop1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("op2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("确保MasterB没有写入，通过show master status命令在MasterB上得到其同步点，再将MasterA配置成MasterB的从库\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-flow line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-flow"}},[a("code",[s._v("op1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("operation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MASTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("\nop2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("operation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MASTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),s._v("\nop2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("op1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("因为每台数据库服务器都可能在同一个表中插入数据，如果表有一个自动增长的主键，那么就会在多服务器上出现主键冲突。解决这个问题的办法就是让每个数据库的自增主键不连续。为了避免自增id冲突，一般会设置下面两个参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("auto-increment-increment=10\n#表示自增长字段从那个数开始，取值范围是1 .. 65535\n\nauto-increment-offset=8\n#表示自增长字段每次递增的量，其默认值是1，取值范围是1 .. 65535\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("以下为48核，128G，SSD DB_SERVER的my.cnf配置")])]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("MASTER-A")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[ebuy@DB1 ~]$ cat /etc/my.cnf \n[client]\nport            = 3306\nsocket          = /dbdata/mysqldata/mysql.sock\n\n\n[mysqld]\nport            = 3306\nsocket          = /dbdata/mysqldata/mysql.sock\nskip-external-locking\nkey_buffer_size = 2G\nmax_allowed_packet = 100M\ntable_open_cache = 512\nsort_buffer_size = 8M\nread_buffer_size = 20M\njoin_buffer_size = 2M\nread_rnd_buffer_size = 20M\nmyisam_sort_buffer_size = 128M\n\nthread_cache_size = 100\nquery_cache_size = 100M\nquery_cache_limit = 2M\ntmp_table_size=200M \n\n\nbasedir = /usr/local/mysql\ndatadir = /dbdata/mysqldata\n\nthread_concurrency = 6\n\nskip_name_resolve = 1\n\n\n\nlog-bin=/dbbak/binlog/mysql-bin\nexpire_logs_days = 7\nserver-id       = 8820\n\nlog_slave_updates = on\nreplicate_wild_ignore_table = mysql.%\nreplicate_wild_ignore_table = test.%\nsync_binlog = 1\n\n\nrelay-log = /dbbak/binlog/mysql-relay-bin\nrelay_log_index = /dbbak/binlog/mysql-relay-bin.index\nbinlog_format = mixed\n\n\n\n \ninnodb_data_file_path = ibdata1:1024M;ibdata2:1024M:autoextend\ninnodb_log_group_home_dir = /dbbak/binlog/\ninnodb_file_per_table = 1\ninnodb_buffer_pool_size = 96G\ninnodb_additional_mem_pool_size = 20M\ninnodb_log_file_size = 1G\ninnodb_log_buffer_size = 18M\ninnodb_flush_log_at_trx_commit = 1\ninnodb_lock_wait_timeout = 50\ninnodb_io_capacity = 800\n\ninnodb_flush_method = O_DIRECT\n\nauto-increment-increment=10\nauto-increment-offset=6\nconcurrent_insert=2\n\ndefault-time-zone       = "+8:00"\ncharacter_set_server =  utf8\n\nmax_connections = 16384\ngeneral-log = on\ngeneral_log_file = /dbbak/binlog/general.log\nslow-query-log = on\nlong_query_time = 3\nslow_query_log_file = /dbbak/binlog/slowquery_3.log\nlog-queries-not-using-indexes = true\nmax_connect_errors = 100000\n\n[mysqldump]\nquick\nmax_allowed_packet = 50M\n\n[mysql]\nno-auto-rehash\n\n[myisamchk]\nkey_buffer_size = 256M\nsort_buffer_size = 256M\nread_buffer = 2M\nwrite_buffer = 2M\n\n[mysqlhotcopy]\ninteractive-timeout\n[ebuy@DB1 ~]$ \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br")])]),a("blockquote",[a("ul",[a("li",[s._v("MASTER-B")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[ebuy@DB2 ~]$ cat /etc/my.cnf \n[client]\nport            = 3306\nsocket          = /dbdata/mysqldata/mysql.sock\n\n\n[mysqld]\nport            = 3306\nsocket          = /dbdata/mysqldata/mysql.sock\nskip-external-locking\nkey_buffer_size = 2G\nmax_allowed_packet = 100M\ntable_open_cache = 512\nsort_buffer_size = 8M\nread_buffer_size = 20M\njoin_buffer_size = 2M\nread_rnd_buffer_size = 20M\nmyisam_sort_buffer_size = 128M\n\nthread_cache_size = 100\nquery_cache_size = 100M\nquery_cache_limit = 2M\ntmp_table_size=200M \n\n\nbasedir = /usr/local/mysql\ndatadir = /dbdata/mysqldata\n\nthread_concurrency = 6\n\nskip_name_resolve = 1\n\n\n\nlog-bin=/dbbak/binlog/mysql-bin\nexpire_logs_days = 7\nserver-id       = 8821\n\nlog_slave_updates = on\nreplicate_wild_ignore_table = mysql.%\nreplicate_wild_ignore_table = test.%\nsync_binlog = 1\n\n\nrelay-log = /dbbak/binlog/mysql-relay-bin\nrelay_log_index = /dbbak/binlog/mysql-relay-bin.index\nbinlog_format = mixed\n\n\n\n \ninnodb_data_file_path = ibdata1:1024M;ibdata2:1024M:autoextend\ninnodb_log_group_home_dir = /dbbak/binlog/\ninnodb_file_per_table = 1\ninnodb_buffer_pool_size = 96G\ninnodb_additional_mem_pool_size = 20M\ninnodb_log_file_size = 1G\ninnodb_log_buffer_size = 18M\ninnodb_flush_log_at_trx_commit = 1\ninnodb_lock_wait_timeout = 50\ninnodb_io_capacity = 800\n\ninnodb_flush_method = O_DIRECT\n\nauto-increment-increment=10\nauto-increment-offset=8\nconcurrent_insert=2\n\ndefault-time-zone       = "+8:00"\ncharacter_set_server =  utf8\n\nmax_connections = 16384\ngeneral-log = on\ngeneral_log_file = /dbbak/binlog/general.log\nslow-query-log = on\nlong_query_time = 3\nslow_query_log_file = /dbbak/binlog/slowquery_3.log\nlog-queries-not-using-indexes = true\nmax_connect_errors = 100000\n\n[mysqldump]\nquick\nmax_allowed_packet = 50M\n\n[mysql]\nno-auto-rehash\n\n[myisamchk]\nkey_buffer_size = 256M\nsort_buffer_size = 256M\nread_buffer = 2M\nwrite_buffer = 2M\n\n[mysqlhotcopy]\ninteractive-timeout\n[ebuy@DB2 ~]$ \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);