(this.webpackJsonpunidays=this.webpackJsonpunidays||[]).push([[0],{46:function(e,a,t){e.exports=t(79)},51:function(e,a,t){},52:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),l=t.n(s),c=(t(51),t(52),t(19)),i=t(20),o=t(12),u=t.n(o),m={apiKey:"AIzaSyDRlJC_SV_wCL5eTDxVY24e3mHVGFJLNxg",authDomain:"unidays-3205e.firebaseapp.com",databaseURL:"https://unidays-3205e.firebaseio.com",projectId:"unidays-3205e",storageBucket:"unidays-3205e.appspot.com",messagingSenderId:"127396561143",appId:"1:127396561143:web:a032c8f3b20540fc4e53f2",measurementId:"G-6HPPCPKTZ6"};u.a.initializeApp(m),u.a.analytics();var d=t(44),p=t(40),f=t(45),E=t(5),h=t.n(E),v=t(15);function b(){var e;(e=console).log.apply(e,arguments)}var g=u.a.auth(),N=u.a.database().ref("users"),w=u.a.database().ref("vendors"),y=function(){function e(a){Object(c.a)(this,e),this.uid=void 0,this.displayName=void 0,this.fUser=void 0,this.isAnonymous=!1,this.uid=a.uid,this.displayName=a.displayName?a.displayName:"",this.fUser=a,this.isAnonymous=this.fUser.isAnonymous}return Object(i.a)(e,[{key:"isVendor",value:function(){return!1}}],[{key:"register",value:function(){var a=Object(v.a)(h.a.mark((function a(t){var n,r,s,l;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.displayName,r=t.email,s=t.password,g.currentUser){a.next=4;break}throw g.signInAnonymously(),new Error("This is weird! Application must start with atleast an anonymous user!");case 4:return l=u.a.auth.EmailAuthProvider.credential(r,s),a.abrupt("return",g.currentUser.linkWithCredential(l).then(function(){var a=Object(v.a)(h.a.mark((function a(t){var s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.user){a.next=2;break}throw new Error("User should not be empty!");case 2:return s=t.user,console.log("Anonymous account successfully upgraded",s),a.next=6,s.updateProfile({displayName:n}).then((function(){return N.child(s.uid).set({displayName:n,email:r})})).catch((function(e){throw b(e),s.delete(),new Error("Could not register user!")}));case 6:return a.abrupt("return",new e(s));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),(function(e){throw console.log("Error upgrading anonymous account",e),new Error(e.message)})));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},{key:"login",value:function(){var a=Object(v.a)(h.a.mark((function a(t,n){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",g.signInWithEmailAndPassword(t,n).then((function(a){if(!a.user)throw new Error("User not found!");return new e(a.user)})).catch((function(e){var a=e.code;throw console.log(e),"auth/wrong-password"===a?new Error("Wrong password."):e})));case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}]),e}(),x=function(e){function a(e,t){var n;return Object(c.a)(this,a),(n=Object(d.a)(this,Object(p.a)(a).call(this,e))).companyName=void 0,n.companyName=t,n}return Object(f.a)(a,e),Object(i.a)(a,[{key:"isVendor",value:function(){return!0}}],[{key:"register",value:function(){var e=Object(v.a)(h.a.mark((function e(t){var n,r,s,l,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.companyName,r=t.displayName,s=t.email,l=t.password,g.currentUser){e.next=4;break}throw g.signInAnonymously(),new Error("This is weird! Application must start with atleast an anonymous user!");case 4:return c=u.a.auth.EmailAuthProvider.credential(s,l),e.abrupt("return",g.currentUser.linkWithCredential(c).then(function(){var e=Object(v.a)(h.a.mark((function e(t){var l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user){e.next=2;break}throw new Error("User should not be empty!");case 2:return l=t.user,console.log("Anonymous account successfully upgraded",l),e.next=6,l.updateProfile({displayName:r}).then((function(){return w.child(l.uid).set({displayName:r,email:s,companyName:n})})).catch((function(e){throw b(e),l.delete(),new Error("Could not register vendor!")}));case 6:return e.abrupt("return",new a(l,n));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),(function(e){throw console.log(e),new Error("Error upgrading anonymous account")})));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(v.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.signInWithEmailAndPassword(t,n).then(function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user){e.next=2;break}throw new Error("User not found!");case 2:return e.next=4,new Promise((function(e,a){w.child("".concat(t.user.uid,"/companyName")).once("value",(function(a){if(a.exists())return e(a.val());throw g.signOut(),new Error("Vendor cannot exist without having a company name!")}))}));case 4:return n=e.sent,e.abrupt("return",new a(t.user,n));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){var a=e.code;throw console.log(e),"auth/wrong-password"===a?new Error("Wrong password."):e})));case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}]),a}(y),P={main:{background:"#001",color:"#efefef",height:"100%",overflowY:"scroll"},level1:{background:"#222"},header:{background:"#353545",color:"#fefefe"},footer:{padding:"1em",color:"#555"}};b(m);var O=new(function(){function e(){var a=this;Object(c.a)(this,e),this.name="My Student Deals",this.description="",this.version="0.0.1",this.theme=P,this.user=void 0,document.title=this.name,g.onAuthStateChanged((function(e){e?e.isAnonymous&&(console.log("Anonymous user created",e),a.user=new y(e)):(a.user=void 0,a.user||g.signInAnonymously())}))}return Object(i.a)(e,[{key:"signedIn",value:function(){return this.user&&!this.user.isAnonymous}},{key:"loginStudent",value:function(e){var a=this;return y.login(e.email,e.password).then((function(e){return a.user=e,a}))}},{key:"loginVendor",value:function(e){var a=this;return x.login(e.email,e.password).then((function(e){return a.user=e,a}))}},{key:"registerUser",value:function(e){var a=this;return y.register(e).then((function(e){a.user=e}))}},{key:"registerVendor",value:function(e){var a=this;return x.register(e).then((function(e){a.user=e}))}},{key:"logout",value:function(){this.user&&g.signOut()}}]),e}()),k=Object(n.createContext)(O),C=t(7),j=t(13),L=t(21),A=t(3),S=t(14);function I(){var e=r.a.useState(!1),a=Object(S.a)(e,2),t=a[0],n=a[1];return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("nav",{className:"navbar is-centered is-unselectable is-fixed-top is-black",style:e.theme.header},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{className:"navbar-item has-text-weight-bold"},e.name),r.a.createElement("span",{onClick:function(){var e=!t;n(e),!0===e&&setTimeout((function(){return n(!1)}),1e4)},className:"navbar-burger burger ".concat(t?"is-active":"")},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu".concat(t?"is-active":"")},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(C.b,{activeClassName:"is-active",exact:!0,to:"/",className:"navbar-item"},r.a.createElement(A.g,null),"\u2003Home"),r.a.createElement(C.b,{activeClassName:"is-active",exact:!0,to:"/mydeals",className:"navbar-item"},r.a.createElement(A.l,null),"\u2003My Deals")),r.a.createElement("div",{className:"navbar-end"},e.signedIn()?r.a.createElement("div",{className:"navbar-item"},r.a.createElement("p",null,"Hello ",e.user.displayName,"!")):null,r.a.createElement("div",{className:"navbar-item"},e.signedIn()?r.a.createElement(C.b,{title:"LogOut",activeClassName:"is-active",exact:!0,to:"/user/logout",className:"is-danger button",href:""},r.a.createElement(A.j,null),"\u2003 Logout"):r.a.createElement("div",{className:"field is-grouped is-uppercase"},r.a.createElement("p",{className:"control"},r.a.createElement(C.b,{title:"Login to student portal",activeClassName:"is-active",exact:!0,to:"/user/login",className:"is-primary button",href:""},r.a.createElement(A.i,null),"\u2003 Student")),r.a.createElement("p",{className:"control"},r.a.createElement(C.b,{title:"Login to vendor portal!",activeClassName:"is-active",exact:!0,to:"/vendor/login",className:"is-link button",href:""},r.a.createElement(A.a,null),"\u2003 Vendor")))))))}))}function V(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("div",{style:e.theme.main},r.a.createElement(I,null),r.a.createElement("div",{className:"hero is-black is-bold is-fullheight"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container notification has-text-centered",style:e.theme.level1},r.a.createElement(A.d,{size:50,className:"has-text-warning"}),r.a.createElement("p",{className:"title is-uppercase"}," Page Not Found!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C.b,{to:"/",className:"button is-danger is-outlined"},"Go to Homepage!")))))}))}var z=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("div",{style:e.theme.main},r.a.createElement(I,null),r.a.createElement("div",{className:"hero is-medium is-light is-bold"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"title"},"Welcome to ",e.name,"!"),r.a.createElement("p",{className:"subtitle"},e.description)))))}))},D=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("footer",{className:"footer",style:e.theme.footer},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"Copyright \xa9 ",e.name," ",(new Date).getFullYear()," ")))}))},U=t(43);function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function W(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(t,!0).forEach((function(a){Object(U.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var q=function(e){var a=e.redirectPath,t=e.registerPath,n=e.onLogin,s=r.a.useState({error:null,email:"",password:"",isLoading:!1}),l=Object(S.a)(s,2),c=l[0],i=l[1],o=r.a.useState(!1),u=Object(S.a)(o,2),m=u[0],d=u[1],p=r.a.useState(!1),f=Object(S.a)(p,2),E=f[0],h=f[1],v=Object(L.useToasts)().addToast;return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),i(W({},c,{isLoading:!0})),n(c).then((function(){return console.log("login success"),v("Login Success!",{appearance:"success",autoDismiss:!0}),i(W({},c,{isLoading:!1})),h(!0)})).catch((function(e){i(W({},c,{isLoading:!1,error:e.message}))}))}},E?r.a.createElement(j.a,{to:a}):null,r.a.createElement("div",{className:"card"},r.a.createElement("section",{className:"card-content"},c.error?r.a.createElement("div",{className:"notification is-warning"},r.a.createElement(A.c,null)," ",c.error):null,r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Email")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{required:!0,name:"email",value:c.email,onChange:function(e){return i(W({},c,{email:e.target.value}))},className:"input",type:"email",placeholder:"Enter email address"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(A.b,null)))))),r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Password")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded"},r.a.createElement("input",{required:!0,name:"password",value:c.password,onChange:function(e){return i(W({},c,{password:e.target.value}))},className:"input",type:m?"text":"password"})),r.a.createElement("p",{className:"control"},r.a.createElement("button",{tabIndex:-1,type:"button",className:"button",onClick:function(){return d(!m)}},m?r.a.createElement(A.f,null):r.a.createElement(A.e,null)))))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"is-success button ".concat(c.isLoading?"is-loading":""),disabled:c.isLoading},"Login")))),r.a.createElement("footer",{className:"card-footer is-unselectable"},r.a.createElement(C.b,{to:t,exact:!0,className:"card-footer-item"},"Create New Account"))))}))},R=function(e){var a=e.redirectPath,t=e.onRegister,n=e.vendor,s=e.loginPath,l=r.a.useState({error:"",email:"",password:"",passwordVerify:"",isLoading:!1,showPassword:!1,displayName:"",companyName:""}),c=Object(S.a)(l,2),i=c[0],o=c[1],u=Object(L.useToasts)().addToast,m=r.a.useState(!1),d=Object(S.a)(m,2),p=d[0],f=d[1];return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),e.stopPropagation(),i.password!==i.passwordVerify)return o(W({},i,{error:"Passwords do not match!"}));o(W({},i,{isLoading:!0})),t(i).then((function(){return u("Registration Success!",{appearance:"success",autoDismiss:!0}),o(W({},i,{isLoading:!1})),f(!0)})).catch((function(e){o(W({},i,{isLoading:!1,error:e.message}))}))}},p?r.a.createElement(j.a,{to:a}):null,r.a.createElement("div",{className:"card"},r.a.createElement("section",{className:"card-content"},i.error?r.a.createElement("div",{className:"notification is-warning"},r.a.createElement(A.c,null)," ",i.error):null,n?r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Company Name")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{required:!0,name:"companyname",value:i.companyName,onChange:function(e){return o(W({},i,{companyName:e.target.value}))},className:"input",type:"text",placeholder:"Enter company name"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(A.a,null)))))):null,r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Name")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{required:!0,name:"name",value:i.displayName,onChange:function(e){return o(W({},i,{displayName:e.target.value}))},className:"input",type:"person",placeholder:"Enter your fullname"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(A.k,null)))))),r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Email")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{required:!0,name:"email",value:i.email,onChange:function(e){return o(W({},i,{email:e.target.value}))},className:"input",type:"email",placeholder:"Enter email address"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(A.b,null)))))),r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Password")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded has-icons-left"},r.a.createElement("input",{required:!0,name:"password",value:i.password,onChange:function(e){return o(W({},i,{password:e.target.value}))},className:"input",type:i.showPassword?"text":"password"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(A.h,null))),r.a.createElement("p",{className:"control"},r.a.createElement("button",{disabled:i.isLoading,tabIndex:-1,className:"button",type:"button",onClick:function(){return o(W({},i,{showPassword:!i.showPassword}))}},i.showPassword?r.a.createElement(A.f,null):r.a.createElement(A.e,null)))))),r.a.createElement("div",{className:"field is-horizontal"},r.a.createElement("div",{className:"field-label"},r.a.createElement("label",{className:"label"},"Confirm Password")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{required:!0,name:"password",value:i.passwordVerify,onChange:function(e){return o(W({},i,{passwordVerify:e.target.value}))},className:"input",type:i.showPassword?"text":"password"}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(A.h,null)))))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"is-success button ".concat(i.isLoading?"is-loading":""),disabled:i.isLoading},"Join")))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement(C.b,{to:s,exact:!0,className:"card-footer-item"},"Login with existing account"))))}))},H=function(){return r.a.createElement(k.Consumer,null,(function(e){return console.log(e),r.a.createElement("div",{style:e.theme.main},r.a.createElement(I,null),r.a.createElement("div",{className:"section container"},r.a.createElement("h2",{className:"is-title is-size-2 has-text-centered"},"Login with username and password"),r.a.createElement("div",{className:"section"},r.a.createElement(q,{onLogin:function(a){return e.loginStudent(a)},redirectPath:"/",registerPath:"/user/register"}))))}))},J=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("div",{style:e.theme.main},r.a.createElement(I,null),r.a.createElement("div",{className:"section container"},r.a.createElement("h2",{className:"is-title is-size-2 has-text-centered"},"Login with username and password"),r.a.createElement("div",{className:"section"},r.a.createElement(q,{onLogin:function(a){return e.loginVendor(a)},redirectPath:"/",registerPath:"/vendor/register"}))))}))},B=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("div",{style:e.theme.main},r.a.createElement(I,null),r.a.createElement("div",{className:"section container"},r.a.createElement("h2",{className:"is-title is-size-2 has-text-centered"},"Login with username and password"),r.a.createElement("div",{className:"section"},r.a.createElement(R,{onRegister:function(a){return e.registerUser(a)},redirectPath:"/",loginPath:"/user/login"}))))}))},F=function(){return r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement("div",{style:e.theme.main},r.a.createElement(I,null),r.a.createElement("div",{className:"section container"},r.a.createElement("h2",{className:"is-title is-size-2 has-text-centered"},"Login with username and password"),r.a.createElement("div",{className:"section"},r.a.createElement(R,{vendor:!0,onRegister:function(a){return e.registerVendor(a)},redirectPath:"/",loginPath:"/vendor/login"}))))}))},G=function(){return r.a.createElement(L.ToastProvider,{placement:"bottom-center"},r.a.createElement(k.Provider,{value:O},r.a.createElement(k.Consumer,null,(function(e){return r.a.createElement(C.a,{basename:"/deals"},r.a.createElement(j.d,null,r.a.createElement(j.b,{strict:!0,exact:!0,path:"/vendor/register",component:F}),r.a.createElement(j.b,{strict:!0,exact:!0,path:"/user/register",component:B}),r.a.createElement(j.b,{strict:!0,exact:!0,path:"/vendor/login",component:J}),r.a.createElement(j.b,{strict:!0,exact:!0,path:"/user/login",component:H}),r.a.createElement(j.b,{strict:!0,exact:!0,path:"/",component:z}),r.a.createElement(j.b,{component:V})),r.a.createElement(D,null))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.fd6ca84e.chunk.js.map