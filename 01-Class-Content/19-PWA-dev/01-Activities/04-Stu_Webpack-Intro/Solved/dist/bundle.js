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

eval("const { mortgagePayment } = __webpack_require__(/*! ./mortgage */ \"./assets/mortgage.js\");\nconst convertInterest = __webpack_require__(/*! ./convertInterest */ \"./assets/convertInterest.js\");\nconst { months } = __webpack_require__(/*! ./monthlyTerms */ \"./assets/monthlyTerms.js\");\n\nconst loanEl = document.getElementById('loan');\nconst rateEl = document.getElementById('rate');\nconst termEl = document.getElementById('term');\nconst monthlyPaymentEl = document.getElementById('monthly-payment');\nconst submitBtn = document.getElementById('submit');\n\n// const\nfunction submit(e) {\n  e.preventDefault();\n  const principle = parseInt(loanEl.value, 10);\n  console.log(principle);\n\n  const rate = parseFloat(rateEl.value);\n  // const monthlyRate = convertInterest.monthlyInterest(rate);\n  const monthlyRate = rate / 12 / 100;\n  console.log(monthlyRate);\n\n  const term = parseInt(termEl.value, 10);\n  // const payNum = months(term);\n  const payNum = term * 12;\n\n  // const monthlyPay = mortgagePayment(principle, monthlyRate, payNum);\n\n  const ratePow = (1 + rate) ** payNum;\n\n  const monthlyPayment = (principle * monthlyRate * ratePow) / (ratePow - 1);\n\n  monthlyPaymentEl.innerText = monthlyPayment;\n  console.log(monthlyPayment);\n\n\n\n  // const total = mortgage.mortgagePayment(\n  //   Number(balanceEl.innerText),\n  //   priceEl.value\n  // );\n  // balanceEl.innerText = total;\n  // addToList(expenseEl.value, priceEl.value);\n}\n\nsubmitBtn.onclick = submit;\n\n\n//# sourceURL=webpack://webpack-demo/./assets/app.js?");

/***/ }),

/***/ "./assets/convertInterest.js":
/*!***********************************!*\
  !*** ./assets/convertInterest.js ***!
  \***********************************/
/***/ ((module) => {

eval("function monthlyInterest(rate) {\n  return rate / 12 / 100;\n}\n\nmodule.exports = monthlyInterest;\n\n\n//# sourceURL=webpack://webpack-demo/./assets/convertInterest.js?");

/***/ }),

/***/ "./assets/monthlyTerms.js":
/*!********************************!*\
  !*** ./assets/monthlyTerms.js ***!
  \********************************/
/***/ ((module) => {

eval("function months(years) {\n  return years * 12;\n}\n\nmodule.exports = months;\n\n\n//# sourceURL=webpack://webpack-demo/./assets/monthlyTerms.js?");

/***/ }),

/***/ "./assets/mortgage.js":
/*!****************************!*\
  !*** ./assets/mortgage.js ***!
  \****************************/
/***/ ((module) => {

eval("function mortgagePayment(principle = 300000, rate = 0.00416, term = 360) {\n  const ratePow = (1 + rate) ** term;\n\n  return (principle * rate * ratePow) / (ratePow - 1);\n}\n\nmodule.exports = mortgagePayment;\n\n\n//# sourceURL=webpack://webpack-demo/./assets/mortgage.js?");

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