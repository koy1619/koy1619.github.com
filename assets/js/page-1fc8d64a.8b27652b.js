(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{371:function(t,o,r){"use strict";r.r(o);var e=r(1),n=Object(e.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"使用markdown-on-raspberrypi-写博客"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用markdown-on-raspberrypi-写博客","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用Markdown On RaspberryPi 写博客")]),t._v(" "),r("p",[t._v("由于之前安装的lnmp环境跑php博客简直就是渣渣的水平")]),t._v(" "),r("p",[t._v("所以在网上参考了众多静博客，其中都有")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.jekyllbootstrap.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jekyll-Bootstrap"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/wendal/gor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gor"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"http://ruhoh.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruhoh"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("最后偶然找到了纯js的博客，直接调用md显示页面的源码,UI也很赞！")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hugcoday/hugcoday.github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("多多de棉花糖"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("下面说一下怎么在树莓派上搭建")]),t._v(" "),r("p",[t._v("1 - Create a New Repository")]),t._v(" "),r("p",[t._v("Go to your https://github.com and create a new repository named koy1619.github.com")]),t._v(" "),r("p",[t._v("注意koy1619为我的github的ID")]),t._v(" "),r("p",[t._v("2 - Install "),r("a",{attrs:{href:"https://github.com/hugcoday/hugcoday.github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("多多de棉花糖"),r("OutboundLink")],1)]),t._v(" "),r("pre",[r("code",[t._v("$ git clone https://github.com/hugcoday/hugcoday.github.com.git koy1619.github.com\n$ cd koy1619.github.com\n$ git remote set-url origin git@github.com:koy1619/koy1619.github.com.git\n$ git push origin master\n")])]),t._v(" "),r("p",[t._v("3 - 其中还需要注意需要在 https://github.com/settings/emails 设置一个认证邮箱，不然会报404")]),t._v(" "),r("p",[t._v("4 - 根据README.md方法，用Markdown新建一篇文章，这里推荐一个很好用的Markdown在线编辑器")]),t._v(" "),r("p",[t._v("http://mahua.jser.me/")]),t._v(" "),r("p",[t._v("在编辑器写完文章之后，粘贴到2012-12-12-hello-world.md")]),t._v(" "),r("p",[t._v("cd /home/pi/koy1619.github.com/post/")]),t._v(" "),r("p",[t._v("vi 2012-12-12-hello-world.md")]),t._v(" "),r("p",[t._v("根据README.md方法，配置index.json")]),t._v(" "),r("p",[t._v("5 - 编写更新github脚本 upload.sh")]),t._v(" "),r("pre",[r("code",[t._v('cd /home/pi/koy1619.github.com/\ngit init\ngit add -A\ngit commit -m "add new blog" .\ngit remote set-url origin git@github.com:koy1619/koy1619.github.com.git\ngit push -u origin master\n')])]),t._v(" "),r("p",[t._v("sudo chmod 777 upload.sh")]),t._v(" "),r("p",[t._v("sudo ./upload.sh")]),t._v(" "),r("p",[t._v("6 - 等待10分钟，就可以通过http://koy1619.github.com访问啦")]),t._v(" "),r("p",[t._v("7 - mysql和php-fpm可以停掉了，设置nginx域名和虚拟主机指向/home/pi/koy1619.github.com/ 重启nginx即可通过域名访问")]),t._v(" "),r("p",[t._v("附：关于git在树莓派的安装和使用参见"),r("a",{attrs:{href:"http://linux48.com/archives/260.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("github安装使用"),r("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=n.exports}}]);