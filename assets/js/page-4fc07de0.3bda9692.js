(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{446:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("树莓派内置了一个传感器你可以用来获取树莓派的CPU和GPU温度。")]),s._v(" "),n("p",[s._v("具体参数如下")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pi@raspberrypi ~ $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/class/thermal/thermal_zone0/temp\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("38470")]),s._v("\npi@raspberrypi ~ $ vcgencmd measure_temp\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("temp")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.5")]),s._v("'C\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("根据这2个参数写一个python脚本可以在终端打印小派当前硬件的使用情况以及cpu和gpu温度的python脚本，后面可以设置计划任务，打点显示！比xively监控参数略多！")]),s._v(" "),n("p",[s._v("这对于保护你的设备非常有用，举个例子：你可以在树莓派温度过高的时候关掉它或者在温度过热的时候报警。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" os\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" commands\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#vcgencmd measure_temp")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cat /sys/class/thermal/thermal_zone0/temp")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Return CPU temperature as a character string                                      ")]),s._v("\ndef getCPUtemperature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os.popen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vcgencmd measure_temp'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".readline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    return"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res.replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"temp="')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"'C"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Return GPU temperature as a character string")]),s._v("\ndef get_gpu_temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    gpu_temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" commands.getoutput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/opt/vc/bin/vcgencmd measure_temp'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temp='")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\'C'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v("  float"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gpu_temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the next line if you want the temp in Fahrenheit")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# return float(1.8* gpu_temp)+32")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Return RAM information (unit=kb) in a list                                       ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Index 0: total RAM                                                               ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Index 1: used RAM                                                                 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Index 2: free RAM                                                                 ")]),s._v("\ndef getRAMinfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os.popen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'free'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":\n        i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i + "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        line "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p.readline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":\n            return"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("line.split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Return % of CPU used by user as a character string                                ")]),s._v("\ndef getCPUuse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    return"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os.popen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"top -n1 | awk '/Cpu\\(s\\):/ {print "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".readline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".strip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Return information about disk space as a list (unit included)                     ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Index 0: total disk space                                                         ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Index 1: used disk space                                                         ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Index 2: remaining disk space                                                     ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Index 3: percentage of disk used                                                  ")]),s._v("\ndef getDiskSpace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n    p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os.popen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"df -h /"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":\n        i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i +1\n        line "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p.readline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":\n            return"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("line.split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CPU informatiom")]),s._v("\nCPU_temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" getCPUtemperature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nCPU_usage "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" getCPUuse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RAM information")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output is in kb, here I convert it in Mb for readability")]),s._v("\nRAM_stats "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" getRAMinfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRAM_total "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" round"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RAM_stats"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" / "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000,1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRAM_used "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" round"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RAM_stats"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" / "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000,1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRAM_free "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" round"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RAM_stats"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" / "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000,1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disk information")]),s._v("\nDISK_stats "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" getDiskSpace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nDISK_total "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DISK_stats"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nDISK_used "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DISK_stats"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nDISK_perc "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DISK_stats"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CPU Temperature = '")]),s._v("+CPU_temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" , "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C"')]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CPU Use = '")]),s._v("+CPU_usage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GPU Temperature = "')]),s._v(", str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("get_gpu_temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C"')]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RAM Total = '")]),s._v("+str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RAM_total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' MB'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RAM Used = '")]),s._v("+str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RAM_used"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' MB'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'RAM Free = '")]),s._v("+str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RAM_free"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' MB'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DISK Total Space = '")]),s._v("+str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DISK_total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DISK Used Space = '")]),s._v("+str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DISK_used"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("+"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DISK Used Percentage = '")]),s._v("+str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DISK_perc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br")])]),n("p",[s._v("执行效果")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pi@raspberrypi ~ $ python /home/pi/sysdata/get.py\n\nCPU Temperature "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("34.5")]),s._v(" C\nCPU Use "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v("\nGPU Temperature "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("34.5")]),s._v(" C\n\nRAM Total "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("448.0")]),s._v(" MB\nRAM Used "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("383.0")]),s._v(" MB\nRAM Free "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64.0")]),s._v(" MB\n\nDISK Total Space "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".2GB\nDISK Used Space "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".1GB\nDISK Used Percentage "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("%\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);