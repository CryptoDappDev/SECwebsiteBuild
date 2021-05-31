/* eslint-disable */

(function() {

"use strict";var _slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,i=!1,o=void 0;try{for(var a,c=r[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);n=!0);}catch(r){i=!0,o=r}finally{try{!n&&c.return&&c.return()}finally{if(i)throw o}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};window.__defineSetter__("Webflow",function(r){function i(t,n){Object.entries(t).forEach(function(r){var e=_slicedToArray(r,2),r=e[0],e=e[1];e instanceof Object&&i(e,n),n(r,e,t)})}var n=r.require;r.require=function(r){var e,t=Object.assign({},n(r));return/^ix2?$/.test(r)&&(e=t.init,t.init=function(r){return i(r,function(r,e,t){"selector"==r&&(t.selector=t.selector.replace(/\.([\w_-]+)/g,".af-class-$1").replace(/\[class(.?)="( ?)([^"]+)( ?)"\]/g,'[class$1="$2af-class-$3$4"]'))}),e(r)}),t},window.__defineGetter__("Webflow",function(){return r})});

}).call(window)

/* eslint-enable */