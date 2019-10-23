(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{518:function(e,t,i){"use strict";i.r(t);var o=i(2),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"repair-cisco-vpnclient-on-windows10"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#repair-cisco-vpnclient-on-windows10"}},[e._v("#")]),e._v(" Repair Cisco vpnclient on windows10")]),e._v(" "),i("h2",{attrs:{id:"fyi"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fyi"}},[e._v("#")]),e._v(" fyi")]),e._v(" "),i("p",[e._v("由于此问题是windows10刚发布，但是cisco单方面并没有及时修复，并且就目前看来是全球的工程师都碰到的一个很紧急棘手的问题")]),e._v(" "),i("p",[e._v("在查找修复方案的时候;得到好多歪果仁的帮助，特地写了一片洋文，希望可以帮到更多的人，蹩脚的E文如有问题请留言或者邮件我及时勘误，不甚感激！")]),e._v(" "),i("p",[e._v("Microsoft released last week by the windows10, after the upgrade "),i("code",[e._v("vpnclient-winx64-msi-5.0.07.0440-k9.exe")]),e._v(" found this installation as wrong.")]),e._v(" "),i("p",[i("img",{attrs:{src:"http://r.loli.io/eAVbii.png",alt:""}})]),e._v(" "),i("p",[e._v("First we first fix, so that vpnclient-winx64-msi-5.0.07.0440-k9.exe is properly installed")]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"fix-install-error"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fix-install-error"}},[e._v("#")]),e._v(" Fix Install Error")]),e._v(" "),i("p",[e._v("Download the 2 software "),i("strong",[i("code",[e._v("winfix.exe")])]),e._v(" and "),i("strong",[i("code",[e._v("dneupdate64.msi")])])]),e._v(" "),i("p",[e._v("first install "),i("strong",[i("code",[e._v("winfix.exe")])])]),e._v(" "),i("p",[e._v("and then install "),i("strong",[i("code",[e._v("dneupdate64.msi")])])]),e._v(" "),i("p",[e._v("and finally extract the "),i("strong",[i("code",[e._v("vpnclient-winx64-msi-5.0.07.0440-k9.exe")])]),e._v(", and execute the installation file "),i("strong",[i("code",[e._v("vpnclient_setup.exe")])])]),e._v(" "),i("p",[e._v("Now Cisco VPN clients has been successfully installed on windows10 ！")]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"fix-dialing-error"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fix-dialing-error"}},[e._v("#")]),e._v(" Fix Dialing Error")]),e._v(" "),i("p",[e._v("But, the back of the account password when I dial the wrong")]),e._v(" "),i("p",[i("code",[e._v("Secure VPN Connection terminated locally by the Client.")]),e._v(" "),i("code",[e._v("Reason 433: Reason not specified by peer.")])]),e._v(" "),i("p",[e._v("Continue to search for information to fix this funking problem ！！！")]),e._v(" "),i("p",[e._v("The likely reason was apparently due to the DNE LightWeight Filter network client not being properly installed by the Cisco Systems VPN installer.")]),e._v(" "),i("p",[e._v("To solve this, please try to do the following in the exact order:")]),e._v(" "),i("p",[e._v("A) First, uninstall any Cisco VPN Client software you may have installed earlier;")]),e._v(" "),i("p",[e._v("B) Then uninstall any DNE updater software(s) you may have installed earlier;")]),e._v(" "),i("p",[e._v("C) Reboot your computer.")]),e._v(" "),i("p",[e._v("D) Run winfix.exe, to ensure the DNE is properly cleaned up.")]),e._v(" "),i("p",[e._v("E) Reboot your computer again.")]),e._v(" "),i("p",[e._v("F) Download Sonic VPN software from here: 32-bit here or 64-bit here.")]),e._v(" "),i("p",[e._v("G) Install the Sonic VPN software (which was able to install the right version of the DNE);")]),e._v(" "),i("p",[e._v("H) Reboot your computer.")]),e._v(" "),i("p",[e._v("I) Reinstall the Cisco VPN Client software again. (You do not need to uninstall the Sonic VPN software from step G). If you face a version check issue, run the msi file instead of the exe file")]),e._v(" "),i("p",[e._v("J) Reboot your computer.")]),e._v(" "),i("p",[e._v("K) Your Cisco VPN Client should now work in Windows 10!")]),e._v(" "),i("p",[e._v("Finally we dial again, what the funking！！ reporting error again ！！")]),e._v(" "),i("p",[i("code",[e._v("vpn 422 failed to enable virtual adapter")])]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"finally-fix-this-problem"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#finally-fix-this-problem"}},[e._v("#")]),e._v(" Finally Fix this problem")]),e._v(" "),i("p",[e._v("Enter the registry regedit")]),e._v(" "),i("p",[i("code",[e._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\CVirtA")]),e._v(" find "),i("code",[e._v("DisplayName")]),e._v("  key")]),e._v(" "),i("p",[e._v("Value of X86 system change "),i("strong",[i("code",[e._v("@oem16.inf,%CVirtA_Desc%;Cisco Systems VPN Adapter")])]),e._v(" to "),i("strong",[i("code",[e._v("Cisco Systems VPN Adapter")])])]),e._v(" "),i("p",[e._v("Value of 64 system change "),i("strong",[i("code",[e._v("@oem16.inf,%CVirtA_Desc%;Cisco Systems VPN Adapter for 64-bit Windows")])]),e._v(" to "),i("strong",[i("code",[e._v("Cisco Systems VPN Adapter for 64-bit Windows")])])]),e._v(" "),i("p",[e._v("And then landed on the dial, success!!\nNow the problem of the egg pain is completely solved!!!")]),e._v(" "),i("hr"),e._v(" "),i("p",[e._v("bove software download address")]),e._v(" "),i("p",[e._v("for 64bit\n"),i("a",{attrs:{href:"ftp://files.citrix.com/winfix.exe"}},[e._v("ftp://files.citrix.com/winfix.exe")]),e._v(" "),i("a",{attrs:{href:"ftp://files.citrix.com/dneupdate64.msi"}},[e._v("ftp://files.citrix.com/dneupdate64.msi")]),e._v("\nhttp://www.gleescape.com/wp-content/uploads/2014/09/sonic64.zip")]),e._v(" "),i("p",[e._v("for 32bit\n"),i("a",{attrs:{href:"ftp://files.citrix.com/winfix.exe"}},[e._v("ftp://files.citrix.com/winfix.exe")]),e._v(" "),i("a",{attrs:{href:"ftp://ftpsupport.citrix.com/dneupdate.msi"}},[e._v("ftp://ftpsupport.citrix.com/dneupdate.msi")]),e._v("\nhttp://www.gleescape.com/wp-content/uploads/2014/09/sonic32.zip")]),e._v(" "),i("p",[e._v("Chinese users may download speed will be very slow, I deliberately uploaded to Baidu cloud")]),e._v(" "),i("p",[e._v("http://pan.baidu.com/s/1o6vcMz4")]),e._v(" "),i("p",[e._v("Reference website:\nhttp://www.itsystemadmin.com/error-27850-unable-to-manage-networking-component/\nhttp://www.gleescape.com/posts/2917\nhttp://blog.itpub.net/9697/viewspace-1437036/")]),e._v(" "),i("p",[e._v("Thanks them very much!!!")])])}),[],!1,null,null,null);t.default=n.exports}}]);