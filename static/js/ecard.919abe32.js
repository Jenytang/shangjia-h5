(window.webpackJsonp=window.webpackJsonp||[]).push([["ecard"],{"7b40":function(e,t,s){},"9a10":function(e,t,s){},c2d9:function(e,t,s){"use strict";var i=s("7b40");s.n(i).a},d988:function(e,t,s){"use strict";s.r(t);s("6a61");var i,r=s("cf7f"),n=s("15d4"),c={name:"Ecard",data:function(){return{msg:"选填，说明原因",checkNum:1,total:3,docmHeight:document.documentElement.clientHeight,showHeight:document.documentElement.clientHeight,hideshow:!0}},computed:{goodsName:function(){return this.$store.getters.getGoodsDetail.goodsName},specsValue:function(){return this.$store.getters.getGoodsDetail.specsValue},linkImg:function(){return this.$store.getters.getGoodsDetail.linkImg},quantity:function(){return this.$store.getters.getGoodsDetail.quantity},price:function(){return this.$store.getters.getGoodsDetail.price},receiverName:function(){return this.$store.getters.getGoodsDetail.receiverName},receiverPhone:function(){return this.$store.getters.getGoodsDetail.receiverPhone},receiverDetailAddress:function(){return this.$store.getters.getGoodsDetail.receiverDetailAddress},orderDetailId:function(){return this.$store.getters.getOrderCheckDTO.orderDetailId},needCheckNum:function(){return this.$store.getters.getOrderCheckDTO.needCheckNum},checkNo:function(){return this.$store.getters.getGoodsCheckNo}},mounted:function(){var e=this;window.onresize=function(){e.showHeight=document.body.clientHeight}},watch:{showHeight:function(){this.docmHeight>this.showHeight?this.hideshow=!1:this.hideshow=!0}},methods:{onClickLeft:function(){this.$router.back(-1),this.$toast("返回")},toRecords:function(){this.$router.push("/records")},submitCheck:(i=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={checkNo:this.checkNo,checkNum:this.checkNum,orderDetailId:this.orderDetailId},e.next=3,Object(n.a)(t);case 3:0===e.sent.code&&(this.$toast.success("核销成功"),this.$router.push("/result"));case 5:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})}},o=(s("c2d9"),s("ea9a"),s("9ca4")),a=Object(o.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:"电子卡券核销","left-text":"","right-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),s("div",{staticClass:"goods"},[s("van-card",{attrs:{num:"2",price:t.price,desc:t.specsValue,title:t.goodsName,thumb:t.linkImg}})],1),t._v(" "),s("div",{staticClass:"msg"},[s("van-field",{attrs:{label:"买家留言："},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})],1),t._v(" "),s("p",{staticClass:"tip"},[t._v("所有卡券使用后订单才算完成")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hideshow,expression:"hideshow"}],staticClass:"footer"},[s("div",{staticClass:"control-wrap"},[s("div",[s("div",{staticClass:"name"},[t._v("核销数量")]),t._v(" "),s("div",{staticClass:"num-wrap"},[t._v("剩余可核销"),s("span",{staticClass:"num"},[t._v(t._s(t.needCheckNum-t.checkNum))]),t._v("张")])]),t._v(" "),s("van-stepper",{attrs:{min:"1",max:t.needCheckNum},model:{value:t.checkNum,callback:function(e){t.checkNum=e},expression:"checkNum"}})],1),t._v(" "),s("div",{staticClass:"submit-btn",on:{click:t.submitCheck}},[t._v("\n    核销券码\n    ")]),t._v(" "),s("p",{staticClass:"list",on:{click:t.toRecords}},[t._v("查看核销记录")])])],1)},[],!1,null,"6163bba7",null);t.default=a.exports},ea9a:function(e,t,s){"use strict";var i=s("9a10");s.n(i).a}}]);