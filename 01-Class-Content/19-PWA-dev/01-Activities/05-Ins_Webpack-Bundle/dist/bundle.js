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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("const form = document.querySelector('.form');\nconst taskInput = document.querySelector('.task-input');\nconst todoList = document.querySelector('.todo-list');\n\nlet state = {\n  tasks: [],\n};\n\n// Render the template to the DOM\nconst render = (htmlString, el) => {\n  el.innerHTML += htmlString;\n};\n\n// Mark task as complete, set at global scope\nwindow.markComplete = id => {\n  const i = state.tasks.findIndex((item) => item.id === id);\n  if (i !== -1) {\n    state.tasks[i].complete = true;\n    todoList.className = 'todo-complete';\n    todoList.innerHTML = '';\n    state.tasks.map(el => render(template(el), todoList));\n  }\n};\n\n// Remove task set at global scope\nwindow.removeTask = (id) => {\n  const index = state.tasks.findIndex((item) => item.id === id);\n  state.tasks.splice(index, 1);\n  todoList.innerHTML = '';\n  state.tasks.map(el => render(template(el), todoList));\n};\n\n// Dynamic HTML template for new tasks\nconst template = task => `<div\n  class=\"todo-list-task ${task.complete && 'todo-list-task__done'}\"\n    id=\"${task.id}\" \n    onclick=\"markComplete(${task.id})\">\n    <p>${task.task}</p>\n    ${removeButton(task)}\n  </div>`;\n\n// Create + add remove button, set at global scope\nwindow.removeButton = task => {\n  if (task.complete) {\n    return `\n      <div>\n        <button\n          type=\"button\"\n          class=\"remove-button\" \n          onclick=\"removeTask(${task.id})\">\n          X\n        </button>\n    </div>`;\n  }\n  return '';\n};\n\n\n// Submit form\nform.addEventListener('submit', (e) => {\n  e.preventDefault()\n  const task = {\n    id: Date.now(),\n    task: taskInput.value,\n    complete: false,\n  };\n  state.tasks = [...state.tasks, task];\n  render(template(state.tasks[state.tasks.length - 1]), todoList);\n  taskInput.value = '';\n});\n\n\n\n\n\n//# sourceURL=webpack://03-ins_webpack/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;