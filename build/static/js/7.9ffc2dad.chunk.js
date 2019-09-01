(window["webpackJsonpblue-blood-web"]=window["webpackJsonpblue-blood-web"]||[]).push([[7],{179:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},180:function(e,n,t){"use strict";t.d(n,"d",function(){return i}),t.d(n,"e",function(){return l}),t.d(n,"f",function(){return c}),t.d(n,"h",function(){return s}),t.d(n,"g",function(){return f}),t.d(n,"c",function(){return p}),t.d(n,"a",function(){return m}),t.d(n,"b",function(){return b});t(183);var a,r=t(1),o=t.n(r);function i(e,n){return void 0===e&&(e=""),void 0===n&&(n=a),n?e.split(" ").map(function(e){return n[e]||e}).join(" "):e}function l(e,n){var t={};return Object.keys(e).forEach(function(a){-1===n.indexOf(a)&&(t[a]=e[a])}),t}function c(e,n){for(var t,a=Array.isArray(n)?n:[n],r=a.length,o={};r>0;)o[t=a[r-=1]]=e[t];return o}var u={};function s(e){u[e]||("undefined"!==typeof console&&console.error(e),u[e]=!0)}var d="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,n,t){if(!(e[n]instanceof d))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var f=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],b={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"===typeof window||!window.document||window.document.createElement},183:function(e,n,t){(function(n){var t="[object AsyncFunction]",a="[object Function]",r="[object GeneratorFunction]",o="[object Null]",i="[object Proxy]",l="[object Undefined]",c="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=c||u||Function("return this")(),d=Object.prototype,f=d.hasOwnProperty,p=d.toString,m=s.Symbol,b=m?m.toStringTag:void 0;function y(e){return null==e?void 0===e?l:o:b&&b in Object(e)?function(e){var n=f.call(e,b),t=e[b];try{e[b]=void 0;var a=!0}catch(o){}var r=p.call(e);a&&(n?e[b]=t:delete e[b]);return r}(e):function(e){return p.call(e)}(e)}e.exports=function(e){if(!function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}(e))return!1;var n=y(e);return n==a||n==r||n==t||n==i}}).call(this,t(43))},201:function(e,n,t){e.exports=t.p+"static/media/logo.6a4f3e4b.svg"},202:function(e,n,t){"use strict";var a=t(11),r=t(15),o=t(0),i=t.n(o),l=t(1),c=t.n(l),u=t(179),s=t.n(u),d=t(180),f={tag:d.g,fluid:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var n=e.className,t=e.cssModule,o=e.fluid,l=e.tag,c=Object(r.a)(e,["className","cssModule","fluid","tag"]),u=Object(d.d)(s()(n,o?"container-fluid":"container"),t);return i.a.createElement(l,Object(a.a)({},c,{className:u}))};p.propTypes=f,p.defaultProps={tag:"div"},n.a=p},243:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(202),i=t(27),l=t(201),c=t.n(l),u=Object(i.a)(function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,190))}),s=Object(i.a)(function(){return Promise.all([t.e(5),t.e(9)]).then(t.bind(null,225))}),d={padding:"10%",textAlign:"center"},f={color:"white"},p={backgroundColor:"white"};n.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(u,{title:"Home"}),r.a.createElement("div",{style:d},r.a.createElement("img",{src:c.a,width:"80%",height:"80%",alt:"Blue Blood Web Development"}),r.a.createElement("h1",{className:"display-4",style:f},"Modern Web Development"))),r.a.createElement("div",{style:p},r.a.createElement(o.a,null,r.a.createElement(u,{title:"Home"}),r.a.createElement("div",{style:d},r.a.createElement("h1",{className:"display-4"},"Our values"),r.a.createElement("p",{className:"lead"},"We believe in automation, data driven decisions and simplicity.")))),r.a.createElement(o.a,null,r.a.createElement("div",{style:d},r.a.createElement("h1",{className:"display-4",style:f},"Technologies"),r.a.createElement("p",{className:"lead",style:f},"We work with Node.js and React.js as our main components for web apps, universal web apps, mobile apps, and RESTful and GraphQL APIs. For machine learning and other CPU intensive tasks, and deployments, on the other hand, we most often use Python."))),r.a.createElement(s,null))}}}]);
//# sourceMappingURL=7.9ffc2dad.chunk.js.map