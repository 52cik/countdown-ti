!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.countdown=t()}(this,function(){"use strict";function e(){}return function(t,n,o){function i(e){var t=/^(\d{10}|\d{13})$/.test(e),n="string"==typeof e,o=parseInt(+new Date/1e3,10);(u=t?e>1e11?parseInt(e/1e3,10):e:n?parseInt(+new Date(e)/1e3,10):o+e)<=o&&(u=0)}function r(){var e=parseInt(u+1-new Date/1e3,10);e<=0?o.call(f):(a=setTimeout(r,1e3),n.call(f,e))}var u=0,a=0;o||(o=n||e,n=e);var f={abort:function(){clearTimeout(a)},setTime:i};return i(t),r(),f}});
//# sourceMappingURL=countdown.js.map
