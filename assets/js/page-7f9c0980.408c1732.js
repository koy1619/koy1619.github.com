(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{462:function(t,s,p){"use strict";p.r(s);var a=p(2),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,p=t._self._c||s;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("p",[t._v("yum安装LAMP+tomcat")]),t._v(" "),p("p",[t._v("##一、准备篇：")]),t._v(" "),p("p",[t._v("1.配置防火墙，开启80端口、8080端口、3306端口")]),t._v(" "),p("div",{staticClass:"language-bash line-numbers-mode"},[p("pre",{pre:!0,attrs:{class:"language-bash"}},[p("code",[p("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#vi /etc/sysconfig/iptables  ")]),t._v("\n-A INPUT -m state "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),p("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#8211;state NEW -m tcp -p tcp &#8211;dport 80 -j ACCEPT（允许apache的80端口通过防火墙）  ")]),t._v("\n-A INPUT -m state "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),p("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#8211;state NEW -m tcp -p tcp &#8211;dport 80 -j ACCEPT（允许tomcat的8080端口通过防火墙）  ")]),t._v("\n-A INPUT -m state "),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),p("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#8211;state NEW -m tcp -p tcp &#8211;dport 3306 -j ACCEPT（允许mysql的3306端口通过防火墙 ）  ")]),t._v("\n重启防火墙使配置生效  \n"),p("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#/etc/init.d/iptables restart  ")]),t._v("\n"),p("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#service iptables restart")]),t._v("\n")])]),t._v(" "),p("div",{staticClass:"line-numbers-wrapper"},[p("span",{staticClass:"line-number"},[t._v("1")]),p("br"),p("span",{staticClass:"line-number"},[t._v("2")]),p("br"),p("span",{staticClass:"line-number"},[t._v("3")]),p("br"),p("span",{staticClass:"line-number"},[t._v("4")]),p("br"),p("span",{staticClass:"line-number"},[t._v("5")]),p("br"),p("span",{staticClass:"line-number"},[t._v("6")]),p("br"),p("span",{staticClass:"line-number"},[t._v("7")]),p("br")])]),p("p",[t._v("2.检查是否已经安装apache，mysql，php，tomcat")]),t._v(" "),p("pre",[p("code",[t._v("#rpm -q httpd（mysql，php，tomcat）\n")])]),t._v(" "),p("p",[t._v("若已安装则")]),t._v(" "),p("pre",[p("code",[t._v("#yum remove httpd（mysql，php，tomcat）\n")])]),t._v(" "),p("p",[t._v("#二、安装篇：")]),t._v(" "),p("ol",[p("li",[p("p",[t._v("安装Apahce, PHP, MySQL以及php连接mysql库组件。")]),t._v(" "),p("p",[t._v("#yum -y install httpd php mysql mysql-server php-mysql")])])]),t._v(" "),p("p",[t._v("yum会到指定的服务器(mirror:163.com服务器)下载对应的软件版本，并自动处理依赖关系，并进行安装。")]),t._v(" "),p("ol",{attrs:{start:"2"}},[p("li",[p("p",[t._v("安装apache扩展")]),t._v(" "),p("p",[t._v("#yum -y install httpd-manual mod_ssl mod_perl mod_auth_mysql")])])]),t._v(" "),p("p",[t._v("让apache更好的支持其他的软件。")]),t._v(" "),p("ol",{attrs:{start:"3"}},[p("li",[p("p",[t._v("安装php的扩展")]),t._v(" "),p("p",[t._v("yum -y install php-gd libjpeg* php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-bcmath php-mhash libmcrypt")])])]),t._v(" "),p("p",[t._v("apache本身并不支持php文件，要安装对应的php软件，然后进行http.conf配置；让apache能解析.php文件。"),p("br"),t._v("\n说明：Apache 网站的默认文档的路径是 /var/www/html，在这个目录里新建一个php探针文件")]),t._v(" "),p("div",{staticClass:"language-bash line-numbers-mode"},[p("pre",{pre:!0,attrs:{class:"language-bash"}},[p("code",[p("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/html  \n"),p("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" index.php  \n"),p("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" index.php  \n"),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("?php  \nphpinfo"),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),p("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n?"),p("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),p("div",{staticClass:"line-numbers-wrapper"},[p("span",{staticClass:"line-number"},[t._v("1")]),p("br"),p("span",{staticClass:"line-number"},[t._v("2")]),p("br"),p("span",{staticClass:"line-number"},[t._v("3")]),p("br"),p("span",{staticClass:"line-number"},[t._v("4")]),p("br"),p("span",{staticClass:"line-number"},[t._v("5")]),p("br"),p("span",{staticClass:"line-number"},[t._v("6")]),p("br")])]),p("pre",[p("code",[t._v("service httpd start  \n")])]),t._v(" "),p("p",[t._v("http://localhost/浏览会显示很多 PHP5 的安装信息")]),t._v(" "),p("ol",{attrs:{start:"4"}},[p("li",[p("p",[t._v("安装MySQL的扩展，并设置mysql密码")]),t._v(" "),p("p",[t._v("yum -y install mysql-connector-odbc mysql-devel libdbi-dbd-mysql")])])]),t._v(" "),p("p",[t._v("跟好的实现mysql的功能。"),p("br"),t._v("\n为root账户设置密码")]),t._v(" "),p("pre",[p("code",[t._v("#service mysqld start  \n#mysql_secure_installation  \n")])]),t._v(" "),p("p",[t._v("根据提示输入Y，回车"),p("br"),t._v("\n输入2次密码，回车"),p("br"),t._v("\n最后出现：Thanks for using MySQL!"),p("br"),t._v("\nMySql密码设置完成")]),t._v(" "),p("ol",{attrs:{start:"5"}},[p("li",[p("p",[t._v("配置开机启动服务")]),t._v(" "),p("p",[t._v("#/sbin/chkconfig httpd on [设置apache服务器httpd服务开机启动]"),p("br"),t._v("\n#/sbin/service httpd start [启动httpd服务,与开机启动无关]"),p("br"),t._v("\n#/sbin/service mysqld start [启动mysqld服务,与开机启动无关]")])]),t._v(" "),p("li",[p("p",[t._v("简单配置文件："),p("br"),t._v("\napache的配置文件是/etc/httpd/conf下"),p("br"),t._v("\nmodules放在/usr/lib/httpd下"),p("br"),t._v("\nphp的配置文件在/etc/php.d/下 和/etc/php.ini"),p("br"),t._v("\nphp的modules放在/usr/lib/php/modules下")])]),t._v(" "),p("li",[p("p",[t._v("安装Tomcat5")]),t._v(" "),p("p",[t._v("#yum -y install tomcat5 tomcat5-webapps tomcat5-admin-webapps")])])]),t._v(" "),p("p",[t._v("安装Tomcat5安装包和对应的依赖关系包")]),t._v(" "),p("ol",{attrs:{start:"8"}},[p("li",[p("p",[t._v("启动Tomcat5")]),t._v(" "),p("p",[t._v("#service tomcat5 start"),p("br"),t._v("\n#chkconfig tomcat5 on")])]),t._v(" "),p("li",[p("p",[t._v("在浏览器输入http://你的IP:8080/,可以看到Apache SoftWare Foundation页，"),p("br"),t._v("\n看到一个猫头 tomcat5安装成功")])]),t._v(" "),p("li",[p("p",[t._v("Apache与Tomcat整合"),p("br"),t._v("\n如果网站需同时整合Apache与Tomcat可以使用JK或者Proxy方式"),p("br"),t._v("\n使用VI编辑proxy_ajp.conf文件")]),t._v(" "),p("p",[t._v("#vi /etc/httpd/conf.d/proxy_ajp.conf")])])]),t._v(" "),p("p",[t._v("输入以下内容")]),t._v(" "),p("pre",[p("code",[t._v("ProxyPass /tomcat/ ajp://localhost:8009/  \n")])]),t._v(" "),p("p",[t._v("存储文件后，重启Apache")]),t._v(" "),p("pre",[p("code",[t._v("#service httpd restart\n")])]),t._v(" "),p("p",[t._v("在浏览器输入http://你的IP/tomcat/,可以看到Apache SoftWare Foundation页"),p("br"),t._v("\nAs you may have guessed by now, this is the default Tomcat home page. It can be found on the local"),p("br"),t._v("\nfilesystem at:")]),t._v(" "),p("p",[t._v("$CATALINA_HOME/webapps/ROOT/index.jsp")]),t._v(" "),p("p",[t._v("这样就可以解析 .jsp文件。")])])}),[],!1,null,null,null);s.default=e.exports}}]);