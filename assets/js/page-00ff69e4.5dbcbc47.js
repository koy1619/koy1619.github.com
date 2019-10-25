(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{488:function(n,e,t){"use strict";t.r(e);var o=t(2),v=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("linux下执行"),t("code",[n._v("sh test.sh")]),n._v("提示"),t("code",[n._v("syntax error:unexpected end of file")])]),n._v(" "),t("p",[n._v("因为脚本是在windows下通过sublime编写的，然后upload到linux服务器。")]),n._v(" "),t("p",[n._v("解决思路：")]),n._v(" "),t("blockquote",[t("ul",[t("li",[n._v("DOS下文件和Linux下文件格式差异问题导致的。")])])]),n._v(" "),t("blockquote",[t("ul",[t("li",[n._v("DOS下的文本文件是以\\r\\n作为断行标志的，表示成十六进制就是0D 0A。而Unix下的文本文件是以\\n作为断行标志的，表示成十六进制就是0A。")])])]),n._v(" "),t("blockquote",[t("ul",[t("li",[n._v("在windows里,换行用的两个符号，回车\\r，换行符号\\n，在linux下只需一个符号\\n就可以了。")])])]),n._v(" "),t("blockquote",[t("ul",[t("li",[n._v('DOS格式的文本文件在Linux下，用较低版本的vi打开时行尾会显示^M，当然也有可能看不到，但是在vi的时候，会在下面显示此文件的格式，"M.txt" [dos] 8L, 72C表示是一个dos文件格式。')])])]),n._v(" "),t("p",[n._v("解决方案：")]),n._v(" "),t("p",[n._v("使用下面的命令将文件格式设置为unix格式即可解决上述错误。")]),n._v(" "),t("pre",[t("code",[n._v("vim test.sh\n:set fileformat=unix  #或者:set ff=unix\n:wq\n")])]),n._v(" "),t("p",[n._v("unix转dos同理")]),n._v(" "),t("pre",[t("code",[n._v("vim test.sh\n:set ff=dos\n:wq\n")])])])}),[],!1,null,null,null);e.default=v.exports}}]);