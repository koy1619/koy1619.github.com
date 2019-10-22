(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{455:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"svn强制提交commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svn强制提交commit","aria-hidden":"true"}},[s._v("#")]),s._v(" SVN强制提交commit")]),s._v(" "),a("p",[s._v("不少开发员提交修改的时候都不写注释，导致查看历史时很费劲，也不太符合规范。这时候就需要强制开发人员提交的时候填上注释，否则无法提交！")]),s._v(" "),a("p",[s._v("利用svn的pre-commit钩子可简单实现此要求。")]),s._v(" "),a("p",[s._v("进入仓库project1/hooks目录，找到pre-commit.tmpl文件，重命名，去掉后缀.tmpl")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test yunwei"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat hooks/pre-commit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REPOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TXN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SVNLOOK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/svnlook\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOGMSG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("$SVNLOOK log -t "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TXN")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REPOS")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[a-zA-Z0-9]"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -c"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOGMSG")]),s._v('"')]),s._v(" -lt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nLog message cann\'t be empty! you must input more than 8 chars as comment!."')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&2")]),s._v(" \n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test yunwei"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);