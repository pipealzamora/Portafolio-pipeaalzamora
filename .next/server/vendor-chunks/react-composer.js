"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-composer";
exports.ids = ["vendor-chunks/react-composer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-composer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-composer/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports[\"default\"] = Composer;\n\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Composer(props) {\n  return renderRecursive(props.children, props.components);\n}\n\nComposer.propTypes = {\n  children: _propTypes2.default.func.isRequired,\n  components: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func])).isRequired\n};\n\n/**\n * Recursively build up elements from props.components and accumulate `results` along the way.\n * @param {function} render\n * @param {Array.<ReactElement|Function>} remaining\n * @param {Array} [results]\n * @returns {ReactElement}\n */\nfunction renderRecursive(render, remaining, results) {\n  results = results || [];\n  // Once components is exhausted, we can render out the results array.\n  if (!remaining[0]) {\n    return render(results);\n  }\n\n  // Continue recursion for remaining items.\n  // results.concat([value]) ensures [...results, value] instead of [...results, ...value]\n  function nextRender(value) {\n    return renderRecursive(render, remaining.slice(1), results.concat([value]));\n  }\n\n  // Each props.components entry is either an element or function [element factory]\n  return typeof remaining[0] === 'function' ? // When it is a function, produce an element by invoking it with \"render component values\".\n  remaining[0]({ results, render: nextRender }) : // When it is an element, enhance the element's props with the render prop.\n  (0, _react.cloneElement)(remaining[0], { children: nextRender });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29tcG9zZXIvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGtCQUFrQjtBQUNsQixrQkFBZTs7QUFFZixhQUFhLG1CQUFPLENBQUMsd0dBQU87O0FBRTVCLGlCQUFpQixtQkFBTyxDQUFDLDREQUFZOztBQUVyQzs7QUFFQSx1Q0FBdUMsdUNBQXVDOztBQUU5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLCtCQUErQjtBQUMxQyxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUMsMkNBQTJDLHNCQUFzQjtBQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovL1BvcnRhZm9saW8tcGlwZWFhbHphbW9yYS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb21wb3Nlci9saWIvaW5kZXguanM/ZDA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBDb21wb3NlcjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBDb21wb3Nlcihwcm9wcykge1xuICByZXR1cm4gcmVuZGVyUmVjdXJzaXZlKHByb3BzLmNoaWxkcmVuLCBwcm9wcy5jb21wb25lbnRzKTtcbn1cblxuQ29tcG9zZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbXBvbmVudHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LCBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNdKSkuaXNSZXF1aXJlZFxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSBidWlsZCB1cCBlbGVtZW50cyBmcm9tIHByb3BzLmNvbXBvbmVudHMgYW5kIGFjY3VtdWxhdGUgYHJlc3VsdHNgIGFsb25nIHRoZSB3YXkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZW5kZXJcbiAqIEBwYXJhbSB7QXJyYXkuPFJlYWN0RWxlbWVudHxGdW5jdGlvbj59IHJlbWFpbmluZ1xuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiByZW5kZXJSZWN1cnNpdmUocmVuZGVyLCByZW1haW5pbmcsIHJlc3VsdHMpIHtcbiAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG4gIC8vIE9uY2UgY29tcG9uZW50cyBpcyBleGhhdXN0ZWQsIHdlIGNhbiByZW5kZXIgb3V0IHRoZSByZXN1bHRzIGFycmF5LlxuICBpZiAoIXJlbWFpbmluZ1swXSkge1xuICAgIHJldHVybiByZW5kZXIocmVzdWx0cyk7XG4gIH1cblxuICAvLyBDb250aW51ZSByZWN1cnNpb24gZm9yIHJlbWFpbmluZyBpdGVtcy5cbiAgLy8gcmVzdWx0cy5jb25jYXQoW3ZhbHVlXSkgZW5zdXJlcyBbLi4ucmVzdWx0cywgdmFsdWVdIGluc3RlYWQgb2YgWy4uLnJlc3VsdHMsIC4uLnZhbHVlXVxuICBmdW5jdGlvbiBuZXh0UmVuZGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHJlbmRlclJlY3Vyc2l2ZShyZW5kZXIsIHJlbWFpbmluZy5zbGljZSgxKSwgcmVzdWx0cy5jb25jYXQoW3ZhbHVlXSkpO1xuICB9XG5cbiAgLy8gRWFjaCBwcm9wcy5jb21wb25lbnRzIGVudHJ5IGlzIGVpdGhlciBhbiBlbGVtZW50IG9yIGZ1bmN0aW9uIFtlbGVtZW50IGZhY3RvcnldXG4gIHJldHVybiB0eXBlb2YgcmVtYWluaW5nWzBdID09PSAnZnVuY3Rpb24nID8gLy8gV2hlbiBpdCBpcyBhIGZ1bmN0aW9uLCBwcm9kdWNlIGFuIGVsZW1lbnQgYnkgaW52b2tpbmcgaXQgd2l0aCBcInJlbmRlciBjb21wb25lbnQgdmFsdWVzXCIuXG4gIHJlbWFpbmluZ1swXSh7IHJlc3VsdHMsIHJlbmRlcjogbmV4dFJlbmRlciB9KSA6IC8vIFdoZW4gaXQgaXMgYW4gZWxlbWVudCwgZW5oYW5jZSB0aGUgZWxlbWVudCdzIHByb3BzIHdpdGggdGhlIHJlbmRlciBwcm9wLlxuICAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkocmVtYWluaW5nWzBdLCB7IGNoaWxkcmVuOiBuZXh0UmVuZGVyIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-composer/lib/index.js\n");

/***/ })

};
;