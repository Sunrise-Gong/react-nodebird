webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: '해돋이'\n    },\n    content: '안녕하세요 트위터 짝퉁 궁금해서 가입해봤습니다~  #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://bit.ly/34S7zRp'\n    }, {\n      src: 'https://bit.ly/3uX6IJH'\n    }, {\n      src: 'https://bit.ly/2TDFv1w'\n    }],\n    Comments: [{\n      User: {\n        nickname: '재원'\n      },\n      content: '키보드 윤활해야지~'\n    }, {\n      User: {\n        nickname: '선범'\n      },\n      content: '여친이랑 산에 가야지~'\n    }]\n  }],\n  imagePaths: [],\n  // 이미지 업로드시 경로 저장\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n}; //-------------------------------------------- ADD_POST에 사용될 더미데이터\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: '해돋이'\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: '해돋이'\n    }\n  };\n}; //-------------------------------------------- 액션\n\n\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; //--------------------------------------------\n\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    //-------------------------------------- ADD_POST\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n    //-------------------------------------- ADD_COMMENT\n\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n\n    case ADD_COMMENT_SUCCESS:\n      {\n        var postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        }); // 댓글을 작성한 게시글의 인덱스 찾기\n\n        var post = _objectSpread({}, state.mainPosts[postIndex]); // 댓글을 작성한 게시글 얕은 복사\n\n\n        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments)); // 게시글의 댓글 얕은 복사하고 새 댓글 추가하기 \n\n        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts); // 게시글 얕은복사\n\n\n        mainPosts[postIndex] = post; // 얕은 복사된 댓글 쓴 게시글에 댓글 추가한 게시글 할당\n\n        return _objectSpread(_objectSpread({}, state), {}, {\n          mainPosts: mainPosts,\n          addCommentLoading: false,\n          addCommentDone: true\n        });\n      }\n\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZHVtbXlQb3N0IiwiZGF0YSIsInNob3J0SWQiLCJnZW5lcmF0ZSIsImR1bW15Q29tbWVudCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FDUDtBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUdJQyxRQUFJLEVBQUU7QUFBRUQsUUFBRSxFQUFFLENBQU47QUFBU0UsY0FBUSxFQUFFO0FBQW5CLEtBSFY7QUFLSUMsV0FBTyxFQUFFLDBDQUxiO0FBT0lDLFVBQU0sRUFBRSxDQUNKO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBREksRUFFSjtBQUFFQSxTQUFHLEVBQUU7QUFBUCxLQUZJLEVBR0o7QUFBRUEsU0FBRyxFQUFFO0FBQVAsS0FISSxDQVBaO0FBYUlDLFlBQVEsRUFBRSxDQUNOO0FBQUVMLFVBQUksRUFB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LHVCQUFlLEVBQUU7QUFKckI7O0FBTUosU0FBS1UsbUJBQUw7QUFBMEI7QUFDdEIsWUFBTVMsU0FBUyxHQUFHSCxLQUFLLENBQUM5QixTQUFOLENBQWdCa0MsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNsQyxFQUFGLEtBQVM4QixNQUFNLENBQUNmLElBQVAsQ0FBWW9CLE1BQTVCO0FBQUEsU0FBMUIsQ0FBbEIsQ0FEc0IsQ0FDMkQ7O0FBQ2pGLFlBQU1DLElBQUkscUJBQVFQLEtBQUssQ0FBQzlCLFNBQU4sQ0FBZ0JpQyxTQUFoQixDQUFSLENBQVYsQ0FGc0IsQ0FFMEI7OztBQUNoREksWUFBSSxDQUFDOUIsUUFBTCxJQUFpQlksWUFBWSxDQUFDWSxNQUFNLENBQUNmLElBQVAsQ0FBWVosT0FBYixDQUE3QixzR0FBdURpQyxJQUFJLENBQUM5QixRQUE1RCxHQUhzQixDQUdpRDs7QUFDdkUsWUFBTVAsU0FBUyxHQUFHLDZGQUFJOEIsS0FBSyxDQUFDOUIsU0FBYixDQUFmLENBSnNCLENBSWtCOzs7QUFDeENBLGlCQUFTLENBQUNpQyxTQUFELENBQVQsR0FBdUJJLElBQXZCLENBTHNCLENBS087O0FBQzdCLCtDQUNPUCxLQURQO0FBRUk5QixtQkFBUyxFQUFUQSxTQUZKO0FBR0lZLDJCQUFpQixFQUFFLEtBSHZCO0FBSUlDLHdCQUFjLEVBQUU7QUFKcEI7QUFNSDs7QUFDRCxTQUFLWSxtQkFBTDtBQUNJLDZDQUNPSyxLQURQO0FBRUlsQix5QkFBaUIsRUFBRSxLQUZ2QjtBQUdJRSx1QkFBZSxFQUFFaUIsTUFBTSxDQUFDQztBQUg1Qjs7QUFLSjtBQUNJLGFBQU9GLEtBQVA7QUFsRFI7QUFvREgsQ0FyREQ7O0FBdURlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtYWluUG9zdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG5cbiAgICAgICAgICAgIFVzZXI6IHsgaWQ6IDEsIG5pY2tuYW1lOiAn7ZW064+L7J20JyB9LFxuXG4gICAgICAgICAgICBjb250ZW50OiAn7JWI64WV7ZWY7IS47JqUIO2KuOychO2EsCDsp53tiYEg6raB6riI7ZW07IScIOqwgOyehe2VtOu0pOyKteuLiOuLpH4gICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG5cbiAgICAgICAgICAgIEltYWdlczogW1xuICAgICAgICAgICAgICAgIHsgc3JjOiAnaHR0cHM6Ly9iaXQubHkvMzRTN3pScCcgfSxcbiAgICAgICAgICAgICAgICB7IHNyYzogJ2h0dHBzOi8vYml0Lmx5LzN1WDZJSkgnIH0sXG4gICAgICAgICAgICAgICAgeyBzcmM6ICdodHRwczovL2JpdC5seS8yVERGdjF3JyB9LFxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7IFVzZXI6IHsgbmlja25hbWU6ICfsnqzsm5AnIH0sIGNvbnRlbnQ6ICftgqTrs7Trk5wg7Jyk7Zmc7ZW07JW87KeAficgfSxcbiAgICAgICAgICAgICAgICB7IFVzZXI6IHsgbmlja25hbWU6ICfshKDrspQnIH0sIGNvbnRlbnQ6ICfsl6zsuZzsnbTrnpEg7IKw7JeQIOqwgOyVvOyngH4nIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgaW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDsl4XroZzrk5zsi5wg6rK966GcIOyggOyepVxuICAgIFxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxuICAgIFxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLCBcbn07XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFERF9QT1NU7JeQIOyCrOyaqeuQoCDrjZTrr7jrjbDsnbTthLBcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgY29udGVudDogZGF0YSxcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogJ+2VtOuPi+ydtCcsXG4gICAgfSxcbiAgICBJbWFnZXM6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn0pO1xuXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6ICftlbTrj4vsnbQnLFxuICAgIH0sXG59KTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDslaHshZhcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gICAgZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gICAgZGF0YSxcbn0pO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUREX1BPU1RcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBRERfQ09NTUVOVFxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7IC8vIOuMk+q4gOydhCDsnpHshLHtlZwg6rKM7Iuc6riA7J2YIOyduOuNseyKpCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07IC8vIOuMk+q4gOydhCDsnpHshLHtlZwg6rKM7Iuc6riAIOyWleydgCDrs7XsgqxcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTsgLy8g6rKM7Iuc6riA7J2YIOuMk+q4gCDslpXsnYAg67O17IKs7ZWY6rOgIOyDiCDrjJPquIAg7LaU6rCA7ZWY6riwIFxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107IC8vIOqyjOyLnOq4gCDslpXsnYDrs7XsgqxcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDsgLy8g7JaV7J2AIOuzteyCrOuQnCDrjJPquIAg7JO0IOqyjOyLnOq4gOyXkCDrjJPquIAg7LaU6rCA7ZWcIOqyjOyLnOq4gCDtlaDri7lcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})