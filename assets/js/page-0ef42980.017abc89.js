(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{377:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("ORA-01102: cannot mount database in EXCLUSIVE mode")]),s._v(" "),n("p",[s._v("还是startup的问题，真是连锁反应啊~~")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("SQL"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" conn /as sysdba\nConnected to an idle instance.\nSQL"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" startup\nORACLE instance started.\nTotal System Global Area  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("591396864")]),s._v(" bytes\nFixed Size                   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1220724")]),s._v(" bytes\nVariable Size             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("167776140")]),s._v(" bytes\nDatabase Buffers         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("415236096")]),s._v("  bytes\nRedo Buffers                 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7163904")]),s._v(" bytes\nORA-01102: cannot "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" database "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" EXCLUSIVE mode\nSQL"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" immediate\nORA-01507: database not mounted\n\nORACLE instance shut down.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("去CSDN查了一下资料，终于解决了\n出现ORA-1102错误可能有以下几种可能：\n一、在HA系统中，已经有其他节点启动了实例，将双机共享的资源（如磁盘阵列上的裸设备）占用了；\n二、说明Oracle被异常关闭时，有资源没有被释放，一般有以下几种可能，\n1、 Oracle的共享内存段或信号量没有被释放；\n2、 Oracle的后台进程（如SMON、PMON、DBWn等）没有被关闭；\n3、 用于锁内存的文件lk和sgadef.dbf文件没有被删除。\n第一点，可以通过在备节点上查数据库状态来判断是否已启动实例。\n第二点，如果系统是因为断电引起数据库宕机的，并且系统在接电被重启后，我们可以排除第二种可能的1、2点。接下来考虑第3点。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("查"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ORACLE_HOME")]),s._v("/dbs目录：\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oracle@localhost dbs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" sgadef*\nls: cannot access sgadef*: No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oracle@localhost dbs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" lk*\nlkORCL\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oracle@localhost dbs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\nlk文件没有被删除。将它删除掉\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oracle@localhost dbs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" lkORCL\n再启动数据库，成功。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("如果是Oracle进程没有关闭，用以下命令查出存在的oracle进程：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost dbs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep oracle")]),s._v("\nroot      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2310")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2358")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":00 pts/0    00:00:00 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - oracle\noracle    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2311")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2310")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":00 pts/0    00:00:00 -bash\nroot      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2427")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2403")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":47 pts/1    00:00:00 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - oracle\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("然后用kill -9命令杀掉进程\n$kill -9\n总结：\n当发生1102错误时，可以按照以下流程检查、排错：\n1.如果是HA系统，检查其他节点是否已经启动实例；")]),s._v(" "),n("p",[s._v("2.检查Oracle进程是否存在，如果存在则杀掉进程；")]),s._v(" "),n("p",[s._v("3.检查信号量是否存在，如果存在，则清除信号量；")]),s._v(" "),n("p",[s._v("4.检查共享内存段是否存在，如果存在，则清除共享内存段；")]),s._v(" "),n("p",[s._v("5.检查锁内存文件lk和sgadef.dbf是否存在，如果存在，则删除。")])])}),[],!1,null,null,null);a.default=e.exports}}]);