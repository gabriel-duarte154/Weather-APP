/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}

:root {
  --night-gradient: linear-gradient(to bottom, #001a29 60%, #03141f, #014569);
  --day-gradient: linear-gradient(to bottom, #0f7edf 60%, #0887d6, #41c4f8);
  --sunrise-gradient: linear-gradient(to bottom, #7ca1d1 60%, #ad9cc0, #e3aea8);
  --sunset-gradient: linear-gradient(to bottom, #2593a0 60%, #acc1c7, #ffb6a3);
  --bg-color: #ddd9d93d;
  --focus: #ffffff3a;
  --shadow: 1px 2px 5px rgba(0, 0, 0, 0.315);
}

body {
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-image: var(--day-gradient);
}

.nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  margin-bottom: .5rem;
  width: 1500px;
  max-width: 100%;
  margin-inline: auto;
}

.search_container {
  display: flex;
  position: relative;
  background-color: var(--bg-color);
  border: 1px solid #ffffff85;
  border-radius: 0.5rem;
  min-height: 32px;
  box-shadow: var(--shadow);
  flex: 0 1 500px;
}

.search_container i {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  background-color: transparent;
  border: none;
  color: white;
  padding-left: 0.5rem;
  font-size: 0.9rem;
  width: 100%;
}

input:focus {
  outline: none;
  background-color: var(--focus);
}

input::placeholder {
  font-weight: 300;
}

.toggle-unit {
  border: 1px solid #ddd9d93d;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  font-weight: 600;
  background-color: var(--bg-color);
  font-size: 1rem;
  transition: opacity 0.5s;
  min-height: 32px;
  box-shadow: var(--shadow);
}

.toggle-unit:hover {
  opacity: 0.7;
}

svg {
  width: 30px;
  height: 30px;
}

.error {
  position: absolute;
  bottom: -32px;
  color: white;
  border-radius: 0.2rem;
  background-color: #53515157;
}

.active {
  padding: 0.2rem 0.5rem;
}

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 1rem;
}

.hidden {
  display: none !important;
}

.section {
  margin-inline: auto;
  width: 1500px;
  max-width: 100%;
  color: white;
}

.first_section {
  display: flex;
  width: 1000px;
  flex: 0.5;
  padding-top: 1rem;
}

.current {
  flex: 1;
  margin-bottom: 5rem;
}

.section .weather_info_city {
  font-size: 2rem;
  font-weight: 500;
  color: white;
}

.section .weather_info_country {
  margin-bottom: 1rem;
}

.section .weather_info_temperature {
  position: relative;
}

.section .weather_info_temperature #temp {
  font-size: 5rem;
}

.section .weather_info_temperature .symbol_container,
.section .weather_info_temperature sup {
  position: absolute;
  top: 0;
  margin-left: 0.2rem;
  font-size: 2rem;
}

.section .weather_info_status {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.section .weather_info_status .max {
  margin-right: .1rem;
}

.second_section {
  display: flex;
  align-items: center;
  flex: 1.5;
  margin-bottom: 1rem;
}

.more_information {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  flex: 1;
  flex-basis: 300px;
  margin-bottom: 2rem;
}

.wind_info,
.sun_info,
.infos {
  border-radius: 0.5rem;
  background-color: var(--bg-color);
  box-shadow: var(--shadow);
  padding: 1rem;
}

.wind_info,
.sun_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.wind_info div span,
.sun_info div span {
  margin-left: 0.5rem;
}

.left_info div {
  color: #ffffffbb;
  margin-bottom: .5rem;
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row: span 2;
}

.info_item {
  display: flex;
  align-items: center;
  height: fit-content;
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  padding-bottom: 0.5rem;
}

.info_item + .info_item {
  margin-top: 1rem;
}

.info_item .item_name {
  flex: 1;
  color: #ffffffbb;
}

.forecast {
  flex: 1;
  display: flex;
  gap: 1rem;
}

.forecast .card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  background-color: var(--bg-color);
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  box-shadow: var(--shadow);
}

.forecast .card .day {
  margin-left: .5rem;
  font-size: 1.1rem;
  flex: 1;
}

.forecast .card .max_min {
  display: flex;
  align-items: center;
  justify-content: center;
}

.forecast .card img {
  height: 40px;
  width: 40px;
  margin: -10px -10px -15px -10px;
}

.animation {
  display: flex;
  align-items: center;
  gap: .5rem;
  background-color: var(--bg-color);
  padding: .2rem;
  border-radius: .5rem;
  color: white;
  margin-inline: auto;
  margin-bottom: .5rem;
}

.loading {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border-left: 2px solid #ffffff;
  border-top: 2px solid #fff;
  animation: spin .8s infinite linear;
}


@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


@media screen and (max-width: 1000px) {
  .forecast {
    flex-direction: column;
  }
}

@media screen and (max-width: 830px) {
  * {
    font-size: 15px;
  }

  .first_section {
    flex-direction: column;
  }

  .current {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .more_information {
    grid-template-columns: minmax(1fr, max-content) 1fr;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n:root {\r\n  --night-gradient: linear-gradient(to bottom, #001a29 60%, #03141f, #014569);\r\n  --day-gradient: linear-gradient(to bottom, #0f7edf 60%, #0887d6, #41c4f8);\r\n  --sunrise-gradient: linear-gradient(to bottom, #7ca1d1 60%, #ad9cc0, #e3aea8);\r\n  --sunset-gradient: linear-gradient(to bottom, #2593a0 60%, #acc1c7, #ffb6a3);\r\n  --bg-color: #ddd9d93d;\r\n  --focus: #ffffff3a;\r\n  --shadow: 1px 2px 5px rgba(0, 0, 0, 0.315);\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  background-image: var(--day-gradient);\r\n}\r\n\r\n.nav {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  gap: 0.5rem;\r\n  margin-bottom: .5rem;\r\n  width: 1500px;\r\n  max-width: 100%;\r\n  margin-inline: auto;\r\n}\r\n\r\n.search_container {\r\n  display: flex;\r\n  position: relative;\r\n  background-color: var(--bg-color);\r\n  border: 1px solid #ffffff85;\r\n  border-radius: 0.5rem;\r\n  min-height: 32px;\r\n  box-shadow: var(--shadow);\r\n  flex: 0 1 500px;\r\n}\r\n\r\n.search_container i {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ninput {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: white;\r\n  padding-left: 0.5rem;\r\n  font-size: 0.9rem;\r\n  width: 100%;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n  background-color: var(--focus);\r\n}\r\n\r\ninput::placeholder {\r\n  font-weight: 300;\r\n}\r\n\r\n.toggle-unit {\r\n  border: 1px solid #ddd9d93d;\r\n  padding: 0.3rem 0.5rem;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: 600;\r\n  background-color: var(--bg-color);\r\n  font-size: 1rem;\r\n  transition: opacity 0.5s;\r\n  min-height: 32px;\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n.toggle-unit:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nsvg {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.error {\r\n  position: absolute;\r\n  bottom: -32px;\r\n  color: white;\r\n  border-radius: 0.2rem;\r\n  background-color: #53515157;\r\n}\r\n\r\n.active {\r\n  padding: 0.2rem 0.5rem;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.section {\r\n  margin-inline: auto;\r\n  width: 1500px;\r\n  max-width: 100%;\r\n  color: white;\r\n}\r\n\r\n.first_section {\r\n  display: flex;\r\n  width: 1000px;\r\n  flex: 0.5;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.current {\r\n  flex: 1;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.section .weather_info_city {\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.section .weather_info_country {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.section .weather_info_temperature {\r\n  position: relative;\r\n}\r\n\r\n.section .weather_info_temperature #temp {\r\n  font-size: 5rem;\r\n}\r\n\r\n.section .weather_info_temperature .symbol_container,\r\n.section .weather_info_temperature sup {\r\n  position: absolute;\r\n  top: 0;\r\n  margin-left: 0.2rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.section .weather_info_status {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.section .weather_info_status .max {\r\n  margin-right: .1rem;\r\n}\r\n\r\n.second_section {\r\n  display: flex;\r\n  align-items: center;\r\n  flex: 1.5;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.more_information {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  gap: 0.5rem;\r\n  flex: 1;\r\n  flex-basis: 300px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.wind_info,\r\n.sun_info,\r\n.infos {\r\n  border-radius: 0.5rem;\r\n  background-color: var(--bg-color);\r\n  box-shadow: var(--shadow);\r\n  padding: 1rem;\r\n}\r\n\r\n.wind_info,\r\n.sun_info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.wind_info div span,\r\n.sun_info div span {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.left_info div {\r\n  color: #ffffffbb;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.infos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  grid-row: span 2;\r\n}\r\n\r\n.info_item {\r\n  display: flex;\r\n  align-items: center;\r\n  height: fit-content;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.24);\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.info_item + .info_item {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.info_item .item_name {\r\n  flex: 1;\r\n  color: #ffffffbb;\r\n}\r\n\r\n.forecast {\r\n  flex: 1;\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.forecast .card {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  flex: 1;\r\n  background-color: var(--bg-color);\r\n  border-radius: 0.5rem;\r\n  padding: 1rem 0.5rem;\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n.forecast .card .day {\r\n  margin-left: .5rem;\r\n  font-size: 1.1rem;\r\n  flex: 1;\r\n}\r\n\r\n.forecast .card .max_min {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.forecast .card img {\r\n  height: 40px;\r\n  width: 40px;\r\n  margin: -10px -10px -15px -10px;\r\n}\r\n\r\n.animation {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: .5rem;\r\n  background-color: var(--bg-color);\r\n  padding: .2rem;\r\n  border-radius: .5rem;\r\n  color: white;\r\n  margin-inline: auto;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.loading {\r\n  height: 30px;\r\n  width: 30px;\r\n  border-radius: 50%;\r\n  border-left: 2px solid #ffffff;\r\n  border-top: 2px solid #fff;\r\n  animation: spin .8s infinite linear;\r\n}\r\n\r\n\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .forecast {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 830px) {\r\n  * {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .first_section {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .current {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n\r\n  .more_information {\r\n    grid-template-columns: minmax(1fr, max-content) 1fr;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/weatherApi.mjs":
/*!************************************!*\
  !*** ./src/modules/weatherApi.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData),
/* harmony export */   getNecessaryData: () => (/* binding */ getNecessaryData)
/* harmony export */ });
const weather_free_key = '642bc0610f0b4660af3133343231007';
const weather_api_url = `https://api.weatherapi.com/v1/forecast.json?key=${weather_free_key}&days=3&q=query_value`;

const wind_direction = {
  N: 'North',
  E: 'East',
  S: 'South',
  W: 'West',
  NE: 'NorthEast',
  NW: 'NorthWest',
  SE: 'SouthEast',
  SW: 'SouthWest',
  NNW: 'North-West',
  NNE: 'Noth-East',
  WNW: 'West-NorthWest',
  WSW: 'West-SouthWest',
  SSW: 'South-SouthEast',
  ENE: 'East-NorthEast',
  ESE: 'East-SouthEast',
  SSE: 'South-SouthEast',
};

function getWindDirection(wd) {
  return wind_direction[wd];
}

const regex = {
  spaceBeforeComma: /,\s/g,
  spaceAfterComma: /\s,/g,
  spaceBetweenWords: /\s/g,
};

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

async function fetchWeatherData(query) {
  const data = await fetch(getFormatUrl(query), { mode: 'cors' });
  return await getJsonData(data);
}

function getNecessaryData(data) {
  return {
    location: {
      country: data.location.country,
      name: data.location.name,
      localtime: data.location.localtime,
    },
    current: {
      condition: {
        text: data.current.condition.text,
        code: data.current.condition.code,
      },
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      humidity: data.current.humidity,
      uv: data.current.uv,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      pressure_mb: data.current.pressure_mb,
      wind_dir: getWindDirection(data.current.wind_dir),
      wind_kph: data.current.wind_kph,
      is_day: data.current.is_day,
      sunset: data.forecast.forecastday[0].astro.sunset,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      moon_phase: data.forecast.forecastday[0].astro.moon_phase,
      daily_chance_of_rain:
        data.forecast.forecastday[0].day.daily_chance_of_rain,
    },
    forecast: {
      forecastday: [
        {
          condition: {
            code: data.forecast.forecastday[0].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[0].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[0].day.mintemp_f,
          date: data.forecast.forecastday[0].date,
        },
        {
          condition: {
            code: data.forecast.forecastday[1].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[1].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[1].day.mintemp_f,
          date: data.forecast.forecastday[1].date,
        },
        {
          condition: {
            code: data.forecast.forecastday[2].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[2].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[2].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[2].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[2].day.mintemp_f,
          date: data.forecast.forecastday[2].date,
        },
      ],
    },
  };
}

function getJsonData(data) {
  return data.json();
}




/***/ }),

/***/ "./src/weather/weather.json":
/*!**********************************!*\
  !*** ./src/weather/weather.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"code":1000,"day":"Sunny","night":"Clear","icon":113},{"code":1003,"day":"Partly cloudy","night":"Partly cloudy","icon":116},{"code":1006,"day":"Cloudy","night":"Cloudy","icon":119},{"code":1009,"day":"Overcast","night":"Overcast","icon":122},{"code":1030,"day":"Mist","night":"Mist","icon":143},{"code":1063,"day":"Patchy rain possible","night":"Patchy rain possible","icon":176},{"code":1066,"day":"Patchy snow possible","night":"Patchy snow possible","icon":179},{"code":1069,"day":"Patchy sleet possible","night":"Patchy sleet possible","icon":182},{"code":1072,"day":"Patchy freezing drizzle possible","night":"Patchy freezing drizzle possible","icon":185},{"code":1087,"day":"Thundery outbreaks possible","night":"Thundery outbreaks possible","icon":200},{"code":1114,"day":"Blowing snow","night":"Blowing snow","icon":227},{"code":1117,"day":"Blizzard","night":"Blizzard","icon":230},{"code":1135,"day":"Fog","night":"Fog","icon":248},{"code":1147,"day":"Freezing fog","night":"Freezing fog","icon":260},{"code":1150,"day":"Patchy light drizzle","night":"Patchy light drizzle","icon":263},{"code":1153,"day":"Light drizzle","night":"Light drizzle","icon":266},{"code":1168,"day":"Freezing drizzle","night":"Freezing drizzle","icon":281},{"code":1171,"day":"Heavy freezing drizzle","night":"Heavy freezing drizzle","icon":284},{"code":1180,"day":"Patchy light rain","night":"Patchy light rain","icon":293},{"code":1183,"day":"Light rain","night":"Light rain","icon":296},{"code":1186,"day":"Moderate rain at times","night":"Moderate rain at times","icon":299},{"code":1189,"day":"Moderate rain","night":"Moderate rain","icon":302},{"code":1192,"day":"Heavy rain at times","night":"Heavy rain at times","icon":305},{"code":1195,"day":"Heavy rain","night":"Heavy rain","icon":308},{"code":1198,"day":"Light freezing rain","night":"Light freezing rain","icon":311},{"code":1201,"day":"Moderate or heavy freezing rain","night":"Moderate or heavy freezing rain","icon":314},{"code":1204,"day":"Light sleet","night":"Light sleet","icon":317},{"code":1207,"day":"Moderate or heavy sleet","night":"Moderate or heavy sleet","icon":320},{"code":1210,"day":"Patchy light snow","night":"Patchy light snow","icon":323},{"code":1213,"day":"Light snow","night":"Light snow","icon":326},{"code":1216,"day":"Patchy moderate snow","night":"Patchy moderate snow","icon":329},{"code":1219,"day":"Moderate snow","night":"Moderate snow","icon":332},{"code":1222,"day":"Patchy heavy snow","night":"Patchy heavy snow","icon":335},{"code":1225,"day":"Heavy snow","night":"Heavy snow","icon":338},{"code":1237,"day":"Ice pellets","night":"Ice pellets","icon":350},{"code":1240,"day":"Light rain shower","night":"Light rain shower","icon":353},{"code":1243,"day":"Moderate or heavy rain shower","night":"Moderate or heavy rain shower","icon":356},{"code":1246,"day":"Torrential rain shower","night":"Torrential rain shower","icon":359},{"code":1249,"day":"Light sleet showers","night":"Light sleet showers","icon":362},{"code":1252,"day":"Moderate or heavy sleet showers","night":"Moderate or heavy sleet showers","icon":365},{"code":1255,"day":"Light snow showers","night":"Light snow showers","icon":368},{"code":1258,"day":"Moderate or heavy snow showers","night":"Moderate or heavy snow showers","icon":371},{"code":1261,"day":"Light showers of ice pellets","night":"Light showers of ice pellets","icon":374},{"code":1264,"day":"Moderate or heavy showers of ice pellets","night":"Moderate or heavy showers of ice pellets","icon":377},{"code":1273,"day":"Patchy light rain with thunder","night":"Patchy light rain with thunder","icon":386},{"code":1276,"day":"Moderate or heavy rain with thunder","night":"Moderate or heavy rain with thunder","icon":389},{"code":1279,"day":"Patchy light snow with thunder","night":"Patchy light snow with thunder","icon":392},{"code":1282,"day":"Moderate or heavy snow with thunder","night":"Moderate or heavy snow with thunder","icon":395}]');

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _weather_weather_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather/weather.json */ "./src/weather/weather.json");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const input = document.querySelector('input');
let current_unit = 'c';
let current_data;

async function search(query) {
  if (!query) return;
  sartLoadAnimation();
  await _modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData(query).then((data) => {
    if (data.hasOwnProperty('error')) {
      handleError(data);
      return;
    }
    console.log(data);
    setData(_modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__.getNecessaryData(data));
    init();
  });
  finishedLoadAnimation();
}

function init() {
  generatePage();
  setTheme();
  addCovertEvent();
  showPage();
  convertCurrentUnits();
  convertForecastUnits();
}

function handleError(errorObj) {
  const span = document.querySelector('.error');
  span.classList.add('active');
  span.textContent = errorObj.error.message;
}

function sartLoadAnimation() {
  const animation = document.querySelector('.animation');
  animation.classList.remove('hidden');
}

function finishedLoadAnimation() {
  const animation = document.querySelector('.animation');
  animation.classList.add('hidden');
}

function setData(data) {
  current_data = data;
}

function getInputValue() {
  return input.value;
}

function generatePage() {
  fillCurrentSection();
  fillMoreInformationSection();
  fillForecastSection();
}

function fillCurrentSection() {
  const currentSection = document.querySelector('.current');
  currentSection.innerHTML = '';

  const weather_info_city = getCityElement();
  const weather_info_country = getCountryElement();
  const weather_info_temperature = getTemperatureElement();
  const weather_info_status = getStatusElement();
  const time = getTimeElement();

  currentSection.appendChild(weather_info_city);
  currentSection.appendChild(weather_info_country);
  currentSection.appendChild(weather_info_temperature);
  currentSection.appendChild(weather_info_status);
  currentSection.appendChild(time);
}

function getCityElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_city');
  element.textContent = current_data.location.name;
  return element;
}

function getCountryElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_country');
  element.textContent = current_data.location.country;
  return element;
}

function getTemperatureElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_temperature');

  const temp = document.createElement('span');
  temp.classList.add('current_unit');
  temp.id = 'temp';
  temp.textContent = roundNumber(current_data.current.temp_c);

  const span = document.createElement('span');
  const sup = document.createElement('sup');
  span.classList.add('symbol_container');
  sup.id = 'unit_symbol';

  span.textContent = 'º';
  sup.textContent = current_unit.toUpperCase();

  span.appendChild(sup);
  element.appendChild(temp);
  element.appendChild(span);

  return element;
}

function getStatusElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_status');

  const condition = document.createElement('span');
  condition.classList.add('condition');
  condition.textContent = current_data.current.condition.text;

  const div = document.createElement('div');

  const max = document.createElement('span');
  max.classList.add('max');
  max.id = 'maxtemp';
  max.textContent = `${roundNumber(
    current_data.forecast.forecastday[0].maxtemp_c
  )}º`;

  const slash = document.createElement('span');
  slash.textContent = '/';

  const min = document.createElement('span');
  min.classList.add('min');
  min.id = 'mintemp';
  min.textContent = `${roundNumber(
    current_data.forecast.forecastday[0].mintemp_c
  )}º`;

  div.appendChild(max);
  div.appendChild(slash);
  div.appendChild(min);
  element.appendChild(condition);
  element.appendChild(div);

  return element;
}

