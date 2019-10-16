(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{394:function(n,e,s){"use strict";s.r(e);var o=s(1),i=Object(o.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"bt-下载服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bt-下载服务器","aria-hidden":"true"}},[n._v("#")]),n._v(" BT 下载服务器")]),n._v(" "),s("p",[n._v("1）首先安装 transmission ：")]),n._v(" "),s("pre",[s("code",[n._v("sudo apt-get install transmission-daemon\n")])]),n._v(" "),s("p",[n._v("2）然后创建下载目录，一个是下载完成的目录，一个是未完成的目录，具体目录根据你的情况决定：")]),n._v(" "),s("pre",[s("code",[n._v("mkdir -p /home/pi/incomplete   # for incomplete downloads\nmkdir /home/pi/complete        # finished downloads\n\nsudo usermod -a -G debian-transmission pi\n#如果是 fat 格式的移动硬盘无需下面这么改，mount的时候指定用户和读写权限就行\n#这个是对 SD 卡上的目录而言的\n\nchgrp debian-transmission /home/pi/incomplete\nchgrp debian-transmission /home/pi/complete\nchmod 770 /home/pi/incomplete\nchmod 770 /home/pi/complete\n")])]),n._v(" "),s("p",[n._v("4）修改配置文件 /etc/transmission-daemon/settings.json ，这是一个 json 格式的文件，配置项很多，但重点改下面这些：")]),n._v(" "),s("p",[n._v("下载目录位置：")]),n._v(" "),s("pre",[s("code",[n._v("“download-dir”: “/home/pi/complete”,\n")])]),n._v(" "),s("p",[n._v("未完成的下载目录")]),n._v(" "),s("pre",[s("code",[n._v("“incomplete-dir”: “/home/pi/incomplete”,\n")])]),n._v(" "),s("p",[n._v("允许Web访问的白名单地址")]),n._v(" "),s("pre",[s("code",[n._v("“rpc-whitelist”: “192.168.1.*”,\n")])]),n._v(" "),s("p",[n._v("5）最后，配置好之后重启 transmission，注意以下两个命令按顺序执行，单独 restart 的话配置不会保存：")]),n._v(" "),s("pre",[s("code",[n._v("sudo service transmission-daemon reload\nsudo service transmission-daemon restart\n")])]),n._v(" "),s("p",[n._v("访问  http://192.168.1.3:9091  访问时输入用户名和密码，默认都是：transmission")]),n._v(" "),s("p",[n._v("关于 transmission 配置的详细信息请参考："),s("a",{attrs:{href:"https://trac.transmissionbt.com/wiki/EditConfigFiles",target:"_blank",rel:"noopener noreferrer"}},[n._v("EditConfigFiles"),s("OutboundLink")],1),n._v(" 。")]),n._v(" "),s("p",[n._v("修改 transmission 用户名和密码的方法：")]),n._v(" "),s("p",[n._v("1）先停止服务： sudo service transmission-daemon stop")]),n._v(" "),s("p",[n._v("2）修改配置文件，下面两项分别是用户和密码，这个是加密的密码，没关系直接把密码改为想要的密码明文就可以：")]),n._v(" "),s("pre",[s("code",[n._v("“rpc-username”: “transmission”,\n“rpc-password”: “{2dc2c41724aab07ccc301e97f56360cb35f8ba1fGVVrdHDX”,\n")])]),n._v(" "),s("p",[n._v("3）再此启动服务 ：sudo service transmission-daemon start 。启动的时候 transmission 会自动把新密码加密。")]),n._v(" "),s("p",[n._v("transmission 默认监听 51413 端口，最好在路由器上做个端口转发，把这个端口转到它的 IP 地址。")])])}),[],!1,null,null,null);e.default=i.exports}}]);