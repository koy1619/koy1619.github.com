(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{422:function(t,v,_){"use strict";_.r(v);var e=_(2),l=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"进行缓存前"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进行缓存前"}},[t._v("#")]),t._v(" 进行缓存前")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("该数据属于短暂保留，例如只保留三天、七天或者一个月，此时建议采用缓存；")]),t._v(" "),_("li",[t._v("该数据在某一个时间段请求量很大，此时建议采用缓存；")]),t._v(" "),_("li",[t._v("随着用户使用，数据不断变化，更新操作比较频繁，此时建议采用缓存；")]),t._v(" "),_("li",[t._v("如果数据量不大，且和应用性能提升不大，数据需要长久保留，此时不建议采用Redis进行缓存，直接使用MySQL等关系型数据库存储即可；")]),t._v(" "),_("li",[t._v("如果数据量很大，但是过了一段时间后，该数据几乎没有什么价值，此时建议采用缓存，并设定过期时间和定时清理该数据的脚本，这样处理可以减轻存储空间，也便于优化系统的数据库层。")])])]),t._v(" "),_("h2",{attrs:{id:"进行缓存后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进行缓存后"}},[t._v("#")]),t._v(" 进行缓存后")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("缓存该key在极端情况下，占用系统内存会有多大？或者说存储的记录大概会达到什么数量级？")]),t._v(" "),_("li",[t._v("缓存该key，过期时间是否方便设置？如果不方便设置，是否可以隔段时间考虑转存到MySQL等关系型数据库中，从而清理缓存，释放内存空间。")]),t._v(" "),_("li",[t._v("缓存该key，思考一下手动删除缓存数据的脚本如何编写，缓存的所有数据，如何区分出有价值的数据进行保留，无价值的便利用脚本进行自动化删除。")]),t._v(" "),_("li",[t._v("使用缓存后，要思考选择恰当的数据结构来完成代码构建。因为一个适合的数据结构不仅使得代码变得更加优雅，后期维护也很方便。")])])]),t._v(" "),_("h2",{attrs:{id:"缓存使用一段时间后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存使用一段时间后"}},[t._v("#")]),t._v(" 缓存使用一段时间后")]),t._v(" "),_("p",[t._v("如果发现某一个key占用内存很大，超出预料，提供的优化建议：")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("分析该key的具体实际功能，和目前的需求，看能否在后续缓存数据时，添加过期时间设定；")]),t._v(" "),_("li",[t._v("考虑在取出缓存数据的时候，能否转存到MySQL等关系型数据库，如果能够转存成功，则在此处可以进行立即执行删除该条缓存数据的方法；后续取数据时，可采用先查询Redis数据库，未查到再次查询一下MySQL等关系型数据库；")]),t._v(" "),_("li",[t._v("依据已经缓存的数据，看能够依据数据中的字段或者相关属性对已经缓存的数据进行过滤查询，把那些不重要的数据通过脚本进行手动删除处理。")])])])])}),[],!1,null,null,null);v.default=l.exports}}]);