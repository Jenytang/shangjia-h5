(window.webpackJsonp=window.webpackJsonp||[]).push([["login"],{"124e":function(e,t,s){},"2ce6":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},3072:function(e,t,s){},"3b80":function(e,t,s){function n(e,t,s){var n={},o=i(function(){return!!c[e]()||"​"!="​"[e]()}),r=n[e]=o?t(u):c[e];s&&(n[s]=r),a(a.P+a.F*o,"String",n)}var a=s("2d2c"),o=s("2b11"),i=s("201d"),c=s("2ce6"),r="["+c+"]",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),u=n.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(d,"")),e};e.exports=n},"5de2":function(e,t,s){"use strict";var n=s("124e");s.n(n).a},6515:function(e,t,s){"use strict";var n=s("8161");s.n(n).a},8161:function(e,t,s){},9231:function(e,t,s){"use strict";var n=s("3072");s.n(n).a},ac2a:function(e,t,s){"use strict";s.r(t);var n,o=s("ce3c"),r=(s("e411"),s("f030")),a=(s("d595"),s("11f9"),s("0380"),s("2767")),i=(s("3a23"),s("04a0"),s("332b")),c=(s("5880"),s("b06f"),{name:"VerifyCodeBtn",components:Object(o.a)({},r.a.name,r.a),props:{btnMsg:{type:String,default:"发送验证码"},restTime:{type:Number,default:30}},data:function(){return{codeRestTime:0}},methods:{btnClick:function(){var e=this;this.codeRestTime=this.restTime;var t=setInterval(function(){--e.codeRestTime,e.codeRestTime||(clearInterval(t),t=null)},1e3);this.$emit("sendVerifyCode")}}}),l=(s("6515"),s("9ca4")),d=Object(l.a)(c,function(){var e=this,t=e.$createElement;return(e._self._c||t)("van-button",{staticClass:"check-btn",attrs:{size:"mini",type:"default",color:"#44B47C",disabled:!!e.codeRestTime},on:{click:e.btnClick}},[e._v("\n  "+e._s(e.codeRestTime?e.codeRestTime+"S":"发送验证码")+"\n")])},[],!1,null,"b8c864a6",null).exports,u={name:"Login",data:function(){return{logo:s("cf05"),phoneNumber:"13216698987",password:"123456",code:"",loginWay:"password",passwordType:"password",phoneNumberError:""}},methods:{sendVerifyCode:function(){this.phoneNumberError="",this.phoneNumber||(this.phoneNumberError="手机号码必填")},switchPasswordType:function(){this.passwordType="password"===this.passwordType?"text":"password"},switchLoginWay:function(){this.password=this.code="",this.loginWay="password"===this.loginWay?"verifyCode":"password"},handleLogin:function(){this.phoneNumber,this.password,this.$router,this.$route;this.$store.dispatch("setToken","DADDFAD123XADA#FAF"),this.$router.push("/")}},computed:{loginWayObj:function(){return"password"===this.loginWay?{icon:"closed-eye",toggleMsg:"验证码登录"}:{icon:"eye",toggleMsg:"密码登录"}},passwordIcon:function(){return"password"===this.passwordType?"closed-eye":"eye"}},components:(n={},Object(o.a)(n,i.a.name,i.a),Object(o.a)(n,a.a.name,a.a),Object(o.a)(n,r.a.name,r.a),Object(o.a)(n,"VerifyCodeBtn",d),n)},p=(s("9231"),s("5de2"),Object(l.a)(u,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t.logo,alt:"default_logo"}})])]),t._v(" "),s("div",{staticClass:"content"},[s("van-field",{attrs:{placeholder:"请输入手机号","left-icon":"phone-o","error-message":t.phoneNumberError},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}}),t._v(" "),"password"===t.loginWay?s("van-field",{attrs:{placeholder:"登录密码","left-icon":"lock",type:t.passwordType},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("van-icon",{attrs:{slot:"right-icon",name:t.passwordIcon},on:{click:t.switchPasswordType},slot:"right-icon"})],1):s("van-field",{attrs:{placeholder:"请输入验证码","left-icon":"comment-o",type:"text"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("VerifyCodeBtn",{attrs:{slot:"button"},on:{sendVerifyCode:t.sendVerifyCode},slot:"button"})],1),t._v(" "),s("div",{staticClass:"button-wrap"},[s("div",{staticClass:"login-btn",on:{click:t.handleLogin}},[t._v("登录")])]),t._v(" "),s("div",{staticClass:"more-wrap"},[s("div",{staticClass:"switch-way",on:{click:t.switchLoginWay}},[t._v(t._s(t.loginWayObj.toggleMsg))])])],1)])},[],!1,null,"3d36e7ab",null));t.default=p.exports},b06f:function(e,t,s){"use strict";function n(e){var t=d(e,!1);if("string"==typeof t&&2<t.length){var s,n,o,r=(t=w?t.trim():f(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(s=t.charCodeAt(2))||120===s)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var a,i=t.slice(2),c=0,l=i.length;c<l;c++)if((a=i.charCodeAt(c))<48||o<a)return NaN;return parseInt(i,n)}}return+t}var o=s("4839"),r=s("3301"),a=s("9b6d"),i=s("d62f"),d=s("1f51"),c=s("201d"),l=s("62af").f,u=s("78de").f,p=s("694f").f,f=s("3b80").trim,h="Number",b=o[h],m=b,g=b.prototype,v=a(s("04ac")(g))==h,w="trim"in String.prototype;if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof b&&(v?c(function(){g.valueOf.call(s)}):a(s)!=h)?i(new m(n(t)),s,b):n(t)};for(var y,N=s("3a0f")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;N.length>C;C++)r(m,y=N[C])&&!r(b,y)&&p(b,y,u(m,y));(b.prototype=g).constructor=b,s("7f00")(o,h,b)}}}]);