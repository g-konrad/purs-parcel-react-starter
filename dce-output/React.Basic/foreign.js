"use strict";

const React = require("react");
const createElement = React.createElement;
const Fragment = React.Fragment;




                                               

exports.element = (component) => (props) =>
  Array.isArray(props.children)
    ? createElement.apply(null, [component, props].concat(props.children))
    : createElement(component, props);












                                                        
