(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{469:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"一篇很不错的iptables的shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一篇很不错的iptables的shell"}},[s._v("#")]),s._v(" 一篇很不错的iptables的shell")]),s._v(" "),n("p",[s._v("一篇很不错的iptables的shell\n")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ")]),s._v("\nmodprobe ipt_MASQUERADE  \nmodprobe ip_conntrack_ftp  \nmodprobe ip_nat_ftp  \niptables -F  \niptables -t nat -F  \niptables -X  \niptables -t nat -X  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###########################INPUT键###################################  ")]),s._v("\niptables -P INPUT DROP  \niptables -A INPUT -m state –state ESTABLISHED,RELATED -j ACCEPT  \niptables -A INPUT -p tcp -m multiport –dports "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("110,80")]),s._v(",25 -j ACCEPT  \niptables -A INPUT -p tcp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("139")]),s._v(" -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许内网samba,smtp,pop3,连接  ")]),s._v("\niptables -A INPUT -i eth1 -p udp -m multiport –dports "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许dns连接  ")]),s._v("\niptables -A INPUT -p tcp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1723")]),s._v(" -j ACCEPT  \niptables -A INPUT -p gre -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许外网vpn连接  ")]),s._v("\niptables -A INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.186")]),s._v(".0.0/24 -p tcp -m state –state ESTABLISHED,RELATED -j ACCEPT  \niptables -A INPUT -i ppp0 -p tcp –syn -m connlimit –connlimit-above "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为了防止DOS太多连接进来,那么可以允许最多15个初始连接,超过的丢弃  ")]),s._v("\niptables -A INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.186")]),s._v(".0.0/24 -p tcp –syn -m connlimit –connlimit-above "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为了防止DOS太多连接进来,那么可以允许最多15个初始连接,超过的丢弃  ")]),s._v("\niptables -A INPUT -p icmp -m limit –limit "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/s -j LOG –log-level INFO –log-prefix “ICMP packet IN: “  \niptables -A INPUT -p icmp -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止icmp通信-ping 不通  ")]),s._v("\niptables -t nat -A POSTROUTING -o ppp0 -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -j MASQUERADE  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#内网转发  ")]),s._v("\niptables -N syn-flood  \niptables -A INPUT -p tcp –syn -j syn-flood  \niptables -I syn-flood -p tcp -m limit –limit "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/s –limit-burst "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" -j RETURN  \niptables -A syn-flood -j REJECT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#防止SYN攻击 轻量  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#######################FORWARD链###########################  ")]),s._v("\niptables -P FORWARD DROP  \niptables -A FORWARD -p tcp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -m multiport –dports "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80,110")]),s._v(",21,25,1723 -j ACCEPT  \niptables -A FORWARD -p udp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" -j ACCEPT  \niptables -A FORWARD -p gre -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -j ACCEPT  \niptables -A FORWARD -p icmp -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许 vpn客户走vpn网络连接外网  ")]),s._v("\niptables -A FORWARD -m state –state ESTABLISHED,RELATED -j ACCEPT  \niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" -m string –string “tencent” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":15 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#星期一到星期六的8:00-12:30禁止qq通信  ")]),s._v("\niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" -m string –string “TENCENT” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":15 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#星期一到星期六的8:00-12:30禁止qq通信  ")]),s._v("\niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" -m string –string “tencent” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":30 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \niptables -I FORWARD -p udp –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" -m string –string “TENCENT” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":30 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#星期一到星期六的13:30-20:30禁止QQ通信  ")]),s._v("\niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -m string –string “qq.com” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(":15 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#星期一到星期六的8:00-12:30禁止qq网页  ")]),s._v("\niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -m string –string “qq.com” -m "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" –timestart "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":00 –timestop "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":30 –days Mon,Tue,Wed,Thu,Fri,Sat -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#星期一到星期六的13:30-20:30禁止QQ网页  ")]),s._v("\niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -m string –string “ay2000.net” -j DROP  \niptables -I FORWARD -d "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -m string –string “宽频影院” -j DROP  \niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/24 -m string –string “色情” -j DROP  \niptables -I FORWARD -p tcp –sport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m string –string “广告” -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止ay2000.net，宽频影院，色情，广告网页连接 ！但中文 不是很理想  ")]),s._v("\niptables -A FORWARD -m ipp2p –edk –kazaa –bit -j DROP  \niptables -A FORWARD -p tcp -m ipp2p –ares -j DROP  \niptables -A FORWARD -p udp -m ipp2p –kazaa -j DROP  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止BT连接  ")]),s._v("\niptables -A FORWARD -p tcp –syn –dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m connlimit –connlimit-above "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" –connlimit-mask "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#######################################################################  ")]),s._v("\nsysctl -w net.ipv4.ip_forward"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打开转发  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#######################################################################  ")]),s._v("\nsysctl -w net.ipv4.tcp_syncookies"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打开 syncookie （轻量级预防 DOS 攻击）  ")]),s._v("\nsysctl -w net.ipv4.netfilter.ip_conntrack_tcp_timeout_established"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3800")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置默认 TCP 连接痴呆时长为 3800 秒（此选项可以大大降低连接数）  ")]),s._v("\nsysctl -w net.ipv4.ip_conntrack_max"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300000")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置支持最大连接树为 30W（这个根据你的内存和 iptables 版本来，每个 connection 需要 300 多个字节）  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#######################################################################  ")]),s._v("\niptables -I INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.50 -j ACCEPT  \niptables -I FORWARD -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.50 -j ACCEPT  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#192.168.0.2是我的机子，全部放行！  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("############################完#########################################")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);