/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./app/components/UI/defaultButton/defaultButton.module.scss":
/*!*******************************************************************!*\
  !*** ./app/components/UI/defaultButton/defaultButton.module.scss ***!
  \*******************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"default\": \"defaultButton_default__xATk_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9VSS9kZWZhdWx0QnV0dG9uL2RlZmF1bHRCdXR0b24ubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2FwcC9jb21wb25lbnRzL1VJL2RlZmF1bHRCdXR0b24vZGVmYXVsdEJ1dHRvbi5tb2R1bGUuc2Nzcz9jZDgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRlZmF1bHRcIjogXCJkZWZhdWx0QnV0dG9uX2RlZmF1bHRfX3hBVGtfXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/UI/defaultButton/defaultButton.module.scss\n");

/***/ }),

/***/ "./app/components/UI/spacer/spacer.module.scss":
/*!*****************************************************!*\
  !*** ./app/components/UI/spacer/spacer.module.scss ***!
  \*****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"xs\": \"spacer_xs__KTofC\",\n\t\"sm\": \"spacer_sm__q_fw1\",\n\t\"md\": \"spacer_md__f4HHq\",\n\t\"lg\": \"spacer_lg__O_Vbn\",\n\t\"xl\": \"spacer_xl__RDgk1\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9VSS9zcGFjZXIvc3BhY2VyLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2FwcC9jb21wb25lbnRzL1VJL3NwYWNlci9zcGFjZXIubW9kdWxlLnNjc3M/MTk2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ4c1wiOiBcInNwYWNlcl94c19fS1RvZkNcIixcblx0XCJzbVwiOiBcInNwYWNlcl9zbV9fcV9mdzFcIixcblx0XCJtZFwiOiBcInNwYWNlcl9tZF9fZjRISHFcIixcblx0XCJsZ1wiOiBcInNwYWNlcl9sZ19fT19WYm5cIixcblx0XCJ4bFwiOiBcInNwYWNlcl94bF9fUkRnazFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/UI/spacer/spacer.module.scss\n");

/***/ }),

/***/ "./app/components/UI/defaultButton/defaultButton.js":
/*!**********************************************************!*\
  !*** ./app/components/UI/defaultButton/defaultButton.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _defaultButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultButton.module.scss */ \"./app/components/UI/defaultButton/defaultButton.module.scss\");\n/* harmony import */ var _defaultButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_defaultButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst DefaultButton = ({ children , handleClick , width , type , props , disabled  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleClick,\n            disabled: disabled,\n            className: (_defaultButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[type],\n            style: {\n                width,\n                ...props\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\1\\\\myspot\\\\frontend\\\\app\\\\components\\\\UI\\\\defaultButton\\\\defaultButton.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9VSS9kZWZhdWx0QnV0dG9uL2RlZmF1bHRCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFFakQsTUFBTUUsZ0JBQWdCLENBQUMsRUFDbkJDLFNBQVEsRUFDUkMsWUFBVyxFQUNYQyxNQUFLLEVBQ0xDLEtBQUksRUFDSkMsTUFBSyxFQUNMQyxTQUFRLEVBQ1gsR0FBSztJQUNGLHFCQUNJO2tCQUNJLDRFQUFDQztZQUNHQyxTQUFTTjtZQUNUSSxVQUFVQTtZQUNWRyxXQUFXVixtRUFBTSxDQUFDSyxLQUFLO1lBQ3ZCTSxPQUFPO2dCQUNIUDtnQkFDQSxHQUFHRSxLQUFLO1lBQ1o7c0JBRUNKOzs7Ozs7O0FBSWpCO0FBRUEsaUVBQWVELGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2FwcC9jb21wb25lbnRzL1VJL2RlZmF1bHRCdXR0b24vZGVmYXVsdEJ1dHRvbi5qcz8zZDY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9kZWZhdWx0QnV0dG9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBEZWZhdWx0QnV0dG9uID0gKHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgaGFuZGxlQ2xpY2ssXHJcbiAgICB3aWR0aCxcclxuICAgIHR5cGUsXHJcbiAgICBwcm9wcyxcclxuICAgIGRpc2FibGVkLFxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbdHlwZV19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJEZWZhdWx0QnV0dG9uIiwiY2hpbGRyZW4iLCJoYW5kbGVDbGljayIsIndpZHRoIiwidHlwZSIsInByb3BzIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/UI/defaultButton/defaultButton.js\n");

