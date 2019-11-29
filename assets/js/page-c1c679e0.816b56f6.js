(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{392:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、先删除pod\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、再删除对应的deployment\n\n否则只是删除pod是不管用的，还会看到pod，因为deployment.yaml文件中定义了副本数量\n\n\n实例如下：\n\n删除pod\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod -n jenkins")]),s._v("\nNAME                        READY     STATUS    RESTARTS   AGE\njenkins2-8698b5449c-grbdm   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          8s\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete pod jenkins2-8698b5449c-grbdm -n jenkins")]),s._v("\npod "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jenkins2-8698b5449c-grbdm"')]),s._v(" deleted\n\n查看pod仍然存储\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod -n jenkins")]),s._v("\nNAME                        READY     STATUS    RESTARTS   AGE\njenkins2-8698b5449c-dbqqb   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          8s\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n\n删除deployment\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get deployment -n jenkins")]),s._v("\nNAME       DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\njenkins2   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           17h\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl delete deployment jenkins2 -n jenkins")]),s._v("\n\n再次查看pod消失\n\ndeployment.extensions "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jenkins2"')]),s._v(" deleted\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get deployment -n jenkins")]),s._v("\nNo resources found.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@test2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pod -n jenkins")]),s._v("\nNo resources found.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);