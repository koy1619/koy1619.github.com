(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{380:function(t,n,r){"use strict";r.r(n);var e=r(2),o=Object(e.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("MYSQL数据库更新到5.5以后，安装PHP程序出错，提示："),r("br"),t._v("\nERROR 1064 : You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ‘TYPE=MyISAM’ at line 6.")]),t._v(" "),r("p",[t._v("这个问题是由于MYSQL查询语句写法 TYPE=MyISAM 太老了，在MYSQL 5.5上已经被禁用，将安装程序包的TYPE=MyISAM 全部改成ENGINE=MyISAM就能正常安装了。一般地，ENGINE 选项是不必要的；除非默认已经被改变了，MyISAM是默认存储引擎。")]),t._v(" "),r("p",[t._v("不同的表类型是："),r("br"),t._v("\nISAM 原来的表处理器"),r("br"),t._v("\nMyISAM 全新二进制可移植的表处理器"),r("br"),t._v("\nHEAP 用于该表的数据仅仅存储在内存中")]),t._v(" "),r("p",[t._v("从3.23版本以后，这条语句可以省略，默认都是myisam类型，很多php程序（比如博客程序bo-blog）要兼容各种环境，所以会加上“TYPE=MyISAM”，而在新版本的mysql(5.5以上)又禁用了“TYPE=MyISAM”，采用“ENGINE=MyISAM”，所以就会报错，也只要更改安装文件包里的安装文件就可以了，")])])}),[],!1,null,null,null);n.default=o.exports}}]);