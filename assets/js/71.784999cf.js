(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{376:function(t,s,n){"use strict";n.r(s);var e=n(2),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"一篇很不错的iptables的shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一篇很不错的iptables的shell","aria-hidden":"true"}},[t._v("#")]),t._v(" 一篇很不错的iptables的shell")]),t._v(" "),n("p",[t._v("一篇很不错的iptables的shell\n")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  ")]),t._v("\nmodprobe ipt_MASQUERADE  \nmodprobe ip_conntrack_ftp  \nmodprobe ip_nat_ftp  \niptables -F  \niptables -t nat -F  \niptables -X  \niptables -t nat -X  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###########################INPUT键###################################  ")]),t._v("\niptables -P INPUT DROP  \niptables -A INPUT -m state –state ESTABLISHED,RELATED -j ACCEPT  \niptables -A INPUT -p tcp -m multiport –dports "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("110,80")]),t._v(",25 -j ACCEPT  \niptables -A INPUT -p tcp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("139")]),t._v(" -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许内网samba,smtp,pop3,连接  ")]),t._v("\niptables -A INPUT -i eth1 -p udp -m multiport –dports "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许dns连接  ")]),t._v("\niptables -A INPUT -p tcp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1723")]),t._v(" -j ACCEPT  \niptables -A INPUT -p gre -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许外网vpn连接  ")]),t._v("\niptables -A INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.186")]),t._v(".0.0/24 -p tcp -m state –state ESTABLISHED,RELATED -j ACCEPT  \niptables -A INPUT -i ppp0 -p tcp –syn -m connlimit –connlimit-above "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为了防止DOS太多连接进来,那么可以允许最多15个初始连接,超过的丢弃  ")]),t._v("\niptables -A INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.186")]),t._v(".0.0/24 -p tcp –syn -m connlimit –connlimit-above "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为了防止DOS太多连接进来,那么可以允许最多15个初始连接,超过的丢弃  ")]),t._v("\niptables -A INPUT -p icmp -m limit –limit "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/s -j LOG –log-level INFO –log-prefix “ICMP packet IN: “  \niptables -A INPUT -p icmp -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#禁止icmp通信-ping 不通  ")]),t._v("\niptables -t nat -A POSTROUTING -o ppp0 -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -j MASQUERADE  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#内网转发  ")]),t._v("\niptables -N syn-flood  \niptables -A INPUT -p tcp –syn -j syn-flood  \niptables -I syn-flood -p tcp -m limit –limit "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/s –limit-burst "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" -j RETURN  \niptables -A syn-flood -j REJECT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#防止SYN攻击 轻量  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#######################FORWARD链###########################  ")]),t._v("\niptables -P FORWARD DROP  \niptables -A FORWARD -p tcp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -m multiport –dports "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80,110")]),t._v(",21,25,1723 -j ACCEPT  \niptables -A FORWARD -p udp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -j ACCEPT  \niptables -A FORWARD -p gre -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -j ACCEPT  \niptables -A FORWARD -p icmp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#允许 vpn客户走vpn网络连接外网  ")]),t._v("\niptables -A FORWARD -m state –state ESTABLISHED,RELATED -j ACCEPT  \niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -m string –string “tencent” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":15 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#星期一到星期六的8:00-12:30禁止qq通信  ")]),t._v("\niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -m string –string “TENCENT” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":15 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#星期一到星期六的8:00-12:30禁止qq通信  ")]),t._v("\niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -m string –string “tencent” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":30 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -m string –string “TENCENT” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":30 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#星期一到星期六的13:30-20:30禁止QQ通信  ")]),t._v("\niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -m string –string “qq.com” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(":15 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#星期一到星期六的8:00-12:30禁止qq网页  ")]),t._v("\niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -m string –string “qq.com” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":00 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#星期一到星期六的13:30-20:30禁止QQ网页  ")]),t._v("\niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -m string –string “ay2000.net” -j DROP  \niptables -I FORWARD -d "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -m string –string “宽频影院” -j DROP  \niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -m string –string “色情” -j DROP  \niptables -I FORWARD -p tcp –sport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" -m string –string “广告” -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#禁止ay2000.net，宽频影院，色情，广告网页连接 ！但中文 不是很理想  ")]),t._v("\niptables -A FORWARD -m ipp2p –edk –kazaa –bit -j DROP  \niptables -A FORWARD -p tcp -m ipp2p –ares -j DROP  \niptables -A FORWARD -p udp -m ipp2p –kazaa -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#禁止BT连接  ")]),t._v("\niptables -A FORWARD -p tcp –syn –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" -m connlimit –connlimit-above "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" –connlimit-mask "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#######################################################################  ")]),t._v("\nsysctl -w net.ipv4.ip_forward"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打开转发  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#######################################################################  ")]),t._v("\nsysctl -w net.ipv4.tcp_syncookies"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打开 syncookie （轻量级预防 DOS 攻击）  ")]),t._v("\nsysctl -w net.ipv4.netfilter.ip_conntrack_tcp_timeout_established"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3800")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置默认 TCP 连接痴呆时长为 3800 秒（此选项可以大大降低连接数）  ")]),t._v("\nsysctl -w net.ipv4.ip_conntrack_max"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置支持最大连接树为 30W（这个根据你的内存和 iptables 版本来，每个 connection 需要 300 多个字节）  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#######################################################################  ")]),t._v("\niptables -I INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.50 -j ACCEPT  \niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.50 -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#192.168.0.2是我的机子，全部放行！  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("############################完#########################################")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);