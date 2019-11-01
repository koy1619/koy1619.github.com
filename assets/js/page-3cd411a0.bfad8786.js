(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{457:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("1.安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" git-core\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("2.创建密钥加入github")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("ssh-keygen  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .ssh/id_rsa.pub\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("进入这个页面https://github.com/settings/ssh把密钥复制到github")]),s._v(" "),n("p",[s._v("3.验证")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pi@raspberrypi:~$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" git@github.com  \nPTY allocation request failed on channel "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \nHi koy1619"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#8217;ve successfully authenticated, but GitHub does not provide shell access.  ")]),s._v("\nConnection to github.com closed.  \npi@raspberrypi:~$\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("出现此提示即可使用github")]),s._v(" "),n("p",[s._v("4.github常用简单命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/hugcoday/hugcoday.github.com.git koy1619.github.com "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从github检出项目仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#初始化仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加新文件或者更改新文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add new blog"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#提交文件到本地")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin git@github.com:koy1619/koy1619.github.com.git "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看repository上的所有分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#push到服务器上")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("更多请访问 http://git.gitcafe.com/book/zh")])])}),[],!1,null,null,null);t.default=e.exports}}]);