(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{511:function(n,e,_){"use strict";_.r(e);var v=_(2),t=Object(v.a)({},(function(){var n=this,e=n.$createElement,_=n._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[_("p",[n._v("php-fpm 必须注意"),_("strong",[n._v("backlog")]),n._v("的设置，否则上压力就容易 无法连接、网关超时！")]),n._v(" "),_("pre",[_("code",[n._v(";listen.backlog = -1\n")])]),n._v(" "),_("p",[n._v("backlog数，-1表示无限制，由操作系统决定")]),n._v(" "),_("p",[n._v("由于fpm是多个进程是监听同一个套接字的，通过一个套接字锁来保证同一时刻只有一个进程可以accept，多进程间抢锁是需要消耗时间的")]),n._v(" "),_("p",[n._v("在backlog被设置成-1的情况下，如果fpm没有及时accept，那么在并发量很大的情况下势必会出现SYN超时重连了。")]),n._v(" "),_("p",[n._v("安装php-fpm时backlog一定要重新设置，不能用fpm默认配置的-1 ，可以根据机器的并发量来设置，建议设置在1024以上，最好是2的幂值（因为内核会调整成2的n次幂）。")]),n._v(" "),_("p",[n._v("有高并发的业务，就必须要调整backlog。对于PHP而言，需要注意的有3方面：")]),n._v(" "),_("blockquote",[_("ul",[_("li",[n._v("1、操作系统 | sysctl")]),n._v(" "),_("li",[n._v("2、WEB前端 | 比如：Nginx")]),n._v(" "),_("li",[n._v("3、PHP后台 | 比如：php-fpm")])])]),n._v(" "),_("p",[n._v("操作系统以CentOS为例，可通过默认配置 /etc/sysctl.conf 文件进行调整。比如：")]),n._v(" "),_("pre",[_("code",[n._v("net.core.somaxconn = 1048576 # 默认为128\nnet.core.netdev_max_backlog = 1048576 # 默认为1000\nnet.ipv4.tcp_max_syn_backlog = 1048576 # 默认为1024\n")])]),n._v(" "),_("p",[n._v("WEB前端以Nginx为例，可通过默认配置 /etc/nginx/nginx.conf 文件中的监听选项来调整。比如：")]),n._v(" "),_("pre",[_("code",[n._v("listen       80 backlog=8192; # 默认为511\n")])]),n._v(" "),_("p",[n._v("PHP后台，以PHP-FPM为例，可以通过默认配置 /etc/php-fpm.d/www.conf 文件进行调整。比如：")]),n._v(" "),_("pre",[_("code",[n._v("listen.backlog = 8192 # 默认为-1（由系统决定）\n")])]),n._v(" "),_("p",[n._v("大系统下，如上3处都应该进行调整。")]),n._v(" "),_("p",[n._v("值得注意的是：")]),n._v(" "),_("pre",[_("code",[n._v("PHP-FPM的配置文件中，关于listen.backlog选项的注释有些误导人：\n\n; Set listen(2) backlog. A value of '-1' means unlimited. \n; Default Value: -1\n")])]),n._v(" "),_("p",[n._v("实际上如果使用默认值，很容易出现后端无法连接的问题，按老文档上的解释这个默认是200。建议此处不要留空，务必设置一个合适的值。")])])}),[],!1,null,null,null);e.default=t.exports}}]);