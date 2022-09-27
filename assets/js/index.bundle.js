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

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/main.scss?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("const inputToDo = document.querySelector(\"#ToDoInput\");\r\nconst inputSubmit = document.querySelector(\".list__wrapper button\");\r\nconst nodeList = document.querySelector(\"#ToDo\");\r\nlet list = new Array();\r\n\r\nif (localStorage.length != 0) {\r\n  for (let index = 0; index < localStorage.length; index++) {\r\n    nodeList.insertAdjacentHTML(\"afterbegin\",`<li>${localStorage.getItem(index)}</li>`);\r\n    document.querySelector(\"#ToDo li span\").addEventListener(\"click\", removeTask);\r\n  }\r\n}\r\n\r\ninputSubmit.addEventListener(\"click\", addTask);\r\n\r\nconst config = {\r\n  childList: true,\r\n};\r\n\r\nconst callback = function (mutationsList, observer) {\r\n  document.querySelectorAll(\"#ToDo li span\").forEach((e) => {\r\n    e.addEventListener(\"click\", removeTask);\r\n  });\r\n};\r\n\r\nconst observer = new MutationObserver(callback);\r\n\r\nobserver.observe(nodeList, config);\r\n\r\nfunction addTask() {\r\n  nodeList.insertAdjacentHTML(\"afterbegin\", `<li>${inputToDo.value} <span>✖</span></li>`);\r\n  inputToDo.value = ''\r\n}\r\n\r\nfunction removeTask() {\r\n  var close = document.querySelectorAll(\"#ToDo li span\");\r\n  var i;\r\n  for (i = 0; i < close.length; i++) {\r\n    close[i].onclick = function () {\r\n      var div = this.parentElement;\r\n      div.remove();\r\n    };\r\n  }\r\n}\r\n\r\nwindow.onunload = function () {\r\n  localStorage.clear();\r\n  if (document.querySelectorAll(\"#ToDo li\").length != 0) {\r\n    document.querySelectorAll(\"#ToDo li\").forEach(e => {\r\n      list.push(e.innerHTML)\r\n    })\r\n  }\r\n  for (let index = 0; index < list.length; index++) {\r\n    localStorage.setItem(index, list[index]);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./js/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./style/main.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map