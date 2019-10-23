(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{457:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"memcached简易安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memcached简易安装"}},[s._v("#")]),s._v(" memcached简易安装")]),s._v(" "),e("p",[s._v("Memcached是什么?")]),s._v(" "),e("p",[s._v("Memcached 是一个高性能的分布式内存对象缓存系统，用于动态Web应用以减轻数据库负载。它通过在内存中缓存数据和对象来减少读取数据库的次数，从而提供动态、数据库驱动网站的速度。")]),s._v(" "),e("p",[s._v("简单来说就是把数据缓存在内存之中，用户读取直接从内存读取，减轻数据库压力！（ps：服务器内存要有足够大）")]),s._v(" "),e("p",[s._v("闲话不多说，下面开始安装")]),s._v(" "),e("p",[s._v("用 getconf LONG_BIT 来查看机子多少位")]),s._v(" "),e("p",[s._v("下载libevent、memcached")]),s._v(" "),e("pre",[e("code",[s._v("wget http://www.danga.com/memcached/dist/memcached-1.2.6.tar.gz\nwget http://www.monkey.org/~provos/libevent-1.2.tar.gz\n")])]),s._v(" "),e("p",[s._v("解包")]),s._v(" "),e("pre",[e("code",[s._v("cd /usr/local\nmkdir libevent\nmkdir memcached\ntar -xzvf libevent-1.2.tar.gz\ntar -xzvf memcached-1.2.6.tar.gz\n")])]),s._v(" "),e("p",[s._v("处理libevent")]),s._v(" "),e("pre",[e("code",[s._v("cd /usr/local/libevent-1.2/\n./configure &#8211;prefix=/usr/local/libevent\nmake;make install\n")])]),s._v(" "),e("p",[s._v("处理memcached")]),s._v(" "),e("pre",[e("code",[s._v("cd /usr/local/memcached-1.2.6/\n./configure &#8211;prefix=/usr/local/memcached &#8211;with-libevent=/usr/local/libevent\nmake ;make install\nll /usr/local/libevent/lib/\n")])]),s._v(" "),e("p",[s._v("存在类似如下文件")]),s._v(" "),e("pre",[e("code",[s._v("libevent-1.2.so.1 -> libevent-1.2.so.1.0.3\nlibevent-1.2.so.1.0.3\nlibevent.a\nlibevent.la\nlibevent.so -> libevent-1.2.so.1.0.3\n")])]),s._v(" "),e("p",[s._v("32位机")]),s._v(" "),e("pre",[e("code",[s._v("ln -s /usr/local/libevent/lib/libevent-1.2.so.1 /usr/lib\n")])]),s._v(" "),e("p",[s._v("64位机")]),s._v(" "),e("pre",[e("code",[s._v("ln -s /usr/local/libevent/lib/libevent-1.2.so.1 /usr/lib64\n")])]),s._v(" "),e("p",[s._v("查看帮助")]),s._v(" "),e("pre",[e("code",[s._v("cd /usr/local/memcached\n\n/usr/local/memcached/bin/memcached -h\n")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("memcached "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".6\n\n-p "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" TCP port number to listen on "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11211")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-U "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" UDP port number to listen on "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-s "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unix socket path to listen on "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("disables network support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-a "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mask"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" access mask "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" unix socket, "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" octal "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default 0700"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-l "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_addr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" interface to listen on, default is INDRR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_ANY\n\n-d run as a daemon\n\n-r maximize core "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" limit\n\n-u "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" assume identity of "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("only when run as root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-m "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" max memory to use "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("items")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" megabytes, default is "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" MB\n\n-M "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" error on memory exhausted "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rather than removing items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-c "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" max simultaneous connections, default is "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("\n\n-k lock down all paged memory. Note that there is a\n\nlimit on how much memory you may lock. Trying to\n\nallocate "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" than that would fail, so be sure you\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the limit correctly "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the user you started\n\nthe daemon with "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("not "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" -u "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nunder "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" this is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" with "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#8216;ulimit -S -l NUM_KB&#8217;).")]),s._v("\n\n-v verbose "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("print errors/warnings "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" event loop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-vv very verbose "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("also print client commands/reponses"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-h print this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" and "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n\n-i print memcached and libevent license\n\n-b run a managed instanced "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mnemonic: buckets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-P "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" save PID "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(", only used with -d option\n\n-f "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("factor"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" chunk size growth factor, default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.25")]),s._v("\n\n-n "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" minimum space allocated "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" key+value+flags, default "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br")])]),e("p",[s._v("出现如上信息是，表明安装正常")]),s._v(" "),e("p",[s._v("启动memcache：")]),s._v(" "),e("pre",[e("code",[s._v("/usr/local/memcached/bin/memcached -d -m 512 -u root -l 192.168.1.1 -p 11211 -c 1000 -P /tmp/memcached.pid\n")])]),s._v(" "),e("p",[s._v("启动参数说明：")]),s._v(" "),e("p",[s._v("-d 选项是启动一个守护进程，")]),s._v(" "),e("p",[s._v("-m 是分配给Memcache使用的内存数量，单位是MB，默认64MB")]),s._v(" "),e("p",[s._v("-u 是运行Memcache的用户，如果当前为root 的话，需要使用此参数指定用户")]),s._v(" "),e("p",[s._v("-l   是监听的服务器IP地址，默认为所有网卡")]),s._v(" "),e("p",[s._v("-p 是设置Memcache的TCP监听的端口，最好是1024以上的端口")]),s._v(" "),e("p",[s._v("-c 选项是最大运行的并发连接数，默认是1024")]),s._v(" "),e("p",[s._v("-P 是设置保存Memcache的pid文件")]),s._v(" "),e("p",[s._v("当然也有很多可选参数通过./memcached -help来查看帮助")]),s._v(" "),e("p",[s._v("也可以启动多个守护进程，但是端口不能重复")]),s._v(" "),e("p",[s._v("8.停止Memcache进程：")]),s._v(" "),e("pre",[e("code",[s._v("ps aux |grep memcache\n")])]),s._v(" "),e("p",[s._v("#kill掉进程")]),s._v(" "),e("p",[s._v("测试：")]),s._v(" "),e("pre",[e("code",[s._v("telnet 192.168.1.3 11211\n")])]),s._v(" "),e("p",[s._v("连接不上修改防火墙")])])}),[],!1,null,null,null);a.default=t.exports}}]);