(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{371:function(e,n,s){"use strict";s.r(n);var t=s(1),d=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"树莓派自动挂载usb移动存储设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#树莓派自动挂载usb移动存储设备","aria-hidden":"true"}},[e._v("#")]),e._v(" 树莓派自动挂载usb移动存储设备")]),e._v(" "),s("p",[e._v("================")]),e._v(" "),s("p",[e._v("首先插上U盘或者移动硬盘到PI，期间PI因为突然有接口插入会因为电流不稳定而重启！")]),e._v(" "),s("p",[e._v("重启后ssh登陆在终端输入 sudo fdisk -l 会显示出已经挂载的存储设备。")]),e._v(" "),s("p",[e._v("你应该看到类似于这样的画面：")]),e._v(" "),s("pre",[s("code",[e._v("pi@raspberrypi ~ $ sudo fdisk -l\n\nDisk /dev/mmcblk0: 7948 MB, 7948206080 bytes\n4 heads, 16 sectors/track, 242560 cylinders, total 15523840 sectors\nUnits = sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisk identifier: 0x000981cb\n\n        Device Boot      Start         End      Blocks   Id  System\n/dev/mmcblk0p1            8192      122879       57344    c  W95 FAT32 (LBA)\n/dev/mmcblk0p2          122880    15523839     7700480   83  Linux\n\nDisk /dev/sda: 16.0 GB, 16008609792 bytes\n69 heads, 42 sectors/track, 10789 cylinders, total 31266816 sectors\nUnits = sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisk identifier: 0x29d229d1\n\nDevice Boot      Start         End      Blocks   Id  System\n/dev/sda1   *      753408    31266815    15256704    c  W95 FAT32 (LBA)\n")])]),e._v(" "),s("p",[e._v("/dev/mmc是树莓派系统的分区，mmc指的是SD卡。")]),e._v(" "),s("p",[e._v("/dev/sda1和/dev/sdb1和SD卡没有关系，这些是你插上去的USB硬盘。")]),e._v(" "),s("p",[e._v("安装ntfs-3g模块，于是我们就能读写NTFS格式的硬盘了。")]),e._v(" "),s("pre",[s("code",[e._v("sudo apt-get install ntfs-3g\n")])]),e._v(" "),s("p",[e._v("然后创建一个目录，以这个目录作为挂载点挂载硬盘，把移动设备挂载上去。")]),e._v(" "),s("pre",[s("code",[e._v("sudo mkdir -p /media\nsudo sudo mount /dev/sda1 /media\n")])]),e._v(" "),s("p",[e._v("然后df -lh就可以看到已经挂载成功")]),e._v(" "),s("pre",[s("code",[e._v("pi@raspberrypi ~ $ df -lh\nFilesystem      Size  Used Avail Use% Mounted on\nrootfs          7.2G  2.1G  4.8G  31% /\n/dev/root       7.2G  2.1G  4.8G  31% /\ndevtmpfs        211M     0  211M   0% /dev\ntmpfs            44M  232K   44M   1% /run\ntmpfs           5.0M     0  5.0M   0% /run/lock\n/dev/sda1        15G  269M   15G   2% /media/__ë__U__\ntmpfs            88M     0   88M   0% /run/shm\n/dev/mmcblk0p1   56M   19M   38M  34% /boot\n")])]),e._v(" "),s("p",[e._v("每次开机都要手动敲命令来让树莓派自动挂载U盘，是一件很不愉快的事情。")]),e._v(" "),s("p",[e._v("我们可以在udev设备管理器新建规则。")]),e._v(" "),s("pre",[s("code",[e._v('pi@raspberrypi ~ $ sudo vi /etc/udev/rules.d/10-usbstorage.rules\n\nKERNEL!="sd*", GOTO="media_by_label_auto_mount_end" \nSUBSYSTEM!="block",GOTO="media_by_label_auto_mount_end"\nIMPORT{program}="/sbin/blkid -o udev -p %N" \nENV{ID_FS_TYPE}=="", GOTO="media_by_label_auto_mount_end"\nENV{ID_FS_LABEL}!="", ENV{dir_name}="%E{ID_FS_LABEL}" \nENV{ID_FS_LABEL}=="", ENV{dir_name}="Untitled-%k" \nACTION=="add", ENV{mount_options}="relatime,sync" \nACTION=="add", ENV{ID_FS_TYPE}=="vfat", ENV{mount_options}="iocharset=utf8,umask=000" \nACTION=="add", ENV{ID_FS_TYPE}=="ntfs", ENV{mount_options}="iocharset=utf8,umask=000" \nACTION=="add", RUN+="/bin/mkdir -p /media/%E{dir_name}", RUN+="/bin/mount -o $env{mount_options} /dev/%k /media/%E{dir_name}" \n\nACTION=="remove", ENV{dir_name}!="", RUN+="/bin/umount -l /media/%E{dir_name}", RUN+="/bin/rmdir /media/%E{dir_name}" \nLABEL="media_by_label_auto_mount_end"\n')])]),e._v(" "),s("p",[e._v("发现usb移动存储设备会自动挂载到 /media 目录下,可自行修改路径, 挂载到其他目录。")])])}),[],!1,null,null,null);n.default=d.exports}}]);