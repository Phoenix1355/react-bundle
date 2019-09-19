import _classCallCheck from "/Users/christian/Projects/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/christian/Projects/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/christian/Projects/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/christian/Projects/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/christian/Projects/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "/Users/christian/Projects/react-bundle/packages/page-transition/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
      nextChild: 2,
      overlayState: 'hidden'
    };
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.transition = _this.transition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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

      if (child && child.getWrappedInstance) {
        child = child.getWrappedInstance();
      }

      return child;
    }
  }, {
    key: "transition",
    value: function transition(nextChild) {
      var _this2 = this;

      return new Promise(function (transitionDone, transitionFailed) {
        var nextChildNum = _this2.child.nextChild;
        _this2.state["child".concat(nextChildNum)] = nextChild;

        _this2.forceUpdate(function () {
          var prevChild = _this2.getRef("child".concat(nextChild === 1 ? 2 : 1));

          var newChild = _this2.getRef("child".concat(nextChildNum));

          var prevChildDom = ReactDOM.findDOMNode(prevChild);
          var newChildDom = ReactDOM.findDOMNode(newChild);
          var _this2$props = _this2.props,
              data = _this2$props.data,
              timeout = _this2$props.timeout,
              transitionAction = _this2$props.transitionAction;

          var willStart = function willStart() {
            if (newChild.onTransitionWillStart) {
              return newChild.onTransitionWillStart(data) || Promise.resolve();
            }

            if (prevChild && prevChild.onTransitionLeaveWillStart) {
              return prevChild.onTransitionLeaveWillStart(data) || Promise.resolve();
            }

            return Promise.resolve();
          };

          var start = function start() {
            if (newChildDom.classList.contains('transition-item')) {
              newChildDom.classList.add('transition-appear');

              if (_this2.hasTransitionAction()) {
                newChildDom.classList.add("transition-".concat(transitionAction));
              }

              newChildDom.offsetHeight;

              if (newChild.transitionManuallyStart) {
                return newChild.transitionManuallyStart(data, start) || Promise.resolve();
              }

              ;
            }
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          child1 = _this$state.child1,
          child2 = _this$state.child2,
          overlayState = _this$state.overlayState;
      return React.createElement("div", {
        className: "transition-wrapper"
      }, React.createElement(TransitionOverlay, {
        state: overlayState
      }), React.Children.map(child1, function (c) {
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
PageTransition.defaultProps = {
  timeout: 500
};
export default PageTransition;
