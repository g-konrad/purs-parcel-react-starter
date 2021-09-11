"use strict";

var React = require("react");

exports.createComponent = (function () {
  // Begin component prototype functions
  // (`this`-dependent, defined outside `createComponent`
  // for a slight performance boost)
  function toSelf() {
    var instance = this;
    var setStateThen = function (update) {
      return function (effects) {
        return function () {
          instance.setState(function (state) {
            return { $$state: update(state.$$state) };
          }, effects);
        };
      };
    };
    var self = {
      props: instance.props.$$props,
      state: instance.state === null ? null : instance.state.$$state,
      setState: function (update) {
        return setStateThen(update)(undefined);
      },
      setStateThen: setStateThen,
      instance_: instance,
    };
    return self;
  }

  function componentDidMount() {
    var didMount = this.$$spec.didMount;
    if (didMount !== undefined) {
      didMount(this.toSelf())();
    }
  }

  function shouldComponentUpdate(nextProps, nextState) {
    var shouldUpdate = this.$$spec.shouldUpdate;
    return shouldUpdate === undefined
      ? true
      : shouldUpdate(this.toSelf())({
          nextProps: nextProps.$$props,
          nextState: nextState === null ? null : nextState.$$state,
        });
  }

  function componentDidUpdate(prevProps, prevState) {
    var didUpdate = this.$$spec.didUpdate;
    if (didUpdate !== undefined) {
      didUpdate(this.toSelf())({
        prevProps: prevProps.$$props,
        prevState: prevState === null ? null : prevState.$$state,
      })();
    }
  }

  function componentWillUnmount() {
    this.$$mounted = false;
    var willUnmount = this.$$spec.willUnmount;
    if (willUnmount !== undefined) {
      willUnmount(this.toSelf())();
    }
  }

  function render() {
    return this.$$spec.render(this.toSelf());
  }
  // End component prototype functions

  return function (displayName) {
    var Component = function constructor(props) {
      this.$$mounted = true;
      this.$$spec = props.$$spec;
      this.state =
        // React may optimize components with no state,
        // so we leave state null if it was left as
        // the default value.
        this.$$spec.initialState === undefined
          ? null
          : { $$state: this.$$spec.initialState };
      return this;
    };

    Component.displayName = displayName;
    Component.prototype = Object.create(React.Component.prototype);
    Component.prototype.constructor = Component;
    Component.prototype.toSelf = toSelf;
    Component.prototype.shouldComponentUpdate = shouldComponentUpdate;
    Component.prototype.componentDidMount = componentDidMount;
    Component.prototype.componentDidUpdate = componentDidUpdate;
    Component.prototype.componentWillUnmount = componentWillUnmount;
    Component.prototype.render = render;

    return Component;
  };
})();




































  

exports.make = function (_unionDict) {
  return function ($$type) {
    return function ($$spec) {
      var $$specPadded = {
        initialState: $$spec.initialState,
        render: $$spec.render,
        didMount: $$spec.didMount,
        shouldUpdate: $$spec.shouldUpdate,
        didUpdate: $$spec.didUpdate,
        willUnmount: $$spec.willUnmount,
      };
      return function ($$props) {
        var props = {
          $$props: $$props,
          $$spec: $$specPadded,
        };
        return React.createElement($$type, props);
      };
    };
  };
};










































  