function getTimeElement() {
  const element = document.createElement('span');
  element.id = 'time';
  element.textContent = getHours();

  return element;
}

function getHours() {
  const time = current_data.location.localtime.split(' ');
  const hours_minutes = time[1].split(':');
  return formatTime(hours_minutes[0]) + ':' + hours_minutes[1];
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function roundNumber(value) {
  return Math.floor(value);
}

function fillMoreInformationSection() {
  const containers = document.querySelectorAll('.more_information span');

  containers.forEach((container) => {
    if (container.id === 'feelslike') {
      container.textContent = roundNumber(
        current_data.current[`${container.id}_${current_unit}`]
      );
      return;
    }
    container.textContent = current_data.current[container.id];
  });
}

function fillForecastSection() {
  const forecastSection = document.querySelector('.forecast');
  forecastSection.innerHTML = '';

  current_data.forecast.forecastday.forEach((forecast) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const icon = document.createElement('i');
    const img = document.createElement('img');
    img.src = getIconUrl(forecast.condition.code);
    icon.appendChild(img);

    const dayElement = document.createElement('span');
    dayElement.classList.add('day');
    dayElement.textContent = getDay(forecast.date);

    const temp_container = document.createElement('div');
    temp_container.classList.add('max_min');

    const max = document.createElement('div');
    max.classList.add('max');
    max.textContent = roundNumber(forecast[`maxtemp_${current_unit}`]) + 'º';

    const slash = document.createElement('span');
    slash.textContent = '/';

    const min = document.createElement('span');
    min.classList.add('min');
    min.textContent = roundNumber(forecast[`mintemp_${current_unit}`]) + 'º';

    temp_container.appendChild(max);
    temp_container.appendChild(slash);
    temp_container.appendChild(min);

    card.appendChild(icon);
    card.appendChild(dayElement);
    card.appendChild(temp_container);

    forecastSection.appendChild(card);
  });
}

