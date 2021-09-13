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

eval("const { monthlyInterest } = __webpack_require__(/*! ./convertInterest */ \"./assets/convertInterest.js\");\nconst { loanPayment } = __webpack_require__(/*! ./loanCalc */ \"./assets/loanCalc.js\");\nconst { months } = __webpack_require__(/*! ./monthlyTerms */ \"./assets/monthlyTerms.js\");\n\nconst loanEl = document.getElementById('loan');\nconst rateEl = document.getElementById('rate');\nconst termEl = document.getElementById('term');\nconst monthlyPaymentEl = document.getElementById('monthly-payment');\nconst submitBtn = document.getElementById('submit');\n\nfunction submit(e) {\n  e.preventDefault();\n  // Get values from user inputs\n  const principle = parseInt(loanEl.value, 10);\n  const rate = parseFloat(rateEl.value);\n  const term = parseInt(termEl.value, 10);\n  // Convert into values for loan formula\n  const monthlyRate = monthlyInterest(rate);\n  const payNum = months(term);\n  // Calculate loan formula\n  const monthlyPayment = loanPayment(principle, monthlyRate, payNum);\n\n  monthlyPaymentEl.innerText = `$${monthlyPayment.toFixed(2)}`;\n}\n\nsubmitBtn.onclick = submit;\n\n\n//# sourceURL=webpack://webpack-scripts/./assets/app.js?");

/***/ }),

/***/ "./assets/convertInterest.js":
/*!***********************************!*\
  !*** ./assets/convertInterest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"monthlyInterest\": () => (/* binding */ monthlyInterest)\n/* harmony export */ });\nfunction monthlyInterest(rate) {\n  return rate / 12 / 100;\n}\n\n\n//# sourceURL=webpack://webpack-scripts/./assets/convertInterest.js?");

/***/ }),

/***/ "./assets/loanCalc.js":
/*!****************************!*\
  !*** ./assets/loanCalc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loanPayment\": () => (/* binding */ loanPayment)\n/* harmony export */ });\nfunction loanPayment(principle = 300000, rate = 0.00416, term = 360) {\n  const ratePow = (1 + rate) ** term;\n\n  return (principle * rate * ratePow) / (ratePow - 1);\n}\n\n\n//# sourceURL=webpack://webpack-scripts/./assets/loanCalc.js?");

/***/ }),

/***/ "./assets/monthlyTerms.js":
/*!********************************!*\
  !*** ./assets/monthlyTerms.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"months\": () => (/* binding */ months)\n/* harmony export */ });\nfunction months(years) {\n  return years * 12;\n}\n\n\n//# sourceURL=webpack://webpack-scripts/./assets/monthlyTerms.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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