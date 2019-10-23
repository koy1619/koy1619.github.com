(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{477:function(t,e,n){"use strict";n.r(e);var s=n(2),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用rsync删除海量文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用rsync删除海量文件"}},[t._v("#")]),t._v(" 使用rsync删除海量文件")]),t._v(" "),n("p",[t._v("最近微博上很火的一个话题  "),n("a",{attrs:{href:"http://s.weibo.com/weibo/Linux%25E6%258A%2580%25E5%25B7%25A7%25EF%25BC%259A%25E4%25B8%2580%25E6%25AC%25A1%25E5%2588%25A0%25E9%2599%25A4%25E4%25B8%2580%25E7%2599%25BE%25E4%25B8%2587%25E4%25B8%25AA%25E6%2596%2587%25E4%25BB%25B6%25E7%259A%2584%25E6%259C%2580%25E5%25BF%25AB%25E6%2596%25B9?topnav=1&wvr=5&topsug=1",title:"#Linux技巧：一次删除一百万个文件的最快方法#",target:"_blank",rel:"noopener noreferrer"}},[t._v("#Linux技巧：一次删除一百万个文件的最快方法#"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("前面有博"),n("a",{attrs:{title:"深入理解磁盘inode",href:"http://linux48.com/archives/215.html",target:"_blank"}},[t._v("文深入理解磁盘inode")]),t._v("就是由于海量的碎片文件造成的")]),t._v(" "),n("p",[t._v("所以要在linux下删除海量文件，比如有数十万个文件，此时常用的rm -rf * 就会等待时间很长。这时我们可以使用rsync快速删除大量文件。")]),t._v(" "),n("p",[n("a",{attrs:{title:"外刊IY评论网的这篇文章",href:"http://www.aqee.net/a-faster-way-to-delete-millions-of-files-in-a-directory/",target:"_blank"}},[t._v("外刊IT评论的这篇文章")]),t._v(" 就讲到过使用rsync的效率之高了")]),t._v(" "),n("p",[t._v("下面我们演示一下如何操作")]),t._v(" "),n("p",[t._v("1，建立一个空目录test1111，并在里面写入文件，此文件夹是后面需要清空的")]),t._v(" "),n("pre",{staticClass:"lang:default decode:true"},[t._v("# mkdir test1111\n# cd test1111/\n# touch 1111111111111\n# touch 2222222222222\n# touch 3333333333333\n# touch 4444444444444\n# touch 5555555555555")]),t._v(" "),n("p",[t._v("2，建立一个空目录null123，此文件夹是为了让test1111文件夹同步空内容，以便达到删除目的")]),t._v(" "),n("pre",{staticClass:"lang:default decode:true"},[t._v("# mkdir null123")]),t._v(" "),n("p",[t._v("3，使用rsync删除目标目录")]),t._v(" "),n("pre",{staticClass:"lang:default decode:true"},[t._v("# rsync --delete-before -a -H -v -P --stats /home/null123/ /home/test1111/\nbuilding file list ... \n1 file to consider\ndeleting 5555555555555\ndeleting 4444444444444\ndeleting 3333333333333\ndeleting 2222222222222\ndeleting 1111111111111\n./\n\nNumber of files: 1\nNumber of files transferred: 0\nTotal file size: 0 bytes\nTotal transferred file size: 0 bytes\nLiteral data: 0 bytes\nMatched data: 0 bytes\nFile list size: 19\nFile list generation time: 0.001 seconds\nFile list transfer time: 0.000 seconds\nTotal bytes sent: 29\nTotal bytes received: 15\n\nsent 29 bytes  received 15 bytes  88.00 bytes/sec\ntotal size is 0  speedup is 0.00\n#ll /home/test1111/\ntotal 0\n#")]),t._v(" "),n("p",[t._v("加入 /usr/bin/time -v 可显示过程时长")]),t._v(" "),n("p",[t._v("附图")]),t._v(" "),n("img",{staticClass:"alignnone",attrs:{alt:"",src:"https://i.loli.net/2019/10/18/7zkn1CWSaJGY9ec.jpg",width:"690",height:"466"}})])}),[],!1,null,null,null);e.default=i.exports}}]);