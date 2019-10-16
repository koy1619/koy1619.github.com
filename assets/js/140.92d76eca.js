(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{445:function(s,e,t){"use strict";t.r(e);var n=t(2),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"flume-hdfs构建大数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flume-hdfs构建大数据","aria-hidden":"true"}},[s._v("#")]),s._v(" flume+hdfs构建大数据")]),s._v(" "),t("h1",{attrs:{id:"hadoop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hadoop","aria-hidden":"true"}},[s._v("#")]),s._v(" hadoop")]),s._v(" "),t("p",[s._v("http://hadoop.apache.org/docs/r1.0.4/cn/")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hdfs dfs -mkdir /ebuyposp\nhdfs dfs -mkdir /ebuyposp2\nhdfs dfs -ls /\n\nhdfs dfs -cat /ebuyposp1/k1_.1462357028642\nhdfs dfs -rm -r -f -skipTrash /ebuyposp/*\nhdfs dfs -rm -r -f -skipTrash /ebuyposp2/*\nhdfs dfs -rm -r -f -skipTrash /ebuyposp2\nhdfs dfs -rm -r -f -skipTrash /test20160428\n")])])]),s._v(" "),t("h1",{attrs:{id:"file-roll格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-roll格式","aria-hidden":"true"}},[s._v("#")]),s._v(" file_roll格式")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent")]),s._v("\nclientAgent.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sources "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s1\nclientAgent.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k1 k2\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent Spooling Directory Source")]),s._v("\nclientAgent.sources.s1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avro\nclientAgent.sources.s1.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c1\nclientAgent.sources.s1.bind "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sources.s1.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44444")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent FileChannel")]),s._v("\nclientAgent.channels.c1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" memory\nclientAgent.channels.c1.capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200000000")]),s._v("\nclientAgent.channels.c1.keep-alive "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nclientAgent.channels.c1.write-timeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nclientAgent.channels.c1.checkpoint-timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\nclientAgent.channels.c1.transactionCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent Sinks")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k1 sink")]),s._v("\nclientAgent.sinks.k1.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sinks.k1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" file_roll\n\nclientAgent.sinks.k1.sink.directory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ./tmp1\nclientAgent.sinks.k1.sink.rollInterval"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\nclientAgent.sinks.k1.sink.batchSize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nclientAgent.sinks.k1.sink.serializer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("text\nclientAgent.sinks.k1.sink.serializer.appendNewline "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# connect to serverAgent")]),s._v("\nclientAgent.sinks.k1.hostname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sinks.k1.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41415")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k2 sink")]),s._v("\nclientAgent.sinks.k2.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sinks.k2.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" file_roll\n\nclientAgent.sinks.k2.sink.directory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ./tmp2\nclientAgent.sinks.k2.sink.rollInterval"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\nclientAgent.sinks.k2.sink.batchSize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nclientAgent.sinks.k2.sink.serializer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("text\nclientAgent.sinks.k2.sink.serializer.appendNewline "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# connect to CollectorBackupAgent")]),s._v("\nclientAgent.sinks.k2.hostname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sinks.k2.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41415")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent sinks group")]),s._v("\nclientAgent.sinkgroups "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" g1\nclientAgent.sinkgroups.g1.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k1 k2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load_balance type")]),s._v("\nclientAgent.sinkgroups.g1.processor.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" load_balance\nclientAgent.sinkgroups.g1.processor.backoff "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nclientAgent.sinkgroups.g1.processor.selector "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random\nclientAgent.sinkgroups.g1.processor.priority.k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nclientAgent.sinkgroups.g1.processor.priority.k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n")])])]),t("h1",{attrs:{id:"spooldir监听目录格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spooldir监听目录格式","aria-hidden":"true"}},[s._v("#")]),s._v(" spooldir监听目录格式")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent")]),s._v("\nclientAgent.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sources "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s1\nclientAgent.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k1 k2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent Spooling Directory Source")]),s._v("\nclientAgent.sources.s1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" spooldir\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听目录")]),s._v("\nclientAgent.sources.s1.spoolDir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/test/ebuy3.0/ebuyposp/logs/\n\nclientAgent.sources.s1.fileHeader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#clientAgent.sources.s1.deletePolicy =immediate")]),s._v("\nclientAgent.sources.s1.deletePolicy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("never\nclientAgent.sources.s1.batchSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\nclientAgent.sources.s1.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c1\nclientAgent.sources.s1.deserializer.maxLineLength "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent FileChannel")]),s._v("\nclientAgent.channels.c1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查传输及断点续传等验证文件，可原理可参考MR合并小文件的方式")]),s._v("\nclientAgent.channels.c1.checkpointDir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ./spool/checkpoint\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 传输数据")]),s._v("\nclientAgent.channels.c1.dataDirs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ./spool/data\n\nclientAgent.channels.c1.capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200000000")]),s._v("\nclientAgent.channels.c1.keep-alive "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nclientAgent.channels.c1.write-timeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nclientAgent.channels.c1.checkpoint-timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent Sinks")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k1 sink")]),s._v("\nclientAgent.sinks.k1.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sinks.k1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avro\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# connect to serverAgent")]),s._v("\nclientAgent.sinks.k1.hostname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sinks.k1.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41415")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k2 sink")]),s._v("\nclientAgent.sinks.k2.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sinks.k2.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avro\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# connect to CollectorBackupAgent")]),s._v("\nclientAgent.sinks.k2.hostname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sinks.k2.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41415")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent sinks group")]),s._v("\nclientAgent.sinkgroups "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" g1\nclientAgent.sinkgroups.g1.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k1 k2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load_balance type")]),s._v("\nclientAgent.sinkgroups.g1.processor.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" load_balance\nclientAgent.sinkgroups.g1.processor.backoff "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nclientAgent.sinkgroups.g1.processor.selector "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random\nclientAgent.sinkgroups.g1.processor.priority.k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nclientAgent.sinkgroups.g1.processor.priority.k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n")])])]),t("h1",{attrs:{id:"client传输到server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client传输到server","aria-hidden":"true"}},[s._v("#")]),s._v(" client传输到server")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent")]),s._v("\nclientAgent.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sources "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s1\nclientAgent.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k1 k2\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent Spooling Directory Source")]),s._v("\nclientAgent.sources.s1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avro\nclientAgent.sources.s1.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c1\nclientAgent.sources.s1.bind "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sources.s1.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44444")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent FileChannel")]),s._v("\nclientAgent.channels.c1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" memory\nclientAgent.channels.c1.capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200000000")]),s._v("\nclientAgent.channels.c1.keep-alive "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nclientAgent.channels.c1.write-timeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nclientAgent.channels.c1.checkpoint-timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\nclientAgent.channels.c1.transactionCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent Sinks")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k1 sink")]),s._v("\nclientAgent.sinks.k1.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sinks.k1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avro\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# connect to serverAgent")]),s._v("\nclientAgent.sinks.k1.hostname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sinks.k1.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41415")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# k2 sink")]),s._v("\nclientAgent.sinks.k2.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1\nclientAgent.sinks.k2.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avro\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# connect to CollectorBackupAgent")]),s._v("\nclientAgent.sinks.k2.hostname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nclientAgent.sinks.k2.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41415")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clientAgent sinks group")]),s._v("\nclientAgent.sinkgroups "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" g1\nclientAgent.sinkgroups.g1.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k1 k2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load_balance type")]),s._v("\nclientAgent.sinkgroups.g1.processor.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" load_balance\nclientAgent.sinkgroups.g1.processor.backoff "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nclientAgent.sinkgroups.g1.processor.selector "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random\nclientAgent.sinkgroups.g1.processor.priority.k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nclientAgent.sinkgroups.g1.processor.priority.k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n")])])]),t("h1",{attrs:{id:"server配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server配置","aria-hidden":"true"}},[s._v("#")]),s._v(" server配置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# serverAgent")]),s._v("\nserverAgent.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2\nserverAgent.sources "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s2\nserverAgent.sinks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k1 k2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# serverAgent AvroSource")]),s._v("\nserverAgent.sources.s2.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avro\nserverAgent.sources.s2.bind "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nserverAgent.sources.s2.port "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41415")]),s._v("\nserverAgent.sources.s2.channels "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# serverAgent FileChannel")]),s._v("\nserverAgent.channels.c2.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\nserverAgent.channels.c2.checkpointDir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./spool/checkpoint\nserverAgent.channels.c2.dataDirs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ./spool/data\nserverAgent.channels.c2.capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200000000")]),s._v("\nserverAgent.channels.c2.transactionCapacity"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("\nserverAgent.channels.c2.checkpointInterval"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# serverAgent hdfsSink")]),s._v("\nserverAgent.sinks.k1.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hdfs\nserverAgent.sinks.k1.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2\nserverAgent.sinks.k1.hdfs.path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hdfs://localhost:9000/ebuyposp1\nserverAgent.sinks.k1.hdfs.filePrefix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k1_%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserverAgent.sinks.k1.hdfs.inUsePrefix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_\nserverAgent.sinks.k1.hdfs.inUseSuffix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".tmp\nserverAgent.sinks.k1.hdfs.rollSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nserverAgent.sinks.k1.hdfs.rollCount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nserverAgent.sinks.k1.hdfs.rollInterval "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("240")]),s._v("\nserverAgent.sinks.k1.hdfs.writeFormat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Text\nserverAgent.sinks.k1.hdfs.fileType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DataStream\nserverAgent.sinks.k1.hdfs.batchSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("\nserverAgent.sinks.k1.hdfs.callTimeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),s._v("\n\n\nserverAgent.sinks.k2.type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hdfs\nserverAgent.sinks.k2.channel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2\nserverAgent.sinks.k2.hdfs.path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hdfs://localhost:9000/ebuyposp2\nserverAgent.sinks.k2.hdfs.filePrefix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("k2_%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserverAgent.sinks.k2.hdfs.inUsePrefix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_\nserverAgent.sinks.k2.hdfs.inUseSuffix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".tmp\nserverAgent.sinks.k2.hdfs.rollSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nserverAgent.sinks.k2.hdfs.rollCount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nserverAgent.sinks.k2.hdfs.rollInterval "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("240")]),s._v("\nserverAgent.sinks.k2.hdfs.writeFormat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Text\nserverAgent.sinks.k2.hdfs.fileType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DataStream\nserverAgent.sinks.k2.hdfs.batchSize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("\nserverAgent.sinks.k2.hdfs.callTimeout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),s._v("\n")])])]),t("h1",{attrs:{id:"hue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hue","aria-hidden":"true"}},[s._v("#")]),s._v(" HUE")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/cloudera/hue.git\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hue\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" apps\n$ build/env/bin/hue runserver\n$ build/env/bin/supervisor\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);