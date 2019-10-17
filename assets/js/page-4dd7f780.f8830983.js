(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{371:function(r,e,a){"use strict";a.r(e);var n=a(1),t=Object(n.a)({},(function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"树莓派-raspberry-pi-无线网卡配置方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树莓派-raspberry-pi-无线网卡配置方法","aria-hidden":"true"}},[r._v("#")]),r._v(" 树莓派(Raspberry Pi)无线网卡配置方法")]),r._v(" "),a("p",[r._v("=======================================================================")]),r._v(" "),a("p",[r._v("由于不想老是拖着网线，就想给小派加一个无线网卡")]),r._v(" "),a("p",[r._v("首先查看树莓派外设兼容列表："),a("a",{attrs:{href:"http://elinux.org/RPi_VerifiedPeripherals#USB_Wi-Fi_Adapters",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://elinux.org/RPi_VerifiedPeripherals#USB_Wi-Fi_Adapters"),a("OutboundLink")],1)]),r._v(" "),a("p",[r._v("以确定自己的无线网卡是否可用，一般免驱的大多可用。这种USB无线网卡，一般只要二三十块钱就可以搞定。")]),r._v(" "),a("p",[r._v("我是在京东购买的 "),a("strong",[r._v("腾达（TENDA）W311M 150M mini无线网卡")]),r._v("，"),a("a",{attrs:{href:"http://item.jd.com/297759.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("购买链接"),a("OutboundLink")],1)]),r._v(" "),a("p",[a("strong",[r._v("安装无线网卡的时候并必须先关闭树莓派然后在插上无线网卡，最后开机，由于直接热插的时候会产生不稳定的电流有可能会损坏小派的板子")])]),r._v(" "),a("h3",{attrs:{id:"_1、安装好无线网卡开机之后查看自己的无线网卡是否生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装好无线网卡开机之后查看自己的无线网卡是否生效","aria-hidden":"true"}},[r._v("#")]),r._v(" 1、安装好无线网卡开机之后查看自己的无线网卡是否生效")]),r._v(" "),a("p",[r._v("sudo lsusb查看已挂载的USB设备")]),r._v(" "),a("pre",[a("code",[r._v("pi@raspberrypi ~ $ sudo lsusb\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\nBus 001 Device 002: ID 0424:9512 Standard Microsystems Corp. \nBus 001 Device 003: ID 0424:ec00 Standard Microsystems Corp. \nBus 001 Device 004: ID 148f:5370 Ralink Technology, Corp. RT5370 Wireless Adapter\n")])]),r._v(" "),a("p",[r._v("最后一行标有 "),a("strong",[r._v("802.11n WLAN Adapter")]),r._v(" 即是我的无线网卡，表明设备可用。")]),r._v(" "),a("p",[r._v("ifconfig查看网卡可以看到wlan0")]),r._v(" "),a("h3",{attrs:{id:"_2、测试wifi信号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、测试wifi信号","aria-hidden":"true"}},[r._v("#")]),r._v(" 2、测试wifi信号")]),r._v(" "),a("pre",[a("code",[r._v("pi@raspberrypi ~ $ sudo iwlist wlan0 scan\n")])]),r._v(" "),a("p",[r._v("找到自己无线路由器的ssid")]),r._v(" "),a("h3",{attrs:{id:"_3、编辑网卡配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、编辑网卡配置信息","aria-hidden":"true"}},[r._v("#")]),r._v(" 3、编辑网卡配置信息")]),r._v(" "),a("p",[r._v("设置网卡配置")]),r._v(" "),a("pre",[a("code",[r._v("pi@raspberrypi ~ $ sudo cat /etc/network/interfaces\n\nauto lo\niface lo inet loopback\n\n#eth0有线 由于在下的小派经常更换网络环境，所以设置DHCP，省的在接显示器\nauto eth0\niface eth0 inet dhcp\n\n#wlan0 设置DHCP\nauto wlan0\nallow-hotplug wlan0\niface wlan0 inet manual\nwpa-roam /etc/wpa_supplicant/wpa_supplicant.conf  ##wifi-config配置文件\niface default inet dhcp\n")])]),r._v(" "),a("p",[r._v("设置wifi-config配置文件wpa_supplicant.conf")]),r._v(" "),a("pre",[a("code",[r._v('pi@raspberrypi ~ $ sudo cat /etc/wpa_supplicant/wpa_supplicant.conf\nctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\n\nnetwork={\nssid="TPlink"  ##无线SSID号\nproto=RSN\nkey_mgmt=WPA-PSK\npairwise=CCMP TKIP\ngroup=CCMP TKIP\npsk="123456"  ##无线密码\n}\n')])]),r._v(" "),a("h3",{attrs:{id:"_4、重启树莓派"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、重启树莓派","aria-hidden":"true"}},[r._v("#")]),r._v(" 4、重启树莓派")]),r._v(" "),a("pre",[a("code",[r._v("pi@raspberrypi ~ $ sudo reboot\n")])]),r._v(" "),a("h3",{attrs:{id:"_5、查看wlan连接状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、查看wlan连接状态","aria-hidden":"true"}},[r._v("#")]),r._v(" 5、查看wlan连接状态")]),r._v(" "),a("pre",[a("code",[r._v("pi@raspberrypi ~ $ ifconfig\neth0      Link encap:Ethernet  HWaddr 11:11:11:11:11:11 \n          inet addr:192.168.111.118  Bcast:192.168.111.255  Mask:255.255.255.0\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:9586 errors:0 dropped:0 overruns:0 frame:0\n              TX packets:10038 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:1111968 (1.0 MiB)  TX bytes:3134959 (2.9 MiB)\n\nlo        Link encap:Local Loopback  \n          inet addr:127.0.0.1  Mask:255.0.0.0\n          UP LOOPBACK RUNNING  MTU:16436  Metric:1\n          RX packets:11574 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:11574 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:0 \n          RX bytes:63152698 (60.2 MiB)  TX bytes:63152698 (60.2 MiB)\n\nwlan0     Link encap:Ethernet  HWaddr 11:11:11:11:11:12\n          inet addr:192.168.111.119  Bcast:192.168.111.255  Mask:255.255.255.0\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:1632 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:720 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:158997 (155.2 KiB)  TX bytes:75676 (73.9 KiB)\n")])]),r._v(" "),a("h2",{attrs:{id:"这样子就可以拔掉网线使用无线啦！下一步打算把raspberry-pi-配置成无线路由器！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这样子就可以拔掉网线使用无线啦！下一步打算把raspberry-pi-配置成无线路由器！","aria-hidden":"true"}},[r._v("#")]),r._v(" 这样子就可以拔掉网线使用无线啦！下一步打算把Raspberry Pi 配置成无线路由器！")]),r._v(" "),a("h2",{attrs:{id:"最后放图给大家看看最新改造的小派"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后放图给大家看看最新改造的小派","aria-hidden":"true"}},[r._v("#")]),r._v(" 最后放图给大家看看最新改造的小派")]),r._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/10/16/dl9HkYUAR8OZIiQ.jpg",alt:""}})])])}),[],!1,null,null,null);e.default=t.exports}}]);