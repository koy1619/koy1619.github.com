(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{497:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"用二句shell命令实现ftp批量上传文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用二句shell命令实现ftp批量上传文件夹"}},[s._v("#")]),s._v(" 用二句Shell命令实现FTP批量上传文件夹")]),s._v(" "),t("p",[s._v("实现代码如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("updir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/tmp   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#要上传的文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("todir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tmp          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#目标文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ip")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ftp用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("passwd        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ftp密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sss")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" $updir -type d -printf $todir/"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%P"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{if ("),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(' == "")next;print "mkdir " '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("aaa")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" $updir -type f -printf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'put %p %P "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v(" -nv "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF \nuser "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),s._v("\ntype binary \nprompt \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sss")]),s._v(" \ncd "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$todir")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$aaa")]),s._v(" \nquit \nEOF")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("简要说明:\n"),s._v("\n核心思想:1.初始化上传目录结构")]),s._v(" "),t("p",[s._v("2.初始化目录之后就可以直接使用put命令上传文件了")]),s._v(" "),t("p",[s._v("3.主要还是使用ftp自身的命令")]),s._v(" "),t("p",[s._v("4.格式化输出(可看作是FTP的宏命令)")]),s._v(" "),t("p",[s._v("5.保守的重定向输入流")]),s._v(" "),t("p",[s._v("核心语句只有两句：")]),s._v(" "),t("p",[s._v("第一句：")]),s._v(" "),t("pre",[t("code",[s._v("sss=`find /root/sk -type d -printf '%P\\n'| awk '{if ($0 == \"\")next;print \"mkdir \" $0}'`\n")])]),s._v(" "),t("p",[s._v("这句主要是使用find找出目录结构，然后格式化输出，最后就是添加到FTP初始化目录结构。")]),s._v(" "),t("p",[s._v("第二句：")]),s._v(" "),t("pre",[t("code",[s._v("aaa=`find /root/sk -type f -printf 'put %p %P \\n'`\n")])]),s._v(" "),t("p",[s._v("这句主要是使用find找出非目录文件，然后格式化输出，最后就是在初始化目录之后可以直接使用put上传文件。")]),s._v(" "),t("p",[s._v("shell脚本进行sftp文件上传与下载")]),s._v(" "),t("p",[s._v("http://blog.csdn.net/u012204058/article/details/53160419")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SFTP配置信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test123\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#待上传文件根目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SRCDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/mysql/sqllog\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#FTP目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DESDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/nas/sqllog\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#IP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRCDIR}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#目录下的所有文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FILES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改时间在执行时间五分钟之前的xml文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#FILES=`find ${SRCDIR} -mmin -50 -name '*.xml'`")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FILES}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FILE}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送文件 (关键部分）")]),s._v("\nlftp -u "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PASSWORD}")]),s._v(" sftp://"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${IP}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PORT}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\ncd "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DESDIR}")]),s._v("/\nlcd "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRCDIR}")]),s._v("\nput "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FILE}")]),s._v("\nby\nEOF")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);