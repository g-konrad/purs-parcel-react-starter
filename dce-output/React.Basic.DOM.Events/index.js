// Generated by purs version 0.13.8
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var React_Basic_Events = require("../React.Basic.Events/index.js");
var stopPropagation = React_Basic_Events.unsafeEventFn(function (e) {
    return Effect_Unsafe.unsafePerformEffect(function __do() {
        var $dollar__unused = e.stopPropagation();
        return e;
    });
});
var preventDefault = React_Basic_Events.unsafeEventFn(function (e) {
    return Effect_Unsafe.unsafePerformEffect(function __do() {
        var $dollar__unused = e.preventDefault();
        return e;
    });
});
var capture = function (eventFn) {
    return React_Basic_Events.handler(Control_Semigroupoid.composeFlipped(React_Basic_Events.semigroupoidBuilder)(preventDefault)(Control_Semigroupoid.composeFlipped(React_Basic_Events.semigroupoidBuilder)(stopPropagation)(eventFn)));
};
var capture_ = function (cb) {
    return capture(Control_Category.identity(React_Basic_Events.categoryBuilder))(function (v) {
        return cb;
    });
};
module.exports = {
    capture: capture,
    capture_: capture_,
    preventDefault: preventDefault,
    stopPropagation: stopPropagation
};
