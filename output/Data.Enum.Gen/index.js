// Generated by purs version 0.14.3
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Monad_Gen = require("../Control.Monad.Gen/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var genBoundedEnum = function (dictMonadGen) {
    return function (dictBoundedEnum) {
        var v = Data_Enum.succ(dictBoundedEnum.Enum1())(Data_Bounded.bottom(dictBoundedEnum.Bounded0()));
        if (v instanceof Data_Maybe.Just) {
            var possibilities = Data_Enum.enumFromTo(dictBoundedEnum.Enum1())(Data_Unfoldable1.unfoldable1Array)(v.value0)(Data_Bounded.top(dictBoundedEnum.Bounded0()));
            return Control_Monad_Gen.elements(dictMonadGen)(Data_NonEmpty.foldable1NonEmpty(Data_Foldable.foldableArray))(new Data_NonEmpty.NonEmpty(Data_Bounded.bottom(dictBoundedEnum.Bounded0()), possibilities));
        };
        if (v instanceof Data_Maybe.Nothing) {
            return Control_Applicative.pure((dictMonadGen.Monad0()).Applicative0())(Data_Bounded.bottom(dictBoundedEnum.Bounded0()));
        };
        throw new Error("Failed pattern match at Data.Enum.Gen (line 13, column 3 - line 18, column 18): " + [ v.constructor.name ]);
    };
};
module.exports = {
    genBoundedEnum: genBoundedEnum
};
