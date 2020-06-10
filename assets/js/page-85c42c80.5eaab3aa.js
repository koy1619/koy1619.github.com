(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{475:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("hexo是由Node.js驱动的一款快速、简单且功能强大的博客框架。可以部署在VPS或者gitpages上面")]),s._v(" "),t("p",[s._v("它和jekyll`Octopress相比，更快，更轻量。")]),s._v(" "),t("h2",{attrs:{id:"安装node-js的arm环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js的arm环境"}},[s._v("#")]),s._v(" 安装node.js的arm环境")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nodejs.org/dist/v0.10.26/node-v0.10.26-linux-arm-pi.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf node-v0.10.26-linux-arm-pi.tar.gz \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node-v0.10.26-linux-arm-pi/ node\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node /usr/local/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R pi.pi /usr/local/node\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"设置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[s._v("#")]),s._v(" 设置环境变量")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PATH='),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/local/node/bin"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\nnode -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"安装hexo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装hexo"}},[s._v("#")]),s._v(" 安装Hexo")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g hexo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/hexo\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home\nhexo init hexo/  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加一个博客站点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/hexo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nhexo server  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开地本地预览")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"预览hexo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预览hexo"}},[s._v("#")]),s._v(" 预览Hexo")]),s._v(" "),t("p",[s._v("在浏览器输入"),t("a",{attrs:{href:"http://192.168.111.118:4000/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://192.168.111.118:4000/"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2019/10/16/qY5KzNVEPjUypLd.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"添加主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加主题"}},[s._v("#")]),s._v(" 添加主题")]),s._v(" "),t("h3",{attrs:{id:"安装主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装主题"}},[s._v("#")]),s._v(" 安装主题")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/A-limon/pacman.git themes/pacman\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"启用主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启用主题"}},[s._v("#")]),s._v(" 启用主题")]),s._v(" "),t("p",[s._v("修改你的博客根目录下的_config.yml配置文件中的theme属性，将其设置为pacman。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /home/hexo/_config.yml\nhexo generate  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#部署应用")]),s._v("\nhexo server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"预览新主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预览新主题"}},[s._v("#")]),s._v(" 预览新主题")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2019/10/16/5D1NTGXyMV4aLUE.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"使用nginx发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用nginx发布"}},[s._v("#")]),s._v(" 使用nginx发布")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html index.htm index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root  /home/hexo/public"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"关于更多的教程，以及发布文章，页面等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于更多的教程，以及发布文章，页面等"}},[s._v("#")]),s._v(" 关于更多的教程，以及发布文章，页面等")]),s._v(" "),t("p",[s._v("请移步 "),t("a",{attrs:{href:"http://hexo.io/docs/writing.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hexo官方"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"更多的静态站点等着你折腾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多的静态站点等着你折腾"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"http://www.iteye.com/magazines/133",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多的静态站点等着你折腾"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("参考"),t("a",{attrs:{href:"http://ibruce.info/2013/11/22/hexo-your-blog/",target:"_blank",rel:"noopener noreferrer"}},[s._v("hexo你的博客"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://yangjian.me/workspace/introducing-pacman-theme/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pcman"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("router-link",{attrs:{to:"/tags/nodejs/"}},[s._v("node.js")]),t("router-link",{attrs:{to:"/tags/Hexo/"}},[s._v("Hexo")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);