(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{438:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"awstats日志分析安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awstats日志分析安装","aria-hidden":"true"}},[t._v("#")]),t._v(" awstats日志分析安装")]),t._v(" "),a("h2",{attrs:{id:"fyi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fyi","aria-hidden":"true"}},[t._v("#")]),t._v(" fyi")]),t._v(" "),a("p",[t._v("Awstats是一个免费非常简洁而且强大有个性的网站日志分析工具。它可以统计您站点的如下信息：\n一：访问量，访问次数，页面浏览量，点击数，数据流量等\n二：精确到每月、每日、每小时的数据\n三：访问者国家\n四：访问者IP\n五：Robots/Spiders的统计\n六：访客持续时间\n七：对不同Files type 的统计信息\n八：Pages-URL的统计\n九：访客操作系统浏览器等信息\n十：其它信息（搜索关键字等等）\n")]),t._v(" "),a("h2",{attrs:{id:"install-awstats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-awstats","aria-hidden":"true"}},[t._v("#")]),t._v(" install awstats")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://sourceforge.net/projects/awstats/files/AWStats/7.3/awstats-7.3.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" awstats-7.3.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -R awstats-7.3 /usr/local/awstats/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/awstats/tools/\nperl awstats_configure.pl\n")])])]),a("h2",{attrs:{id:"set-webserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-webserver","aria-hidden":"true"}},[t._v("#")]),t._v(" Set webserver")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" awstats-7.3/wwwroot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -R * /home/wwwroot/awstats\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/awstats/awstats.hero.conf\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        root   /home/wwwroot/awstats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index  index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nallow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndeny all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#auth_basic            "Restricted";')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#auth_basic_user_file  /usr/local/senginx/conf/vhosts/hero.passwd;")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"geoip-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geoip-install","aria-hidden":"true"}},[t._v("#")]),t._v(" GeoIP install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" GeoIP\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" GeoIP\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://geolite.maxmind.com/download/geoip/database/asnum/GeoIPASNum.dat.gz\ngunzip GeoIP.dat.gz\ngunzip GeoIPASNum.dat.gz\ngunzip GeoLiteCity.dat.gz\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://geolite.maxmind.com/download/geoip/api/c/GeoIP-1.4.8.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf GeoIP-1.4.8.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" GeoIP-1.4.8/\nlibtoolize -f\n./configure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://geolite.maxmind.com/download/geoip/api/perl/Geo-IP-1.39.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf Geo-IP-1.39.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Geo-IP-1.39\nperl Makefile.PL "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LIBS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-L/usr/local/lib'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/awstats/awstats.hero.conf\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LoadPlugin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip GEOIP_STANDARD /opt/GeoIP/GeoIP.dat"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LoadPlugin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip_city_maxmind GEOIP_STANDARD /opt/GeoIP/GeoLiteCity.dat"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LoadPlugin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geoip_org_maxmind GEOIP_STANDARD /opt/GeoIP/GeoIPASNum.dat"')]),t._v("\n\n")])])]),a("h2",{attrs:{id:"set-the-log-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-log-format","aria-hidden":"true"}},[t._v("#")]),t._v(" Set the log format")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /usr/local/senginx/conf/vhosts/default.conf \n\nlog_format  awstats  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_user")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v('] "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\" '")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(' "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v("\" '")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v('" "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_x_forwarded_for")]),t._v("\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root   /data/source/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index  index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    location ~ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root           /data/source/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#fastcgi_pass  127.0.0.1:9000;")]),t._v("\n        fastcgi_pass   unix:/usr/local/php/run/php.scoket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_index  index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_param  SCRIPT_FILENAME  fastcgi_script_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_buffer_size 128k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" 128k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_busy_buffers_size 256k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_temp_file_write_size 256k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        include      fastcgi.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include        fastcgi_params;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        access_log logs/access.log awstats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/awstats/awstats.hero.conf \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LogFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/app/local/senginx/logs/access_%YYYY-24%MM-24%DD-24.log"')]),t._v("\n")])])]),a("h2",{attrs:{id:"set-crontab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-crontab","aria-hidden":"true"}},[t._v("#")]),t._v(" Set crontab")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /opt/scripts/cut_nginx_logs.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("logs_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/app/local/senginx/logs/"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${logs_path}")]),t._v("access.log "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${logs_path}")]),t._v("access_"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yesterday"')]),t._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%Y%m%d"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(".log\n/app/local/senginx/sbin/nginx -s reload\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /opt/scripts/awstats.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\nperl /usr/local/awstats/tools/awstats_buildstaticpages.pl -update -config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hero -lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cn -dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/app/data/site/awstats/ -awstatsprog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/awstats/wwwroot/cgi-bin/awstats.pl\n\n01 00 * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" /opt/scripts/cut_nginx_logs.sh\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" 00 * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" /opt/scripts/awstats.sh\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);