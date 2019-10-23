(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{496:function(e,n,t){"use strict";t.r(n);var o=t(2),s=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"shell-syntax-error-unexpected-end-of-file-提示错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-syntax-error-unexpected-end-of-file-提示错误"}},[e._v("#")]),e._v(" SHELL syntax error:unexpected end of file 提示错误")]),e._v(" "),t("p",[e._v("linux下执行"),t("code",[e._v("sh test.sh")]),e._v("提示"),t("code",[e._v("syntax error:unexpected end of file")])]),e._v(" "),t("p",[e._v("因为脚本是在windows下通过sublime编写的，然后upload到linux服务器。")]),e._v(" "),t("p",[e._v("解决思路：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("DOS下文件和Linux下文件格式差异问题导致的。")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("DOS下的文本文件是以\\r\\n作为断行标志的，表示成十六进制就是0D 0A。而Unix下的文本文件是以\\n作为断行标志的，表示成十六进制就是0A。")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("在windows里,换行用的两个符号，回车\\r，换行符号\\n，在linux下只需一个符号\\n就可以了。")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v('DOS格式的文本文件在Linux下，用较低版本的vi打开时行尾会显示^M，当然也有可能看不到，但是在vi的时候，会在下面显示此文件的格式，"M.txt" [dos] 8L, 72C表示是一个dos文件格式。')])])]),e._v(" "),t("p",[e._v("解决方案：")]),e._v(" "),t("p",[e._v("使用下面的命令将文件格式设置为unix格式即可解决上述错误。")]),e._v(" "),t("pre",[t("code",[e._v("vim test.sh\n:set fileformat=unix  #或者:set ff=unix\n:wq\n")])]),e._v(" "),t("p",[e._v("unix转dos同理")]),e._v(" "),t("pre",[t("code",[e._v("vim test.sh\n:set ff=dos\n:wq\n")])])])}),[],!1,null,null,null);n.default=s.exports}}]);