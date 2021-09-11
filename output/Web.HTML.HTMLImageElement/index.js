// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Effect_Uncurried = require("../Effect.Uncurried/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_HTML_HTMLImageElement_CORSMode = require("../Web.HTML.HTMLImageElement.CORSMode/index.js");
var Web_HTML_HTMLImageElement_DecodingHint = require("../Web.HTML.HTMLImageElement.DecodingHint/index.js");
var Web_HTML_HTMLImageElement_Laziness = require("../Web.HTML.HTMLImageElement.Laziness/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var setLoading = function (laziness) {
    return Effect_Uncurried.runEffectFn2($foreign["_setLoading"])(Web_HTML_HTMLImageElement_Laziness.print(laziness));
};
var setDecoding = function (hint) {
    return Effect_Uncurried.runEffectFn2($foreign["_setDecoding"])(Web_HTML_HTMLImageElement_DecodingHint.print(hint));
};
var setCrossOrigin = function (mode) {
    return Effect_Uncurried.runEffectFn2($foreign["_setCrossOrigin"])(Web_HTML_HTMLImageElement_CORSMode.print(mode));
};
var loading = (function () {
    var $0 = Data_Functor.map(Effect.functorEffect)((function () {
        var $3 = Data_Maybe.fromMaybe(Web_HTML_HTMLImageElement_Laziness.Eager.value);
        return function ($4) {
            return $3(Web_HTML_HTMLImageElement_Laziness.parse($4));
        };
    })());
    var $1 = Effect_Uncurried.runEffectFn1($foreign["_loading"]);
    return function ($2) {
        return $0($1($2));
    };
})();
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var decoding = (function () {
    var $5 = Data_Functor.map(Effect.functorEffect)((function () {
        var $8 = Data_Maybe.fromMaybe(Web_HTML_HTMLImageElement_DecodingHint.Auto.value);
        return function ($9) {
            return $8(Web_HTML_HTMLImageElement_DecodingHint.parse($9));
        };
    })());
    var $6 = Effect_Uncurried.runEffectFn1($foreign["_decoding"]);
    return function ($7) {
        return $5($6($7));
    };
})();
var crossOrigin = (function () {
    var $10 = Data_Functor.map(Effect.functorEffect)(Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(Web_HTML_HTMLImageElement_CORSMode.parse)(Data_Nullable.toMaybe));
    var $11 = Effect_Uncurried.runEffectFn1($foreign["_crossOrigin"]);
    return function ($12) {
        return $10($11($12));
    };
})();
var create$prime = $foreign.createWithDimensions;
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
    "create'": create$prime,
    crossOrigin: crossOrigin,
    setCrossOrigin: setCrossOrigin,
    decoding: decoding,
    setDecoding: setDecoding,
    loading: loading,
    setLoading: setLoading,
    create: $foreign.create,
    alt: $foreign.alt,
    setAlt: $foreign.setAlt,
    src: $foreign.src,
    setSrc: $foreign.setSrc,
    srcset: $foreign.srcset,
    setSrcset: $foreign.setSrcset,
    currentSrc: $foreign.currentSrc,
    sizes: $foreign.sizes,
    setSizes: $foreign.setSizes,
    useMap: $foreign.useMap,
    setUseMap: $foreign.setUseMap,
    isMap: $foreign.isMap,
    setIsMap: $foreign.setIsMap,
    width: $foreign.width,
    setWidth: $foreign.setWidth,
    height: $foreign.height,
    setHeight: $foreign.setHeight,
    naturalWidth: $foreign.naturalWidth,
    naturalHeight: $foreign.naturalHeight,
    referrerPolicy: $foreign.referrerPolicy,
    setReferrerPolicy: $foreign.setReferrerPolicy,
    complete: $foreign.complete
};
