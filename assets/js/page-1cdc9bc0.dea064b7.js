(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{429:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("zabbix使用自动发现规则自动化监控redis多实例，废话不多说，直接撸代码。")])]),s._v(" "),a("h2",{attrs:{id:"zabbix-agent-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-agent-配置"}},[s._v("#")]),s._v(" zabbix-agent 配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/zabbix-agent/redis.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tpln "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ :]+"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/redis/ && /0.0.0.0/ {print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('"data":['),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n                       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v('"')]),s._v(" -gt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${key}")]),s._v('"')]),s._v(" -ne "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("${#port[@]}"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'='")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$10")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v(" {"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("{#REDISPORT}"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("${key}")]),s._v("]}"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("},"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n                     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${key}")]),s._v('"')]),s._v(" -eq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("${#port[@]}"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("socket")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'='")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$10")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v(" {"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("{#REDISPORT}"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("${key}")]),s._v("]}"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n                       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v(" ]"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'}"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("由于此脚本需要使用zabbix用户调用"),a("code",[s._v("netstat")]),s._v("命令，故需要允许zabbix用户无密码运行，同时关闭"),a("code",[s._v("requiretty")])]),s._v(" "),a("p",[s._v("然后给与755权限，并修改用户与组为zabbix\n")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zabbix ALL=(root) NOPASSWD:/bin/netstat"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("/etc/sudoers\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^Defaults.*.requiretty/#Defaults    requiretty/'")]),s._v(" /etc/sudoers\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /usr/local/zabbix-agent/etc/redis.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R zabbix.zabbix /usr/local/zabbix-agent/etc/redis.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("添加UserParameter")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@redis conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /usr/local/zabbix-agent/etc/zabbix_agentd.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UnsafeUserParameters")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UserParameter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zabbix_low_discovery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",sh /usr/local/zabbix-agent/etc/redis.sh "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UserParameter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis_stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("echo info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" telnet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -w "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -f2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[s._v("#")]),s._v(" 实现原理")]),s._v(" "),a("p",[s._v("自动发现规则"),a("strong",[s._v("zabbix_low_discovery")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@redis conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su zabbix")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zabbix@redis conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /usr/local/zabbix-agent/etc/redis.sh redis\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"26379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zabbix@redis conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("redis_stats")]),s._v("的"),a("strong",[s._v("item")]),s._v("获取利用"),a("strong",[s._v("telnet")]),s._v("端口格式化各项参数信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@redis conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su zabbix")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zabbix@zhenru025 conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("echo info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" telnet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -w used_memory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -f2   \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25109752")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"zabbix-server-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-server-配置"}},[s._v("#")]),s._v(" zabbix_server 配置")]),s._v(" "),a("p",[s._v("使用zabbix_get获取zabbix_agent的redis键值")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@zabbix ebuy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/zabbix-server/bin/zabbix_get -s 10.10.10.3 -k zabbix_low_discovery[redis]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"26379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{#REDISPORT}"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@zabbix ebuy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@zabbix ebuy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/zabbix-server/bin/zabbix_get -s 10.10.10.3 -k redis_stats[6379,total_connections_received] ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63711")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("以上配置完毕，测试没问题就万事俱备，导入**"),a("a",{attrs:{href:"http://pan.baidu.com/s/1eSIamJK",target:"_blank",rel:"noopener noreferrer"}},[s._v("模板"),a("OutboundLink")],1),s._v("**就OK！")]),s._v(" "),a("p",[s._v("至于网上一些文章说还需要设置正则表达式")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("设置正则\n在“管理”—"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" “一般”—"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("“正则表达式”里，选择“新的正则表达式”\n设置如下"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("填写所有redis的端口号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：\nname：Redis regex\nResult TRUE  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6381")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("我使用的是"),a("strong",[s._v("Zabbix 3.2.3")]),s._v("版本，不用设置正则也可以。")]),s._v(" "),a("h2",{attrs:{id:"监控图像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控图像"}},[s._v("#")]),s._v(" 监控图像")]),s._v(" "),a("p",[s._v("可根据自身业务需求设置相应的触发器报警机制。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/10/16/Ztd9BI5jlb1kpLc.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);