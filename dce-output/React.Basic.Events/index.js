// Generated by purs version 0.13.8
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var EventFn = function (x) {
    return x;
};
var unsafeEventFn = EventFn;
var semigroupoidBuilder = Control_Semigroupoid.semigroupoidFn;
var handler = function (v) {
    return function (cb) {
        return function ($13) {
            return cb(v($13))();
        };
    };
};
var categoryBuilder = Control_Category.categoryFn;
module.exports = {
    unsafeEventFn: unsafeEventFn,
    handler: handler,
    semigroupoidBuilder: semigroupoidBuilder,
    categoryBuilder: categoryBuilder
};