(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{478:function(s,e,n){"use strict";n.r(e);var t=n(2),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("更换服务器重新搭建了环境之后发现wordpress后台主题只有一个，后来才了解到，原来是scandir函数被禁止掉了，所以在php.ini查找下这个函数，会发现如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("disable_functions "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" passthru,exec,system,chroot,scandir,chgrp,chown,\nproc_get_status,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("则只需将scandir删掉，并重启服务即可！")])])}),[],!1,null,null,null);e.default=a.exports}}]);