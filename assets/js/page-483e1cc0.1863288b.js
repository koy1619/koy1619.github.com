(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{420:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"多个excel文件合并成一个excel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个excel文件合并成一个excel"}},[s._v("#")]),s._v(" 多个EXCEL文件合并成一个EXCEL")]),s._v(" "),a("p",[s._v("经常会接到导码需求，附件有txt的也有excel的，动辄上百个文件")]),s._v(" "),a("p",[s._v("如果是文本可以用"),a("code",[s._v("cat xxx.txt >> yyy.txt")]),s._v("来合并")]),s._v(" "),a("p",[s._v("那如果是excel就不好办了，今天就遇到了")]),s._v(" "),a("p",[s._v("要把上百个EXCEL文件合并成新一个文件")]),s._v(" "),a("p",[s._v("合并方法如下：")]),s._v(" "),a("p",[s._v("1.需要把多个excel表都放在同一个文件夹里面，并在这个文件夹里面新建一个excel。")]),s._v(" "),a("p",[s._v("2.打开新建的excel表，并右键单击sheet1，找到"),a("code",[s._v("查看代码")]),s._v("，单击进去。进去之后就看到了宏计算界面。")]),s._v(" "),a("p",[s._v("3.然后把下面这些宏计算的代码复制进去，然后找到工具栏上面的"),a("code",[s._v("运行")]),s._v("下的"),a("code",[s._v("运行子过程/用户窗体")]),s._v("，代码如下:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Sub 合并当前目录下所有工作簿的全部工作表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nDim MyPath, MyName, AWbName\nDim Wb As Workbook, WbN As String\n\nDim G As Long\n\nDim Num As Long\n\nDim BOX As String\n\nApplication.ScreenUpdating "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" False\n\nMyPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ActiveWorkbook.Path\n\nMyName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(' & "')]),s._v("*.xls"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('")\n\nAWbName = ActiveWorkbook.Name\n\nNum = 0\n\nDo While MyName <> "')]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\nIf MyName <> AWbName Then\n\nSet Wb = Workbooks.Open(MyPath & "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" & MyName)\n\nNum = Num + 1\n\nWith Workbooks(1).ActiveSheet\n\n.Cells(.Range("')]),s._v("B65536"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('").End(xlUp).Row + 2, 1) = Left(MyName, Len(MyName) - 4)\n\nFor G = 1 To Sheets.Count\n\nWb.Sheets(G).UsedRange.Copy .Cells(.Range("')]),s._v("B65536"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('").End(xlUp).Row + 1, 1)\n\nNext\n\nWbN = WbN & Chr(13) & Wb.Name\n\nWb.Close False\n\nEnd With\n\nEnd If\n\nMyName = Dir\n\nLoop\n\nRange("')]),s._v("B1"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('").Select\n\nApplication.ScreenUpdating = True\n\nMsgBox "')]),s._v("共合并了"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" & Num & "')]),s._v("个工作薄下的全部工作表。如下："),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" & Chr(13) & WbN, vbInformation, "')]),s._v('提示"\n\nEnd Sub\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])]),a("p",[s._v("4.点击运行之后，等待合并（合并文件越多耗时越久），等运行完毕，会有提示，点确定就可以了；查看合并后的数据。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("ps: 被合并excel版本必须相同，上面代码是合并后缀为"),a("code",[s._v("xls")]),s._v("的excel, 如果是Excel2007那就要改为"),a("code",[s._v("xlsx")])])])]),s._v(" "),a("p",[s._v("转载自：")]),s._v(" "),a("p",[s._v("https://zhidao.baidu.com/question/96195372.html")])])}),[],!1,null,null,null);n.default=t.exports}}]);