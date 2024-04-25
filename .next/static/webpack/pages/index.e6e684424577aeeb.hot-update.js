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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    // contrôle du menu burger\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openMenu = ref[0], setOpenMenu = ref[1];\n    var handdleOpenMenu = function() {\n        setOpenMenu(!openMenu);\n    };\n    // contrôle su scroll vers une section\n    var scrollToSection = function(e, id) {\n        e.preventDefault();\n        var element = document.getElementById(id);\n        if (element) {\n            element.scrollIntoView({\n                behavior: \"smooth\"\n            });\n            setOpenMenu(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar), \" \").concat(openMenu ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().showMenu) : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarLogo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/funnyCat.png\",\n                    alt: \"cat logo\",\n                    width: 78,\n                    height: 58\n                }, void 0, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarLinks),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: [\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarItem),\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideInDown1)\n                        ].join(\" \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#hero\",\n                            onClick: function(e) {\n                                return scrollToSection(e, \"hero\");\n                            },\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar__link),\n                            children: \"Accueil\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: [\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarItem),\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideInDown2)\n                        ].join(\" \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#portfolio\",\n                            onClick: function(e) {\n                                return scrollToSection(e, \"portfolio\");\n                            },\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar__link),\n                            children: \"R\\xe9alisation\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: [\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarItem),\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideInDown3)\n                        ].join(\" \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#school\",\n                            onClick: function(e) {\n                                return scrollToSection(e, \"school\");\n                            },\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar__link),\n                            children: \"Formation\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: [\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarItem),\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideInDown4)\n                        ].join(\" \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#experience\",\n                            onClick: function(e) {\n                                return scrollToSection(e, \"experience\");\n                            },\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar__link),\n                            children: \"Exp\\xe9riences\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: [\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbarItem),\n                            (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().slideInDown5)\n                        ].join(\" \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#contact\",\n                            onClick: function(e) {\n                                return scrollToSection(e, \"hobbies\");\n                            },\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar__link),\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar__burger),\n                onClick: handdleOpenMenu,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().burgerBar)\n                }, void 0, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzhCLElBQUksQ0FBQyxHQUFHLENBQUM7a0NBQy9ELDRFQUFDQyxHQUFDOzRCQUNBQyxJQUFJLEVBQUMsYUFBYTs0QkFDbEJDLE9BQU8sRUFBRSxTQUFDMUIsQ0FBQzt1Q0FBS0QsZUFBZSxDQUFDQyxDQUFDLEVBQUUsWUFBWSxDQUFDOzZCQUFBOzRCQUNoRFMsU0FBUyxFQUFFaEIsK0VBQW1CO3NDQUMvQixnQkFFRDs7Ozs7Z0NBQUk7Ozs7OzRCQUNEO2tDQUNMLDhEQUFDMkIsSUFBRTt3QkFBQ1gsU0FBUyxFQUFFOzRCQUFDaEIsNkVBQWlCOzRCQUFFQSwrRUFBbUI7eUJBQUMsQ0FBQzhCLElBQUksQ0FBQyxHQUFHLENBQUM7a0NBQy9ELDRFQUFDQyxHQUFDOzRCQUNBQyxJQUFJLEVBQUMsVUFBVTs0QkFDZkMsT0FBTyxFQUFFLFNBQUMxQixDQUFDO3VDQUFLRCxlQUFlLENBQUNDLENBQUMsRUFBRSxTQUFTLENBQUM7NkJBQUE7NEJBQzdDUyxTQUFTLEVBQUVoQiwrRUFBbUI7c0NBQy9CLFNBRUQ7Ozs7O2dDQUFJOzs7Ozs0QkFDRDs7Ozs7O29CQUNGOzBCQUNMLDhEQUFDdUMsUUFBTTtnQkFBQ3ZCLFNBQVMsRUFBRWhCLGlGQUFxQjtnQkFBRWlDLE9BQU8sRUFBRTVCLGVBQWU7MEJBQ2hFLDRFQUFDb0MsTUFBSTtvQkFBQ3pCLFNBQVMsRUFBRWhCLDRFQUFnQjs7Ozs7d0JBQVM7Ozs7O29CQUNuQzs7Ozs7O1lBQ0wsQ0FDTjtDQUNIO0dBOUVRRSxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUErRWYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAvLyBjb250csO0bGUgZHUgbWVudSBidXJnZXJcclxuICAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIGNvbnN0IGhhbmRkbGVPcGVuTWVudSA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbk1lbnUoIW9wZW5NZW51KTtcclxuICAgfTtcclxuICAgLy8gY29udHLDtGxlIHN1IHNjcm9sbCB2ZXJzIHVuZSBzZWN0aW9uXHJcbiAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IChlLCBpZCkgPT4ge1xyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICBzZXRPcGVuTWVudShmYWxzZSk7XHJcbiAgICAgfVxyXG4gICB9O1xyXG4gICBcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJ9ICR7b3Blbk1lbnUgPyBzdHlsZXMuc2hvd01lbnUgOiBcIlwifWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckxvZ299PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2Z1bm55Q2F0LnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJjYXQgbG9nb1wiXHJcbiAgICAgICAgICB3aWR0aD17Nzh9XHJcbiAgICAgICAgICBoZWlnaHQ9ezU4fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyTGlua3N9PlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e1tzdHlsZXMubmF2YmFySXRlbSwgc3R5bGVzLnNsaWRlSW5Eb3duMV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNoZXJvXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNjcm9sbFRvU2VjdGlvbihlLCBcImhlcm9cIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9fbGlua31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWNjdWVpbFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17W3N0eWxlcy5uYXZiYXJJdGVtLCBzdHlsZXMuc2xpZGVJbkRvd24yXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI3BvcnRmb2xpb1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzY3JvbGxUb1NlY3Rpb24oZSwgXCJwb3J0Zm9saW9cIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9fbGlua31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUsOpYWxpc2F0aW9uXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtbc3R5bGVzLm5hdmJhckl0ZW0sIHN0eWxlcy5zbGlkZUluRG93bjNdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjc2Nob29sXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNjcm9sbFRvU2VjdGlvbihlLCBcInNjaG9vbFwiKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX19saW5rfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGb3JtYXRpb25cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e1tzdHlsZXMubmF2YmFySXRlbSwgc3R5bGVzLnNsaWRlSW5Eb3duNF0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNleHBlcmllbmNlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNjcm9sbFRvU2VjdGlvbihlLCBcImV4cGVyaWVuY2VcIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9fbGlua31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRXhww6lyaWVuY2VzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtbc3R5bGVzLm5hdmJhckl0ZW0sIHN0eWxlcy5zbGlkZUluRG93bjVdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjY29udGFjdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzY3JvbGxUb1NlY3Rpb24oZSwgXCJob2JiaWVzXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJfX2xpbmt9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9fYnVyZ2VyfSBvbkNsaWNrPXtoYW5kZGxlT3Blbk1lbnV9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckJhcn0+PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJoYW5kZGxlT3Blbk1lbnUiLCJzY3JvbGxUb1NlY3Rpb24iLCJlIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIm5hdiIsImNsYXNzTmFtZSIsIm5hdmJhciIsInNob3dNZW51IiwiZGl2IiwibmF2YmFyTG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJuYXZiYXJMaW5rcyIsImxpIiwibmF2YmFySXRlbSIsInNsaWRlSW5Eb3duMSIsImpvaW4iLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJuYXZiYXJfX2xpbmsiLCJzbGlkZUluRG93bjIiLCJzbGlkZUluRG93bjMiLCJzbGlkZUluRG93bjQiLCJzbGlkZUluRG93bjUiLCJidXR0b24iLCJuYXZiYXJfX2J1cmdlciIsInNwYW4iLCJidXJnZXJCYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});