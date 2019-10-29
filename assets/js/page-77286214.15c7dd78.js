(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{459:function(n,e,t){"use strict";t.r(e);var i=t(2),r=Object(i.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"使用saltstack批量管理服务器-（一）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用saltstack批量管理服务器-（一）"}},[n._v("#")]),n._v(" 使用saltstack批量管理服务器 （一）")]),n._v(" "),t("h2",{attrs:{id:"saltstack初窥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#saltstack初窥"}},[n._v("#")]),n._v(" saltstack初窥")]),n._v(" "),t("p",[n._v("随着上线的服务器数量增多，如何批量有效的管理各个节点服务器正常运作是每个运维人员需要解决的难题。所幸的是在今天，已经有很多优秀的工具可供选择，提供了各种各样的解决方案，用户可以有很高的自由性自己选择适合的工具。本文主要介绍saltstack。")]),n._v(" "),t("p",[n._v("一切源于那个亘古不变的真理：写个脚本，ssh跑一遍，服务器部署完毕。")]),n._v(" "),t("p",[n._v("于是乎，就有了多台服务器需要部署同样的环境，for循环+ssh跑脚本。")]),n._v(" "),t("p",[n._v("于是服务器的数量进一步上升，for循环跑脚本的形式已经变得让人无法忍受，更可怕的是这个过程如果出了错误，那么将是一件非常痛苦的事情，即使侥幸部署成功，以后配置需要更改，所有的环境要求同步变更，用ssh跑脚本的形式已经无法作为解决方案。")]),n._v(" "),t("p",[n._v("在这种情况下，一些批量部署的工具应运而生，比如puppet，saltstack，chef等等……")]),n._v(" "),t("p",[n._v("saltstack是使用python编写的开源自动化部署与管理工具，拥有良好的扩展性以及优秀的执行效率，配置简单，可以工作在多平台上，经常被描述为 Func加强版+Puppet精简版。")]),n._v(" "),t("h2",{attrs:{id:"安装saltstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装saltstack"}},[n._v("#")]),n._v(" 安装saltstack")]),n._v(" "),t("p",[n._v("安装epel yum源")]),n._v(" "),t("pre",[t("code",[n._v("rpm -ivh  http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm\n")])]),n._v(" "),t("p",[n._v("master和minion关闭iptables，并安装salt")]),n._v(" "),t("pre",[t("code",[n._v("service iptables stop\nyum install -y salt-master  #服务端 master\nyum install -y salt-minion  #客户端 minion\n")])]),n._v(" "),t("p",[n._v("server端的配置：vim /etc/salt/master")]),n._v(" "),t("pre",[t("code",[n._v("interface: 192.168.15.138  #监听地址\nuser: root\nauto_accept: True #自动接收minion端的key并验证\n/etc/init.d/salt-master restart \n")])]),n._v(" "),t("p",[n._v("客户端（minion）需要配置两个地方：")]),n._v(" "),t("p",[n._v("配置文件: vim /etc/salt/minion:")]),n._v(" "),t("pre",[t("code",[n._v("#需要注意配置采用yaml模板格式配置，冒号后面必须有一个空格，否则配置不生效\n#master: salt #   《 == 原始配置\nmaster: 192.168.15.138 #  《 == 修改为master所在的服务器IP，默认是salt主机名\n\n#id: minion # 《==原始配置\nid: test-minion  # 《==修改配置，此id为minion在master端显示的名称，必须唯一，尽量符合一定规范，将来易于管理\n")])]),n._v(" "),t("p",[n._v("之后重启minion生效")]),n._v(" "),t("pre",[t("code",[n._v("service salt-minion restart\n")])]),n._v(" "),t("p",[n._v("master端：")]),n._v(" "),t("pre",[t("code",[n._v("#salt-key -L\nAccepted Keys:\ntest-minion\nUnaccepted Keys:\nRejected Keys:\n")])]),n._v(" "),t("p",[n._v("可以看到minion的key已经出现在master端了，使用命令")]),n._v(" "),t("pre",[t("code",[n._v("salt-key -a test-minion\n")])]),n._v(" "),t("p",[n._v("来允许这个minion加入master管理，或者")]),n._v(" "),t("pre",[t("code",[n._v("salt-key -A\n")])]),n._v(" "),t("p",[n._v("允许所有的Unaccepted Keys加入master管理。")]),n._v(" "),t("h2",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[n._v("#")]),n._v(" 基本使用")]),n._v(" "),t("pre",[t("code",[n._v("# salt '*' test.ping  #测试ping\n# salt '*' disk.usage #查看硬盘\n# salt '*' cmd.run \"date\"  #运行shell\n")])]),n._v(" "),t("h1",{attrs:{id:"在server端编写模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在server端编写模块"}},[n._v("#")]),n._v(" 在server端编写模块")]),n._v(" "),t("p",[n._v("salt默认的根目录在/srv/salt中，没有这个目录需要建立一个")]),n._v(" "),t("pre",[t("code",[n._v("mkdir -p /srv/salt/\n")])]),n._v(" "),t("p",[n._v("编写安装nginx模块")]),n._v(" "),t("p",[n._v("“最高同步”需要执行的top规则")]),n._v(" "),t("pre",[t("code",[n._v("#cat /srv/salt/top.sls \n\nbase:\n'*':               #通过正则去匹配所有minion\n    - nginx          #这里都是我自己写的state.sls模块名 这里可以无视 后面会提到\n\nmy_app:             #通过分组名去进行匹配 必须要定义match:nodegroup\n    - match: nodegroup\n    - nginx\n\n'os:Redhat':        #通过grains模块去匹配，必须要定义match:grain\n    - match: grain\n    - nginx\n")])]),n._v(" "),t("p",[n._v("nginx安装规则")]),n._v(" "),t("pre",[t("code",[n._v("#cat /srv/salt/nginx.sls \n\nnginx:\n  pkg:               #定义使用（pkg state module）\n    - installed      #安装nginx（yum安装）\n  service.running:   #保持服务是启动状态\n    - enable: True\n    - reload: True\n    - require:\n      - file: /etc/init.d/nginx\n    - watch:                 #检测下面两个配置文件，有变动，立马执行上述/etc/init.d/nginx 命令reload操作\n      - file: /etc/nginx/nginx.conf\n      - file: /etc/nginx/fastcgi.conf\n      - pkg: nginx\n/etc/nginx/nginx.conf:       #绝对路径\n  file.managed:\n    - source: salt://files/nginx/nginx.conf  #nginx.conf配置文件在salt上面的位置\n    - user: root\n    - mode: 644\n    - template: jinja   #salt使用jinja模块\n    - require:\n      - pkg: nginx\n\n/etc/nginx/fastcgi.conf:\n file.managed:\n   - source: salt://files/nginx/fastcgi.conf \n   - user: root\n   - mode: 644\n   - require:\n     - pkg: nginx\n\n/etc/init.d/nginx:\n file.managed:\n   - source: salt://files/nginx/nginx\n   - user: root\n    - mode: 777\n    - require:\n     - pkg: nginx\n")])]),n._v(" "),t("p",[n._v("在当前目录下面（salt的主目录）创建files/nginx/nginx.conf、files/nginx/fastcgi.conf文件")]),n._v(" "),t("pre",[t("code",[n._v("mkdir -p /srv/salt/files/nginx/\n")])]),n._v(" "),t("p",[n._v("fastcgi.conf 配置文件")]),n._v(" "),t("pre",[t("code",[n._v("cat fastcgi.conf \n\n#test1111111111111111111\n\nfastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;\nfastcgi_param  QUERY_STRING       $query_string;\nfastcgi_param  REQUEST_METHOD     $request_method;\nfastcgi_param  CONTENT_TYPE       $content_type;\nfastcgi_param  CONTENT_LENGTH     $content_length;\n\nfastcgi_param  SCRIPT_NAME        $fastcgi_script_name;\nfastcgi_param  REQUEST_URI        $request_uri;\nfastcgi_param  DOCUMENT_URI       $document_uri;\nfastcgi_param  DOCUMENT_ROOT      $document_root;\nfastcgi_param  SERVER_PROTOCOL    $server_protocol;\n\nfastcgi_param  GATEWAY_INTERFACE  CGI/1.1;\nfastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;\n\nfastcgi_param  REMOTE_ADDR        $remote_addr;\nfastcgi_param  REMOTE_PORT        $remote_port;\nfastcgi_param  SERVER_ADDR        $server_addr;\nfastcgi_param  SERVER_PORT        $server_port;\nfastcgi_param  SERVER_NAME        $server_name;\n\n# PHP only, required if PHP was built with --enable-force-cgi-redirect\nfastcgi_param  REDIRECT_STATUS    200;\n")])]),n._v(" "),t("p",[n._v("nginx.conf配置文件")]),n._v(" "),t("pre",[t("code",[n._v('cat nginx.conf\n\n# For more information on configuration, see:\n#   * Official English Documentation: http://nginx.org/en/docs/\n#   * Official Russian Documentation: http://nginx.org/ru/docs/\n# test111111111111111111111\nuser              nginx;\nworker_processes  1;\n\nerror_log  /var/log/nginx/error.log;\n#error_log  /var/log/nginx/error.log  notice;\n#error_log  /var/log/nginx/error.log  info;\n\npid        /var/run/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                    \'$status $body_bytes_sent "$http_referer" \'\n                    \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    # Load config files from the /etc/nginx/conf.d directory\n    # The default server is in conf.d/default.conf\n    include /etc/nginx/conf.d/*.conf;\n\n}\n')])]),n._v(" "),t("p",[n._v("nginx启动脚本")]),n._v(" "),t("pre",[t("code",[n._v('cat nginx\n\n#!/bin/sh\n#\n# nginx - this script starts and stops the nginx daemon\n#\n# chkconfig:   - 85 15\n# description:  Nginx is an HTTP(S) server, HTTP(S) reverse \\\n#               proxy and IMAP/POP3 proxy server\n# processname: nginx\n# config:      /etc/nginx/nginx.conf\n# config:      /etc/sysconfig/nginx\n# pidfile:     /var/run/nginx.pid\n\n# Source function library.\n. /etc/rc.d/init.d/functions\n\n# Source networking configuration.\n. /etc/sysconfig/network\n\n# Check that networking is up.\n[ "$NETWORKING" = "no" ] && exit 0\n\nnginx="/usr/sbin/nginx"\nprog=$(basename $nginx)\n\nsysconfig="/etc/sysconfig/$prog"\nlockfile="/var/lock/subsys/nginx"\npidfile="/var/run/${prog}.pid"\n\nNGINX_CONF_FILE="/etc/nginx/nginx.conf"\n\n[ -f $sysconfig ] && . $sysconfig\n\n\nstart() {\n    [ -x $nginx ] || exit 5\n    [ -f $NGINX_CONF_FILE ] || exit 6\n    echo -n $"Starting $prog: "\n    daemon $nginx -c $NGINX_CONF_FILE\n    retval=$?\n    echo\n    [ $retval -eq 0 ] && touch $lockfile\n    return $retval\n}\n\nstop() {\n    echo -n $"Stopping $prog: "\n    killproc -p $pidfile $prog\n    retval=$?\n    echo\n    [ $retval -eq 0 ] && rm -f $lockfile\n    return $retval\n}\n\nrestart() {\n    configtest_q || return 6\n    stop\n    start\n}\n\nreload() {\n    configtest_q || return 6\n    echo -n $"Reloading $prog: "\n    killproc -p $pidfile $prog -HUP\n    echo\n}\n\nconfigtest() {\n    $nginx -t -c $NGINX_CONF_FILE\n}\n\nconfigtest_q() {\n    $nginx -t -q -c $NGINX_CONF_FILE\n}\n\nrh_status() {\n    status $prog\n}\n\nrh_status_q() {\n    rh_status >/dev/null 2>&1\n}\n\n# Upgrade the binary with no downtime.\nupgrade() {\n    local oldbin_pidfile="${pidfile}.oldbin"\n\n    configtest_q || return 6\n    echo -n $"Upgrading $prog: "\n    killproc -p $pidfile $prog -USR2\n    retval=$?\n    sleep 1\n    if [[ -f ${oldbin_pidfile} && -f ${pidfile} ]];  then\n        killproc -p $oldbin_pidfile $prog -QUIT\n        success $"$prog online upgrade"\n        echo \n        return 0\n    else\n        failure $"$prog online upgrade"\n        echo\n        return 1\n    fi\n}\n\n# Tell nginx to reopen logs\nreopen_logs() {\n    configtest_q || return 6\n    echo -n $"Reopening $prog logs: "\n    killproc -p $pidfile $prog -USR1\n    retval=$?\n    echo\n    return $retval\n}\n\ncase "$1" in\n    start)\n        rh_status_q && exit 0\n        $1\n        ;;\n    stop)\n        rh_status_q || exit 0\n        $1\n        ;;\n    restart|configtest|reopen_logs)\n        $1\n        ;;\n    force-reload|upgrade) \n        rh_status_q || exit 7\n        upgrade\n        ;;\n    reload)\n        rh_status_q || exit 7\n        $1\n        ;;\n    status|status_q)\n        rh_$1\n        ;;\n    condrestart|try-restart)\n        rh_status_q || exit 7\n        restart\n            ;;\n    *)\n        echo $"Usage: $0 {start|stop|reload|configtest|status|force-reload|upgrade|restart|reopen_logs}"\n        exit 2\nesac\n')])]),n._v(" "),t("p",[n._v("还可以多加几个配置文件，此处只列出重要的")]),n._v(" "),t("p",[n._v("在server端执行安装过程")]),n._v(" "),t("pre",[t("code",[n._v("# salt '*' state.sls nginx   \n\ntest-minion:\n----------\n      ID: nginx\nFunction: pkg.installed\n  Result: True\n Comment: The following packages were installed/updated: nginx.\n Changes:   \n          ----------\n          nginx:\n              ----------\n              new:\n                  1.0.15-5.el6\n              old:\n\n----------\n      ID: /etc/init.d/nginx\nFunction: file.managed\n  Result: True\n Comment: File /etc/init.d/nginx updated\n Changes:   \n          ----------\n          diff:\n              ---  \n              +++  \n              @@ -137,7 +137,7 @@\n                   condrestart|try-restart)\n                       rh_status_q || exit 7\n                       restart\n              -         ;;\n              +            ;;\n                   *)\n                       echo $\"Usage: $0 {start|stop|reload|configtest|status|force-reload|upgrade|restart|reopen_logs}\"\n                       exit 2\n\n          mode:\n              0777\n----------\n      ID: /etc/nginx/nginx.conf\nFunction: file.managed\n  Result: True\n Comment: File /etc/nginx/nginx.conf updated\n Changes:   \n          ----------\n          diff:\n              ---  \n              +++  \n              @@ -1,7 +1,7 @@\n               # For more information on configuration, see:\n               #   * Official English Documentation: http://nginx.org/en/docs/\n               #   * Official Russian Documentation: http://nginx.org/ru/docs/\n              -\n              +# test111111111111111111111\n               user              nginx;\n               worker_processes  1;\n\n              @@ -34,7 +34,7 @@\n                   keepalive_timeout  65;\n\n                   #gzip  on;\n              -    \n              +\n                   # Load config files from the /etc/nginx/conf.d directory\n                   # The default server is in conf.d/default.conf\n                   include /etc/nginx/conf.d/*.conf;\n\n----------\n      ID: /etc/nginx/fastcgi.conf\nFunction: file.managed\n  Result: True\n Comment: File /etc/nginx/fastcgi.conf updated\n Changes:   \n          ----------\n          diff:\n              ---  \n              +++  \n              @@ -1,3 +1,4 @@\n              +#test1111111111111111111\n\n               fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;\n               fastcgi_param  QUERY_STRING       $query_string;\n\n----------\n      ID: nginx\nFunction: service.running\n  Result: True\n Comment: Service nginx has been enabled, and is running\n Changes:   \n          ----------\n          nginx:\n              True\n\nSummary\n------------\nSucceeded: 5\nFailed:    0\n------------\nTotal:     5\n")])]),n._v(" "),t("p",[n._v("还有别的规则也可以全量执行")]),n._v(" "),t("pre",[t("code",[n._v("#salt '*' state.highstate\n")])]),n._v(" "),t("h2",{attrs:{id:"到此就可以大批量的为服务器安装nginx了，当然这只是初探saltstack，后续还有更详细的功能。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#到此就可以大批量的为服务器安装nginx了，当然这只是初探saltstack，后续还有更详细的功能。"}},[n._v("#")]),n._v(" 到此就可以大批量的为服务器安装nginx了，当然这只是初探saltstack，后续还有更详细的功能。")])])}),[],!1,null,null,null);e.default=r.exports}}]);