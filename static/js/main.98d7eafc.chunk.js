(this.webpackJsonpcody=this.webpackJsonpcody||[]).push([[0],{11:function(e,t,a){e.exports=a(27)},16:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),o=(a(16),a(2)),i=(a(17),a(18),a(19),a(20),a(21),a(9)),s=a(10),u=a(6);function m(e){var t=e.displayName,a=e.language,r=e.value,l=e.onChange,m=Object(n.useState)(!0),p=Object(o.a)(m,2),d=p[0],f=p[1];return c.a.createElement("div",{className:"editor-container ".concat(d?"":"collapsed")},c.a.createElement("div",{className:"editor-title"},t,c.a.createElement("button",{type:"button",className:"expand-collapse-btn",onClick:function(){return f((function(e){return!e}))}},c.a.createElement(s.a,{icon:d?u.a:u.b}))),c.a.createElement(i.Controlled,{onBeforeChange:function(e,t,a){l(a)},value:r,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:a,lineNumbers:!0,theme:"material"}}))}function p(e,t){var a="cody"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),r=Object(o.a)(c,2),l=r[0],i=r[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,i]}var d=function(){var e=p("html",""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=p("css",""),i=Object(o.a)(l,2),s=i[0],u=i[1],d=p("js",""),f=Object(o.a)(d,2),b=f[0],g=f[1],v=Object(n.useState)(""),E=Object(o.a)(v,2),h=E[0],y=E[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){y("\n      <html>\n        <body>".concat(a,"</body>\n        <style>").concat(s,"</style>\n        <script>").concat(b,"<\/script>\n        </html>\n    "))}),250);return function(){return clearTimeout(e)}}),[a,s,b]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pane top-pane"},c.a.createElement(m,{language:"xml",displayName:"HTML",value:a,onChange:r}),c.a.createElement(m,{language:"css",displayName:"CSS",value:s,onChange:u}),c.a.createElement(m,{language:"javascript",displayName:"JS",value:b,onChange:g})),c.a.createElement("div",{className:"pane"},c.a.createElement("iframe",{srcDoc:h,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.98d7eafc.chunk.js.map