!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,m=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),d?g(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=b();if(O(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function S(e){return f=void 0,v&&r?g(e):(r=o=void 0,a)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(s)return f=setTimeout(w,t),g(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,p(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:S(b())},T}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var h=document.querySelector(".feedback-form"),O="feedback-form-state",w={},S=localStorage.getItem(O);if(S){w=JSON.parse(S);var T=!0,x=!1,N=void 0;try{for(var E,I=Object.keys(w)[Symbol.iterator]();!(T=(E=I.next()).done);T=!0){var M=E.value;h.elements[M].value=w[M]}}catch(e){x=!0,N=e}finally{try{T||null==I.return||I.return()}finally{if(x)throw N}}}h.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),e.currentTarget.reset(),w={},localStorage.removeItem(O)})),h.addEventListener("input",e(t)((function(e){e.target.name in h.elements&&(w[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(w)))}),500))}();
//# sourceMappingURL=03-feedback.d017a667.js.map
