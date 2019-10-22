(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{390:function(n,e,t){"use strict";t.r(e);var r=t(1),s=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"xrdp远程登树莓派出错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xrdp远程登树莓派出错","aria-hidden":"true"}},[n._v("#")]),n._v(" XRDP远程登树莓派出错")]),n._v(" "),t("p",[n._v("============")]),n._v(" "),t("p",[n._v("由于很久没有玩我的小派了，今天插上去首先就想图形界面看看")]),n._v(" "),t("p",[n._v("mstsc远程登录树莓派，界面选择sesman-Xvnc，输入用户名密码登录")]),n._v(" "),t("p",[n._v("登录提示如下：")]),n._v(" "),t("pre",[t("code",[n._v("connecting to sesman ip 127.0.0.1 port 3350\nsesman connect ok\nsending login info to sesman \nlogin successful for display 14\nstarted connecting\nconnecting to 127.0.0.1 5910\nerror - problem connecting \n")])]),n._v(" "),t("p",[n._v("查看5910和3389端口")]),n._v(" "),t("pre",[t("code",[n._v("pi@raspberrypi ~ $ netstat -tnl                    \nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State      \ntcp        0      0 0.0.0.0:9091            0.0.0.0:*               LISTEN     \ntcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN     \ntcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN     \ntcp        0      0 0.0.0.0:51413           0.0.0.0:*               LISTEN         \ntcp        0      0 127.0.0.1:3350          0.0.0.0:*               LISTEN     \ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN     \ntcp        0      0 0.0.0.0:3389            0.0.0.0:*               LISTEN   \n")])]),n._v(" "),t("p",[n._v("没发现5910端口")]),n._v(" "),t("p",[n._v("看一下xrdp-sesman.log就知道了，注意：你要至少远程过一次，才会有以下的错误信息。")]),n._v(" "),t("pre",[t("code",[n._v("pi@raspberrypi ~ $ sudo vim /var/log/xrdp-sesman.log\n[20140419-17:56:10] [ERROR] X server for display 10 startup timeout\n[20140419-17:56:10] [INFO ] starting xrdp-sessvc - xpid=3054 - wmpid=3053\n[20140419-17:56:10] [ERROR] X server for display 10 startup timeout\n[20140419-17:56:10] [ERROR] another Xserver is already active on display 10\n[20140419-17:56:10] [DEBUG] aborting connection...\n[20140419-17:56:10] [INFO ] session 3052 - user pi - terminated\n[20140419-17:56:50] [INFO ] scp thread on sck 7 started successfully\n[20140419-17:57:01] [INFO ] scp thread on sck 7 started successfully\n[20140419-17:57:01] [INFO ] granted TS access to user pi\n[20140419-17:57:01] [INFO ] starting Xvnc session...\n[20140419-17:57:01] [CORE ] error starting X server - user pi - pid 3076\n[20140419-17:57:01] [DEBUG] errno: 2, description: No such file or directory\n[20140419-17:57:01] [DEBUG] execve parameter list: 13\n")])]),n._v(" "),t("p",[n._v("发现vnc有问题，于是乎就在装一下vnc看看")]),n._v(" "),t("pre",[t("code",[n._v("pi@raspberrypi ~ $ sudo apt-get install tightvncserver xrdp\n")])]),n._v(" "),t("p",[n._v("然后查看5910端口是否启动")]),n._v(" "),t("pre",[t("code",[n._v("pi@raspberrypi ~ $ netstat -tnl|grep 5910\ntcp        0      0 0.0.0.0:5910            0.0.0.0:*               LISTEN    \n")])]),n._v(" "),t("p",[n._v("继续mstsc成功连接树莓派图形化界面！")]),n._v(" "),t("p",[n._v("参考ubuntu论坛连接 "),t("a",{attrs:{href:"http://forum.ubuntu.org.cn/viewtopic.php?t=342837",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://forum.ubuntu.org.cn/viewtopic.php?t=342837"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("https://blog.csdn.net/u011816696/article/details/73350931")])])}),[],!1,null,null,null);e.default=s.exports}}]);