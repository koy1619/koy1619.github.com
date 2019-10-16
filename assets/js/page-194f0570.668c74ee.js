(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{400:function(e,t,n){"use strict";n.r(t);var s=n(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"使用rsync删除海量文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用rsync删除海量文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用rsync删除海量文件")]),e._v(" "),n("p",[e._v("最近微博上很火的一个话题  "),n("a",{attrs:{href:"http://s.weibo.com/weibo/Linux%25E6%258A%2580%25E5%25B7%25A7%25EF%25BC%259A%25E4%25B8%2580%25E6%25AC%25A1%25E5%2588%25A0%25E9%2599%25A4%25E4%25B8%2580%25E7%2599%25BE%25E4%25B8%2587%25E4%25B8%25AA%25E6%2596%2587%25E4%25BB%25B6%25E7%259A%2584%25E6%259C%2580%25E5%25BF%25AB%25E6%2596%25B9?topnav=1&wvr=5&topsug=1",title:"#Linux技巧：一次删除一百万个文件的最快方法#",target:"_blank",rel:"noopener noreferrer"}},[e._v("#Linux技巧：一次删除一百万个文件的最快方法#"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("前面有博"),n("a",{attrs:{title:"深入理解磁盘inode",href:"http://linux48.com/archives/215.html",target:"_blank"}},[e._v("文深入理解磁盘inode")]),e._v("就是由于海量的碎片文件造成的")]),e._v(" "),n("p",[e._v("所以要在linux下删除海量文件，比如有数十万个文件，此时常用的rm -rf * 就会等待时间很长。这时我们可以使用rsync快速删除大量文件。")]),e._v(" "),n("p",[n("a",{attrs:{title:"外刊IY评论网的这篇文章",href:"http://www.aqee.net/a-faster-way-to-delete-millions-of-files-in-a-directory/",target:"_blank"}},[e._v("外刊IT评论的这篇文章")]),e._v(" 就讲到过使用rsync的效率之高了")]),e._v(" "),n("p",[e._v("下面我们演示一下如何操作")]),e._v(" "),n("p",[e._v("1，建立一个空目录test1111，并在里面写入文件，此文件夹是后面需要清空的")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("# mkdir test1111\n# cd test1111/\n# touch 1111111111111\n# touch 2222222222222\n# touch 3333333333333\n# touch 4444444444444\n# touch 5555555555555")]),e._v(" "),n("p",[e._v("2，建立一个空目录null123，此文件夹是为了让test1111文件夹同步空内容，以便达到删除目的")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("# mkdir null123")]),e._v(" "),n("p",[e._v("3，使用rsync删除目标目录")]),e._v(" "),n("pre",{staticClass:"lang:default decode:true"},[e._v("# rsync --delete-before -a -H -v -P --stats /home/null123/ /home/test1111/\nbuilding file list ... \n1 file to consider\ndeleting 5555555555555\ndeleting 4444444444444\ndeleting 3333333333333\ndeleting 2222222222222\ndeleting 1111111111111\n./\n\nNumber of files: 1\nNumber of files transferred: 0\nTotal file size: 0 bytes\nTotal transferred file size: 0 bytes\nLiteral data: 0 bytes\nMatched data: 0 bytes\nFile list size: 19\nFile list generation time: 0.001 seconds\nFile list transfer time: 0.000 seconds\nTotal bytes sent: 29\nTotal bytes received: 15\n\nsent 29 bytes  received 15 bytes  88.00 bytes/sec\ntotal size is 0  speedup is 0.00\n#ll /home/test1111/\ntotal 0\n#")]),e._v(" "),n("p",[e._v("加入 /usr/bin/time -v 可显示过程时长")]),e._v(" "),n("p",[e._v("附图")]),e._v(" "),n("img",{staticClass:"alignnone",attrs:{alt:"",src:"http://ww4.sinaimg.cn/mw690/45d8cb2djw1e5o4nhzxk1j20m40ey0vq.jpg",width:"690",height:"466"}})])}),[],!1,null,null,null);t.default=i.exports}}]);