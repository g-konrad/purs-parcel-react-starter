"use strict";

const ReactDOM = require("react-dom");

exports.renderThen = (jsx) => (node) => (callback) => () =>
  ReactDOM.render(jsx, node, callback);






                                                                           
