(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{451:function(n,t,p){"use strict";p.r(t);var e=p(2),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,p=n._self._c||t;return p("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[p("p",[n._v("早上发现一台测试服务器项目502badgetway了，但是有一个项目是好的，以下是排查过程")]),n._v(" "),p("p",[n._v("一.查看配置文件"),p("br"),n._v("\n查看php.ini php-fpm.conf nginx.conf 都是已经调优过的"),p("br"),n._v("\n二.重启nginx php-fpm"),p("br"),n._v("\n三.重启服务器"),p("br"),n._v("\n四.查看iptables和dns\n以上都是OK的，但是还是依旧502，就只有一个项目是OK的"),p("br"),n._v("\n最后php -v发现居然是5.4，我记得之前我安装的是5.2的php，询问同事原来被他升级过php他升级完就改了一个项目的虚拟主机配置文件，就是那个好的项目的~~本当に"),p("br"),n._v("\n果断查看虚拟主机的配置文件，如下图更改之")]),n._v(" "),p("img",{staticClass:"alignnone",attrs:{alt:"",src:"https://i.loli.net/2019/10/18/KTcdSExrIPnB62J.jpg",width:"658",height:"134"}}),n._v(" "),p("p",[n._v("service nginx restart")]),n._v(" "),p("p",[n._v("OK！")])])}),[],!1,null,null,null);t.default=r.exports}}]);