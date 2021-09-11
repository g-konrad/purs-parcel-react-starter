// Generated by purs version 0.14.3
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Bifunctor = function (bimap) {
    this.bimap = bimap;
};
var bimap = function (dict) {
    return dict.bimap;
};
var lmap = function (dictBifunctor) {
    return function (f) {
        return bimap(dictBifunctor)(f)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var rmap = function (dictBifunctor) {
    return bimap(dictBifunctor)(Control_Category.identity(Control_Category.categoryFn));
};
var bifunctorTuple = new Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            return new Data_Tuple.Tuple(f(v.value0), g(v.value1));
        };
    };
});
var bifunctorEither = new Bifunctor(function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Data_Either.Left) {
                return new Data_Either.Left(v(v2.value0));
            };
            if (v2 instanceof Data_Either.Right) {
                return new Data_Either.Right(v1(v2.value0));
            };
            throw new Error("Failed pattern match at Data.Bifunctor (line 32, column 1 - line 34, column 36): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
});
var bifunctorConst = new Bifunctor(function (f) {
    return function (v) {
        return function (v1) {
            return f(v1);
        };
    };
});
module.exports = {
    bimap: bimap,
    Bifunctor: Bifunctor,
    lmap: lmap,
    rmap: rmap,
    bifunctorEither: bifunctorEither,
    bifunctorTuple: bifunctorTuple,
    bifunctorConst: bifunctorConst
};