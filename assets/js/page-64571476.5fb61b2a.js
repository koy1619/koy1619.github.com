(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{468:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-nfs的安装配置、启动及mount挂载方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-nfs的安装配置、启动及mount挂载方法"}},[s._v("#")]),s._v(" CentOS NFS的安装配置、启动及mount挂载方法")]),s._v(" "),a("h2",{attrs:{id:"环境介绍："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境介绍："}},[s._v("#")]),s._v(" 环境介绍：")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("服务器：centos 192.168.1.225")])])]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("客户端：centos 192.168.1.226")])])]),s._v(" "),a("h2",{attrs:{id:"安装："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装："}},[s._v("#")]),s._v(" 安装：")]),s._v(" "),a("p",[s._v("centos 5 :")]),s._v(" "),a("pre",[a("code",[s._v("yum -y install nfs-utils portmap\n")])]),s._v(" "),a("p",[s._v("centos 6 :")]),s._v(" "),a("pre",[a("code",[s._v("yum -y install nfs-utils rpcbind\n")])]),s._v(" "),a("h2",{attrs:{id:"服务器端配置："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端配置："}},[s._v("#")]),s._v(" 服务器端配置：")]),s._v(" "),a("h3",{attrs:{id:"创建共享目录："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建共享目录："}},[s._v("#")]),s._v(" 创建共享目录：")]),s._v(" "),a("pre",[a("code",[s._v("[root@centos2 /]# mkdir /usr/local/test  \n")])]),s._v(" "),a("h3",{attrs:{id:"nfs文件配置："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfs文件配置："}},[s._v("#")]),s._v(" NFS文件配置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi /etc/exports ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#增加一行：")]),s._v("\n/usr/local/test/ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.226"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw,no_root_squash,no_all_squash,sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n使配置生效：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exportfs -r")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("注：配置文件说明：")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("/usr/local/test/ 为共享的目录，使用绝对路径。")]),s._v(" "),a("li",[s._v("192.168.1.226(rw,no_root_squash,no_all_squash,sync) 为客户端的地址及权限，地址可以是一个网段，一个IP地址或者是一个域名，域名支持通配符，如：*.youxia.com，地址与权限中间没有空格，权限说明：")]),s._v(" "),a("li",[s._v("rw：read-write，可读写；")]),s._v(" "),a("li",[s._v("ro：read-only，只读；")]),s._v(" "),a("li",[s._v("sync：文件同时写入硬盘和内存；")]),s._v(" "),a("li",[s._v("async：文件暂存于内存，而不是直接写入内存；")]),s._v(" "),a("li",[s._v("no_root_squash：NFS客户端连接服务端时如果使用的是root的话，那么对服务端分享的目录来说，也拥有root权限。显然开启这项是不安全的。")]),s._v(" "),a("li",[s._v("root_squash：NFS客户端连接服务端时如果使用的是root的话，那么对服务端分享的目录来说，拥有匿名用户权限，通常他将使用nobody或nfsnobody身份；")]),s._v(" "),a("li",[s._v("all_squash：不论NFS客户端连接服务端时使用什么用户，对服务端分享的目录来说都是拥有匿名用户权限；")]),s._v(" "),a("li",[s._v("anonuid：匿名用户的UID值，通常是nobody或nfsnobody，可以在此处自行设定；")]),s._v(" "),a("li",[s._v("anongid：匿名用户的GID值。")])])]),s._v(" "),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动:")]),s._v(" "),a("p",[s._v("centos6:")]),s._v(" "),a("pre",[a("code",[s._v("[root@centos2 /]# service rpcbind start\n[root@centos2 /]# service nfs start\n")])]),s._v(" "),a("p",[s._v("centos 5")]),s._v(" "),a("pre",[a("code",[s._v("[root@centos2 /]# service portmap start\n[root@centos2 /]# service nfs start\n")])]),s._v(" "),a("h2",{attrs:{id:"客户端挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端挂载："}},[s._v("#")]),s._v(" 客户端挂载：")]),s._v(" "),a("h3",{attrs:{id:"创建需要挂载的目录："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建需要挂载的目录："}},[s._v("#")]),s._v(" 创建需要挂载的目录：")]),s._v(" "),a("pre",[a("code",[s._v("[root@localhost ~]# mkdir /usr/local/test\n")])]),s._v(" "),a("h3",{attrs:{id:"测试挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试挂载："}},[s._v("#")]),s._v(" 测试挂载：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service rpcbind start  ##centos5 service portmap start")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# showmount -e 192.168.1.225")]),s._v("\nExport list "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.225:\n/usr/local/test "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.226\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果显示："),a("code",[s._v("rpc mount export: RPC: Unable to receive; errno = No route to host")]),s._v("则需要在服务端关闭防火墙（稍候会详细说）。")]),s._v(" "),a("h3",{attrs:{id:"挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载："}},[s._v("#")]),s._v(" 挂载：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount -t nfs 192.168.1.225:/usr/local/test /usr/local/test")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount")]),s._v("\n/dev/mapper/VolGroup-lv_root on / "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nproc on /proc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" proc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsysfs on /sys "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" sysfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndevpts on /dev/pts "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" devpts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw,gid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("620")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntmpfs on /dev/shm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" tmpfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n/dev/sda1 on /boot "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnone on /proc/sys/fs/binfmt_misc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" binfmt_misc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsunrpc on /var/lib/nfs/rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnfsd on /proc/fs/nfsd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" nfsd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.225:/usr/local/test on /usr/local/test "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" nfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw,vers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.225,clientaddr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.226"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("如果信息如上显示则挂载成功！")]),s._v(" "),a("h3",{attrs:{id:"测试："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试："}},[s._v("#")]),s._v(" 测试：")]),s._v(" "),a("p",[s._v("客户端生成一个文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/local/test/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos2 test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "hello nfs test">>test')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos2 test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":24 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("服务端检查：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos2 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/local/test/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@centos2 test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" Apr  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":24 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("挂载成功！")]),s._v(" "),a("h2",{attrs:{id:"解除挂载："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解除挂载："}},[s._v("#")]),s._v(" 解除挂载：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umount /usr/local/test")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount")]),s._v("\n/dev/mapper/VolGroup-lv_root on / "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nproc on /proc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" proc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsysfs on /sys "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" sysfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndevpts on /dev/pts "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" devpts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw,gid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("620")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntmpfs on /dev/shm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" tmpfs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n/dev/sda1 on /boot "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" ext4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnone on /proc/sys/fs/binfmt_misc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" binfmt_misc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsunrpc on /var/lib/nfs/rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" rpc_pipefs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnfsd on /proc/fs/nfsd "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" nfsd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("如果遇到："),a("code",[s._v("umount.nfs: /usr/local/test: device is busy")])]),s._v(" "),a("p",[s._v("可能用命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fuser -m -v /usr/local/test")]),s._v("\n\n                     用户     进程号 权限   命令\n/usr/local/test/:              root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2798")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n                     root       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2996")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -9 2798")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -9 2996")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umount /usr/local/test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"服务器端防火墙设置（nfs-开启防墙配置）："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端防火墙设置（nfs-开启防墙配置）："}},[s._v("#")]),s._v(" 服务器端防火墙设置（NFS 开启防墙配置）：")]),s._v(" "),a("p",[s._v("1、修改/etc/service,添加以下内容（端口号必须在1024以下,且未被占用）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Local services  ")]),s._v("\n    mountd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc.mountd  ")]),s._v("\n    mountd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011")]),s._v("/udp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc.mountd  ")]),s._v("\n    rquotad "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1012")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc.rquotad  ")]),s._v("\n    rquotad "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1012")]),s._v("/udp "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc.rquotad")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("2、重启Linux NFS服务")]),s._v(" "),a("pre",[a("code",[s._v("service nfs restart\n")])]),s._v(" "),a("p",[s._v("3、此时rpc相关端口已经被固定,可以为Linux NFS添加防火墙规则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#portmap  ")]),s._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nfsd  ")]),s._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2049")]),s._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2049")]),s._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mountd  ")]),s._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011")]),s._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011")]),s._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rquotad  ")]),s._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1012")]),s._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1012")]),s._v(" -j ACCEPT  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc.statd  ")]),s._v("\n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" -j ACCEPT  \n/sbin/iptables -A INPUT -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/254 -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" -j ACCEPT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2049")]),s._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011")]),s._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1012")]),s._v(" -j ACCEPT\n-A INPUT -m state --state NEW -m tcp -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" -j ACCEPT\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("客户端在挂载的时候遇到的一个问题如下，可能是网络不太稳定，NFS默认是用UDP协议，换成TCP协议即可：")]),s._v(" "),a("pre",[a("code",[s._v("mount -t nfs 192.168.1.225:/usr/local/test /usr/local/test  -o proto=tcp -o nolock\n")])])])}),[],!1,null,null,null);t.default=e.exports}}]);