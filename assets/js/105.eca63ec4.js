(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{412:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"centos-nfs的安装配置、启动及mount挂载方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-nfs的安装配置、启动及mount挂载方法","aria-hidden":"true"}},[t._v("#")]),t._v(" CentOS NFS的安装配置、启动及mount挂载方法")]),t._v(" "),a("h2",{attrs:{id:"环境介绍："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境介绍：","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境介绍：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("服务器：centos 192.168.1.225")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("客户端：centos 192.168.1.226")])])]),t._v(" "),a("h2",{attrs:{id:"安装："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装：","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装：")]),t._v(" "),a("p",[t._v("centos 5 :")]),t._v(" "),a("pre",[a("code",[t._v("yum -y install nfs-utils portmap\n")])]),t._v(" "),a("p",[t._v("centos 6 :")]),t._v(" "),a("pre",[a("code",[t._v("yum -y install nfs-utils rpcbind\n")])]),t._v(" "),a("h2",{attrs:{id:"服务器端配置："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端配置：","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端配置：")]),t._v(" "),a("h3",{attrs:{id:"创建共享目录："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建共享目录：","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建共享目录：")]),t._v(" "),a("pre",[a("code",[t._v("[root@centos2 /]# mkdir /usr/local/test  \n")])]),t._v(" "),a("h3",{attrs:{id:"nfs文件配置："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfs文件配置：","aria-hidden":"true"}},[t._v("#")]),t._v(" NFS文件配置：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vi /etc/exports ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#增加一行：")]),t._v("\n/usr/local/test/ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.226"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw,no_root_squash,no_all_squash,sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n使配置生效：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exportfs -r")]),t._v("\n")])])]),a("p",[t._v("注：配置文件说明：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("/usr/local/test/ 为共享的目录，使用绝对路径。")]),t._v(" "),a("li",[t._v("192.168.1.226(rw,no_root_squash,no_all_squash,sync) 为客户端的地址及权限，地址可以是一个网段，一个IP地址或者是一个域名，域名支持通配符，如：*.youxia.com，地址与权限中间没有空格，权限说明：")]),t._v(" "),a("li",[t._v("rw：read-write，可读写；")]),t._v(" "),a("li",[t._v("ro：read-only，只读；")]),t._v(" "),a("li",[t._v("sync：文件同时写入硬盘和内存；")]),t._v(" "),a("li",[t._v("async：文件暂存于内存，而不是直接写入内存；")]),t._v(" "),a("li",[t._v("no_root_squash：NFS客户端连接服务端时如果使用的是root的话，那么对服务端分享的目录来说，也拥有root权限。显然开启这项是不安全的。")]),t._v(" "),a("li",[t._v("root_squash：NFS客户端连接服务端时如果使用的是root的话，那么对服务端分享的目录来说，拥有匿名用户权限，通常他将使用nobody或nfsnobody身份；")]),t._v(" "),a("li",[t._v("all_squash：不论NFS客户端连接服务端时使用什么用户，对服务端分享的目录来说都是拥有匿名用户权限；")]),t._v(" "),a("li",[t._v("anonuid：匿名用户的UID值，通常是nobody或nfsnobody，可以在此处自行设定；")]),t._v(" "),a("li",[t._v("anongid：匿名用户的GID值。")])])]),t._v(" "),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动:")]),t._v(" "),a("p",[t._v("centos6:")]),t._v(" "),a("pre",[a("code",[t._v("[root@centos2 /]# service rpcbind start\n[root@centos2 /]# service nfs start\n")])]),t._v(" "),a("p",[t._v("centos 5")]),t._v(" "),a("pre",[a("code",[t._v("[root@centos2 /]# service portmap start\n[root@centos2 /]# service nfs start\n")])]),t._v(" "),a("h2",{attrs:{id:"客户端挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端挂载：","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端挂载：")]),t._v(" "),a("h3",{attrs:{id:"创建需要挂载的目录："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建需要挂载的目录：","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建需要挂载的目录：")]),t._v(" "),a("pre",[a("code",[t._v("[root@localhost ~]# mkdir /usr/local/test\n")])]),t._v(" "),a("h3",{attrs:{id:"测试挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试挂载：","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试挂载：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# service rpcbind start  ##centos5 service portmap start")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# showmount -e 192.168.1.225")]),t._v("\nExport list "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.225:\n/usr/local/test "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.226\n")])])]),a("p",[t._v("如果显示："),a("code",[t._v("rpc mount export: RPC: Unable to receive; errno = No route to host")]),t._v("则需要在服务端关闭防火墙（稍候会详细说）。")]),t._v(" "),a("h3",{attrs:{id:"挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载：","aria-hidden":"true"}},[t._v("#")]),t._v(" 挂载：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mount -t nfs 192.168.1.225:/usr/local/test /usr/local/test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mount")]),t._v("\n/dev/mapper/VolGroup-lv_root on / "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nproc on /proc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" proc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsysfs on /sys "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" sysfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndevpts on /dev/pts "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" devpts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw,gid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(",mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("620")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntmpfs on /dev/shm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" tmpfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n/dev/sda1 on /boot "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnone on /proc/sys/fs/binfmt_misc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" binfmt_misc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsunrpc on /var/lib/nfs/rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnfsd on /proc/fs/nfsd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" nfsd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.225:/usr/local/test on /usr/local/test "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" nfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw,vers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(",addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.225,clientaddr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.226"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果信息如上显示则挂载成功！")]),t._v(" "),a("h3",{attrs:{id:"测试："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试：","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试：")]),t._v(" "),a("p",[t._v("客户端生成一个文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /usr/local/test/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos2 test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# echo "hello nfs test">>test')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos2 test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll")]),t._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":24 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),a("p",[t._v("服务端检查：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /usr/local/test/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@centos2 test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ll")]),t._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":24 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),a("p",[t._v("挂载成功！")]),t._v(" "),a("h2",{attrs:{id:"解除挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解除挂载：","aria-hidden":"true"}},[t._v("#")]),t._v(" 解除挂载：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# umount /usr/local/test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mount")]),t._v("\n/dev/mapper/VolGroup-lv_root on / "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nproc on /proc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" proc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsysfs on /sys "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" sysfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndevpts on /dev/pts "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" devpts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw,gid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(",mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("620")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntmpfs on /dev/shm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" tmpfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n/dev/sda1 on /boot "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnone on /proc/sys/fs/binfmt_misc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" binfmt_misc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsunrpc on /var/lib/nfs/rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnfsd on /proc/fs/nfsd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" nfsd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果遇到："),a("code",[t._v("umount.nfs: /usr/local/test: device is busy")])]),t._v(" "),a("p",[t._v("可能用命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fuser -m -v /usr/local/test")]),t._v("\n\n                     用户     进程号 权限   命令\n/usr/local/test/:              root       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2798")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n                     root       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2996")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kill -9 2798")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kill -9 2996")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# umount /usr/local/test")]),t._v("\n")])])]),a("h2",{attrs:{id:"服务器端防火墙设置（nfs-开启防墙配置）："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端防火墙设置（nfs-开启防墙配置）：","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端防火墙设置（NFS 开启防墙配置）：")]),t._v(" "),a("p",[t._v("1、修改/etc/service,添加以下内容（端口号必须在1024以下,且未被占用）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Local services  ")]),t._v("\n    mountd "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1011")]),t._v("/tcp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc.mountd  ")]),t._v("\n    mountd "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1011")]),t._v("/udp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc.mountd  ")]),t._v("\n    rquotad "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1012")]),t._v("/tcp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc.rquotad  ")]),t._v("\n    rquotad "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1012")]),t._v("/udp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc.rquotad")]),t._v("\n")])])]),a("p",[t._v("2、重启Linux NFS服务")]),t._v(" "),a("pre",[a("code",[t._v("service nfs restart\n")])]),t._v(" "),a("p",[t._v("3、此时rpc相关端口已经被固定,可以为Linux NFS添加防火墙规则")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#portmap  ")]),t._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),t._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),t._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nfsd  ")]),t._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2049")]),t._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2049")]),t._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#mountd  ")]),t._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1011")]),t._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1011")]),t._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rquotad  ")]),t._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1012")]),t._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1012")]),t._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rpc.statd  ")]),t._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v(" -j ACCEPT\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),t._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2049")]),t._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1011")]),t._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1012")]),t._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v(" -j ACCEPT\n")])])]),a("p",[t._v("客户端在挂载的时候遇到的一个问题如下，可能是网络不太稳定，NFS默认是用UDP协议，换成TCP协议即可：")]),t._v(" "),a("pre",[a("code",[t._v("mount -t nfs 192.168.1.225:/usr/local/test /usr/local/test  -o proto=tcp -o nolock\n")])])])}),[],!1,null,null,null);s.default=e.exports}}]);