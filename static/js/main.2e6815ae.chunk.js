(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(13),a(1)),u=a(7);function i(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var s=function(e,t,a){return"#"+i(e)+i(t)+i(a)},m=function(e){var t=e.rgb,a=e.weight,c=e.index,o=e.hexColor,i=Object(n.useState)(!1),m=Object(l.a)(i,2),b=m[0],p=m[1],f=(s.apply(void 0,Object(u.a)(t)),t.join(",")),E="#".concat(o);return Object(n.useEffect)((function(){var e=setTimeout((function(){p(!1)}),3e3);return function(){return clearTimeout(e)}}),[b]),r.a.createElement("article",{onClick:function(){p(!0),navigator.clipboard.writeText(E)},className:"color ".concat(c>100&&"color-light"),style:{backgroundColor:"rgb(".concat(f,")")}},r.a.createElement("p",{className:"percent-value"},a,"%"),r.a.createElement("p",{className:"color-value"},E),b&&r.a.createElement("p",{className:"alert"},"copied to clipboard"))},b=a(4),p=a.n(b);var f=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),i=u[0],s=u[1],b=Object(n.useState)(new p.a("#f16050").all(1)),f=Object(l.a)(b,2),E=f[0],v=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"container"},r.a.createElement("h3",null,"color generator"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=new p.a(a).all(5);v(t),s(!1)}catch(i){s(!0)}}},r.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"#f15025",className:"".concat(i?"error":null)}),r.a.createElement("button",{className:"btn",type:"submit"},"Submit"))),r.a.createElement("section",{className:"colors"},E.map((function(e,t){e.hex;return r.a.createElement(m,Object.assign({key:t},e,{index:t,hexColor:e.hex}))}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2e6815ae.chunk.js.map