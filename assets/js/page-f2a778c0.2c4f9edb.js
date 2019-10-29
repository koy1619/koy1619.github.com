(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{505:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("hive作为hadoop集群架构之上的一个架构，通过一种类SQL的解析引擎来将作业转换成map/reduce执行的任务。")]),s._v(" "),t("p",[s._v("本文主要是分享基本的安装与使用经验。hive的实质是将表对应到HDFS中的目录。")]),s._v(" "),t("h2",{attrs:{id:"添加环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加环境变量"}},[s._v("#")]),s._v(" 添加环境变量")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/jdk1.7.0_09"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/hadoop/hadoop-2.6.4"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_CONF_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HADOOP_HOME")]),s._v("/etc/hadoop/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HADOOP_HOME")]),s._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HADOOP_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HADOOP_HOME")]),s._v("/sbin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_USER_CLASSPATH_FIRST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HIVE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/hadoop/apache-hive-2.1.0-bin"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HIVE_HOME")]),s._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HIVE_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HIVE_HOME")]),s._v("/conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"设置公钥本机免登陆密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置公钥本机免登陆密码"}},[s._v("#")]),s._v(" 设置公钥本机免登陆密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /root/.ssh/id_rsa.pub  /root/.ssh/authorized_keys\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"安装java环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装java环境"}},[s._v("#")]),s._v(" 安装java环境")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf jdk-7u9-linux-x64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" jdk1.7.0_09/ /usr/local/\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/jdk1.7.0_09/bin/java /usr/bin/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/jdk1.7.0_09/bin/javac /usr/bin/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/jdk1.7.0_09/bin/jar /usr/bin/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"安装hadoop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装hadoop"}},[s._v("#")]),s._v(" 安装hadoop")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-2.6.4/hadoop-2.6.4.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf hadoop-2.6.4.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hadoop-2.6.4\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" etc/hadoop/hadoop-env.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/jdk1.7.0_09\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" etc/hadoop/core-site.xml\n\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hadoop.tmp.dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/home/ebuy/hadoop/hadoop-2.6.4/tmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 如没有配置hadoop.tmp.dir参数，此时系统默认的临时目录为：/tmp/hadoo-hadoop\n\t\t而这个目录在每次重启后都会被干掉，必须重新执行format才行，否则会出错。 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("description"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("A base "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" other temporary directories."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/description"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" system properties --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("fs.default.name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hdfs://localhost:900"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h2",{attrs:{id:"启动及验证hadoop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动及验证hadoop"}},[s._v("#")]),s._v(" 启动及验证hadoop")]),s._v(" "),t("h3",{attrs:{id:"格式化hdfs文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#格式化hdfs文件系统"}},[s._v("#")]),s._v(" 格式化HDFS文件系统")]),s._v(" "),t("p",[t("code",[s._v("hadoop namenode -format")])]),s._v(" "),t("h2",{attrs:{id:"启动hadoop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动hadoop"}},[s._v("#")]),s._v(" 启动hadoop")]),s._v(" "),t("p",[t("code",[s._v("sh sbin/start-all.sh")])]),s._v(" "),t("p",[s._v("http://10.127.0.5:50070")]),s._v(" "),t("h2",{attrs:{id:"hdfs常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdfs常用命令"}},[s._v("#")]),s._v(" hdfs常用命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hdfs dfs -mkdir /tmp/hive\nhdfs dfs -ls  /tmp/hive/*\nhdfs dfs -cat /tmp/hive/123 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\nhdfs dfs -chmod "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /tmp/\nhdfs dfs -rmr /tmp/*\nhdfs dfs -rm -r -f -skipTrash  /ecoupon/cachemanage\nhdfs dfs -mkdir /user/hive/warehouse\nhdfs dfs -chmod "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /user/hive/warehouse\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"安装hive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装hive"}},[s._v("#")]),s._v(" 安装hive")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.hust.edu.cn/apache/hive/hive-1.2.1/apache-hive-1.2.1-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf apache-hive-1.2.1-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" apache-hive-1.2.1-bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hive-default.xml.template   hive-site.xml\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hive-exec-log4j.properties.template  hive-exec-log4j.properties\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hive-log4j.properties.template  hive-log4j.properties\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" hive-env.sh.template hive-env.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hive-env.sh\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ebuy/hadoop/hadoop-2.6.4\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HIVE_CONF_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ebuy/hadoop/apache-hive-1.2.1-bin/conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hive-site.xml \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- MySQ的URL配置 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("javax.jdo.option.ConnectionURL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("jdbc:mysql://144.232.134.58:3306/hive?createDatabaseIfNotExist"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 此处JDBC的驱动务必加上，对应的数据配置对应的驱动--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("javax.jdo.option.ConnectionDriverName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("com.mysql.jdbc.Driver"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("description"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Driver class name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a JDBC metastore"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/description"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 数据库的用户名配置--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("javax.jdo.option.ConnectionUserName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 数据库密码配置--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("javax.jdo.option.ConnectionPassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- HDFS路径hive表的存放位置--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive.metastore.warehouse.dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hdfs://localhost:9000//user/hive/warehouse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--HDFS路径，用于存储不同 map/reduce 阶段的执行计划和这些阶段的中间输出结果。 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive.exec.scratchdir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/tmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("mapred.child.java.opts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("-Xmx4096m"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 日志的记录位置--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive.querylog.location"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/home/ebuy/hadoop/apache-hive-1.2.1-bin/logs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive.metastore.local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("false"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive.server2.thrift.port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hive.server2.thrift.bind.host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("localhost"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/property"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br")])]),t("p",[s._v("mysql连接驱动hive没有自带；需拷贝mysql-connector-java-5.1.21.jar到lib下,同时mysql据数据建表授权！")]),s._v(" "),t("p",[s._v("在HDFS上，新建hive的数据存储目录，以及MapReduce执行过程，生成的临时文件目录，执行命令如下，并赋值权限")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hdfs dfs -mkidr /tmp  \nhdfs dfs -mkidr /user/hive/warehouse  \nhdfs dfs -chmod g+w /tmp  \nhdfs dfs -chmod g+w /user/hive/warehouse  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"启动hive-执行建表命令并导入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动hive-执行建表命令并导入数据"}},[s._v("#")]),s._v(" 启动hive 执行建表命令并导入数据")]),s._v(" "),t("p",[s._v("执行命令")]),s._v(" "),t("p",[t("code",[s._v("./bin/hive")])]),s._v(" "),t("h2",{attrs:{id:"hiveserver2启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hiveserver2启动"}},[s._v("#")]),s._v(" Hiveserver2启动")]),s._v(" "),t("p",[s._v("HiveServer2作为一种服务接口，允许Hive远程客户端执行查询并返回结果；默认监听端口为10000。当前实现基于Thrift的RPC调用。是HiveServer的改进版本，支持多客户端的并发和权限控制.")]),s._v(" "),t("p",[t("code",[s._v("./bin/hiveserver2")])]),s._v(" "),t("h2",{attrs:{id:"fulme-hue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fulme-hue"}},[s._v("#")]),s._v(" fulme+HUE")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://linux48.com/2016-05-16-flume.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("fulme+HUE配置"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hue/desktop/conf/pseudo-distributed.ini\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hive_server_host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hive_server_port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hive_conf_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ebuy/hadoop/apache-hive-1.2.1-bin/conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);