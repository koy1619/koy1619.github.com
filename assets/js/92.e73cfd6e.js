(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{397:function(e,n,d){"use strict";d.r(n);var t=d(2),l=Object(t.a)({},(function(){var e=this,n=e.$createElement,d=e._self._c||n;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"linux查看内存相关命令"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#linux查看内存相关命令","aria-hidden":"true"}},[e._v("#")]),e._v(" linux查看内存相关命令")]),e._v(" "),d("p",[e._v("Linux 查看内存的插槽数，已经使用多少插槽。每条内存多大，已使用内存多大")]),e._v(" "),d("pre",{staticClass:"lang:default decode:true"},[e._v('[root@mysql1 ~]# dmidecode|grep -P -A5 "Memory\\s+Device"|grep Size|grep -v Range\nSize: 4096 MB\nSize: 4096 MB\nSize: No Module Installed\nSize: No Module Installed\nSize: No Module Installed\nSize: No Module Installed\nSize: 4096 MB\nSize: 4096 MB\nSize: No Module Installed\nSize: No Module Installed\nSize: No Module Installed\nSize: No Module Installed')]),e._v(" "),d("p",[e._v("查看内存支持的最大内存容量")]),e._v(" "),d("pre",{staticClass:"lang:default decode:true"},[e._v("[root@mysql1 ~]# dmidecode|grep -P 'Maximum\\s+Capacity'\nMaximum Capacity: 192 GB")]),e._v(" "),d("p",[e._v("查看内存的频率")]),e._v(" "),d("pre",{staticClass:"lang:default decode:true"},[e._v("[root@mysql1 ~]# dmidecode|grep -A16 \"Memory Device\"|grep 'Speed'\nSpeed: 1333 MHz\nSpeed: 1333 MHz\nSpeed: Unknown\nSpeed: Unknown\nSpeed: Unknown\nSpeed: Unknown\nSpeed: 1333 MHz\nSpeed: 1333 MHz\nSpeed: Unknown\nSpeed: Unknown\nSpeed: Unknown\nSpeed: Unknown")]),e._v(" "),d("p",[e._v("查看内存详情")]),e._v(" "),d("pre",{staticClass:"lang:default decode:true"},[e._v('dmidecode|grep -A16 "Memory Device"')])])}),[],!1,null,null,null);n.default=l.exports}}]);