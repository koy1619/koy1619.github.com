(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{527:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("centos下snmp客户端安装")]),s._v(" "),n("pre",[n("code",[s._v("yum -y install net-snmp\nvi /etc/snmp/snmpd.conf\n")])]),s._v(" "),n("p",[s._v("#定义一个共同体名称community,这里是public,及可以访问这个public的用户名这里是#notConfigUser,public相当于密码")]),s._v(" "),n("pre",[n("code",[s._v("com2sec notConfigUser default public\n")])]),s._v(" "),n("p",[s._v("#定义一个组名这里是notConfigGroup,及组的安全级别,把notConfigGroup这个用户加到这个组中")]),s._v(" "),n("pre",[n("code",[s._v("group notConfigGroup v1 notConfigUser  \ngroup notConfigGroup v2c notConfigUser\n")])]),s._v(" "),n("p",[s._v("#定义一个可操作的视图view名,这里是all,范围是.1")]),s._v(" "),n("pre",[n("code",[s._v("view systemview included .1\n")])]),s._v(" "),n("p",[s._v("定义notConfigUser这个组在all这个视图范围内可做的操作")]),s._v(" "),n("pre",[n("code",[s._v('access notConfigGroup "" any noauth exact systemview none none\n')])]),s._v(" "),n("p",[s._v("#管理员的一些信息")]),s._v(" "),n("pre",[n("code",[s._v("syslocation www.uintec.com  \nsyscontact maxiaolei (xiaolei.ma@uintec.com)  \ndontLogTCPWrappersConnects yes[/php]\niptables -A INPUT -p udp &#8211;dport 161 -j ACCEPT\nservice snmpd restart\n/etc/rc.d/init.d/iptables restart\n")])]),s._v(" "),n("p",[s._v("验证：在另一台主机安装net-snmp-utils（SNMP信息采集包）")]),s._v(" "),n("pre",[n("code",[s._v("yum install net-snmp-utils\n\nsnmpwalk -v 1 192.168.1.1 -c public system\n")])]),s._v(" "),n("p",[s._v("出现下面信息则说明 SNMP 已经正常工作了")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("SNMPv2-MIB::sysDescr.0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: Linux localhost.localdomain "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".18-194.el5PAE "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 SMP Fri Apr 2 15:37:44 EDT 2010 i686  ")]),s._v("\nSNMPv2-MIB::sysObjectID.0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: NET-SNMP-MIB::netSnmpAgentOIDs.10  \nDISMAN-EVENT-MIB::sysUpTimeInstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("412562541")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" days, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":00:25.41  \nSNMPv2-MIB::sysContact.0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: maxiaolei "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xiaolei.ma@uintec.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \nSNMPv2-MIB::sysName.0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: localhost.localdomain  \nSNMPv2-MIB::sysLocation.0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: www.uintec.com  \nSNMPv2-MIB::sysORLastChange.0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.01  \nSNMPv2-MIB::sysORID.1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: SNMPv2-MIB::snmpMIB  \nSNMPv2-MIB::sysORID.2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: TCP-MIB::tcpMIB  \nSNMPv2-MIB::sysORID.3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: IP-MIB::ip  \nSNMPv2-MIB::sysORID.4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: UDP-MIB::udpMIB  \nSNMPv2-MIB::sysORID.5 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: SNMP-VIEW-BASED-ACM-MIB::vacmBasicGroup  \nSNMPv2-MIB::sysORID.6 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: SNMP-FRAMEWORK-MIB::snmpFrameworkMIBCompliance  \nSNMPv2-MIB::sysORID.7 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: SNMP-MPD-MIB::snmpMPDCompliance  \nSNMPv2-MIB::sysORID.8 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" OID: SNMP-"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("-BASED-SM-MIB::usmMIBCompliance  \nSNMPv2-MIB::sysORDescr.1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: The MIB module "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" SNMPv2 entities  \nSNMPv2-MIB::sysORDescr.2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: The MIB module "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" managing TCP implementations  \nSNMPv2-MIB::sysORDescr.3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: The MIB module "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" managing IP and ICMP implementations  \nSNMPv2-MIB::sysORDescr.4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: The MIB module "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" managing UDP implementations  \nSNMPv2-MIB::sysORDescr.5 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: View-based Access Control Model "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" SNMP.  \nSNMPv2-MIB::sysORDescr.6 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: The SNMP Management Architecture MIB.  \nSNMPv2-MIB::sysORDescr.7 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: The MIB "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Message Processing and Dispatching.  \nSNMPv2-MIB::sysORDescr.8 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING: The management information definitions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the SNMP User-based Security Model.  \nSNMPv2-MIB::sysORUpTime.1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.00  \nSNMPv2-MIB::sysORUpTime.2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.00  \nSNMPv2-MIB::sysORUpTime.3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.00  \nSNMPv2-MIB::sysORUpTime.4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.00  \nSNMPv2-MIB::sysORUpTime.5 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.00  \nSNMPv2-MIB::sysORUpTime.6 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.01  \nSNMPv2-MIB::sysORUpTime.7 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.01  \nSNMPv2-MIB::sysORUpTime.8 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Timeticks: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00:00.01\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);