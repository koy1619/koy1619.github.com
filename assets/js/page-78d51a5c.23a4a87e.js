(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{440:function(e,s,t){"use strict";t.r(s);var a=t(2),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("pi@raspberrypi ~ $ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\nW: GPG 错误：http://security.debian.org stable/updates InRelease: 由于没有公钥，无法验证下列签名： NO_PUBKEY 6FB2A1C265FFB764\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("出现以上错误提示时，只要把后面NO_PUBKEY拷贝下来，并在终端里输入以下命令并加上NO_PUBKEY的值回车即可！")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("pi@raspberrypi ~ $ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" apt-key adv --recv-keys --keyserver keyserver.Ubuntu.com 6FB2A1C265FFB764\nExecuting: gpg --ignore-time-conflict --no-options --no-default-keyring --secret-keyring /tmp/tmp.uBPNowBkZu --trustdb-name /etc/apt//trustdb.gpg --keyring /etc/apt/trusted.gpg --primary-keyring /etc/apt/trusted.gpg --recv-keys --keyserver keyserver.Ubuntu.com 6FB2A1C265FFB764\ngpg: 下载密钥‘65FFB764’，从 hkp 服务器 keyserver.Ubuntu.com\ngpg: 密钥 65FFB764：公钥“Wheezy Stable Release Key "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("debian-release@lists.debian.org"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("”已导入\ngpg: 没有找到任何绝对信任的密钥\ngpg: 合计被处理的数量：1\ngpg:           已导入：1  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("RSA: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("然后"),t("code",[e._v("sudo apt-get update")]),e._v("即可！")])])}),[],!1,null,null,null);s.default=n.exports}}]);