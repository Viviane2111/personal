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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Slider.module.css */ \"./styles/Slider.module.css\");\n/* harmony import */ var _styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Slider() {\n    var _this = this;\n    var baseUrl = \"images/\";\n    var data = [\n        {\n            id: 1,\n            image: \"\".concat(baseUrl, \"climb.jpg\"),\n            title: \"Escalade\",\n            text: \"Initiateur SAE - niveau 6a/6b.\"\n        },\n        {\n            id: 2,\n            image: \"\".concat(baseUrl, \"music.jpg\"),\n            title: \"Musique\",\n            text: \"Batterie, djemb\\xe9.\"\n        },\n        {\n            id: 3,\n            image: \"\".concat(baseUrl, \"graphart.jpg\"),\n            title: \"Arts graphiques\",\n            text: \"Dessin, peinture, illustration sur tablette.\"\n        },\n        {\n            id: 4,\n            image: \"\".concat(baseUrl, \"moto.jpg\"),\n            title: \"Moto\",\n            text: \"Circuit du Lus avec l'association Tortue Team.\"\n        }, \n    ];\n    //   const [slide, setSlide] = useState(0);\n    //   const nextSlide = () => setSlide(slide === data.length - 1 ? 0 : slide + 1);\n    //   const prevSlide = () => setSlide(slide === 0 ? data.length - 1 : slide - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Slider_module_css__WEBPACK_IMPORTED_MODULE_2___default().carousel),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: data.map(function(item, id) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.image,\n                    alt: item.title\n                }, id, false, {\n                    fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\0-PROJETS\\\\1-ProjetsCV\\\\personal\\\\components\\\\extras\\\\slider.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4dHJhcy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQW9EO0FBQ25CO0FBRWpDLFNBQVNFLE1BQU0sR0FBRzs7SUFDaEIsSUFBTUMsT0FBTyxHQUFHLFNBQVM7SUFDekIsSUFBTUMsSUFBSSxHQUFHO1FBQ1g7WUFDRUMsRUFBRSxFQUFFLENBQUM7WUFDTEMsS0FBSyxFQUFFLEVBQUMsQ0FBVSxNQUFTLENBQWpCSCxPQUFPLEVBQUMsV0FBUyxDQUFDO1lBQzVCSSxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsSUFBSSxFQUFHLGdDQUE4QjtTQUN0QztRQUNEO1lBQ0VILEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxFQUFDLENBQVUsTUFBUyxDQUFqQkgsT0FBTyxFQUFDLFdBQVMsQ0FBQztZQUM1QkksS0FBSyxFQUFFLFNBQVM7WUFDaEJDLElBQUksRUFBRyxzQkFBaUI7U0FDekI7UUFDRDtZQUNFSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsRUFBQyxDQUFVLE1BQVksQ0FBcEJILE9BQU8sRUFBQyxjQUFZLENBQUM7WUFDL0JJLEtBQUssRUFBRSxpQkFBaUI7WUFDeEJDLElBQUksRUFBRyw4Q0FBNEM7U0FDcEQ7UUFDRDtZQUNFSCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsRUFBQyxDQUFVLE1BQVEsQ0FBaEJILE9BQU8sRUFBQyxVQUFRLENBQUM7WUFDM0JJLEtBQUssRUFBRSxNQUFNO1lBQ2JDLElBQUksRUFBRyxnREFBOEM7U0FDdEQ7S0FDRjtJQUVILDJDQUEyQztJQUMzQyxpRkFBaUY7SUFDakYsaUZBQWlGO0lBRS9FLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVYsMkVBQWU7a0JBQzdCLDRFQUFDWSxJQUFFO3NCQUNBUixJQUFJLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVULEVBQUU7cUNBQ2pCLDhEQUFDVSxLQUFHO29CQUNGQyxHQUFHLEVBQUVaLElBQUksQ0FBQ0UsS0FBSztvQkFFZlcsR0FBRyxFQUFFSCxJQUFJLENBQUNQLEtBQUs7bUJBRFZGLEVBQUU7Ozs7eUJBR1A7YUFDRixDQUFDOzs7OztnQkFDQTs7Ozs7WUFDRCxDQUNOO0NBQ0g7QUEvQ1FILEtBQUFBLE1BQU07QUFnRGYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V4dHJhcy9zbGlkZXIuanM/ODM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvU2xpZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNsaWRlcigpIHtcclxuICBjb25zdCBiYXNlVXJsID0gXCJpbWFnZXMvXCI7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltYWdlOiBgJHtiYXNlVXJsfWNsaW1iLmpwZ2AsXHJcbiAgICAgIHRpdGxlOiBcIkVzY2FsYWRlXCIsXHJcbiAgICAgIHRleHQ6IGBJbml0aWF0ZXVyIFNBRSAtIG5pdmVhdSA2YS82Yi5gLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltYWdlOiBgJHtiYXNlVXJsfW11c2ljLmpwZ2AsXHJcbiAgICAgIHRpdGxlOiBcIk11c2lxdWVcIixcclxuICAgICAgdGV4dDogYEJhdHRlcmllLCBkamVtYsOpLmAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9Z3JhcGhhcnQuanBnYCxcclxuICAgICAgdGl0bGU6IFwiQXJ0cyBncmFwaGlxdWVzXCIsXHJcbiAgICAgIHRleHQ6IGBEZXNzaW4sIHBlaW50dXJlLCBpbGx1c3RyYXRpb24gc3VyIHRhYmxldHRlLmAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgaW1hZ2U6IGAke2Jhc2VVcmx9bW90by5qcGdgLFxyXG4gICAgICB0aXRsZTogXCJNb3RvXCIsXHJcbiAgICAgIHRleHQ6IGBDaXJjdWl0IGR1IEx1cyBhdmVjIGwnYXNzb2NpYXRpb24gVG9ydHVlIFRlYW0uYCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbi8vICAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuLy8gICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiBzZXRTbGlkZShzbGlkZSA9PT0gZGF0YS5sZW5ndGggLSAxID8gMCA6IHNsaWRlICsgMSk7XHJcbi8vICAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4gc2V0U2xpZGUoc2xpZGUgPT09IDAgPyBkYXRhLmxlbmd0aCAtIDEgOiBzbGlkZSAtIDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH0+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGlkKSA9PiAoXHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9e3NsaWRlID09PSBpZCA/IFwic2xpZGVcIiA6IFwic2xpZGUgc2xpZGVIaWRkZW5cIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICkpfVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIlNsaWRlciIsImJhc2VVcmwiLCJkYXRhIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImNhcm91c2VsIiwibGkiLCJtYXAiLCJpdGVtIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/extras/slider.js\n");

/***/ })

});