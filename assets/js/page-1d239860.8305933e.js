(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{515:function(n,s,a){"use strict";a.r(s);var e=a(2),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("##一. centos 7下查看网卡信息\n命令 ip addr")]),n._v(" "),a("p",[n._v("最小化安装的Centos7系统并没有nano vim wget curl ifconfig lsof命令，这里首先安装一下")]),n._v(" "),a("p",[a("code",[n._v("yum -y install nano vim wget curl net-tools lsof")])]),n._v(" "),a("p",[n._v("安装后就可以使用ifconfig 等命令")]),n._v(" "),a("p",[n._v("配置bond")]),n._v(" "),a("p",[n._v("服务器有4个网卡分别为 ifcfg-em1 ifcfg-em2 ifcfg-em3 ifcfg-em4 网卡ifcfg-em1和ifcfg-em2配置bond0")]),n._v(" "),a("p",[n._v("翠花上配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("cd /etc/sysconfig/network-scripts\ncp ifcfg-em1 ifcfg-bond0\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])]),a("p",[n._v("网卡配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("vi /etc/sysconfig/network-scripts/ifcfg-em1\n\nDEVICE=em1\n\nNAME=em1\n\nTYPE=Ethernet\n\nBOOTPROTO=none\n\nONBOOT=yes\n\nMASTER=bond4\n\nSLAVE=yes\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("vi /etc/sysconfig/network-scripts/ifcfg-em2\n\nDEVICE=em2\n\nNAME=em2\n\nTYPE=Ethernet\n\nBOOTPROTO=none\n\nONBOOT=yes\n\nMASTER=bond4\n\nSLAVE=yes\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('vi /etc/sysconfig/network-scripts/ifcfg-bond0\n\nDEVICE=bond0\n\nNAME=bond0\n\nTYPE=Ethernet\n\nONBOOT=yes\n\nBOOTPROTO=none\n\nBONDING_MASTER=yes  (centos7 下必须有这条命令，和centos6.5的区别)\n\nIPADDR=*.*.*.*\n\nGATEWAY=*.*.*.*\n\nNETMASK=*.*.*.*\n\nDNS1=*.*.*.*\n\nDNS2=*.*.*.*\n\nUSERCTL=no\n\nBONDING_OPTS="mode=1 miimon=100"\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("p",[n._v("重启网卡（centos7下重启命令和centos6.5不同）")]),n._v(" "),a("p",[a("code",[n._v("systemctl restart network")])]),n._v(" "),a("p",[n._v("bonding状态查看")]),n._v(" "),a("p",[a("code",[n._v("cat /proc/net/bonding/bond0")])]),n._v(" "),a("p",[n._v("##二.关于网卡配置bond后需要更改IP到不同网段简单步骤\n实验说明\n服务器网卡em1、em2配置bond，IP地址为10.10.10.5\n网卡em1和em2分别接在交换机SW1和SW2的五号端口在vlan10\n因网络调整现在需要把交换机5号端口改到vlan20（114.80.218.*段）\nbond的IP地址改为114.80.218.5")]),n._v(" "),a("p",[n._v("配置思路\n借助单网卡配置多IP的方法，增加一块虚拟网卡配置上需要更改的新网段IP114.80.218.6\n重启网卡然后更改交换机配置 划分端口到新valn 20，变更完成后。就可以使用114.80.218.6远程服务器\n然后在更改ifcfg-bond0的ip为114.80.218.5 随后删除ifcfg-bond0:0 变更完成。\n配置ifcfg-bond0:0的这种情景，可以应用更改在服务器没有远程管理口，人又不在服务器旁边。\n但是可以远程管理现有服务器和交换机。万一更改不成功还可以回退。通过原IP远程服务器。")]),n._v(" "),a("p",[n._v("翠花上配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('cd /etc/sysconfig/network-scripts\n\ncp ifcfg-bond0 ifcfg-bond0:0\n\nvi /etc/sysconfig/network-scripts/ifcfg-bond0:0\n\nDEVICE=bond0:0\n\nNAME=bond0:0\n\nTYPE=Ethernet\n\nONBOOT=yes\n\nBOOTPROTO=none\n\nBONDING_MASTER=yes  (centos7 下必须有这条命令，和centos6.5的区别)\n\nIPADDR=114.80.218.6\n\nGATEWAY=114.80.218.1\n\nNETMASK=255.255.255.0\n\nDNS1=202.96.209.5\n\nDNS2=202.96.209.133\n\nUSERCTL=no\n\nBONDING_OPTS="mode=1 miimon=100"\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br")])]),a("p",[n._v("重启网卡（centos7下重启命令和centos6.5不同）")]),n._v(" "),a("p",[a("code",[n._v("systemctl restart network")])]),n._v(" "),a("p",[n._v("更改交换机配置把5号端口划分到vlan 20")]),n._v(" "),a("p",[n._v("ping 114.80.218.6可以到达")]),n._v(" "),a("p",[n._v("ssh 114.80.218.6 然后更改ifcfg-bond0的ip为114.80.218.5")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('vi /etc/sysconfig/network-scripts/ifcfg-bond0\n\nDEVICE=bond0\n\nNAME=bond0\n\nTYPE=Ethernet\n\nONBOOT=yes\n\nBOOTPROTO=none\n\nBONDING_MASTER=yes  (centos7 下必须由这条命令，和centos6.5的区别)\n\nIPADDR=114.80.218.5\n\nGATEWAY=114.80.218.1\n\nNETMASK=255.255.255.0\n\nDNS1=202.96.209.5\n\nDNS2=202.96.209.133\n\nUSERCTL=no\n\nBONDING_OPTS="mode=1 miimon=100"\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br")])]),a("p",[n._v("重启网卡（centos7下重启命令和centos6.5不同）")]),n._v(" "),a("p",[a("code",[n._v("systemctl restart network")])]),n._v(" "),a("p",[n._v("ssh 114.80.218.5 删除ifcfg-bond0:0")]),n._v(" "),a("p",[a("code",[n._v("cd /etc/sysconfig/network-scripts")])]),n._v(" "),a("p",[a("code",[n._v("rm -rf ifcfg-bond0:0")])]),n._v(" "),a("p",[n._v("至此IP变更完成")]),n._v(" "),a("p",[n._v("关于测试\nping 114.80.218.5")]),n._v(" "),a("p",[n._v("关闭交换机sw1的5号端口，没有掉包\n开启交换机sw1的5号端口，等待端口起来")]),n._v(" "),a("p",[n._v("关闭交换机sw2的5号端口，没有掉包\n开启交换机sw2的5号端口，等待端口起来\n一切正常，收工")])])}),[],!1,null,null,null);s.default=t.exports}}]);