(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),c=n.n(a),i=n(1),s=n(4),l=n(11),u=n(12),d=n(2),h={searchFieldInput:""},f={isPending:!1,robots:[],error:""},p=(n(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(25);var E=function(e){var t=e.id,n=e.name,o=e.email,a=e.src;return r.a.createElement("div",{className:"tc bg-light-green dib br3 ma3 ma2 grow  shadow-5"},r.a.createElement("img",{src:a,alt:"robot ".concat(t)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,o)))},g=function(e){return e.robots.map((function(e){var t=e.id,n=e.name,o=e.email;return r.a.createElement(E,{id:t,name:n,email:o,key:t,src:"https://robohash.org/".concat(t,"?200x200")})}))},v=n(13),m=function(e){var t=e.sendSearchInput,n=Object(o.useState)(""),a=Object(v.a)(n,2),c=a[0],i=a[1];return Object(o.useEffect)((function(){t(c)})),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"search",placeholder:"Search Robot",value:c,onChange:function(e){i(e.target.value)}})))},R=new Headers({"Access-Control-Allow-Origin":"https://jsonplaceholder.typicode.com/users"}),w=function(e){var t=e.title;return r.a.createElement("div",null,r.a.createElement("h1",null,t))},S=Object(s.b)((function(e){return{searchFieldInput:e.searchRobots.searchFieldInput,pending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{handleSearchInput:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users",{headers:R}).then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_ERROR",payload:t})}))}))}}}))((function(e){var t=e.searchFieldInput,n=e.handleSearchInput,a=e.robots,c=e.pending,i=e.onRequestRobots;Object(o.useEffect)((function(){i()}),[]);var s=a.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return c?r.a.createElement("h1",{className:"tc"},"Loading.."):r.a.createElement("div",{className:"tc"},r.a.createElement(w,{title:"Robo Friends"}),r.a.createElement(m,{sendSearchInput:n}),r.a.createElement(g,{robots:s}))})),O=Object(l.createLogger)(),y=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(d.a)({},e,{searchFieldInput:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(d.a)({},f,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(d.a)({},f,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_ERROR":return Object(d.a)({},f,{isPending:!1,error:t.payload});default:return e}}}),j=Object(i.d)(y,Object(i.a)(u.a,O));c.a.render(r.a.createElement(s.a,{store:j},r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-tryout",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-tryout","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.75cc45f9.chunk.js.map