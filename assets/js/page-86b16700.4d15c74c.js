(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{397:function(p,e,o){"use strict";o.r(e);var c=o(1),i=Object(c.a)({},(function(){var p=this,e=p.$createElement,o=p._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[o("h1",{attrs:{id:"centos6-2下php支持oracle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#centos6-2下php支持oracle","aria-hidden":"true"}},[p._v("#")]),p._v(" centos6.2下php支持oracle")]),p._v(" "),o("p",[p._v("centos下使PHP支持oracle 11g，需要先安装oracle 11g的client")]),p._v(" "),o("p",[p._v("下载地址 http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html")]),p._v(" "),o("p",[p._v("我机器是64位的，需要安装下面3个包")]),p._v(" "),o("blockquote",[o("p",[p._v("oracle-instantclient11.2-basic-11.2.0.3.0-1.x86_64.rpm"),o("br"),p._v("\noracle-instantclient11.2-devel-11.2.0.3.0-1.x86_64.rpm"),o("br"),p._v("\noracle-instantclient11.2-sqlplus-11.2.0.3.0-1.x86_64.rpm")])]),p._v(" "),o("p",[p._v("1.安装oracle客户端")]),p._v(" "),o("p",[p._v("yum -y install libaio")]),p._v(" "),o("p",[p._v("rpm -ivh oracle-instantclient-*.rpm")]),p._v(" "),o("p",[p._v("echo “/usr/lib/oracle/11.2/client64/lib/” > /etc/ld.so.conf.d/oracle_client.conf")]),p._v(" "),o("p",[p._v("/sbin/ldconfig")]),p._v(" "),o("p",[p._v("网上有说因为安装的是oracle 11g，为了防止后面的OCI编译不过去，需要修改oracle的clinet为10g，有待验证，不过我还是这样做了")]),p._v(" "),o("p",[p._v("ln -s /usr/include/oracle/11.2 /usr/include/oracle/10.2.0.1")]),p._v(" "),o("p",[p._v("ln -s /usr/lib/oracle/11.2 /usr/lib/oracle/10.2.0.1")]),p._v(" "),o("p",[p._v("修改环境变量")]),p._v(" "),o("p",[p._v("vi /etc/profile")]),p._v(" "),o("pre",{staticClass:"lang:default decode:true"},[p._v('export ORACLE_HOME=/usr/lib/oracle/11.2/client64/\nexport ORACLE_BASE=/usr/lib/oracle/11.2\nexport LD_LIBRARY_PATH=$ORACLE_HOME/lib:$LD_LIBRARY_PATH\nexport NLS_LANG="AMERICAN_AMERICA.AL32UTF8"')]),p._v(" "),o("p",[p._v("source /etc/profile")]),p._v(" "),o("p",[p._v("2.编译安装php的pdo_oci模块")]),p._v(" "),o("p",[p._v("cd /home/setup/php/php-5.4.0/ext/pdo_oci/")]),p._v(" "),o("p",[p._v("/usr/local/php/bin/phpize")]),p._v(" "),o("p",[p._v("./configure –with-php-config=/usr/local/php/bin/php-config –with-pdo-oci=instantclient,/usr,10.2.0.1")]),p._v(" "),o("p",[p._v("make && make install")]),p._v(" "),o("p",[p._v("添加php的pdo_oci扩展")]),p._v(" "),o("p",[p._v("vi /usr/local/php/etc/php.ini")]),p._v(" "),o("p",[p._v("extension=pdo_oci.so")]),p._v(" "),o("p",[p._v("3.编译安装php的oci8模块")]),p._v(" "),o("p",[p._v("cd /home/setup/php/php-5.4.0/ext/oci8/")]),p._v(" "),o("p",[p._v("/usr/local/php/bin/phpize")]),p._v(" "),o("p",[p._v("./configure –with-php-config=/usr/local/php/bin/php-config –with-oci8=instantclient,/usr/lib/oracle/11.2/client64/lib/")]),p._v(" "),o("p",[p._v("make && make install")]),p._v(" "),o("p",[p._v("添加php的oci8扩展")]),p._v(" "),o("p",[p._v("vi /usr/local/php/etc/php.ini")]),p._v(" "),o("p",[p._v("extension=oci8.so")]),p._v(" "),o("p",[p._v("4.重启web服务器和php，查看phpinfo可以看到php的pdo_oci模块和oci8模块")])])}),[],!1,null,null,null);e.default=i.exports}}]);