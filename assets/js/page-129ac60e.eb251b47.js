(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{554:function(v,n,_){"use strict";_.r(n);var e=_(2),l=Object(e.a)({},(function(){var v=this,n=v.$createElement,_=v._self._c||n;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",[v._v("日志管理工具journalctl是centos7上专有的日志管理工具，该工具是从message这个文件里读取信息。Systemd统一管理所有Unit的启动日志。带来的好处就是，可以只用journalctl一个命令，查看所有日志（内核日志和应用日志）。\n日志的配置文件是: /etc/systemd/journald.conf\njournalctl功能强大，用法非常多。")]),v._v(" "),_("p",[v._v("详见：http://www.jinbuguo.com/systemd/journalctl.html")])]),v._v(" "),_("p",[v._v("本文将介绍journalctl的常用使用方法。")]),v._v(" "),_("p",[v._v("查看所有日志\n默认情况下，只保存本次启动的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl\n")])]),v._v(" "),_("p",[v._v("查看内核日志（不显示应用日志）")]),v._v(" "),_("pre",[_("code",[v._v("journalctl -k\n")])]),v._v(" "),_("p",[v._v("查看系统本次启动的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl   -b\njournalctl  -b  -0\n")])]),v._v(" "),_("p",[v._v("查看上一次启动的日志需更改设置,如上次系统崩溃，需要查看日志时，就要看上一次的启动日志。")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -b -1\n")])]),v._v(" "),_("p",[v._v("查看指定时间的日志")]),v._v(" "),_("pre",[_("code",[v._v('journalctl --since="2012-10-3018:17:16"\njournalctl --since "20 minago"\njournalctl --since yesterday\njournalctl --since"2015-01-10" --until "2015-01-11 03:00"\njournalctl --since 09:00 --until"1 hour ago"\njournalctl --since"15:15" --until now\n')])]),v._v(" "),_("p",[v._v("显示尾部的最新10行日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -n 10\n")])]),v._v(" "),_("p",[v._v("实时滚动显示最新日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl   -f\n")])]),v._v(" "),_("p",[v._v("查看指定服务的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  /usr/lib/systemd/systemd\n")])]),v._v(" "),_("p",[v._v("查看指定进程的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl   _PID=1\n")])]),v._v(" "),_("p",[v._v("查看某个路径的脚本的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl    /usr/bin/bash\n")])]),v._v(" "),_("p",[v._v("查看指定用户的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl _UID=33  --since today\n")])]),v._v(" "),_("p",[v._v("查看某个Unit的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -u nginx.service\njournalctl  -u nginx.service  --since  today\n")])]),v._v(" "),_("p",[v._v("实时滚动显示某个Unit的最新日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -u nginx.service  -f\n")])]),v._v(" "),_("p",[v._v("合并显示多个Unit的日志")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -u nginx.service  -u php-fpm.service  --since today\n")])]),v._v(" "),_("p",[v._v("查看指定优先级（及其以上级别）的日志\n日志优先级共有8级")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("0: emerg")]),v._v(" "),_("li",[v._v("1: alert")]),v._v(" "),_("li",[v._v("2: crit")]),v._v(" "),_("li",[v._v("3: err")]),v._v(" "),_("li",[v._v("4: warning")]),v._v(" "),_("li",[v._v("5: notice")]),v._v(" "),_("li",[v._v("6: info")]),v._v(" "),_("li",[v._v("7: debug")])])]),v._v(" "),_("p",[v._v("显示不同级别的日志：")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -p err  -b\njournalctl  -p err..alert -b\n")])]),v._v(" "),_("p",[v._v("不分页标准输出日志\n默认情况下，结果会通过 less 工具进行分页输出， 并且超长行会在屏幕边缘被截断。\njournalctl 会在 pager 内显示输出结果。如果希望利用文本操作工具对数据进行处理，则需要使用标准输出。在这种情况下，我们需要使用 --no-pager 选项。")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  --no-pager\n")])]),v._v(" "),_("p",[v._v("以JSON格式（单行）输出")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -b -u httpd.service  -o json\n")])]),v._v(" "),_("p",[v._v("以JSON格式（多行）输出，可读性更好，建议选择多行输出")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  -b -u httpd.service  -o json-pretty\n")])]),v._v(" "),_("p",[v._v("显示日志占据的硬盘空间")]),v._v(" "),_("pre",[_("code",[v._v("journalctl  --disk-usage\n")])]),v._v(" "),_("p",[v._v("指定日志文件占据的最大空间")]),v._v(" "),_("pre",[_("code",[v._v("journalctl   --vacuum-size=1G\n")])]),v._v(" "),_("p",[v._v("指定日志文件保存多久")]),v._v(" "),_("pre",[_("code",[v._v("journalctl   --vacuum-time=1years\n")])]),v._v(" "),_("p",[v._v("清理日志数据")]),v._v(" "),_("p",[v._v("如果打算对 journal 记录进行清理，则可使用两种不同方式。")]),v._v(" "),_("blockquote",[_("ul",[_("li",[v._v("使用 –vacuum-size 选项")]),v._v(" "),_("li",[v._v("使用 –vacuum-time 选项")])])]),v._v(" "),_("p",[v._v("如果使用 –vacuum-size 选项，则可硬性指定日志的总体体积，意味着其会不断删除旧有记录直到所占容量符合要求：")]),v._v(" "),_("pre",[_("code",[v._v("journalctl --vacuum-size=1G\n")])]),v._v(" "),_("p",[v._v("另一种方式则是使用 –vacuum-time 选项。任何早于这一时间点的条目都将被删除。例如，去年之后的条目才能保留：")]),v._v(" "),_("pre",[_("code",[v._v("journalctl --vacuum-time=1years\n")])])])}),[],!1,null,null,null);n.default=l.exports}}]);