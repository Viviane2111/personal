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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Slider.module.css */ \"./styles/Slider.module.css\");\n/* harmony import */ var _styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Slider() {\n    _s();\n    var baseUrl = \"images/\";\n    var data = [\n        {\n            id: 1,\n            image: \"\".concat(baseUrl, \"climb.jpg\"),\n            title: \"Escalade\",\n            text: \"Initiateur SAE - niveau 6a/6b.\"\n        },\n        {\n            id: 2,\n            image: \"\".concat(baseUrl, \"music.jpg\"),\n            title: \"Musique\",\n            text: \"Batterie, djemb\\xe9.\"\n        },\n        {\n            id: 3,\n            image: \"\".concat(baseUrl, \"graphart.jpg\"),\n            title: \"Arts graphiques\",\n            text: \"Dessin, peinture, illustration sur tablette.\"\n        },\n        {\n            id: 4,\n            image: \"\".concat(baseUrl, \"moto.jpg\"),\n            title: \"Moto\",\n            text: \"Circuit du Lus avec l'association Tortue Team.\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), slide = ref[0], setSlide = ref[1];\n    var nextSlide = function() {\n        return setSlide(slide === data.length - 1 ? 0 : slide + 1);\n    };\n    var prevSlide = function() {\n        return setSlide(slide === 0 ? data.length - 1 : slide - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().carousel)\n    }, void 0, false, {\n        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Slider, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4dHJhcy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUNuQjtBQUNnQztBQUNpQjs7QUFJbEYsU0FBU0ssTUFBTSxHQUFHOztJQUNoQixJQUFNQyxPQUFPLEdBQUcsU0FBUztJQUN6QixJQUFNQyxJQUFJLEdBQUc7UUFDWDtZQUNFQyxFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsRUFBQyxDQUFVLE1BQVMsQ0FBakJILE9BQU8sRUFBQyxXQUFTLENBQUM7WUFDNUJJLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxJQUFJLEVBQUcsZ0NBQThCO1NBQ3RDO1FBQ0Q7WUFDRUgsRUFBRSxFQUFFLENBQUM7WUFDTEMsS0FBSyxFQUFFLEVBQUMsQ0FBVSxNQUFTLENBQWpCSCxPQUFPLEVBQUMsV0FBUyxDQUFDO1lBQzVCSSxLQUFLLEVBQUUsU0FBUztZQUNoQkMsSUFBSSxFQUFHLHNCQUFpQjtTQUN6QjtRQUNEO1lBQ0VILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxFQUFDLENBQVUsTUFBWSxDQUFwQkgsT0FBTyxFQUFDLGNBQVksQ0FBQztZQUMvQkksS0FBSyxFQUFFLGlCQUFpQjtZQUN4QkMsSUFBSSxFQUFHLDhDQUE0QztTQUNwRDtRQUNEO1lBQ0VILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxFQUFDLENBQVUsTUFBUSxDQUFoQkgsT0FBTyxFQUFDLFVBQVEsQ0FBQztZQUMzQkksS0FBSyxFQUFFLE1BQU07WUFDYkMsSUFBSSxFQUFHLGdEQUE4QztTQUN0RDtLQUNGO0lBRUQsSUFBMEJWLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFwQ3ZDLEtBb0NjLEdBQWNBLEdBQVcsR0FBekIsRUFwQ2QsUUFvQ3dCLEdBQUlBLEdBQVcsR0FBZjtJQUN0QixJQUFNYSxTQUFTLEdBQUc7ZUFBTUQsUUFBUSxDQUFDRCxLQUFLLEtBQU1MLElBQUksQ0FBQ1EsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdILEtBQUssR0FBRyxDQUFDLENBQUM7S0FBQTtJQUM1RSxJQUFNSSxTQUFTLEdBQUc7ZUFBTUgsUUFBUSxDQUFDRCxLQUFLLEtBQUssQ0FBQyxHQUFHTCxJQUFJLENBQUNRLE1BQU0sR0FBRSxDQUFDLEdBQUdILEtBQUssR0FBRyxDQUFDLENBQUM7S0FBQTtJQUUxRSxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUVsQiwyRUFBZTs7Ozs7WUFHekIsQ0FDTjtDQUNIO0dBdkNRSyxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUF3Q2YsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V4dHJhcy9zbGlkZXIuanM/ODM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvU2xpZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBGYUNoZXZyb25MZWZ0LCBGYUNoZXZyb25SaWdodCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gU2xpZGVyKCkge1xyXG4gIGNvbnN0IGJhc2VVcmwgPSBcImltYWdlcy9cIjtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9Y2xpbWIuanBnYCxcclxuICAgICAgdGl0bGU6IFwiRXNjYWxhZGVcIixcclxuICAgICAgdGV4dDogYEluaXRpYXRldXIgU0FFIC0gbml2ZWF1IDZhLzZiLmAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9bXVzaWMuanBnYCxcclxuICAgICAgdGl0bGU6IFwiTXVzaXF1ZVwiLFxyXG4gICAgICB0ZXh0OiBgQmF0dGVyaWUsIGRqZW1iw6kuYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBpbWFnZTogYCR7YmFzZVVybH1ncmFwaGFydC5qcGdgLFxyXG4gICAgICB0aXRsZTogXCJBcnRzIGdyYXBoaXF1ZXNcIixcclxuICAgICAgdGV4dDogYERlc3NpbiwgcGVpbnR1cmUsIGlsbHVzdHJhdGlvbiBzdXIgdGFibGV0dGUuYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBpbWFnZTogYCR7YmFzZVVybH1tb3RvLmpwZ2AsXHJcbiAgICAgIHRpdGxlOiBcIk1vdG9cIixcclxuICAgICAgdGV4dDogYENpcmN1aXQgZHUgTHVzIGF2ZWMgbCdhc3NvY2lhdGlvbiBUb3J0dWUgVGVhbS5gLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBbc2xpZGUsIHNldFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHNldFNsaWRlKHNsaWRlID09PSAgZGF0YS5sZW5ndGggLSAxID8gMCA6IHNsaWRlICsgMSk7XHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4gc2V0U2xpZGUoc2xpZGUgPT09IDAgPyBkYXRhLmxlbmd0aCAtMSA6IHNsaWRlIC0gMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfT5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsIkZhQ2hldnJvbkxlZnQiLCJGYUNoZXZyb25SaWdodCIsIlNsaWRlciIsImJhc2VVcmwiLCJkYXRhIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwidGV4dCIsInNsaWRlIiwic2V0U2xpZGUiLCJuZXh0U2xpZGUiLCJsZW5ndGgiLCJwcmV2U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJvdXNlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/extras/slider.js\n");

/***/ })

});