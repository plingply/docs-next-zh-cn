(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{614:function(s,t,a){"use strict";a.r(t);var e=a(57),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title)+" "),a("MigrationBadges",{attrs:{badges:s.$frontmatter.badges}})],1),s._v(" "),a("h2",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),a("p",[s._v("过渡类名 "),a("code",[s._v("v-enter")]),s._v(" 修改为 "),a("code",[s._v("v-enter-from")]),s._v("、过渡类名 "),a("code",[s._v("v-leave")]),s._v(" 修改为 "),a("code",[s._v("v-leave-from")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_2-x-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-语法"}},[s._v("#")]),s._v(" 2.x 语法")]),s._v(" "),a("p",[s._v("在v2.1.8版本之前, 为过渡指令提供了两个过渡类名对应初始和激活状态。")]),s._v(" "),a("p",[s._v("在 v2.1.8 版本中, 引入 "),a("code",[s._v("v-enter-to")]),s._v(" 来定义 enter 或 leave 变换之间的过渡动画插帧, 为了向下兼容, 并没有变动 "),a("code",[s._v("v-enter")]),s._v(" 类名：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".v-enter,\n.v-leave-to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".v-leave,\n.v-enter-to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("这样做会带来很多困惑, 类似 "),a("em",[s._v("enter")]),s._v(" 和 "),a("em",[s._v("leave")]),s._v(" 含义过于宽泛并且没有遵循类名钩子的命名约定。")]),s._v(" "),a("h2",{attrs:{id:"_3-x-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-语法"}},[s._v("#")]),s._v(" 3.x 语法")]),s._v(" "),a("p",[s._v("为了更加明确易读，我们现在将这些初始状态重命名为：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".v-enter-from,\n.v-leave-to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".v-leave-from,\n.v-enter-to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("现在，这些状态之间的区别就清晰多了。")]),s._v(" "),a("p",[a("code",[s._v("<transition>")]),s._v(" 组件相关属性名也发生了变化：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("leave-class")]),s._v(" 已经被重命名为 "),a("code",[s._v("leave-from-class")]),s._v(" (在渲染函数或 JSX 中可以写为："),a("code",[s._v("leaveFromClass")]),s._v(")")]),s._v(" "),a("li",[a("code",[s._v("enter-class")]),s._v(" 已经被重命名为 "),a("code",[s._v("enter-from-class")]),s._v(" (在渲染函数或 JSX 中可以写为："),a("code",[s._v("enterFromClass")]),s._v(")")])]),s._v(" "),a("h2",{attrs:{id:"迁移策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移策略"}},[s._v("#")]),s._v(" 迁移策略")]),s._v(" "),a("ol",[a("li",[s._v("将 "),a("code",[s._v(".v-enter")]),s._v(" 字符串实例替换为 "),a("code",[s._v(".v-enter-from")])]),s._v(" "),a("li",[s._v("将 "),a("code",[s._v(".v-leave")]),s._v(" 字符串实例替换为 "),a("code",[s._v(".v-leave-from")])]),s._v(" "),a("li",[s._v("过渡组件相关属性名也需要进行字符串实例替换，规则如上所述。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);