// Generated by purs version 0.14.3
"use strict";
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var withState = Control_Monad_State_Trans.withStateT;
var runState = function (v) {
    var $16 = Data_Newtype.unwrap();
    return function ($17) {
        return $16(v($17));
    };
};
var mapState = function (f) {
    return Control_Monad_State_Trans.mapStateT((function () {
        var $18 = Data_Newtype.unwrap();
        return function ($19) {
            return Data_Identity.Identity(f($18($19)));
        };
    })());
};
var execState = function (v) {
    return function (s) {
        var v1 = v(s);
        return v1.value1;
    };
};
var evalState = function (v) {
    return function (s) {
        var v1 = v(s);
        return v1.value0;
    };
};
module.exports = {
    runState: runState,
    evalState: evalState,
    execState: execState,
    mapState: mapState,
    withState: withState,
    MonadState: Control_Monad_State_Class.MonadState,
    get: Control_Monad_State_Class.get,
    gets: Control_Monad_State_Class.gets,
    modify: Control_Monad_State_Class.modify,
    modify_: Control_Monad_State_Class.modify_,
    put: Control_Monad_State_Class.put,
    state: Control_Monad_State_Class.state,
    StateT: Control_Monad_State_Trans.StateT,
    MonadTrans: Control_Monad_State_Trans.MonadTrans,
    evalStateT: Control_Monad_State_Trans.evalStateT,
    execStateT: Control_Monad_State_Trans.execStateT,
    lift: Control_Monad_State_Trans.lift,
    mapStateT: Control_Monad_State_Trans.mapStateT,
    runStateT: Control_Monad_State_Trans.runStateT,
    withStateT: Control_Monad_State_Trans.withStateT
};
