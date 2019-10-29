(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{380:function(e,t,s){"use strict";s.r(t);var a=s(2),d=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"oracle-startup-故障：ora-00845-memory-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oracle-startup-故障：ora-00845-memory-target"}},[e._v("#")]),e._v(" oracle startup 故障：ORA-00845: MEMORY_TARGET")]),e._v(" "),s("p",[e._v("书接上文，oracle startup上文报错解决之后又出现此问题")]),e._v(" "),s("p",[e._v("Oracle 11g的Linux版本在修改了MEMORY_TARGET或者SGA_TARGET后启动可能会报错：")]),e._v(" "),s("p",[e._v("SQL> shutdown immediate"),s("br"),e._v("\nDatabase closed."),s("br"),e._v("\nDatabase dismounted."),s("br"),e._v("\nORACLE instance shut down."),s("br"),e._v("\nSQL> startup"),s("br"),e._v("\nORA-00845: MEMORY_TARGET not supported on this system")]),e._v(" "),s("p",[e._v("这个问题是由于设置SGA的大小超过了操作系统/dev/shm的大小：")]),e._v(" "),s("p",[e._v("解决这个问题只有两个方法，一种是修改初始化参数，使得初始化参数中SGA的设置小于/dev/shm的大小，另一种方法就是调整/dev/shm的大小。")]),e._v(" "),s("p",[e._v("[root@localhost db_1]# df -h /dev/shm //查看/dev/shm大小")]),e._v(" "),s("p",[e._v("Filesystem        Size         Used           Avail          Use%       Mounted  on"),s("br"),e._v("\ntmpfs                   1.0G       260M         1.8G            13%         /dev/shm")]),e._v(" "),s("p"),e._v(" "),s("pre",{staticClass:"lang:default decode:true"},[e._v("[root@localhost db_1]# vi /etc/fstab      //更换/dev/shm默认大小为2G\n# /etc/fstab\n# Created by anaconda on Tue Nov 13 00:29:16 2012\n#\n# Accessible filesystems, by reference, are maintained under '/dev/disk'\n# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info\n#\nUUID=607ef5d8-042d-486f-a9a1-e0c8fa434c62 /                       ext4    defaults        1 1\nUUID=27992806-1d47-41d8-be71-4300b5756dde /boot                   ext4    defaults        1 2\nUUID=b4d786a5-c4f4-4827-a16c-451e750d1e64 /data                   ext4    defaults        1 2\nUUID=0a3be703-d30a-493a-b7cf-db998124b6bc /home                   ext4    defaults        1 2\nUUID=2e71dc8c-237c-49e4-960d-050e3f93c00c /opt                    ext4    defaults        1 2\nUUID=ffedd612-bdc0-4c4f-a811-2703c87ee817 /tmp                    ext4    defaults        1 2\nUUID=40b8c5d5-7356-4fc2-bdb5-332790177c1d /usr                    ext4    defaults        1 2\nUUID=b0bd2554-59dc-4359-8f30-2e8b1ade11e1 /usr/local              ext4    defaults        1 2\nUUID=28335a28-7724-4708-87d6-f9ba1573bca1 /var                    ext4    defaults        1 2\nUUID=9d0fa977-91c7-4ce2-926f-fefba2cf7f4f swap                    swap    defaults        0 0\ntmpfs                   /dev/shm     tmpfs   defaults,size=2048M  0 0\ndevpts                  /dev/pts                devpts  gid=5,mode=620  0 0\nsysfs                   /sys                    sysfs   defaults        0 0\nproc                    /proc                   proc    defaults        0 0\n\n//注：本行defaults,size=10240M 中间无空格")]),e._v(" "),s("p",[e._v("[root@localhost db_1]#umount /dev/shm")]),e._v(" "),s("p",[e._v("[root@localhost db_1]#mount /dev/shm")]),e._v(" "),s("p",[e._v("查看tmpfs 大小")]),e._v(" "),s("pre",{staticClass:"lang:default decode:true"},[e._v("[root@localhost db_1]# df -lh\nFilesystem            Size  Used Avail Use% Mounted on\n/dev/sda2             9.9G  418M  9.0G   5% /\ntmpfs                 2.0G  260M  1.8G  13% /dev/shm\n/dev/sda1             146M   28M  111M  20% /boot\n/dev/sda11             36G  5.8G   28G  18% /data\n/dev/sda8             5.0G  4.7G   37M 100% /home\n/dev/sda3             9.9G  152M  9.2G   2% /opt\n/dev/sda9             5.0G  531M  4.2G  12% /tmp\n/dev/sda5             9.9G  2.2G  7.2G  24% /usr\n/dev/sda6             9.9G  151M  9.2G   2% /usr/local\n/dev/sda7             9.9G  328M  9.1G   4% /var\ntmpfs                 2.0G  260M  1.8G  13% /dev/shm")]),e._v(" "),s("p",[e._v("修改/etc/fstab，重新mount /dev/shm，然后就可以启动数据库了。")]),e._v(" "),s("p",[e._v("[oracle@localhost db_1]$ su – oracle")]),e._v(" "),s("p",[e._v("[oracle@localhost db_1]$ sqlplus / as sysdba")]),e._v(" "),s("p",[e._v("SQL*Plus: Release 11.2.0.1.0 Production on Wed Nov 14 06:11:15 2012")]),e._v(" "),s("p",[e._v("Copyright (c) 1982, 2009, Oracle.  All rights reserved.")]),e._v(" "),s("p",[e._v("Connected to:")]),e._v(" "),s("p",[e._v("Oracle Database 11g Enterprise Edition Release 11.2.0.1.0 – 64bit Production")]),e._v(" "),s("p",[e._v("With the Partitioning, OLAP, Data Mining and Real Application Testing options")]),e._v(" "),s("p",[e._v("SQL>startup")]),e._v(" "),s("p",[e._v("ORACLE instance started.")]),e._v(" "),s("p",[e._v("Total System Global Area 4743446528 bytes")]),e._v(" "),s("p",[e._v("Fixed Size 2143824 bytes")]),e._v(" "),s("p",[e._v("Variable Size 3892316592 bytes")]),e._v(" "),s("p",[e._v("Database Buffers 805306368 bytes")]),e._v(" "),s("p",[e._v("Redo Buffers 43679744 bytes")]),e._v(" "),s("p",[e._v("Database mounted.")]),e._v(" "),s("p",[e._v("Database opened")]),e._v(" "),s("p"),e._v(" "),s("p")])}),[],!1,null,null,null);t.default=d.exports}}]);