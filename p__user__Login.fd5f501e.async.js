(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ObQG:function(N,b,a){N.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",title:"title___1-xuF",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},PdsH:function(N,b,a){"use strict";a.r(b);var ce=a("DYRE"),G=a("zeV3"),le=a("Znn+"),x=a("ZTPi"),oe=a("miYZ"),y=a("tsqr"),v=a("k1fw"),m=a("9og8"),M=a("tJVT"),ue=a("fOrg"),$=a("+KLJ"),D=a("WmNS"),c=a.n(D),V=a("cJ7L"),F=a("FY4R"),Z=a("3flX"),J=a("Y0UT"),Y=a("80zm"),K=a("CZrw"),S=a("q1tI"),Q=a("VMEa"),L=a("Qurx"),R=a("/aGu"),W=a("tneF"),u=a("9kvl"),X=a("QttV"),H=a("CwrG");function w(h,d){return C.apply(this,arguments)}function C(){return C=Object(m.a)(c.a.mark(function h(d,g){return c.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(u.d)("/api/login/captcha",Object(v.a)({method:"POST",params:Object(v.a)({},d)},g||{})));case 1:case"end":return f.stop()}},h)})),C.apply(this,arguments)}var k=a("ObQG"),s=a.n(k),e=a("nKUr"),B=function(d){var g=d.content;return Object(e.jsx)($.a,{style:{marginBottom:24},message:g,type:"error",showIcon:!0})},q=function(){!u.b||setTimeout(function(){var d=u.b.location.query,g=d,O=g.redirect;u.b.push(O||"/")},10)},_=function(){var d=Object(S.useState)(!1),g=Object(M.a)(d,2),O=g[0],f=g[1],ee=Object(S.useState)({}),I=Object(M.a)(ee,2),P=I[0],ae=I[1],te=Object(S.useState)("account"),z=Object(M.a)(te,2),T=z[0],se=z[1],A=Object(u.f)("@@initialState"),p=A.initialState,re=A.setInitialState,l=Object(u.e)(),ne=function(){var o=Object(m.a)(c.a.mark(function r(){var n,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p==null||(n=p.fetchUserInfo)===null||n===void 0?void 0:n.call(p);case 2:i=t.sent,i&&re(Object(v.a)(Object(v.a)({},p),{},{currentUser:i}));case 4:case"end":return t.stop()}},r)}));return function(){return o.apply(this,arguments)}}(),ie=function(){var o=Object(m.a)(c.a.mark(function r(n){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(f(!0),t.prev=1,console.log(n),i={status:"ok",type:"account",currentAuthority:"admin"},i.status!=="ok"){t.next=10;break}return y.default.success("\u767B\u5F55\u6210\u529F\uFF01"),t.next=8,ne();case 8:return q(),t.abrupt("return");case 10:ae(i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),y.default.error("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");case 16:f(!1);case 17:case"end":return t.stop()}},r,null,[[1,13]])}));return function(n){return o.apply(this,arguments)}}(),U=P.status,E=P.type;return Object(e.jsxs)("div",{className:s.a.container,children:[Object(e.jsx)("div",{className:s.a.lang,children:u.a&&Object(e.jsx)(u.a,{})}),Object(e.jsxs)("div",{className:s.a.content,children:[Object(e.jsxs)("div",{className:s.a.top,children:[Object(e.jsx)("div",{className:s.a.header,children:Object(e.jsxs)(X.a,{to:"/",children:[Object(e.jsx)("img",{alt:"logo",className:s.a.logo,src:"/logo.svg"}),Object(e.jsx)("span",{className:s.a.title,children:"Ant Design"})]})}),Object(e.jsx)("div",{className:s.a.desc,children:"Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303"})]}),Object(e.jsxs)("div",{className:s.a.main,children:[Object(e.jsxs)(Q.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:l.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(r,n){return n.pop()},submitButtonProps:{loading:O,size:"large",style:{width:"100%"}}},onFinish:function(){var o=Object(m.a)(c.a.mark(function r(n){return c.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:ie(n);case 1:case"end":return j.stop()}},r)}));return function(r){return o.apply(this,arguments)}}(),children:[Object(e.jsxs)(x.a,{activeKey:T,onChange:se,children:[Object(e.jsx)(x.a.TabPane,{tab:l.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account"),Object(e.jsx)(x.a.TabPane,{tab:l.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u624B\u673A\u53F7\u767B\u5F55"})},"mobile")]}),U==="error"&&E==="account"&&Object(e.jsx)(B,{content:l.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF\uFF08admin/ant.design)"})}),T==="account"&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(L.a,{name:"username",fieldProps:{size:"large",prefix:Object(e.jsx)(V.a,{className:s.a.prefixIcon})},placeholder:l.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:"\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879\uFF01"}]}),Object(e.jsx)(L.a.Password,{name:"password",fieldProps:{size:"large",prefix:Object(e.jsx)(F.a,{className:s.a.prefixIcon})},placeholder:l.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:"\u5BC6\u7801\u662F\u5FC5\u586B\u9879\uFF01"}]})]}),U==="error"&&E==="mobile"&&Object(e.jsx)(B,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),T==="mobile"&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(L.a,{fieldProps:{size:"large",prefix:Object(e.jsx)(Z.a,{className:s.a.prefixIcon})},name:"mobile",placeholder:l.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:"\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879\uFF01"},{pattern:/^1\d{10}$/,message:"\u4E0D\u5408\u6CD5\u7684\u624B\u673A\u53F7\uFF01"}]}),Object(e.jsx)(R.a,{fieldProps:{size:"large",prefix:Object(e.jsx)(F.a,{className:s.a.prefixIcon})},captchaProps:{size:"large"},placeholder:l.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(r,n){return r?"".concat(n," ").concat(l.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):l.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:"\u9A8C\u8BC1\u7801\u662F\u5FC5\u586B\u9879\uFF01"}],onGetCaptcha:function(){var o=Object(m.a)(c.a.mark(function r(n){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w({phone:n});case 2:if(i=t.sent,i!==!1){t.next=5;break}return t.abrupt("return");case 5:y.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return t.stop()}},r)}));return function(r){return o.apply(this,arguments)}}()})]}),Object(e.jsxs)("div",{style:{marginBottom:24},children:[Object(e.jsx)(W.a,{noStyle:!0,name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"}),Object(e.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801 ?"})]})]}),Object(e.jsxs)(G.b,{className:s.a.other,children:["\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F :",Object(e.jsx)(J.a,{className:s.a.icon}),Object(e.jsx)(Y.a,{className:s.a.icon}),Object(e.jsx)(K.a,{className:s.a.icon})]})]})]}),Object(e.jsx)(H.a,{})]})},de=b.default=_}}]);
