(window.webpackJsonp=window.webpackJsonp||[]).push([["records"],{"1ede":function(e,t,n){"use strict";var a=n("f5ed");n.n(a).a},"213c":function(e,t,n){},2973:function(e,t,n){"use strict";n.r(t);var a={name:"Records",data:function(){return{loading:!1,finished:!1,refreshing:!1,recordsList:[{id:1313,name:"张东升",date:"2020-07-03 20:30:20",code:"9551987332"},{id:1314,name:"张东升",date:"2020-07-03 20:30:20",code:"9551987332"},{id:1315,name:"张东升",date:"2020-07-03 20:30:20",code:"9551987332"}]}},methods:{onClickLeft:function(){this.$router.back(-1)},onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()},onLoad:function(){var t=this;setTimeout(function(){t.refreshing&&(t.recordsList=[],t.refreshing=!1);for(var e=0;e<5;e++){t.recordsList.push({name:"张东升",date:"2020-07-03 20:30:20",code:"9551987332"})}t.loading=!1,10<=t.recordsList.length&&(t.finished=!0)},1e3)}}},i=(n("1ede"),n("a81b"),n("9ca4")),s=Object(i.a)(a,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"券码核销记录","left-text":"","right-text":"","left-arrow":""},on:{"click-left":n.onClickLeft}}),n._v(" "),a("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.refreshing,callback:function(e){n.refreshing=e},expression:"refreshing"}},[a("van-list",{attrs:{finished:n.finished,"finished-text":"抱歉，暂无更多纪录"},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},n._l(n.recordsList,function(e,t){return a("div",{key:t,staticClass:"item"},[a("van-field",{attrs:{label:"核销员：",value:e.name,readonly:""}}),n._v(" "),a("van-field",{attrs:{label:"核销时间：",value:e.date,readonly:""}}),n._v(" "),a("van-field",{attrs:{label:"券码：",value:e.code,readonly:""}})],1)}),0)],1)],1)},[],!1,null,"49714764",null);t.default=s.exports},"2dbd":function(e,t,n){},"4ab2":function(e,t,n){},5729:function(e,t,n){"use strict";var a=n("59fb");n.n(a).a},"59fb":function(e,t,n){},"612a":function(e,t,n){"use strict";var a=n("6958");n.n(a).a},6958:function(e,t,n){},"8ef6":function(e,t,n){"use strict";var a=n("4ab2");n.n(a).a},"9aac":function(e,t,n){"use strict";n.r(t);var a={name:"EcardsRecord",data:function(){return{loading:!1,finished:!1,refreshing:!1,recordsList:[{id:1313,name:"张三",date:"2020-07-03 20:30:20",code:"9551987332"},{id:1314,name:"李四",date:"2020-07-03 20:30:20",code:"9551987332"},{id:1315,name:"罗云熙",date:"2020-07-03 20:30:20",code:"9551987332"}]}},methods:{onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()},onLoad:function(){var t=this;setTimeout(function(){t.refreshing&&(t.recordsList=[],t.refreshing=!1);for(var e=0;e<5;e++){t.recordsList.push({name:"张东升",date:"2020-07-03 20:30:20",code:"9551987332"})}t.loading=!1,10<=t.recordsList.length&&(t.finished=!0)},1e3)}}},i=(n("d7df"),n("9ca4")),s=Object(i.a)(a,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",[a("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.refreshing,callback:function(e){n.refreshing=e},expression:"refreshing"}},[a("van-list",{attrs:{finished:n.finished,"finished-text":"抱歉，暂无更多纪录"},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},n._l(n.recordsList,function(e,t){return a("div",{key:t,staticClass:"item"},[a("div",{staticClass:"top-name"},[a("span",[n._v(n._s(e.date))]),n._v(" "),a("span",[n._v("核销员："+n._s(e.name))])]),n._v(" "),a("div",{staticClass:"goods"},[a("img",{attrs:{src:"https://img.yzcdn.cn/vant/cat.jpeg",alt:""}}),n._v(" "),a("div",{staticClass:"info"},[a("div",[a("div",{staticClass:"goods-name"},[n._v("单人午餐套餐")]),n._v(" "),a("div",[n._v("梅菜扣肉+鸡汤娃娃菜+米饭")])]),n._v(" "),a("span",[n._v("数量： "+n._s("1"))])])]),n._v(" "),a("div",{staticClass:"foot-price"},[a("span",[n._v("券码编号："+n._s(e.code))]),n._v(" "),a("span",[n._v("价格："),a("span",{staticClass:"goods-price"},[n._v("￥"+n._s("19.9"))])])])])}),0)],1)],1)},[],!1,null,"26d21036",null).exports,r={name:"StoreTake",data:function(){return{loading:!1,finished:!1,refreshing:!1,recordsList:[{id:1313,name:"张三",date:"2020-07-03 20:30:20",code:"9551987332"},{id:1314,name:"李四",date:"2020-07-03 20:30:20",code:"9551987332"},{id:1315,name:"罗云熙",date:"2020-07-03 20:30:20",code:"9551987332"}]}},methods:{onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()},onLoad:function(){var t=this;setTimeout(function(){t.refreshing&&(t.recordsList=[],t.refreshing=!1);for(var e=0;e<5;e++){t.recordsList.push({name:"张东升",date:"2020-07-03 20:30:20",code:"9551987332"})}t.loading=!1,10<=t.recordsList.length&&(t.finished=!0)},1e3)}}},o=(n("5729"),{name:"VerifyRecords",components:{EcardsRecord:s,StoreTake:Object(i.a)(r,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",[a("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.refreshing,callback:function(e){n.refreshing=e},expression:"refreshing"}},[a("van-list",{attrs:{finished:n.finished,"finished-text":"抱歉，暂无更多纪录"},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},n._l(n.recordsList,function(e,t){return a("div",{key:t,staticClass:"item"},[a("div",{staticClass:"top-name"},[a("span",[n._v(n._s(e.date))]),n._v(" "),a("span",[n._v("核销员："+n._s(e.name))])]),n._v(" "),a("div",{staticClass:"goods"},[a("img",{attrs:{src:"https://img.yzcdn.cn/vant/cat.jpeg",alt:""}}),n._v(" "),a("div",{staticClass:"info"},[a("div",[a("div",{staticClass:"goods-name"},[n._v("戴妃皇菊")]),n._v(" "),a("div",[n._v("500g")])]),n._v(" "),a("div",{staticClass:"price-wrap"},[a("span",[n._v("数量： "+n._s("1"))]),n._v(" "),a("span",[n._v("价格："),a("span",{staticClass:"goods-price"},[n._v("￥"+n._s("19.9"))])])])])])])}),0)],1)],1)},[],!1,null,"1c816eb8",null).exports},data:function(){return{active:0}},methods:{onClickLeft:function(){this.$router.back(-1)}}}),d=(n("8ef6"),n("612a"),Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"核销记录","left-text":"","right-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-tabs",{staticClass:"tabs",attrs:{animated:"",color:"#44B47C","title-active-color":"#202020","title-inactive-color":"#aaa"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"电子卡券"}},[n("ecards-record")],1),t._v(" "),n("van-tab",{attrs:{title:"自提商品"}},[n("store-take")],1)],1)],1)},[],!1,null,"418e3b2e",null));t.default=d.exports},a81b:function(e,t,n){"use strict";var a=n("2dbd");n.n(a).a},d7df:function(e,t,n){"use strict";var a=n("213c");n.n(a).a},f5ed:function(e,t,n){}}]);