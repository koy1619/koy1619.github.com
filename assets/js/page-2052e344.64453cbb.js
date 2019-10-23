(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{456:function(t,o,r){"use strict";r.r(o);var s=r(2),_=Object(s.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"关于firstboot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于firstboot"}},[t._v("#")]),t._v(" 关于firstboot")]),t._v(" "),r("p",[t._v("===========")]),t._v(" "),r("p",[t._v("由于今天安装Pidora 的时候执行初始化firstboot意外关闭，导致不能再次执行，查了一下资料")]),t._v(" "),r("p",[t._v("一般安装完linux后，redhat会提供一个名为firstboot的服务，它负责协助配置redhat一些重要的信息")]),t._v(" "),r("p",[t._v("但是，firstboot服务只会在安装完后第一次开机执行，如果是升级或者第二次以后都不会启动这个服务")]),t._v(" "),r("p",[t._v("所以就导致了一些如果配置错误或者不恰当的话没法重新配置")]),t._v(" "),r("p",[t._v("所以在这里分享个小技巧：")]),t._v(" "),r("pre",[r("code",[t._v("vim /etc/sysconfig/firstboot\n")])]),t._v(" "),r("p",[t._v("其内容为：RUN_FIRSTBOOT=NO，将其no修改为yes")]),t._v(" "),r("p",[t._v("重启之后执行")]),t._v(" "),r("pre",[r("code",[t._v("python /usr/sbin/firstboot\n")])]),t._v(" "),r("p",[t._v("即可运行初始化步骤，配置完毕之后可将其RUN_FIRSTBOOT在改回no即可。")])])}),[],!1,null,null,null);o.default=_.exports}}]);