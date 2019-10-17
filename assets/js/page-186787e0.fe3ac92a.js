(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{457:function(s,r,a){"use strict";a.r(r);var e=a(1),t=Object(e.a)({},(function(){var s=this,r=s.$createElement,a=s._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ruby环境sass编译中文出现-invalid-gbk-character"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby环境sass编译中文出现-invalid-gbk-character","aria-hidden":"true"}},[s._v("#")]),s._v(" ruby环境sass编译中文出现 Invalid GBK character")]),s._v(" "),a("p",[s._v("sass文件编译时候使用ruby环境，无论是界面化的koala工具还是命令行模式的都无法通过，真是令人烦恼。")]),s._v(" "),a("p",[s._v("容易出现中文注释时候无法编译通过，或者出现乱码，找了几天的解决方法终于解决了。")]),s._v(" "),a("p",[s._v("这个问题的奇葩之处在于在xp环境中没有任何问题，只是在windows7环境中才出现的这个。")]),s._v(" "),a("p",[s._v("sass编译时候出现如下错误的解决方法：")]),s._v(" "),a("pre",[a("code",[s._v('Syntax error: Invalid GBK character "\\xE5"\n')])]),s._v(" "),a("p",[s._v("解决办法：")]),s._v(" "),a("p",[s._v("找到ruby的安装目录，里面也有sass模块，"),s._v("如这个路径：")]),s._v(" "),a("pre",[a("code",[s._v("C:\\Ruby21-x64\\lib\\ruby\\gems\\2.1.0\\gems\\sass-3.4.8\\lib\\sass.rb\n")])]),s._v(" "),a("p",[s._v("在这个文件里面engine.rb，添加一行代码（同方法1）")]),s._v(" "),a("pre",[a("code",[s._v("Encoding.default_external = Encoding.find('utf-8')\n")])]),s._v(" "),a("p",[s._v("放在所有的require XXXX 之后即可。")]),s._v(" "),a("p",[s._v("参考： https://github.com/imathis/octopress/issues/232")])])}),[],!1,null,null,null);r.default=t.exports}}]);