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

/***/ "./components/extras/TopButtonComp.js":
/*!********************************************!*\
  !*** ./components/extras/TopButtonComp.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction TopButtonComp(param) {\n    var background = param.background, color = param.color, icon = param.icon;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    var handleMouseEnter = function() {\n        setIsHovered(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHovered(false);\n    };\n    // scroll en douceur\n    var scrollToSection = function(e, id) {\n        e.preventDefault();\n        var element = document.getElementById(id);\n        if (element) {\n            element.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    var styles = {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        borderRadius: \"12px\",\n        background: background,\n        width: \"50px\",\n        height: \"50px\",\n        cursor: \"pointer\",\n        marginBottom: \"10px\",\n        boxShadow: \"#010101 4px 4px 0px\",\n        transform: isHovered ? \"scale(-10px)\" : \"translateY(0)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles,\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"#\",\n            onClick: function(e) {\n                return scrollToSection(e, \"hero\");\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                icon: icon,\n                style: {\n                    color: color,\n                    fontSize: \"24px\"\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\TopButtonComp.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\TopButtonComp.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\TopButtonComp.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(TopButtonComp, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = TopButtonComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopButtonComp);\nvar _c;\n$RefreshReg$(_c, \"TopButtonComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4dHJhcy9Ub3BCdXR0b25Db21wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWlFO0FBQ2hDOztBQUVqQyxTQUFTRSxhQUFhLENBQUMsS0FBeUIsRUFBRTtRQUExQkMsVUFBVSxHQUFYLEtBQXlCLENBQXhCQSxVQUFVLEVBQUVDLEtBQUssR0FBbEIsS0FBeUIsQ0FBWkEsS0FBSyxFQUFFQyxJQUFJLEdBQXhCLEtBQXlCLENBQUxBLElBQUk7O0lBQzdDLElBQWtDSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSm5ELFNBSWtCLEdBQWtCQSxHQUFlLEdBQWpDLEVBSmxCLFlBSWdDLEdBQUlBLEdBQWUsR0FBbkI7SUFDOUIsSUFBTU8sZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkQsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsSUFBTUUsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkYsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0lBQ0Qsb0JBQW9CO0lBQ3BCLElBQU1HLGVBQWUsR0FBRyxTQUFDQyxDQUFDLEVBQUVDLEVBQUUsRUFBSztRQUNqQ0QsQ0FBQyxDQUFDRSxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDSixFQUFFLENBQUM7UUFDM0MsSUFBSUUsT0FBTyxFQUFFO1lBQ1hBLE9BQU8sQ0FBQ0csY0FBYyxDQUFDO2dCQUFFQyxRQUFRLEVBQUUsUUFBUTthQUFFLENBQUMsQ0FBQztTQUNoRDtLQUNGO0lBRUQsSUFBTUMsTUFBTSxHQUFHO1FBQ2JDLE9BQU8sRUFBRSxNQUFNO1FBQ2ZDLGNBQWMsRUFBRSxRQUFRO1FBQ3hCQyxVQUFVLEVBQUUsUUFBUTtRQUNwQkMsWUFBWSxFQUFFLE1BQU07UUFDcEJwQixVQUFVLEVBQUVBLFVBQVU7UUFDdEJxQixLQUFLLEVBQUUsTUFBTTtRQUNiQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxNQUFNLEVBQUUsU0FBUztRQUNqQkMsWUFBWSxFQUFFLE1BQU07UUFDcEJDLFNBQVMsRUFBRSxxQkFBcUI7UUFDaENDLFNBQVMsRUFBRXZCLFNBQVMsR0FBRyxjQUFjLEdBQUcsZUFBZTtLQUN4RDtJQUVELHFCQUNFLDhEQUFDd0IsS0FBRztRQUNGQyxLQUFLLEVBQUVaLE1BQU07UUFDYmEsWUFBWSxFQUFFeEIsZ0JBQWdCO1FBQzlCeUIsWUFBWSxFQUFFeEIsZ0JBQWdCO2tCQUU5Qiw0RUFBQ3lCLEdBQUM7WUFBQ0MsSUFBSSxFQUFDLEdBQUc7WUFBQ0MsT0FBTyxFQUFFLFNBQUN6QixDQUFDO3VCQUFLRCxlQUFlLENBQUNDLENBQUMsRUFBRSxNQUFNLENBQUM7YUFBQTtzQkFDcEQsNEVBQUNYLDJFQUFlO2dCQUNkSyxJQUFJLEVBQUVBLElBQUk7Z0JBQ1YwQixLQUFLLEVBQUU7b0JBQUUzQixLQUFLLEVBQUVBLEtBQUs7b0JBQUVpQyxRQUFRLEVBQUUsTUFBTTtpQkFBRTs7Ozs7b0JBQ3pDOzs7OztnQkFDQTs7Ozs7WUFDQSxDQUNOO0NBQ0g7R0E3Q1FuQyxhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUFnRHRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9leHRyYXMvVG9wQnV0dG9uQ29tcC5qcz83YzQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFRvcEJ1dHRvbkNvbXAoe2JhY2tncm91bmQsIGNvbG9yLCBpY29ufSkge1xyXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcclxuICAgIHNldElzSG92ZXJlZCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0hvdmVyZWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gc2Nyb2xsIGVuIGRvdWNldXJcclxuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoZSwgaWQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTJweFwiLFxyXG4gICAgYmFja2dyb3VuZDogYmFja2dyb3VuZCxcclxuICAgIHdpZHRoOiBcIjUwcHhcIixcclxuICAgIGhlaWdodDogXCI1MHB4XCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgIGJveFNoYWRvdzogXCIjMDEwMTAxIDRweCA0cHggMHB4XCIsXHJcbiAgICB0cmFuc2Zvcm06IGlzSG92ZXJlZCA/IFwic2NhbGUoLTEwcHgpXCIgOiBcInRyYW5zbGF0ZVkoMClcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17c3R5bGVzfVxyXG4gICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgID5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gc2Nyb2xsVG9TZWN0aW9uKGUsIFwiaGVyb1wiKX0+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvciwgZm9udFNpemU6IFwiMjRweFwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJ1dHRvbkNvbXA7XHJcbiJdLCJuYW1lcyI6WyJGb250QXdlc29tZUljb24iLCJ1c2VTdGF0ZSIsIlRvcEJ1dHRvbkNvbXAiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJpY29uIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJzY3JvbGxUb1NlY3Rpb24iLCJlIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInN0eWxlcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnNvciIsIm1hcmdpbkJvdHRvbSIsImJveFNoYWRvdyIsInRyYW5zZm9ybSIsImRpdiIsInN0eWxlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/extras/TopButtonComp.js\n");

/***/ })

});