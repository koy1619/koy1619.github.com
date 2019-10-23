(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{509:function(o,s,n){"use strict";n.r(s);var t=n(2),e=Object(t.a)({},(function(){var o=this,s=o.$createElement,n=o._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[n("h1",{attrs:{id:"shadowsocks的python和nodejs版搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks的python和nodejs版搭建"}},[o._v("#")]),o._v(" shadowsocks的python和nodejs版搭建")]),o._v(" "),n("p",[o._v("shadowsocks的nodejs版的不是很稳定，今天又搞了一台香港的机器，果断换成python试试，果然给力")]),o._v(" "),n("h2",{attrs:{id:"nodejs版搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs版搭建"}},[o._v("#")]),o._v(" nodejs版搭建")]),o._v(" "),n("p",[o._v("nodejs环境搭建参见 https://gist.github.com/koy1619/3479170a3a763ffd8869")]),o._v(" "),n("pre",[n("code",[o._v('git clone https://github.com/shadowsocks/shadowsocks-nodejs.git\n\ncd shadowsocks-nodejs\n\nvim config.json\n\n{\n"server":".0.0.0.0",\n"server_port":8388,\n"local_address":"0.0.0.0",\n"local_port":1080,\n"password":"barfoo!",\n"timeout":600,\n"method":"aes-256-cfb"\n}\n')])]),o._v(" "),n("p",[o._v("启动服务")]),o._v(" "),n("pre",[n("code",[o._v("nohup /opt/shadowsocks-nodejs/bin/ssserver &\nnohup /opt/shadowsocks-nodejs/bin/sslocal &\n")])]),o._v(" "),n("p",[o._v("查看进程")]),o._v(" "),n("pre",[n("code",[o._v("[root@test ~]# ps -ef |grep  node\nroot     12969     1  0 Jan16 ?        00:02:07 node /opt/shadowsocks-nodejs/bin/ssserver\nroot     12971     1  0 Jan16 ?        00:02:05 node /opt/shadowsocks-nodejs/bin/sslocal\nroot     15118 15104  0 15:48 pts/0    00:00:00 grep node\n")])]),o._v(" "),n("p",[o._v("nodejs版的不是很稳定，今天又搞了一台香港的机器，果断换成python试试，果然给力")]),o._v(" "),n("h2",{attrs:{id:"python版搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python版搭建"}},[o._v("#")]),o._v(" python版搭建")]),o._v(" "),n("pre",[n("code",[o._v('yum -y install python-setuptools && easy_install pip\nyum -y install python-pip libevent python-devel git m2crypto\npip install shadowsocks\npip install gevent\npip install M2Crypto\npip install shadowsocks\nmkdir -p /etc/shadowsocks\n\nvim /etc/shadowsocks/config.json\n\n{\n"server":"0.0.0.0",\n"server_port":8388,\n"local_address":"0.0.0.0",\n"local_port":1080,\n"password":"barfoo!",\n"timeout":600,\n"method":"table"\n}\n')])]),o._v(" "),n("p",[o._v("启动服务")]),o._v(" "),n("pre",[n("code",[o._v("cd /etc/shadowsocks\nnohup ssserver &\nnohup sslocal &\n")])]),o._v(" "),n("p",[o._v("查看进程")]),o._v(" "),n("pre",[n("code",[o._v("[root@10-8-1-5 ~]# ps -ef |grep python  \nroot     22599     1  0 12:36 ?        00:00:07 /usr/bin/python /usr/bin/ssserver\nroot     22604     1  0 12:36 ?        00:00:07 /usr/bin/python /usr/bin/sslocal\nroot     22797 22772  0 15:54 pts/1    00:00:00 grep python\n[root@10-8-1-5 ~]# \n")])]),o._v(" "),n("p",[o._v("需要注意防火墙开放"),n("strong",[o._v("local_port")]),o._v("的端口号")]),o._v(" "),n("p",[o._v("Google Chrome浏览器安装SwitchyOmega插件导入下面的备份修改server地址即可使用。")]),o._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://pan.baidu.com/s/1pJ8zfv1",title:"备份点我",target:"_blank",rel:"noopener noreferrer"}},[o._v("备份点我"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);