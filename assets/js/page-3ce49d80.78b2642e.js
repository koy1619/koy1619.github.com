(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{493:function(o,v,e){"use strict";e.r(v);var r=e(2),t=Object(r.a)({},(function(){var o=this,v=o.$createElement,e=o._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"redis-写磁盘出错cannot-allocate-memory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-写磁盘出错cannot-allocate-memory"}},[o._v("#")]),o._v(" redis 写磁盘出错Cannot allocate memory")]),o._v(" "),e("p",[o._v("查看 Redis 日志\n发现系统在频繁报错：")]),o._v(" "),e("pre",[e("code",[o._v("[1821] 10 Nov 09:59:04.086 # Can't save in background: fork: Cannot allocate memory\n[1821] 10 Nov 09:59:10.002 * 1 changes in 900 seconds. Saving...\n")])]),o._v(" "),e("p",[o._v("在小内存的进程上做一个fork,不需要太多资源，但当这个进程的内存空间以Ｇ为单位时，fork就成为一件很恐怖的操作。何况在16G内存的主机上fork 14G内存的进程呢？肯定会报内存无法分配的。更可气的是，越是改动频繁的主机上fork也越频繁，fork操作本身的代价恐怕也不会比假死好多少。")]),o._v(" "),e("p",[o._v("找到原因之后，直接修改内核参数 "),e("strong",[o._v("vm.overcommit_memory = 1")])]),o._v(" "),e("p",[o._v("Linux内核会根据参数"),e("strong",[o._v("vm.overcommit_memory")]),o._v("参数的设置决定是否放行。")]),o._v(" "),e("p",[o._v("如果 "),e("strong",[o._v("vm.overcommit_memory = 1")]),o._v("，直接放行\n"),e("strong",[o._v("vm.overcommit_memory = 0")]),o._v("：则比较 此次请求分配的虚拟内存大小和系统当前空闲的物理内存加上swap，决定是否放行。\n"),e("strong",[o._v("vm.overcommit_memory = 2")]),o._v("：则会比较 进程所有已分配的虚拟内存加上此次请求分配的虚拟内存和系统当前的空闲物理内存加上swap，决定是否放行。")]),o._v(" "),e("p",[o._v("linux设置"),e("strong",[o._v("vm.overcommit_memory")]),o._v(" 方法\n永久性修改内核参数")]),o._v(" "),e("p",[o._v("在"),e("code",[o._v("/etc/sysctl.conf")]),o._v("文件里面加入或者直接删除也可以，因为它缺省值就是0")]),o._v(" "),e("pre",[e("code",[o._v("vm.overcommit_memory = 0\n")])]),o._v(" "),e("p",[o._v("运行使之生效")]),o._v(" "),e("pre",[e("code",[o._v("sysctl -p")])])])}),[],!1,null,null,null);v.default=t.exports}}]);