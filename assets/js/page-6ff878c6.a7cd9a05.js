(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{423:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("##xively账户准备")]),s._v(" "),a("p",[s._v("1."),a("a",{attrs:{href:"https://xively.com/signup/",target:"_blank",rel:"noopener noreferrer"}},[s._v("注册账户"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("2.添加一个设备")]),s._v(" "),a("p",[s._v("菜单上develop， 然后点击Add Device")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/10/16/QK5ZXcSroiRVGj1.jpg",alt:"mahua"}})]),s._v(" "),a("p",[s._v("提交后会得到Feed ID，Feed URL，API Endpoint相关信息，后续API使用要用。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/10/16/UWy1e9Ao5Fakhrt.jpg",alt:"mahua"}})]),s._v(" "),a("p",[s._v("##准备SHELL打点脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/pi/sysdata/\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/pi/sysdata/\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" xively.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOCATION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/pi/sysdata'")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生成JSON文件路径,替换成你的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("API_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'l9eHDf_fLzQx9Qfc8hCVrIan9DOSAKxrN21EOTdyL1IxST0g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#API使用的KEY,替换成你的KEY")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FEED_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'126908'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#提交数据的FEED,替换成你的FEED_ID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("####################################################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("COSM_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://api.xively.com/v2/feeds/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FEED_ID}")]),s._v("?timezone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("+8\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cpu_load")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/loadavg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cpu_t")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/class/thermal/thermal_zone0/temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("/1000}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${cpu_t}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~ ^- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cpu_t")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${cpu_t}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("STR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BEGIN{printf \"{"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("datastreams"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":[ {"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("id"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("load"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("current_value"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("%.2f"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("}, {"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("id"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("current_value"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("%.2f"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("}] } \",'")]),s._v("$cpu_load"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v("$cpu_t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${cpu_t}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${cpu_load}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${STR}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${STR}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOCATION}")]),s._v("/cosm.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s -v --request PUT --header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-ApiKey: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${API_KEY}")]),s._v('"')]),s._v(" --data-binary @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${LOCATION}")]),s._v("/cosm.json "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${COSM_URL}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("修改脚本中需要替换成你自己的三个变量LOCATION，API_KEY，FEED_ID 之后 赋予改脚本文件 755权限并且运行。")]),s._v(" "),a("p",[a("code",[s._v("sudo chmod 777 xively.sh")])]),s._v(" "),a("p",[s._v("加入crontab每一分钟执行一次")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/crontab\n\n*/1 * * * *   root  /home/pi/sysdata/xively.sh  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  /home/pi/sysdata/xively.log  "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("##页面引入图表")]),s._v(" "),a("p",[s._v("在需要暂时图表的地方加入以下代码：")]),s._v(" "),a("pre",[a("code",[s._v('<img src="https://api.xively.com/v2/feeds/${FEED_ID}/datastreams/${LINE_ID}.png?width=340&height=180&colour=%23f15a24&duration=2days&title=${TITLE}&show_axis_labels=false&detailed_grid=true&scale=&timezone=8"/>\n')])]),s._v(" "),a("p",[s._v("${FEED_ID}:替换成你创建FEED的ID，上个例子中就是126908")]),s._v(" "),a("p",[s._v("${LINE_ID}:替换成你FEED里具体LINE的ID，上个例子中就是load或者temp")]),s._v(" "),a("p",[s._v("${TITLE} :图表展示上的标题,可以自己按照需要命名，比如CPU的LOAD")]),s._v(" "),a("p",[s._v("##下面是我的树莓派温度监控效果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://api.xively.com/v2/feeds/1974048517/datastreams/temp.png?width=340&height=180&colour=%23f15a24&duration=2days&title=%E6%A0%91%E8%8E%93%E6%B4%BECPU%E6%B8%A9%E5%BA%A6&show_axis_labels=false&detailed_grid=true&scale=&timezone=8",alt:"mahua"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://api.xively.com/v2/feeds/1974048517/datastreams/load.png?width=340&height=180&colour=%23f15a24&duration=2days&title=%E6%A0%91%E8%8E%93%E6%B4%BECPU%20Load&show_axis_labels=false&detailed_grid=true&scale=&timezone=8",alt:"mahua"}})]),s._v(" "),a("p",[s._v("参考大神连接 http://dqylyln.dyndns.org/2013/use-cosm.html#comment-952442797")])])}),[],!1,null,null,null);t.default=n.exports}}]);