(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{433:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("##双11买了台口香糖电脑")]),s._v(" "),a("p",[s._v("##准备：")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("PI0W板子")]),s._v(" "),a("li",[s._v("TF卡")]),s._v(" "),a("li",[s._v("TF读卡器")]),s._v(" "),a("li",[s._v("microUSB线")]),s._v(" "),a("li",[s._v("windows10笔记本")])])]),s._v(" "),a("p",[s._v("##开搞")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("格式化TF卡   (windows自带磁盘管理即可格式化)")])]),s._v(" "),a("li",[a("p",[s._v("用"),a("strong",[s._v("win32diskimager")]),s._v("烧录"),a("strong",[s._v("2018-11-13-raspbian-stretch-lite.img")])])]),s._v(" "),a("li",[a("p",[s._v("配置"),a("strong",[s._v("boot")]),s._v("   ("),a("strong",[s._v("windows")]),s._v("下烧录完"),a("strong",[s._v("boot")]),s._v("分区会以"),a("strong",[s._v("FAT32")]),s._v("暴露出来)")])])]),s._v(" "),a("p",[s._v("用**Notepad++**编辑")]),s._v(" "),a("p",[a("strong",[s._v("config.txt")]),s._v("   末端加一行 "),a("code",[s._v("dtoverlay=dwc2")])]),s._v(" "),a("p",[a("strong",[s._v("cmdline.txt")]),s._v(" "),a("code",[s._v("rootwait")]),s._v("后面加"),a("code",[s._v("modules-load=dwc2,g_ether")]),a("strong",[s._v("注意空格")])]),s._v(" "),a("p",[s._v("新建空文本文件改名"),a("strong",[s._v("ssh")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[a("code",[s._v("microUSB线")]),s._v("插"),a("strong",[s._v("PI0W")]),s._v("的"),a("code",[s._v("usb口")]),s._v("和电脑连接起来")])]),s._v(" "),a("li",[a("p",[s._v("这时"),a("strong",[s._v("Win10")]),s._v("下设备会被识别为"),a("strong",[s._v("COM")]),s._v("设备,在设备管理器中更新该驱动程序")])])]),s._v(" "),a("p",[s._v("驱动程序下载地址")]),s._v(" "),a("p",[s._v("https://pan.baidu.com/s/18v-LLt7_gDIHKfJRoBbqvA")]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("安装完驱动即可被识别为名为"),a("strong",[s._v("USB Ethernet/RNDIS Gadget")]),s._v("的网卡")])]),s._v(" "),a("p",[s._v("网卡状态未识别的网络,ip为"),a("code",[s._v("169.254.71.246")]),s._v("类似")]),s._v(" "),a("p",[a("strong",[s._v("需要注意的是")])]),s._v(" "),a("p",[a("strong",[s._v("这个IP地址并不是树莓派地址,而是RNDIS网卡地址")])]),s._v(" "),a("p",[a("strong",[s._v("树莓派还有另一个地址,这个地址查不到又与网卡地址不同,所以需要用"),a("code",[s._v("raspberrypi.local")])])]),s._v(" "),a("p",[a("strong",[s._v("唯一的办法是通过安装Bonjour等软件来让电脑可以支持识别局域网的"),a("code",[s._v("raspberrypi.local")]),s._v("主机名")])]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[s._v("安装Bonjour")])]),s._v(" "),a("p",[s._v("https://pan.baidu.com/s/1WbcUCsI9kWao9zZBnglT3Q")]),s._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[s._v("ssh连接")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("xiaolei.ma"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ping raspberrypi.local\n正在 Ping raspberrypi.local "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("f110::71f2:35fd:8g01:5623%65"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 具有 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" 字节的数据:\n来自 f110::71f2:35fd:8g01:5623%65 的回复: 时间"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("1ms\n来自 f110::71f2:35fd:8g01:5623%65 的回复: 时间"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("1ms\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("ping")]),s._v("通之后用"),a("strong",[s._v("SecureCRT")]),s._v("或者"),a("strong",[s._v("putty")]),s._v("连接"),a("code",[s._v("raspberrypi.local")])]),s._v(" "),a("p",[s._v("账户"),a("strong",[s._v("pi")])]),s._v(" "),a("p",[s._v("密码"),a("strong",[s._v("raspberry")])]),s._v(" "),a("p",[s._v("如果有"),a("strong",[s._v("bash")]),s._v("则命令行连接"),a("code",[s._v("ssh pi@raspberrypi.local")])]),s._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[s._v("设置")])]),s._v(" "),a("p",[a("code",[s._v("sudo raspi-config")]),s._v("设置"),a("strong",[s._v("wifi")]),s._v("相关")]),s._v(" "),a("p",[s._v("设置完成后"),a("code",[s._v("ifconfig")]),s._v("发现"),a("strong",[s._v("wlan0")]),s._v("通过"),a("strong",[s._v("DHCP")]),s._v("获取到"),a("strong",[s._v("IP")]),s._v(",以后即可通过"),a("strong",[s._v("IP")]),s._v("地址连接")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pi@raspberrypi:~ $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\nlo: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,LOOPBACK,RUNNING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\ninet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1  netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.0")]),s._v(".0.0\ninet6 ::1  prefixlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("  scopeid 0x1"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nloop  txqueuelen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Local Loopback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1848")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(" KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nTX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1848")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(" KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nusb0: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\ninet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169.254")]),s._v(".71.246  netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".0.0  broadcast "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169.254")]),s._v(".255.255\ninet6 f110::71f2:35fd:8g01:5623  prefixlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("  scopeid 0x2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nether 2g:6h:2g:33:11:11  txqueuelen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3164")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("436325")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("426.0")]),s._v(" KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("  overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nTX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1299")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("293238")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("286.3")]),s._v(" KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nwlan0: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\ninet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".3.55  netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0  broadcast "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".3.255\ninet6 f3e0::7g7a:345f:bq27:65g6  prefixlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("  scopeid 0x2"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nether 2g:12:12:12:11:11  txqueuelen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12997")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1198100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" MiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nTX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("459")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67142")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65.5")]),s._v(" KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("每次"),a("code",[s._v("sudo raspi-config")]),s._v("设置"),a("strong",[s._v("wifi")]),s._v("之后都会写入到这个配置当中"),a("code",[s._v("/etc/wpa_supplicant/wpa_supplicant.conf")])]),s._v(" "),a("p",[s._v("注意的是新增而不是覆盖写入")]),s._v(" "),a("p",[s._v("如果范围内同时有多个"),a("strong",[s._v("WiFi")]),s._v(",则可以手动更改配置文件设置优先级")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pi@raspberrypi:~ $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/wpa_supplicant/wpa_supplicant.conf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ctrl_interface")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/wpa_supplicant "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GROUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("netdev\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("update_config")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("country")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CN\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("network")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ssid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mamama"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("psk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"XXX.com"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("   //优先级 数字越大越优先\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("network")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ssid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tech"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("psk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx.com"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("priority")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("   //优先级 数字越大越优先\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\npi@raspberrypi:~ $\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ol",{attrs:{start:"10"}},[a("li",[s._v("更换源")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pi@raspberrypi:~ $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/apt/sources.list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#deb http://raspbian.raspberrypi.org/raspbian/ stretch main contrib non-free rpi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment line below then 'apt-get update' to enable 'apt-get source'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#deb-src http://raspbian.raspberrypi.org/raspbian/ stretch main contrib non-free rpi")]),s._v("\n\ndeb     http://mirrors.ustc.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi\ndeb-src http://mirrors.ustc.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"11"}},[a("li",[s._v("安装图形界面")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pi@raspberrypi:~ $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" install_X.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --no-install-recommends xserver-xorg -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --no-install-recommends xinit -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" raspberrypi-ui-mods -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"12"}},[a("li",[s._v("安装VNC")])]),s._v(" "),a("p",[s._v("按顺序安装，一定要按顺序安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tightvncserver\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xrdp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"13"}},[a("li",[s._v("windows--mstsc--pi0w_IP--Xorg")])]),s._v(" "),a("p",[s._v("##other")]),s._v(" "),a("p",[s._v("这期间一共研究了两天时间才搞定,其中翻阅各种资料论坛")]),s._v(" "),a("p",[s._v("搜索关键字")]),s._v(" "),a("p",[a("strong",[s._v("一根线玩树莓派zeroW")])]),s._v(" "),a("p",[a("strong",[s._v("树莓派zeroW开机")])]),s._v(" "),a("p",[s._v("因为不管提前配好"),a("strong",[s._v("wifi")]),s._v("还是配成网卡模式,通电都无法看到任何动静,找不到树莓派的IP,只是绿灯再闪")]),s._v(" "),a("p",[s._v("期间换过"),a("strong",[s._v("raspbian")]),s._v("历史版本,换过TF卡，尝试过各种操作")]),s._v(" "),a("p",[s._v("会不会是板子有问题呢,本来今天想着最后在研究一把,实在研究不出来就退货...")]),s._v(" "),a("p",[s._v("后来换了一根近期买的小米充电宝附赠的usb线,连到电脑显示新增硬件"),a("strong",[s._v("RNDIS/Ethernet Gadget")]),s._v(" 才有了上面这些操作...")]),s._v(" "),a("p",[a("strong",[s._v("尼玛原来是USB线的坑啊~~~")])]),s._v(" "),a("p",[s._v("##tip")]),s._v(" "),a("p",[s._v("在遇到问题有可能是TF卡有问题,也有可能是USB线,电源的问题,或者是系统不兼容问题")]),s._v(" "),a("p",[s._v("网上的资料有可能会解决你的问题,但不一定完全吻合!")]),s._v(" "),a("p",[s._v("还是得靠自己爬坑")]),s._v(" "),a("p",[s._v("##via")]),s._v(" "),a("p",[s._v("http://shumeipai.nxez.com/2018/02/20/raspberry-pi-zero-usb-ethernet-gadget-tutorial.html")]),s._v(" "),a("p",[s._v("https://www.baidu.com/s?ie=UTF-8&wd=%E4%B8%80%E6%A0%B9%E7%BA%BF%E7%8E%A9%E6%A0%91%E8%8E%93%E6%B4%BEzeroW")])])}),[],!1,null,null,null);t.default=r.exports}}]);