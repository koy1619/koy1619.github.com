(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{420:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sublime-text-3设置python编译支持环境设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sublime-text-3设置python编译支持环境设置","aria-hidden":"true"}},[s._v("#")]),s._v(" Sublime Text 3设置python编译支持环境设置")]),s._v(" "),a("p",[s._v("这里主要解决Sublime中运行带"),a("code",[s._v("input")]),s._v("或"),a("code",[s._v("raw_input")]),s._v("的Python代码出错："),a("code",[s._v("EOFError: EOF when reading a line")])]),s._v(" "),a("p",[s._v("快捷键：Ctrl+`，打开Sublime的console:")]),s._v(" "),a("p",[s._v("输入下面代码\n")]),s._v(" "),a("pre",[a("code",[s._v("import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print('Please restart Sublime Text to finish installation')\n")])]),s._v(" "),a("p",[s._v("安装"),a("code",[s._v("sublimerepl")]),s._v("插件")]),s._v(" "),a("p",[s._v("按键绑定配置加入")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keys"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"alt+q"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repl_open"')]),s._v(", \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"caption"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Python"')]),s._v(",\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mnemonic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p"')]),s._v(",\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"args"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"subprocess"')]),s._v(",\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"encoding"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf8"')]),s._v(",\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-i"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-u"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v('"')]),s._v(",\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"syntax"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Packages/Python/Python.tmLanguage"')]),s._v(",\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"external_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python"')]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这样子就可以直接使用"),a("code",[s._v("alt+q")]),s._v("进行编译和调试。")])])}),[],!1,null,null,null);t.default=e.exports}}]);