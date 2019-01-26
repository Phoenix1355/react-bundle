(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (global = global || self, factory(global['semantic-ui'] = {}, global.React, global.PropTypes));
}(this, function (exports, React, PropTypes) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

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

  var css = ".hero {\n  width: 100%; }\n  .hero .hero__inner {\n    max-width: 1440px; }\n";
  var styles = {"hero":"hero","hero__inner":"hero__inner"};
  styleInject(css);

  var _jsxFileName = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Hero/Hero.js";

  var Hero = function Hero(_ref) {
    var title = _ref.title,
        children = _ref.children;
    return React.createElement("section", {
      className: styles.hero,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, React.createElement("div", {
      className: styles.hero__inner,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, React.createElement("div", {
      className: styles.hero__header,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, React.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, title)), React.createElement("div", {
      className: styles.hero__content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, children)));
  };

  Hero.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

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

  var _jsxFileName$1 = "/Users/phoenix/Web Server/react-bundle/packages/semantic-ui/src/Page/Page.js";

  var Page = function Page(_ref) {
    var id = _ref.id,
        className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["id", "className", "children"]);

    return React.createElement("article", Object.assign({
      className: className,
      id: id
    }, props, {
      __source: {
        fileName: _jsxFileName$1,
        lineNumber: 10
      },
      __self: this
    }), children);
  };

  Page.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };
  Page.defaultProps = {
    id: '',
    className: 'page'
  };

  exports.Hero = Hero;
  exports.Page = Page;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
