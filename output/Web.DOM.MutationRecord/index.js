// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var MutationRecordAttributes = (function () {
    function MutationRecordAttributes() {

    };
    MutationRecordAttributes.value = new MutationRecordAttributes();
    return MutationRecordAttributes;
})();
var MutationRecordCharacterData = (function () {
    function MutationRecordCharacterData() {

    };
    MutationRecordCharacterData.value = new MutationRecordCharacterData();
    return MutationRecordCharacterData;
})();
var MutationRecordChildList = (function () {
    function MutationRecordChildList() {

    };
    MutationRecordChildList.value = new MutationRecordChildList();
    return MutationRecordChildList;
})();
var type_ = function (dictPartial) {
    var stringToType = function (v) {
        if (v === "attributes") {
            return MutationRecordAttributes.value;
        };
        if (v === "characterData") {
            return MutationRecordCharacterData.value;
        };
        if (v === "childList") {
            return MutationRecordChildList.value;
        };
        throw new Error("Failed pattern match at Web.DOM.MutationRecord (line 36, column 18 - line 39, column 43): " + [ v.constructor.name ]);
    };
    var $6 = Data_Functor.map(Effect.functorEffect)(stringToType);
    return function ($7) {
        return $6($foreign.typeString($7));
    };
};
var previousSibling = (function () {
    var $8 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($9) {
        return $8($foreign["_previousSibling"]($9));
    };
})();
var oldValue = (function () {
    var $10 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($11) {
        return $10($foreign["_oldValue"]($11));
    };
})();
var nextSibling = (function () {
    var $12 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($13) {
        return $12($foreign["_nextSibling"]($13));
    };
})();
var attributeNamespace = (function () {
    var $14 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($15) {
        return $14($foreign["_attributeNamespace"]($15));
    };
})();
var attributeName = (function () {
    var $16 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($17) {
        return $16($foreign["_attributeName"]($17));
    };
})();
module.exports = {
    MutationRecordAttributes: MutationRecordAttributes,
    MutationRecordCharacterData: MutationRecordCharacterData,
    MutationRecordChildList: MutationRecordChildList,
    type_: type_,
    nextSibling: nextSibling,
    previousSibling: previousSibling,
    attributeName: attributeName,
    attributeNamespace: attributeNamespace,
    oldValue: oldValue,
    typeString: $foreign.typeString,
    target: $foreign.target,
    addedNodes: $foreign.addedNodes,
    removedNodes: $foreign.removedNodes
};
