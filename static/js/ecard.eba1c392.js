(window.webpackJsonp=window.webpackJsonp||[]).push([["ecard"],{3167:function(t,s,a){"use strict";var e=a("6855");a.n(e).a},"4e1e":function(t,s,a){"use strict";var e=a("5b49");a.n(e).a},5627:function(t,s,a){"use strict";a.r(s);var e={name:"Ecard",data:function(){return{price:"699.99",name:"朱朝阳 13164612084",address:"仓前街道梦想小镇",date:"2020-7-31 12:20:30",msg:"选填，说明原因",value:1,total:3}},methods:{onClickLeft:function(){this.$router.back(-1),this.$toast("返回")},toRecords:function(){this.$router.push("/records")},result:function(){this.$router.push("/result")}}},n=(a("4e1e"),a("3167"),a("9ca4")),i=Object(n.a)(e,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"电子卡券核销","left-text":"","right-text":"","left-arrow":""},on:{"click-left":s.onClickLeft}}),s._v(" "),a("div",{staticClass:"goods"},[a("van-card",{attrs:{num:"2",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"}})],1),s._v(" "),a("div",{staticClass:"msg"},[a("van-field",{attrs:{label:"买家留言："},model:{value:s.msg,callback:function(t){s.msg=t},expression:"msg"}})],1),s._v(" "),a("p",{staticClass:"tip"},[s._v("所有卡券使用后订单才算完成")]),s._v(" "),a("div",{staticClass:"footer"},[a("div",{staticClass:"control-wrap"},[a("div",[a("div",{staticClass:"name"},[s._v("核销数量")]),s._v(" "),a("div",{staticClass:"num-wrap"},[s._v("剩余可核销"),a("span",{staticClass:"num"},[s._v(s._s(s.total-s.value))]),s._v("张")])]),s._v(" "),a("van-stepper",{attrs:{min:"1",max:s.total},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})],1),s._v(" "),a("div",{staticClass:"submit-btn",on:{click:s.result}},[s._v("\n    核销券码\n    ")]),s._v(" "),a("p",{staticClass:"list",on:{click:s.toRecords}},[s._v("查看核销记录")])])],1)},[],!1,null,"e0bc3e7a",null);s.default=i.exports},"5b49":function(t,s,a){},6855:function(t,s,a){}}]);