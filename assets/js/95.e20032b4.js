(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{404:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"msmtp-mutt-服务器批量发送邮件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msmtp-mutt-服务器批量发送邮件","aria-hidden":"true"}},[s._v("#")]),s._v(" msmtp+mutt 服务器批量发送邮件")]),s._v(" "),a("p",[s._v("1.msmtp安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://downloads.sourceforge.net/msmtp/msmtp-1.4.32.tar.bz2?modtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1217206451")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("big_mirror")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" jxvf msmtp-1.4.32.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" msmtp-1.4.32\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/msmtp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/msmtp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" etc log\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" etc\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/msmtp/bin/msmtp /usr/bin/msmtp\n")])])]),a("p",[s._v("编辑配置文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/local/msmtp/etc/msmtprc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set default values for all following accounts.")]),s._v("\ndefaults\nlogfile /usr/local/msmtp/log/msmtp.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The SMTP server of the provider.")]),s._v("\naccount "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SMTP邮件服务器地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" smtp.xxx.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送的邮件e-mail")]),s._v("\nEmail root@test.com\nauth login\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 邮件服务器登录账号")]),s._v("\nuser root@test.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 邮件服务器登陆密码")]),s._v("\npassword\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set a default account")]),s._v("\naccount default "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),a("p",[s._v("安装完成检测")]),s._v(" "),a("p",[s._v("查看msmtp配置\nmsmtp -P\n测试msmtp安装是否成功")]),s._v(" "),a("p",[s._v("msmtp -S")]),s._v(" "),a("p",[s._v("msmtp 邮箱地址")]),s._v(" "),a("p",[s._v("查看/usr/local/msmtp/log/msmtp.log")]),s._v(" "),a("p",[s._v("2.安装mutt")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mutt")]),s._v("\n")])])]),a("p",[s._v("可以使用which mutt查看mutt安装的路径")]),s._v(" "),a("p",[s._v("编辑mutt配置文件：vi /etc/Muttrc")]),s._v(" "),a("p",[s._v("在最后添加以下几行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"发送邮件地址"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sendmail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/msmtp/bin/msmtp"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("use_from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("realname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"发送邮件地址"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("editor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vi"')]),s._v("\n")])])]),a("p",[s._v("保存退出，测试一下mutt是否有效")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mutt")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试"')]),s._v(" 测试邮件地址 -a 附件\n")])])]),a("p",[s._v("3，shell配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#调用mutt发送邮件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sending mail…"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("  +’%Y-%m-%d_%H-%M-%S’"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("subject")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$content")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mutt")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$subject")]),s._v('"')]),s._v(" 邮件地址 -a "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$filename")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sent OK"')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);