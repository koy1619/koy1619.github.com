(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{469:function(e,n,t){"use strict";t.r(n);var a=t(1),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cisco-asa5520-ha-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cisco-asa5520-ha-配置","aria-hidden":"true"}},[e._v("#")]),e._v(" CISCO ASA5520 HA 配置")]),e._v(" "),t("p",[e._v("#主防火墙配置")]),e._v(" "),t("p",[e._v("##接口配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("interface GigabitEthernet0/0\n nameif outside\n security-level 0\n ip address 192.168.2.226 255.255.255.0 standby 192.168.2.241 \n!\ninterface GigabitEthernet0/1\n nameif inside\n security-level 100\n ip address 192.168.100.1 255.255.255.0 standby 192.168.100.4 \n!             \ninterface GigabitEthernet0/2\n description STATE Failover Interface\n!\ninterface GigabitEthernet0/3\n description LAN Failover Interface\n")])])]),t("p",[e._v("##HA配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("failover lan unit primary\n\nfailover lan interface HA GigabitEthernet0/3\nfailover interface ip HA 10.10.10.1 255.255.255.0 standby 10.10.10.2\n\nfailover link stateful GigabitEthernet0/2\nfailover interface ip stateful 10.10.11.1 255.255.255.252 standby 10.10.11.2\n\nfailover\n")])])]),e._v(" "),t("p",[e._v("#备防火墙配置")]),e._v(" "),t("p",[t("strong",[e._v("HA配置")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("failover lan unit secondary\n\nfailover lan interface HA GigabitEthernet0/3\nfailover interface ip HA 10.10.10.1 255.255.255.0 standby 10.10.10.2\n\nfailover link stateful GigabitEthernet0/2\nfailover interface ip stateful 10.10.11.1 255.255.255.252 standby 10.10.11.2\n\nfailover\n")])])]),t("p",[e._v("#结果检查")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("show failover")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Failover On \nFailover unit Primary\nFailover LAN Interface: HA GigabitEthernet0/3 (up)\nUnit Poll frequency 1 seconds, holdtime 15 seconds\nInterface Poll frequency 5 seconds, holdtime 25 seconds\nInterface Policy 1\nMonitored Interfaces 3 of 250 maximum\nVersion: Ours 8.2(1), Mate 8.2(1)\nLast Failover at: 03:45:17 HKST Dec 7 2015\n        This host: Primary - Active \n                Active time: 98922458 (sec)\n                slot 0: ASA5520 hw/sw rev (2.0/8.2(1)) status (Up Sys)\n                  Interface outside (192.168.2.226): Normal (Waiting)\n                  Interface inside (192.168.100.1): Normal (Waiting)\n                  Interface management (0.0.0.0): Link Down (Waiting)\n                slot 1: empty\n        Other host: Secondary - Standby Ready \n                Active time: 539 (sec)\n                slot 0: ASA5520 hw/sw rev (2.0/8.2(1)) status (Up Sys)\n                  Interface outside (192.168.2.241): Normal (Waiting)\n                  Interface inside (192.168.100.4): Normal (Waiting)\n                  Interface management (0.0.0.0): Link Down (Waiting)\n                slot 1: empty\n\nStateful Failover Logical Update Statistics\n        Link : stateful GigabitEthernet0/2 (up)\n        Stateful Obj    xmit       xerr       rcv        rerr      \n        General         19566      0          19         0         \n        sys cmd         19         0          19         0         \n        up time         0          0          0          0         \n        RPC services    0          0          0          0         \n        TCP conn        18563      0          0          0         \n        UDP conn        699        0          0          0         \n        ARP tbl         279        0          0          0         \n        Xlate_Timeout   0          0          0          0         \n        VPN IKE upd     2          0          0          0         \n        VPN IPSEC upd   4          0          0          0         \n        VPN CTCP upd    0          0          0          0         \n        VPN SDI upd     0          0          0          0         \n        VPN DHCP upd    0          0          0          0         \n        SIP Session     0          0          0          0         \n\n        Logical Update Queue Information\n                        Cur     Max     Total\n        Recv Q:         0       18      154\n        Xmit Q:         0       1024    22916\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);