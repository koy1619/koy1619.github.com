(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{320:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes集群搭建-初探"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes集群搭建-初探","aria-hidden":"true"}},[s._v("#")]),s._v(" kubernetes集群搭建-初探")]),s._v(" "),a("h1",{attrs:{id:"操作系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统要求","aria-hidden":"true"}},[s._v("#")]),s._v(" 操作系统要求")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uname -a")]),s._v("\nLinux localhost.localdomain "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-514.6.1.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 SMP Wed Jan 18 13:06:36 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/redhat-release ")]),s._v("\nCentOS Linux release "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.3")]),s._v(".1611 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h1",{attrs:{id:"节点分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点分配","aria-hidden":"true"}},[s._v("#")]),s._v(" 节点分配")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("节点及功能")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("主机名")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("ip")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("kube-apiserver、kube-controller-manager、kube-scheduler、docker、etcd、registry、flannel")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("K8s-master")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("10.1.1.100")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("kubelet、kubeproxy、docker、flannel")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("K8s-node-1")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("10.1.1.101")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("kubelet、kubeproxy、docker、flannel")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("K8s-node-2")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("10.1.1.102")])])])]),s._v(" "),a("h1",{attrs:{id:"基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 基础配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("hostnamectl --static set-hostname  k8s-master\nhostnamectl --static set-hostname  k8s-node-1\nhostnamectl --static set-hostname  k8s-node-2\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hosts\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".1.100    k8s-master\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".1.100    etcd\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".1.100    registry\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".1.101    k8s-node-1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".1.102    k8s-node-2\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl disable firewalld.service\nsystemctl stop firewalld.service\n")])])]),a("h1",{attrs:{id:"all-所有机器安装-docker-和-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-所有机器安装-docker-和-kubernetes","aria-hidden":"true"}},[s._v("#")]),s._v(" all 所有机器安装 docker 和 kubernetes")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum update -y\nyum remove -y docker\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker kubernetes\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/docker/daemon.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry:5000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nsystemctl start docker\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\ndocker version\n")])])]),a("h1",{attrs:{id:"master-启动私服"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-启动私服","aria-hidden":"true"}},[s._v("#")]),s._v(" master 启动私服")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true  --log-driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none -v /home/data/registrydata:/tmp/registry registry\n")])])]),a("h1",{attrs:{id:"国外机器拉取被河蟹的镜像并保存传到国内"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国外机器拉取被河蟹的镜像并保存传到国内","aria-hidden":"true"}},[s._v("#")]),s._v(" 国外机器拉取被河蟹的镜像并保存传到国内")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker pull gcr.io/google_containers/kubernetes-dashboard-amd64:v1.7.1\ndocker pull registry.access.redhat.com/rhel7/pod-infrastructure:latest\ndocker pull gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.4\ndocker pull myhub.fdccloud.com/library/kubedns-amd64:1.9\ndocker pull myhub.fdccloud.com/library/kube-dnsmasq-amd64:1.4\ndocker pull myhub.fdccloud.com/library/dnsmasq-metrics-amd64:1.0\ndocker pull myhub.fdccloud.com/library/exechealthz-amd64:1.2\n\ndocker save gcr.io/google_containers/kubernetes-dashboard-amd64:v1.7.1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubernetes-dashboard-amd64.tar\ndocker save registry.access.redhat.com/rhel7/pod-infrastructure:latest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" pod-infrastructure.tar\ndocker save gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" k8s-dns-kube-dns-amd64.tar\ndocker save myhub.fdccloud.com/library/kubedns-amd64:1.9  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubedns-amd64.tar\ndocker save myhub.fdccloud.com/library/kube-dnsmasq-amd64:1.4  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-dnsmasq-amd64.tar\ndocker save myhub.fdccloud.com/library/dnsmasq-metrics-amd64:1.0  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dnsmasq-metrics-amd64.tar\ndocker save myhub.fdccloud.com/library/exechealthz-amd64:1.2  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exechealthz-amd64.tar\n")])])]),a("h1",{attrs:{id:"node-1导入镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-1导入镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" node-1导入镜像")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" kubernetes-dashboard-amd64.tar\ndocker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" pod-infrastructure.tar\ndocker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" k8s-dns-kube-dns-amd64.tar\ndocker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" kubedns-amd64.tar\ndocker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" kube-dnsmasq-amd64.tar\ndocker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" dnsmasq-metrics-amd64.tar\ndocker load "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" exechealthz-amd64.tar\n")])])]),a("h1",{attrs:{id:"node-1-镜像打tag并传至私服"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-1-镜像打tag并传至私服","aria-hidden":"true"}},[s._v("#")]),s._v(" node-1 镜像打tag并传至私服")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker tag registry.access.redhat.com/rhel7/pod-infrastructure:latest registry:5000/pod-infrastructure:latest\ndocker push registry:5000/pod-infrastructure:latest\n\ndocker tag gcr.io/google_containers/kubernetes-dashboard-amd64:v1.7.1 registry:5000/kubernetes-dashboard-amd64:v1.7.1\ndocker push registry:5000/kubernetes-dashboard-amd64:v1.7.1\n\ndocker tag gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.4 registry:5000/k8s-dns-kube-dns-amd64:1.14.4\ndocker push registry:5000/k8s-dns-kube-dns-amd64:1.14.4\n\ndocker tag myhub.fdccloud.com/library/kubedns-amd64:1.9 registry:5000/kubedns-amd64:1.9\ndocker push registry:5000/kubedns-amd64:1.9\n\ndocker tag myhub.fdccloud.com/library/kube-dnsmasq-amd64:1.4 registry:5000/kube-dnsmasq-amd64:1.4\ndocker push registry:5000/kube-dnsmasq-amd64:1.4\n\ndocker tag myhub.fdccloud.com/library/dnsmasq-metrics-amd64:1.0 registry:5000/dnsmasq-metrics-amd64:1.0\ndocker push registry:5000/dnsmasq-metrics-amd64:1.0\n\ndocker tag myhub.fdccloud.com/library/exechealthz-amd64:1.2 registry:5000/exechealthz-amd64:1.2\ndocker push registry:5000/exechealthz-amd64:1.2\n")])])]),a("h1",{attrs:{id:"node-2-验证拉取私服镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-2-验证拉取私服镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" node-2 验证拉取私服镜像")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker pull registry:5000/pod-infrastructure:latest\ndocker pull registry:5000/kubernetes-dashboard-amd64:v1.7.1\ndocker pull registry:5000/k8s-dns-kube-dns-amd64:1.14.4\ndocker pull registry:5000/kubedns-amd64:1.9\ndocker pull registry:5000/kube-dnsmasq-amd64:1.4\ndocker pull registry:5000/dnsmasq-metrics-amd64:1.0\ndocker pull registry:5000/exechealthz-amd64:1.2\n")])])]),a("h1",{attrs:{id:"master-部署etcd服务配置启动检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-部署etcd服务配置启动检查","aria-hidden":"true"}},[s._v("#")]),s._v(" master 部署etcd服务配置启动检查")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" etcd -y\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# egrep -v '^#' /etc/etcd/etcd.conf | grep -v '^$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCD_DATA_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/etcd/default.etcd"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCD_LISTEN_CLIENT_URLS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://0.0.0.0:2379,http://0.0.0.0:4001"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCD_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCD_ADVERTISE_CLIENT_URLS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://etcd:2379,http://etcd:4001"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start etcd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etcdctl set testdir/testkey0 0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etcdctl get testdir/testkey0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etcdctl -C http://etcd:4001 cluster-health")]),s._v("\nmember 8e9e05c52164694d is healthy: got healthy result from http://etcd:2379\ncluster is healthy\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etcdctl -C http://etcd:2379 cluster-health")]),s._v("\nmember 8e9e05c52164694d is healthy: got healthy result from http://etcd:2379\ncluster is healthy\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),a("h1",{attrs:{id:"master-kubernetes配置启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-kubernetes配置启动","aria-hidden":"true"}},[s._v("#")]),s._v(" master-kubernetes配置启动")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# egrep -v '^#' /etc/kubernetes/apiserver | grep -v '^$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_API_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--insecure-bind-address=0.0.0.0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_API_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--port=8080"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_ETCD_SERVERS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--etcd-servers=http://etcd:2379"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_SERVICE_ADDRESSES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--service-cluster-ip-range=10.254.0.0/16"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_ADMISSION_CONTROL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--admission-control=NamespaceLifecycle,NamespaceExists,LimitRanger,SecurityContextDeny,ResourceQuota"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_API_ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# egrep -v '^#' /etc/kubernetes/config | grep -v '^$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_LOGTOSTDERR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--logtostderr=true"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_LOG_LEVEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--v=0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_ALLOW_PRIV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--allow-privileged=false"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_MASTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--master=http://k8s-master:8080"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf63961c1lfkvsm4shneZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kube-apiserver.service\nsystemctl start kube-apiserver.service\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kube-controller-manager.service\nsystemctl start kube-controller-manager.service\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kube-scheduler.service\nsystemctl start kube-scheduler.service\n")])])]),a("h1",{attrs:{id:"node-1-node-2-kubernetes配置启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-1-node-2-kubernetes配置启动","aria-hidden":"true"}},[s._v("#")]),s._v(" node-1  node-2 kubernetes配置启动")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf6apa66r2qwfw57sx8dZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# egrep -v '^#' /etc/kubernetes/config | grep -v '^$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_LOGTOSTDERR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--logtostderr=true"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_LOG_LEVEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--v=0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_ALLOW_PRIV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--allow-privileged=false"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBE_MASTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--master=http://k8s-master:8080"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf6apa66r2qwfw57sx8dZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# egrep -v '^#' /etc/kubernetes/kubelet | grep -v '^$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--address=0.0.0.0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_HOSTNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--hostname-override=k8s-node-1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_API_SERVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--api-servers=http://k8s-master:8080"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_POD_INFRA_CONTAINER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--pod-infra-container-image=registry.access.redhat.com/rhel7/pod-infrastructure:latest"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--cluster_dns=10.254.0.100 --cluster_domain=cluster.local"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZuf6apa66r2qwfw57sx8dZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kubelet.service\nsystemctl start kubelet.service\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kube-proxy.service\nsystemctl start kube-proxy.service\n")])])]),a("h1",{attrs:{id:"master上查看集群中节点及节点状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master上查看集群中节点及节点状态","aria-hidden":"true"}},[s._v("#")]),s._v(" master上查看集群中节点及节点状态")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  kubectl -s http://k8s-master:8080 get node")]),s._v("\nNAME         STATUS    AGE\nk8s-node-1   Ready     3m\nk8s-node-2   Ready     16s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get nodes")]),s._v("\nNAME         STATUS    AGE\nk8s-node-1   Ready     3m\nk8s-node-2   Ready     43s\n")])])]),a("h1",{attrs:{id:"master-node-安装证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-node-安装证书","aria-hidden":"true"}},[s._v("#")]),s._v(" master node 安装证书")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y *rhsm*\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirror.centos.org/centos/7/os/x86_64/Packages/python-rhsm-certificates-1.19.10-1.el7_4.x86_64.rpm\nrpm2cpio python-rhsm-certificates-1.19.10-1.el7_4.x86_64.rpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cpio -iv --to-stdout ./etc/rhsm/ca/redhat-uep.pem "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/rhsm/ca/redhat-uep.pem\n")])])]),a("h1",{attrs:{id:"master-node-安装flannel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-node-安装flannel","aria-hidden":"true"}},[s._v("#")]),s._v(" master node 安装Flannel")]),s._v(" "),a("p",[s._v("创建覆盖网络——Flannel")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" flannel -y\n")])])]),a("p",[s._v("master、node上均编辑/etc/sysconfig/flanneld")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# egrep -v '^#' /etc/sysconfig/flanneld | grep -v '^$'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FLANNEL_ETCD_ENDPOINTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://etcd:2379"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FLANNEL_ETCD_PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/atomic.io/network"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),a("p",[s._v("在master配置etcd中关于flannel的key")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# etcdctl mk /atomic.io/network/config \'{ "Network": "10.0.0.0/16" }\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Network"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.0.0.0/16"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("启动Flannel之后，需要依次重启docker、kubernete。")]),s._v(" "),a("p",[s._v("在master执行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" flanneld.service \nsystemctl start flanneld.service \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\nsystemctl restart kube-apiserver.service\nsystemctl restart kube-controller-manager.service\nsystemctl restart kube-scheduler.service\n")])])]),a("p",[s._v("在node上执行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" flanneld.service \nsystemctl start flanneld.service \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\nsystemctl restart kubelet.service\nsystemctl restart kube-proxy.service\n")])])]),a("h1",{attrs:{id:"安装kube-dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装kube-dns","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装kube-dns")]),s._v(" "),a("p",[s._v("在master上安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl create -f https://raw.githubusercontent.com/koy1619/k8s_yaml/master/kubedns-rc.yaml\nkubectl create -f https://raw.githubusercontent.com/koy1619/k8s_yaml/master/kubedns-svc.yaml\n")])])]),a("p",[s._v("修改各node节点上的/etc/kubernetes/kubelet配置文件，增加如下行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBELET_ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--cluster_dns=10.254.0.100 --cluster_domain=cluster.local"')]),s._v("\n")])])]),a("p",[s._v("重启各节点：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl restart kubelet\n")])])]),a("h1",{attrs:{id:"部署dashboard服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署dashboard服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署dashboard服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl create -f https://raw.githubusercontent.com/koy1619/k8s_yaml/master/dashboard-controller.yaml\nkubectl create -f https://raw.githubusercontent.com/koy1619/k8s_yaml/master/dashboard-service.yaml\n")])])]),a("h1",{attrs:{id:"master上面查看pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master上面查看pod","aria-hidden":"true"}},[s._v("#")]),s._v(" master上面查看pod")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl get pod  -o wide  --all-namespaces\n")])])]),a("h1",{attrs:{id:"dashboard访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard访问","aria-hidden":"true"}},[s._v("#")]),s._v(" dashboard访问")]),s._v(" "),a("p",[s._v("http://10.1.1.100:8080/ui")]),s._v(" "),a("p",[s._v("some exception ...")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl describe pods kubernetes-dashboard-1607234690-3bnk2 --namespace=kube-system")]),s._v("\n\n  1s    1s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("kubelet k8s-node2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("           Warning   FailedSync  Error syncing pod, skipping: failed to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"StartContainer"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubernetes-dashboard"')]),s._v(" with CrashLoopBackOff: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Back-off 10s restarting failed container=kubernetes-dashboard pod=kubernetes-dashboard-980055440-l9zl5_kube-system(870d02e1-7810-11e7-9517-000c296a54e8)"')]),s._v("\n  \n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("解决方案"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim kubenetes-dashboard.yaml")]),s._v("\n- --apiserver改成ip，不要使用域名\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("访问kubernetes dashboard UI报错\nError: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dial tcp 10.0.66.2:9090: getsockopt: connection timed out'")]),s._v("\nTrying to reach: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://10.0.66.2:9090/'")]),s._v("\n\n原因是master节点和node节点flannel 的网络通信有问题\n解决方法： \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".检查flannel配置；依次重启master和node节点flannel\nsystemctl restart flanneld\n在重建\nkubectl create -f dashboard-controller.yaml\nkubectl create -f dashboard-service.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".检查iptables -L -n ，检查node节点上的FORWARD 查看转发是否是drop，如果是drop，则开启\niptables -P FORWARD ACCEPT\n在master可以curl通 http://10.0.66.2:9090\n")])])]),a("p",[s._v("以下为参考资料")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("https://www.cnblogs.com/zhenyuyaodidiao/p/6500897.html\nhttps://blog.csdn.net/bbwangj/article/details/81701300\nhttps://andrewpqc.github.io/2018/04/23/setup-kubernetes-cluster-with-kubeadm/\nhttps://andrewpqc.github.io/2018/04/24/setup-k8s-dashboard-on-cluster/\nhttps://www.cnblogs.com/djhull/archive/2016/12/02/6125130.html\nhttps://blog.csdn.net/xts_huangxin/article/details/51130223\nhttps://blog.csdn.net/weixin_34054866/article/details/87525597\n\nhttps://blog.csdn.net/wt334502157/article/details/83992120\nhttps://www.cnblogs.com/allcloud/p/7614123.html\nhttps://hub.docker.com\nhttps://my.oschina.net/u/2539854/blog/3023384\nhttps://www.cnblogs.com/lion.net/p/10408510.html\n")])])]),a("p",[s._v("常用命令备忘")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl create -f kubedns-rc.yaml\nkubectl create -f kubedns-svc.yaml\nkubectl create -f dashboard-controller.yaml\nkubectl create -f dashboard-service.yaml\n\nkubectl delete -f dashboard-controller.yaml\nkubectl delete -f dashboard-service.yaml\nkubectl delete -f kubedns-rc.yaml\nkubectl delete -f kubedns-svc.yaml\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl -s http://k8s-master:8080 get node\nkubectl get pods --namespace kube-system\nkubectl get pod  -o wide  --all-namespaces\nkubectl describe pod kube-dns-598252076-hks4w --namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-system\nkubectl logs -f kubernetes-dashboard-2106745705-zz1qp -n kube-system\nkubectl logs -f kube-dns-2842662617-65n8h -n kube-system -c kubedns\nkubectl logs -f kube-dns-2842662617-65n8h -n kube-system -c dnsmasq-metrics\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#master删除节点")]),s._v("\nkubectl delete node node2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#看日志")]),s._v("\nkubectl logs -f kubernetes-dashboard-2891849301-9g3hb -n kube-system\nkubectl logs -f kube-dns-3298054597-lk7gf -n kube-system -c kubedns\nkubectl logs -f kube-dns-2842662617-w7t5q -n kube-system -c dnsmasq-metrics\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#登陆docker实例")]),s._v("\nkubectl get pods\nkubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it nginx-3873632884-zhfzt -- /bin/bash\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);