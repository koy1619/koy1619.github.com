(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{358:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"zabbix的agent端安装配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zabbix的agent端安装配置","aria-hidden":"true"}},[a._v("#")]),a._v(" zabbix的agent端安装配置")]),a._v(" "),s("h2",{attrs:{id:"下载zabbix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载zabbix","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载zabbix")]),a._v(" "),s("h2",{attrs:{id:"安装zabbix所需的组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装zabbix所需的组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装zabbix所需的组件")]),a._v(" "),s("p",[s("code",[a._v("yum -y install curl curl-devel net-snmp net-snmp-devel perl-DBI")])]),a._v(" "),s("h2",{attrs:{id:"创建用户账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建用户账号","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建用户账号")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("groupadd")]),a._v(" zabbix\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" -g zabbix zabbix\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" -s /sbin/nologin zabbix\n")])])]),a._v(" "),s("h2",{attrs:{id:"编译安装-agent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译安装-agent","aria-hidden":"true"}},[a._v("#")]),a._v(" 编译安装(agent)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf zabbix-2.4.5.tar.gz \n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" zabbix-2.4.5\n./configure --prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/zabbix-agent --enable-agent  --enable-ipv6 --with-net-snmp --with-libcurl\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("h2",{attrs:{id:"编辑agent端配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑agent端配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 编辑agent端配置文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@Server2 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# cat /usr/local/zabbix-agent/etc/zabbix_agentd.conf |grep -v "#"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LogFile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/tmp/zabbix_agentd.log\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.10")]),a._v(".3.225\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ServerActive")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.10")]),a._v(".3.225:10051\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Hostname")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.128")]),a._v(".0.81\n")])])]),s("h2",{attrs:{id:"启动守护进程agent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动守护进程agent","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动守护进程agent")]),a._v(" "),s("p",[s("code",[a._v("/usr/local/zabbix-agent/sbin/zabbix_agentd")])]),a._v(" "),s("p",[a._v("server启动端口为10051")]),a._v(" "),s("p",[a._v("iptables放行zabbix-agent的10051端口")]),a._v(" "),s("p",[s("code",[a._v("iptables -A INPUT -p tcp --dport 10051 -j ACCEPT")])]),a._v(" "),s("p",[a._v("注：重启服务可直接kill掉zabbix进程再重新按照以上方法启动")]),a._v(" "),s("p",[a._v("或配置开机启动脚本")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" zabbix-2.4.5\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" misc/init.d/tru64/zabbix_agentd   /etc/init.d/zabbix_agentd\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("755")]),a._v(" /etc/init.d/zabbix_agentd\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/init.d/zabbix_agentd\n在文件头部的"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#!/bin/sh行下分别添加如下两行：")]),a._v("\n--------------\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#chkconfig: 35 95 95")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#description:zabbix agent")]),a._v("\n--------------\n将DAEMON后面的参数改成你自定义的路径\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DAEMON")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/zabbix-agent/sbin/zabbix_agentd\n")])])]),s("h2",{attrs:{id:"加入开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加入开机启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 加入开机启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chkconfig")]),a._v(" --add zabbix_agentd  \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chkconfig")]),a._v(" zabbix_agentd on\n")])])]),s("h2",{attrs:{id:"重启服务："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启服务：","aria-hidden":"true"}},[a._v("#")]),a._v(" 重启服务：")]),a._v(" "),s("p",[s("code",[a._v("service zabbix_agentd restart")])])])}),[],!1,null,null,null);t.default=n.exports}}]);