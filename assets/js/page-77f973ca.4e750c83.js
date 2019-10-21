(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{328:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"配置kubectl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置Kubectl")]),e._v(" "),s("AdSenseTitle"),e._v(" "),s("blockquote",[s("p",[e._v("参考文档： Kubernetes官网文档 "),s("a",{attrs:{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Organizing Cluster Access Using kubeconfig Files"),s("OutboundLink")],1),e._v("、"),s("a",{attrs:{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure Access to Multiple Clusters"),s("OutboundLink")],1)])]),e._v(" "),s("p",[s("code",[e._v("kubectl")]),e._v(" 命令行工具从配置文件kubeconfig中查找用于调用 API Server 接口的信息：")]),e._v(" "),s("ul",[s("li",[e._v("集群 cluster")]),e._v(" "),s("li",[e._v("用户 user")]),e._v(" "),s("li",[e._v("名称空间 namespace")]),e._v(" "),s("li",[e._v("认证机制 authentication mechanism")])]),e._v(" "),s("blockquote",[s("p",[e._v("kubeconfig 并不是一个文件的名字，而是 kubectl 配置文件的统称")])]),e._v(" "),s("p",[e._v("默认情况下，"),s("code",[e._v("kubectl")]),e._v(" 读取 "),s("code",[e._v("$HOME/.kube/config")]),e._v(" 作为配置文件。您可以通过两种方式为 "),s("code",[e._v("kubectl")]),e._v(" 指定配置文件：")]),e._v(" "),s("ul",[s("li",[e._v("环境变量 "),s("code",[e._v("KUBECONFIG")])]),e._v(" "),s("li",[e._v("命令行参数 "),s("code",[e._v("--kubeconfig")])])]),e._v(" "),s("p",[e._v("可以在一个或多个kubeconfig文件中配置多个集群的访问信息，并使用 "),s("code",[e._v("kubectl config use-context")]),e._v(" 命令切换要访问哪个集群。本文描述了如何配置 kubectl 以访问多个集群。")]),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("kubectl的版本号必须大于等于集群的版本号，执行命令 "),s("code",[e._v("kubectl version")]),e._v(" 可查看 kubectl 版本")])]),e._v(" "),s("h2",{attrs:{id:"kubeconfig环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubeconfig环境变量","aria-hidden":"true"}},[e._v("#")]),e._v(" KUBECONFIG环境变量")]),e._v(" "),s("p",[e._v("可以在 "),s("code",[e._v("KUBECONFIG")]),e._v(" 环境变量中配置多个 kubeconfig 文件：")]),e._v(" "),s("ul",[s("li",[e._v("在 Linux 和 MAC 中，使用英文冒号 "),s("code",[e._v(":")]),e._v(" 分隔")]),e._v(" "),s("li",[e._v("在 Windows 中，使用英文分号 "),s("code",[e._v(";")]),e._v(" 分隔")])]),e._v(" "),s("p",[e._v("当 "),s("code",[e._v("KUBECONFIG")]),e._v(" 指定了多个 kubeconfig 文件时，kubectl会自动合并所有文件中的配置内容。您可以将每个集群的访问信息存储到一个文件中，并将该文件加入到 "),s("code",[e._v("KUBECONFIG")]),e._v(" 环境变量中。")]),e._v(" "),s("p",[s("code",[e._v("KUBECONFIG")]),e._v(" 环境变量并不是必须配置的，如果该环境变量不存在， kubectl 将使用默认位置的 kubeconfig 文件，即 "),s("code",[e._v("$HOME/.kube/config")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"kubeconfig文件的合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubeconfig文件的合并","aria-hidden":"true"}},[e._v("#")]),e._v(" kubeconfig文件的合并")]),e._v(" "),s("p",[e._v("前面提到，kubectl会自动合并 "),s("code",[e._v("KUBECONFIG")]),e._v(" 指定的多个文件，执行以下指令，可以查看最终生效的结果：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("kubectl config view\n")])])]),s("p",[e._v("合并时的规则如下：")]),e._v(" "),s("ul",[s("li",[e._v("如果执行 kubectl 指令时，指定了 "),s("code",[e._v("--kubeconfig")]),e._v(" 参数，则只使用该参数指定的 kubeconfig 文件，不会进行合并")]),e._v(" "),s("li",[e._v("否则，在指定了环境变量 "),s("code",[e._v("KUBECONFIG")]),e._v(" 的情况下，该环境变量中的所有文件将被合并使用：\n"),s("ul",[s("li",[e._v("对于不能正常解析的文件，提示错误信息")]),e._v(" "),s("li",[e._v("当执行 "),s("code",[e._v("kubectl config use-context")]),e._v(" 指令后，在第一个文件中保存 "),s("code",[e._v("current-context")]),e._v(" 字段")]),e._v(" "),s("li",[e._v("合并过程忽略冲突。例如：如果多个文件中都定义了 "),s("code",[e._v("red-user")]),e._v("，将只使用列表中第一个定义了 "),s("code",[e._v("red-user")]),e._v(" 的内容，所有后面定义的 "),s("code",[e._v("red-user")]),e._v(" 都将被忽略")])])]),e._v(" "),s("li",[e._v("如果既没指定 "),s("code",[e._v("--kubeconfig")]),e._v(" 参数，又没指定 "),s("code",[e._v("KUBECONFIG")]),e._v(" 环境变量，则使用默认的配置文件 "),s("code",[e._v("$HOME/.kube/config")]),e._v("，此时也无需合并")])]),e._v(" "),s("h2",{attrs:{id:"切换当前访问的集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换当前访问的集群","aria-hidden":"true"}},[e._v("#")]),e._v(" 切换当前访问的集群")]),e._v(" "),s("p",[e._v("当您通过 "),s("code",[e._v("KUBECONFIG")]),e._v(" 环境变量指定了多个集群的访问配置文件时，执行 "),s("code",[e._v("kubectl config view")]),e._v(" 指令，输出结果如下所示：")]),e._v(" "),s("ul",[s("li",[e._v("其中 "),s("code",[e._v("contexts")]),e._v(" 字段包含了多个访问集群的 "),s("code",[e._v("上下文")]),e._v("，每个上下文指定了一个 "),s("code",[e._v("name")]),e._v("，并指定了该 "),s("code",[e._v("上下文")]),e._v(" 要访问的集群名称"),s("code",[e._v("cluster")]),e._v("，集群中的名称空间"),s("code",[e._v("namespace")]),e._v("，使用哪个用户去访问"),s("code",[e._v("user")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("current-context")]),e._v(" 字段指定了当前生效的 "),s("code",[e._v("上下文")])])]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("contexts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" development\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" frontend\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" developer\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("frontend\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" development\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ramp\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" developer\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("ramp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("up\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" development\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" storage\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" developer\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("storage\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" scratch\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" default\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" experimenter\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" exp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("scratch\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("current-context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("frontend\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Config\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n")])])]),s("p",[e._v("执行 "),s("code",[e._v("kubectl config get-contexts")]),e._v(" 命令，可以查看可用的 "),s("code",[e._v("上下文")]),e._v(" 列表，其中第一列带 "),s("code",[e._v("*")]),e._v(" 的为当前使用的 "),s("code",[e._v("上下文")]),e._v("，输出如下所示：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CURRENT   NAME                 CLUSTER                      AUTHINFO             NAMESPACE\n          dev-frontend         development                  developer            frontend\n*         dev-ramp-up          development                  developer            ramp\n          dev-storage          development                  developer            storage\n          exp-scratch          scratch                      experimenter         default\n")])])]),s("p",[e._v("执行 "),s("code",[e._v("kubectl config use-context dev-storage")]),e._v(" 命令，可以切换到另外一个 "),s("code",[e._v("上下文")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);