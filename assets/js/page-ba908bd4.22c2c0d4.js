(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{375:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("kube-proxy使用IPVS替代iptables")]),s._v(" "),n("ol",[n("li",[s._v("为什么要使用IPVS")])]),s._v(" "),n("p",[s._v("从k8s的1.8版本开始，kube-proxy引入了IPVS模式，IPVS模式与iptables同样基于Netfilter，但是采用的hash表，因此当service数量达到一定规模时，hash查表的速度优势就会显现出来，从而提高service的服务性能。")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("具体步骤")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("开启内核参数\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nnet.ipv4.ip_forward = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nEOF")]),s._v("\n\n\n开启ipvs支持\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ipvsadm  ipset\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/sysconfig/modules/ipvs.modules "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4\nEOF")]),s._v("\n\nsysctl -p\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("配置kube-proxy,增加标黑色两行，具体参数说明见官网")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node-1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /k8s/kubernetes/cfg/kube-proxy")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_PROXY_OPTS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--logtostderr=true \\\n--v=4 \\\n--hostname-override=k8s-node-1 \\\n--cluster-cidr=10.254.0.0/16 \\\n--proxy-mode=ipvs  \\\n--masquerade-all=true \\\n--kubeconfig=/k8s/kubernetes/cfg/kube-proxy.kubeconfig"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node-1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("重启kube-proxy")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl daemon-reload\nsystemctl restart kube-proxy\nsystemctl status kube-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("测试是否生效")]),s._v(" "),n("p",[n("code",[s._v("ipvsadm -Ln")])]),s._v(" "),n("p",[s._v("查看相关"),n("code",[s._v("Service-Ingress")])]),s._v(" "),n("p",[s._v("参考")]),s._v(" "),n("p",[s._v("https://www.jianshu.com/p/9b4b700c7765")]),s._v(" "),n("p",[s._v("https://segmentfault.com/a/1190000016333317")])])}),[],!1,null,null,null);a.default=e.exports}}]);