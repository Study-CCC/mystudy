"use strict";

var repeatedSubstringPattern = function repeatedSubstringPattern(s) {
  var s1 = (s + s).slice(1, -1);
  return s1.includes(s);
};