// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Monad_ST_Internal = require("../Control.Monad.ST.Internal/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Function_Uncurried = require("../Data.Function.Uncurried/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Foreign_Object_ST = require("../Foreign.Object.ST/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var values = $foreign.toArrayWithKey(function (v) {
    return function (v1) {
        return v1;
    };
});
var toUnfoldable = function (dictUnfoldable) {
    var $36 = Data_Array.toUnfoldable(dictUnfoldable);
    var $37 = $foreign.toArrayWithKey(Data_Tuple.Tuple.create);
    return function ($38) {
        return $36($37($38));
    };
};
var toAscUnfoldable = function (dictUnfoldable) {
    var $39 = Data_Array.toUnfoldable(dictUnfoldable);
    var $40 = Data_Array.sortWith(Data_Ord.ordString)(Data_Tuple.fst);
    var $41 = $foreign.toArrayWithKey(Data_Tuple.Tuple.create);
    return function ($42) {
        return $39($40($41($42)));
    };
};
var toAscArray = toAscUnfoldable(Data_Unfoldable.unfoldableArray);
var toArray = $foreign.toArrayWithKey(Data_Tuple.Tuple.create);
var thawST = $foreign["_copyST"];
var singleton = function (k) {
    return function (v) {
        return $foreign.runST(Control_Bind.bindFlipped(Control_Monad_ST_Internal.bindST)(Foreign_Object_ST.poke(k)(v))(Foreign_Object_ST["new"]));
    };
};
var showObject = function (dictShow) {
    return new Data_Show.Show(function (m) {
        return "(fromFoldable " + (Data_Show.show(Data_Show.showArray(Data_Tuple.showTuple(Data_Show.showString)(dictShow)))(toArray(m)) + ")");
    });
};
var mutate = function (f) {
    return function (m) {
        return $foreign.runST(function __do() {
            var s = thawST(m)();
            f(s)();
            return s;
        });
    };
};
var member = Data_Function_Uncurried.runFn4($foreign["_lookup"])(false)(Data_Function["const"](true));
var mapWithKey = function (f) {
    return function (m) {
        return $foreign["_mapWithKey"](m, f);
    };
};
var lookup = Data_Function_Uncurried.runFn4($foreign["_lookup"])(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
var isSubmap = function (dictEq) {
    return function (m1) {
        return function (m2) {
            var f = function (k) {
                return function (v) {
                    return $foreign["_lookup"](false, Data_Eq.eq(dictEq)(v), k, m2);
                };
            };
            return $foreign.all(f)(m1);
        };
    };
};
var isEmpty = $foreign.all(function (v) {
    return function (v1) {
        return false;
    };
});
var insert = function (k) {
    return function (v) {
        return mutate(Foreign_Object_ST.poke(k)(v));
    };
};
var functorObject = new Data_Functor.Functor(function (f) {
    return function (m) {
        return $foreign["_fmapObject"](m, f);
    };
});
var functorWithIndexObject = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorObject;
}, mapWithKey);
var fromHomogeneous = function (dictHomogeneous) {
    return Unsafe_Coerce.unsafeCoerce;
};
var fromFoldableWith = function (dictFoldable) {
    return function (f) {
        return function (l) {
            return $foreign.runST(function __do() {
                var s = Foreign_Object_ST["new"]();
                Data_Foldable.for_(Control_Monad_ST_Internal.applicativeST)(dictFoldable)(l)(function (v) {
                    return function __do() {
                        var v$prime = $foreign["_lookupST"](v.value1, f(v.value1), v.value0, s)();
                        return Foreign_Object_ST.poke(v.value0)(v$prime)(s)();
                    };
                })();
                return s;
            });
        };
    };
};
var fromFoldable = function (dictFoldable) {
    return function (l) {
        return $foreign.runST(function __do() {
            var s = Foreign_Object_ST["new"]();
            Control_Monad_ST_Internal.foreach(Data_Array.fromFoldable(dictFoldable)(l))(function (v) {
                return Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Foreign_Object_ST.poke(v.value0)(v.value1)(s));
            })();
            return s;
        });
    };
};
var freezeST = $foreign["_copyST"];
var foldMaybe = function (f) {
    return function (z) {
        return function (m) {
            return $foreign["_foldSCObject"](m, z, f, Data_Maybe.fromMaybe);
        };
    };
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (z) {
            return $foreign["_foldM"](Control_Bind.bind(dictMonad.Bind1()))(f)(Control_Applicative.pure(dictMonad.Applicative0())(z));
        };
    };
};
var union = function (m) {
    return mutate(function (s) {
        return foldM(Control_Monad_ST_Internal.monadST)(function (s$prime) {
            return function (k) {
                return function (v) {
                    return Foreign_Object_ST.poke(k)(v)(s$prime);
                };
            };
        })(s)(m);
    });
};
var unions = function (dictFoldable) {
    return Data_Foldable.foldl(dictFoldable)(union)($foreign.empty);
};
var unionWith = function (f) {
    return function (m1) {
        return function (m2) {
            return mutate(function (s1) {
                return foldM(Control_Monad_ST_Internal.monadST)(function (s2) {
                    return function (k) {
                        return function (v1) {
                            return Foreign_Object_ST.poke(k)($foreign["_lookup"](v1, function (v2) {
                                return f(v1)(v2);
                            }, k, m2))(s2);
                        };
                    };
                })(s1)(m1);
            })(m2);
        };
    };
};
var semigroupObject = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(unionWith(Data_Semigroup.append(dictSemigroup)));
};
var monoidObject = function (dictSemigroup) {
    return new Data_Monoid.Monoid(function () {
        return semigroupObject(dictSemigroup);
    }, $foreign.empty);
};
var fold = $foreign["_foldM"](Data_Function.applyFlipped);
var foldMap = function (dictMonoid) {
    return function (f) {
        return fold(function (acc) {
            return function (k) {
                return function (v) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(k)(v));
                };
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
};
var foldableObject = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return foldMap(dictMonoid)(Data_Function["const"](f));
    };
}, function (f) {
    return fold(function (z) {
        return function (v) {
            return f(z);
        };
    });
}, function (f) {
    return function (z) {
        return function (m) {
            return Data_Foldable.foldr(Data_Foldable.foldableArray)(f)(z)(values(m));
        };
    };
});
var foldableWithIndexObject = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableObject;
}, function (dictMonoid) {
    return foldMap(dictMonoid);
}, function (f) {
    return fold(Data_Function.flip(f));
}, function (f) {
    return function (z) {
        return function (m) {
            return Data_Foldable.foldr(Data_Foldable.foldableArray)(Data_Tuple.uncurry(f))(z)($foreign.toArrayWithKey(Data_Tuple.Tuple.create)(m));
        };
    };
});
var traversableWithIndexObject = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexObject;
}, function () {
    return functorWithIndexObject;
}, function () {
    return traversableObject;
}, function (dictApplicative) {
    return function (f) {
        return function (ms) {
            return fold(function (acc) {
                return function (k) {
                    return function (v) {
                        return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Function.flip(insert(k)))(acc))(f(k)(v));
                    };
                };
            })(Control_Applicative.pure(dictApplicative)($foreign.empty))(ms);
        };
    };
});
var traversableObject = new Data_Traversable.Traversable(function () {
    return foldableObject;
}, function () {
    return functorObject;
}, function (dictApplicative) {
    return Data_Traversable.traverse(traversableObject)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
}, function (dictApplicative) {
    var $43 = Data_TraversableWithIndex.traverseWithIndex(traversableWithIndexObject)(dictApplicative);
    return function ($44) {
        return $43(Data_Function["const"]($44));
    };
});
var filterWithKey = function (predicate) {
    return function (m) {
        var go = (function () {
            var step = function (acc) {
                return function (k) {
                    return function (v) {
                        var $33 = predicate(k)(v);
                        if ($33) {
                            return Foreign_Object_ST.poke(k)(v)(acc);
                        };
                        return Control_Applicative.pure(Control_Monad_ST_Internal.applicativeST)(acc);
                    };
                };
            };
            return function __do() {
                var m$prime = Foreign_Object_ST["new"]();
                return foldM(Control_Monad_ST_Internal.monadST)(step)(m$prime)(m)();
            };
        })();
        return $foreign.runST(go);
    };
};
var filterKeys = function (predicate) {
    return filterWithKey(function ($45) {
        return Data_Function["const"](predicate($45));
    });
};
var filter = function (predicate) {
    return filterWithKey(Data_Function["const"](predicate));
};
var eqObject = function (dictEq) {
    return new Data_Eq.Eq(function (m1) {
        return function (m2) {
            return isSubmap(dictEq)(m1)(m2) && isSubmap(dictEq)(m2)(m1);
        };
    });
};
var ordObject = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqObject(dictOrd.Eq0());
    }, function (m1) {
        return function (m2) {
            return Data_Ord.compare(Data_Ord.ordArray(Data_Tuple.ordTuple(Data_Ord.ordString)(dictOrd)))(toAscArray(m1))(toAscArray(m2));
        };
    });
};
var eq1Object = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqObject(dictEq));
});
var $$delete = function (k) {
    return mutate(Foreign_Object_ST["delete"](k));
};
var pop = function (k) {
    return function (m) {
        return Data_Functor.mapFlipped(Data_Maybe.functorMaybe)(lookup(k)(m))(function (a) {
            return new Data_Tuple.Tuple(a, $$delete(k)(m));
        });
    };
};
var alter = function (f) {
    return function (k) {
        return function (m) {
            var v = f(lookup(k)(m));
            if (v instanceof Data_Maybe.Nothing) {
                return $$delete(k)(m);
            };
            if (v instanceof Data_Maybe.Just) {
                return insert(k)(v.value0)(m);
            };
            throw new Error("Failed pattern match at Foreign.Object (line 209, column 15 - line 211, column 25): " + [ v.constructor.name ]);
        };
    };
};
var update = function (f) {
    return function (k) {
        return function (m) {
            return alter(Data_Maybe.maybe(Data_Maybe.Nothing.value)(f))(k)(m);
        };
    };
};
module.exports = {
    isEmpty: isEmpty,
    singleton: singleton,
    insert: insert,
    lookup: lookup,
    toUnfoldable: toUnfoldable,
    toAscUnfoldable: toAscUnfoldable,
    fromFoldable: fromFoldable,
    fromFoldableWith: fromFoldableWith,
    fromHomogeneous: fromHomogeneous,
    "delete": $$delete,
    pop: pop,
    member: member,
    alter: alter,
    update: update,
    mapWithKey: mapWithKey,
    filterWithKey: filterWithKey,
    filterKeys: filterKeys,
    filter: filter,
    values: values,
    union: union,
    unionWith: unionWith,
    unions: unions,
    isSubmap: isSubmap,
    fold: fold,
    foldMap: foldMap,
    foldM: foldM,
    foldMaybe: foldMaybe,
    thawST: thawST,
    freezeST: freezeST,
    functorObject: functorObject,
    functorWithIndexObject: functorWithIndexObject,
    foldableObject: foldableObject,
    foldableWithIndexObject: foldableWithIndexObject,
    traversableObject: traversableObject,
    traversableWithIndexObject: traversableWithIndexObject,
    eqObject: eqObject,
    eq1Object: eq1Object,
    ordObject: ordObject,
    showObject: showObject,
    semigroupObject: semigroupObject,
    monoidObject: monoidObject,
    empty: $foreign.empty,
    size: $foreign.size,
    keys: $foreign.keys,
    all: $foreign.all,
    runST: $foreign.runST,
    toArrayWithKey: $foreign.toArrayWithKey
};
