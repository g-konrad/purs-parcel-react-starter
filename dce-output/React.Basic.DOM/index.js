// Generated by purs version 0.13.8
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var text = Unsafe_Coerce.unsafeCoerce;
var render$prime = $foreign.renderThen;
var render = function (jsx) {
    return function (node) {
        return render$prime(jsx)(node)(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
    };
};
module.exports = {
    render: render,
    "render'": render$prime,
    text: text
};
