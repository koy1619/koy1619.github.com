(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{453:function(t,e,r){"use strict";r.r(e);var n=r(1),c=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"awk统计随笔记录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#awk统计随笔记录","aria-hidden":"true"}},[t._v("#")]),t._v(" AWK统计随笔记录")]),t._v(" "),r("p",[t._v("AWK统计随笔记录")]),t._v(" "),r("pre",[r("code",[t._v("netstat -ntlp | sed '/Active/d' | sed '/Proto/d' | sed 's/:::/:/g'| sed 's/::ffff:/ /g'| awk '{print $4,$7}' | awk -F':' '{print $2}' | sed 's/[0-9][0-9][0-9][0-9]\\// /g'\n")])]),t._v(" "),r("p",[t._v("查看当前系统所有服务进程对应的端口")]),t._v(" "),r("pre",[r("code",[t._v("netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'\n")])]),t._v(" "),r("p",[t._v("查看当前网络tcp连接")]),t._v(" "),r("pre",[r("code",[t._v("netstat -ntu | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -nr\n")])]),t._v(" "),r("p",[t._v("显示服务器上所有的每个IP多少个连接数\n################ ★ 以下为日志统计  ★ ##########################################################################################")]),t._v(" "),r("pre",[r("code",[t._v("cat access.log | grep \"13/Jul/2013\" | awk '{print $11}' | sort | uniq -c | sort -nr | head -n 10\n")])]),t._v(" "),r("p",[t._v("日志统计查看当天访问最多的页面,取前10")]),t._v(" "),r("pre",[r("code",[t._v("cat access.log | grep \"13/Jul/2013\" | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 10\n")])]),t._v(" "),r("p",[t._v("日志统计查看当天访问排名前10的ip连接数")]),t._v(" "),r("pre",[r("code",[t._v("cat access_20130811.log |awk '{print $NF}' | sort | uniq -c | sort -nr | head -n 15\n")])]),t._v(" "),r("p",[t._v("查找日志中,取值末尾,保留访问最多的前15个")]),t._v(" "),r("pre",[r("code",[t._v("cat access.log | grep \"13/Jul/2013\" | awk '{sum+=$10} END {print sum/1024/1024/1024}'\n")])]),t._v(" "),r("p",[t._v("统当天计网站流量（G)")]),t._v(" "),r("pre",[r("code",[t._v("cat access.log | grep \"13/Jul/2013\" |awk '{sum+=$10} END {print sum/1024/1024}'\n")])]),t._v(" "),r("p",[t._v("统计当天网站流量（M)")]),t._v(" "),r("pre",[r("code",[t._v("cat access.log | grep \"13/Jul/2013\" | awk '{counts[$(9)]+=1}; END {for(code in counts) print code,counts[code]}'\ncat access.log | grep \"13/Jul/2013\" |awk '{print $9}'|sort|uniq -c|sort -rn\n")])]),t._v(" "),r("p",[t._v("查看今日访问的http状态数")]),t._v(" "),r("pre",[r("code",[t._v('cat access.log | grep "13/Jul/2013" | grep "163.177.71.12" | awk \'{print $7}\' | sort | uniq -c | sort -nr\n')])]),t._v(" "),r("p",[t._v("查看当天指定ip访问次数过的url和访问次数")]),t._v(" "),r("p",[t._v("把IP数量直接输出显示：")]),t._v(" "),r("pre",[r("code",[t._v("cat access_log_2011_06_26.log |awk '{print $1}'|uniq -c|wc -l")])])])}),[],!1,null,null,null);e.default=c.exports}}]);