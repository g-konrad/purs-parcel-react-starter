// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor_Coproduct = require("../Data.Functor.Coproduct/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Maybe_First = require("../Data.Maybe.First/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Foldable = function (foldMap, foldl, foldr) {
    this.foldMap = foldMap;
    this.foldl = foldl;
    this.foldr = foldr;
};
var foldr = function (dict) {
    return dict.foldr;
};
var indexr = function (dictFoldable) {
    return function (idx) {
        var go = function (a) {
            return function (cursor) {
                if (cursor.elem instanceof Data_Maybe.Just) {
                    return cursor;
                };
                var $152 = cursor.pos === idx;
                if ($152) {
                    return {
                        elem: new Data_Maybe.Just(a),
                        pos: cursor.pos
                    };
                };
                return {
                    pos: cursor.pos + 1 | 0,
                    elem: cursor.elem
                };
            };
        };
        var $309 = foldr(dictFoldable)(go)({
            elem: Data_Maybe.Nothing.value,
            pos: 0
        });
        return function ($310) {
            return (function (v) {
                return v.elem;
            })($309($310));
        };
    };
};
var $$null = function (dictFoldable) {
    return foldr(dictFoldable)(function (v) {
        return function (v1) {
            return false;
        };
    })(true);
};
var oneOf = function (dictFoldable) {
    return function (dictPlus) {
        return foldr(dictFoldable)(Control_Alt.alt(dictPlus.Alt0()))(Control_Plus.empty(dictPlus));
    };
};
var oneOfMap = function (dictFoldable) {
    return function (dictPlus) {
        return function (f) {
            return foldr(dictFoldable)((function () {
                var $311 = Control_Alt.alt(dictPlus.Alt0());
                return function ($312) {
                    return $311(f($312));
                };
            })())(Control_Plus.empty(dictPlus));
        };
    };
};
var traverse_ = function (dictApplicative) {
    return function (dictFoldable) {
        return function (f) {
            return foldr(dictFoldable)((function () {
                var $313 = Control_Apply.applySecond(dictApplicative.Apply0());
                return function ($314) {
                    return $313(f($314));
                };
            })())(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var for_ = function (dictApplicative) {
    return function (dictFoldable) {
        return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
    };
};
var sequence_ = function (dictApplicative) {
    return function (dictFoldable) {
        return traverse_(dictApplicative)(dictFoldable)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var foldl = function (dict) {
    return dict.foldl;
};
var indexl = function (dictFoldable) {
    return function (idx) {
        var go = function (cursor) {
            return function (a) {
                if (cursor.elem instanceof Data_Maybe.Just) {
                    return cursor;
                };
                var $155 = cursor.pos === idx;
                if ($155) {
                    return {
                        elem: new Data_Maybe.Just(a),
                        pos: cursor.pos
                    };
                };
                return {
                    pos: cursor.pos + 1 | 0,
                    elem: cursor.elem
                };
            };
        };
        var $315 = foldl(dictFoldable)(go)({
            elem: Data_Maybe.Nothing.value,
            pos: 0
        });
        return function ($316) {
            return (function (v) {
                return v.elem;
            })($315($316));
        };
    };
};
var intercalate = function (dictFoldable) {
    return function (dictMonoid) {
        return function (sep) {
            return function (xs) {
                var go = function (v) {
                    return function (x) {
                        if (v.init) {
                            return {
                                init: false,
                                acc: x
                            };
                        };
                        return {
                            init: false,
                            acc: Data_Semigroup.append(dictMonoid.Semigroup0())(v.acc)(Data_Semigroup.append(dictMonoid.Semigroup0())(sep)(x))
                        };
                    };
                };
                return (foldl(dictFoldable)(go)({
                    init: true,
                    acc: Data_Monoid.mempty(dictMonoid)
                })(xs)).acc;
            };
        };
    };
};
var length = function (dictFoldable) {
    return function (dictSemiring) {
        return foldl(dictFoldable)(function (c) {
            return function (v) {
                return Data_Semiring.add(dictSemiring)(Data_Semiring.one(dictSemiring))(c);
            };
        })(Data_Semiring.zero(dictSemiring));
    };
};
var maximumBy = function (dictFoldable) {
    return function (cmp) {
        var max$prime = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing) {
                    return new Data_Maybe.Just(v1);
                };
                if (v instanceof Data_Maybe.Just) {
                    return new Data_Maybe.Just((function () {
                        var $162 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1))(Data_Ordering.GT.value);
                        if ($162) {
                            return v.value0;
                        };
                        return v1;
                    })());
                };
                throw new Error("Failed pattern match at Data.Foldable (line 441, column 3 - line 441, column 27): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return foldl(dictFoldable)(max$prime)(Data_Maybe.Nothing.value);
    };
};
var maximum = function (dictOrd) {
    return function (dictFoldable) {
        return maximumBy(dictFoldable)(Data_Ord.compare(dictOrd));
    };
};
var minimumBy = function (dictFoldable) {
    return function (cmp) {
        var min$prime = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing) {
                    return new Data_Maybe.Just(v1);
                };
                if (v instanceof Data_Maybe.Just) {
                    return new Data_Maybe.Just((function () {
                        var $166 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1))(Data_Ordering.LT.value);
                        if ($166) {
                            return v.value0;
                        };
                        return v1;
                    })());
                };
                throw new Error("Failed pattern match at Data.Foldable (line 454, column 3 - line 454, column 27): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return foldl(dictFoldable)(min$prime)(Data_Maybe.Nothing.value);
    };
};
var minimum = function (dictOrd) {
    return function (dictFoldable) {
        return minimumBy(dictFoldable)(Data_Ord.compare(dictOrd));
    };
};
var product = function (dictFoldable) {
    return function (dictSemiring) {
        return foldl(dictFoldable)(Data_Semiring.mul(dictSemiring))(Data_Semiring.one(dictSemiring));
    };
};
var sum = function (dictFoldable) {
    return function (dictSemiring) {
        return foldl(dictFoldable)(Data_Semiring.add(dictSemiring))(Data_Semiring.zero(dictSemiring));
    };
};
var foldableTuple = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v.value1)(z);
        };
    };
});
var foldableMultiplicative = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableMaybe = new Foldable(function (dictMonoid) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof Data_Maybe.Nothing) {
                return Data_Monoid.mempty(dictMonoid);
            };
            if (v1 instanceof Data_Maybe.Just) {
                return v(v1.value0);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Maybe.Nothing) {
                return z;
            };
            if (v1 instanceof Data_Maybe.Just) {
                return v(z)(v1.value0);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Maybe.Nothing) {
                return z;
            };
            if (v1 instanceof Data_Maybe.Just) {
                return v(v1.value0)(z);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
});
var foldableIdentity = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableEither = new Foldable(function (dictMonoid) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return Data_Monoid.mempty(dictMonoid);
            };
            if (v1 instanceof Data_Either.Right) {
                return v(v1.value0);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 181, column 1 - line 187, column 28): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return z;
            };
            if (v1 instanceof Data_Either.Right) {
                return v(z)(v1.value0);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 181, column 1 - line 187, column 28): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return z;
            };
            if (v1 instanceof Data_Either.Right) {
                return v(v1.value0)(z);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 181, column 1 - line 187, column 28): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
});
var foldableDual = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableDisj = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableConst = new Foldable(function (dictMonoid) {
    return function (v) {
        return function (v1) {
            return Data_Monoid.mempty(dictMonoid);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            return z;
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            return z;
        };
    };
});
var foldableConj = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableAdditive = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldMapDefaultR = function (dictFoldable) {
    return function (dictMonoid) {
        return function (f) {
            return foldr(dictFoldable)(function (x) {
                return function (acc) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldableArray = new Foldable(function (dictMonoid) {
    return foldMapDefaultR(foldableArray)(dictMonoid);
}, $foreign.foldlArray, $foreign.foldrArray);
var foldMapDefaultL = function (dictFoldable) {
    return function (dictMonoid) {
        return function (f) {
            return foldl(dictFoldable)(function (acc) {
                return function (x) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(x));
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldMap = function (dict) {
    return dict.foldMap;
};
var foldableApp = function (dictFoldable) {
    return new Foldable(function (dictMonoid) {
        return function (f) {
            return function (v) {
                return foldMap(dictFoldable)(dictMonoid)(f)(v);
            };
        };
    }, function (f) {
        return function (i) {
            return function (v) {
                return foldl(dictFoldable)(f)(i)(v);
            };
        };
    }, function (f) {
        return function (i) {
            return function (v) {
                return foldr(dictFoldable)(f)(i)(v);
            };
        };
    });
};
var foldableCompose = function (dictFoldable) {
    return function (dictFoldable1) {
        return new Foldable(function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return foldMap(dictFoldable)(dictMonoid)(foldMap(dictFoldable1)(dictMonoid)(f))(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return foldl(dictFoldable)(foldl(dictFoldable1)(f))(i)(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return foldr(dictFoldable)(Data_Function.flip(foldr(dictFoldable1)(f)))(i)(v);
                };
            };
        });
    };
};
var foldableCoproduct = function (dictFoldable) {
    return function (dictFoldable1) {
        return new Foldable(function (dictMonoid) {
            return function (f) {
                return Data_Functor_Coproduct.coproduct(foldMap(dictFoldable)(dictMonoid)(f))(foldMap(dictFoldable1)(dictMonoid)(f));
            };
        }, function (f) {
            return function (z) {
                return Data_Functor_Coproduct.coproduct(foldl(dictFoldable)(f)(z))(foldl(dictFoldable1)(f)(z));
            };
        }, function (f) {
            return function (z) {
                return Data_Functor_Coproduct.coproduct(foldr(dictFoldable)(f)(z))(foldr(dictFoldable1)(f)(z));
            };
        });
    };
};
var foldableFirst = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return foldMap(foldableMaybe)(dictMonoid)(f)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldl(foldableMaybe)(f)(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldr(foldableMaybe)(f)(z)(v);
        };
    };
});
var foldableLast = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return foldMap(foldableMaybe)(dictMonoid)(f)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldl(foldableMaybe)(f)(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldr(foldableMaybe)(f)(z)(v);
        };
    };
});
var foldableProduct = function (dictFoldable) {
    return function (dictFoldable1) {
        return new Foldable(function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(foldMap(dictFoldable)(dictMonoid)(f)(v.value0))(foldMap(dictFoldable1)(dictMonoid)(f)(v.value1));
                };
            };
        }, function (f) {
            return function (z) {
                return function (v) {
                    return foldl(dictFoldable1)(f)(foldl(dictFoldable)(f)(z)(v.value0))(v.value1);
                };
            };
        }, function (f) {
            return function (z) {
                return function (v) {
                    return foldr(dictFoldable)(f)(foldr(dictFoldable1)(f)(z)(v.value1))(v.value0);
                };
            };
        });
    };
};
var foldlDefault = function (dictFoldable) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap()(Data_Newtype.unwrap()(foldMap(dictFoldable)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))((function () {
                    var $317 = Data_Function.flip(c);
                    return function ($318) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($317($318)));
                    };
                })())(xs)))(u);
            };
        };
    };
};
var foldrDefault = function (dictFoldable) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap()(foldMap(dictFoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function ($319) {
                    return Data_Monoid_Endo.Endo(c($319));
                })(xs))(u);
            };
        };
    };
};
var lookup = function (dictFoldable) {
    return function (dictEq) {
        return function (a) {
            var $320 = Data_Newtype.unwrap();
            var $321 = foldMap(dictFoldable)(Data_Maybe_First.monoidFirst)(function (v) {
                var $302 = Data_Eq.eq(dictEq)(a)(v.value0);
                if ($302) {
                    return new Data_Maybe.Just(v.value1);
                };
                return Data_Maybe.Nothing.value;
            });
            return function ($322) {
                return $320($321($322));
            };
        };
    };
};
var surroundMap = function (dictFoldable) {
    return function (dictSemigroup) {
        return function (d) {
            return function (t) {
                return function (f) {
                    var joined = function (a) {
                        return function (m) {
                            return Data_Semigroup.append(dictSemigroup)(d)(Data_Semigroup.append(dictSemigroup)(t(a))(m));
                        };
                    };
                    return Data_Newtype.unwrap()(foldMap(dictFoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(joined)(f))(d);
                };
            };
        };
    };
};
var surround = function (dictFoldable) {
    return function (dictSemigroup) {
        return function (d) {
            return surroundMap(dictFoldable)(dictSemigroup)(d)(Control_Category.identity(Control_Category.categoryFn));
        };
    };
};
var foldM = function (dictFoldable) {
    return function (dictMonad) {
        return function (f) {
            return function (b0) {
                return foldl(dictFoldable)(function (b) {
                    return function (a) {
                        return Control_Bind.bind(dictMonad.Bind1())(b)(Data_Function.flip(f)(a));
                    };
                })(Control_Applicative.pure(dictMonad.Applicative0())(b0));
            };
        };
    };
};
var fold = function (dictFoldable) {
    return function (dictMonoid) {
        return foldMap(dictFoldable)(dictMonoid)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var findMap = function (dictFoldable) {
    return function (p) {
        var go = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing) {
                    return p(v1);
                };
                return v;
            };
        };
        return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
    };
};
var find = function (dictFoldable) {
    return function (p) {
        var go = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing && p(v1)) {
                    return new Data_Maybe.Just(v1);
                };
                return v;
            };
        };
        return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
    };
};
var any = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return Data_Newtype.alaF()()()()(Data_Monoid_Disj.Disj)(foldMap(dictFoldable)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra)));
    };
};
var elem = function (dictFoldable) {
    return function (dictEq) {
        var $323 = any(dictFoldable)(Data_HeytingAlgebra.heytingAlgebraBoolean);
        var $324 = Data_Eq.eq(dictEq);
        return function ($325) {
            return $323($324($325));
        };
    };
};
var notElem = function (dictFoldable) {
    return function (dictEq) {
        return function (x) {
            var $326 = Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraBoolean);
            var $327 = elem(dictFoldable)(dictEq)(x);
            return function ($328) {
                return $326($327($328));
            };
        };
    };
};
var or = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return any(dictFoldable)(dictHeytingAlgebra)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var all = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return Data_Newtype.alaF()()()()(Data_Monoid_Conj.Conj)(foldMap(dictFoldable)(Data_Monoid_Conj.monoidConj(dictHeytingAlgebra)));
    };
};
var and = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return all(dictFoldable)(dictHeytingAlgebra)(Control_Category.identity(Control_Category.categoryFn));
    };
};
module.exports = {
    Foldable: Foldable,
    foldr: foldr,
    foldl: foldl,
    foldMap: foldMap,
    foldrDefault: foldrDefault,
    foldlDefault: foldlDefault,
    foldMapDefaultL: foldMapDefaultL,
    foldMapDefaultR: foldMapDefaultR,
    fold: fold,
    foldM: foldM,
    traverse_: traverse_,
    for_: for_,
    sequence_: sequence_,
    oneOf: oneOf,
    oneOfMap: oneOfMap,
    intercalate: intercalate,
    surroundMap: surroundMap,
    surround: surround,
    and: and,
    or: or,
    all: all,
    any: any,
    sum: sum,
    product: product,
    elem: elem,
    notElem: notElem,
    indexl: indexl,
    indexr: indexr,
    find: find,
    findMap: findMap,
    maximum: maximum,
    maximumBy: maximumBy,
    minimum: minimum,
    minimumBy: minimumBy,
    "null": $$null,
    length: length,
    lookup: lookup,
    foldableArray: foldableArray,
    foldableMaybe: foldableMaybe,
    foldableFirst: foldableFirst,
    foldableLast: foldableLast,
    foldableAdditive: foldableAdditive,
    foldableDual: foldableDual,
    foldableDisj: foldableDisj,
    foldableConj: foldableConj,
    foldableMultiplicative: foldableMultiplicative,
    foldableEither: foldableEither,
    foldableTuple: foldableTuple,
    foldableIdentity: foldableIdentity,
    foldableConst: foldableConst,
    foldableProduct: foldableProduct,
    foldableCoproduct: foldableCoproduct,
    foldableCompose: foldableCompose,
    foldableApp: foldableApp
};
