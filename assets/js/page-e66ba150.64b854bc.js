(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{461:function(n,t,e){"use strict";e.r(t);var r=e(2),o=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx出现“413-request-entity-too-large”错误解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx出现“413-request-entity-too-large”错误解决方法"}},[n._v("#")]),n._v(" Nginx出现“413 Request Entity Too Large”错误解决方法")]),n._v(" "),e("p",[n._v("今天使用Wordpress上传功能的时候，总是提示接口错误，很是郁闷。换小文件发现没有问题，所以问题肯定出现在文件大小上，找了半天没有发现wordpress有限制上传文件大小的地方。")]),n._v(" "),e("p",[n._v("检查了一下php.ini也没问题")]),n._v(" "),e("p",[n._v("切换到传统文件上传界面，重新上传一个大文件，这回出来错误提示了，413 Request Entity Too Large，google了一下，发现是Nginx的错误提示。")]),n._v(" "),e("p",[n._v("解决方法："),e("br"),n._v(" "),n._v("\nvi /usr/local/nginx/conf/nginx.conf"),e("br"),n._v("\n打开nginx主配置文件nginx.conf，找到http{}段，添加"),e("br"),n._v("\nclient_max_body_size 20m;")]),n._v(" "),e("p",[n._v("重启NGINX"),e("br"),n._v("\n恢复正常")])])}),[],!1,null,null,null);t.default=o.exports}}]);