"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[926],{1926:function(e,t,n){n.r(t);var r,a=n(5861),c=n(8152),u=n(168),s=n(7757),o=n.n(s),i=n(3504),p=n(4635),f=n(6031),l=n(2791),v=n(184),d=f.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n"])));t.default=function(){var e=(0,l.useState)(""),t=(0,c.Z)(e,2),n=t[0],r=t[1],u=(0,l.useState)(null),s=(0,c.Z)(u,2),f=s[0],h=s[1],m=(0,l.useRef)();(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.aK(n);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.current?function(){e.apply(this,arguments)}():m.current=!0}),[n]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(e,t){e.preventDefault(),r(e.target.elements.query.value),e.target.reset()},children:[(0,v.jsx)("input",{type:"text",name:"query"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),f&&(0,v.jsx)(d,{children:f.results.map((function(e){return(0,v.jsx)(i.rU,{to:{pathname:"/movies/".concat(e.id)},children:e.title},e.id)}))})]})}},4635:function(e,t,n){n.d(t,{$4:function(){return p},Rl:function(){return l},aK:function(){return v},b7:function(){return i},rc:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o="76293c6bcb8bbcc89a96d2b767d5c3a3";s().defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/movie/day?api_key=76293c6bcb8bbcc89a96d2b767d5c3a3");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=926.50a5bdb9.chunk.js.map