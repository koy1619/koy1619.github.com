(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{459:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ocr之tesseract的linux下安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ocr之tesseract的linux下安装"}},[t._v("#")]),t._v(" OCR之Tesseract的linux下安装")]),t._v(" "),s("p",[t._v("今天应公司要求需要转换扫描出来的电子书jpg格式到文本格式需要，找了很多转换工具大都不进入人意，后来同事给我介绍tesseract。")]),t._v(" "),s("p",[t._v("后来了解了一下此软件")]),t._v(" "),s("p",[t._v("光学字符识别(OCR,Optical Character Recognition)是指对文本资料进行扫描，然后对图像文件进行分析处理，获取文字及版面信息的过程。OCR技术非常专业，一般多是印刷、打印行业的从业人员使用，可以快速的将纸质资料转换为电子资料。项目源码可从http://code.google.com/p/tesseract-ocr/downloads/list获得")]),t._v(" "),s("p",[t._v("关于windows下的安装网上有很多教程如此篇"),s("a",{attrs:{href:"http://www.cnblogs.com/brooks-dotnet/archive/2010/10/05/1844203.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.cnblogs.com/brooks-dotnet/archive/2010/10/05/1844203.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下面我写一下linux下的安装教程以供参考！")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("准备工作:")]),t._v(" "),s("p",[t._v("编译环境: gcc gcc-c++ make 这个环境一般机器都具备,可以忽略,若果没有可以用下面yum安装一下")]),t._v(" "),s("pre",[s("code",[t._v("yum install gcc gcc-c++ make\n")])]),t._v(" "),s("p",[t._v("安装需要的赖的包: autoconf automake libtool libjpeg-devel libpng-devel libtiff-devel zlib-devel leptonica(1.67以上)")]),t._v(" "),s("p",[t._v("##1. autoconf automake libtool libjpeg-devel libpng-devel libtiff-devel zlib-devel 可以通过yum安装:**"),s("br"),t._v("\nyum install autoconf automake libtool\nyum install libjpeg-devel libpng-devel libtiff-devel zlib-devel")]),t._v(" "),s("p",[t._v("##2. leptonica 需要源码编译安装**"),s("br"),t._v("\n下载 leptonica 包，解压后切换到 leptonica-1.68 根目录")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://www.leptonica.org/source/leptonica-1.68.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" leptonica-1.68\n./configure\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("##3.tesseract安装:\n依赖包安装完毕后开始安装tesseract"),s("br"),t._v("\n下载 tesseract-3.01 安装包,解压后切换到 tesseract-3.01 根目录")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://tesseract-ocr.googlecode.com/files/tesseract-3.01.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tesseract-3.01\n./autogen.sh\n./configure\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\nldconfig\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("友情提示：如果在make时遇到类似 strngs.h:1: error: stray ‘\\357′ in program 的错误，请将 tesseract-3.01/ccutil/strngs.h 文件转为 ANSI 编码保存,再重新编译！关于转码问题清参考此文http://blog.csdn.net/zhuying_linux/article/details/7084518")]),t._v(" "),s("p",[t._v("##4.语言包安装\ntesseract英文语言包安装:"),s("br"),t._v("\n下载 tesseract-3.01 英文语言包"),s("br"),t._v("\n解压后将 tesseract-ocr/tessdata 下的所有文件全部拷贝到 /usr/local/share/tessdata 下")]),t._v(" "),s("pre",[s("code",[t._v("wget http://tesseract-ocr.googlecode.com/files/tesseract-ocr-3.01.eng.tar.gz\ntar zxvf tesseract-ocr-3.01.eng.tar.gz<br />\ncp tesseract-ocr/tessdata /usr/local/share/tessdata`\n")])]),t._v(" "),s("p",[t._v("tesseract中文语言包安装:")]),t._v(" "),s("p",[t._v("点此下载[chi_sim.traineddata.gz][1]解压后将chi_sim.traineddata拷贝到 /usr/local/share/tessdata下")]),t._v(" "),s("p",[t._v("至此安装完毕，下面开始验证一下！")]),t._v(" "),s("p",[t._v("转英文文档的方法："),s("br"),t._v("\n切换到解压后的 tesseract-3.01 根目录(这个目录下有一个自带的 phototest.tif 可以做测试用)"),s("br"),t._v("\n输入")]),t._v(" "),s("pre",[s("code",[t._v("tesseract phototest.tif phototest -l eng\n")])]),t._v(" "),s("p",[t._v("可以看到输出如下信息")]),t._v(" "),s("pre",[s("code",[t._v("Tesseract Open Source OCR Engine v3.01 with Leptonica\nPage 0\n")])]),t._v(" "),s("p",[t._v("这时应该在当前目录生成一个 phototest.txt 文本文件,内容就是 phototest.tif 显示的文字.")]),t._v(" "),s("p",[t._v("转中文文档的方法："),s("br"),t._v("\n上传要转换的中文文档图片到/tesseract-3.01目录下"),s("br"),t._v("\n输入")]),t._v(" "),s("pre",[s("code",[t._v("tesseract chi.tif chi -l chi_sim\n")])]),t._v(" "),s("p",[t._v("此时当前目录就会有一个chi.txt的文本文件，内容就是chi.tif显示的中文文字。（不过此中文语言包最后更新是2010年效果实在是差强人意，不知道以后会不会更新）")]),t._v(" "),s("p",[t._v("这里注意命令的格式：图片名称要加上扩展名.tif，输出文件和语言包不需要加扩展名。")])])}),[],!1,null,null,null);e.default=n.exports}}]);