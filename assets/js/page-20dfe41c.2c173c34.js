(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{478:function(r,t,n){"use strict";n.r(t);var e=n(2),s=Object(e.a)({},(function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[n("p",[r._v("当目录下文件太多时，用rm删除文件会报错：")]),r._v(" "),n("pre",[n("code",[r._v("-bash: /bin/rm: Argument list too long\n")])]),r._v(" "),n("p",[r._v("提示文件数目太多。")]),r._v(" "),n("p",[r._v("解决的办法是使用如下命令：")]),r._v(" "),n("pre",[n("code",[r._v("ls | xargs -n 10 rm -fr ls\n")])]),r._v(" "),n("p",[r._v("输出所有的文件名(用空格分割) xargs就是将ls的输出，每10个为一组(以空格为分隔符)，作为rm -rf的参数也就是说将所有文件名10个为一组，由rm -rf删除")])])}),[],!1,null,null,null);t.default=s.exports}}]);