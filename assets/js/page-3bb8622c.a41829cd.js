(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{388:function(n,e,o){"use strict";o.r(e);var t=o(1),r=Object(t.a)({},(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"nginx、apache目录浏览功能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nginx、apache目录浏览功能","aria-hidden":"true"}},[n._v("#")]),n._v(" Nginx、Apache目录浏览功能")]),n._v(" "),o("p",[n._v("1，Apache http.conf的虚拟主机默认配置下已经开启了这个功能。")]),n._v(" "),o("pre",[o("code",[n._v("Options Indexes FollowSymLinks   #开启功能<br />\nAllowOverride None<br />\nOrder allow,deny<br />\nAllow from all<br />\n")])]),n._v(" "),o("p",[n._v("如果想关闭，有两种方式："),o("br"),n._v("\n1）将Indexes去掉"),o("br"),n._v("\nOptions FollowSymLinks"),o("br"),n._v("\n2）在Indexes前加上“-”（+ 代表允许目录浏览；–代表禁止目录浏览）  "),n._v("\nOptions -Indexes FollowSymLinks")]),n._v(" "),o("p",[n._v("2，Nginx默认不允许列出整个目录，开启功能只需要在nginx.conf的server或http段中添加以下配置即可。")]),n._v(" "),o("pre",[o("code",[n._v("autoindex on; #开启功能  \nautoindex_exact_size off; #off显示出文件的大概大小，单位是kB、MB、GB；on显示bytes  \nautoindex_localtime on; #off显示的文件时间为GMT时间；on显示为文件的服务器时间\n\n\nTIP注意网站根目录下不要出现index，不然会显示index的内容！当然也可在conf自行修改！\n")])])])}),[],!1,null,null,null);e.default=r.exports}}]);