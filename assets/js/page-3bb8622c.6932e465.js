(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{448:function(n,s,e){"use strict";e.r(s);var t=e(2),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("1，Apache http.conf的虚拟主机默认配置下已经开启了这个功能。")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("Options Indexes FollowSymLinks\nAllowOverride None\nOrder allow,deny\nAllow from all\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("如果想关闭，有两种方式：\n1）将Indexes去掉\nOptions FollowSymLinks\n2）在Indexes前加上“-”（+ 代表允许目录浏览；–代表禁止目录浏览） Options -Indexes FollowSymLinks")]),n._v(" "),e("p",[n._v("2，Nginx默认不允许列出整个目录，开启功能只需要在nginx.conf的server或http段中添加以下配置即可。")]),n._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("autoindex on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#开启功能  ")]),n._v("\nautoindex_exact_size off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#off显示出文件的大概大小，单位是kB、MB、GB；on显示bytes  ")]),n._v("\nautoindex_localtime on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#off显示的文件时间为GMT时间；on显示为文件的服务器时间")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[n._v("TIP注意网站根目录下不要出现index，不然会显示index的内容！当然也可在conf自行修改！")])])}),[],!1,null,null,null);s.default=a.exports}}]);