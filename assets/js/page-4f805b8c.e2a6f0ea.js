(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{424:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("之前玩过cacti和nagios，算是一个大家耳熟能详的业内常用的的网管互补组合，但个人感觉前者由于调用snmp协议，导致有时候在网络不太稳定时会有数据丢失情况，后者nagios虽然不依赖于SNMP，但客户端的复杂的安装，初始配置以及需要读懂插件语法导致会让很多初学者望而却步。"),n("br"),s._v("\nzabbix不仅吸取了两者的制图和动态监测的优点，而且很多插件以及常用脚本模板都是系统自带，最重要的配置相对于前两者简洁了很多，所以省去了很多学习成本，加之该监控系统是利用PHP语言写的，系统个人定制就无需使用者修改底层代码，而可以直接在WEB界面去按照自己的偏好设置，支持字体修改以及简体中文。")])]),s._v(" "),n("p",[s._v("1."),n("a",{attrs:{href:"http://www.zabbix.com/download.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载zabbix"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("2.安装zabbix所需的组件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" curl-devel net-snmp net-snmp-devel perl-DBI\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".创建用户账号\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("``bash\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" zabbix\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g zabbix zabbix\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -s /sbin/nologin zabbix\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("4.创建zabbix数据库并导入zabbix数据库数据")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mysql -u root -p123456\ngrant all on zabbix.* to zabbix@localhost identified by "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncreate database zabbix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf zabbix-2.2.3.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" zabbix-2.2.3\nmysql -uzabbix -p123456 zabbix "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" database/mysql/schema.sql\nmysql -uzabbix -p123456 zabbix "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" database/mysql/images.sql\nmysql -uzabbix -p123456 zabbix "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" database/mysql/data.sql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("5.编译安装(server,agent)")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/zabbix-server --enable-server --enable-agent --with-mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/bin/mysql_config --enable-ipv6 --with-net-snmp --with-libcurl\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("6.编辑server端配置文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/local/zabbix-server/etc/zabbix_server.conf\n\n修改以下参数\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogFile")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/zabbix_server.log\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBHost")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBPort")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zabbix \n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBUser")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zabbix \n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DBPassword")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("7、启动守护进程server")]),s._v(" "),n("p",[s._v("在服务器端运行启动zabbix_server")]),s._v(" "),n("p",[n("code",[s._v("/usr/local/zabbix-server/sbin/zabbix_server")])]),s._v(" "),n("p",[s._v("server启动端口为10051")]),s._v(" "),n("p",[s._v("iptables放行zabbix-server的10051端口")]),s._v(" "),n("p",[n("code",[s._v("iptables -A INPUT -p tcp --dport 10051 -j ACCEPT")])]),s._v(" "),n("p",[s._v("注：重启服务可直接kill掉zabbix进程再重新按照以上方法启动")]),s._v(" "),n("p",[s._v("或配置开机启动脚本：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" zabbix-2.2.2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" misc/init.d/tru64/zabbix_server   /etc/init.d/zabbix_server\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /etc/init.d/zabbix_server\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/init.d/zabbix_server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("code",[s._v("vi /etc/init.d/zabbix_server")])]),s._v(" "),n("p",[s._v("在文件头部的#!/bin/sh行下分别添加如下两行：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("--------------\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#chkconfig: 35 95 95")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#description:zabbix server")]),s._v("\n--------------\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("将DAEMON后面的参数改成你自定义的路径")]),s._v(" "),n("p",[n("code",[s._v("DAEMON=/usr/local/zabbix-server/sbin/zabbix_server")])]),s._v(" "),n("p",[s._v("加入开机启动")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --add zabbix_server  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" zabbix_server on\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("重启服务：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" zabbix_server restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("8.安装zabbix web界面"),n("br"),s._v("\n复制ZABBIX PHP源代码文件"),n("br"),s._v("\nzabbix的服务端程序是用php写的，因此需要一个支持php架构的服务器平台"),n("br"),s._v("\n现在将ZABBIX安装目录下frontends/php下面的php源代码文件拷贝到web服务器html文件目录下面。")]),s._v(" "),n("p",[s._v("访问URL，安装过程中碰到的各种php扩展自行查找安装，直到调通全部OK！到此zabbix的server端配置完成。")])])}),[],!1,null,null,null);a.default=t.exports}}]);