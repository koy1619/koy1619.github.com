(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{501:function(n,s,a){"use strict";a.r(s);var e=a(2),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("#主防火墙配置")]),n._v(" "),a("p",[n._v("##接口配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("interface GigabitEthernet0/0\n nameif outside\n security-level 0\n ip address 192.168.2.226 255.255.255.0 standby 192.168.2.241 \n!\ninterface GigabitEthernet0/1\n nameif inside\n security-level 100\n ip address 192.168.100.1 255.255.255.0 standby 192.168.100.4 \n!             \ninterface GigabitEthernet0/2\n description STATE Failover Interface\n!\ninterface GigabitEthernet0/3\n description LAN Failover Interface\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("p",[n._v("##HA配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("failover lan unit primary\n\nfailover lan interface HA GigabitEthernet0/3\nfailover interface ip HA 10.10.10.1 255.255.255.0 standby 10.10.10.2\n\nfailover link stateful GigabitEthernet0/2\nfailover interface ip stateful 10.10.11.1 255.255.255.252 standby 10.10.11.2\n\nfailover\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("#备防火墙配置")]),n._v(" "),a("p",[a("strong",[n._v("HA配置")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("failover lan unit secondary\n\nfailover lan interface HA GigabitEthernet0/3\nfailover interface ip HA 10.10.10.1 255.255.255.0 standby 10.10.10.2\n\nfailover link stateful GigabitEthernet0/2\nfailover interface ip stateful 10.10.11.1 255.255.255.252 standby 10.10.11.2\n\nfailover\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("#结果检查")]),n._v(" "),a("blockquote",[a("ul",[a("li",[n._v("show failover")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Failover On \nFailover unit Primary\nFailover LAN Interface: HA GigabitEthernet0/3 (up)\nUnit Poll frequency 1 seconds, holdtime 15 seconds\nInterface Poll frequency 5 seconds, holdtime 25 seconds\nInterface Policy 1\nMonitored Interfaces 3 of 250 maximum\nVersion: Ours 8.2(1), Mate 8.2(1)\nLast Failover at: 03:45:17 HKST Dec 7 2015\n        This host: Primary - Active \n                Active time: 98922458 (sec)\n                slot 0: ASA5520 hw/sw rev (2.0/8.2(1)) status (Up Sys)\n                  Interface outside (192.168.2.226): Normal (Waiting)\n                  Interface inside (192.168.100.1): Normal (Waiting)\n                  Interface management (0.0.0.0): Link Down (Waiting)\n                slot 1: empty\n        Other host: Secondary - Standby Ready \n                Active time: 539 (sec)\n                slot 0: ASA5520 hw/sw rev (2.0/8.2(1)) status (Up Sys)\n                  Interface outside (192.168.2.241): Normal (Waiting)\n                  Interface inside (192.168.100.4): Normal (Waiting)\n                  Interface management (0.0.0.0): Link Down (Waiting)\n                slot 1: empty\n\nStateful Failover Logical Update Statistics\n        Link : stateful GigabitEthernet0/2 (up)\n        Stateful Obj    xmit       xerr       rcv        rerr      \n        General         19566      0          19         0         \n        sys cmd         19         0          19         0         \n        up time         0          0          0          0         \n        RPC services    0          0          0          0         \n        TCP conn        18563      0          0          0         \n        UDP conn        699        0          0          0         \n        ARP tbl         279        0          0          0         \n        Xlate_Timeout   0          0          0          0         \n        VPN IKE upd     2          0          0          0         \n        VPN IPSEC upd   4          0          0          0         \n        VPN CTCP upd    0          0          0          0         \n        VPN SDI upd     0          0          0          0         \n        VPN DHCP upd    0          0          0          0         \n        SIP Session     0          0          0          0         \n\n        Logical Update Queue Information\n                        Cur     Max     Total\n        Recv Q:         0       18      154\n        Xmit Q:         0       1024    22916\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);