!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),d?p(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=g();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?m(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?p(e):(r=o=void 0,u)}function T(){var e=g(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?y(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O,S=document.querySelector(".feedback-form"),h="feedback-form-state",w=localStorage.getItem(h);if(w){O=JSON.parse(w);var T=!0,x=!1,N=void 0;try{for(var E,I=Object.keys(O)[Symbol.iterator]();!(T=(E=I.next()).done);T=!0){var M=E.value;S.elements[M].value=O[M]}}catch(e){x=!0,N=e}finally{try{T||null==I.return||I.return()}finally{if(x)throw N}}}S.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(JSON.parse(localStorage.getItem(h))),localStorage.removeItem(h)})),S.addEventListener("input",e(t)((function(e){e.target.name in S.elements&&(O[e.target.name]=e.target.value);localStorage.setItem(h,JSON.stringify(O))}),500))}();
//# sourceMappingURL=03-feedback.0a7ad50c.js.map
