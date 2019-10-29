(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{404:function(s,e,n){"use strict";n.r(e);var a=n(2),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("Redis-Sentinel是Redis官方推荐的高可用性(HA)解决方案，当用Redis做Master-slave的高可用方案时，假如master宕机了，Redis本身(包括它的很多客户端)都没有实现自动进行主备切换，而Redis-sentinel本身也是一个独立运行的进程，它能监控多个master-slave集群，发现master宕机后能进行自动切换，更多的信息见前一篇说明。")])]),s._v(" "),n("p",[s._v("它的主要功能有以下几点：")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("1，不时地监控redis是否按照预期良好地运行;")]),s._v(" "),n("li",[s._v("2，如果发现某个redis节点运行出现状况，能够通知另外一个进程(例如它的客户端);")]),s._v(" "),n("li",[s._v("3，能够进行自动切换。当一个master节点不可用时，能够选举出master的多个slave(如果有超过一个slave的话)中的一个来作为新的master,其它的slave节点会将它所追随的master的地址改为被提升为master的slave的新地址。")])])]),s._v(" "),n("p",[s._v("此处不再赘述。。。")]),s._v(" "),n("h2",{attrs:{id:"redis安装及主从配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis安装及主从配置"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"http://linux48.com/database/2015-03-05-redis-easy-install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis安装及主从配置"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"redis-sentinel安装配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis-sentinel安装配置"}},[s._v("#")]),s._v(" redis-sentinel安装配置")]),s._v(" "),n("p",[s._v("redis-sentinel无需额外安装，包含在redis的bin目录之中，属于redis基本功能之一")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@3-225 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ll /app/redis-sentinel/bin")]),s._v("\nredis-benchmark  redis-check-aof  redis-check-dump  redis-cli  redis-sentinel  redis-server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("启动命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@3-225 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat start.sh ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dir")]),s._v("/bin/redis-sentinel sentinel1.conf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" sentinel1.log "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("配置文件说明")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@3-225 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  cat sentinel1.conf ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example sentinel.conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# port <sentinel-port>")]),s._v("\nport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17399")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 守护进程模式")]),s._v("\ndaemonize no\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指明日志文件名")]),s._v("\nlogfile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./sentinel1.log"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作路径，sentinel一般指定/tmp比较简单")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/redis-sentinel"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处需要手动指明master的ip和端口，别名叫做TestMaster")]),s._v("\nsentinel monitor TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.27")]),s._v(".5.170 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7399")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# master或slave多长时间（默认30秒）不能使用后标记为s_down状态。")]),s._v("\nsentinel down-after-milliseconds TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若sentinel在该配置值内未能完成failover操作（即故障时master/slave自动切换），则认为本次failover失败。")]),s._v("\nsentinel failover-timeout TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置master和slaves验证密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sentinel auth-pass TestMaster 0234kz9*l")]),s._v("\n\nsentinel config-epoch TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8896")]),s._v("\nsentinel leader-epoch TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8896")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下为自动发现slave和监控此群集的其他sentinel毋须手动指定，启动之后自动添加")]),s._v("\nsentinel known-slave TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.27")]),s._v(".5.164 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7399")]),s._v("\nsentinel known-sentinel TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.27")]),s._v(".5.164 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17399")]),s._v(" 84a31d367c23ffe837f7903e968c1ade361e4021\nsentinel known-sentinel TestMaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.27")]),s._v(".5.170 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17399")]),s._v(" ddbf0e2e5fe937d978b15b4cc83585b453db72f1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Generated by CONFIG REWRITE")]),s._v("\nsentinel current-epoch "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8896")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@3-225 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("h2",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),n("p",[s._v("以下为常用查看命令，增删改命令目前暂未使用过，此处不在赘述，参考"),n("a",{attrs:{href:"https://www.cnblogs.com/zhoujinyi/p/5570024.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 复制、Sentinel的搭建和原理说明"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bin/redis-cli  -p 17399")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1739"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" \ninfo\nSENTINEL masters  //显示被监控的所有master以及它们的状态,要是有多个master就显示多个\nSENTINEL master TestMaster  //显示指定master的信息和状态\nSENTINEL slaves TestMaster  //显示指定master的所有slave以及它们的状态\nsentinel get-master-addr-by-name TestMaster  //返回指定master的ip和端口，如果正在进行failover或者failover已经完成，将会显示被提升为master的slave的ip和端口\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);