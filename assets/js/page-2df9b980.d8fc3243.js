(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{431:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("首先插上U盘或者移动硬盘到PI，期间PI因为突然有接口插入会因为电流不稳定而重启！")]),s._v(" "),t("p",[s._v("重启后ssh登陆在终端输入 sudo fdisk -l 会显示出已经挂载的存储设备。")]),s._v(" "),t("p",[s._v("你应该看到类似于这样的画面：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pi@raspberrypi ~ $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\n\nDisk /dev/mmcblk0: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7948")]),s._v(" MB, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7948206080")]),s._v(" bytes\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" heads, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" sectors/track, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242560")]),s._v(" cylinders, total "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15523840")]),s._v(" sectors\nUnits "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sectors of "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisk identifier: 0x000981cb\n\nDevice Boot      Start         End      Blocks   Id  System\n/dev/mmcblk0p1            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8192")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("122879")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57344")]),s._v("    c  W95 FAT32 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LBA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n/dev/mmcblk0p2          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("122880")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15523839")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7700480")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n\nDisk /dev/sda: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.0")]),s._v(" GB, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16008609792")]),s._v(" bytes\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v(" heads, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(" sectors/track, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10789")]),s._v(" cylinders, total "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31266816")]),s._v(" sectors\nUnits "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sectors of "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisk identifier: 0x29d229d1\n\nDevice Boot      Start         End      Blocks   Id  System\n/dev/sda1   *      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("753408")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31266815")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15256704")]),s._v("    c  W95 FAT32 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LBA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("/dev/mmc是树莓派系统的分区，mmc指的是SD卡。")]),s._v(" "),t("p",[s._v("/dev/sda1和/dev/sdb1和SD卡没有关系，这些是你插上去的USB硬盘。")]),s._v(" "),t("p",[s._v("安装ntfs-3g模块，于是我们就能读写NTFS格式的硬盘了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntfs-3g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后创建一个目录，以这个目录作为挂载点挂载硬盘，把移动设备挂载上去。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /media\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sda1 /media\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后df -lh就可以看到已经挂载成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pi@raspberrypi ~ $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -lh\nFilesystem      Size  Used Avail Use% Mounted on\nrootfs          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".2G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".1G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".8G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("% /\n/dev/root       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".2G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".1G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".8G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("% /\ndevtmpfs        211M     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  211M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs            44M  232K   44M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /run\ntmpfs           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0M     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/lock\n/dev/sda1        15G  269M   15G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("% /media/__ë__U__\ntmpfs            88M     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   88M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/shm\n/dev/mmcblk0p1   56M   19M   38M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v("% /boot\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("每次开机都要手动敲命令来让树莓派自动挂载U盘，是一件很不愉快的事情。")]),s._v(" "),t("p",[s._v("我们可以在udev设备管理器新建规则。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pi@raspberrypi ~ $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/udev/rules.d/10-usbstorage.rules\n\nKERNEL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sd*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"media_by_label_auto_mount_end"')]),s._v("\nSUBSYSTEM"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"block"')]),s._v(",GOTO"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"media_by_label_auto_mount_end"')]),s._v("\nIMPORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("program"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/sbin/blkid -o udev -p %N"')]),s._v("\nENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ID_FS_TYPE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"media_by_label_auto_mount_end"')]),s._v("\nENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ID_FS_LABEL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("dir_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%E{ID_FS_LABEL}"')]),s._v("\nENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ID_FS_LABEL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("dir_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Untitled-%k"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mount_options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"relatime,sync"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ID_FS_TYPE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vfat"')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mount_options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iocharset=utf8,umask=000"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ID_FS_TYPE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ntfs"')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("mount_options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iocharset=utf8,umask=000"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/mkdir -p /media/%E{dir_name}"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/mount -o '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v('{mount_options} /dev/%k /media/%E{dir_name}"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ACTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remove"')]),s._v(", ENV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("dir_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/umount -l /media/%E{dir_name}"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/rmdir /media/%E{dir_name}"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LABEL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"media_by_label_auto_mount_end"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("发现usb移动存储设备会自动挂载到 /media 目录下,可自行修改路径, 挂载到其他目录。")])])}),[],!1,null,null,null);a.default=e.exports}}]);