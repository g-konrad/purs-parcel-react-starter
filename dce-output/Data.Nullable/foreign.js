/* eslint-disable no-eq-null, eqeqeq */

"use strict";

                       

exports.nullable = function (a, r, f) {
  return a == null ? r : f(a);
};



  
