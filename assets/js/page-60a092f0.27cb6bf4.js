(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{484:function(n,o,s){"use strict";s.r(o);var t=s(2),e=Object(t.a)({},(function(){var n=this,o=n.$createElement,s=n._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"wordpress引用google开放css加载不到解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wordpress引用google开放css加载不到解决方法"}},[n._v("#")]),n._v(" wordpress引用google开放css加载不到解决方法")]),n._v(" "),s("p",[n._v("今天有个基友忽然给我说linux48打开奇慢无比，我在chrome试了一下是ok的很快，但是在其他浏览器就爆慢，后来终于发现原来我chrome走的是SOCKS5代理，这下原因很明显了。最近郭嘉对于"),s("strong",[n._v("谷歌")]),n._v("又是一轮"),s("strong",[n._v("XX")]),n._v(",真是忍不住要放一句"),s("strong",[n._v("病魔加油~~")])]),n._v(" "),s("p",[n._v("为了证明我的猜想是正确的，方法很简单，使用"),s("strong",[n._v("F12")]),n._v("开发者模式的"),s("strong",[n._v("网络")]),n._v("选项就可以查看到")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/10/18/IT9HAhwVSqc4EsW.jpg",alt:""}})]),n._v(" "),s("p",[n._v("尼玛，果然不出我所料~ 正是wordpress引用google开放css加载不到")]),n._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[n._v("#")]),n._v(" 解决方案")]),n._v(" "),s("h4",{attrs:{id:"_1-新建google-font-css-放在-wp-includes-css目录中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建google-font-css-放在-wp-includes-css目录中"}},[n._v("#")]),n._v(" 1.新建google-font.css 放在\\wp-includes\\css目录中")]),n._v(" "),s("pre",[s("code",[n._v("@font-face {\nfont-family: ‘Open Sans’;\nfont-style: normal;\nfont-weight: 300;\nsrc: local(‘Open Sans Light’), local(‘OpenSans-Light’), url(../fonts/google/DXI1ORHCpsQm3Vp6mXoaTRa1RVmPjeKy21_GQJaLlJI.woff) format(‘woff’);\n}\n@font-face {\nfont-family: ‘Open Sans’;\nfont-style: normal;\nfont-weight: 400;\nsrc: local(‘Open Sans’), local(‘OpenSans’), url(../fonts/google/u-WUoqrET9fUeobQW7jkRT8E0i7KZn-EPnyo3HZu7kw.woff) format(‘woff’);\n}\n@font-face {\nfont-family: ‘Open Sans’;\nfont-style: normal;\nfont-weight: 600;\nsrc: local(‘Open Sans Semibold’), local(‘OpenSans-Semibold’), url(../fonts/google/MTP_ySUJH_bn48VBG8sNSha1RVmPjeKy21_GQJaLlJI.woff) format(‘woff’);\n}\n@font-face {\nfont-family: ‘Open Sans’;\nfont-style: italic;\nfont-weight: 300;\nsrc: local(‘Open Sans Light Italic’), local(‘OpenSansLight-Italic’), url(../fonts/google/PRmiXeptR36kaC0GEAetxrsuoFAk0leveMLeqYtnfAY.woff) format(‘woff’);\n}\n@font-face {\nfont-family: ‘Open Sans’;\nfont-style: italic;\nfont-weight: 400;\nsrc: local(‘Open Sans Italic’), local(‘OpenSans-Italic’), url(../fonts/google/xjAJXh38I15wypJXxuGMBtIh4imgI8P11RFo6YPCPC0.woff) format(‘woff’);\n}\n@font-face {\nfont-family: ‘Open Sans’;\nfont-style: italic;\nfont-weight: 600;\nsrc: local(‘Open Sans Semibold Italic’), local(‘OpenSans-SemiboldItalic’), url(../fonts/google/PRmiXeptR36kaC0GEAetxmWeb5PoA5ztb49yLyUzH1A.woff) format(‘woff’);\n}\n")])]),n._v(" "),s("h4",{attrs:{id:"_2-修改-wp-includes-script-loader-php-文件，找到："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改-wp-includes-script-loader-php-文件，找到："}},[n._v("#")]),n._v(" 2.修改 \\wp-includes\\script-loader.php 文件，找到：")]),n._v(" "),s("pre",[s("code",[n._v("$open_sans_font_url = “//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,300,400,600&subset=$subsets”;\n")])]),n._v(" "),s("p",[n._v("替换成：")]),n._v(" "),s("pre",[s("code",[n._v("$open_sans_font_url = “/wp-includes/css/google-font.css”;\n")])]),n._v(" "),s("h4",{attrs:{id:"_3-在wordpress模板文件中找到functions-php，使用“-”注释掉引用google字体库部分即可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-在wordpress模板文件中找到functions-php，使用“-”注释掉引用google字体库部分即可"}},[n._v("#")]),n._v(" 3.在WordPress模板文件中找到functions.php，使用“//”注释掉引用google字体库部分即可")])])}),[],!1,null,null,null);o.default=e.exports}}]);