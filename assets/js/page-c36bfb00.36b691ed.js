(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{342:function(e,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"centos-install-oracle-11g"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos-install-oracle-11g","aria-hidden":"true"}},[e._v("#")]),e._v(" centos install oracle 11g")]),e._v(" "),n("p",[n("strong",[e._v("一、运行环境")]),n("br"),e._v("\n系统环境：centos 6.2 64位(图形安装)")]),e._v(" "),n("p",[e._v("#硬盘分区")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("/boot 150M\n /swap 4096M(最少要3G以上)\n / 10G\n /home 5G\n /tmp 5G\n /usr 10G\n /usr/local 10G\n /var 10G\n /opt 10G\n /data 剩余所有")]),e._v(" "),n("p",[e._v("#同步时钟  "),e._v("\nyum -y install ntp"),n("br"),e._v("\nntpdate time.nist.gov"),n("br"),e._v("\necho “* */2 * * * /sbin/ntpdate time.nist.gov” >> /etc/crontab")]),e._v(" "),n("p",[n("strong",[e._v("二、安装oracle 11gR2 依赖的组件包")]),n("br"),e._v("\nyum -y install binutils compat-libstdc++-33 elfutils-libelf elfutils-libelf-devel glibc glibc-common glibc-devel gcc gcc-c++ libaio-devel libaio libgcc libstdc++ libstdc++-devel make sysstat unixODBC unixODBC-devel pdksh numactl-devel glibc-headers"),n("br"),e._v("\n/sbin/ldconfig")]),e._v(" "),n("p",[n("strong",[e._v("三、调整内核参数")])]),e._v(" "),n("p",[e._v("vi /etc/sysctl.conf")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("fs.file-max = 6815744\nkernel.shmall = 2097152\nkernel.shmmax = 536870912\nkernel.shmmni = 4096\nkernel.sem = 250 32000 100 128\nnet.ipv4.ip_local_port_range = 9000 65500\nnet.core.rmem_default = 262144\nnet.core.rmem_max = 4194304\nnet.core.wmem_default = 262144\nnet.core.wmem_max = 1048576\nfs.aio-max-nr = 1048576")]),e._v(" "),n("p",[e._v("#让内核参数生效"),n("br"),e._v("\nsysctl -p")]),e._v(" "),n("p",[e._v("#修改limits.conf")]),e._v(" "),n("p",[e._v("vi /etc/security/limits.conf")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("#oracle settings\noracle           soft    nproc   2047\noracle           hard    nproc   16384\noracle           soft    nofile  1024\noracle           hard    nofile  65536")]),e._v(" "),n("p",[e._v("#修改系统版本（Redhat 5.×系列系统略过这步）")]),e._v(" "),n("p",[e._v("cp /etc/redhat-release /etc/redhat-release.bk")]),e._v(" "),n("p",[e._v("vi /etc/redhat-release")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("#修改内容为：\nRed Hat Enterprise Linux AS release 5 (Taroon)")]),e._v(" "),n("p",[e._v("#修改/etc/pam.d/login"),n("br"),e._v("\n#添加以下内容：")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("session    required     /lib/security/pam_limits.so\nsession    required     pam_limits.so")]),e._v(" "),n("p",[e._v("#修改/etc/profile"),n("br"),e._v("\nvi /etc/profile")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v('#添加以下内容：\n if [ $USER = "oracle" ]; then\n    if [ $SHELL = "/bin/ksh" ]; then\n       ulimit -p 16384\n       ulimit -n 65536\n    else\n       ulimit -u 16384 -n 65536\n    fi\n fi')]),e._v(" "),n("p",[e._v("#修改/etc/csh.login"),n("br"),e._v("\nvi /etc/csh.login")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v('#添加以下内容:\n if ( $USER == "oracle" ) then\n      limit maxproc 16384\n      limit deors 65536\n endif')]),e._v(" "),n("p",[n("strong",[e._v("四、创建oracle用户")])]),e._v(" "),n("p",[e._v("groupadd oinstall"),n("br"),e._v("\ngroupadd dba"),n("br"),e._v("\nuseradd -g oinstall -G dba oracle"),n("br"),e._v("\npasswd oracle     #753951")]),e._v(" "),n("p",[e._v("mkdir -p /data/oracle"),n("br"),e._v("\nmkdir -p /data/oralnventory"),n("br"),e._v("\nmkdir -p /data/software"),n("br"),e._v("\nchown -R oracle:oinstall /data/oracle"),n("br"),e._v("\nchown -R oracle:oinstall /data/software"),n("br"),e._v("\nchown -R oracle:oinstall /data/oralnventory")]),e._v(" "),n("p",[e._v("#设置用户环境变量"),n("br"),e._v("\n#su – oracle")]),e._v(" "),n("p",[e._v("vi .bash_profile")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("#添加以下内容\nORACLE_SID=kerry; export ORACLE_SID\nORACLE_BASE=/data/oracle; export ORACLE_BASE\nORACLE_HOME=$ORACLE_BASE/product/11.2.0/db_1; export ORACLE_HOME\nPATH=$PATH:$ORACLE_HOME/bin:$HOME/bin; export PATH")]),e._v(" "),n("p",[e._v("source .bash_profile")]),e._v(" "),n("p",[n("strong",[e._v("五、安装oracle")])]),e._v(" "),n("p",[e._v("#上传oracle安装文件到/data/software目录下，并解压")]),e._v(" "),n("p",[e._v("cd /data/software")]),e._v(" "),n("p",[e._v("unzip linux.x64_11gR2_database_1of2.zip"),n("br"),e._v("\nunziplinux.x64_11gR2_database_1of2.zip")]),e._v(" "),n("p",[e._v("xhost +   #(这里使用root用户执行,一定要执行以下2步，如果没有执行，将无法启动图形安装界面)"),n("br"),e._v("\nxhost + localhost"),n("br"),e._v("\nsu – oralce"),n("br"),e._v("\ncd /data/software/database"),n("br"),e._v("\n./runInstaller  #(到oracle安装文件所在目录执行该命令)")]),e._v(" "),n("p",[e._v("……")]),e._v(" "),n("p",[e._v("直接填写相关信息，到最后一步需要用root用户执行脚本")]),e._v(" "),n("p",[e._v("su root")]),e._v(" "),n("p",[e._v("/data/oralnventory/orainstRoot.sh")]),e._v(" "),n("p",[e._v("/data/oracle/product/11.2.0/db_1/root.sh")]),e._v(" "),n("p",[n("strong",[e._v("六、开机启动设置")])]),e._v(" "),n("p",[e._v("#自动启动和关闭数据库实例和监听"),n("br"),e._v("\nvi /oracle/oracle/product/11.2.0/db_1/bin/dbstart")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("ORACLE_HOME_LISTNER=$1\n#修改为：\nORACLE_HOME_LISTNER=$ORACLE_HOME")]),e._v(" "),n("p",[e._v("#启动脚本")]),e._v(" "),n("p",[e._v("vi /etc/init.d/oracle")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v('#!/bin/sh\n # chkconfig: 345 61 61\n # description: Oracle 11g AutoRun Services\n # /etc/init.d/oracle\n #\n # Run-level Startup script for the Oracle Instance, Listener, and\n # Web Interface\n export ORACLE_BASE=/data/oracle\n export ORACLE_HOME=$ORACLE_BASE/product/11.2.0/db_1\n export ORACLE_SID=kerry\n export PATH=$PATH:$ORACLE_HOME/bin\n ORA_OWNR="oracle"\n # if the executables do not exist -- display error\n\n if [ ! -f $ORACLE_HOME/bin/dbstart -o ! -d $ORACLE_HOME ]\n then\n      echo "Oracle startup: cannot start"\n      exit 1\n fi\n # depending on parameter -- startup, shutdown, restart\n # of the instance and listener or usage display\n case "$1" in\n  start)\n      # Oracle listener and instance startup\n      su $ORA_OWNR -lc $ORACLE_HOME/bin/dbstart\n      echo "Oracle Start Succesful!OK."\n      ;;\n  stop)\n      # Oracle listener and instance shutdown\n      su $ORA_OWNR -lc $ORACLE_HOME/bin/dbshut\n      echo "Oracle Stop Succesful!OK."\n      ;;\n  reload|restart)\n      $0 stop\n      $0 start\n      ;;\n  *)\n      echo $"Usage: `basename $0` {start|stop|reload|reload}"\n      exit 1\n esac\n exit 0')]),e._v(" "),n("p",[e._v("chmod 750 /etc/init.d/oracle"),n("br"),e._v("\nln -s /etc/init.d/oracle /etc/rc1.d/K61oracle"),n("br"),e._v("\nln -s /etc/init.d/oracle /etc/rc3.d/S61oracle"),n("br"),e._v("\nchkconfig –level 345 oracle on"),n("br"),e._v("\nchkconfig –add oracle")]),e._v(" "),n("p",[e._v("#启动oracle"),n("br"),e._v("\nservice oracle start")]),e._v(" "),n("p",[e._v("#查看oracle端口")]),e._v(" "),n("p",[e._v("netstat -nat")]),e._v(" "),n("p",[e._v("1521端口")]),e._v(" "),n("p",[e._v("#自动启动和关闭 EM")]),e._v(" "),n("p",[e._v("vi /etc/init.d/oraemctl")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v('#!/bin/sh\n # chkconfig: 345 61 61\n # description: Oracle 11g AutoRun Services\n # /etc/init.d/oraemctl\n #\n # Run-level Startup script for the Oracle Instance, Listener, and\n # Web Interface\n export ORACLE_BASE=/data/oracle\n export ORACLE_HOME=$ORACLE_BASE/product/11.2.0/db_1\n export ORACLE_SID=kerry\n export PATH=$PATH:$ORACLE_HOME/bin\n ORA_OWNR="oracle"\n case "$1" in\n start)\n echo -n $"Starting Oracle EM DB Console:"\n su - $ORACLE_OWNER -c "$ORACLE_HOME/bin/emctl start dbconsole"\n echo "OK"\n ;;\n stop)\n echo -n $"Stopping Oracle EM DB Console:"\n su - $ORACLE_OWNER -c "$ORACLE_HOME/bin/emctl stop dbconsole"\n echo "OK"\n ;;\n *)\n echo $"Usage: $0 {start|stop}"\n esac')]),e._v(" "),n("p",[e._v("chmod 750 /etc/init.d/oraemctl"),n("br"),e._v("\n#启动EM"),n("br"),e._v("\nservice oraemctl start")]),e._v(" "),n("p",[n("strong",[e._v("七、"),n("strong",[e._v("创建实例进行测试")])])]),e._v(" "),n("p",[e._v("su – oracle")]),e._v(" "),n("p",[e._v("sqlplus / as sysdba")]),e._v(" "),n("p",[e._v("SQL> startup")]),e._v(" "),n("div",{attrs:{align:"left"}},[e._v("\n  SQL> create table test ( id integer , name char(10));\n")]),e._v(" "),n("div",{attrs:{align:"left"}},[e._v("\n  SQL> insert into testbl values ( 0 , ‘frank’ );\n")]),e._v(" "),n("div",{attrs:{align:"left"}},[e._v("\n  SQL> commit;\n")]),e._v(" "),n("div",{attrs:{align:"left"}},[e._v("\n  SQL> select * from test;\n")]),e._v(" "),n("div",{attrs:{align:"left"}},[e._v("\n  SQL> shutdown immediate\n")]),e._v(" "),n("div",{attrs:{align:"left"}},[e._v("\n  SQL> exit\n")])])}),[],!1,null,null,null);t.default=r.exports}}]);