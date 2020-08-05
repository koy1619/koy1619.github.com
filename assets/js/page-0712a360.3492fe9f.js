(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{347:function(s,a,n){s.exports=n.p+"assets/img/Ea79ioRbXmSwLVW.d94934ff.png"},348:function(s,a,n){s.exports=n.p+"assets/img/s52RwxN6zLrFiX7.d92121df.png"},349:function(s,a,n){s.exports=n.p+"assets/img/45GTjZykKS2qQFA.aca8548e.png"},350:function(s,a,n){s.exports=n.p+"assets/img/SIj7Avn6g8BCzQL.b6a068ff.png"},351:function(s,a,n){s.exports=n.p+"assets/img/EwbuRhqkDg45OTW.533a1e42.png"},352:function(s,a,n){s.exports=n.p+"assets/img/YO9GZ8BcikeuEb1.e52f0acd.png"},353:function(s,a,n){s.exports=n.p+"assets/img/pvzVRFSxlZ9Kons.8dddbbef.png"},427:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",[s._v("Nexus3是Sonatype提供的仓库管理平台，Nuexus Repository OSS3能够支持Maven、npm、Docker、YUM、Helm等格式数据的存储和发布")])]),s._v(" "),e("h2",{attrs:{id:"安装nexus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nexus"}},[s._v("#")]),s._v(" 安装nexus")]),s._v(" "),e("p",[s._v("前文已写过如何在"),e("router-link",{attrs:{to:"/system/2015-11-12-centos-install-maven.html#安装nexus-3.3.1-01"}},[s._v("CentOS上搭建私有maven仓库")])],1),s._v(" "),e("p",[s._v("本文将创建一个提供"),e("code",[s._v("docker hub")]),s._v("("),e("strong",[s._v("docker register")]),s._v(")功能的"),e("code",[s._v("nexus")]),s._v("私有仓库")]),s._v(" "),e("h2",{attrs:{id:"创建docker镜像仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建docker镜像仓库"}},[s._v("#")]),s._v(" 创建docker镜像仓库")]),s._v(" "),e("p",[s._v("通过管理员帐户登录nexus，并进入创建为docker的镜像仓库的主页：")]),s._v(" "),e("p",[e("img",{attrs:{src:n(347),alt:"111.png"}}),s._v(" "),e("img",{attrs:{src:n(348),alt:"333.png"}}),s._v(" "),e("img",{attrs:{src:n(349),alt:"222.png"}})]),s._v(" "),e("p",[s._v("在创建镜像仓库的页面中，设置镜像仓库的相关信息，包括名称、HTTP端口、是否允许匿名拉取镜像等信息。")]),s._v(" "),e("p",[s._v("这里需要注意的是，此处的HTTP端口(此处的值为5000)很重要，后续拉取和推送进行是使用此端口进行的，而不是nexus本身对外暴露的端口。另外，如果允许设置通过匿名的方式拉取镜像。")]),s._v(" "),e("p",[s._v("这需要在Realms主页激活Docker Bearer Token Reamlm，如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:n(350),alt:"444.png"}})]),s._v(" "),e("p",[s._v("并对匿名方式进行设置，允许通过匿名方式访问服务器，如下图进行设置：")]),s._v(" "),e("p",[e("img",{attrs:{src:n(351),alt:"555.png"}})]),s._v(" "),e("h2",{attrs:{id:"docker客户端设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker客户端设置"}},[s._v("#")]),s._v(" docker客户端设置")]),s._v(" "),e("p",[s._v("在完成私有镜像仓库的设置后，由于使用的是HTTP协议，因此需要在客户端对docker进行配置。")]),s._v(" "),e("p",[s._v("在客户端的"),e("code",[s._v("/etc/docker/daemon.json")]),s._v("文件中添加下面的内容：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/docker/daemon.json")]),s._v("\n//在文件中添加如下的内容，告诉客户端私有镜像仓库是一个安全的仓库：\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.127.0.16:5000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"登录认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录认证"}},[s._v("#")]),s._v(" 登录认证")]),s._v(" "),e("p",[s._v("在通过nexus完成私有镜像仓库的构建后，首先需要进行登录认证才能进行后续的操作，私有镜像仓库登录认证的语法和格式："),e("code",[s._v("docker login")]),s._v(" "),e("code",[s._v("<nexus-hostname>:<repository-port>")]),s._v("。")]),s._v(" "),e("p",[s._v("上述的nexus部署在IP地址为"),e("code",[s._v("10.127.0.16")]),s._v("主机上，私有镜像的端口为"),e("code",[s._v("5000")]),s._v("，则通过执行如下的命令登录私有镜像仓库：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker login "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.127")]),s._v(".0.16:5000\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("登录时，需要提供用户名和密码。认证的信息会被保存在"),e("code",[s._v("~/.docker/config.json")]),s._v("文件，在后续与私有镜像仓库交互时就可以被重用，而不需要每次都进行登录认证。")]),s._v(" "),e("h2",{attrs:{id:"拉取上传镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取上传镜像"}},[s._v("#")]),s._v(" 拉取上传镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 国外机器拉取被河蟹的镜像并保存传到国内 #")]),s._v("\ndocker pull myhub.fdccloud.com/library/kubedns-amd64:1.9\ndocker pull myhub.fdccloud.com/library/kube-dnsmasq-amd64:1.4\ndocker pull myhub.fdccloud.com/library/dnsmasq-metrics-amd64:1.0\ndocker pull myhub.fdccloud.com/library/exechealthz-amd64:1.2\n\ndocker save myhub.fdccloud.com/library/kubedns-amd64:1.9  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubedns-amd64.tar\ndocker save myhub.fdccloud.com/library/kube-dnsmasq-amd64:1.4  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-dnsmasq-amd64.tar\ndocker save myhub.fdccloud.com/library/dnsmasq-metrics-amd64:1.0  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dnsmasq-metrics-amd64.tar\ndocker save myhub.fdccloud.com/library/exechealthz-amd64:1.2  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exechealthz-amd64.tar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node-1导入镜像 #")]),s._v("\ndocker load "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" kubedns-amd64.tar\ndocker load "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" kube-dnsmasq-amd64.tar\ndocker load "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" dnsmasq-metrics-amd64.tar\ndocker load "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" exechealthz-amd64.tar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node-1 镜像打tag并传至私服 #")]),s._v("\ndocker tag myhub.fdccloud.com/library/kubedns-amd64:1.9 registry:5000/kubedns-amd64:1.9\ndocker push registry:5000/kubedns-amd64:1.9\n\ndocker tag myhub.fdccloud.com/library/kube-dnsmasq-amd64:1.4 registry:5000/kube-dnsmasq-amd64:1.4\ndocker push registry:5000/kube-dnsmasq-amd64:1.4\n\ndocker tag myhub.fdccloud.com/library/dnsmasq-metrics-amd64:1.0 registry:5000/dnsmasq-metrics-amd64:1.0\ndocker push registry:5000/dnsmasq-metrics-amd64:1.0\n\ndocker tag myhub.fdccloud.com/library/exechealthz-amd64:1.2 registry:5000/exechealthz-amd64:1.2\ndocker push registry:5000/exechealthz-amd64:1.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("h2",{attrs:{id:"访问nexus后台repository查看镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问nexus后台repository查看镜像"}},[s._v("#")]),s._v(" 访问nexus后台repository查看镜像")]),s._v(" "),e("p",[s._v("http://10.127.0.16:8081/#browse/browse:ebuy_docker_registry:v2")]),s._v(" "),e("p",[e("img",{attrs:{src:n(352),alt:"1212.png"}})]),s._v(" "),e("h2",{attrs:{id:"访问api查看镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问api查看镜像"}},[s._v("#")]),s._v(" 访问API查看镜像")]),s._v(" "),e("p",[s._v("http://10.127.0.16:5000/v2/_catalog")]),s._v(" "),e("p",[e("img",{attrs:{src:n(353),alt:"2323.png"}})]),s._v(" "),e("p",[s._v("参考\nhttps://blog.51cto.com/daibaiyang119/2147894")]),s._v(" "),e("p",[s._v("docker")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":8081 --name nexus sonatype/nexus3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("K8S")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nexus3\n  namespace: default\nspec:\n  replicas: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  selector:\n    matchLabels:\n      app: nexus3\n  template:\n    metadata:\n      labels:\n        app: nexus3\n    spec:\n      nodeSelector:\n        kubernetes.io/hostname: k8s-node-1\n      containers:\n      - name: nexus3\n        image: sonatype/nexus3:3.25.0\n        imagePullPolicy: IfNotPresent\n\n        ports:\n          - name: docker-registry\n            containerPort: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n            hostPort: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n          - name: management\n            containerPort: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v("\n            hostPort: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v("\n\n        volumeMounts:\n        - mountPath: /opt/sonatype/sonatype-work\n          name: nexus3-storage\n      volumes:\n      - name: nexus3-storage\n        hostPath:\n          path: /dbdata/nexus3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);