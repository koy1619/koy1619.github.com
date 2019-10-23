(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{411:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis安装及主从配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis安装及主从配置"}},[s._v("#")]),s._v(" Redis安装及主从配置")]),s._v(" "),e("h2",{attrs:{id:"redis简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis简介"}},[s._v("#")]),s._v(" Redis简介")]),s._v(" "),e("p",[s._v("redis是一个key-value存储系统。和Memcached类似，它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)和zset(有序集合)。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。在此基础上，redis支持各种不同方式的排序。与memcached一样，为了保证效率，数据都是缓存在内存中。区别的是redis会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了master-slave(主从)同步。Redis 是一个高性能的key-value数据库。 redis的出现，很大程度补偿了memcached这类keyvalue存储的不足，在部分场合可以对关系数据库起到很好的补充作用。")]),s._v(" "),e("h2",{attrs:{id:"编译安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" gcc gcc-c++ tcl\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-2.8.19.tar.gz\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf redis-2.8.19.tar.gz\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-2.8.19\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" -R *\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis-2.8.19  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MALLOC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("libc "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ./redis.conf /usr/local/redis-2.8.19/\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p  /data/redisdb\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis-2.8.19/redis.conf\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" /usr/local/redis-2.8.19/bin/redis-server /usr/local/redis-2.8.19/redis.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n/usr/local/redis-2.8.19/bin/redis-cli\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h2",{attrs:{id:"启动脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动脚本"}},[s._v("#")]),s._v(" 启动脚本")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" redis-2.8.19/start.sh\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v("/bin/redis-server redis.conf  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" redis.log "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"redis主从配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis主从配置"}},[s._v("#")]),s._v(" Redis主从配置")]),s._v(" "),e("p",[s._v("Redis的主从复制功能非常强大，一个master可以拥有多个slave，而一个slave又可以拥有多个slave，如此下去，形成了强大的多级服务器集群架构。")]),s._v(" "),e("p",[s._v("流程如下图")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/10/18/hmAHbDZosczFB2u.jpg",alt:""}})]),s._v(" "),e("p",[s._v("安装过程如下；\n此处为了演示，复制了一份副本，修改端口号和主从配置即可")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R redis-2.8.19   redis-2.8.19-slave\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" redis-2.8.19-slave/redis.conf  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" port\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" redis.conf  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" slaveof \nslaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (映射到主服务器上)")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("如果master设置了验证密码，还需配置masterauth。")]),s._v(" "),e("p",[s._v("配置完之后启动slave的Redis服务，主从配置完成。")]),s._v(" "),e("h2",{attrs:{id:"主从测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从测试"}},[s._v("#")]),s._v(" 主从测试")]),s._v(" "),e("p",[s._v("在master和slave分别执行info命令，查看结果如下(这里只贴主从相关打印)：")]),s._v(" "),e("p",[e("strong",[s._v("master")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-2.8.19/redis-cli ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" info\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:1\nslave0:ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1,port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v(",state"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2063394")]),s._v(",lag"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nmaster_repl_offset:2063394\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:1014819\nrepl_backlog_histlen:1048576\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[e("strong",[s._v("slave")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-2.8.19-slave/redis-cli -p 6380")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:638"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" info\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:slave\nmaster_host:127.0.0.1\nmaster_port:6379\nmaster_link_status:up\nmaster_last_io_seconds_ago:2\nmaster_sync_in_progress:0\nslave_repl_offset:2080164\nslave_priority:100\nslave_read_only:1\nconnected_slaves:0\nmaster_repl_offset:0\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:0\nrepl_backlog_histlen:0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("然后在master执行 "),e("code",[s._v("set name linux48")])]),s._v(" "),e("p",[s._v("在slave执行"),e("code",[s._v("get name")]),s._v("，看是否能得到linux48，如果能够得到值则说明配置成功。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-2.8.19/redis-cli")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name linux48\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get name\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux48"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-2.8.19-slave/redis-cli -p 6380")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:638"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" get name\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux48"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);