// Generated by purs version 0.14.3
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Loading = (function () {
    function Loading() {

    };
    Loading.value = new Loading();
    return Loading;
})();
var Interactive = (function () {
    function Interactive() {

    };
    Interactive.value = new Interactive();
    return Interactive;
})();
var Complete = (function () {
    function Complete() {

    };
    Complete.value = new Complete();
    return Complete;
})();
var showReadyState = new Data_Show.Show(function (v) {
    if (v instanceof Loading) {
        return "Loading";
    };
    if (v instanceof Interactive) {
        return "Interactive";
    };
    if (v instanceof Complete) {
        return "Complete";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 15, column 10 - line 18, column 27): " + [ v.constructor.name ]);
});
var print = function (v) {
    if (v instanceof Loading) {
        return "loading";
    };
    if (v instanceof Interactive) {
        return "interactive";
    };
    if (v instanceof Complete) {
        return "complete";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 21, column 9 - line 24, column 25): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "loading") {
        return new Data_Maybe.Just(Loading.value);
    };
    if (v === "interactive") {
        return new Data_Maybe.Just(Interactive.value);
    };
    if (v === "complete") {
        return new Data_Maybe.Just(Complete.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqReadyState = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Loading && y instanceof Loading) {
            return true;
        };
        if (x instanceof Interactive && y instanceof Interactive) {
            return true;
        };
        if (x instanceof Complete && y instanceof Complete) {
            return true;
        };
        return false;
    };
});
var ordReadyState = new Data_Ord.Ord(function () {
    return eqReadyState;
}, function (x) {
    return function (y) {
        if (x instanceof Loading && y instanceof Loading) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Loading) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Loading) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Interactive && y instanceof Interactive) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Interactive) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Interactive) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Complete && y instanceof Complete) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 12, column 1 - line 12, column 48): " + [ x.constructor.name, y.constructor.name ]);
    };
});
module.exports = {
    Loading: Loading,
    Interactive: Interactive,
    Complete: Complete,
    print: print,
    parse: parse,
    eqReadyState: eqReadyState,
    ordReadyState: ordReadyState,
    showReadyState: showReadyState
};
