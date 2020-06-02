(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{384:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("本文基于"),a("a",{attrs:{href:"https://hub.docker.com/layers/traefik/library/traefik/v1.7.14/images/sha256-2911f8e1a2d22aeba50126ea6c0883a943cf02912df6c566620ef36fcac3c2a8",target:"_blank",rel:"noopener noreferrer"}},[s._v("Traefik-1.7"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("以下为最新Traefik 2.X特性，还有待研究")]),s._v(" "),a("p",[s._v("https://docs.traefik.io/migration/v1-to-v2")]),s._v(" "),a("p",[s._v("https://segmentfault.com/a/1190000020466823")]),s._v(" "),a("p",[s._v("https://blog.csdn.net/weichuangxxb/article/details/101561064")]),s._v(" "),a("p",[s._v("https://cloud.tencent.com/developer/article/1512439")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###############################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://hub.docker.com/_/traefik?tab=tags")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一般部署有两种不同类型的traefik模式:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#daemonset 能确定有哪些node在运行traefik，所以可以确定的知道后端ip，但是不能方便的伸缩")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#deployment 可以更方便的伸缩，但是不能确定有哪些node在运行traefik所以不能确定的知道后端ip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通俗讲就是以下2点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.面向内部(internal)服务的traefik，建议可以使用deployment的方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.面向外部(external)服务的traefik，建议可以使用daemonset的方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#因为我要暴露业务网关api服务器给公网,故采用daemonset的方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###############################")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-deployment.yaml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-ds.yaml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-rbac.yaml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/ui.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"一般配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般配置"}},[s._v("#")]),s._v(" 一般配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------------------------------一般配置--------------------------------------------")]),s._v("\nkubectl create -f traefik-rbac.yaml\nkubectl create -f traefik-ds.yaml            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#daemonset的方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kubectl create -f traefik-deployment.yaml  #deployment的方式")]),s._v("\nkubectl create -f ui.yaml             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改hosts为k8s-traefik.domain-1.com")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/koy1619/k8s_yaml/master/paas-app-demo/paas-gateway-server.yaml\nkubectl create -f paas-gateway-server.yaml\n\nkubectl get pods --all-namespaces -o wide\nkubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" --all-namespaces\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解析域名到任意node的公网IP或者绑定本地hosts测试")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#node*ip    k8s-traefik.domain-1.com")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#node*ip    paas-gateway.domain-1.com")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http://k8s-traefik.domain-1.com/dashboard/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http://paas-gateway.domain-1.com/paas/micro/captcha/getSmsVerificationCode")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#参考：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://www.jianshu.com/p/50b930fa7ca3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://blog.csdn.net/shida_csdn/article/details/79002692")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://blog.csdn.net/aixiaoyang168/article/details/78557739")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://blog.csdn.net/weixin_34315189/article/details/87387335")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Kubernetes 集成 Ingress-nginx 实现 服务暴露")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://www.cnblogs.com/panwenbin-logs/p/9915927.html")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"强制https证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制https证书"}},[s._v("#")]),s._v(" 强制https证书")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-----------------------------------强制https证书---------------------------------------")]),s._v("\n\n强制https证书\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p  /k8s/paas_certs/ssl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p  /k8s/paas_certs/conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /k8s/paas_certs/ssl/_.domain-1.com.crt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /k8s/paas_certs/ssl/_.domain-1.com.key\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master traefik"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /k8s/paas_certs/conf/traefik.toml")]),s._v("\ndefaultEntryPoints "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":80"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.http.redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    entryPoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":443"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.https.tls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.https.tls.certificates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      certFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/k8s/paas_certs/ssl/_.domain-1.com.crt"')]),s._v("\n      keyFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/k8s/paas_certs/ssl/_.domain-1.com.key"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master traefik"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /k8s/paas_certs/ssl\nkubectl create secret generic traefik-cert --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_.domain-1.com.crt --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_.domain-1.com.key -n kube-system\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /k8s/paas_certs/conf\nkubectl create configmap traefik-conf --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("traefik.toml -n kube-system\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/koy1619/k8s_yaml/master/traefik/ssl-traefik-ds.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新部署traefik和UI")]),s._v("\nkubectl delete  -f  traefik-rbac.yaml\nkubectl delete  -f  traefik-ds.yaml\nkubectl delete  -f  ui.yaml\nkubectl delete  -f  paas-gateway-server.yaml\n\nkubectl create  -f  traefik-rbac.yaml\nkubectl create  -f  ssl-traefik-ds.yaml     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl的daemonset模式")]),s._v("\nkubectl create  -f  ui.yaml\nkubectl create  -f  paas-gateway-server.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://k8s-traefik.domain-1.com/dashboard/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://paas-gateway.domain-1.com/paas/micro/captcha/getSmsVerificationCode")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("h2",{attrs:{id:"强制https证书and多域名配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制https证书and多域名配置"}},[s._v("#")]),s._v(" 强制https证书and多域名配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--------------------------------强制https证书and多域名配置------------------------------------------")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#先在K8S-UI后台删除之前创建的secret和configmap")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master traefik"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /k8s/paas_certs/conf/traefik.toml")]),s._v("\ndefaultEntryPoints "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":80"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.http.redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    entryPoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":443"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.https.tls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.https.tls.certificates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      certFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/k8s/paas_certs/domain-1/_.domain-1.com.crt"')]),s._v("\n      keyFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/k8s/paas_certs/domain-1/_.domain-1.com.key"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entryPoints.https.tls.certificates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      certFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/k8s/paas_certs/domain-2/_.domain-2.com.crt"')]),s._v("\n      keyFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/k8s/paas_certs/domain-2/_.domain-2.com.key"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master traefik"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /k8s/paas_certs/conf\nkubectl create configmap traefik-conf --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("traefik.toml -n kube-system\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /k8s/paas_certs/domain-1\nkubectl create secret generic domain-1-tls-cert  --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_.domain-1.com.crt --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_.domain-1.com.key -n kube-system\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /k8s/paas_certs/domain-2\nkubectl create secret generic domain-2-tls-cert --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_.domain-2.com.crt --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("_.domain-2.com.key -n kube-system\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新部署traefik和UI")]),s._v("\nkubectl delete  -f  traefik-rbac.yaml\nkubectl delete  -f  ssl-traefik-ds.yaml\nkubectl delete  -f  ui.yaml\nkubectl delete  -f  paas-gateway-server.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/koy1619/k8s_yaml/master/traefik/more-domain-ssl-traefik-ds.yaml\n\nkubectl create  -f  traefik-rbac.yaml\nkubectl create  -f  more-domain-ssl-traefik-ds.yaml     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#多域名ssl的daemonset模式")]),s._v("\nkubectl create  -f  ui.yaml                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改hosts到k8s-traefik.domain-2.com")]),s._v("\nkubectl create  -f  paas-gateway-server.yaml\n\n\nkubectl  get nodes,cs,svc,pods  -o wide  --all-namespaces\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://k8s-traefik.domain-2.com/dashboard/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://paas-gateway.domain-1.com/paas/micro/captcha/getSmsVerificationCode")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#参考：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://www.cnblogs.com/itanony/p/11037519.html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://segmentfault.com/a/1190000018098324?utm_source=coffeephp.com")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://blog.csdn.net/jdcdev_/article/details/88542874")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://blog.51cto.com/icenycmh/2125104")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--------------------------------------------------------------------------")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("p",[s._v("阿里云容器服务Kubernetes配置负载均衡HTTPS")]),s._v(" "),a("p",[s._v("https://yq.aliyun.com/articles/688518")])])}),[],!1,null,null,null);t.default=e.exports}}]);