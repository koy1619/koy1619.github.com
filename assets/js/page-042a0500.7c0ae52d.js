(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{511:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("作为一个非专业数据库维护人员，日常需要处理格式化大量文本来导入数据库，所以本文用以记录平时遇到的每一个记录！")]),s._v(" "),a("h1",{attrs:{id:"行首行尾加字符或者符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行首行尾加字符或者符号"}},[s._v("#")]),s._v(" 行首行尾加字符或者符号")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("工具notepad++")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ctrl+F 选择替换，并勾选正则表达式\n\n行首  查找目标"^"  替换为"目的字符串"\n行尾  查找目标"$"  替换为"目的字符串"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h1",{attrs:{id:"删除大量空白行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除大量空白行"}},[s._v("#")]),s._v(" 删除大量空白行")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("工具notepad++")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('方法一（插件处理）：\n\n先下载安装插件 TextFX，下载后重新启动下，然后在菜单栏找到 TextFX -> TextFX Edit -> Delete blank lines，即可。\n\n方法二（正则处理）：\n\n选择替换，把查找模式设置为正则表达式，在查找框中输入 "^\\s+"  ,替换框留空，点“全部替换”，即可(先全选)。\n\n方法三、"\\r\\n"转义符替换（不包括有空格类符号的空行）\n\n\n按ctrl+h，跳出搜索替换框，把查找模式定义为扩展（\\n，\\r…） \n\n查找目标："\\r\\n\\r\\n"  替换为："\\r\\n"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h1",{attrs:{id:"批量替换文本内容导入数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量替换文本内容导入数据库"}},[s._v("#")]),s._v(" 批量替换文本内容导入数据库")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("工具linux sed")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -i '1d' /home/mysql/0418.txt    #删除第一行\n\nsed -i \"s/原字符串/新字符串/g\"\n\nsed -i \"s/,/\\t/g\" /home/mysql/0418.txt   #批量替换文本内的“逗号”(,)为“制表符“(Tab)\n\nchown -R mysql.mysql /home/mysql/0418.txt\n\nLOAD DATA INFILE '/home/mysql/0418.txt' INTO TABLE auth_limit_customer(limit_cardbin,limit_card,limit_customer);  #按照字段顺序导入数据库\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);