/***/ }),

/***/ "./app/components/UI/spacer/spacer.js":
/*!********************************************!*\
  !*** ./app/components/UI/spacer/spacer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _spacer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacer.module.scss */ \"./app/components/UI/spacer/spacer.module.scss\");\n/* harmony import */ var _spacer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_spacer_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Spacer = ({ size  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_spacer_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[size]\n        }, void 0, false, {\n            fileName: \"C:\\\\1\\\\myspot\\\\frontend\\\\app\\\\components\\\\UI\\\\spacer\\\\spacer.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spacer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9VSS9zcGFjZXIvc3BhY2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBRTFDLE1BQU1FLFNBQVMsQ0FBQyxFQUFFQyxLQUFJLEVBQUUsR0FBSztJQUN6QixxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBSUMsV0FBV0osNERBQU0sQ0FBQ0UsS0FBSzs7Ozs7OztBQUd4QztBQUVBLGlFQUFlRCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9hcHAvY29tcG9uZW50cy9VSS9zcGFjZXIvc3BhY2VyLmpzPzgzYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NwYWNlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgU3BhY2VyID0gKHsgc2l6ZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbc2l6ZV19IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BhY2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJTcGFjZXIiLCJzaXplIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/UI/spacer/spacer.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_components_UI_defaultButton_defaultButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/UI/defaultButton/defaultButton */ \"./app/components/UI/defaultButton/defaultButton.js\");\n/* harmony import */ var _app_components_UI_spacer_spacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/UI/spacer/spacer */ \"./app/components/UI/spacer/spacer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\"use client\";\n\n\n\n\nfunction HomePage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/signup\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main__wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_UI_spacer_spacer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    size: \"xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\1\\\\myspot\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_UI_defaultButton_defaultButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    handleClick: handleClick,\n                    type: \"default\",\n                    children: \"THE LUPPA\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\1\\\\myspot\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\1\\\\myspot\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n} // export async function getServerSideProps() {\n //     const res = axios.get(process.env.NEXT_PUBLIC_API + \"/auth/sign_in\");\n //     const data = await res.data;\n //     console.log(data);\n //     return { props: { data } };\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQzZFO0FBQ3JCO0FBQ2hCO0FBQ3pCLFNBQVNHLFdBQVc7SUFDL0IsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU1HLGNBQWMsQ0FBQ0MsSUFBTTtRQUN2QkEsRUFBRUMsY0FBYztRQUNoQkgsT0FBT0ksSUFBSSxDQUFDO0lBQ2hCO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDVCx3RUFBTUE7b0JBQUNVLE1BQU07Ozs7Ozs4QkFDZCw4REFBQ1gsc0ZBQWFBO29CQUFDSyxhQUFhQTtvQkFBYU8sTUFBTTs4QkFBVzs7Ozs7Ozs7Ozs7OztBQU0xRSxDQUFDLENBRUQsK0NBQStDO0NBQy9DLDRFQUE0RTtDQUM1RSxtQ0FBbUM7Q0FDbkMseUJBQXlCO0NBRXpCLGtDQUFrQztDQUNsQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgRGVmYXVsdEJ1dHRvbiBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvVUkvZGVmYXVsdEJ1dHRvbi9kZWZhdWx0QnV0dG9uXCI7XHJcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL1VJL3NwYWNlci9zcGFjZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTcGFjZXIgc2l6ZT17XCJ4bFwifSAvPlxyXG4gICAgICAgICAgICAgICAgPERlZmF1bHRCdXR0b24gaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSB0eXBlPXtcImRlZmF1bHRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgVEhFIExVUFBBXHJcbiAgICAgICAgICAgICAgICA8L0RlZmF1bHRCdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF4aW9zLmdldChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEkgKyBcIi9hdXRoL3NpZ25faW5cIik7XHJcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbi8vICAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiRGVmYXVsdEJ1dHRvbiIsIlNwYWNlciIsInVzZVJvdXRlciIsIkhvbWVQYWdlIiwicm91dGVyIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();