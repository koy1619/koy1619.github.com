(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{423:function(t,e,_){"use strict";_.r(e);var l=_(1),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"jekyll目录结构与变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jekyll目录结构与变量","aria-hidden":"true"}},[t._v("#")]),t._v(" Jekyll目录结构与变量")]),t._v(" "),_("p",[_("strong",[t._v("Jekyll 目录及一些说明")])]),t._v(" "),_("p",[t._v("Jekyll 标准目录树")]),t._v(" "),_("pre",[_("code",[t._v("_config.yml   Jekyll的配置文件\n_includes     include 文件所在的文件夹\n_layouts      模版文件夹\n_posts        自己要发布的内容\n_sites        预览时产生的文件都放在该文件夹中\n")])]),t._v(" "),_("p",[t._v("Jekyll的安装及配置")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("_includes文件夹中所放的文件是最终要放到模版中的一些代码片段。")])])]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("_layouts中放的一些模版，模版是用包含page或post内容的。Jekyll的模版使用HTML语法来写，并包含YAML Front Matter。所有的模版都可用Liquid来与网站进行交互。所的的模版都可以使用全局变量site和page，site变量包含该网站所有可以接触得到的内容和元数据(meta-data)，page变量包含的是当前渲染的page或post的所有可以接触得到的数据。")])])]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("_post文件夹中放的是自己要发布的post文章。post文件的命名规则为YEAR-MONTH-DATE-title.MARKUP，使用rake post会自动将post文件命名合适。而对于page，所有放在根目录下或不以下划线开头的文件夹中有格式的文件都会被Jekyll处理成page。这里说的有格式是指文件含有YAML Front Matter。所有的post和page都要用markdown或者texile或者HTML语法来写，并可以包含Liquid模版的语法。还要有 YAML Front Matter (Jekyll只处理具有YAML Front Matter的文件)。YAML Front Matter必须放在文件的开头，一对---之间，用户可在这一对---间设置预先定义的变量或用户自己的数据")])])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("Jekyll模板全局变量")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("变量")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("site")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("全站的信息+_config.yml文件中的配置选项")])]),t._v(" "),_("tr",[_("td",[t._v("page")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("这个变量中包含YAML前置数据,另外加上两个额外的变量值:url和content。")])]),t._v(" "),_("tr",[_("td",[t._v("content")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("在布局模板文件中，这里变量包含了页面的子视图。这个变量将会把渲染后的内容插入到模板文件中。这个变量不能在文章和页面文件中使用。")])]),t._v(" "),_("tr",[_("td",[t._v("paginator")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("一旦paginate配置选项被设置了，这个变量才能被使用。")])])])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("Jekyll模板Site变量")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("变量")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("site.time")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("当前的时间(当你运行Jekyll时的时间)")])]),t._v(" "),_("tr",[_("td",[t._v("site.posts")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("一个按时间逆序的文章列表。")])]),t._v(" "),_("tr",[_("td",[t._v("site.related_posts")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("如果当前被处理的页面是一个文章文件，那这个变量是一个包含了最多10篇相关文章的列表。默认来说，这些相关文章是低质量但计算快的。为了得到高质量但计算慢的结果，运行Jekyll命令时可以加上--lsi选项。(潜在语意索引)")])]),t._v(" "),_("tr",[_("td",[t._v("site.categories.CATEGORY")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("所有在CATEGORY分类中的文章列表")])]),t._v(" "),_("tr",[_("td",[t._v("site.tags.TAG")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("所有拥有TAG标签的文章的列表")])]),t._v(" "),_("tr",[_("td",[t._v("site.[CONFIGURATION_DATA]")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("截止0.5.2版本，所有在_config.yml中的数据都能够通过site变量调用。举例来说，如果你有一个这样的选项在你的配置文件中:url: http://higrid.net，那在文章和页面文件中可以这样调用{ { site.url } }。Jekyll并不会自动解析修改过的_config.yml文件，你想要启用新的设置选项，你需要重启Jekyll")])])])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("Jekyll模板Page变量")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("变量")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("page.content")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("页面中未渲染的内容")])]),t._v(" "),_("tr",[_("td",[t._v("page.title")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("文章的标题")])]),t._v(" "),_("tr",[_("td",[t._v("page.url")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("除去域名以外的URL，例子:/2013/12/14/higrid-net.html")])]),t._v(" "),_("tr",[_("td",[t._v("page.date")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("指定每一篇文章的时间，这个选项能够覆盖一篇文章中前置数据设置的时间，它的格式是这样的:YYYY-MM-DD HH:MM:SS")])]),t._v(" "),_("tr",[_("td",[t._v("page.id")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("每一篇文章的唯一标示符(在RSS中非常有用) 例子：/2008/12/14/higrid-net")])]),t._v(" "),_("tr",[_("td",[t._v("page.categories")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("这篇文章隶属的分类的一个列表，分类是通过在_post目录中的目录结构推导而来的。举例来说，在路径/work/code/_posts/2008-12-24-closures.textile下的文件，这个变量将会是[work,code]。这个变量也能在YAML前置数据中被指定。")])]),t._v(" "),_("tr",[_("td",[t._v("page.tags")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("这篇文章的标签的列表。这些数据能够在YAML前置数据中指定")])]),t._v(" "),_("tr",[_("td",[t._v("page.next")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("按时间序的下一篇文章")])]),t._v(" "),_("tr",[_("td",[t._v("page.content")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("按时间序的上一篇文章")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("注意:任何你自己指定的自定义前置数据都能够通过page调用。举例来说，如果你在页面的前置数据中设置了custom_css: true，那这个值可以在模板可以这样调用:page.custom_css")])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("Jekyll模板Paginator变量")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("变量")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("paginator.per_page")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("每一个页面上文章的数量")])]),t._v(" "),_("tr",[_("td",[t._v("paginator.posts")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("当前页面上可用的文章")])]),t._v(" "),_("tr",[_("td",[t._v("paginator.total_posts")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("所有文章的数量")])]),t._v(" "),_("tr",[_("td",[t._v("paginator.total_pages")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("所有页面的数量")])]),t._v(" "),_("tr",[_("td",[t._v("paginator.page")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("当前页面的数量")])]),t._v(" "),_("tr",[_("td",[t._v("paginator.previous_page")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("前面的页面的数量")])]),t._v(" "),_("tr",[_("td",[t._v("paginator.next_page")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("接下来的的页面的数量")])])])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("Post或Page的创建及发布")])]),t._v(" "),_("p",[t._v("创建Post文章")]),t._v(" "),_("pre",[_("code",[t._v('rake post title="文章标题"\n')])]),t._v(" "),_("p",[t._v('会自动创建一个具有合适文件名和YAML Front Matter的文件(使用时将"文章标题"替换成你要创建的文章的标题)。')]),t._v(" "),_("p",[t._v("创建Page页面")]),t._v(" "),_("pre",[_("code",[t._v('rake page name="页面名称.md"   或者\nrake page name="pages/页面名称.md"\n')])]),t._v(" "),_("p",[t._v("发布Post或Page")]),t._v(" "),_("pre",[_("code",[t._v("git add .\ngit commit -m '一些说明'\ngit push origin master\n")])]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("["),_("a",{attrs:{href:"http://jekyllrb.com/docs/variables/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),_("OutboundLink")],1),t._v("]")])])])}),[],!1,null,null,null);e.default=v.exports}}]);