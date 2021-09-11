"use strict";



  

exports.error = function (msg) {
  return new Error(msg);
};















  

exports.throwException = function (e) {
  return function () {
    throw e;
  };
};















  
