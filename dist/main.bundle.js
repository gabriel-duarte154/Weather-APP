/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/weatherApi.mjs":
/*!************************************!*\
  !*** ./src/modules/weatherApi.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormatUrl: () => (/* binding */ getFormatUrl),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
const weather_free_key = '642bc0610f0b4660af3133343231007';
const weather_api_url = `https://api.weatherapi.com/v1/forecast.json?key=${weather_free_key}&days=5&q=query_value`;

const regex = {
  spaceBeforeComma: /,\s/g,
  spaceAfterComma: /\s,/g,
  spaceBetweenWords: /\s/g,
}

function getFormatUrl(query) {
  return weather_api_url.replace('query_value', formatQuery(query));
}

function formatQuery(query) {
  return query
    .trim()
    .replaceAll(regex.spaceAfterComma, ',')
    .replaceAll(regex.spaceBeforeComma, ',')
    .replaceAll(regex.spaceBetweenWords, '%20');
}

async function getWeatherData(url) {
  const response = await fetch(url, { mode: 'cors' });
  return await getJsonData(response);
}

function getJsonData(data) {
  return data.json();
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherApi.mjs */ "./src/modules/weatherApi.mjs");


const button = document.querySelector('button');
button.addEventListener('click', search);

async function search() {
  const query = getInputValue();
  if (!query) return;
  const url = _modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__.getFormatUrl(query);
  const data = await _modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__.getWeatherData(url);
  console.log(data);
}

function getInputValue() {
  const input = document.querySelector('input');
  return input.value;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSwyRUFBMkUsaUJBQWlCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7Ozs7OztVQzlCeEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUVBQXVCO0FBQ3JDLHFCQUFxQixtRUFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJBcGkubWpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VhdGhlcl9mcmVlX2tleSA9ICc2NDJiYzA2MTBmMGI0NjYwYWYzMTMzMzQzMjMxMDA3JztcclxuY29uc3Qgd2VhdGhlcl9hcGlfdXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7d2VhdGhlcl9mcmVlX2tleX0mZGF5cz01JnE9cXVlcnlfdmFsdWVgO1xyXG5cclxuY29uc3QgcmVnZXggPSB7XHJcbiAgc3BhY2VCZWZvcmVDb21tYTogLyxcXHMvZyxcclxuICBzcGFjZUFmdGVyQ29tbWE6IC9cXHMsL2csXHJcbiAgc3BhY2VCZXR3ZWVuV29yZHM6IC9cXHMvZyxcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybWF0VXJsKHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHdlYXRoZXJfYXBpX3VybC5yZXBsYWNlKCdxdWVyeV92YWx1ZScsIGZvcm1hdFF1ZXJ5KHF1ZXJ5KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFF1ZXJ5KHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHF1ZXJ5XHJcbiAgICAudHJpbSgpXHJcbiAgICAucmVwbGFjZUFsbChyZWdleC5zcGFjZUFmdGVyQ29tbWEsICcsJylcclxuICAgIC5yZXBsYWNlQWxsKHJlZ2V4LnNwYWNlQmVmb3JlQ29tbWEsICcsJylcclxuICAgIC5yZXBsYWNlQWxsKHJlZ2V4LnNwYWNlQmV0d2VlbldvcmRzLCAnJTIwJyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHVybCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICByZXR1cm4gYXdhaXQgZ2V0SnNvbkRhdGEocmVzcG9uc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRKc29uRGF0YShkYXRhKSB7XHJcbiAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRGb3JtYXRVcmwsIGdldFdlYXRoZXJEYXRhIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgV2VhdGhlckFQaSBmcm9tICcuL21vZHVsZXMvd2VhdGhlckFwaS5tanMnO1xyXG5cclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2goKSB7XHJcbiAgY29uc3QgcXVlcnkgPSBnZXRJbnB1dFZhbHVlKCk7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuO1xyXG4gIGNvbnN0IHVybCA9IFdlYXRoZXJBUGkuZ2V0Rm9ybWF0VXJsKHF1ZXJ5KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgV2VhdGhlckFQaS5nZXRXZWF0aGVyRGF0YSh1cmwpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9