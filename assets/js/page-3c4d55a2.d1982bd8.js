(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{404:function(t,a,p){"use strict";p.r(a);var s=p(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h1",{attrs:{id:"多版本php共存搭建"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#多版本php共存搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" 多版本php共存搭建")]),t._v(" "),p("p",[t._v("#应用环境")]),t._v(" "),p("p",[t._v("LNMP的环境，当前PHP版本5.3.28，遇到一个应用需求只支持PHP 5.5.21，又希望保持现有应用还是用PHP 5.3.28。也就是说需要两个版本的PHP同时存在，供nginx根据需要调用不同版本。")]),t._v(" "),p("p",[t._v("#思路")]),t._v(" "),p("p",[t._v("Nginx是通过PHP-FastCGI与PHP交互的。而PHP-FastCGI运行后会通过文件、或本地端口两种方式进行监听，"),t._v("在Nginx中配置相应的FastCGI监听端口或文件即实现Nginx请求对PHP的解释。")]),t._v(" "),p("p",[t._v("既然PHP-FastCGI是监听端口和文件的，那就可以让不同版本的PHP-FastCGI同时运行，监听不同的端口或文件，Nginx中根据需求配置调用不同的PHP-FastCGI端口或文件，即可实现不同版本PHP共存了。")]),t._v(" "),p("p",[t._v("#配置记录")]),t._v(" "),p("p",[t._v("下面记录简单的配置流程，基于已经安装了lnmp的centos环境。当前版本的PHP是5.3.28，位于/app/local/php5.3.28,下面安装php5.5.21")]),t._v(" "),p("div",{staticClass:"language-bash extra-class"},[p("pre",{pre:!0,attrs:{class:"language-bash"}},[p("code",[t._v("./configure  --with-openssl --prefix"),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/app/local/php5.5.21 --with-config-file-path"),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/app/local/php5.5.21/etc --with-jpeg-dir --with-png-dir --with-zlib --enable-xml --disable-rpath --enable-safe-mode --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --with-curlwrappers --enable-mbregex --enable-fpm --enable-mbstring --with-mcrypt --with-gd --enable-gd-native-ttf --with-mhash --enable-pcntl --enable-ftp --enable-zip --with-pdo-mysql"),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mysqlnd --enable-fpm --with-mysql"),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mysqlnd --with-mysqli"),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mysqlnd --with-freetype-dir\n\n"),p("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n\n"),p("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),p("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),p("p",[t._v("设置php的监听socket或者端口")]),t._v(" "),p("div",{staticClass:"language-bash extra-class"},[p("pre",{pre:!0,attrs:{class:"language-bash"}},[p("code",[p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost local"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),p("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# cat /app/local/php5.5.21/etc/php-fpm.conf |grep -v ";"       ')]),t._v("\n\n"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\npid "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" run/php-fpm.pid\nerror_log "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log/php-fpm.log\n\n"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("www"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nuser "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" www\ngroup "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" www\n\nlisten "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" run/php.scoket      \n"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("注意若果是监听端口则是 listen "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),p("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:9001\n\nlisten.owner "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" www\nlisten.group "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" www\n \npm "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" static\npm.max_children "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),p("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v("\npm.start_servers "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),p("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\npm.min_spare_servers "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),p("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\npm.max_spare_servers "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),p("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\npm.status_path "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /php-fpm_status\n")])])]),p("p",[t._v("其他参数根据服务器环境和需求自行定制。")]),t._v(" "),p("p",[t._v("启动php-fpm")]),t._v(" "),p("pre",[p("code",[t._v("/app/local/php5.5.21/sbin/php-fpm\n")])]),t._v(" "),p("p",[t._v("#nginx配置")]),t._v(" "),p("div",{staticClass:"language-bash extra-class"},[p("pre",{pre:!0,attrs:{class:"language-bash"}},[p("code",[t._v("server "),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen "),p("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name test.com"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        index index.php index.html index.htm"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root  /www/test"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        error_page   "),p("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("     /404.html"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        location ~ "),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php$ "),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root           /www/test"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fastcgi_pass   unix:/app/local/php5.5.21/run/php.scoket"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),p("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#fastcgi_pass 127.0.0.1:9001; ")]),t._v("\n            fastcgi_index  index.php"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fastcgi_param  SCRIPT_FILENAME  fastcgi_script_name"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            include        fastcgi.conf"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),p("p",[t._v("今天安装好后nginx打开502，google了一下这位大神的文章"),p("a",{attrs:{href:"http://xuanwobbs.com.cn/archives/2014-05/php5-5-12-502.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("php5.5.12产生502错误解决方法"),p("OutboundLink")],1),t._v("解决了")]),t._v(" "),p("blockquote",[p("ul",[p("li",[t._v("如果有更多个php版本安装也是如此，此方法也可以适用于平滑升级php版本")])])]),t._v(" "),p("blockquote",[p("ul",[p("li",[t._v("一个版本的php也可以指定相关配置文件来启动多个php的master,启动命令如下")])])]),t._v(" "),p("pre",[p("code",[t._v("/app/local/php5.3.28/sbin/php-fpm -c /app/local/php5.3.28/etc/php2.ini -y /app/local/php5.3.28/etc/php-fpm2.conf \n")])]),t._v(" "),p("p",[t._v("show一下")]),t._v(" "),p("pre",[p("code",[t._v("[root@localhost local]# ps -ef |grep php5\nroot     16756     1  0 Jan29 ?        00:00:08 php-fpm: master process (/app/local/php5.3.28/etc/php-fpm2.conf)                                                \nroot     16782     1  0 Jan29 ?        00:00:15 php-fpm: master process (/app/local/php5.3.28/etc/php-fpm.conf)\nroot     23499     1  0 Jan30 ?        00:00:09 php-fpm: master process (/app/local/php5.5.21/etc/php-fpm.conf)\nroot     44108 42716  0 16:36 pts/0    00:00:00 grep php5\n[root@localhost local]# ")])])])}),[],!1,null,null,null);a.default=n.exports}}]);