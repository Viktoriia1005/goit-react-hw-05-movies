"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{2541:function(t,n,r){r.r(n);var e=r(5861),a=r(8152),c=r(7757),u=r.n(c),i=r(4635),s=r(6871),o=r(2791),p=r(8350),f=r(184);n.default=function(){var t=(0,o.useState)(null),n=(0,a.Z)(t,2),r=n[0],c=n[1],l=(0,s.UO)().movie_id;return(0,o.useEffect)((function(){function t(){return(t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.rc(l);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l]),(0,f.jsx)("div",{children:r&&(0,f.jsx)("ul",{children:r.cast.map((function(t){return(0,f.jsxs)("li",{children:[null===t.profile_path?(0,f.jsx)("img",{src:p,alt:"",width:"200"}):(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:"",width:"200"}),(0,f.jsx)("p",{children:t.name}),(0,f.jsxs)("p",{children:["Character : ",t.character]})]},t.id)}))})})}},4635:function(t,n,r){r.d(n,{$4:function(){return p},Rl:function(){return l},aK:function(){return d},b7:function(){return o},rc:function(){return f}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u),s="76293c6bcb8bbcc89a96d2b767d5c3a3";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},8350:function(t,n,r){t.exports=r.p+"static/media/Cinema.7793bcb86b8010b4a586.png"}}]);
//# sourceMappingURL=541.21c20f88.chunk.js.map