function addCovertEvent() {
  const button = document.querySelector('.toggle-unit');
  button.addEventListener('click', convertUnits);
}

function convertUnits() {
  toggleCurrentUnit();
  toggleButton();
  convertCurrentUnits();
  convertForecastUnits();
}

function toggleButton() {
  const button = document.querySelector('.toggle-unit');
  button.textContent = `º${current_unit.toUpperCase()}`;
}

function toggleCurrentUnit() {
  if (current_unit === 'c') {
    current_unit = 'f';
    return;
  }
  current_unit = 'c';
}

function convertCurrentUnits() {
  const elements = document.querySelectorAll('.current_unit');
  const symbol = document.querySelector('#unit_symbol');
  symbol.textContent = current_unit.toUpperCase();
  elements.forEach((element) => {
    element.textContent = roundNumber(
      current_data.current[`${element.id}_${current_unit}`]
    );
  });
}

function convertForecastUnits() {
  const max_temp = document.querySelector('.max');
  const min_temp = document.querySelector('.min');

  max_temp.textContent =
    roundNumber(
      current_data.forecast.forecastday[0][`${max_temp.id}_${current_unit}`]
    ) + 'º';

  min_temp.textContent =
    roundNumber(
      current_data.forecast.forecastday[0][`${min_temp.id}_${current_unit}`]
    ) + 'º';

  fillForecastSection();
}

