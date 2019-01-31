(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (global = global || self, factory(global['semantic-ui'] = {}, global.React, global.PropTypes));
}(this, function (exports, React, PropTypes) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "/* --- Helpers --- */\n/* Variables */\n.s-ui-header .s-ui-header__inner {\n  max-width: 1440px;\n  padding-left: 30px;\n  padding-right: 30px; }\n\n.s-ui-header--full .s-ui-header__inner {\n  max-width: none; }\n";
  var styles = {"header":"s-ui-header","header__inner":"s-ui-header__inner","header--full":"s-ui-header--full"};
  styleInject(css);

  var _jsxFileName = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Header/Header.js";

  var Header =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
      var _this;

      _classCallCheck(this, Header);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
      _this.state = {
        collapsed: false
      };
      return _this;
    }

    _createClass(Header, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            full = _this$props.full,
            children = _this$props.children;
        var collapsed = this.state.collapsed;
        var classes = [styles.header];

        if (full) {
          classes.push(styles['header--full']);
        }

        if (collapsed) {
          classes.push(styles['header--collapsed']);
        }

        return React__default.createElement("header", {
          className: classes.join(' '),
          role: "heading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, React__default.createElement("div", {
          className: styles.header__inner,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, children));
      }
    }]);

    return Header;
  }(React.Component);

  Header.propTypes = {
    /* Used if header should span across the page */
    full: PropTypes.bool,

    /* Default child components */
    children: PropTypes.node.isRequired
  };
  Header.defaultProps = {
    /* Default to false (1440px width) */
    full: false
  };

  var css$1 = "/* --- Helpers --- */\n/* Variables */\n.s-ui-footer .s-ui-footer__inner {\n  max-width: 1400px;\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 30px;\n  padding-right: 30px; }\n";
  var styles$1 = {"footer":"s-ui-footer","footer__inner":"s-ui-footer__inner"};
  styleInject(css$1);

  var _jsxFileName$1 = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Footer/FooterColumn.js";

  var FooterColumn = function FooterColumn(_ref) {
    var children = _ref.children,
        width = _ref.width;

    if (width !== 'auto') {
      console.log('not implemented yet!');
    }

    return React__default.createElement("div", {
      className: styles$1.footer__column,
      __source: {
        fileName: _jsxFileName$1,
        lineNumber: 22
      },
      __self: this
    }, children);
  };

  FooterColumn.propTypes = {
    /* Default child components */
    children: PropTypes.node.isRequired,

    /* The width of the column */
    width: PropTypes.oneOf(['auto', 'fixed'])
  };
  FooterColumn.defaultProps = {
    width: 'auto'
  };

  var _jsxFileName$2 = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Footer/Footer.js";

  var Footer = function Footer(_ref) {
    var className = _ref.className,
        children = _ref.children;
    return React__default.createElement("footer", {
      className: [styles$1.footer, className].join(' '),
      role: "heading",
      __source: {
        fileName: _jsxFileName$2,
        lineNumber: 17
      },
      __self: this
    }, React__default.createElement("div", {
      className: styles$1.footer__inner,
      __source: {
        fileName: _jsxFileName$2,
        lineNumber: 18
      },
      __self: this
    }, children));
  };

  Footer.propTypes = {
    /* Default child components */
    children: PropTypes.node.isRequired,

    /* Allows for extra classNames for custom styling */
    className: PropTypes.string
  };
  Footer.defaultProps = {
    className: null
  };
  /* Component Statics */

  Footer.Column = FooterColumn;

  var _jsxFileName$3 = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Site/Site.js";

  var Site = function Site(_ref) {
    var className = _ref.className,
        header = _ref.header,
        footer = _ref.footer,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["className", "header", "footer", "children"]);

    return React__default.createElement("div", Object.assign({
      className: ['site', className].join(' ')
    }, props, {
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 19
      },
      __self: this
    }), header, React__default.createElement("main", {
      className: "main",
      id: "main",
      role: "main",
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 24
      },
      __self: this
    }, children), footer);
  };

  Site.propTypes = {
    /* Allows extra classname for custom page styling */
    className: PropTypes.string,

    /* A header component to render on all pages */
    header: PropTypes.node,

    /* A footer component to render on all pages */
    footer: PropTypes.node,

    /* The child content. Can be routing or just a simple page component */
    children: PropTypes.node.isRequired
  };
  Site.defaultProps = {
    className: null,
    header: null,
    footer: null
  };

  var _jsxFileName$4 = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Page/Page.js";

  var Page = function Page(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return React__default.createElement("article", Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName$4,
        lineNumber: 8
      },
      __self: this
    }), children);
  };

  Page.propTypes = {
    children: PropTypes.node.isRequired
  };

  var css$2 = "/* --- Helpers --- */\n/* Variables */\n.s-ui-hero {\n  width: 100%;\n  background-color: #F2F2F2; }\n  .s-ui-hero .s-ui-hero__inner {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(4, 25%);\n    flex-direction: column;\n    justify-content: center;\n    max-width: 1440px;\n    width: 100%;\n    max-height: 800px;\n    height: 100vh;\n    margin: 0 auto; }\n  .s-ui-hero .s-ui-hero__header {\n    grid-area: 2 / 4 / 2 / span 4; }\n  .s-ui-hero .s-ui-hero__content {\n    grid-area: 3 / 6 / 3 / span 4; }\n";
  var styles$2 = {"hero":"s-ui-hero","hero__inner":"s-ui-hero__inner","hero__header":"s-ui-hero__header","hero__content":"s-ui-hero__content"};
  styleInject(css$2);

  var _jsxFileName$5 = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Hero/Hero.js";

  var Hero = function Hero(_ref) {
    var title = _ref.title,
        description = _ref.description,
        children = _ref.children;
    return React__default.createElement("section", {
      className: styles$2.hero,
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 11
      },
      __self: this
    }, React__default.createElement("div", {
      className: styles$2.hero__inner,
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 12
      },
      __self: this
    }, React__default.createElement("div", {
      className: styles$2.hero__header,
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 13
      },
      __self: this
    }, React__default.createElement("h1", {
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 14
      },
      __self: this
    }, title)), React__default.createElement("div", {
      className: styles$2.hero__content,
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 16
      },
      __self: this
    }, description ? React__default.createElement("p", {
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 18
      },
      __self: this
    }, description) : children)));
  };

  Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node
  };
  Hero.defaultProps = {
    description: null,
    children: null
  };

  /** Core */

  exports.Site = Site;
  exports.Header = Header;
  exports.Footer = Footer;
  exports.Page = Page;
  exports.Hero = Hero;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
