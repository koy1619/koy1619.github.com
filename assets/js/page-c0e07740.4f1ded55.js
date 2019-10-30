(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{418:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("1）首先安装 transmission ：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" transmission-daemon\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2）然后创建下载目录，一个是下载完成的目录，一个是未完成的目录，具体目录根据你的情况决定：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/pi/incomplete   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for incomplete downloads")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/pi/complete        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# finished downloads")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G debian-transmission pi\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果是 fat 格式的移动硬盘无需下面这么改，mount的时候指定用户和读写权限就行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个是对 SD 卡上的目录而言的")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" debian-transmission /home/pi/incomplete\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" debian-transmission /home/pi/complete\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v(" /home/pi/incomplete\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("770")]),s._v(" /home/pi/complete\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("4）修改配置文件 /etc/transmission-daemon/settings.json ，这是一个 json 格式的文件，配置项很多，但重点改下面这些：")]),s._v(" "),a("p",[s._v("下载目录位置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("“download-dir”: “/home/pi/complete”,\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("未完成的下载目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("“incomplete-dir”: “/home/pi/incomplete”,\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("允许Web访问的白名单地址")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("“rpc-whitelist”: “192.168.1.*”,\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5）最后，配置好之后重启 transmission，注意以下两个命令按顺序执行，单独 restart 的话配置不会保存：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" transmission-daemon reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" transmission-daemon restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("访问  http://192.168.1.3:9091  访问时输入用户名和密码，默认都是：transmission")]),s._v(" "),a("p",[s._v("关于 transmission 配置的详细信息请参考："),a("a",{attrs:{href:"https://trac.transmissionbt.com/wiki/EditConfigFiles",target:"_blank",rel:"noopener noreferrer"}},[s._v("EditConfigFiles"),a("OutboundLink")],1),s._v(" 。")]),s._v(" "),a("p",[s._v("修改 transmission 用户名和密码的方法：")]),s._v(" "),a("p",[s._v("1）先停止服务： sudo service transmission-daemon stop")]),s._v(" "),a("p",[s._v("2）修改配置文件，下面两项分别是用户和密码，这个是加密的密码，没关系直接把密码改为想要的密码明文就可以：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("“rpc-username”: “transmission”,\n“rpc-password”: “{2dc2c41724aab07ccc301e97f56360cb35f8ba1fGVVrdHDX”,\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3）再此启动服务 ：sudo service transmission-daemon start 。启动的时候 transmission 会自动把新密码加密。")]),s._v(" "),a("p",[s._v("transmission 默认监听 51413 端口，最好在路由器上做个端口转发，把这个端口转到它的 IP 地址。")])])}),[],!1,null,null,null);n.default=t.exports}}]);