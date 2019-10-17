(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{351:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"rds备份文件恢复到自建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rds备份文件恢复到自建数据库","aria-hidden":"true"}},[s._v("#")]),s._v(" RDS备份文件恢复到自建数据库")]),s._v(" "),t("h2",{attrs:{id:"安装启动mysql数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装启动mysql数据库","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装启动mysql数据库")]),s._v(" "),t("p",[s._v("在进行RDS本地恢复数据之前，我们需要先在本地服务器上安装mysql的5.6版本，因为RDS是5.6版本，所以我们本地的mysql数据库要与RDS版本对应。")]),s._v(" "),t("p",[s._v("以下为了省去编译安装mysql,采取了使用"),t("code",[s._v("mysql_glibc")]),s._v("二进制免编译快速安装启动")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.sohu.com/mysql/MySQL-5.6/mysql-5.6.35-linux-glibc2.5-x86_64.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget http://mirrors.sohu.com/mysql/MySQL-5.5/mysql-5.5.55-linux2.6-x86_64.tar.gz")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mysql-5.6.35-linux-glibc2.5-x86_64.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R xiaolei.xiaolei mysql-5.6.35-linux-glibc2.5-x86_64\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" xiaolei\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mysql-5.6.35-linux-glibc2.5-x86_64\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" etc\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" support-files/my-default.cnf  etc/my.cnf\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" etc/my.cnf  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v("\nserver_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v("\nsocket "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/mysql-5.6.36-linux-glibc2.5-x86_64/data/mysql.sock\ndefault-storage-engine"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INNODB\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sql_mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\n\n\n./scripts/mysql_install_db --basedir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/mysql-5.6.35-linux-glibc2.5-x86_64 --datadir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/mysql-5.6.35-linux-glibc2.5-x86_64/data --defaults-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("etc/my.cnf\n\n./bin/mysqld_safe --defaults-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("etc/my.cnf\n\n./bin/mysql -uroot -p -S data/mysql.sock \n\nSHOW VARIABLES LIKE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'socket'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"下载rds备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载rds备份","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载RDS备份")]),s._v(" "),t("p",[s._v("登陆阿里云RDS控制台自行下载")]),s._v(" "),t("p",[s._v("下载下来解压可以很明显的看出，RDS是通过"),t("code",[s._v("percona-Xtrabackup")]),s._v("进行全量物理备份的")]),s._v(" "),t("h2",{attrs:{id:"上传备份至本地mysql的data目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传备份至本地mysql的data目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 上传备份至本地mysql的data目录")]),s._v(" "),t("p",[s._v("停止本地mysqld")]),s._v(" "),t("p",[s._v("清空本地data目录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /data/mysql-5.6.36-linux-glibc2.5-x86_64/data/*\n")])])]),t("p",[s._v("上传RDS备份至本地mysql的data目录")]),s._v(" "),t("h2",{attrs:{id:"启动本地mysqld查看数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动本地mysqld查看数据","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动本地mysqld查看数据")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./bin/mysqld_safe --defaults-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("etc/my.cnf\n./bin/mysql  -uroot -p -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -P "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## RDS本地是没有root密码的")]),s._v("\nshow databases"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nuse xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("参考：")]),s._v(" "),t("p",[s._v("http://www.cnblogs.com/ilanni/archive/2016/02/25/5218129.html")]),s._v(" "),t("p",[s._v("https://help.aliyun.com/knowledge_detail/41817.html")])])}),[],!1,null,null,null);a.default=e.exports}}]);