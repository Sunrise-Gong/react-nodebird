webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/haedod-i/Desktop/React-Nodebird/prepare/front/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //<-이거 안쓰면 eslint:recommended 설정에 걸림\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts,\n      hasMorePosts = _useSelector2.hasMorePosts,\n      loadPostsLoading = _useSelector2.loadPostsLoading;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"]\n    });\n  }, []); // 첫 렌더링 후 실행\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // \n    function onScroll() {\n      // console.log( window.scrollY, // 얼마나 내렸는지\n      //     document.documentElement.clientHeight, // 화면이 보이는 길이\n      //     document.documentElement.scrollHeight, // 총 세로 길이 );\n      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {\n        if (hasMorePosts && !loadPostsLoading) {\n          dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"]\n          });\n        }\n      }\n    }\n\n    window.addEventListener('scroll', onScroll);\n    return function () {\n      window.removeEventListener('scroll', onScroll);\n    }; // 이거 안하면 메모리에 쌓임\n  }, [hasMorePosts, loadPostsLoading]);\n  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 20\n    }\n  }), mainPosts.map(function (post) {\n    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: post.id,\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 38\n      }\n    });\n  }), \";\");\n};\n\n_s(Home, \"oqG10cifXvQtI8RQRta7gdIVAso=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Q0FBMEM7O0FBQzFDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBc0RILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQWpFO0FBQUEsTUFBUUMsU0FBUixpQkFBUUEsU0FBUjtBQUFBLE1BQW1CQyxZQUFuQixpQkFBbUJBLFlBQW5CO0FBQUEsTUFBaUNDLGdCQUFqQyxpQkFBaUNBLGdCQUFqQzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQUVWLFlBQVEsQ0FBQztBQUFFVyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFBMUIsS0FBRCxDQUFSO0FBQXlDLEdBQWxELEVBQW9ELEVBQXBELENBQVQsQ0FMZSxDQUttRDs7QUFFbEVGLHlEQUFTLENBQUMsWUFBTTtBQUFFO0FBQ2QsYUFBU0csUUFBVCxHQUFvQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxVQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBMUMsR0FBeURGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FBckcsRUFBMEc7QUFDdEcsWUFBSVgsWUFBWSxJQUFJLENBQUNDLGdCQUFyQixFQUF1QztBQUNuQ1Qsa0JBQVEsQ0FBQztBQUFFVyxnQkFBSSxFQUFFQyxpRUFBa0JBO0FBQTFCLFdBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSjs7QUFDREUsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFBRUMsWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsUUFBckM7QUFBaUQsS0FBaEUsQ0FaWSxDQVlzRDtBQUNyRSxHQWJRLEVBYU4sQ0FBQ0wsWUFBRCxFQUFlQyxnQkFBZixDQWJNLENBQVQ7QUFlQSxTQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixFQUFFLElBQUksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFgsRUFFS0UsU0FBUyxDQUFDZSxHQUFWLENBQWMsVUFBQ2hCLElBQUQ7QUFBQSxXQUFVLE1BQUMsNERBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ2lCLEVBQXBCO0FBQXdCLFVBQUksRUFBRWpCLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVjtBQUFBLEdBQWQsQ0FGTCxNQURKO0FBTUgsQ0E1QkQ7O0dBQU1QLEk7VUFDZUUsdUQsRUFDRkMsdUQsRUFDdUNBLHVEOzs7S0FIcERILEk7QUE4QlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAvLzwt7J206rGwIOyViOyTsOuptCBlc2xpbnQ6cmVjb21tZW5kZWQg7ISk7KCV7JeQIOqxuOumvFxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RGb3JtJztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICAgIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBkaXNwYXRjaCh7IHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCB9KTsgfSwgW10pOyAvLyDssqsg66CM642U66eBIO2bhCDsi6TtlolcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8vIFxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCB3aW5kb3cuc2Nyb2xsWSwgLy8g7Ja866eI64KYIOuCtOuguOuKlOyngFxuICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIC8vIO2ZlOuptOydtCDrs7TsnbTripQg6ri47J20XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgLy8g7LSdIOyEuOuhnCDquLjsnbQgKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gNTAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTsgfTsgLy8g7J206rGwIOyViO2VmOuptCDrqZTrqqjrpqzsl5Ag7IyT7J6EXG4gICAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XG4gICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfTtcbiAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})