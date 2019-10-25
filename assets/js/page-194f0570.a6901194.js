(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{472:function(s,t,n){"use strict";n.r(t);var e=n(2),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("最近微博上很火的一个话题  "),n("a",{attrs:{href:"http://s.weibo.com/weibo/Linux%25E6%258A%2580%25E5%25B7%25A7%25EF%25BC%259A%25E4%25B8%2580%25E6%25AC%25A1%25E5%2588%25A0%25E9%2599%25A4%25E4%25B8%2580%25E7%2599%25BE%25E4%25B8%2587%25E4%25B8%25AA%25E6%2596%2587%25E4%25BB%25B6%25E7%259A%2584%25E6%259C%2580%25E5%25BF%25AB%25E6%2596%25B9?topnav=1&wvr=5&topsug=1",title:"#Linux技巧：一次删除一百万个文件的最快方法#",target:"_blank",rel:"noopener noreferrer"}},[s._v("#Linux技巧：一次删除一百万个文件的最快方法#"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("前面有博"),n("a",{attrs:{title:"深入理解磁盘inode",href:"http://linux48.com/archives/215.html",target:"_blank"}},[s._v("文深入理解磁盘inode")]),s._v("就是由于海量的碎片文件造成的")]),s._v(" "),n("p",[s._v("所以要在linux下删除海量文件，比如有数十万个文件，此时常用的rm -rf * 就会等待时间很长。这时我们可以使用rsync快速删除大量文件。")]),s._v(" "),n("p",[n("a",{attrs:{title:"外刊IY评论网的这篇文章",href:"http://www.aqee.net/a-faster-way-to-delete-millions-of-files-in-a-directory/",target:"_blank"}},[s._v("外刊IT评论的这篇文章")]),s._v(" 就讲到过使用rsync的效率之高了")]),s._v(" "),n("p",[s._v("下面我们演示一下如何操作")]),s._v(" "),n("p",[s._v("1，建立一个空目录test1111，并在里面写入文件，此文件夹是后面需要清空的")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir test1111")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd test1111/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch 1111111111111")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch 2222222222222")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch 3333333333333")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch 4444444444444")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch 5555555555555")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("2，建立一个空目录null123，此文件夹是为了让test1111文件夹同步空内容，以便达到删除目的")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" null123\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("3，使用rsync删除目标目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rsync --delete-before -a -H -v -P --stats /home/null123/ /home/test1111/")]),s._v("\nbuilding "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" list "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" to consider\ndeleting "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5555555555555")]),s._v("\ndeleting "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4444444444444")]),s._v("\ndeleting "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3333333333333")]),s._v("\ndeleting "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222222222222")]),s._v("\ndeleting "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111111111111")]),s._v("\n./\n\nNumber of files: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nNumber of files transferred: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nTotal "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" bytes\nTotal transferred "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" bytes\nLiteral data: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" bytes\nMatched data: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" bytes\nFile list size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("\nFile list generation time: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.001")]),s._v(" seconds\nFile list transfer time: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v(" seconds\nTotal bytes sent: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("\nTotal bytes received: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n\nsent "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" bytes  received "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" bytes  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("88.00")]),s._v(" bytes/sec\ntotal size is "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  speedup is "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll /home/test1111/")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("加入 /usr/bin/time -v 可显示过程时长")]),s._v(" "),n("p",[s._v("附图")]),s._v(" "),n("img",{staticClass:"alignnone",attrs:{alt:"",src:"https://i.loli.net/2019/10/18/7zkn1CWSaJGY9ec.jpg",width:"690",height:"466"}})])}),[],!1,null,null,null);t.default=a.exports}}]);