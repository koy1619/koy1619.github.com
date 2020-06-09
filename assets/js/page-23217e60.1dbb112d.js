(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{402:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("大致流程如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 初始化创建项目 ###")]),s._v("\nkubectl create -f /app/yaml/demo.yaml --record\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 后续发布更新 都采用 set image ###")]),s._v("\nkubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" image deployment nginx-demo-server nginx-demo-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("system386/nginx-ingress-demo:0.2 --record\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 查看发布历史 ###")]),s._v("\nkubectl rollout "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" deployment nginx-demo-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 回滚到上一个版本 ###")]),s._v("\nkubectl rollout undo deployment nginx-deployment\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 回滚到指定版本 ###")]),s._v("\nkubectl rollout undo deployment nginx-deployment --to-revision"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 查看第二版本变更详情 ###")]),s._v("\nkubectl rollout "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" deployment nginx-demo-server --revision"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("以下为演示")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" /app/yaml/demo.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ------------------- App Deployment ------------------- #")]),s._v("\napiVersion: apps/v1\nkind: Deployment\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kind: DaemonSet")]),s._v("\nmetadata:\n  name: nginx-demo-server\nspec:\n  replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#relicas指定容器副本数量，默认为1")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##升级回滚策略")]),s._v("\n  revisionHistoryLimit: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用来设置保留的历史记录数量，默认为2，设置为0时将不能回滚～～")]),s._v("\n  minReadySeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Kubernetes在等待设置的时间后才进行升级")]),s._v("\n  strategy:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# indicate which strategy we want for rolling update")]),s._v("\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("%        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#升级过程中最多可以比原先设置多出的POD数量")]),s._v("\n      maxUnavailable: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("%  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#升级过程中最多有多少个POD处于无法提供服务的状态")]),s._v("\n\n  selector:\n    matchLabels:\n      app: nginx-demo-server\n  template:\n    metadata:\n      labels:\n        app: nginx-demo-server\n    spec:\n      containers:\n        - name: nginx-demo-server\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#image: 'nginxinc/ingress-demo'")]),s._v("\n          image: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'system386/nginx-ingress-demo:0.3'")]),s._v("\n          imagePullPolicy: IfNotPresent\n          resources:\n            limits:\n              cpu: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.5"')]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#限制pod申请最大的cpu数量为1个cpu")]),s._v("\n              memory: 1Gi          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#申请内存最大值")]),s._v("\n            requests:\n              cpu: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2"')]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pod申请的cpu数量为0.5个cpu")]),s._v("\n              memory: 512Mi        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#申请内存的最小值")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h2",{attrs:{id:"初始化创建deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化创建deployment"}},[s._v("#")]),s._v(" 初始化创建Deployment")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" create -f /app/yaml/demo.yaml --record\ndeployment.apps/nginx-demo-server created\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get po\nNAME                                 READY   STATUS    RESTARTS   AGE\nnginx-demo-server-5b4685c9f6-gkjlh   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          25s\nnginx-demo-server-5b4685c9f6-v88sn   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          26s\nnginx-demo-server-5b4685c9f6-v8345   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          26s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"后续发布更新-都采用-set-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续发布更新-都采用-set-image"}},[s._v("#")]),s._v(" 后续发布更新 都采用 set image")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" image deployment nginx-demo-server nginx-demo-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("system386/nginx-ingress-demo:0.2 --record\ndeployment.apps/nginx-demo-server image updated\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看发布历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看发布历史"}},[s._v("#")]),s._v(" 查看发布历史")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" rollout "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" deployment nginx-demo-server\ndeployment.apps/nginx-demo-server \nREVISION  CHANGE-CAUSE\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         kubectl create --filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/yaml/demo.yaml --record"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" image deployment nginx-demo-server nginx-demo-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("system386/nginx-ingress-demo:0.2 --record"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"查看第二版本变更详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看第二版本变更详情"}},[s._v("#")]),s._v(" 查看第二版本变更详情")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-master yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" rollout "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" deployment nginx-demo-server --revision"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\ndeployment.apps/nginx-demo-server with revision "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2")]),s._v("\nPod Template:\n  Labels:       "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx-demo-server\n        pod-template-hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("855c946d55\n  Annotations:  kubernetes.io/change-cause: kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" image deployment nginx-demo-server nginx-demo-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("system386/nginx-ingress-demo:0.2 --record"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n  Containers:\n   nginx-demo-server:\n    Image:      system386/nginx-ingress-demo:0.2\n    Port:       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    Host Port:  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    Limits:\n      cpu:      500m\n      memory:   1Gi\n    Requests:\n      cpu:      200m\n      memory:   512Mi\n    Environment:        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    Mounts:     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  Volumes:      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("参考：")]),s._v(" "),a("p",[s._v("https://www.jianshu.com/p/7411d15215b5")]),s._v(" "),a("p",[s._v("https://blog.csdn.net/chenleiking/article/details/80197975")])])}),[],!1,null,null,null);n.default=t.exports}}]);