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

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const calculations = __webpack_require__(/*! ./calculations */ \"./assets/calculations.js\");\n\nconst priceEl = document.getElementById(\"price\");\nconst balanceEl = document.getElementById(\"balance\");\nconst expenseEl = document.getElementById(\"expense\");\nconst expensesListEl = document.getElementById(\"expenses-list\");\nconst submitBtn = document.getElementById(\"submit\");\nconst resetBtn = document.getElementById(\"reset\");\n\nfunction addToList(name, price) {\n  expensesListEl.innerHTML += `<li class=\"list-group-item\">Name: ${name}\n    <span class=\"ml-4\">Price: ${price}</span></li>`;\n}\n\nfunction submit(e) {\n  e.preventDefault();\n  const total = calculations.subtract(Number(balanceEl.innerText), priceEl.value);\n  balanceEl.innerText = total;\n  addToList(expenseEl.value, priceEl.value);\n}\n\nfunction reset(e) {\n  e.preventDefault();\n  const total = 2000;\n  balanceEl.innerText = total;\n  expensesListEl.innerHTML = \"\";\n}\n\nsubmitBtn.onclick = submit;\nresetBtn.onclick = reset;\n\n\n//# sourceURL=webpack://webpack-demo/./assets/app.js?");

/***/ }),

/***/ "./assets/calculations.js":
/*!********************************!*\
  !*** ./assets/calculations.js ***!
  \********************************/
/***/ ((module) => {

eval("function subtract(a, b) {\n  return a - b;\n}\n\nmodule.exports = {\n  subtract\n};\n\n\n//# sourceURL=webpack://webpack-demo/./assets/calculations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/app.js");
/******/ 	
/******/ })()
;