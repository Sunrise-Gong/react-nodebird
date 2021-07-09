webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),\n    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),\n    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),\n    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),\n    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),\n    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),\n    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);\n\n //import shortId from 'shortid';\n\n\n\n //-------------------------------------------------- LOAD_POST\n// function loadPostAPI(data) {\n//     return axios.get('/api/posts', data);\n// }\n\nfunction loadPosts() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_POSTS_SUCCESS\"],\n            data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"generateDummyPost\"])(10)\n          });\n\n        case 5:\n          _context.next = 11;\n          break;\n\n        case 7:\n          _context.prev = 7;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_POSTS_FAILURE\"],\n            data: _context.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 7]]);\n}\n\nfunction watchLoadPosts() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"LOAD_POSTS_REQUEST\"], loadPosts);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n} //-------------------------------------------------- ADD_POST\n\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', {\n    content: data\n  });\n}\n\nfunction addPost(action) {\n  var result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(addPostAPI, action.data);\n\n        case 3:\n          result = _context3.sent;\n          _context3.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context3.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"ADD_POST_TO_ME\"],\n            data: result.data.id\n          });\n\n        case 8:\n          _context3.next = 14;\n          break;\n\n        case 10:\n          _context3.prev = 10;\n          _context3.t0 = _context3[\"catch\"](0);\n          _context3.next = 14;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_FAILURE\"],\n            data: _context3.t0.response.data\n          });\n\n        case 14:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[0, 10]]);\n}\n\nfunction watchAddPost() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_REQUEST\"], addPost);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n} //-------------------------------------------------- REMOVE_POST\n// function removePostAPI(data) {\n//     return axios.post('/api/post', data);\n// }\n\n\nfunction removePost(action) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.prev = 0;\n          _context5.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context5.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_POST_SUCCESS\"],\n            data: action.data\n          });\n\n        case 5:\n          _context5.next = 7;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"REMOVE_POST_OF_ME\"],\n            data: action.data\n          });\n\n        case 7:\n          _context5.next = 13;\n          break;\n\n        case 9:\n          _context5.prev = 9;\n          _context5.t0 = _context5[\"catch\"](0);\n          _context5.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_POST_FAILURE\"],\n            data: _context5.t0.response.data\n          });\n\n        case 13:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5, null, [[0, 9]]);\n}\n\nfunction watchRemovePost() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_POST_REQUEST\"], removePost);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n} //-------------------------------------------------- ADD_COMMENT\n// function addCommentAPI(data) {\n//     return axios.post(`/api/post/${data.postId}/comment`, data);\n// }\n\n\nfunction addComment(action) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context7) {\n    while (1) {\n      switch (_context7.prev = _context7.next) {\n        case 0:\n          _context7.prev = 0;\n          _context7.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n        case 3:\n          _context7.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_SUCCESS\"],\n            data: action.data\n          });\n\n        case 5:\n          _context7.next = 11;\n          break;\n\n        case 7:\n          _context7.prev = 7;\n          _context7.t0 = _context7[\"catch\"](0);\n          _context7.next = 11;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_FAILURE\"],\n            data: _context7.t0.response.data\n          });\n\n        case 11:\n        case \"end\":\n          return _context7.stop();\n      }\n    }\n  }, _marked7, null, [[0, 7]]);\n}\n\nfunction watchAddComment() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context8) {\n    while (1) {\n      switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_COMMENT_REQUEST\"], addComment);\n\n        case 2:\n        case \"end\":\n          return _context8.stop();\n      }\n    }\n  }, _marked8);\n}\n\nfunction postSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context9) {\n    while (1) {\n      switch (_context9.prev = _context9.next) {\n        case 0:\n          _context9.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddComment)]);\n\n        case 2:\n        case \"end\":\n          return _context9.stop();\n      }\n    }\n  }, _marked9);\n}\n/*\n------------------------ takeLatest의 문제점\n\ntakeLatest 이펙트의 문제점은 여러번의 요청이\n서버로 가기 때문에 응답은 한번만 오더라도\n서버에 데이터가 중복되서 저장될 수 있습니다.\n그런경우 새로고침시 화면에 데이터가 중복되서 나타날수 있습니다.\n\n------------------------ throttle로 문제해결\n\n이 문제를 해결할 수 있는 effects가 throttle 입니다.\n아래는 2초동안 한번의 요청을 받겠다는 설정 입니다.\n\nfunction* watchAddPost() {\n    yield throttle('ADD_POST_REQUEST', addPost, 2000);\n}\n------------------------ 서버검증으로 문제해결\n\ntakeLatest를 사용하면서\n서버에서의 검증을 통해서 연속된 요청의 문제를 해결할 수도 있습니다.\n*/\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcz8zYWJhIl0sIm5hbWVzIjpbImxvYWRQb3N0cyIsIndhdGNoTG9hZFBvc3RzIiwiYWRkUG9zdCIsIndhdGNoQWRkUG9zdCIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJhZGRDb21tZW50Iiwid2F0Y2hBZGRDb21tZW50IiwicG9zdFNhZ2EiLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJkYXRhIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJyZXNwb25zZSIsInRha2VMYXRlc3QiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJhZGRQb3N0QVBJIiwiYXhpb3MiLCJwb3N0IiwiY29udGVudCIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrR0ErQlVBLFM7bUdBZ0JBQyxjO21HQVVBQyxPO21HQW1CQUMsWTttR0FTQUMsVTttR0FvQkFDLGU7bUdBU0FDLFU7bUdBZ0JBQyxlO21HQUllQyxROztDQXJJekI7O0FBQ0E7QUFFQTtDQXNCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFVUixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR1EsaUJBQU1TLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUhSO0FBQUE7QUFJUSxpQkFBTUMsOERBQUcs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eyBhbGwsIHRha2VMYXRlc3QsIGZvcmssIHB1dCwgZGVsYXksIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7XG4gICAgTE9BRF9QT1NUU19SRVFVRVNULCBcbiAgICBMT0FEX1BPU1RTX1NVQ0NFU1MsIFxuICAgIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgICBcbiAgICBBRERfUE9TVF9SRVFVRVNULCBcbiAgICBBRERfUE9TVF9TVUNDRVNTLCBcbiAgICBBRERfUE9TVF9GQUlMVVJFLFxuICAgIFxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIFxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsIFxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsXG5cbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULFxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgICBcbiAgICBnZW5lcmF0ZUR1bW15UG9zdCxcblxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExPQURfUE9TVFxuLy8gZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xuLy8gICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnLCBkYXRhKTtcbi8vIH1cblxuZnVuY3Rpb24qIGxvYWRQb3N0cygpIHtcbiAgICB0cnkge1xuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKVxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcbiAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gICAgLy95aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUREX1BPU1RcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHsgY29udGVudDogZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJFTU9WRV9QT1NUXG4vLyBmdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcbi8vICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSk7XG4vLyB9XG5cbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSlcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFERF9DT01NRU5UXG4gLy8gZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XG4vLyAgICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XG4vLyB9XG5cbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcbiAgICBdKTtcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0YWtlTGF0ZXN07J2YIOusuOygnOygkFxuXG50YWtlTGF0ZXN0IOydtO2Ome2KuOydmCDrrLjsoJzsoJDsnYAg7Jes65+s67KI7J2YIOyalOyyreydtFxu7ISc67KE66GcIOqwgOq4sCDrlYzrrLjsl5Ag7J2R64u17J2AIO2VnOuyiOunjCDsmKTrjZTrnbzrj4RcbuyEnOuyhOyXkCDrjbDsnbTthLDqsIAg7KSR67O165CY7IScIOyggOyepeuQoCDsiJgg7J6I7Iq164uI64ukLlxu6re465+w6rK97JqwIOyDiOuhnOqzoOy5qOyLnCDtmZTrqbTsl5Ag642w7J207YSw6rCAIOykkeuzteuQmOyEnCDrgpjtg4DrgqDsiJgg7J6I7Iq164uI64ukLlxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhyb3R0bGXroZwg66y47KCc7ZW06rKwXG5cbuydtCDrrLjsoJzrpbwg7ZW06rKw7ZWgIOyImCDsnojripQgZWZmZWN0c+qwgCB0aHJvdHRsZSDsnoXri4jri6QuXG7slYTrnpjripQgMuy0iOuPmeyViCDtlZzrsojsnZgg7JqU7LKt7J2EIOuwm+qyoOuLpOuKlCDshKTsoJUg7J6F64uI64ukLlxuXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xuICAgIHlpZWxkIHRocm90dGxlKCdBRERfUE9TVF9SRVFVRVNUJywgYWRkUG9zdCwgMjAwMCk7XG59XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g7ISc67KE6rKA7Kad7Jy866GcIOusuOygnO2VtOqysFxuXG50YWtlTGF0ZXN066W8IOyCrOyaqe2VmOuptOyEnFxu7ISc67KE7JeQ7ISc7J2YIOqygOymneydhCDthrXtlbTshJwg7Jew7IaN65CcIOyalOyyreydmCDrrLjsoJzrpbwg7ZW06rKw7ZWgIOyImOuPhCDsnojsirXri4jri6QuXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ })

})