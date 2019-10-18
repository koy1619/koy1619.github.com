(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{365:function(n,e,s){"use strict";s.r(e);var o=s(1),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"raspberrypi-lnmp环境初始化基本完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raspberrypi-lnmp环境初始化基本完成","aria-hidden":"true"}},[n._v("#")]),n._v(" RaspberryPi LNMP环境初始化基本完成")]),n._v(" "),s("p",[n._v("一开始使用源码编译安装，哪知道编译了一下午mysql都还没编译ok，")]),n._v(" "),s("p",[n._v("于是采用二进制deb安装")]),n._v(" "),s("p",[n._v("sudo apt-get install nginx php5-fpm php5-cli php5-curl php5-gd php5-mcrypt php5-mysql php5-cgi mysql-server")]),n._v(" "),s("p",[n._v("期间会提示设置mysql密码，下载安装好nginx和mysql后在/etc/nginx/sites-available/目录下创建文件wordpress写入如下代码并保存。")]),n._v(" "),s("pre",[s("code",[n._v("    # Upstream to abstract backend connection(s) for php\n    upstream php {\n    server unix:/var/run/php5-fpm.sock;\n    }\n    \n    server {\n    \n    ## Your only path reference.\n    root /srv/www/wordpress/public_html;\n    listen 80;\n    ## Your website name goes here. Change to domain.ltd in VPS\n    server_name rpi.maxiaolei.com;\n    \n    access_log /srv/www/wordpress/logs/access.log;\n    error_log /srv/www/wordpress/logs/error.log;\n    \n    ## This should be in your http block and if it is, it’s not needed here.\n    index index.php;\n    \n    location = /favicon.ico {\n    log_not_found off;\n    access_log off;\n    }\n    \n    location = /robots.txt {\n    allow all;\n    log_not_found off;\n    access_log off;\n    }\n    \n    location / {\n    # This is cool because no php is touched for static content\n    try_files $uri $uri/ /index.php;\n    }\n    location ~ \\.php$ {\n    #NOTE: You should have “cgi.fix_pathinfo = 0;” in php.ini\n    include fastcgi_params;\n    fastcgi_intercept_errors on;\n    fastcgi_pass php;\n    }\n    \n    location ~* \\.(js|css|png|jpg|jpeg|gif|ico)$ {\n    expires max;\n    log_not_found off;\n    }\n    }\n")])]),n._v(" "),s("p",[n._v("然后将此文件复制到/etc/nginx/sites-sites-enabled/目录下，分别删除两个文件夹中的default文件。")]),n._v(" "),s("p",[n._v("服务启动和停止")]),n._v(" "),s("pre",[s("code",[n._v("    sudo service mysql start|stop\n    sudo service php5-fpm start|stop\n    sudo service nginx start|stop\n")])])])}),[],!1,null,null,null);e.default=r.exports}}]);