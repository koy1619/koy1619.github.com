(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{391:function(e,t,r){"use strict";r.r(t);var n=r(1),p=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"update由于没有公钥，无法验证下列签名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update由于没有公钥，无法验证下列签名","aria-hidden":"true"}},[e._v("#")]),e._v(" update由于没有公钥，无法验证下列签名")]),e._v(" "),r("p",[e._v("==================================")]),e._v(" "),r("pre",[r("code",[e._v("pi@raspberrypi ~ $ sudo apt-get update\nW: GPG 错误：http://security.debian.org stable/updates InRelease: 由于没有公钥，无法验证下列签名： NO_PUBKEY 6FB2A1C265FFB764\n")])]),e._v(" "),r("p",[e._v("出现以上错误提示时，只要把后面NO_PUBKEY拷贝下来，并在终端里输入以下命令并加上NO_PUBKEY的值回车即可！")]),e._v(" "),r("pre",[r("code",[e._v("pi@raspberrypi ~ $ sudo apt-key adv --recv-keys --keyserver keyserver.Ubuntu.com 6FB2A1C265FFB764\nExecuting: gpg --ignore-time-conflict --no-options --no-default-keyring --secret-keyring /tmp/tmp.uBPNowBkZu --trustdb-name /etc/apt//trustdb.gpg --keyring /etc/apt/trusted.gpg --primary-keyring /etc/apt/trusted.gpg --recv-keys --keyserver keyserver.Ubuntu.com 6FB2A1C265FFB764\ngpg: 下载密钥‘65FFB764’，从 hkp 服务器 keyserver.Ubuntu.com\ngpg: 密钥 65FFB764：公钥“Wheezy Stable Release Key <debian-release@lists.debian.org>”已导入\ngpg: 没有找到任何绝对信任的密钥\ngpg: 合计被处理的数量：1\ngpg:           已导入：1  (RSA: 1)\n")])]),e._v(" "),r("p",[e._v("然后sudo apt-get update即可！")])])}),[],!1,null,null,null);t.default=p.exports}}]);