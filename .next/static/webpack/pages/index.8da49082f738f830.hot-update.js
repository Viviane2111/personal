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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CardComp(param) {\n    var title = param.title, description = param.description, imageSrc = param.imageSrc, imageAlt = param.imageAlt, imageWidth = param.imageWidth, imageHeight = param.imageHeight, siteLink = param.siteLink;\n    var styles = {\n        card: {\n            border: \"1px solid #fff7dd\",\n            // width: \"80vw\",\n            fontSise: \"\",\n            background: \"#fff7dd\",\n            display: \"flex\",\n            alignItem: \"center\",\n            justifyContent: \"center\",\n            flexDirection: \"row\",\n            margin: \"10px 0 10px 0\",\n            borderRadius: \"12px\",\n            boxShadow: \"#010101 5px 5px 0px\"\n        },\n        textContent: {\n            width: \"50vw\",\n            padding: \"20px\",\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        title: {\n            paddingBottom: \"20px\"\n        },\n        description: {\n            fontSize: \"1.7vh\"\n        },\n        imageBox: {\n            margin: \"10px\",\n            borderRadius: \"12px\"\n        },\n        image: {\n            borderRadius: \"8px\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: siteLink,\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            style: styles.card,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: styles.textContent,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: styles.title,\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: styles.description,\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: styles.imageBox,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: imageSrc,\n                        alt: imageAlt,\n                        width: imageWidth,\n                        height: imageHeight,\n                        style: styles.image\n                    }, void 0, false, {\n                        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\CardComp.js\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, this);\n}\n_c = CardComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardComp);\nvar _c;\n$RefreshReg$(_c, \"CardComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4dHJhcy9DYXJkQ29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQStCO0FBQy9CLFNBQVNDLFFBQVEsQ0FBQyxLQVFqQixFQUFFO1FBUERDLEtBQUssR0FEVyxLQVFqQixDQVBDQSxLQUFLLEVBQ0xDLFdBQVcsR0FGSyxLQVFqQixDQU5DQSxXQUFXLEVBQ1hDLFFBQVEsR0FIUSxLQVFqQixDQUxDQSxRQUFRLEVBQ1JDLFFBQVEsR0FKUSxLQVFqQixDQUpDQSxRQUFRLEVBQ1JDLFVBQVUsR0FMTSxLQVFqQixDQUhDQSxVQUFVLEVBQ1ZDLFdBQVcsR0FOSyxLQVFqQixDQUZDQSxXQUFXLEVBQ1hDLFFBQVEsR0FQUSxLQVFqQixDQURDQSxRQUFRO0lBRVIsSUFBTUMsTUFBTSxHQUFHO1FBQ2JDLElBQUksRUFBRTtZQUNKQyxNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLGlCQUFpQjtZQUNqQkMsUUFBUSxFQUFFLEVBQUU7WUFDWkMsVUFBVSxFQUFFLFNBQVM7WUFDckJDLE9BQU8sRUFBRSxNQUFNO1lBQ2ZDLFNBQVMsRUFBRSxRQUFRO1lBQ25CQyxjQUFjLEVBQUUsUUFBUTtZQUN4QkMsYUFBYSxFQUFFLEtBQUs7WUFDcEJDLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCQyxZQUFZLEVBQUUsTUFBTTtZQUNwQkMsU0FBUyxFQUFFLHFCQUFxQjtTQUVqQztRQUNEQyxXQUFXLEVBQUU7WUFDWEMsS0FBSyxFQUFFLE1BQU07WUFDYkMsT0FBTyxFQUFFLE1BQU07WUFDZlQsT0FBTyxFQUFFLE1BQU07WUFDZkcsYUFBYSxFQUFFLFFBQVE7U0FDeEI7UUFDRGYsS0FBSyxFQUFFO1lBQ0xzQixhQUFhLEVBQUUsTUFBTTtTQUN0QjtRQUNEckIsV0FBVyxFQUFFO1lBQ1hzQixRQUFRLEVBQUUsT0FBTztTQUNsQjtRQUNEQyxRQUFRLEVBQUU7WUFDUlIsTUFBTSxFQUFFLE1BQU07WUFDZEMsWUFBWSxFQUFFLE1BQU07U0FDckI7UUFDRFEsS0FBSyxFQUFFO1lBQ0xSLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0Y7SUFFQyxxQkFDRSw4REFBQ1MsS0FBRztrQkFDRiw0RUFBQ0MsR0FBQztZQUNBQyxJQUFJLEVBQUV0QixRQUFRO1lBQ2R1QixNQUFNLEVBQUMsUUFBUTtZQUNmQyxHQUFHLEVBQUMscUJBQXFCO1lBQ3pCQyxLQUFLLEVBQUV4QixNQUFNLENBQUNDLElBQUk7OzhCQUVsQiw4REFBQ2tCLEtBQUc7b0JBQUNLLEtBQUssRUFBRXhCLE1BQU0sQ0FBQ1ksV0FBVzs7c0NBQzVCLDhEQUFDYSxJQUFFOzRCQUFDRCxLQUFLLEVBQUV4QixNQUFNLENBQUNQLEtBQUs7c0NBQUdBLEtBQUs7Ozs7O2dDQUFNO3NDQUNyQyw4REFBQ2lDLEdBQUM7NEJBQUNGLEtBQUssRUFBRXhCLE1BQU0sQ0FBQ04sV0FBVztzQ0FBR0EsV0FBVzs7Ozs7Z0NBQUs7Ozs7Ozt3QkFDM0M7OEJBQ04sOERBQUN5QixLQUFHO29CQUFDSyxLQUFLLEVBQUV4QixNQUFNLENBQUNpQixRQUFROzhCQUN6Qiw0RUFBQzFCLG1EQUFLO3dCQUNKb0MsR0FBRyxFQUFFaEMsUUFBUTt3QkFDYmlDLEdBQUcsRUFBRWhDLFFBQVE7d0JBQ2JpQixLQUFLLEVBQUVoQixVQUFVO3dCQUNqQmdDLE1BQU0sRUFBRS9CLFdBQVc7d0JBQ25CMEIsS0FBSyxFQUFFeEIsTUFBTSxDQUFDa0IsS0FBSzs7Ozs7NEJBQ25COzs7Ozt3QkFDRTs7Ozs7O2dCQUNKOzs7OztZQUNBLENBQ047Q0FDTDtBQXJFUTFCLEtBQUFBLFFBQVE7QUF5RWpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9leHRyYXMvQ2FyZENvbXAuanM/MDBhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuZnVuY3Rpb24gQ2FyZENvbXAoe1xyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGltYWdlU3JjLFxyXG4gIGltYWdlQWx0LFxyXG4gIGltYWdlV2lkdGgsXHJcbiAgaW1hZ2VIZWlnaHQsXHJcbiAgc2l0ZUxpbmssXHJcbn0pIHtcclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjYXJkOiB7XHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZmZjdkZFwiLFxyXG4gICAgICAvLyB3aWR0aDogXCI4MHZ3XCIsXHJcbiAgICAgIGZvbnRTaXNlOiBcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNmZmY3ZGRcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbTogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgIG1hcmdpbjogXCIxMHB4IDAgMTBweCAwXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMnB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCIjMDEwMTAxIDVweCA1cHggMHB4XCIsXHJcbiAgICAgIC8vIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dENvbnRlbnQ6IHtcclxuICAgICAgd2lkdGg6IFwiNTB2d1wiLFxyXG4gICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgZm9udFNpemU6IFwiMS43dmhcIixcclxuICAgIH0sXHJcbiAgICBpbWFnZUJveDoge1xyXG4gICAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTJweFwiLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPXtzaXRlTGlua31cclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuY2FyZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGV4dENvbnRlbnR9PlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pbWFnZUJveH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtpbWFnZUFsdH1cclxuICAgICAgICAgICAgICB3aWR0aD17aW1hZ2VXaWR0aH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e2ltYWdlSGVpZ2h0fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ29tcDtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2FyZENvbXAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VTcmMiLCJpbWFnZUFsdCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInNpdGVMaW5rIiwic3R5bGVzIiwiY2FyZCIsImJvcmRlciIsImZvbnRTaXNlIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJhbGlnbkl0ZW0iLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ0ZXh0Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSIsImltYWdlQm94IiwiaW1hZ2UiLCJkaXYiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInN0eWxlIiwiaDMiLCJwIiwic3JjIiwiYWx0IiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/extras/CardComp.js\n");

/***/ })

});