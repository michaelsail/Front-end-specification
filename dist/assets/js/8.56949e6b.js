(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAABUCAYAAAAiR+rjAAAB1klEQVR4nO3aoU0EURSG0cuEGsgUghgU2wIYli6QBIUiNEAPCAItrCKDpYIJaqp4QNaDY/4le465YsxVX25e5qC19lkAAV16AWB/CRAQI0BAjAABMQIExAgQECNAQMzhj19uzxdc4/94vnxIr7CTPo6e0ivspKv3k/QKu+n0eDtcQECMAAExAgTECBAQMNfjWSdAQMbq4k6AgIS++vW1AAE5AgQsb7yvrvMGBASMtarWXn/5ExrgjwzDsJ0uICBkFiAgZN4IEBAyTQIEZIybGwECEsb67o8AAQHzVG8lQECQAAHL69f10poAATkCBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQECNAQIwAATECBMQIEBAjQECMAAExAgTECBAQI0BAjAABMQIExAgQEDDX41knQEDG6uJOgICEvvr1tQABOQIELG+8r67zBgQEjLWq1l7rML0IsH+GYdhOFxAQMgsQEDJvBAgImSYBAjLGzY0AAQljffdHgICAeaq3EiAgSICA5fXremlNgIAcAQJiBAiIESAgRoCAGAECYgQIiBEgIEaAgBgBAmIECIgRICBGgIAYAQJiDlprn+klgP3kAgJiBAiIESAgRoCAGAECYr4AdNk+L/mTpp4AAAAASUVORK5CYII="},165:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("font",{attrs:{color:"#f00"}},[t._v("兼容性测试：比web浏览器还恐怖的手机浏览器")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("1个操作系统（windows）X 4种浏览器（ie8、firefox、chorme）= 3种情况")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("1个操作系统（windows）X 10 种浏览器（ie6、ie7、ie8、ie9、firefox3.6、firefox、chorme、opera、safari、遨游）+ 1个操作系统（mac） X 1种浏览器（safari）= 11种情况")]),t._v(" "),t._m(4),t._v(" "),n("p",[n("strong",[n("font",{attrs:{color:"#f00"}},[t._v("做过wap站点开发之后，你就会发现…IE6其实已经是很好的浏览器了，真的。")])],1)]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("要做到比较好的兼容性，我们要兼容的手机浏览器至少有二十种情况（手机自带的浏览器+用户可安装的浏览器）")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("ios不在可视范围时页面会往上滚动到可视范围，\n"),n("font",{attrs:{color:"#f00"}},[t._v("但是！！！")]),t._v("微信浏览器中，键盘收起时不会回落，safari是正常的")],1),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("安卓是可以获取到焦点，但是不能拉起键盘，ios连焦点都获取不到")]),t._v(" "),n("p",[t._v("fixed和input一起时，键盘拉起，ios中各种展示不正常，看不到框，或者框跟键盘中间有空隙")]),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("1px转换成rem后在iphone6里面看是好的，但是到6plus上面就没有那条线")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),n("img",{attrs:{src:a(147),width:"288"}}),t._v(" "),t._m(17),t._v(" "),n("p",[t._v("这个不是 BUG，由于自动播放网页中的音频或视频，会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和安卓系统通常都会禁止自动播放和使用JS的触发播放，必须由用户来触发才可以播放。")]),t._v(" "),n("p",[t._v("解决方法思路：先通过用户touchstart触碰，触发播放并暂停（音频开始加载，后面用 JS 再操作就没问题了）。")]),t._v(" "),n("p",[t._v("解决代码：")]),t._v(" "),t._m(18),t._m(19),t._v(" "),n("p",[t._v("设置line-height，padding,带边框的内容在安卓手机中文字总是视觉感偏上，")]),t._v(" "),n("p",[t._v("原因：")]),t._v(" "),n("p",[t._v("1.字体大小不要使用奇数字号，带小数点的更不要提了。也就是说被2整除的整数且不可小于12px。")]),t._v(" "),n("p",[t._v("2.使用rem的单位时造成（根元素如果动态改变时，根元素字体可能不是整数）。")]),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("1、设置字体大小大于12px，然后用transform: scale()缩小到需要的大小")]),t._v(" "),n("p",[t._v("2、在元素外再包一层，使用表格布局display: table-cell")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"基本信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本信息")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("web站点兼容性测试")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("对于web网站，一般来说，目前我们需要兼容的是")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("要求高一点的web网站需要兼容的是")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("wap站兼容性测试")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("手机浏览器有多少种需要兼容")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("影响你wap页面整体效果的还包括：")]),this._v("\n手机型号、\n操作系统、\n浏览器类型、\n屏幕尺寸、\n颜色深度")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"遇到过的奇葩兼容问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遇到过的奇葩兼容问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 遇到过的奇葩兼容问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1、input、textarea")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("input或者textarea获得焦点时")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("如果进入页面默认是要定位到input框，并且需要可以直接拉起键盘可以直接输入，")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2、rem页面1px的线显示问题")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v('3、new Date("2017-08-11 12:00:00")')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("IOS中不支持 - 连接日期\n报错：Invalid Date 需要写成\n"),s("code",[this._v('var d = new Date("2017-08-11 12:00:00".replace(/-/g, "/"));')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("4、class通过css动态排序")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".list")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("40px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("40px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("#myRed")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("-webkit-order")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("coral"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("#myBlue")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("-webkit-order")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lightblue"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("#myGreen")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("-webkit-order")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lightgreen"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("#myPink")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v("-webkit-order")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("pink"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myRedDIV"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myBlueDIV"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myGreenDIV"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myPinkDIV"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("5、移动端 HTML5 audio autoplay 失效问题")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'audio'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("play")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'audio'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pause")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("6、安卓手机line-height不居中")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("解决方法：")])])}],!1,null,null,null);e.options.__file="main.md";s.default=e.exports}}]);