(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{432:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"利用svnlistparentpath增加http浏览仓库根目录的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用svnlistparentpath增加http浏览仓库根目录的功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 利用SVNListParentPath增加http浏览仓库根目录的功能")]),t._v(" "),a("p",[t._v("使用SVNParentPath的时候，直接访问根目录的时候，总是得到以下错误提示：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v(" Forbidden\n\nForbidden\nYou don't have permission to access / on this server.\n")])])]),a("p",[t._v("下面的办法可以搞定它：")]),t._v(" "),a("p",[t._v("一、首先，Subversion1.3及以后版本支持SVNListParentPath ON，之前的版本只能使用PHP自己做。")]),t._v(" "),a("p",[t._v("二、Location 设置中最后要加上**/**，应该是"),a("code",[t._v("<Location /svn/>")]),t._v("而不是"),a("code",[t._v("<Location /svn>")]),t._v("否则可能不能访问。")]),t._v(" "),a("p",[t._v("三、通过“http://localhost/svn/” 来访问仓库列表，如果想让“http://localhost/svn”也起作用的话，需要在"),t._v("的后面增加重定向的设置：RedirectMatch ^(/svn)$ $1/  ，当然也可以采用RewriteEngine之类的办法。")]),t._v(" "),a("p",[t._v("四、修改后的httpd.conf的对应部分如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Location /svn/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                   DAV svn\n                   SVNListParentPath on\n                   SVNParentPath /code/svndata\n                   AuthType Basic\n                   AuthName "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Subversion repository"')]),t._v("\n                   AuthUserFile /code/svndata/passwd\n                   AuthzSVNAccessFile /code/svndata/authz\n                   Require valid-user\n       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/Location"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("TIP: SVNPath 与 SVNParentPath区别")])]),t._v(" "),a("p",[t._v("dav_svn.conf 的配置中有 SVNPath 与 SVNParentPath 两个选项.\nSVNPath用于只有一个项目的情况,此时如果在主目录下面再建新项目,则不能访问.提示没有权限.\n如果有多个项目的话，此时应该使用SVNParentPath来设置父目录来设置项目的父目录,这样子目录里面可以有多个项目了。然后auth文件里面可以定义子目录的权限，apache的/etc/httpd/conf.d/subversion.conf 配置文件里面设置一个location就可以了。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Location /svn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDAV svn\nSVNParentPath /tmp/svntest/\nAuthType Basic\nAuthName "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Subversion"')]),t._v("\nAuthUserFile /tmp/svntest/passwd\nAuthzSVNAccessFile /tmp/svntest/authz\nRequire valid-user\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/Location"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("以后多个子项目都是用同样的认证文件，访问方式就为 http://ip/svn/pro1    http://ip/svn/pro2")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@svn svntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\nauthz  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v("  pro1  pro2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@svn svntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pwd")]),t._v("\n/tmp/svntest\n")])])]),a("p",[t._v("认证文件给子项目赋权。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@svn svntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat authz ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pro1:/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nuser1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rw\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pro2:/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nuser1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rw\n")])])]),a("p",[t._v("参考\nhttp://blog.csdn.net/islq/article/details/666911\nhttp://54im.com/svn/svnpath-svnparentpath.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);