// Generated by purs version 0.13.8
"use strict";
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var React_Basic = require("../React.Basic/index.js");
var React_Basic_DOM_Internal = require("../React.Basic.DOM.Internal/index.js");
var _h2$prime = Effect_Unsafe.unsafePerformEffect(React_Basic_DOM_Internal.unsafeCreateDOMComponent("h2"));
var h2$prime = function (dictUnion) {
    return _h2$prime;
};
var h2 = function (dictUnion) {
    return React_Basic.element(h2$prime());
};
var h2_ = function (children) {
    return h2()({
        children: children
    });
};
var _h1$prime = Effect_Unsafe.unsafePerformEffect(React_Basic_DOM_Internal.unsafeCreateDOMComponent("h1"));
var h1$prime = function (dictUnion) {
    return _h1$prime;
};
var h1 = function (dictUnion) {
    return React_Basic.element(h1$prime());
};
var h1_ = function (children) {
    return h1()({
        children: children
    });
};
var _div$prime = Effect_Unsafe.unsafePerformEffect(React_Basic_DOM_Internal.unsafeCreateDOMComponent("div"));
var div$prime = function (dictUnion) {
    return _div$prime;
};
var div = function (dictUnion) {
    return React_Basic.element(div$prime());
};
var div_ = function (children) {
    return div()({
        children: children
    });
};
var _button$prime = Effect_Unsafe.unsafePerformEffect(React_Basic_DOM_Internal.unsafeCreateDOMComponent("button"));
var button$prime = function (dictUnion) {
    return _button$prime;
};
var button = function (dictUnion) {
    return React_Basic.element(button$prime());
};
module.exports = {
    button: button,
    "button'": button$prime,
    "_button'": _button$prime,
    div: div,
    div_: div_,
    "div'": div$prime,
    "_div'": _div$prime,
    h1: h1,
    h1_: h1_,
    "h1'": h1$prime,
    "_h1'": _h1$prime,
    h2: h2,
    h2_: h2_,
    "h2'": h2$prime,
    "_h2'": _h2$prime
};
