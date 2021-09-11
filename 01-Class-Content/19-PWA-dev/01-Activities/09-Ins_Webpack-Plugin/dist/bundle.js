/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

eval("// Access toggle switch HTML element\nvar themeSwitcher = document.querySelector(\"#theme-switcher\");\nvar container = document.querySelector(\".container\");\n\n// Set default mode to dark\nvar mode = \"dark\";\n\n// Listen for a click event on toggle switch\nthemeSwitcher.addEventListener(\"click\", function() {\n  // If mode is dark, apply light background\n  if (mode === \"dark\") {\n    mode = \"light\";\n    container.setAttribute(\"class\", \"light\");\n  }\n  // If mode is light, apply dark background \n  else {\n    mode = \"dark\";\n    container.setAttribute(\"class\", \"dark\");\n  }\n});\n\n\n//# sourceURL=webpack://09-ins_webpack-plugin/./assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/app.js"]();
/******/ 	
/******/ })()
;