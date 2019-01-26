import _classCallCheck from "/Users/phoenix/Web Server/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/phoenix/Web Server/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/phoenix/Web Server/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/phoenix/Web Server/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/phoenix/Web Server/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "/Users/phoenix/Web Server/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
var _jsxFileName = "/Users/phoenix/Web Server/react-bundle/packages/page-transition/src/index.js";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export var PageTransition =
/*#__PURE__*/
function (_Component) {
  _inherits(PageTransition, _Component);

  function PageTransition() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PageTransition);

    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PageTransition)).call.apply(_getPrototypeOf2, [this].concat(props)));
    var children = props.children;
    _this.state = {
      child1: children,
      child2: null,
      nextChild: 2
    };
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PageTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var children = this.props.children;
      this.transite(children);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "getRef",
    value: function getRef(ref) {
      var child = this[ref];
      return child;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          child1 = _this$state.child1,
          child2 = _this$state.child2;
      return React.createElement("div", {
        className: "transition-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, React.Children.map(child1, function (c) {
        return React.cloneElement(c, {
          ref: 'child1'
        });
      }), React.Children.map(child2, function (c) {
        return React.cloneElement(c, {
          ref: 'child2'
        });
      }));
    }
  }]);

  return PageTransition;
}(Component);
PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number
};
PageTransition.defaultProps = {
  timeout: 500
};
export default PageTransition;