function showPage() {
  const main = document.querySelector('.main');
  main.classList.remove('hidden');
}

function getIconUrl(code) {
  const iconObj = _weather_weather_json__WEBPACK_IMPORTED_MODULE_1__.find((icon) => icon.code === code);
  const url = `icons/day/${iconObj.icon}.png`;
  return url;
}

function getDay(date) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const today = new Date();
  const forecastDate = new Date(...formatDate(date));

  if (forecastDate.getDay() === today.getDay()) {
    return 'Today';
  }
  return weekday[forecastDate.getDay()];
}

function formatDate(date) {
  const splitData = date.split('-');
  splitData[1] = splitData[1] - 1;
  return splitData;
}

function setTheme() {
  const body = document.body;
  const hours = Number(getHours().split(':').shift());
  if (hours >= 6 && hours < 8) {
    body.style.backgroundImage = 'var(--sunrise-gradient)';
  }
  if (hours >= 8 && hours < 17) {
    body.style.backgroundImage = 'var(--day-gradient)';
  }
  if (hours >= 17 && hours < 19) {
    body.style.backgroundImage = 'var(--sunset-gradient)';
  }
  if (hours >= 19 || hours < 6) {
    body.style.backgroundImage = 'var(--night-gradient)';
  }
}

input.addEventListener('input', removeErrorMsg);
input.addEventListener('focus', addEnterEvent);
input.addEventListener('blur', removeEnterEvent);

function addEnterEvent() {
  window.addEventListener('keydown', captureEnter);
}

function removeEnterEvent() {
  window.removeEventListener('keydown', captureEnter);
}

function removeErrorMsg() {
  const span = document.querySelector('input + span');
  span.classList.remove('active');
  span.textContent = '';
}

function captureEnter(e) {
  if (e.key === 'Enter') {
    search(getInputValue());
  }
}

