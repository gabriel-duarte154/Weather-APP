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
const weather_api_url = `https://api.weatherapi.com/v1/forecast.json?key=${weather_free_key}&days=5&q=query_value`;

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
        {
          condition: {
            code: data.forecast.forecastday[3].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[3].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[3].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[3].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[3].day.mintemp_f,
          date: data.forecast.forecastday[3].date,
        },
        {
          condition: {
            code: data.forecast.forecastday[4].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[4].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[4].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[4].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[4].day.mintemp_f,
          date: data.forecast.forecastday[4].date,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixtSEFBbUgsSUFBSSxrQkFBa0I7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSwyRUFBMkUsaUJBQWlCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVyxHQUFHLGFBQWE7QUFDekQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZLEdBQUcsYUFBYTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZLEdBQUcsYUFBYTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFZO0FBQzlCLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJBcGkubWpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tbmlnaHQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDFhMjkgNjAlLCAjMDMxNDFmLCAjMDE0NTY5KTtcclxuICAtLWRheS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBmN2VkZiA2MCUsICMwODg3ZDYsICM0MWM0ZjgpO1xyXG4gIC0tc3VucmlzZS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzdjYTFkMSA2MCUsICNhZDljYzAsICNlM2FlYTgpO1xyXG4gIC0tc3Vuc2V0LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjU5M2EwIDYwJSwgI2FjYzFjNywgI2ZmYjZhMyk7XHJcbiAgLS1iZy1jb2xvcjogI2RkZDlkOTNkO1xyXG4gIC0tZm9jdXM6ICNmZmZmZmYzYTtcclxuICAtLXNoYWRvdzogMXB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMxNSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWRheS1ncmFkaWVudCk7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgd2lkdGg6IDE1MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWlubGluZTogYXV0bztcclxufVxyXG5cclxuLnNlYXJjaF9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmODU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxuICBmbGV4OiAwIDEgNTAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfY29udGFpbmVyIGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvY3VzKTtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4udG9nZ2xlLXVuaXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ5ZDkzZDtcclxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XHJcbiAgbWluLWhlaWdodDogMzJweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG59XHJcblxyXG4udG9nZ2xlLXVuaXQ6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuc3ZnIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTMycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1MTUxNTc7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgd2lkdGg6IDE1MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlyc3Rfc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIGZsZXg6IDAuNTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmN1cnJlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb19jaXR5IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fY291bnRyeSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3RlbXBlcmF0dXJlICN0ZW1wIHtcclxuICBmb250LXNpemU6IDVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUgLnN5bWJvbF9jb250YWluZXIsXHJcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUgc3VwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3N0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fc3RhdHVzIC5tYXgge1xyXG4gIG1hcmdpbi1yaWdodDogLjFyZW07XHJcbn1cclxuXHJcbi5zZWNvbmRfc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubW9yZV9pbmZvcm1hdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWJhc2lzOiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ud2luZF9pbmZvLFxyXG4uc3VuX2luZm8sXHJcbi5pbmZvcyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi53aW5kX2luZm8sXHJcbi5zdW5faW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLndpbmRfaW5mbyBkaXYgc3BhbixcclxuLnN1bl9pbmZvIGRpdiBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4ubGVmdF9pbmZvIGRpdiB7XHJcbiAgY29sb3I6ICNmZmZmZmZiYjtcclxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuLmluZm9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcclxufVxyXG5cclxuLmluZm9faXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmluZm9faXRlbSArIC5pbmZvX2l0ZW0ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5pbmZvX2l0ZW0gLml0ZW1fbmFtZSB7XHJcbiAgZmxleDogMTtcclxuICBjb2xvcjogI2ZmZmZmZmJiO1xyXG59XHJcblxyXG4uZm9yZWNhc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JlY2FzdCAuY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG59XHJcblxyXG4uZm9yZWNhc3QgLmNhcmQgLmRheSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JlY2FzdCAuY2FyZCAubWF4X21pbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9yZWNhc3QgLmNhcmQgaW1nIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWFyZ2luOiAtMTBweCAtMTBweCAtMTVweCAtMTBweDtcclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIHBhZGRpbmc6IC4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmY7XHJcbiAgYW5pbWF0aW9uOiBzcGluIC44cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmZvcmVjYXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICoge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZpcnN0X3NlY3Rpb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1vcmVfaW5mb3JtYXRpb24ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMWZyLCBtYXgtY29udGVudCkgMWZyO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkVBQTJFO0VBQzNFLHlFQUF5RTtFQUN6RSw2RUFBNkU7RUFDN0UsNEVBQTRFO0VBQzVFLHFCQUFxQjtFQUNyQixrQkFB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YUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLE9BQU87RUFDUCxpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsbUNBQW1DO0FBQ3JDOzs7QUFHQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7OztBQUdBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtREFBbUQ7RUFDckQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLW5pZ2h0LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAxYTI5IDYwJSwgIzAzMTQxZiwgIzAxNDU2OSk7XFxyXFxuICAtLWRheS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzBmN2VkZiA2MCUsICMwODg3ZDYsICM0MWM0ZjgpO1xcclxcbiAgLS1zdW5yaXNlLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjN2NhMWQxIDYwJSwgI2FkOWNjMCwgI2UzYWVhOCk7XFxyXFxuICAtLXN1bnNldC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI1OTNhMCA2MCUsICNhY2MxYzcsICNmZmI2YTMpO1xcclxcbiAgLS1iZy1jb2xvcjogI2RkZDlkOTNkO1xcclxcbiAgLS1mb2N1czogI2ZmZmZmZjNhO1xcclxcbiAgLS1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zMTUpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tZGF5LWdyYWRpZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbiAgd2lkdGg6IDE1MDBweDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmODU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAzMnB4O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gIGZsZXg6IDAgMSA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF9jb250YWluZXIgaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvY3VzKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtdW5pdCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOWQ5M2Q7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXHJcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLXVuaXQ6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG5zdmcge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0zMnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNTE1MTU3O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICB3aWR0aDogMTUwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3Rfc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMDBweDtcXHJcXG4gIGZsZXg6IDAuNTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb19jaXR5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fY291bnRyeSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3RlbXBlcmF0dXJlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSAjdGVtcCB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC53ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUgLnN5bWJvbF9jb250YWluZXIsXFxyXFxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSBzdXAge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLndlYXRoZXJfaW5mb19zdGF0dXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAud2VhdGhlcl9pbmZvX3N0YXR1cyAubWF4IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRfc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDEuNTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3JlX2luZm9ybWF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBmbGV4LWJhc2lzOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi53aW5kX2luZm8sXFxyXFxuLnN1bl9pbmZvLFxcclxcbi5pbmZvcyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRfaW5mbyxcXHJcXG4uc3VuX2luZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRfaW5mbyBkaXYgc3BhbixcXHJcXG4uc3VuX2luZm8gZGl2IHNwYW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRfaW5mbyBkaXYge1xcclxcbiAgY29sb3I6ICNmZmZmZmZiYjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxyXFxufVxcclxcblxcclxcbi5pbmZvX2l0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb19pdGVtICsgLmluZm9faXRlbSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb19pdGVtIC5pdGVtX25hbWUge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmYmI7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0IC5jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QgLmNhcmQgLmRheSB7XFxyXFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdCAuY2FyZCAubWF4X21pbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QgLmNhcmQgaW1nIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgbWFyZ2luOiAtMTBweCAtMTBweCAtMTVweCAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZyB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmZmZjtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYW5pbWF0aW9uOiBzcGluIC44cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcbiAgLmZvcmVjYXN0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcXHJcXG4gICoge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlyc3Rfc2VjdGlvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3VycmVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9yZV9pbmZvcm1hdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDFmciwgbWF4LWNvbnRlbnQpIDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHdlYXRoZXJfZnJlZV9rZXkgPSAnNjQyYmMwNjEwZjBiNDY2MGFmMzEzMzM0MzIzMTAwNyc7XHJcbmNvbnN0IHdlYXRoZXJfYXBpX3VybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke3dlYXRoZXJfZnJlZV9rZXl9JmRheXM9NSZxPXF1ZXJ5X3ZhbHVlYDtcclxuXHJcbmNvbnN0IHdpbmRfZGlyZWN0aW9uID0ge1xyXG4gIE46ICdOb3J0aCcsXHJcbiAgRTogJ0Vhc3QnLFxyXG4gIFM6ICdTb3V0aCcsXHJcbiAgVzogJ1dlc3QnLFxyXG4gIE5FOiAnTm9ydGhFYXN0JyxcclxuICBOVzogJ05vcnRoV2VzdCcsXHJcbiAgU0U6ICdTb3V0aEVhc3QnLFxyXG4gIFNXOiAnU291dGhXZXN0JyxcclxuICBOTlc6ICdOb3J0aC1XZXN0JyxcclxuICBOTkU6ICdOb3RoLUVhc3QnLFxyXG4gIFdOVzogJ1dlc3QtTm9ydGhXZXN0JyxcclxuICBXU1c6ICdXZXN0LVNvdXRoV2VzdCcsXHJcbiAgU1NXOiAnU291dGgtU291dGhFYXN0JyxcclxuICBFTkU6ICdFYXN0LU5vcnRoRWFzdCcsXHJcbiAgRVNFOiAnRWFzdC1Tb3V0aEVhc3QnLFxyXG4gIFNTRTogJ1NvdXRoLVNvdXRoRWFzdCcsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kRGlyZWN0aW9uKHdkKSB7XHJcbiAgcmV0dXJuIHdpbmRfZGlyZWN0aW9uW3dkXTtcclxufVxyXG5cclxuY29uc3QgcmVnZXggPSB7XHJcbiAgc3BhY2VCZWZvcmVDb21tYTogLyxcXHMvZyxcclxuICBzcGFjZUFmdGVyQ29tbWE6IC9cXHMsL2csXHJcbiAgc3BhY2VCZXR3ZWVuV29yZHM6IC9cXHMvZyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1hdFVybChxdWVyeSkge1xyXG4gIHJldHVybiB3ZWF0aGVyX2FwaV91cmwucmVwbGFjZSgncXVlcnlfdmFsdWUnLCBmb3JtYXRRdWVyeShxdWVyeSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRRdWVyeShxdWVyeSkge1xyXG4gIHJldHVybiBxdWVyeVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2VBbGwocmVnZXguc3BhY2VBZnRlckNvbW1hLCAnLCcpXHJcbiAgICAucmVwbGFjZUFsbChyZWdleC5zcGFjZUJlZm9yZUNvbW1hLCAnLCcpXHJcbiAgICAucmVwbGFjZUFsbChyZWdleC5zcGFjZUJldHdlZW5Xb3JkcywgJyUyMCcpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKHF1ZXJ5KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGdldEZvcm1hdFVybChxdWVyeSksIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gIHJldHVybiBhd2FpdCBnZXRKc29uRGF0YShkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmVjZXNzYXJ5RGF0YShkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcclxuICAgICAgbmFtZTogZGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICBsb2NhbHRpbWU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgfSxcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgY29uZGl0aW9uOiB7XHJcbiAgICAgICAgdGV4dDogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIGNvZGU6IGRhdGEuY3VycmVudC5jb25kaXRpb24uY29kZSxcclxuICAgICAgfSxcclxuICAgICAgZmVlbHNsaWtlX2M6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcclxuICAgICAgZmVlbHNsaWtlX2Y6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcclxuICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgICAgdXY6IGRhdGEuY3VycmVudC51dixcclxuICAgICAgdGVtcF9jOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICB0ZW1wX2Y6IGRhdGEuY3VycmVudC50ZW1wX2YsXHJcbiAgICAgIHByZXNzdXJlX21iOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIsXHJcbiAgICAgIHdpbmRfZGlyOiBnZXRXaW5kRGlyZWN0aW9uKGRhdGEuY3VycmVudC53aW5kX2RpciksXHJcbiAgICAgIHdpbmRfa3BoOiBkYXRhLmN1cnJlbnQud2luZF9rcGgsXHJcbiAgICAgIGlzX2RheTogZGF0YS5jdXJyZW50LmlzX2RheSxcclxuICAgICAgc3Vuc2V0OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldCxcclxuICAgICAgc3VucmlzZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlLFxyXG4gICAgICBtb29uX3BoYXNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2UsXHJcbiAgICAgIGRhaWx5X2NoYW5jZV9vZl9yYWluOlxyXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgfSxcclxuICAgIGZvcmVjYXN0OiB7XHJcbiAgICAgIGZvcmVjYXN0ZGF5OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uZGl0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uZGl0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uZGl0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uZGl0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uZGl0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXkubWF4dGVtcF9jLFxyXG4gICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5Lm1pbnRlbXBfYyxcclxuICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXkubWludGVtcF9mLFxyXG4gICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEpzb25EYXRhKGRhdGEpIHtcclxuICByZXR1cm4gZGF0YS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZldGNoV2VhdGhlckRhdGEsIGdldE5lY2Vzc2FyeURhdGEgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgV2VhdGhlckFQaSBmcm9tICcuL21vZHVsZXMvd2VhdGhlckFwaS5tanMnO1xyXG5pbXBvcnQgd2VhdGhlckljb25zIGZyb20gJy4vd2VhdGhlci93ZWF0aGVyLmpzb24nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5sZXQgY3VycmVudF91bml0ID0gJ2MnO1xyXG5sZXQgY3VycmVudF9kYXRhO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoKHF1ZXJ5KSB7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuO1xyXG4gIHNhcnRMb2FkQW5pbWF0aW9uKCk7XHJcbiAgYXdhaXQgV2VhdGhlckFQaS5mZXRjaFdlYXRoZXJEYXRhKHF1ZXJ5KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xyXG4gICAgICBoYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShXZWF0aGVyQVBpLmdldE5lY2Vzc2FyeURhdGEoZGF0YSkpO1xyXG4gICAgaW5pdCgpO1xyXG4gIH0pO1xyXG4gIGZpbmlzaGVkTG9hZEFuaW1hdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGdlbmVyYXRlUGFnZSgpO1xyXG4gIHNldFRoZW1lKCk7XHJcbiAgYWRkQ292ZXJ0RXZlbnQoKTtcclxuICBzaG93UGFnZSgpO1xyXG4gIGNvbnZlcnRDdXJyZW50VW5pdHMoKTtcclxuICBjb252ZXJ0Rm9yZWNhc3RVbml0cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvck9iaikge1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIHNwYW4udGV4dENvbnRlbnQgPSBlcnJvck9iai5lcnJvci5tZXNzYWdlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXJ0TG9hZEFuaW1hdGlvbigpIHtcclxuICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWF0aW9uJyk7XHJcbiAgYW5pbWF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5pc2hlZExvYWRBbmltYXRpb24oKSB7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW1hdGlvbicpO1xyXG4gIGFuaW1hdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XHJcbiAgY3VycmVudF9kYXRhID0gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUGFnZSgpIHtcclxuICBmaWxsQ3VycmVudFNlY3Rpb24oKTtcclxuICBmaWxsTW9yZUluZm9ybWF0aW9uU2VjdGlvbigpO1xyXG4gIGZpbGxGb3JlY2FzdFNlY3Rpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbEN1cnJlbnRTZWN0aW9uKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcclxuICBjdXJyZW50U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgY29uc3Qgd2VhdGhlcl9pbmZvX2NpdHkgPSBnZXRDaXR5RWxlbWVudCgpO1xyXG4gIGNvbnN0IHdlYXRoZXJfaW5mb19jb3VudHJ5ID0gZ2V0Q291bnRyeUVsZW1lbnQoKTtcclxuICBjb25zdCB3ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUgPSBnZXRUZW1wZXJhdHVyZUVsZW1lbnQoKTtcclxuICBjb25zdCB3ZWF0aGVyX2luZm9fc3RhdHVzID0gZ2V0U3RhdHVzRWxlbWVudCgpO1xyXG4gIGNvbnN0IHRpbWUgPSBnZXRUaW1lRWxlbWVudCgpO1xyXG5cclxuICBjdXJyZW50U2VjdGlvbi5hcHBlbmRDaGlsZCh3ZWF0aGVyX2luZm9fY2l0eSk7XHJcbiAgY3VycmVudFNlY3Rpb24uYXBwZW5kQ2hpbGQod2VhdGhlcl9pbmZvX2NvdW50cnkpO1xyXG4gIGN1cnJlbnRTZWN0aW9uLmFwcGVuZENoaWxkKHdlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSk7XHJcbiAgY3VycmVudFNlY3Rpb24uYXBwZW5kQ2hpbGQod2VhdGhlcl9pbmZvX3N0YXR1cyk7XHJcbiAgY3VycmVudFNlY3Rpb24uYXBwZW5kQ2hpbGQodGltZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENpdHlFbGVtZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfaW5mb19jaXR5Jyk7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbnRfZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb3VudHJ5RWxlbWVudCgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX2luZm9fY291bnRyeScpO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50X2RhdGEubG9jYXRpb24uY291bnRyeTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGVtcGVyYXR1cmVFbGVtZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfaW5mb190ZW1wZXJhdHVyZScpO1xyXG5cclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudF91bml0Jyk7XHJcbiAgdGVtcC5pZCA9ICd0ZW1wJztcclxuICB0ZW1wLnRleHRDb250ZW50ID0gcm91bmROdW1iZXIoY3VycmVudF9kYXRhLmN1cnJlbnQudGVtcF9jKTtcclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb25zdCBzdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdXAnKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3N5bWJvbF9jb250YWluZXInKTtcclxuICBzdXAuaWQgPSAndW5pdF9zeW1ib2wnO1xyXG5cclxuICBzcGFuLnRleHRDb250ZW50ID0gJ8K6JztcclxuICBzdXAudGV4dENvbnRlbnQgPSBjdXJyZW50X3VuaXQudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgc3Bhbi5hcHBlbmRDaGlsZChzdXApO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXR1c0VsZW1lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9pbmZvX3N0YXR1cycpO1xyXG5cclxuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbicpO1xyXG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRfZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG5cclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgbWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIG1heC5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcclxuICBtYXguaWQgPSAnbWF4dGVtcCc7XHJcbiAgbWF4LnRleHRDb250ZW50ID0gYCR7cm91bmROdW1iZXIoXHJcbiAgICBjdXJyZW50X2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0ubWF4dGVtcF9jXHJcbiAgKX3CumA7XHJcblxyXG4gIGNvbnN0IHNsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNsYXNoLnRleHRDb250ZW50ID0gJy8nO1xyXG5cclxuICBjb25zdCBtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbWluLmNsYXNzTGlzdC5hZGQoJ21pbicpO1xyXG4gIG1pbi5pZCA9ICdtaW50ZW1wJztcclxuICBtaW4udGV4dENvbnRlbnQgPSBgJHtyb3VuZE51bWJlcihcclxuICAgIGN1cnJlbnRfZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5taW50ZW1wX2NcclxuICApfcK6YDtcclxuXHJcbiAgZGl2LmFwcGVuZENoaWxkKG1heCk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKHNsYXNoKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQobWluKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZUVsZW1lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlbGVtZW50LmlkID0gJ3RpbWUnO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBnZXRIb3VycygpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoKSB7XHJcbiAgY29uc3QgdGltZSA9IGN1cnJlbnRfZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoJyAnKTtcclxuICBjb25zdCBob3Vyc19taW51dGVzID0gdGltZVsxXS5zcGxpdCgnOicpO1xyXG4gIHJldHVybiBmb3JtYXRUaW1lKGhvdXJzX21pbnV0ZXNbMF0pICsgJzonICsgaG91cnNfbWludXRlc1sxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIHRpbWUgPCAxMCA/IGAwJHt0aW1lfWAgOiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3VuZE51bWJlcih2YWx1ZSkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbE1vcmVJbmZvcm1hdGlvblNlY3Rpb24oKSB7XHJcbiAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3JlX2luZm9ybWF0aW9uIHNwYW4nKTtcclxuXHJcbiAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcclxuICAgIGlmIChjb250YWluZXIuaWQgPT09ICdmZWVsc2xpa2UnKSB7XHJcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHJvdW5kTnVtYmVyKFxyXG4gICAgICAgIGN1cnJlbnRfZGF0YS5jdXJyZW50W2Ake2NvbnRhaW5lci5pZH1fJHtjdXJyZW50X3VuaXR9YF1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gY3VycmVudF9kYXRhLmN1cnJlbnRbY29udGFpbmVyLmlkXTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbEZvcmVjYXN0U2VjdGlvbigpIHtcclxuICBjb25zdCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcclxuICBmb3JlY2FzdFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGN1cnJlbnRfZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChmb3JlY2FzdCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IGdldEljb25VcmwoZm9yZWNhc3QuY29uZGl0aW9uLmNvZGUpO1xyXG4gICAgaWNvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgIGNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xyXG4gICAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGdldERheShmb3JlY2FzdC5kYXRlKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVtcF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWF4X21pbicpO1xyXG5cclxuICAgIGNvbnN0IG1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heCcpO1xyXG4gICAgbWF4LnRleHRDb250ZW50ID0gcm91bmROdW1iZXIoZm9yZWNhc3RbYG1heHRlbXBfJHtjdXJyZW50X3VuaXR9YF0pICsgJ8K6JztcclxuXHJcbiAgICBjb25zdCBzbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNsYXNoLnRleHRDb250ZW50ID0gJy8nO1xyXG5cclxuICAgIGNvbnN0IG1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW4nKTtcclxuICAgIG1pbi50ZXh0Q29udGVudCA9IHJvdW5kTnVtYmVyKGZvcmVjYXN0W2BtaW50ZW1wXyR7Y3VycmVudF91bml0fWBdKSArICfCuic7XHJcblxyXG4gICAgdGVtcF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWF4KTtcclxuICAgIHRlbXBfY29udGFpbmVyLmFwcGVuZENoaWxkKHNsYXNoKTtcclxuICAgIHRlbXBfY29udGFpbmVyLmFwcGVuZENoaWxkKG1pbik7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXBfY29udGFpbmVyKTtcclxuXHJcbiAgICBmb3JlY2FzdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvdmVydEV2ZW50KCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdW5pdCcpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnZlcnRVbml0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRVbml0cygpIHtcclxuICB0b2dnbGVDdXJyZW50VW5pdCgpO1xyXG4gIHRvZ2dsZUJ1dHRvbigpO1xyXG4gIGNvbnZlcnRDdXJyZW50VW5pdHMoKTtcclxuICBjb252ZXJ0Rm9yZWNhc3RVbml0cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVCdXR0b24oKSB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS11bml0Jyk7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYMK6JHtjdXJyZW50X3VuaXQudG9VcHBlckNhc2UoKX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDdXJyZW50VW5pdCgpIHtcclxuICBpZiAoY3VycmVudF91bml0ID09PSAnYycpIHtcclxuICAgIGN1cnJlbnRfdW5pdCA9ICdmJztcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY3VycmVudF91bml0ID0gJ2MnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0Q3VycmVudFVuaXRzKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnJlbnRfdW5pdCcpO1xyXG4gIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0X3N5bWJvbCcpO1xyXG4gIHN5bWJvbC50ZXh0Q29udGVudCA9IGN1cnJlbnRfdW5pdC50b1VwcGVyQ2FzZSgpO1xyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSByb3VuZE51bWJlcihcclxuICAgICAgY3VycmVudF9kYXRhLmN1cnJlbnRbYCR7ZWxlbWVudC5pZH1fJHtjdXJyZW50X3VuaXR9YF1cclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRGb3JlY2FzdFVuaXRzKCkge1xyXG4gIGNvbnN0IG1heF90ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heCcpO1xyXG4gIGNvbnN0IG1pbl90ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbicpO1xyXG5cclxuICBtYXhfdGVtcC50ZXh0Q29udGVudCA9XHJcbiAgICByb3VuZE51bWJlcihcclxuICAgICAgY3VycmVudF9kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdW2Ake21heF90ZW1wLmlkfV8ke2N1cnJlbnRfdW5pdH1gXVxyXG4gICAgKSArICfCuic7XHJcblxyXG4gIG1pbl90ZW1wLnRleHRDb250ZW50ID1cclxuICAgIHJvdW5kTnVtYmVyKFxyXG4gICAgICBjdXJyZW50X2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF1bYCR7bWluX3RlbXAuaWR9XyR7Y3VycmVudF91bml0fWBdXHJcbiAgICApICsgJ8K6JztcclxuXHJcbiAgZmlsbEZvcmVjYXN0U2VjdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJY29uVXJsKGNvZGUpIHtcclxuICBjb25zdCBpY29uT2JqID0gd2VhdGhlckljb25zLmZpbmQoKGljb24pID0+IGljb24uY29kZSA9PT0gY29kZSk7XHJcbiAgY29uc3QgdXJsID0gYGljb25zL2RheS8ke2ljb25PYmouaWNvbn0ucG5nYDtcclxuICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXkoZGF0ZSkge1xyXG4gIGNvbnN0IHdlZWtkYXkgPSBbXHJcbiAgICAnU3VuZGF5JyxcclxuICAgICdNb25kYXknLFxyXG4gICAgJ1R1ZXNkYXknLFxyXG4gICAgJ1dlZG5lc2RheScsXHJcbiAgICAnVGh1cnNkYXknLFxyXG4gICAgJ0ZyaWRheScsXHJcbiAgICAnU2F0dXJkYXknLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBmb3JlY2FzdERhdGUgPSBuZXcgRGF0ZSguLi5mb3JtYXREYXRlKGRhdGUpKTtcclxuXHJcbiAgaWYgKGZvcmVjYXN0RGF0ZS5nZXREYXkoKSA9PT0gdG9kYXkuZ2V0RGF5KCkpIHtcclxuICAgIHJldHVybiAnVG9kYXknO1xyXG4gIH1cclxuICByZXR1cm4gd2Vla2RheVtmb3JlY2FzdERhdGUuZ2V0RGF5KCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICBjb25zdCBzcGxpdERhdGEgPSBkYXRlLnNwbGl0KCctJyk7XHJcbiAgc3BsaXREYXRhWzFdID0gc3BsaXREYXRhWzFdIC0gMTtcclxuICByZXR1cm4gc3BsaXREYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBob3VycyA9IE51bWJlcihnZXRIb3VycygpLnNwbGl0KCc6Jykuc2hpZnQoKSk7XHJcbiAgaWYgKGhvdXJzID49IDYgJiYgaG91cnMgPCA4KSB7XHJcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd2YXIoLS1zdW5yaXNlLWdyYWRpZW50KSc7XHJcbiAgfVxyXG4gIGlmIChob3VycyA+PSA4ICYmIGhvdXJzIDwgMTcpIHtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3ZhcigtLWRheS1ncmFkaWVudCknO1xyXG4gIH1cclxuICBpZiAoaG91cnMgPj0gMTcgJiYgaG91cnMgPCAxOSkge1xyXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndmFyKC0tc3Vuc2V0LWdyYWRpZW50KSc7XHJcbiAgfVxyXG4gIGlmIChob3VycyA+PSAxOSB8fCBob3VycyA8IDYpIHtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3ZhcigtLW5pZ2h0LWdyYWRpZW50KSc7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHJlbW92ZUVycm9yTXNnKTtcclxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBhZGRFbnRlckV2ZW50KTtcclxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHJlbW92ZUVudGVyRXZlbnQpO1xyXG5cclxuZnVuY3Rpb24gYWRkRW50ZXJFdmVudCgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNhcHR1cmVFbnRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUVudGVyRXZlbnQoKSB7XHJcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjYXB0dXJlRW50ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVFcnJvck1zZygpIHtcclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQgKyBzcGFuJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBzcGFuLnRleHRDb250ZW50ID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcHR1cmVFbnRlcihlKSB7XHJcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICBzZWFyY2goZ2V0SW5wdXRWYWx1ZSgpKTtcclxuICB9XHJcbn1cclxuXHJcbnNlYXJjaCgnbG9uZG9uJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==