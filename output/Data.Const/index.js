// Generated by purs version 0.14.3
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Const = function (x) {
    return x;
};
var showConst = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Const " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semiringConst = function (dictSemiring) {
    return dictSemiring;
};
var semigroupoidConst = new Control_Semigroupoid.Semigroupoid(function (v) {
    return function (v1) {
        return v1;
    };
});
var semigroupConst = function (dictSemigroup) {
    return dictSemigroup;
};
var ringConst = function (dictRing) {
    return dictRing;
};
var ordConst = function (dictOrd) {
    return dictOrd;
};
var newtypeConst = new Data_Newtype.Newtype(function () {
    return undefined;
});
var monoidConst = function (dictMonoid) {
    return dictMonoid;
};
var heytingAlgebraConst = function (dictHeytingAlgebra) {
    return dictHeytingAlgebra;
};
var functorConst = new Data_Functor.Functor(function (f) {
    return function (m) {
        return m;
    };
});
var invariantConst = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorConst));
var euclideanRingConst = function (dictEuclideanRing) {
    return dictEuclideanRing;
};
var eqConst = function (dictEq) {
    return dictEq;
};
var eq1Const = function (dictEq) {
    return new Data_Eq.Eq1(function (dictEq1) {
        return Data_Eq.eq(eqConst(dictEq));
    });
};
var ord1Const = function (dictOrd) {
    return new Data_Ord.Ord1(function () {
        return eq1Const(dictOrd.Eq0());
    }, function (dictOrd1) {
        return Data_Ord.compare(ordConst(dictOrd));
    });
};
var commutativeRingConst = function (dictCommutativeRing) {
    return dictCommutativeRing;
};
var boundedConst = function (dictBounded) {
    return dictBounded;
};
var booleanAlgebraConst = function (dictBooleanAlgebra) {
    return dictBooleanAlgebra;
};
var applyConst = function (dictSemigroup) {
    return new Control_Apply.Apply(function () {
        return functorConst;
    }, function (v) {
        return function (v1) {
            return Data_Semigroup.append(dictSemigroup)(v)(v1);
        };
    });
};
var applicativeConst = function (dictMonoid) {
    return new Control_Applicative.Applicative(function () {
        return applyConst(dictMonoid.Semigroup0());
    }, function (v) {
        return Data_Monoid.mempty(dictMonoid);
    });
};
module.exports = {
    Const: Const,
    newtypeConst: newtypeConst,
    eqConst: eqConst,
    eq1Const: eq1Const,
    ordConst: ordConst,
    ord1Const: ord1Const,
    boundedConst: boundedConst,
    showConst: showConst,
    semigroupoidConst: semigroupoidConst,
    semigroupConst: semigroupConst,
    monoidConst: monoidConst,
    semiringConst: semiringConst,
    ringConst: ringConst,
    euclideanRingConst: euclideanRingConst,
    commutativeRingConst: commutativeRingConst,
    heytingAlgebraConst: heytingAlgebraConst,
    booleanAlgebraConst: booleanAlgebraConst,
    functorConst: functorConst,
    invariantConst: invariantConst,
    applyConst: applyConst,
    applicativeConst: applicativeConst
};