(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{481:function(t,i,o){"use strict";o.r(i);var s=o(2),e=Object(s.a)({},(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"git安装使用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git安装使用"}},[t._v("#")]),t._v(" git安装使用")]),t._v(" "),o("p",[t._v("1.安装")]),t._v(" "),o("p",[t._v("sudo apt-get install git"),o("br"),t._v("\nsudo apt-get install git-core")]),t._v(" "),o("p",[t._v("2.创建密钥加入github")]),t._v(" "),o("p",[t._v("ssh-keygen"),o("br"),t._v("\ncat .ssh/id_rsa.pub")]),t._v(" "),o("p",[t._v("进入这个页面https://github.com/settings/ssh把密钥复制到github")]),t._v(" "),o("p",[t._v("3.验证"),o("br"),t._v("\npi@raspberrypi:~$ ssh git@github.com"),o("br"),t._v("\nPTY allocation request failed on channel 0"),o("br"),t._v("\nHi koy1619! You’ve successfully authenticated, but GitHub does not provide shell access."),o("br"),t._v("\nConnection to github.com closed."),o("br"),t._v("\npi@raspberrypi:~$")]),t._v(" "),o("p",[t._v("出现此提示即可使用github")]),t._v(" "),o("p",[t._v("4.github常用简单命令")]),t._v(" "),o("p",[o("code",[t._v('<br /> git clone https://github.com/hugcoday/hugcoday.github.com.git koy1619.github.com #从github检出项目仓库<br /> git init #初始化仓库<br /> git add -A #添加新文件或者更改新文件<br /> git commit -m "add new blog" . #提交文件到本地<br /> git remote set-url origin git@github.com:koy1619/koy1619.github.com.git #查看repository上的所有分支<br /> git push -u origin master #push到服务器上')])]),t._v(" "),o("p",[t._v("更多请访问 http://git.gitcafe.com/book/zh")])])}),[],!1,null,null,null);i.default=e.exports}}]);