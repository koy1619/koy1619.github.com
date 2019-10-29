(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{437:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("😊")]),s._v(" "),n("p",[s._v("大概说一下浮动路由在网络中的作用主要提供路由备份。保证网络中主链路失效的情况下，提供备份路由实现链路冗余备份。")]),s._v(" "),n("p",[s._v("实验要求"),n("br"),s._v("\n更具下图分别对R1和R2接口进行配置，s0/0链路配置为静态浮动路由，f0/0链路配置为RIP主路由。但f0/0主链路出现故障时路由器自动切换备用线路。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("R1"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#conf t  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#interface s0/0/0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip add 172.168.1.1 255.255.255.0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#clock rate 128000  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#no shut  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#interface f0/0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip add 172.168.2.1 255.255.255.0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#no shut  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#interface loop 0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip add 1.1.1.1 255.255.255.0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#no shut  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#conf t  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#interface s0/0/0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip add 172.168.1.2 255.255.255.0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#clock rate 128000  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#no shut  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#interface f0/0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip add 172.168.2.2 255.255.255.0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#no shut  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#interface loop 0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip add 2.2.2.2 255.255.255.0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#no shut  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit  ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("配置静态浮动路由，修改静态路由的管理距离为125，使路由器选则路由时优先选择RIP。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("R1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip route 2.2.2.0 255.255.255.0 172.168.1.2 125  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# router rip  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# version 2  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# no auto-summary  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# network 1.0.0.0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# network 172.168.2.0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip route 1.1.1.0 255.255.255.0 172.168.1.1 125  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# router rip  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# version 2  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# no auto-summary  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# network 1.0.0.0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# network 172.168.2.0  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit  ")]),s._v("\nR2"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#show ip route  ")]),s._v("\nCodes: C – connected, S – static, I – IGRP, R – RIP, M – mobile, B – BGP  \nD – EIGRP, EX – EIGRP external, O – OSPF, IA – OSPF inter area  \nN1 – OSPF NSSA external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", N2 – OSPF NSSA external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \nE1 – OSPF external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", E2 – OSPF external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", E – EGP  \ni – IS-IS, L1 – IS-IS level-1, L2 – IS-IS level-2, ia – IS-IS inter area  \n* – candidate default, U – per-user static route, o – ODR  \nP – periodic downloaded static route  \nGateway of last resort is not "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("路由器将去往1.1.1.0网段的RIP路由写入路由表，因为RIP的管理距离为120，小于静态路由管理距离优先，所有静态路由处于备份状态。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0.0/24 is subnetted, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" subnets  \nR "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("/1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" via "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".2.1, 00:00:10, FastEthernet0/0  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("/1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" via "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".1.1, 00:00:10, Serial0/0/0  \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(".0.0/24 is subnetted, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" subnets  \nC "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),s._v(".2.0 is directly connected, Loopback0  \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".0.0/24 is subnetted, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" subnets  \nC "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".1.0 is directly connected, Serial0/0/0  \nC "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".2.0 is directly connected, FastEthernet0/0  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("此时我们将R1路由器的f0/0口关闭，目的是将R2的静态路由激活。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("R1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#interface f0/0  ")]),s._v("\nR1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config-if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#shut  ")]),s._v("\n%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to administratively down  \n%LINEPROTO-5-UPDO  \nR2"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ")]),s._v("\n%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to down  \nR2"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#show ip route  ")]),s._v("\nCodes: C – connected, S – static, I – IGRP, R – RIP, M – mobile, B – BGP  \nD – EIGRP, EX – EIGRP external, O – OSPF, IA – OSPF inter area  \nN1 – OSPF NSSA external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", N2 – OSPF NSSA external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \nE1 – OSPF external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", E2 – OSPF external "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", E – EGP  \ni – IS-IS, L1 – IS-IS level-1, L2 – IS-IS level-2, ia – IS-IS inter area  \n* – candidate default, U – per-user static route, o – ODR  \nP – periodic downloaded static route  \nGateway of last resort is not "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("在R2中重新查看路由表信息，去往1.1.1.0网段的静态路由（备份路由）已经写入到路由表。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0.0/24 is subnetted, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" subnets  \nR "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("/1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" via "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".1.1, 00:00:00, Serial0/0/0  \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(".0.0/24 is subnetted, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" subnets  \nC "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),s._v(".2.0 is directly connected, Loopback0  \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".0.0/24 is subnetted, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" subnets  \nC "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.168")]),s._v(".1.0 is directly connected, Serial0/0/0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);