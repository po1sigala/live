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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("/* eslint-disable */\nconst listEl = document.querySelector('#data-list');\n\nconst getData = (data, successRate = 0.98, maxLatencyMs = 1000) =>\n  new Promise((resolve, reject) => {\n    const successRoll = Math.random();\n    // interval: [0, maxLatencyMs]\n    const latency = Math.floor(Math.random() * (maxLatencyMs + 1));\n\n    if (successRoll <= successRate) {\n      setTimeout(() => resolve(data), latency);\n    } else {\n      // eslint-disable-next-line prefer-promise-reject-errors\n      setTimeout(() => reject('API failed to return data'), latency);\n    }\n  });\n\n// Mock API Call\nconst fetchData = async () => {\n  const response = await getData([\n    {\n      id: 1,\n      title: 'The Count of Monte Cristo',\n    },\n    {\n      id: 2,\n      title: 'The Colour of Magic',\n    },\n    {\n      id: 3,\n      title: 'Great Expectations',\n    },\n  ]);\n  return response;\n};\n\nconst renderData = async () => {\n  // Create markup\n  const books = await fetchData();\n  // console.log(booksArray);\n  // return booksArray;\n  console.log(books);\n  // eslint-disable-next-line array-callback-return\n  books.map((book) => {\n    console.log(book.title);\n    // return booksList();\n    const listItem = document.createElement('li');\n    listItem.textContent = book.title;\n    console.log(listEl);\n\n    // const item = `<li class=\"item\">${book.title}</li>`;\n    listEl.appendChild(listItem);\n\n  });\n};\n// const booksList = await booksArray.map((book) => {\n//   const bookItem = `<li class=\"listItem\">${book.title}</li>`;\n//   listItem.appendChild(bookItem);\n//   return booksList;\n// });\n// }\n\n// listEl.innerHTML = `<ul>${booksArray\n//   .map((wizard) => {\n//     return `<li>${wizard}</li>`;\n//   })\n//   .join('')}</ul>`;\n\n// renderData(fetchData());\n// };\n\nrenderData();\n\n\n//# sourceURL=webpack://07-ins_loader/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;