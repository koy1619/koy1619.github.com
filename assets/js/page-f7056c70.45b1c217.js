(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{430:function(e,n,t){"use strict";t.r(n);var r=t(1),i=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"windows平台配置jekyll环境并与github连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows平台配置jekyll环境并与github连接","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows平台配置Jekyll环境并与GitHub连接")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("###1.安装所需要的软件")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("文本编辑器")]),e._v("(不要使用Windows自带的编辑器)")]),e._v(" "),t("pre",[t("code",[e._v("  使用如:`notepad++` [http://www.notepad-plus-plus.org/](http://www.notepad-plus-plus.org/)\n")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Railsinstaller")]),e._v(" "),t("a",{attrs:{href:"http://railsinstaller.org/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://railsinstaller.org/en"),t("OutboundLink")],1)])])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("###2.安装完后生成SSH并导入到Github网站")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("生成SSH")]),e._v("\nRailsinstaller安装(默认安装)完后软件提示输入name 其实是Github的用户名 , 输入完后提示输入邮箱 github注册使用的邮箱\n以上操作完后会在 "),t("code",[e._v("C:\\Users\\用户名\\.ssh文件夹\\")]),e._v("下生成密钥与公钥 "),t("code",[e._v("id_rsa")]),e._v("(密钥) 与 "),t("code",[e._v("id_rsa.pub")]),e._v("(公钥)")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("导入SSH公钥到GigHub网站")]),e._v("\n(作用是使用git提交时可以使用 git@github.com:comtu/comtu.github.io.git 的地址,直接 push 数据到github网站,无需要使用Https链接每次push数据输入用户名密码)\n公钥使用文本方式打开复制里面的所有内容(ctrl+A ->ctrl+C 包括空格和新行)--\x3e 登录Gighub网站 --\x3e "),t("code",[e._v("settings(设置)")]),e._v(" --\x3e "),t("code",[e._v("SSH keys")]),e._v(" --\x3e "),t("code",[e._v("Add SSH key")]),e._v(" --\x3e "),t("code",[e._v("输入Title")]),e._v("(可随便填写,但建议编写有意义的名字) --\x3e 粘贴内容到"),t("code",[e._v("Key")]),e._v("中 --\x3e "),t("code",[e._v("Add key")])])])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("###3.测试Git连接是否正常\n运行Git Bash ("),t("code",[e._v("开始菜单--\x3e RailsInstaller --\x3e Git Bash")]),e._v(") 安装Railsinstaller后会默认在C盘根目录创建一个Sites目录 , 运行的GitBash也会自动定位到Sites目录")]),e._v(" "),t("ul",[t("li",[e._v("测试Git连接是否正常输入:"),t("code",[e._v("ssh -T git@github.com")])])]),e._v(" "),t("p",[e._v("运行会提示:\nThe authent icity of host 'github.com(204.232.175.90)' can't be established .\nRSA key fingerprint is ......\nAry you sure you want to continue connecting (yes/no)?")]),e._v(" "),t("p",[e._v("输入\n"),t("code",[e._v("yes")])]),e._v(" "),t("p",[e._v("之后会显示\nWarning: Permanently added 'github.com.204.232.175.90' (RSA) to the list of known hosts .\nPermission denied (publickey).")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("###4.修改配置避免jekyll在windows下字符集错误\n4.1.修改bash的字符集\nWin7系统中(C:\\Users\\用户名),Xp系统中(C:\\Documents and Settings\\用户名)下,\n找到.bash_profile文件,在其内容里增加如下内容\nset LC_ALL=en_US.UTF-8\nset LANG=en_US.UTF-8\n注意:\n在Windows系统下没有办法创建.xxx的文件名,所以可以借用git bash命令行来创建:\n1. 输入 echo 'set LC_ALL=en_US.UTF-8' > .bash_profile 命令创建一个内容为''内容的文件\ncomtu@CN-CS-PC73 /C/Sites\n$ echo 'set LC_ALL=en_US.UTF-8' > .bash_profile\n2.文件管理器打开文件目录C:\\Sites 将文件.bash_profile使用文本编辑器的方式打开在内容里面\n增加成如下内容保存\nset LC_ALL=en_US.UTF-8\nset LANG=en_US.UTF-8\n还有一个行空行\n3.将.bash_profile文件拷贝到Win7系统中(C:\\Users\\用户名),\nXp系统中(C:\\Documents and Settings\\用户名)下.")]),e._v(" "),t("pre",[t("code",[e._v("    4.2.所有文档使用UTF-8无BOM格式\n            在windows下新建的文本文件默认为ANSI格式,而Jekyll只认UTF-8,可以使用第三方文本编辑器进行格式转换如,\n                    notepad++中转换\n                            格式--\x3e转为UTF-8无BOM格式\n                    EditPlus中转换\n                            文件--\x3e另存为--\x3e编码(UTF-8)--\x3e选择目录--\x3e保存\n    4.3.使用Unix换行符\n            在notepad++中，可以开启“显示所有字符”选项，这样就可以看出文档用的是Windows的换行符还是Unix的换行符。\n            在这种模式下，Windows的换行符显示的是CR LF，Unix的换行符显示的是LF , MAC 的换行符显示的是CR\n                    notepad++中转换\n                            编辑--\x3e档案格式转换--\x3e转换为Unix格式\n            使用是使用Notepad++文档编辑器则可以在创建的时候就默认为Unix格式\n                    设置--\x3e首选项--\x3e新建--\x3e格式--\x3eUnix\n                                           编码--\x3eUTF-8(无BOM)\n    4.4.注意YAML头部的格式\n            模板文件的元数据以YAML的格式展现，YAML头部经常会出现三个问题：\n                    1.三短线前面不能有空格；\n                    2.“名: 值”对里冒号后面要有空格；\n                    3.回车后不要有Tab符；\n                    4.示数组成员开始的-号后面要有空格\n")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("###5.安装jekyll和相关的包\n在国内需要配置gem数据源地址,翻墙或者在国外则无需设置\n输入以下两条命令:\n命令: gem sources --remove http://rubygems.org/\n命令: gem sources -a http://ruby.taobao.org/\n然后用 命令: gem sources -l 看看现在源列表\n*** CURRENT SOURCES ***\nhttp://ruby.taobao.org\n如果显示如上信息则可以进行安装Jekyll了\n命令: gem install jekyll\nJekyll需要用到directory_watcher、liquid、open4、maruku和classifier这几个包，用上面的命令可以自动安装。\nJekyll默认用maruku来解析markdown语言，你也可以用别的程序来解析，比如rdiscount或kramdown，都给装上吧：\n命令: gem install rdiscount kramdown")]),e._v(" "),t("pre",[t("code",[e._v("            以上命令涉及到gem install的时候，如果你用的是linux系统，就要用sudo gem install代替。\n")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("参考资料:")])])]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"http://yanping.me/cn/blog/2012/03/18/github-pages-step-by-step/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Pages极简教程"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://yanping.me/cn/blog/2011/12/15/building-static-sites-with-jekyll/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译文】用Jekyll构建静态网站"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"http://code.tutsplus.com/tutorials/building-static-sites-with-jekyll--net-22211",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文Building Static Sites with Jekyll"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://havee.me/internet/2013-07/add-duoshuo-commemt-system-into-jekyll.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("为 Jekyll 添加多说评论系统"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://cn.yizeng.me/2013/05/10/setup-jekyll-on-windows/#troubleshooting",target:"_blank",rel:"noopener noreferrer"}},[e._v("在 Windows 上安装 Jekyll"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://comtu.github.io/blog/2014/10/18/support-pygments-in-Jekyll.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll 中的语法高亮：Pygments"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://havee.me/internet/2013-11/jekyll-liquid-designers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jekyll 扩展的 Liquid 设计"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/shopify/liquid/wiki/liquid-for-designers",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文Liquid for Designers"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=i.exports}}]);