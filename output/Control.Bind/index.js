// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var Bind = function (Apply0, bind) {
    this.Apply0 = Apply0;
    this.bind = bind;
};
var Discard = function (discard) {
    this.discard = discard;
};
var discard = function (dict) {
    return dict.discard;
};
var bindProxy = new Bind(function () {
    return Control_Apply.applyProxy;
}, function (v) {
    return function (v1) {
        return Type_Proxy["Proxy"].value;
    };
});
var bindFn = new Bind(function () {
    return Control_Apply.applyFn;
}, function (m) {
    return function (f) {
        return function (x) {
            return f(m(x))(x);
        };
    };
});
var bindArray = new Bind(function () {
    return Control_Apply.applyArray;
}, $foreign.arrayBind);
var bind = function (dict) {
    return dict.bind;
};
var bindFlipped = function (dictBind) {
    return Data_Function.flip(bind(dictBind));
};
var composeKleisliFlipped = function (dictBind) {
    return function (f) {
        return function (g) {
            return function (a) {
                return bindFlipped(dictBind)(f)(g(a));
            };
        };
    };
};
var composeKleisli = function (dictBind) {
    return function (f) {
        return function (g) {
            return function (a) {
                return bind(dictBind)(f(a))(g);
            };
        };
    };
};
var discardProxy = new Discard(function (dictBind) {
    return bind(dictBind);
});
var discardProxy2 = new Discard(function (dictBind) {
    return bind(dictBind);
});
var discardProxy3 = new Discard(function (dictBind) {
    return bind(dictBind);
});
var discardUnit = new Discard(function (dictBind) {
    return bind(dictBind);
});
var ifM = function (dictBind) {
    return function (cond) {
        return function (t) {
            return function (f) {
                return bind(dictBind)(cond)(function (cond$prime) {
                    if (cond$prime) {
                        return t;
                    };
                    return f;
                });
            };
        };
    };
};
var join = function (dictBind) {
    return function (m) {
        return bind(dictBind)(m)(Control_Category.identity(Control_Category.categoryFn));
    };
};
module.exports = {
    Bind: Bind,
    bind: bind,
    bindFlipped: bindFlipped,
    Discard: Discard,
    discard: discard,
    join: join,
    composeKleisli: composeKleisli,
    composeKleisliFlipped: composeKleisliFlipped,
    ifM: ifM,
    bindFn: bindFn,
    bindArray: bindArray,
    bindProxy: bindProxy,
    discardUnit: discardUnit,
    discardProxy: discardProxy,
    discardProxy2: discardProxy2,
    discardProxy3: discardProxy3,
    Applicative: Control_Applicative.Applicative,
    liftA1: Control_Applicative.liftA1,
    pure: Control_Applicative.pure,
    unless: Control_Applicative.unless,
    when: Control_Applicative.when,
    Apply: Control_Apply.Apply,
    apply: Control_Apply.apply,
    Functor: Data_Functor.Functor,
    map: Data_Functor.map,
    "void": Data_Functor["void"]
};
