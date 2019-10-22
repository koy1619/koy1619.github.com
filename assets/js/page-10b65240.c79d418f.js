(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{436:function(n,e,t){"use strict";t.r(e);var i=t(2),r=Object(i.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"树莓派使用nginx-rtmp搭建直播-监控-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树莓派使用nginx-rtmp搭建直播-监控-服务"}},[n._v("#")]),n._v(" 树莓派使用nginx+rtmp搭建直播(监控)服务")]),n._v(" "),t("p",[n._v("============")]),n._v(" "),t("h2",{attrs:{id:"安装nginx和nginx-rtmp-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx和nginx-rtmp-module"}},[n._v("#")]),n._v(" 安装nginx和nginx-rtmp-module")]),n._v(" "),t("p",[n._v("前面安装依赖略...")]),n._v(" "),t("pre",[t("code",[n._v("wget http://nginx.org/download/nginx-1.9.4.tar.gz\n\ngit clone git://github.com/arut/nginx-rtmp-module.git \n\ncd nginx-1.9.4\n\n./configure --user=www --group=www --prefix=/usr/local/nginx --with-pcre=/root/pcre-8.30     --with-http_stub_status_module --with-http_ssl_module --with-http_gzip_static_module     --with-google_perftools_module --add-module=/root/nginx-rtmp-module/\n\nmake\n\nmake install\n\nmkdir -p /tmp/hls/\n\nchmod 777 -R /tmp/hls/\n")])]),n._v(" "),t("h2",{attrs:{id:"nginx配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置文件"}},[n._v("#")]),n._v(" nginx配置文件")]),n._v(" "),t("pre",[t("code",[n._v("cat /usr/local/nginx/conf/nginx.conf\nuser  www www;\n\nworker_processes 16;\n\nerror_log  /usr/local/nginx/logs/error.log  crit;\n\npid        /usr/local/nginx/logs/nginx.pid;\n\n#Specifies the value for maximum file descriptors that can be opened by this process. \nworker_rlimit_nofile 65535;\n\nevents \n{\n  use epoll;\n  worker_connections 65535;\n}\n\nhttp \n{\n  include       mime.types;\n  default_type  application/octet-stream;\n\n  #charset  gb2312;\n      \n\nlimit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;\n\n  server_names_hash_bucket_size 128;\n  client_header_buffer_size 32k;\n  large_client_header_buffers 4 32k;\n  client_max_body_size 8m;\n      \n  sendfile on;\n  tcp_nopush     on;\n\n  keepalive_timeout 60;\n\n  tcp_nodelay on;\n\n  fastcgi_connect_timeout 300;\n  fastcgi_send_timeout 300;\n  fastcgi_read_timeout 300;\n  fastcgi_buffer_size 128k;\n  fastcgi_buffers 4 256k;\n  fastcgi_busy_buffers_size 256k;\n  fastcgi_temp_file_write_size 256k;\n\n  gzip on;\n  gzip_min_length  1k;\n  gzip_buffers     4 16k;\n  gzip_http_version 1.0;\n  gzip_comp_level 2;\n  gzip_types       text/plain application/x-javascript text/css application/xml;\n  gzip_vary on;\n\n  #limit_zone  crawler  $binary_remote_addr  10m;\n\n\nserver {\n    listen       8081;\n    server_name  localhost;\n\n    #charset koi8-r;\n    #access_log  logs/host.access.log  main;\n    location / {\n        root   /usr/local/nginx/html;\n        index  index.html index.htm;\n    }\n\n    #error_page  404              /404.html;\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   html;\n    }\n\n\nlocation /hls {\n        types {\n            application/vnd.apple.mpegurl m3u8;\n            video/mp2t ts;\n        }\n        root /tmp;\n        add_header Cache-Control no-cache;\n}\n\n            }\n\naccess_log off;\n\ninclude vhost/*.conf;\n    }\n\n\nrtmp {\n\n    server {\n        listen 1935;  #监听的端口\n        chunk_size 4000;\n\n        application hls {  #rtmp推流请求路径\n            live on;\n            hls on;\n            hls_path /tmp/hls/;\n            hls_fragment 5s;\n        }\n\n\n    }\n}\n")])]),n._v(" "),t("h2",{attrs:{id:"检查配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查配置"}},[n._v("#")]),n._v(" 检查配置")]),n._v(" "),t("pre",[t("code",[n._v("/usr/local/nginx/sbin/nginx  -t\nnginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok\nnginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful\n")])]),n._v(" "),t("h2",{attrs:{id:"h5页面编写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#h5页面编写"}},[n._v("#")]),n._v(" H5页面编写")]),n._v(" "),t("pre",[t("code",[n._v('cat /usr/local/nginx/html/index.html \n<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8" />\n        <title></title>\n    </head>\n    <body>\n        <video id="video" src="http://10.10.3.225:8081/hls/test.m3u8" controls="controls" autoplay     height="100%" width="100%">您的浏览器不支持。</video>\n        <button type="button" style="text-align: center;"     onclick="launchFullScreen(document.getElementById(\'video\'))">全屏</button>\n\n    </body>\n\n    <script type="text/javascript">\n    //全屏幕播放\n    function launchFullScreen(element) {\n      if(element.requestFullScreen) {\n        element.requestFullScreen();\n      } else if(element.mozRequestFullScreen) {\n        element.mozRequestFullScreen();\n      } else if(element.webkitRequestFullScreen) {\n        element.webkitRequestFullScreen();\n      }\n    }\n    <\/script>\n</html>\n')])]),n._v(" "),t("h2",{attrs:{id:"开始直播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始直播"}},[n._v("#")]),n._v(" 开始直播")]),n._v(" "),t("p",[n._v("打开OBS----fms URL填rtmp://10.10.3.225:1935/hls----播放路径填test----开始串流")]),n._v(" "),t("h2",{attrs:{id:"访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[n._v("#")]),n._v(" 访问")]),n._v(" "),t("p",[n._v("http://10.10.3.225:8081/hls/test.m3u8")]),n._v(" "),t("p",[n._v("http://10.10.3.225:8081")]),n._v(" "),t("h2",{attrs:{id:"摄像头-斗鱼直播-监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摄像头-斗鱼直播-监控"}},[n._v("#")]),n._v(" 摄像头+斗鱼直播(监控)")]),n._v(" "),t("p",[n._v("----未完----")]),n._v(" "),t("p",[n._v("via")]),n._v(" "),t("p",[n._v("https://www.tuicool.com/articles/iauQNr")]),n._v(" "),t("p",[n._v("http://lib.csdn.net/article/liveplay/37304")])])}),[],!1,null,null,null);e.default=r.exports}}]);