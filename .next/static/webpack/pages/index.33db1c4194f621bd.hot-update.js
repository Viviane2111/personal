"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/extras/slider.js":
/*!*************************************!*\
  !*** ./components/extras/slider.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Slider.module.css */ \"./styles/Slider.module.css\");\n/* harmony import */ var _styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Slider() {\n    var _this = this;\n    _s();\n    var baseUrl = \"images/\";\n    var data = [\n        {\n            id: 1,\n            image: \"\".concat(baseUrl, \"climb.jpg\"),\n            title: \"Escalade\",\n            text: \"Initiateur SAE - niveau 6a/6b.\"\n        },\n        {\n            id: 2,\n            image: \"\".concat(baseUrl, \"music.jpg\"),\n            title: \"Musique\",\n            text: \"Batterie, djemb\\xe9.\"\n        },\n        {\n            id: 3,\n            image: \"\".concat(baseUrl, \"graphart.jpg\"),\n            title: \"Arts graphiques\",\n            text: \"Dessin, peinture, illustration sur tablette.\"\n        },\n        {\n            id: 4,\n            image: \"\".concat(baseUrl, \"moto.jpg\"),\n            title: \"Moto\",\n            text: \"Circuit du Lus avec l'association Tortue Team.\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var nextSlide = function() {\n        return setSlide(slide === data.length - 1 ? 0 : slide + 1);\n    };\n    var prevSlide = function() {\n        return setSlide(slide === 0 ? data.length - 1 : slide - 1);\n    };\n    var oneSlide = function() {\n        var _this1 = _this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: data.map(function(item, id) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: item.image,\n                    alt: item.title,\n                    className: slide === id ? \"slide\" : \"slide slideHidden\"\n                }, id, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.image\n                }, data.id, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                    lineNumber: 54,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.image\n                }, void 0, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                    lineNumber: 57,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.image\n                }, void 0, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                    lineNumber: 60,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.image\n                }, void 0, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                    lineNumber: 63,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Slider, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDSDtHQS9EUUosTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBZ0VmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9leHRyYXMvc2xpZGVyLmpzPzgzNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1NsaWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoKSB7XHJcbiAgY29uc3QgYmFzZVVybCA9IFwiaW1hZ2VzL1wiO1xyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBpbWFnZTogYCR7YmFzZVVybH1jbGltYi5qcGdgLFxyXG4gICAgICB0aXRsZTogXCJFc2NhbGFkZVwiLFxyXG4gICAgICB0ZXh0OiBgSW5pdGlhdGV1ciBTQUUgLSBuaXZlYXUgNmEvNmIuYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBpbWFnZTogYCR7YmFzZVVybH1tdXNpYy5qcGdgLFxyXG4gICAgICB0aXRsZTogXCJNdXNpcXVlXCIsXHJcbiAgICAgIHRleHQ6IGBCYXR0ZXJpZSwgZGplbWLDqS5gLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGltYWdlOiBgJHtiYXNlVXJsfWdyYXBoYXJ0LmpwZ2AsXHJcbiAgICAgIHRpdGxlOiBcIkFydHMgZ3JhcGhpcXVlc1wiLFxyXG4gICAgICB0ZXh0OiBgRGVzc2luLCBwZWludHVyZSwgaWxsdXN0cmF0aW9uIHN1ciB0YWJsZXR0ZS5gLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIGltYWdlOiBgJHtiYXNlVXJsfW1vdG8uanBnYCxcclxuICAgICAgdGl0bGU6IFwiTW90b1wiLFxyXG4gICAgICB0ZXh0OiBgQ2lyY3VpdCBkdSBMdXMgYXZlYyBsJ2Fzc29jaWF0aW9uIFRvcnR1ZSBUZWFtLmAsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtzbGlkZSwgc2V0U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4gc2V0U2xpZGUoc2xpZGUgPT09IGRhdGEubGVuZ3RoIC0gMSA/IDAgOiBzbGlkZSArIDEpO1xyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHNldFNsaWRlKHNsaWRlID09PSAwID8gZGF0YS5sZW5ndGggLSAxIDogc2xpZGUgLSAxKTtcclxuICBjb25zdCBvbmVTbGlkZSA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGxpPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaWQpID0+IChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c2xpZGUgPT09IGlkID8gXCJzbGlkZVwiIDogXCJzbGlkZSBzbGlkZUhpZGRlblwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgKSl9XHJcbiAgICAgIDwvbGk+XHJcbiAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0ga2V5PXtkYXRhLmlkfS8+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9Lz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0vPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfS8+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiU2xpZGVyIiwiYmFzZVVybCIsImRhdGEiLCJpZCIsImltYWdlIiwidGl0bGUiLCJ0ZXh0Iiwic2xpZGUiLCJzZXRTbGlkZSIsIm5leHRTbGlkZSIsImxlbmd0aCIsInByZXZTbGlkZSIsIm9uZVNsaWRlIiwibGkiLCJtYXAiLCJpdGVtIiwiaW1nIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwiZGl2IiwiY2Fyb3VzZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/extras/slider.js\n");

/***/ })

});