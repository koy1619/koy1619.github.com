(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{494:function(t,a,i){"use strict";i.r(a);var n=i(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("bitnami版gitlab默认安装好web端口为80")]),t._v(" "),i("p",[t._v("为了便于开放到外部访问，需要把端口改为其他的，比如8080")]),t._v(" "),i("h2",{attrs:{id:"修改apache主配置文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#修改apache主配置文件"}},[t._v("#")]),t._v(" 修改apache主配置文件")]),t._v(" "),i("pre",[i("code",[t._v("[root@iZ23m1d4vwiZ ~]# vim /opt/gitlab-6.8.1-0/apache2/conf/httpd.conf\n\nListen 8080\n")])]),t._v(" "),i("h2",{attrs:{id:"修改apache的bitnami的配置文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#修改apache的bitnami的配置文件"}},[t._v("#")]),t._v(" 修改apache的bitnami的配置文件")]),t._v(" "),i("pre",[i("code",[t._v('[root@iZ23m1d4vwiZ ~]# vim /opt/gitlab-6.8.1-0/apache2/conf/bitnami/bitnami.conf\n# Default Virtual Host configuration.\n\n<IfVersion < 2.3 >\n  NameVirtualHost *:8080\n  NameVirtualHost *:443\n</IfVersion>\n\n<VirtualHost _default_:8080>\n  DocumentRoot "/opt/gitlab-6.8.1-0/apache2/htdocs"\n  <Directory "/opt/gitlab-6.8.1-0/apache2/htdocs">\n    Options Indexes FollowSymLinks\n    AllowOverride All\n    <IfVersion < 2.3 >\n      Order allow,deny\n      Allow from all\n    </IfVersion>\n    <IfVersion >= 2.3 >\n      Require all granted\n    </IfVersion>\n  </Directory>\n')])]),t._v(" "),i("h2",{attrs:{id:"修改gitlab-shell的配置文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#修改gitlab-shell的配置文件"}},[t._v("#")]),t._v(" 修改gitlab-shell的配置文件")]),t._v(" "),i("pre",[i("code",[t._v('[root@iZ23m1d4vwiZ ~]# vim /opt/gitlab-6.8.1-0/apps/gitlab/gitlab-shell/config.yml\n# GitLab user. git by default\nuser: git\n\n# Url to gitlab instance. Used for api calls. Should end with a slash.\ngitlab_url: "http://120.26.103.123:8080/"\n')])]),t._v(" "),i("h2",{attrs:{id:"修改gitlab的apache主目录配置文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#修改gitlab的apache主目录配置文件"}},[t._v("#")]),t._v(" 修改gitlab的apache主目录配置文件")]),t._v(" "),i("pre",[i("code",[t._v("[root@iZ23m1d4vwiZ ~]# vim /opt/gitlab-6.8.1-0/apps/gitlab/htdocs/config/gitlab.yml\n# # # # # # # # # # # # # # # # # #\n# GitLab application config file  #\n# # # # # # # # # # # # # # # # # #\n#\n# How to use:\n# 1. copy file as gitlab.yml\n# 2. Replace gitlab -> host with your domain\n# 3. Replace gitlab -> email_from\n\nproduction: &base\n  #\n  # 1. GitLab app settings\n  # ==========================\n\n  ## GitLab settings\n  gitlab:\n    ## Web server settings (note: host is the FQDN, do not include http://)\n    host: 120.26.103.123\n    port: 8080\n    https: false\n")])]),t._v(" "),i("h2",{attrs:{id:"修改gitlab的gitlabci-runner配置文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#修改gitlab的gitlabci-runner配置文件"}},[t._v("#")]),t._v(" 修改gitlab的gitlabci-runner配置文件")]),t._v(" "),i("pre",[i("code",[t._v("vim /opt/gitlab-6.8.1-0/apps/gitlabci/gitlabci-runner/config.yml\n\nurl: http://120.26.103.123:80/gitlabci/\n")])]),t._v(" "),i("h2",{attrs:{id:"重启服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#重启服务"}},[t._v("#")]),t._v(" 重启服务")]),t._v(" "),i("pre",[i("code",[t._v("[root@iZ23m1d4vwiZ ~]# sh /opt/gitlab-6.8.1-0/ctlscript.sh  restart\n")])])])}),[],!1,null,null,null);a.default=e.exports}}]);