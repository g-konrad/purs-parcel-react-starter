// Generated by purs version 0.14.3
"use strict";
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var BooleanAlgebraRecord = function (HeytingAlgebraRecord0) {
    this.HeytingAlgebraRecord0 = HeytingAlgebraRecord0;
};
var BooleanAlgebra = function (HeytingAlgebra0) {
    this.HeytingAlgebra0 = HeytingAlgebra0;
};
var booleanAlgebraUnit = new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraUnit;
});
var booleanAlgebraRecordNil = new BooleanAlgebraRecord(function () {
    return Data_HeytingAlgebra.heytingAlgebraRecordNil;
});
var booleanAlgebraRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictBooleanAlgebraRecord) {
            return function (dictBooleanAlgebra) {
                return new BooleanAlgebraRecord(function () {
                    return Data_HeytingAlgebra.heytingAlgebraRecordCons(dictIsSymbol)()(dictBooleanAlgebraRecord.HeytingAlgebraRecord0())(dictBooleanAlgebra.HeytingAlgebra0());
                });
            };
        };
    };
};
var booleanAlgebraRecord = function (dictRowToList) {
    return function (dictBooleanAlgebraRecord) {
        return new BooleanAlgebra(function () {
            return Data_HeytingAlgebra.heytingAlgebraRecord()(dictBooleanAlgebraRecord.HeytingAlgebraRecord0());
        });
    };
};
var booleanAlgebraProxy3 = new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraProxy3;
});
var booleanAlgebraProxy2 = new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraProxy2;
});
var booleanAlgebraProxy = new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraProxy;
});
var booleanAlgebraFn = function (dictBooleanAlgebra) {
    return new BooleanAlgebra(function () {
        return Data_HeytingAlgebra.heytingAlgebraFunction(dictBooleanAlgebra.HeytingAlgebra0());
    });
};
var booleanAlgebraBoolean = new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraBoolean;
});
module.exports = {
    BooleanAlgebra: BooleanAlgebra,
    BooleanAlgebraRecord: BooleanAlgebraRecord,
    booleanAlgebraBoolean: booleanAlgebraBoolean,
    booleanAlgebraUnit: booleanAlgebraUnit,
    booleanAlgebraFn: booleanAlgebraFn,
    booleanAlgebraRecord: booleanAlgebraRecord,
    booleanAlgebraProxy: booleanAlgebraProxy,
    booleanAlgebraProxy2: booleanAlgebraProxy2,
    booleanAlgebraProxy3: booleanAlgebraProxy3,
    booleanAlgebraRecordNil: booleanAlgebraRecordNil,
    booleanAlgebraRecordCons: booleanAlgebraRecordCons,
    HeytingAlgebra: Data_HeytingAlgebra.HeytingAlgebra,
    HeytingAlgebraRecord: Data_HeytingAlgebra.HeytingAlgebraRecord,
    conj: Data_HeytingAlgebra.conj,
    disj: Data_HeytingAlgebra.disj,
    ff: Data_HeytingAlgebra.ff,
    implies: Data_HeytingAlgebra.implies,
    not: Data_HeytingAlgebra.not,
    tt: Data_HeytingAlgebra.tt
};
