(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),s=n(2),l=n.n(s),u=n(3),i=n(1),m=(n(12),n(13),n(14),function(e){var t=e.posts,n=e.selectedPostId,a=e.onPostIdSelect,r=e.changePostDetailsLoadingStatus;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(e.userId,"]: ")),e.title),c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){r(!0),a(e.id===n?null:e.id)}},e.id===n?"Close":"Open"))}))))}),p=(n(15),n(16),"https://mate-api.herokuapp.com"),f=function(e){return fetch("".concat(p).concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("Error")})).then((function(e){return e.data}))},d=function(e){return f("/comments").then((function(t){return t.filter((function(t){return t.postId===e}))})).catch((function(){return[]}))},E=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments/").concat(t),{method:"DELETE"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments"),{method:"Post",body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.changeLoadingStatus,n=e.selectedPostId,r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],u=Object(a.useState)(""),m=Object(i.a)(u,2),p=m[0],f=m[1],d=Object(a.useState)(""),E=Object(i.a)(d,2),h=E[0],v=E[1];return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){return function(e){e.preventDefault(),b({postId:n,name:s,email:p,body:h}),t(!0),l(""),f(""),v("")}(e)}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:s,onChange:function(e){return l(e.target.value)},required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:p,onChange:function(e){return f(e.target.value)},required:!0})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:h,onChange:function(e){return v(e.target.value)},required:!0})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))},v=(n(17),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))}),_=function(e){return f("/posts").then((function(t){return 0===e?t:t.filter((function(t){return t.userId===e}))})).catch((function(){return[]}))},N=function(e){var t=e.selectedPostId,n=e.arePostDetailsLoading,r=e.changePostDetailsLoadingStatus,o=Object(a.useState)({}),s=Object(i.a)(o,2),m=s[0],p=s[1],b=Object(a.useState)([]),_=Object(i.a)(b,2),N=_[0],O=_[1],j=Object(a.useState)(!1),P=Object(i.a)(j,2),g=P[0],S=P[1],y=Object(a.useState)(!0),w=Object(i.a)(y,2),L=w[0],D=w[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/posts/".concat(t)).catch((function(){return null}));case 2:return n=e.sent,e.next=5,d(t);case 5:a=e.sent,p(n),O(a),S(!1),r(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,g]),n?c.a.createElement(v,null):c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,m.body)),g?c.a.createElement(v,null):c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return D(!L)}},"".concat(L?"Hide":"Show"," ").concat(N.length,"\n                ").concat(N.length>1?"comments":"comment")),L&&c.a.createElement("ul",{className:"PostDetails__list"},N.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){E(e.id),S(!0)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(h,{changeLoadingStatus:S,selectedPostId:t}))))},O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),s=Object(i.a)(o,2),p=s[0],f=s[1],d=Object(a.useState)(!1),E=Object(i.a)(d,2),b=E[0],h=E[1],O=Object(a.useState)(!1),j=Object(i.a)(O,2),P=j[0],g=j[1],S=Object(a.useState)(null),y=Object(i.a)(S,2),w=y[0],L=y[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,_(p);case 3:t=e.sent,r(t),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:p,onChange:function(e){return f(Number(e.target.value))}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},b?c.a.createElement(v,null):c.a.createElement(m,{posts:n,selectedPostId:w,onPostIdSelect:L,changePostDetailsLoadingStatus:g})),c.a.createElement("div",{className:"App__content"},w&&c.a.createElement(N,{arePostDetailsLoading:P,changePostDetailsLoadingStatus:g,selectedPostId:w}))))};o.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.bc2da98b.chunk.js.map