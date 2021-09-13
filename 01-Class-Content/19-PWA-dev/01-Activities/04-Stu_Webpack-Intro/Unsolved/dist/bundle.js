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
/***/ (() => {

eval("const loanEl = document.getElementById('loan');\nconst rateEl = document.getElementById('rate');\nconst termEl = document.getElementById('term');\nconst monthlyPaymentEl = document.getElementById('monthly-payment');\nconst submitBtn = document.getElementById('submit');\n\nfunction submit(e) {\n  e.preventDefault();\n  const principle = parseInt(loanEl.value, 10);\n\n  const rate = parseFloat(rateEl.value);\n  const monthlyRate = rate / 12 / 100;\n\n  const term = parseInt(termEl.value, 10);\n  const payNum = term * 12;\n\n  const ratePow = (1 + rate) ** payNum;\n  const monthlyPayment = (principle * monthlyRate * ratePow) / (ratePow - 1);\n\n  monthlyPaymentEl.innerText = `$${monthlyPayment}`;\n}\n\nsubmitBtn.onclick = submit;\n\n\n//# sourceURL=webpack://webpack-demo/./assets/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/app.js"]();
/******/ 	
/******/ })()
;