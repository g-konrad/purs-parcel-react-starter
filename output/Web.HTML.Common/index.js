// Generated by purs version 0.14.3
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var PropName = function (x) {
    return x;
};
var ClassName = function (x) {
    return x;
};
var AttrName = function (x) {
    return x;
};
var ordPropName = Data_Ord.ordString;
var ordClassName = Data_Ord.ordString;
var ordAttrName = Data_Ord.ordString;
var newtypePropName = new Data_Newtype.Newtype(function () {
    return undefined;
});
var newtypeClassName = new Data_Newtype.Newtype(function () {
    return undefined;
});
var newtypeAttrName = new Data_Newtype.Newtype(function () {
    return undefined;
});
var eqPropName = Data_Eq.eqString;
var eqClassName = Data_Eq.eqString;
var eqAttrName = Data_Eq.eqString;
module.exports = {
    PropName: PropName,
    AttrName: AttrName,
    ClassName: ClassName,
    newtypePropName: newtypePropName,
    eqPropName: eqPropName,
    ordPropName: ordPropName,
    newtypeAttrName: newtypeAttrName,
    eqAttrName: eqAttrName,
    ordAttrName: ordAttrName,
    newtypeClassName: newtypeClassName,
    eqClassName: eqClassName,
    ordClassName: ordClassName
};