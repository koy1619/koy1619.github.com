(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{352:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用redis-rdb-tools分析redis内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用redis-rdb-tools分析redis内存","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用redis-rdb-tools分析Redis内存")]),s._v(" "),a("p",[s._v("当一个项目中Redis缓存的数据量逐渐增大，Redis缓存的数据占用内存也会越来越大，当积累到一定程度由于"),a("code",[s._v("bgsave")]),s._v("的原因有很大可能导致"),a("code",[s._v("FORK")]),s._v("或者"),a("code",[s._v("OOM")]),s._v("从而影响线上业务")]),s._v(" "),a("p",[s._v("由于redis其中有很多很可能是价值不大的过期数据；所以必须要加以分析清理")]),s._v(" "),a("p",[s._v("前面写到过"),a("a",{attrs:{href:"http://linux48.com/2017-02-28-zabbix-redis.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("zabbix使用自动发现规则自动化监控redis多实例"),a("OutboundLink")],1),s._v("但是这也只是监控层面，还得必须加以分析才能得出结论哪些"),a("code",[s._v("key")]),s._v("可以清理")]),s._v(" "),a("p",[s._v("由于Redis是一个key-value数据库，所以对其中的数据进行分析没有mysql数据库那么直观。那么此时，我们需要"),a("code",[s._v("redis-rdb-tools")]),s._v("工具来分析Redis缓存中的哪些数据占用内存比较大，并结合项目实际的情况来分析这些数据存储的价值如何？从而作出具体删减数据的方案")]),s._v(" "),a("p",[s._v("闲话不多说直接开搞")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rdbtools python-lzf\n\nrdb -c memory dump.rdb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" memory.csv\n")])])]),a("p",[s._v("使用Navicat把memory.csv导入mysql")]),s._v(" "),a("p",[s._v("此处需要分析的数据：")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("每一种key所在用的总内存大小（size_in_bytes_sum）")]),s._v(" "),a("li",[s._v("每一种key的总数（PS：因为有的key设计是前缀+用户id，这样的情况都属于一种key）（record_count）")]),s._v(" "),a("li",[s._v("每一种key所在数据库（database）")]),s._v(" "),a("li",[s._v("每一种key的数据类型（type）")]),s._v(" "),a("li",[s._v("每一种key的编码类型（encoding）")]),s._v(" "),a("li",[s._v("每一种key的名称（key）")]),s._v(" "),a("li",[s._v("每一种key占用的平均内存大小（size_in_bytes_avg）")]),s._v(" "),a("li",[s._v("......")])])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRUNCATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size_in_bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" data_size "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("memory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" data_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4322.63")]),s._v("MB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.04")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可以看到内存占用总大小大概为4.3G和redis-info显示的一样")]),s._v("\n\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRUNCATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size_in_bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" data_size "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("memory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("size_in_bytes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------------------------------+-----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v("                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" data_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------------------------------+-----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CardNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9458.49218")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".105499")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2859")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10311339")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("436.58")]),s._v("MB  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CardNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14488.83488")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".104299")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2539")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10308859")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210.70")]),s._v("MB  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CardNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14488.83478")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".105519")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2879")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10311359")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("191.39")]),s._v("MB  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CardNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9078.49138")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".105489")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2849")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10311349")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102.18")]),s._v("MB  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CardNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14488.501574")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".500263")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2879")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10311359")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41.48")]),s._v("MB   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Point")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20170630")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.70")]),s._v("MB   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------------------------------------+-----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//每一种key所用内存大小")]),s._v("\n\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("memory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%CardNo%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("76828")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------+")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);