"use strict";(self.webpackChunkgists_blog=self.webpackChunkgists_blog||[]).push([[192],{192:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){if(e&&("object"===u(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}n.r(e),n.d(e,{default:function(){return y}});var a=n(791),l=n(184),p={Accept:"application/vnd.github.v3.html+json"},h=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(s,t);var e,n,i,u=f(s);function s(){var t;r(this,s);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=u.call.apply(u,[this].concat(n))).state={comments:[]},t}return e=s,(n=[{key:"fetchGistComments",value:function(t){return fetch("https://api.github.com/gists/".concat(t,"/comments"),{headers:p}).then((function(t){return t.json()}))}},{key:"componentDidMount",value:function(){var t=this;this.fetchGistComments(this.props.gist).then((function(e){return t.setState({comments:e})}))}},{key:"render",value:function(){var t=this.state.comments;return 0===t.length?null:(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Comments"}),t.map((function(t){return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"".concat(t.user.avatar_url,"&size=40"),alt:"".concat(t.user.login," avatar"),width:20})," ",(0,l.jsx)("a",{href:t.user.html_url,children:t.user.login})," ",(0,l.jsx)("em",{children:"OWNER"===t.author_association&&"Author"})]}),(0,l.jsx)("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.body_html}})]},t.id)}))]})}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),s}(a.Component),y=h}}]);
//# sourceMappingURL=192.97a685e8.chunk.js.map