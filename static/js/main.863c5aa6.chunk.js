(this.webpackJsonprobotfriend=this.webpackJsonprobotfriend||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(12),a(1)),i=a(2),s=a(4),u=a(3),h=(a(13),function(e){var t=e.id,a=e.name,n=e.email,o=e.website;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"".concat(t),src:"https://robohash.org/".concat(t,"?100x100")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n),r.a.createElement("p",null,r.a.createElement("a",{href:"http://".concat(o)},o))))}),m=function(e){var t=e.robotdata,a=t.map((function(e,a){return r.a.createElement(h,{key:a,id:t[a].id,name:t[a].name,email:t[a].email,website:t[a].website})}));return r.a.createElement("div",null,a)},d=(a(14),function(e){return r.a.createElement("div",{className:"scroll-wrapper"},e.children)}),f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"Search Robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. This is not good!!!"):this.props.children}}]),a}(r.a.Component),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robotdata:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robotdata:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robotdata,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return 0===!t.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null," RobotFriend"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(b,null,r.a.createElement(m,{robotdata:n}))))}}]),a}(r.a.Component);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.863c5aa6.chunk.js.map