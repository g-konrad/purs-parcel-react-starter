// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLMeterElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLMeterElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLMeterElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLMeterElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLMeterElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLMeterElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLMeterElement");
module.exports = {
    fromHTMLElement: fromHTMLElement,
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toHTMLElement: toHTMLElement,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    value: $foreign.value,
    setValue: $foreign.setValue,
    min: $foreign.min,
    setMin: $foreign.setMin,
    max: $foreign.max,
    setMax: $foreign.setMax,
    low: $foreign.low,
    setLow: $foreign.setLow,
    high: $foreign.high,
    setHigh: $foreign.setHigh,
    optimum: $foreign.optimum,
    setOptimum: $foreign.setOptimum,
    labels: $foreign.labels
};
