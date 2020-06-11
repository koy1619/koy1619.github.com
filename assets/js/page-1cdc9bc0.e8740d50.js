(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{363:function(s,t,a){s.exports=a.p+"assets/img/Ztd9BI5jlb1kpLc.38d8e455.jpg"},497:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("zabbix使用自动发现规则自动化监控redis多实例，废话不多说，直接撸代码。")])]),s._v(" "),n("h2",{attrs:{id:"zabbix-agent-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-agent-配置"}},[s._v("#")]),s._v(" zabbix-agent 配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/zabbix-agent/redis.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("redis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tpln "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ :]+"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/redis/ && /0.0.0.0/ {print "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v("}'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('"data":['),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n               "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("key")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n                   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n                       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v(" -gt "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${key}")]),s._v('"')]),s._v(" -ne "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("${#port[@]}"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'='")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$10")]),s._v("}'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n                          "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v(" {"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n                          "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("{#REDISPORT}"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("${key}")]),s._v("]}"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("},"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n                     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${key}")]),s._v('"')]),s._v(" -eq "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("${#port[@]}"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'='")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$10")]),s._v("}'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n                          "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v(" {"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n                          "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("{#REDISPORT}"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("${key}")]),s._v("]}"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("}"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n                       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n               "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n                          "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v(" ]"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n                          "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'}"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("由于此脚本需要使用zabbix用户调用"),n("code",[s._v("netstat")]),s._v("命令，故需要允许zabbix用户无密码运行，同时关闭"),n("code",[s._v("requiretty")])]),s._v(" "),n("p",[s._v("然后给与755权限，并修改用户与组为zabbix\n")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zabbix ALL=(root) NOPASSWD:/bin/netstat"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("/etc/sudoers\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^Defaults.*.requiretty/#Defaults    requiretty/'")]),s._v(" /etc/sudoers\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /usr/local/zabbix-agent/etc/redis.sh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R zabbix.zabbix /usr/local/zabbix-agent/etc/redis.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("添加UserParameter")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@redis conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /usr/local/zabbix-agent/etc/zabbix_agentd.conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UnsafeUserParameters")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UserParameter")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zabbix_low_discovery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",sh /usr/local/zabbix-agent/etc/redis.sh "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UserParameter")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_stats"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("echo info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" telnet "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -w "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -f2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[s._v("#")]),s._v(" 实现原理")]),s._v(" "),n("p",[s._v("自动发现规则"),n("strong",[s._v("zabbix_low_discovery")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@redis conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su zabbix")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zabbix@redis conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /usr/local/zabbix-agent/etc/redis.sh redis\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"26379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zabbix@redis conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("redis_stats")]),s._v("的"),n("strong",[s._v("item")]),s._v("获取利用"),n("strong",[s._v("telnet")]),s._v("端口格式化各项参数信息")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@redis conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su zabbix")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zabbix@zhenru025 conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("echo info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" telnet "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -w used_memory"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -f2   \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25109752")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"zabbix-server-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-server-配置"}},[s._v("#")]),s._v(" zabbix_server 配置")]),s._v(" "),n("p",[s._v("使用zabbix_get获取zabbix_agent的redis键值")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@zabbix ebuy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/zabbix-server/bin/zabbix_get -s 10.10.10.3 -k zabbix_low_discovery[redis]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"26379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@zabbix ebuy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@zabbix ebuy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/zabbix-server/bin/zabbix_get -s 10.10.10.3 -k redis_stats[6379,total_connections_received] ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("63711")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("以上配置完毕，测试没问题就万事俱备，导入**"),n("a",{attrs:{href:"http://pan.baidu.com/s/1eSIamJK",target:"_blank",rel:"noopener noreferrer"}},[s._v("模板"),n("OutboundLink")],1),s._v("**就OK！")]),s._v(" "),n("p",[s._v("至于网上一些文章说还需要设置正则表达式")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("设置正则\n在“管理”—"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" “一般”—"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("“正则表达式”里，选择“新的正则表达式”\n设置如下"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("填写所有redis的端口号"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：\nname：Redis regex\nResult TRUE  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ^"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6381")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("我使用的是"),n("strong",[s._v("Zabbix 3.2.3")]),s._v("版本，不用设置正则也可以。")]),s._v(" "),n("h2",{attrs:{id:"监控图像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#监控图像"}},[s._v("#")]),s._v(" 监控图像")]),s._v(" "),n("p",[s._v("可根据自身业务需求设置相应的触发器报警机制。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(363),alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);