search('london');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixtSEFBbUgsSUFBSSxrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSwyRUFBMkUsaUJBQWlCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEg5QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtV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O0FBQ0EsOENBQThDLFlBQVksR0FBRyxhQUFhO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVksR0FBRyxhQUFhO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQVk7QUFDOUIsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckFwaS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1uaWdodC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMWEyOSA2MCUsICMwMzE0MWYsICMwMTQ1NjkpO1xyXG4gIC0tZGF5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMGY3ZWRmIDYwJSwgIzA4ODdkNiwgIzQxYzRmOCk7XHJcbiAgLS1zdW5yaXNlLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjN2NhMWQxIDYwJSwgI2FkOWNjMCwgI2UzYWVhOCk7XHJcbiAgLS1zdW5zZXQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyNTkzYTAgNjAlLCAjYWNjMWM3LCAjZmZiNmEzKTtcclxuICAtLWJnLWNvbG9yOiAjZGRkOWQ5M2Q7XHJcbiAgLS1mb2N1czogI2ZmZmZmZjNhO1xyXG4gIC0tc2hhZG93OiAxcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzE1KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZGF5LWdyYWRpZW50KTtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICB3aWR0aDogMTUwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY4NTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWluLWhlaWdodDogMzJweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG4gIGZsZXg6IDAgMSA1MDBweDtcclxufVxyXG5cclxuLnNlYXJjaF9jb250YWluZXIgaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9jdXMpO1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi50b2dnbGUtdW5pdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDlkOTNkO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcclxuICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XHJcbn1cclxuXHJcbi50b2dnbGUtdW5pdDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG5zdmcge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMzJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzUxNTE1NztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICB3aWR0aDogMTUwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5maXJzdF9zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgZmxleDogMC41O1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY3VycmVudCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX2NpdHkge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb19jb3VudHJ5IHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3RlbXBlcmF0dXJlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUgI3RlbXAge1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSAuc3ltYm9sX2NvbnRhaW5lcixcclxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSBzdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb19zdGF0dXMgLm1heCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuMXJlbTtcclxufVxyXG5cclxuLnNlY29uZF9zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMS41O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5tb3JlX2luZm9ybWF0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtYmFzaXM6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi53aW5kX2luZm8sXHJcbi5zdW5faW5mbyxcclxuLmluZm9zIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLndpbmRfaW5mbyxcclxuLnN1bl9pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ud2luZF9pbmZvIGRpdiBzcGFuLFxyXG4uc3VuX2luZm8gZGl2IHNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5sZWZ0X2luZm8gZGl2IHtcclxuICBjb2xvcjogI2ZmZmZmZmJiO1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4uaW5mb3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBncmlkLXJvdzogc3BhbiAyO1xyXG59XHJcblxyXG4uaW5mb19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uaW5mb19pdGVtICsgLmluZm9faXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmluZm9faXRlbSAuaXRlbV9uYW1lIHtcclxuICBmbGV4OiAxO1xyXG4gIGNvbG9yOiAjZmZmZmZmYmI7XHJcbn1cclxuXHJcbi5mb3JlY2FzdCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmZvcmVjYXN0IC5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XHJcbn1cclxuXHJcbi5mb3JlY2FzdCAuY2FyZCAuZGF5IHtcclxuICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcmVjYXN0IC5jYXJkIC5tYXhfbWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JlY2FzdCAuY2FyZCBpbWcge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBtYXJnaW46IC0xMHB4IC0xMHB4IC0xNXB4IC0xMHB4O1xyXG59XHJcblxyXG4uYW5pbWF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgcGFkZGluZzogLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZjtcclxuICBhbmltYXRpb246IHNwaW4gLjhzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuZm9yZWNhc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgKiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuZmlyc3Rfc2VjdGlvbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubW9yZV9pbmZvcm1hdGlvbiB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxZnIsIG1heC1jb250ZW50KSAxZnI7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyRUFBMkU7RUFDM0UseUVBQXlFO0VBQ3pFLDZFQUE2RTtFQUM3RSw0RUFBNEU7RUFDNUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VB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QUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixtQ0FBbUM7QUFDckM7OztBQUdBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7O0FBR0E7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1EQUFtRDtFQUNyRDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbmlnaHQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDFhMjkgNjAlLCAjMDMxNDFmLCAjMDE0NTY5KTtcXHJcXG4gIC0tZGF5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMGY3ZWRmIDYwJSwgIzA4ODdkNiwgIzQxYzRmOCk7XFxyXFxuICAtLXN1bnJpc2UtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3Y2ExZDEgNjAlLCAjYWQ5Y2MwLCAjZTNhZWE4KTtcXHJcXG4gIC0tc3Vuc2V0LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjU5M2EwIDYwJSwgI2FjYzFjNywgI2ZmYjZhMyk7XFxyXFxuICAtLWJnLWNvbG9yOiAjZGRkOWQ5M2Q7XFxyXFxuICAtLWZvY3VzOiAjZmZmZmZmM2E7XFxyXFxuICAtLXNoYWRvdzogMXB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMxNSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1kYXktZ3JhZGllbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxuICB3aWR0aDogMTUwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY4NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgZmxleDogMCAxIDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoX2NvbnRhaW5lciBpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9jdXMpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS11bml0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ5ZDkzZDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcclxcbiAgbWluLWhlaWdodDogMzJweDtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtdW5pdDpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbnN2ZyB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTMycHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1MTUxNTc7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIHdpZHRoOiAxNTAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5maXJzdF9zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwMHB4O1xcclxcbiAgZmxleDogMC41O1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX2NpdHkge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb19jb3VudHJ5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3RlbXBlcmF0dXJlICN0ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSAuc3ltYm9sX2NvbnRhaW5lcixcXHJcXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3RlbXBlcmF0dXJlIHN1cCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3N0YXR1cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fc3RhdHVzIC5tYXgge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZF9zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleDogMS41O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmVfaW5mb3JtYXRpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZsZXgtYmFzaXM6IDMwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRfaW5mbyxcXHJcXG4uc3VuX2luZm8sXFxyXFxuLmluZm9zIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZF9pbmZvLFxcclxcbi5zdW5faW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZF9pbmZvIGRpdiBzcGFuLFxcclxcbi5zdW5faW5mbyBkaXYgc3BhbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdF9pbmZvIGRpdiB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZmJiO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9faXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvX2l0ZW0gKyAuaW5mb19pdGVtIHtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvX2l0ZW0gLml0ZW1fbmFtZSB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgY29sb3I6ICNmZmZmZmZiYjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QgLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdCAuY2FyZCAuZGF5IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0IC5jYXJkIC5tYXhfbWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdCAuY2FyZCBpbWcge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBtYXJnaW46IC0xMHB4IC0xMHB4IC0xNXB4IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5pbWF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IC4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBhbmltYXRpb246IHNwaW4gLjhzIGluZmluaXRlIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAuZm9yZWNhc3Qge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzBweCkge1xcclxcbiAgKiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maXJzdF9zZWN0aW9uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXJyZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3JlX2luZm9ybWF0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMWZyLCBtYXgtY29udGVudCkgMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgd2VhdGhlcl9mcmVlX2tleSA9ICc2NDJiYzA2MTBmMGI0NjYwYWYzMTMzMzQzMjMxMDA3JztcclxuY29uc3Qgd2VhdGhlcl9hcGlfdXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7d2VhdGhlcl9mcmVlX2tleX0mZGF5cz0zJnE9cXVlcnlfdmFsdWVgO1xyXG5cclxuY29uc3Qgd2luZF9kaXJlY3Rpb24gPSB7XHJcbiAgTjogJ05vcnRoJyxcclxuICBFOiAnRWFzdCcsXHJcbiAgUzogJ1NvdXRoJyxcclxuICBXOiAnV2VzdCcsXHJcbiAgTkU6ICdOb3J0aEVhc3QnLFxyXG4gIE5XOiAnTm9ydGhXZXN0JyxcclxuICBTRTogJ1NvdXRoRWFzdCcsXHJcbiAgU1c6ICdTb3V0aFdlc3QnLFxyXG4gIE5OVzogJ05vcnRoLVdlc3QnLFxyXG4gIE5ORTogJ05vdGgtRWFzdCcsXHJcbiAgV05XOiAnV2VzdC1Ob3J0aFdlc3QnLFxyXG4gIFdTVzogJ1dlc3QtU291dGhXZXN0JyxcclxuICBTU1c6ICdTb3V0aC1Tb3V0aEVhc3QnLFxyXG4gIEVORTogJ0Vhc3QtTm9ydGhFYXN0JyxcclxuICBFU0U6ICdFYXN0LVNvdXRoRWFzdCcsXHJcbiAgU1NFOiAnU291dGgtU291dGhFYXN0JyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFdpbmREaXJlY3Rpb24od2QpIHtcclxuICByZXR1cm4gd2luZF9kaXJlY3Rpb25bd2RdO1xyXG59XHJcblxyXG5jb25zdCByZWdleCA9IHtcclxuICBzcGFjZUJlZm9yZUNvbW1hOiAvLFxccy9nLFxyXG4gIHNwYWNlQWZ0ZXJDb21tYTogL1xccywvZyxcclxuICBzcGFjZUJldHdlZW5Xb3JkczogL1xccy9nLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybWF0VXJsKHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHdlYXRoZXJfYXBpX3VybC5yZXBsYWNlKCdxdWVyeV92YWx1ZScsIGZvcm1hdFF1ZXJ5KHF1ZXJ5KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFF1ZXJ5KHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHF1ZXJ5XHJcbiAgICAudHJpbSgpXHJcbiAgICAucmVwbGFjZUFsbChyZWdleC5zcGFjZUFmdGVyQ29tbWEsICcsJylcclxuICAgIC5yZXBsYWNlQWxsKHJlZ2V4LnNwYWNlQmVmb3JlQ29tbWEsICcsJylcclxuICAgIC5yZXBsYWNlQWxsKHJlZ2V4LnNwYWNlQmV0d2VlbldvcmRzLCAnJTIwJyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEocXVlcnkpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goZ2V0Rm9ybWF0VXJsKHF1ZXJ5KSwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgcmV0dXJuIGF3YWl0IGdldEpzb25EYXRhKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZWNlc3NhcnlEYXRhKGRhdGEpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxyXG4gICAgICBuYW1lOiBkYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICAgIGxvY2FsdGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICB9LFxyXG4gICAgY3VycmVudDoge1xyXG4gICAgICBjb25kaXRpb246IHtcclxuICAgICAgICB0ZXh0OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgY29kZTogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICB9LFxyXG4gICAgICBmZWVsc2xpa2VfYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxyXG4gICAgICBmZWVsc2xpa2VfZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxyXG4gICAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgICB1djogZGF0YS5jdXJyZW50LnV2LFxyXG4gICAgICB0ZW1wX2M6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgIHRlbXBfZjogZGF0YS5jdXJyZW50LnRlbXBfZixcclxuICAgICAgcHJlc3N1cmVfbWI6IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYixcclxuICAgICAgd2luZF9kaXI6IGdldFdpbmREaXJlY3Rpb24oZGF0YS5jdXJyZW50LndpbmRfZGlyKSxcclxuICAgICAgd2luZF9rcGg6IGRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgICAgaXNfZGF5OiBkYXRhLmN1cnJlbnQuaXNfZGF5LFxyXG4gICAgICBzdW5zZXQ6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0LFxyXG4gICAgICBzdW5yaXNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2UsXHJcbiAgICAgIG1vb25fcGhhc2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZSxcclxuICAgICAgZGFpbHlfY2hhbmNlX29mX3JhaW46XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICB9LFxyXG4gICAgZm9yZWNhc3Q6IHtcclxuICAgICAgZm9yZWNhc3RkYXk6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SnNvbkRhdGEoZGF0YSkge1xyXG4gIHJldHVybiBkYXRhLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmV0Y2hXZWF0aGVyRGF0YSwgZ2V0TmVjZXNzYXJ5RGF0YSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBXZWF0aGVyQVBpIGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyQXBpLm1qcyc7XHJcbmltcG9ydCB3ZWF0aGVySWNvbnMgZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXIuanNvbic7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmxldCBjdXJyZW50X3VuaXQgPSAnYyc7XHJcbmxldCBjdXJyZW50X2RhdGE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2gocXVlcnkpIHtcclxuICBpZiAoIXF1ZXJ5KSByZXR1cm47XHJcbiAgc2FydExvYWRBbmltYXRpb24oKTtcclxuICBhd2FpdCBXZWF0aGVyQVBpLmZldGNoV2VhdGhlckRhdGEocXVlcnkpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XHJcbiAgICAgIGhhbmRsZUVycm9yKGRhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHNldERhdGEoV2VhdGhlckFQaS5nZXROZWNlc3NhcnlEYXRhKGRhdGEpKTtcclxuICAgIGluaXQoKTtcclxuICB9KTtcclxuICBmaW5pc2hlZExvYWRBbmltYXRpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBnZW5lcmF0ZVBhZ2UoKTtcclxuICBzZXRUaGVtZSgpO1xyXG4gIGFkZENvdmVydEV2ZW50KCk7XHJcbiAgc2hvd1BhZ2UoKTtcclxuICBjb252ZXJ0Q3VycmVudFVuaXRzKCk7XHJcbiAgY29udmVydEZvcmVjYXN0VW5pdHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3JPYmopIHtcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBzcGFuLnRleHRDb250ZW50ID0gZXJyb3JPYmouZXJyb3IubWVzc2FnZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2FydExvYWRBbmltYXRpb24oKSB7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW1hdGlvbicpO1xyXG4gIGFuaW1hdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluaXNoZWRMb2FkQW5pbWF0aW9uKCkge1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYXRpb24nKTtcclxuICBhbmltYXRpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhdGEoZGF0YSkge1xyXG4gIGN1cnJlbnRfZGF0YSA9IGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XHJcbiAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVBhZ2UoKSB7XHJcbiAgZmlsbEN1cnJlbnRTZWN0aW9uKCk7XHJcbiAgZmlsbE1vcmVJbmZvcm1hdGlvblNlY3Rpb24oKTtcclxuICBmaWxsRm9yZWNhc3RTZWN0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxDdXJyZW50U2VjdGlvbigpIHtcclxuICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Jyk7XHJcbiAgY3VycmVudFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJfaW5mb19jaXR5ID0gZ2V0Q2l0eUVsZW1lbnQoKTtcclxuICBjb25zdCB3ZWF0aGVyX2luZm9fY291bnRyeSA9IGdldENvdW50cnlFbGVtZW50KCk7XHJcbiAgY29uc3Qgd2VhdGhlcl9pbmZvX3RlbXBlcmF0dXJlID0gZ2V0VGVtcGVyYXR1cmVFbGVtZW50KCk7XHJcbiAgY29uc3Qgd2VhdGhlcl9pbmZvX3N0YXR1cyA9IGdldFN0YXR1c0VsZW1lbnQoKTtcclxuICBjb25zdCB0aW1lID0gZ2V0VGltZUVsZW1lbnQoKTtcclxuXHJcbiAgY3VycmVudFNlY3Rpb24uYXBwZW5kQ2hpbGQod2VhdGhlcl9pbmZvX2NpdHkpO1xyXG4gIGN1cnJlbnRTZWN0aW9uLmFwcGVuZENoaWxkKHdlYXRoZXJfaW5mb19jb3VudHJ5KTtcclxuICBjdXJyZW50U2VjdGlvbi5hcHBlbmRDaGlsZCh3ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUpO1xyXG4gIGN1cnJlbnRTZWN0aW9uLmFwcGVuZENoaWxkKHdlYXRoZXJfaW5mb19zdGF0dXMpO1xyXG4gIGN1cnJlbnRTZWN0aW9uLmFwcGVuZENoaWxkKHRpbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaXR5RWxlbWVudCgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX2luZm9fY2l0eScpO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50X2RhdGEubG9jYXRpb24ubmFtZTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q291bnRyeUVsZW1lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9pbmZvX2NvdW50cnknKTtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudF9kYXRhLmxvY2F0aW9uLmNvdW50cnk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRlbXBlcmF0dXJlRWxlbWVudCgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUnKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRfdW5pdCcpO1xyXG4gIHRlbXAuaWQgPSAndGVtcCc7XHJcbiAgdGVtcC50ZXh0Q29udGVudCA9IHJvdW5kTnVtYmVyKGN1cnJlbnRfZGF0YS5jdXJyZW50LnRlbXBfYyk7XHJcblxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY29uc3Qgc3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3VwJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdzeW1ib2xfY29udGFpbmVyJyk7XHJcbiAgc3VwLmlkID0gJ3VuaXRfc3ltYm9sJztcclxuXHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICfCuic7XHJcbiAgc3VwLnRleHRDb250ZW50ID0gY3VycmVudF91bml0LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gIHNwYW4uYXBwZW5kQ2hpbGQoc3VwKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKHRlbXApO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0dXNFbGVtZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfaW5mb19zdGF0dXMnKTtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb24nKTtcclxuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50X2RhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuXHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IG1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4Jyk7XHJcbiAgbWF4LmlkID0gJ21heHRlbXAnO1xyXG4gIG1heC50ZXh0Q29udGVudCA9IGAke3JvdW5kTnVtYmVyKFxyXG4gICAgY3VycmVudF9kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLm1heHRlbXBfY1xyXG4gICl9wrpgO1xyXG5cclxuICBjb25zdCBzbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzbGFzaC50ZXh0Q29udGVudCA9ICcvJztcclxuXHJcbiAgY29uc3QgbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW4nKTtcclxuICBtaW4uaWQgPSAnbWludGVtcCc7XHJcbiAgbWluLnRleHRDb250ZW50ID0gYCR7cm91bmROdW1iZXIoXHJcbiAgICBjdXJyZW50X2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0ubWludGVtcF9jXHJcbiAgKX3CumA7XHJcblxyXG4gIGRpdi5hcHBlbmRDaGlsZChtYXgpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChzbGFzaCk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKG1pbik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVFbGVtZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZWxlbWVudC5pZCA9ICd0aW1lJztcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gZ2V0SG91cnMoKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhvdXJzKCkge1xyXG4gIGNvbnN0IHRpbWUgPSBjdXJyZW50X2RhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJyk7XHJcbiAgY29uc3QgaG91cnNfbWludXRlcyA9IHRpbWVbMV0uc3BsaXQoJzonKTtcclxuICByZXR1cm4gZm9ybWF0VGltZShob3Vyc19taW51dGVzWzBdKSArICc6JyArIGhvdXJzX21pbnV0ZXNbMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xyXG4gIHJldHVybiB0aW1lIDwgMTAgPyBgMCR7dGltZX1gIDogdGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmROdW1iZXIodmFsdWUpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxNb3JlSW5mb3JtYXRpb25TZWN0aW9uKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZV9pbmZvcm1hdGlvbiBzcGFuJyk7XHJcblxyXG4gIGNvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XHJcbiAgICBpZiAoY29udGFpbmVyLmlkID09PSAnZmVlbHNsaWtlJykge1xyXG4gICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSByb3VuZE51bWJlcihcclxuICAgICAgICBjdXJyZW50X2RhdGEuY3VycmVudFtgJHtjb250YWluZXIuaWR9XyR7Y3VycmVudF91bml0fWBdXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IGN1cnJlbnRfZGF0YS5jdXJyZW50W2NvbnRhaW5lci5pZF07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxGb3JlY2FzdFNlY3Rpb24oKSB7XHJcbiAgY29uc3QgZm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XHJcbiAgZm9yZWNhc3RTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBjdXJyZW50X2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZm9yZWNhc3QpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSBnZXRJY29uVXJsKGZvcmVjYXN0LmNvbmRpdGlvbi5jb2RlKTtcclxuICAgIGljb24uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBjb25zdCBkYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXknKTtcclxuICAgIGRheUVsZW1lbnQudGV4dENvbnRlbnQgPSBnZXREYXkoZm9yZWNhc3QuZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdGVtcF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlbXBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21heF9taW4nKTtcclxuXHJcbiAgICBjb25zdCBtYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcclxuICAgIG1heC50ZXh0Q29udGVudCA9IHJvdW5kTnVtYmVyKGZvcmVjYXN0W2BtYXh0ZW1wXyR7Y3VycmVudF91bml0fWBdKSArICfCuic7XHJcblxyXG4gICAgY29uc3Qgc2xhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzbGFzaC50ZXh0Q29udGVudCA9ICcvJztcclxuXHJcbiAgICBjb25zdCBtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluJyk7XHJcbiAgICBtaW4udGV4dENvbnRlbnQgPSByb3VuZE51bWJlcihmb3JlY2FzdFtgbWludGVtcF8ke2N1cnJlbnRfdW5pdH1gXSkgKyAnwronO1xyXG5cclxuICAgIHRlbXBfY29udGFpbmVyLmFwcGVuZENoaWxkKG1heCk7XHJcbiAgICB0ZW1wX2NvbnRhaW5lci5hcHBlbmRDaGlsZChzbGFzaCk7XHJcbiAgICB0ZW1wX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtaW4pO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRheUVsZW1lbnQpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wX2NvbnRhaW5lcik7XHJcblxyXG4gICAgZm9yZWNhc3RTZWN0aW9uLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb3ZlcnRFdmVudCgpIHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLXVuaXQnKTtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb252ZXJ0VW5pdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHMoKSB7XHJcbiAgdG9nZ2xlQ3VycmVudFVuaXQoKTtcclxuICB0b2dnbGVCdXR0b24oKTtcclxuICBjb252ZXJ0Q3VycmVudFVuaXRzKCk7XHJcbiAgY29udmVydEZvcmVjYXN0VW5pdHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQnV0dG9uKCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdW5pdCcpO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IGDCuiR7Y3VycmVudF91bml0LnRvVXBwZXJDYXNlKCl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ3VycmVudFVuaXQoKSB7XHJcbiAgaWYgKGN1cnJlbnRfdW5pdCA9PT0gJ2MnKSB7XHJcbiAgICBjdXJyZW50X3VuaXQgPSAnZic7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGN1cnJlbnRfdW5pdCA9ICdjJztcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydEN1cnJlbnRVbml0cygpIHtcclxuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW50X3VuaXQnKTtcclxuICBjb25zdCBzeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdF9zeW1ib2wnKTtcclxuICBzeW1ib2wudGV4dENvbnRlbnQgPSBjdXJyZW50X3VuaXQudG9VcHBlckNhc2UoKTtcclxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gcm91bmROdW1iZXIoXHJcbiAgICAgIGN1cnJlbnRfZGF0YS5jdXJyZW50W2Ake2VsZW1lbnQuaWR9XyR7Y3VycmVudF91bml0fWBdXHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0Rm9yZWNhc3RVbml0cygpIHtcclxuICBjb25zdCBtYXhfdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgnKTtcclxuICBjb25zdCBtaW5fdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4nKTtcclxuXHJcbiAgbWF4X3RlbXAudGV4dENvbnRlbnQgPVxyXG4gICAgcm91bmROdW1iZXIoXHJcbiAgICAgIGN1cnJlbnRfZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXVtgJHttYXhfdGVtcC5pZH1fJHtjdXJyZW50X3VuaXR9YF1cclxuICAgICkgKyAnwronO1xyXG5cclxuICBtaW5fdGVtcC50ZXh0Q29udGVudCA9XHJcbiAgICByb3VuZE51bWJlcihcclxuICAgICAgY3VycmVudF9kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdW2Ake21pbl90ZW1wLmlkfV8ke2N1cnJlbnRfdW5pdH1gXVxyXG4gICAgKSArICfCuic7XHJcblxyXG4gIGZpbGxGb3JlY2FzdFNlY3Rpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1BhZ2UoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SWNvblVybChjb2RlKSB7XHJcbiAgY29uc3QgaWNvbk9iaiA9IHdlYXRoZXJJY29ucy5maW5kKChpY29uKSA9PiBpY29uLmNvZGUgPT09IGNvZGUpO1xyXG4gIGNvbnN0IHVybCA9IGBpY29ucy9kYXkvJHtpY29uT2JqLmljb259LnBuZ2A7XHJcbiAgcmV0dXJuIHVybDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcclxuICBjb25zdCB3ZWVrZGF5ID0gW1xyXG4gICAgJ1N1bmRheScsXHJcbiAgICAnTW9uZGF5JyxcclxuICAgICdUdWVzZGF5JyxcclxuICAgICdXZWRuZXNkYXknLFxyXG4gICAgJ1RodXJzZGF5JyxcclxuICAgICdGcmlkYXknLFxyXG4gICAgJ1NhdHVyZGF5JyxcclxuICBdO1xyXG5cclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZm9yZWNhc3REYXRlID0gbmV3IERhdGUoLi4uZm9ybWF0RGF0ZShkYXRlKSk7XHJcblxyXG4gIGlmIChmb3JlY2FzdERhdGUuZ2V0RGF5KCkgPT09IHRvZGF5LmdldERheSgpKSB7XHJcbiAgICByZXR1cm4gJ1RvZGF5JztcclxuICB9XHJcbiAgcmV0dXJuIHdlZWtkYXlbZm9yZWNhc3REYXRlLmdldERheSgpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgY29uc3Qgc3BsaXREYXRhID0gZGF0ZS5zcGxpdCgnLScpO1xyXG4gIHNwbGl0RGF0YVsxXSA9IHNwbGl0RGF0YVsxXSAtIDE7XHJcbiAgcmV0dXJuIHNwbGl0RGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGhlbWUoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgaG91cnMgPSBOdW1iZXIoZ2V0SG91cnMoKS5zcGxpdCgnOicpLnNoaWZ0KCkpO1xyXG4gIGlmIChob3VycyA+PSA2ICYmIGhvdXJzIDwgOCkge1xyXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndmFyKC0tc3VucmlzZS1ncmFkaWVudCknO1xyXG4gIH1cclxuICBpZiAoaG91cnMgPj0gOCAmJiBob3VycyA8IDE3KSB7XHJcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd2YXIoLS1kYXktZ3JhZGllbnQpJztcclxuICB9XHJcbiAgaWYgKGhvdXJzID49IDE3ICYmIGhvdXJzIDwgMTkpIHtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3ZhcigtLXN1bnNldC1ncmFkaWVudCknO1xyXG4gIH1cclxuICBpZiAoaG91cnMgPj0gMTkgfHwgaG91cnMgPCA2KSB7XHJcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd2YXIoLS1uaWdodC1ncmFkaWVudCknO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCByZW1vdmVFcnJvck1zZyk7XHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgYWRkRW50ZXJFdmVudCk7XHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCByZW1vdmVFbnRlckV2ZW50KTtcclxuXHJcbmZ1bmN0aW9uIGFkZEVudGVyRXZlbnQoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjYXB0dXJlRW50ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVFbnRlckV2ZW50KCkge1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2FwdHVyZUVudGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JNc2coKSB7XHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0ICsgc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXB0dXJlRW50ZXIoZSkge1xyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgc2VhcmNoKGdldElucHV0VmFsdWUoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5zZWFyY2goJ2xvbmRvbicpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=