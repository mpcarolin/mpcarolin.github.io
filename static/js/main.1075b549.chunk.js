(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(62)},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),i=(n(27),n(6)),l=n(7),u=n(9),s=n(8),m=n(10),p=(n(29),n(64)),f=n(65),h=n(66),d=(n(31),n(20)),b=n.n(d),j=function(e,t){return-1*(new Date(e.updated_at)-new Date(t.updated_at))},k=function(e){return r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"project-header"},r.a.createElement("span",{className:"project-name"},r.a.createElement("a",{href:e.project.html_url},e.project.name))),r.a.createElement("div",{className:"project-content"},r.a.createElement("span",{className:"project-lang"},e.project.language),r.a.createElement("p",null,e.project.description)))},E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise(function(e,t){b.a.get("https://api.github.com/users/mpcarolin/repos").then(function(n){200===n.status?e(n.data.map(function(e){return e.name+=e.fork?" (fork)":"",e})):t(n.status)})}).then(function(t){e.setState({projects:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"projects-container"},this.state.projects.filter(function(e){return e.stargazers_count>0}).sort(j).map(function(e){return r.a.createElement(k,{project:e,key:e.name})}))}}]),t}(a.Component),v=(n(52),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"blog-container"},r.a.createElement("i",null,"Coming soon"))}}]),t}(a.Component)),w=(n(54),[{name:"Contact",route:"mailto:mpcarolin.dev@gmail.com"},{name:"LinkedIn",route:"http://www.linkedin.com/in/mpcarolin"},{name:"Github",route:"https://github.com/mpcarolin"}]),g=function(e){return r.a.createElement("h4",null,r.a.createElement("a",{className:"about-link",href:e.link.route},e.link.name))},y=[{name:"projects",route:"/projects",component:E},{name:"blog",route:"/blog",component:v},{name:"about",route:"/about",component:function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("h3",{className:"about-header"},"About me"),r.a.createElement("p",{className:"about-description"},"\n\tHi, I'm Michael Carolin: a Software Engineer who likes to build web applications, explore\n\tfunctional programming, and sometimes write about software design, mechanical keyboards, and science fiction.\n"),w.map(function(e){return r.a.createElement(g,{link:e,key:e.name})}))}}]),t}(a.Component)}],N=function(e){var t="nav-link "+(e.isCurrent?"selected":""),n=e.link.route===window.location.pathname?"":"hide";return r.a.createElement("span",{className:"nav-link-flex-container",key:e.link.name},r.a.createElement("li",{className:t},r.a.createElement("span",{className:n},">_"),r.a.createElement(p.a,{className:"router-link",to:e.link.route},e.link.name)))},O=function(e){return r.a.createElement("ul",{className:e.containerClass||""},e.links.map(function(t){return r.a.createElement(N,{key:t.route,link:t,isCurrent:t.route===e.currentPage})}))},C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={currentPage:"/"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"site-root"},r.a.createElement("div",{className:"nav-bar-container"},r.a.createElement("div",{className:"nav-title"},r.a.createElement("a",{href:"/"},"recurse-carefully")),r.a.createElement(O,{links:y.filter(function(e){return"/"!==e.route}),currentPage:this.state.currentPage,containerClass:"nav-link-desktop-container"})),r.a.createElement("div",{className:"content-container"},y.map(function(e){return r.a.createElement(h.a,{exact:!0,key:e.route,path:e.route,component:e.component})}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(59);o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.1075b549.chunk.js.map