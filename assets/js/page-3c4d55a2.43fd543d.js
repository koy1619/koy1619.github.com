(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{456:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("LNMP的环境，当前PHP版本5.3.28，遇到一个应用需求只支持PHP 5.5.21，又希望保持现有应用还是用PHP 5.3.28。也就是说需要两个版本的PHP同时存在，供nginx根据需要调用不同版本。")])]),s._v(" "),n("p",[s._v("#应用环境")]),s._v(" "),n("p",[s._v("LNMP的环境，当前PHP版本5.3.28，遇到一个应用需求只支持PHP 5.5.21，又希望保持现有应用还是用PHP 5.3.28。也就是说需要两个版本的PHP同时存在，供nginx根据需要调用不同版本。")]),s._v(" "),n("p",[s._v("#思路")]),s._v(" "),n("p",[s._v("Nginx是通过PHP-FastCGI与PHP交互的。而PHP-FastCGI运行后会通过文件、或本地端口两种方式进行监听，"),s._v("在Nginx中配置相应的FastCGI监听端口或文件即实现Nginx请求对PHP的解释。")]),s._v(" "),n("p",[s._v("既然PHP-FastCGI是监听端口和文件的，那就可以让不同版本的PHP-FastCGI同时运行，监听不同的端口或文件，Nginx中根据需求配置调用不同的PHP-FastCGI端口或文件，即可实现不同版本PHP共存了。")]),s._v(" "),n("p",[s._v("#配置记录")]),s._v(" "),n("p",[s._v("下面记录简单的配置流程，基于已经安装了lnmp的centos环境。当前版本的PHP是5.3.28，位于/app/local/php5.3.28,下面安装php5.5.21")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./configure  --with-openssl --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/local/php5.5.21 --with-config-file-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/local/php5.5.21/etc --with-jpeg-dir --with-png-dir --with-zlib --enable-xml --disable-rpath --enable-safe-mode --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --with-curlwrappers --enable-mbregex --enable-fpm --enable-mbstring --with-mcrypt --with-gd --enable-gd-native-ttf --with-mhash --enable-pcntl --enable-ftp --enable-zip --with-pdo-mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysqlnd --enable-fpm --with-mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysqlnd --with-mysqli"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysqlnd --with-freetype-dir\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("设置php的监听socket或者端口")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost local"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# cat /app/local/php5.5.21/etc/php-fpm.conf |grep -v ";"       ')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" run/php-fpm.pid\nerror_log "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" log/php-fpm.log\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nuser "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\ngroup "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\n\nlisten "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" run/php.scoket      \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("注意若果是监听端口则是 listen "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9001\n\nlisten.owner "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\nlisten.group "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www\n \npm "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" static\npm.max_children "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),s._v("\npm.start_servers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\npm.min_spare_servers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\npm.max_spare_servers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\npm.status_path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /php-fpm_status\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("其他参数根据服务器环境和需求自行定制。")]),s._v(" "),n("p",[s._v("启动php-fpm")]),s._v(" "),n("pre",[n("code",[s._v("/app/local/php5.5.21/sbin/php-fpm\n")])]),s._v(" "),n("p",[s._v("#nginx配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name test.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n        index index.php index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        root  /www/test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n        error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("     /404.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n        location ~ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root           /www/test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            fastcgi_pass   unix:/app/local/php5.5.21/run/php.scoket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#fastcgi_pass 127.0.0.1:9001; ")]),s._v("\n            fastcgi_index  index.php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            fastcgi_param  SCRIPT_FILENAME  fastcgi_script_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            include        fastcgi.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("今天安装好后nginx打开502，google了一下这位大神的文章"),n("a",{attrs:{href:"http://xuanwobbs.com.cn/archives/2014-05/php5-5-12-502.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("php5.5.12产生502错误解决方法"),n("OutboundLink")],1),s._v("解决了")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("如果有更多个php版本安装也是如此，此方法也可以适用于平滑升级php版本")])])]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("一个版本的php也可以指定相关配置文件来启动多个php的master,启动命令如下")])])]),s._v(" "),n("pre",[n("code",[s._v("/app/local/php5.3.28/sbin/php-fpm -c /app/local/php5.3.28/etc/php2.ini -y /app/local/php5.3.28/etc/php-fpm2.conf \n")])]),s._v(" "),n("p",[s._v("show一下")]),s._v(" "),n("pre",[n("code",[s._v("[root@localhost local]# ps -ef |grep php5\nroot     16756     1  0 Jan29 ?        00:00:08 php-fpm: master process (/app/local/php5.3.28/etc/php-fpm2.conf)                                                \nroot     16782     1  0 Jan29 ?        00:00:15 php-fpm: master process (/app/local/php5.3.28/etc/php-fpm.conf)\nroot     23499     1  0 Jan30 ?        00:00:09 php-fpm: master process (/app/local/php5.5.21/etc/php-fpm.conf)\nroot     44108 42716  0 16:36 pts/0    00:00:00 grep php5\n[root@localhost local]# ")])])])}),[],!1,null,null,null);a.default=e.exports}}]);