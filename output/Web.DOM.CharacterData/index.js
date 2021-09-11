// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
module.exports = {
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromEventTarget: fromEventTarget,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toEventTarget: toEventTarget,
    data_: $foreign.data_,
    length: $foreign.length,
    substringData: $foreign.substringData,
    appendData: $foreign.appendData,
    insertData: $foreign.insertData,
    deleteData: $foreign.deleteData,
    replaceData: $foreign.replaceData
};