(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{520:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"centos上搭建私有maven仓库-迁移，升级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos上搭建私有maven仓库-迁移，升级"}},[s._v("#")]),s._v(" CentOS上搭建私有maven仓库(迁移，升级)")]),s._v(" "),n("h2",{attrs:{id:"安装jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk"}},[s._v("#")]),s._v(" 安装JDK")]),s._v(" "),n("p",[s._v("此处省略。。。")]),s._v(" "),n("h2",{attrs:{id:"安装maven"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装maven"}},[s._v("#")]),s._v(" 安装maven")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.5.0/binaries/apache-maven-3.5.0-bin.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf apache-maven-3.5.0-bin.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" apache-maven-3.5.0  /usr/local/\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PATH='),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/local/apache-maven-3.5.0/bin/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\nmvn -v\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"安装sonatype-nexus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装sonatype-nexus"}},[s._v("#")]),s._v(" 安装Sonatype Nexus")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.sonatype.com/nexus/oss/nexus-2.11.1-01-bundle.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf nexus-2.11.1-01-bundle.tar.gz \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nexus-2.11.1-01 /usr/local/nexus\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"配置sonatype-nexus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置sonatype-nexus"}},[s._v("#")]),s._v(" 配置Sonatype Nexus")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/nexus/conf/nexus.properties \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jetty section")]),s._v("\napplication-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问端口")]),s._v("\napplication-host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nnexus-webapp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${bundleBasedir}")]),s._v("/nexus  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#程序目录")]),s._v("\nnexus-webapp-context-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/nexus     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问路径")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nexus section")]),s._v("\nnexus-work"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${bundleBasedir}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/sonatype-work/nexus "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据存放路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("runtime")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${bundleBasedir}")]),s._v("/nexus/WEB-INF\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"sonatype-nexus启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonatype-nexus启动"}},[s._v("#")]),s._v(" Sonatype Nexus启动")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/nexus/bin/nexus /etc/init.d/nexus\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/init.d/nexus\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改以下两个参数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NEXUS_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/nexus"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUN_AS_USER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("启动Nexus")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/init.d/nexus\n/etc/init.d/nexus start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("nexus安装完成以后，一般在路径： http://sever_ip:8081/nexus/")]),s._v(" "),n("p",[s._v("打开以后会出现配置管理页面，说明安装成功了。点击右上角“Log in”，输入用户名和密码（默认用户名：admin密码：admin123）登录。")]),s._v(" "),n("h2",{attrs:{id:"升级nexus3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#升级nexus3"}},[s._v("#")]),s._v(" 升级nexus3")]),s._v(" "),n("p",[s._v("后续要使用docker虚拟容器,需要把nexus2升级到nexus3")]),s._v(" "),n("p",[s._v("https://www.sonatype.com/download-oss-sonatype?hsCtaTracking=10655413-f621-4c62-be46-df84cf6b6b90%7C79f798b3-f0df-4370-b569-0eda6e14390e")]),s._v(" "),n("p",[s._v("由于最新版本"),n("code",[s._v("3.3.1-01")]),s._v("必须通过"),n("code",[s._v("2.14.4-03")]),s._v("版本升级(前面已经安装了"),n("code",[s._v("2.11.1")]),s._v("版本,尝试过"),n("code",[s._v("2.11.1")]),s._v("无法直接升级到"),n("code",[s._v("3.3.1-01")]),s._v(")")]),s._v(" "),n("p",[s._v("所以需要安装"),n("code",[s._v("2.14.4-03")]),s._v("版本过渡升级")]),s._v(" "),n("h3",{attrs:{id:"安装nexus-2-14-4-03"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装nexus-2-14-4-03"}},[s._v("#")]),s._v(" 安装nexus-2.14.4-03")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /opt/nexus/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir nexus-2.14.4")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd nexus-2.14.4")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://sonatype-download.global.ssl.fastly.net/nexus/oss/nexus-2.14.4-03-bundle.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar zxvf nexus-2.14.4-03-bundle.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n总用量 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("71416")]),s._v("\ndrwxr-xr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" root root     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":19 nexus-2.14.4-03\n-rw-r--r--. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("73117829")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("月  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":39 nexus-2.14.4-03-bundle.tar.gz\ndrwxr-xr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" root root     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("月  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":12 sonatype-work\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd nexus-2.14.4-03")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim bin/nexus")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUN_AS_USER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim conf/nexus.properties ")]),s._v("\napplication-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./bin/nexus start")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("访问 http://10.10.3.225:8082/nexus")]),s._v(" "),n("h3",{attrs:{id:"_2-11-1迁移到2-14-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-1迁移到2-14-4"}},[s._v("#")]),s._v(" 2.11.1迁移到2.14.4")]),s._v(" "),n("p",[s._v("2.X版本的nexus可以直接拷贝仓库目录进行迁移")]),s._v(" "),n("p",[s._v("拷贝2.11.1仓库目录到2.14.4-03")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nexus-2.11.1/sonatype-work\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zcvf nexus.tar.gz nexus/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" nexus.tar.gz root@10.10.3.225:/opt/nexus/nexus-2.14.4/sonatype-work\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root@10.10.3.225")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/nexus/nexus-2.14.4/sonatype-work\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf nexus\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf nexus.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/nexus/nexus-2.14.4/nexus-2.14.4-03\n./bin/nexus restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("访问 http://10.10.3.225:8082/nexus 可以看到仓库已经迁移成功")]),s._v(" "),n("h3",{attrs:{id:"安装nexus-3-3-1-01"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装nexus-3-3-1-01"}},[s._v("#")]),s._v(" 安装nexus-3.3.1-01")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /opt/nexus/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir nexus-3.3.1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd nexus-3.3.1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget https://sonatype-download.global.ssl.fastly.net/nexus/3/nexus-3.3.1-01-unix.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar zxvf nexus-3.3.1-01-unix.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n总用量 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("104836")]),s._v("\ndrwxr-xr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" root root      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("月  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":58 nexus-3.3.1-01\n-rw-r--r--.  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("107336558")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("月  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":46 nexus-3.3.1-01-unix.tar.gz\ndrwxr-xr-x.  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" root root      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("月  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":58 sonatype-work\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd nexus-3.3.1-01")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim etc/nexus-default.properties")]),s._v("\napplication-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8083")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./bin/nexus start")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("访问 http://10.10.3.225:8083/nexus")]),s._v(" "),n("h3",{attrs:{id:"迁移数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迁移数据"}},[s._v("#")]),s._v(" 迁移数据")]),s._v(" "),n("h4",{attrs:{id:"配置nexus-2-14-4的upgrade-agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置nexus-2-14-4的upgrade-agent"}},[s._v("#")]),s._v(" 配置"),n("strong",[s._v("nexus-2.14.4")]),s._v("的"),n("strong",[s._v("Upgrade:Agent")])]),s._v(" "),n("p",[s._v("登陆 http://10.10.3.225:8082/nexus")]),s._v(" "),n("p",[s._v("Administration--\x3eCapabilities--\x3eNew--\x3eUpgrade: Agent--\x3eAccess Token--\x3e12345678")]),s._v(" "),n("p",[s._v("上面的流程是登陆"),n("strong",[s._v("nexus-2.14.4")]),s._v("配置"),n("code",[s._v("Upgrade:Agent")]),s._v("和"),n("code",[s._v("Access Token")]),s._v("在此我们配置的是12345678")]),s._v(" "),n("h4",{attrs:{id:"配置nexus-3-3-1的upgrade"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置nexus-3-3-1的upgrade"}},[s._v("#")]),s._v(" 配置"),n("strong",[s._v("nexus-3.3.1")]),s._v("的"),n("strong",[s._v("Upgrade")])]),s._v(" "),n("p",[s._v("登陆 http://10.10.3.225:8083/nexus")]),s._v(" "),n("p",[s._v("Administration--\x3eSystem--\x3eCapabilities--\x3eCreate capability--\x3eCreate Upgrade Capability")]),s._v(" "),n("h4",{attrs:{id:"通过task迁移数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过task迁移数据"}},[s._v("#")]),s._v(" 通过Task迁移数据")]),s._v(" "),n("p",[s._v("Administration--\x3eSystem--\x3eUpgrade--\x3eNext--\x3eURL&access token--\x3eNext...")]),s._v(" "),n("p",[s._v("URL: http://10.10.3.225:8082/nexus\nAccess Token: 12345678")]),s._v(" "),n("p",[s._v("数据迁移完毕，验证仓库数据。")]),s._v(" "),n("p",[s._v("参考：")]),s._v(" "),n("p",[s._v("http://www.ilanni.com/?p=12366")])])}),[],!1,null,null,null);a.default=e.exports}}]);