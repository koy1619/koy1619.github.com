(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{399:function(s,n,t){"use strict";t.r(n);var a=t(1),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux命令后台运行详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux命令后台运行详解","aria-hidden":"true"}},[s._v("#")]),s._v(" linux命令后台运行详解")]),s._v(" "),t("p",[s._v("有两种方式：")]),s._v(" "),t("ol",[t("li",[s._v("command & ： 后台运行，你关掉终端会停止运行")]),s._v(" "),t("li",[s._v("nohup command & ： 后台运行，你关掉终端也会继续运行")])]),s._v(" "),t("p",[s._v("一、 简介\nLinux/Unix 区别于微软平台最大的优点就是真正的多用户，多任务。因此在任务管理上也有别具特色的管理思想。\n我们知道，在 Windows 上面，我们要么让一个程序作为服务在后台一直运行，要么停止这个服务。而不能让程序在前台后台之间切换。而 Linux 提供了 fg 和bg 命令，让你轻松调度正在运行的任务。假设你发现前台运行的一个程序需要很长的时间，但是需要干其他的事情，你就可以用 Ctrl-Z ，挂起这个程序，然后可以看到系统提示：\n[1]+ Stopped /root/bin/rsync.sh\n然后我们可以把程序调度到后台执行：（bg 后面的数字为作业号）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bg 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ /root/bin/rsync.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n用 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" 命令查看正在运行的任务：\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jobs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ Running /root/bin/rsync.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n如果想把它调回到前台运行，可以用\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#fg 1")]),s._v("\n/root/bin/rsync.sh\n")])])]),t("p",[s._v("这样，你在控制台上就只能等待这个任务完成了。")]),s._v(" "),t("p",[s._v("& 将指令丢到后台中去执行\n[ctrl]+z 將前台任务丟到后台中暂停\njobs 查看后台的工作状态\nfg %jobnumber 将后台的任务拿到前台来处理\nbg %jobnumber 将任务放到后台中去处理\nkill 管理后台的任务")]),s._v(" "),t("p",[s._v("二、&")]),s._v(" "),t("p",[s._v("在Linux中，当在前台运行某个作业时，终端被该作业占据；而在后台运行作业时，它不会占据终端。可以使用&命令把作业放到后台执行。实际上，这样是将命令放入到一个作业队列中了：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17208")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17208")]),s._v(" Running                 ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("p",[s._v("在后台运行作业时要当心：需要用户交互的命令不要放在后台执行，因为这样你的机器就会在那里傻等。不过，作业在后台运行一样会将结果输出到屏幕上，干扰你的工作。如果放在后台运行的作业会产生大量的输出，最好使用下面的方法把它的输出重定向到某个文件中：\ncommand >out.file 2>&1 &\n在上面的例子中，2>&1表示所有的标准输出和错误输出都将被重定向到一个叫做out.file 的文件中。 当你成功地提交进程以后，就会显示出一个进程号，可以用它来监控该进程，或杀死它。\n例：查找名为“httpd.conf”的文件，并把所有标准输出和错误输出重定向到find.dt的文件中：\n"),t("code",[s._v("# find /etc/httpd/ -name “httpd.conf” -print >find.dt 2>&1 &")]),s._v("\n[2] 7832\n成功提交该命令之后，系统给出了它的进程号7832。 对于已经在前台执行的命令，也可以重新放到后台执行，首先按ctrl+z暂停已经运行的进程，然后使用bg命令将停止的作业放到后台运行，例如对正在前台执行的tesh.sh使用ctrl+z挂起它：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./test.sh\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ Stopped                 ./test.sh\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bg")]),s._v(" %1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22794")]),s._v(" Running                 ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("p",[s._v("但是如上方到后台执行的进程，其父进程还是当前终端shell的进程，而一旦父进程退出，则会发送hangup信号给所有子进程，子进程收到hangup以后也会退出。如果我们要在退出shell的时候继续运行进程，则需要使用nohup忽略hangup信号，或者setsid将将父进程设为init进程(进程号为1)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$$")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21734")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29016")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29710")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21734")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":47 pts/12   00:00:00 /bin/sh ./test.sh\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29713")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21734")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":47 pts/12   00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n$ setsid ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("409")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":49 ?        00:00:00 /bin/sh ./test.sh\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("413")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21734")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":49 pts/12   00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("p",[s._v("上面的试验演示了使用nohup/setsid加上&使进程在后台运行，同时不受当前shell退出的影响。那么对于已经在后台运行的进程，该怎么办呢？可以使用disown命令：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2539")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2539")]),s._v(" Running                 ./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n$ disown -h %1\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":49 ?        00:00:00 /bin/sh ./test.sh\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2542")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21734")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":52 pts/12   00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("p",[s._v("另外还有一种方法，即使将进程在一个subshell中执行，其实这和setsid异曲同工。方法很简单，将命令用括号() 括起来即可：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("./test.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":49 ?        00:00:00 /bin/sh ./test.sh\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("515")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12483")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21734")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":59 pts/12   00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("p",[s._v("注：本文试验环境为Red Hat Enterprise Linux AS release 4 (Nahant Update 5),shell为/bin/bash，不同的OS和shell可能命令有些不一样。例如AIX的ksh，没有disown，但是可以使用nohup -p PID来获得disown同样的效果。")]),s._v(" "),t("p",[s._v("还有一种更加强大的方式是使用screen，首先创建一个断开模式的虚拟终端，然后用-r选项重新连接这个虚拟终端，在其中执行的任何命令，都能达到nohup的效果，这在有多个命令需要在后台连续执行的时候比较方便：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -dmS screen_test\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -list\nThere is a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" on:\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27963")]),s._v(".screen_test       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Detached"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" Socket "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /tmp/uscreens/S-jiangfeng.\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" -r screen_test\n")])])]),t("p",[s._v("三、 nohup\n如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用nohup命令。该命令可以在你退出帐户之后继续运行相应的进程。nohup就是不挂起的意思( no hang up)。 该命令的一般形式为：\nnohup conmmand &\n如果使用nohup命令提交作业，那么在缺省情况下该作业的所有输出都被重定向到一个名为nohup.out的文件中，除非另外指定了输出文件：\nnohup command > myout.file 2>&1\n在上面的例子中，输出被重定向到myout.file文件中。\n四、.*，？，[...]，[!...]等\n下面就是这些特殊字符：")]),s._v(" "),t("ul",[t("li",[s._v("匹配文件名中的任何字符串，包括空字符串。\n？ 匹配文件名中的任何单个字符。\n[...] 匹配[ ]中所包含的任何字符。\n[!...] 匹配[ ]中非感叹号！之后的字符。\n当s h e l l遇到上述字符时，就会把它们当作特殊字符，而不是文件名中的普通字符，这样用户就可以用它们来匹配相应的文件名。")])]),s._v(" "),t("p",[s._v("1)列出以i或o开头的文件名：     #ls [io]*\n2)列出log.开头、后面跟随一个数字、然后可以是任意字符串的文件名： #ls log.[0-9]*\n3)与例二相反，列出log.开头、后面不跟随一个数字、然后可以是任意字符串的文件名 : #ls log.[!0-9]*\n4)列出所有以LPS开头、中间可以是任何两个字符，最后以1结尾的文件名：#ls LPS??1\n5)列出所有以大写字母开头的文件名：$ ls [A-Z]* 6)列出所有以. 开头的文件名（隐含文件，例如. profile、.rhosts、.histo ry等）: $ ls .*")]),s._v(" "),t("p",[s._v("其他相关命令：\njobs：查看当前有多少在后台运行的命令\nfg：将后台中的命令调至前台继续运行。如果后台中有多个命令，可以用 fg %jobnumber将选中的命令调出，%jobnumber是通过jobs命令查到的后台正在执行的命令的序号(不是pid)\nbg：将一个在后台暂停的命令，变成继续执行。如果后台中有多个命令，可以用bg %jobnumber将选中的命令调出，%jobnumber是通过jobs命令查到的后台正在执行的命令的序号(不是pid)")]),s._v(" "),t("p",[s._v("杀死进程\n杀死已经启动的程序和普通方式一样：")]),s._v(" "),t("p",[s._v("pkill -9 name\nkillall name\nkill pid\n…")])])}),[],!1,null,null,null);n.default=e.exports}}]);