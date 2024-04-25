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

/***/ "./components/extras/CardComp.js":
/*!***************************************!*\
  !*** ./components/extras/CardComp.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CardComp(param) {\n    var title = param.title, description = param.description, technos = param.technos, imageSrc = param.imageSrc, imageAlt = param.imageAlt, imageWidth = param.imageWidth, imageHeight = param.imageHeight, siteLink = param.siteLink;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    var handleMouseEnter = function() {\n        setIsHovered(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHovered(false);\n    };\n    var styles = {\n        container: {\n            Width: \"100vw\"\n        },\n        card: {\n            // width: \"95vw\",\n            border: \"1px solid #fff7dd\",\n            fontSise: \"\",\n            background: \"#fff7dd\",\n            display: \"flex\",\n            alignItem: \"center\",\n            justifyContent: \"center\",\n            flexDirection: \"row\",\n            margin: \"10px 0 10px 0\",\n            borderRadius: \"12px\",\n            boxShadow: \"#010101 5px 5px 0px\"\n        },\n        textContent: {\n            width: \"50vw\",\n            padding: \"20px\",\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        title: {\n            paddingBottom: \"20px\"\n        },\n        description: {\n            fontSize: \"1.7vh\"\n        },\n        technos: {\n            margin: \"85px 0 0\",\n            padding: \"5px\",\n            width: \"200px\",\n            textAlign: \"center\",\n            fontSize: \"1.2vh\",\n            border: \"1px solid\",\n            borderRadius: \"12px\",\n            color: \"#fff\",\n            transition: \"background 0.3s ease-in-out\",\n            background: isHovered ? \"#005BCD\" : \"#005BCD88\",\n            position: \"relative\"\n        },\n        imageBox: {\n            margin: \"10px\",\n            borderRadius: \"12px\"\n        },\n        image: {\n            borderRadius: \"8px\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: siteLink,\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            style: styles.card,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: styles.textContent,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: styles.title,\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: styles.description,\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: styles.technos,\n                            onMouseEnter: handleMouseEnter,\n                            onMouseLeave: handleMouseLeave,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: technos\n                            }, void 0, false, {\n                                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: styles.imageBox,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: imageSrc,\n                        alt: imageAlt,\n                        width: imageWidth,\n                        height: imageHeight,\n                        style: styles.image\n                    }, void 0, false, {\n                        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n        lineNumber: 76,\n        columnNumber: 7\n    }, this);\n}\n_s(CardComp, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = CardComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardComp);\nvar _c;\n$RefreshReg$(_c, \"CardComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFFOzRCQUFDRCxLQUFLLEVBQUU5QixNQUFNLENBQUNaLEtBQUs7c0NBQUdBLEtBQUs7Ozs7O2dDQUFNO3NDQUNyQyw4REFBQzRDLEdBQUM7NEJBQUNGLEtBQUssRUFBRTlCLE1BQU0sQ0FBQ1gsV0FBVztzQ0FBR0EsV0FBVzs7Ozs7Z0NBQUs7c0NBQy9DLDhEQUFDbUMsS0FBRzs0QkFDRk0sS0FBSyxFQUFFOUIsTUFBTSxDQUFDVixPQUFPOzRCQUNyQjJDLFlBQVksRUFBRW5DLGdCQUFnQjs0QkFDOUJvQyxZQUFZLEVBQUVuQyxnQkFBZ0I7c0NBRTlCLDRFQUFDaUMsR0FBQzswQ0FBRTFDLE9BQU87Ozs7O29DQUFLOzs7OztnQ0FDWjs7Ozs7O3dCQUNGOzhCQUNOLDhEQUFDa0MsS0FBRztvQkFBQ00sS0FBSyxFQUFFOUIsTUFBTSxDQUFDc0IsUUFBUTs4QkFDekIsNEVBQUNyQyxtREFBSzt3QkFDSmtELEdBQUcsRUFBRTVDLFFBQVE7d0JBQ2I2QyxHQUFHLEVBQUU1QyxRQUFRO3dCQUNiUixLQUFLLEVBQUVTLFVBQVU7d0JBQ2pCNEMsTUFBTSxFQUFFM0MsV0FBVzt3QkFDbkJvQyxLQUFLLEVBQUU5QixNQUFNLENBQUN1QixLQUFLOzs7Ozs0QkFDbkI7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0EsQ0FDTjtDQUNMO0dBckdRcEMsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBdUdqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXh0cmFzL0NhcmRDb21wLmpzPzAwYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2lkdGggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhMFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmRDb21wKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICB0ZWNobm9zLFxyXG4gIGltYWdlU3JjLFxyXG4gIGltYWdlQWx0LFxyXG4gIGltYWdlV2lkdGgsXHJcbiAgaW1hZ2VIZWlnaHQsXHJcbiAgc2l0ZUxpbmssXHJcbn0pIHtcclxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzSG92ZXJlZCh0cnVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc0hvdmVyZWQoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIFdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAvLyB3aWR0aDogXCI5NXZ3XCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZmZjdkZFwiLFxyXG4gICAgICBmb250U2lzZTogXCJcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjZmZmN2RkXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW06IFwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICBtYXJnaW46IFwiMTBweCAwIDEwcHggMFwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTJweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiIzAxMDEwMSA1cHggNXB4IDBweFwiLFxyXG4gICAgfSxcclxuICAgIHRleHRDb250ZW50OiB7XHJcbiAgICAgIHdpZHRoOiBcIjUwdndcIixcclxuICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMjBweFwiLFxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjEuN3ZoXCIsXHJcbiAgICB9LFxyXG4gICAgdGVjaG5vczoge1xyXG4gICAgICBtYXJnaW46IFwiODVweCAwIDBcIixcclxuICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjJ2aFwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMnB4XCIsXHJcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXRcIixcclxuICAgICAgYmFja2dyb3VuZDogaXNIb3ZlcmVkID8gXCIjMDA1QkNEXCIgOiBcIiMwMDVCQ0Q4OFwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlQm94OiB7XHJcbiAgICAgIG1hcmdpbjogXCIxMHB4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMnB4XCIsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj17c2l0ZUxpbmt9XHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmNhcmR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRleHRDb250ZW50fT5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy50ZWNobm9zfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD57dGVjaG5vc308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaW1hZ2VCb3h9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZUhlaWdodH1cclxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDb21wO1xyXG4iXSwibmFtZXMiOlsid2lkdGgiLCJJbWFnZSIsInVzZVN0YXRlIiwiQ2FyZENvbXAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaG5vcyIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJzaXRlTGluayIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiV2lkdGgiLCJjYXJkIiwiYm9yZGVyIiwiZm9udFNpc2UiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImFsaWduSXRlbSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInRleHRDb250ZW50IiwicGFkZGluZyIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImNvbG9yIiwidHJhbnNpdGlvbiIsInBvc2l0aW9uIiwiaW1hZ2VCb3giLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3R5bGUiLCJoMyIsInAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/extras/CardComp.js\n");

/***/ })

});