(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{424:function(t,n,s){"use strict";s.r(n);var a=s(2),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("由于之前安装的lnmp环境跑php博客简直就是渣渣的水平")]),t._v(" "),s("p",[t._v("所以在网上参考了众多静博客，其中都有")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.jekyllbootstrap.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jekyll-Bootstrap"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/wendal/gor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gor"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://ruhoh.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruhoh"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("最后偶然找到了纯js的博客，直接调用md显示页面的源码,UI也很赞！")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/hugcoday/hugcoday.github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("多多de棉花糖"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下面说一下怎么在树莓派上搭建")]),t._v(" "),s("p",[t._v("1 - Create a New Repository")]),t._v(" "),s("p",[t._v("Go to your https://github.com and create a new repository named koy1619.github.com")]),t._v(" "),s("p",[t._v("注意koy1619为我的github的ID")]),t._v(" "),s("p",[t._v("2 - Install "),s("a",{attrs:{href:"https://github.com/hugcoday/hugcoday.github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("多多de棉花糖"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/hugcoday/hugcoday.github.com.git koy1619.github.com\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" koy1619.github.com\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin git@github.com:koy1619/koy1619.github.com.git\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("3 - 其中还需要注意需要在 https://github.com/settings/emails 设置一个认证邮箱，不然会报404")]),t._v(" "),s("p",[t._v("4 - 根据README.md方法，用Markdown新建一篇文章，这里推荐一个很好用的Markdown在线编辑器")]),t._v(" "),s("p",[t._v("http://mahua.jser.me/")]),t._v(" "),s("p",[t._v("在编辑器写完文章之后，粘贴到2012-12-12-hello-world.md")]),t._v(" "),s("p",[t._v("cd /home/pi/koy1619.github.com/post/")]),t._v(" "),s("p",[t._v("vi 2012-12-12-hello-world.md")]),t._v(" "),s("p",[t._v("根据README.md方法，配置index.json")]),t._v(" "),s("p",[t._v("5 - 编写更新github脚本 upload.sh")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/pi/koy1619.github.com/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add new blog"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin git@github.com:koy1619/koy1619.github.com.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n    \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" upload.sh\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./upload.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("6 - 等待10分钟，就可以通过http://koy1619.github.com访问啦")]),t._v(" "),s("p",[t._v("7 - mysql和php-fpm可以停掉了，设置nginx域名和虚拟主机指向/home/pi/koy1619.github.com/ 重启nginx即可通过域名访问")]),t._v(" "),s("p",[t._v("附：关于git在树莓派的安装和使用参见"),s("a",{attrs:{href:"http://linux48.com/archives/260.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("github安装使用"),s("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);