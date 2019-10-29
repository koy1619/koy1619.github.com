(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{490:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"fyi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fyi"}},[s._v("#")]),s._v(" fyi")]),s._v(" "),t("p",[s._v("Awstats是一个免费非常简洁而且强大有个性的网站日志分析工具。它可以统计您站点的如下信息：\n一：访问量，访问次数，页面浏览量，点击数，数据流量等\n二：精确到每月、每日、每小时的数据\n三：访问者国家\n四：访问者IP\n五：Robots/Spiders的统计\n六：访客持续时间\n七：对不同Files type 的统计信息\n八：Pages-URL的统计\n九：访客操作系统浏览器等信息\n十：其它信息（搜索关键字等等）")]),s._v(" "),t("h2",{attrs:{id:"install-awstats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-awstats"}},[s._v("#")]),s._v(" install awstats")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://sourceforge.net/projects/awstats/files/AWStats/7.3/awstats-7.3.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" awstats-7.3.zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R awstats-7.3 /usr/local/awstats/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/awstats/tools/\nperl awstats_configure.pl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"set-webserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-webserver"}},[s._v("#")]),s._v(" Set webserver")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" awstats-7.3/wwwroot\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -R * /home/wwwroot/awstats\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/awstats/awstats.hero.conf\n\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        root   /home/wwwroot/awstats"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index  index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nallow "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndeny all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#auth_basic            "Restricted";')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#auth_basic_user_file  /usr/local/senginx/conf/vhosts/hero.passwd;")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"geoip-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geoip-install"}},[s._v("#")]),s._v(" GeoIP install")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" GeoIP\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" GeoIP\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://geolite.maxmind.com/download/geoip/database/asnum/GeoIPASNum.dat.gz\ngunzip GeoIP.dat.gz\ngunzip GeoIPASNum.dat.gz\ngunzip GeoLiteCity.dat.gz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://geolite.maxmind.com/download/geoip/api/c/GeoIP-1.4.8.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf GeoIP-1.4.8.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" GeoIP-1.4.8/\nlibtoolize -f\n./configure\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://geolite.maxmind.com/download/geoip/api/perl/Geo-IP-1.39.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf Geo-IP-1.39.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Geo-IP-1.39\nperl Makefile.PL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIBS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-L/usr/local/lib'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/awstats/awstats.hero.conf\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LoadPlugin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geoip GEOIP_STANDARD /opt/GeoIP/GeoIP.dat"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LoadPlugin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geoip_city_maxmind GEOIP_STANDARD /opt/GeoIP/GeoLiteCity.dat"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LoadPlugin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geoip_org_maxmind GEOIP_STANDARD /opt/GeoIP/GeoIPASNum.dat"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h2",{attrs:{id:"set-the-log-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-the-log-format"}},[s._v("#")]),s._v(" Set the log format")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/senginx/conf/vhosts/default.conf \n\nlog_format  awstats  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_user")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_local")]),s._v('] "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v("\" '")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body_bytes_sent")]),s._v(' "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_referer")]),s._v("\" '")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_user_agent")]),s._v('" "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_x_forwarded_for")]),s._v("\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /data/source/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index  index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    location ~ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root           /data/source/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#fastcgi_pass  127.0.0.1:9000;")]),s._v("\n        fastcgi_pass   unix:/usr/local/php/run/php.scoket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_index  index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_param  SCRIPT_FILENAME  fastcgi_script_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_buffer_size 128k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_buffers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 128k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_busy_buffers_size 256k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        fastcgi_temp_file_write_size 256k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        include      fastcgi.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#include        fastcgi_params;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        access_log logs/access.log awstats"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/awstats/awstats.hero.conf \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/local/senginx/logs/access_%YYYY-24%MM-24%DD-24.log"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("h2",{attrs:{id:"set-crontab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-crontab"}},[s._v("#")]),s._v(" Set crontab")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /opt/scripts/cut_nginx_logs.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logs_path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/local/senginx/logs/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logs_path}")]),s._v("access.log "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${logs_path}")]),s._v("access_"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yesterday"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y%m%d"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".log\n/app/local/senginx/sbin/nginx -s reload\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /opt/scripts/awstats.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\nperl /usr/local/awstats/tools/awstats_buildstaticpages.pl -update -config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hero -lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cn -dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/data/site/awstats/ -awstatsprog"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/awstats/wwwroot/cgi-bin/awstats.pl\n\n01 00 * * * "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /opt/scripts/cut_nginx_logs.sh\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" 00 * * * "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /opt/scripts/awstats.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);