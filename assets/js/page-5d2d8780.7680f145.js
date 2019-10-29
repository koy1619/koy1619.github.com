(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{391:function(s,t,e){"use strict";e.r(t);var n=e(2),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://www.cnblogs.com/iiiiher/p/7920635.html")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://github.com/harbur/kubernetic/blob/master/README.md")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# K8S windows命令客户端")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://storage.googleapis.com/kubernetes-release/release/v1.8.0/bin/windows/amd64/kubectl.exe\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加到path")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac下安装kubectl命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://storage.googleapis.com/kubernetes-release/release/v1.8.13/bin/darwin/amd64/kubectl\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./kubectl\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./kubectl /usr/local/bin/kubectl\n\nkubectl config set-cluster local-server --server"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://10.10.10.100:8080\nkubectl config set-context default-context --cluster"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("local-server --namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("default\nkubectl config use-context default-context\nkubectl config view\nkubectl get pods\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("K8S 图形客户端")]),s._v(" "),e("p",[s._v("https://kubernetic.com/")]),s._v(" "),e("p",[s._v("wget https://kubernetic.s3.amazonaws.com/Kubernetic+Setup+2.3.0.exe")]),s._v(" "),e("p",[s._v("wget https://kubernetic.s3.amazonaws.com/Kubernetic-2.3.0.dmg")])])])}),[],!1,null,null,null);t.default=a.exports}}]);