// Generated by purs version 0.14.3
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Comparison = require("../Data.Comparison/index.js");
var Data_Equivalence = require("../Data.Equivalence/index.js");
var Data_Op = require("../Data.Op/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Predicate = require("../Data.Predicate/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Divide = function (Contravariant0, divide) {
    this.Contravariant0 = Contravariant0;
    this.divide = divide;
};
var dividePredicate = new Divide(function () {
    return Data_Predicate.contravariantPredicate;
}, function (f) {
    return function (v) {
        return function (v1) {
            return function (a) {
                var v2 = f(a);
                return v(v2.value0) && v1(v2.value1);
            };
        };
    };
});
var divideOp = function (dictSemigroup) {
    return new Divide(function () {
        return Data_Op.contravariantOp;
    }, function (f) {
        return function (v) {
            return function (v1) {
                return function (a) {
                    var v2 = f(a);
                    return Data_Semigroup.append(dictSemigroup)(v(v2.value0))(v1(v2.value1));
                };
            };
        };
    });
};
var divideEquivalence = new Divide(function () {
    return Data_Equivalence.contravariantEquivalence;
}, function (f) {
    return function (v) {
        return function (v1) {
            return function (a) {
                return function (b) {
                    var v2 = f(a);
                    var v3 = f(b);
                    return v(v2.value0)(v3.value0) && v1(v2.value1)(v3.value1);
                };
            };
        };
    };
});
var divideComparison = new Divide(function () {
    return Data_Comparison.contravariantComparison;
}, function (f) {
    return function (v) {
        return function (v1) {
            return function (a) {
                return function (b) {
                    var v2 = f(a);
                    var v3 = f(b);
                    return Data_Semigroup.append(Data_Ordering.semigroupOrdering)(v(v2.value0)(v3.value0))(v1(v2.value1)(v3.value1));
                };
            };
        };
    };
});
var divide = function (dict) {
    return dict.divide;
};
var divided = function (dictDivide) {
    return divide(dictDivide)(Control_Category.identity(Control_Category.categoryFn));
};
module.exports = {
    divide: divide,
    Divide: Divide,
    divided: divided,
    divideComparison: divideComparison,
    divideEquivalence: divideEquivalence,
    dividePredicate: dividePredicate,
    divideOp: divideOp
};
