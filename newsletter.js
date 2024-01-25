/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Bold.ttf */ "./src/fonts/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Roboto Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 700;
  font-style: normal;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

body {
  position: relative;
  font-size: 1.6rem;
  font-family: "Roboto Regular";
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

@media screen and (min-width: 600px) {
  body {
    background: hsl(234, 29%, 20%);
    justify-content: center;
  }
}
.form {
  max-width: 37.5rem;
}

@media screen and (min-width: 600px) {
  .form {
    max-width: 98%;
    background: hsl(0, 0%, 100%);
    padding: 2rem;
    border-radius: 12px;
  }
  .form[nextSuccess=""] {
    max-width: 50rem;
    padding: 4rem 5rem;
  }
}
@media screen and (min-width: 900px) {
  .form {
    max-width: 850px;
  }
}
.preSignup {
  display: grid;
  grid-template-areas: "image" "info";
}
.preSignup[inactive=""] {
  height: 0;
  overflow: hidden;
}

@media screen and (min-width: 600px) {
  .preSignup {
    grid-template-areas: "info image";
    grid-template-columns: 55% 45%;
  }
}
.backgroundContainer {
  grid-area: image;
}

@media screen and (min-width: 600px) {
  .backgroundContainer img {
    height: 52rem;
    border-radius: 12px;
    object-position: 60%;
  }
}
.infoContainer {
  grid-area: info;
  padding-inline: 2.5rem;
}

@media screen and (min-width: 600px) {
  .infoContainer {
    display: flex;
    flex-direction: column;
    padding-right: 6rem;
  }
}
.preTitle {
  margin-block: 4rem 2rem;
  font-family: "Roboto Bold";
  color: hsl(234, 29%, 20%);
  font-size: 4rem;
}

@media screen and (min-width: 600px) {
  .preTitle {
    font-size: 5.5rem;
    margin-block: 4rem 2rem;
  }
}
.preDesc {
  color: hsl(234, 29%, 20%);
  margin-bottom: 3rem;
  line-height: 2.5rem;
}

@media screen and (min-width: 600px) {
  .preDesc {
    margin-bottom: 1.5rem;
  }
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
}

@media screen and (min-width: 600px) {
  ul {
    margin-bottom: 3rem;
  }
}
li {
  list-style: none;
  display: flex;
  gap: 2rem;
  position: relative;
}
li p {
  line-height: 2.4rem;
  color: hsl(234, 29%, 20%);
}

@media screen and (min-width: 600px) {
  li {
    gap: 1.3rem;
  }
}
.iconList {
  position: relative;
  top: 0.2rem;
  max-width: 2.2rem;
  height: 2.2rem;
}

.inputContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media screen and (min-width: 600px) {
  .inputContainer {
    gap: 1rem;
  }
}
.labelContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label[for=email] {
  color: hsl(234, 29%, 20%);
  font-size: 1.2rem;
  font-family: "Roboto Bold";
}

p.errorState {
  font-size: 1.2rem;
  font-family: "Roboto Bold";
  color: hsl(4, 100%, 67%);
}

input#email {
  width: 100%;
  height: 5.5rem;
  padding-left: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #c8cad0;
  transition: all 0.2s ease-in-out;
}
input#email::placeholder {
  font-size: 1.4rem;
}
input#email:hover {
  cursor: grab;
}
input#email[invalid=""] {
  border: 2px solid hsl(4, 100%, 67%);
  outline: none;
  background-color: #fff1f0;
  color: hsl(4, 100%, 67%);
}
input#email[valid=""] {
  border: 2px solid green;
  outline: none;
  background-color: #b3ffb3;
  color: green;
}

@media screen and (min-width: 600px) {
  input#email {
    margin-bottom: 1rem;
  }
}
.subButton {
  width: 100%;
  height: 5.5rem;
  background: #9ca1c9;
  color: hsl(0, 0%, 100%);
  font-family: "Roboto Bold";
  font-size: 1.6rem;
  border: none;
  border-radius: 8px;
  pointer-events: none;
  cursor: grab;
  transition: all 0.1s ease-in-out;
}
.subButton[success=""] {
  pointer-events: all;
  background: hsl(234, 29%, 20%);
  transition: all 0.2s ease-in-out;
}
.subButton[success=""]:hover {
  background: hsl(4, 100%, 67%);
  box-shadow: 0 5px 10px hsl(4, 100%, 67%);
}

.errorState {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.errorState[visible=""] {
  opacity: 1;
}

.postSignup {
  height: 0;
  overflow: hidden;
}
.postSignup[active=""] {
  display: grid;
  height: auto;
  grid-template-areas: "image" "title" "message" "button";
  overflow: visible;
}

.successImg {
  grid-area: image;
  max-width: 6rem;
  margin-top: 20rem;
}

@media screen and (min-width: 600px) {
  .successImg {
    margin-top: unset;
  }
}
.postSignup h2 {
  grid-area: title;
  color: hsl(234, 29%, 20%);
  font-size: 4rem;
  font-family: "Roboto Bold";
  margin-block: 4rem 3rem;
}

@media screen and (min-width: 600px) {
  .postSignup h2 {
    margin-block: 3rem 2rem;
  }
}
.postSignup p {
  grid-area: message;
  line-height: 2.5rem;
  color: hsl(234, 29%, 20%);
  padding-right: 2rem;
}

@media screen and (min-width: 600px) {
  .postSignup p {
    padding-right: unset;
  }
}
span.userEmail {
  color: hsl(234, 29%, 20%);
  font-family: "Roboto Bold";
}

button.dismiss {
  height: 5.5rem;
  background: hsl(234, 29%, 20%);
  color: hsl(0, 0%, 100%);
  font-family: "Roboto Bold";
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 34rem;
}
button.dismiss:hover {
  background: hsl(4, 100%, 67%);
  box-shadow: 0 5px 10px hsl(4, 100%, 67%);
  cursor: grab;
}

@media screen and (min-width: 600px) {
  button.dismiss {
    margin-top: 3rem;
  }
}
.attribution {
  position: fixed;
  bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["//variables\n\n$tomato: hsl(4, 100%, 67%)\n$dark-slate-grey: hsl(234, 29%, 20%)\n$grey: hsl(231, 7%, 60%)\n$white: hsl(0, 0%, 100%)\n$paragraph-font: 16px\n\n@font-face \n    font-family: 'Roboto Regular'\n    src: url(../fonts/Roboto-Regular.ttf)\n    font-weight: 400\n    font-style: normal\n\n@font-face \n    font-family: 'Roboto Bold'\n    src: url(../fonts/Roboto-Bold.ttf)\n    font-weight: 700\n    font-style: normal\n\n    \n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    position: relative\n    font-size: 1.6rem\n    font-family: 'Roboto Regular'\n    display: flex\n    flex-direction: column\n    min-height: 100vh\n    align-items: center\n\n@media screen and (min-width: 600px)\n    body\n        background: $dark-slate-grey\n        justify-content: center\n \n.form\n    max-width: 37.5rem\n\n@media screen and (min-width: 600px)\n    .form\n        max-width: 98%\n        background: $white\n        padding: 2rem\n        border-radius: 12px\n        &[nextSuccess='']\n            max-width: 50rem\n            padding: 4rem 5rem\n\n@media screen and (min-width: 900px)\n    .form\n        max-width: 850px\n\n.preSignup\n    display: grid\n    grid-template-areas: \"image\" \"info\"\n    &[inactive='']\n        height: 0\n        overflow: hidden\n\n@media screen and (min-width: 600px)\n    .preSignup\n        grid-template-areas: \"info image\"\n        grid-template-columns: 55% 45%\n\n.backgroundContainer\n    grid-area: image\n\n@media screen and (min-width: 600px)\n    .backgroundContainer img\n        height: 52rem\n        border-radius: 12px\n        object-position: 60%\n    \n.infoContainer\n    grid-area: info\n    padding-inline: 2.5rem\n\n@media screen and (min-width: 600px)\n    .infoContainer\n        display: flex\n        flex-direction: column\n        padding-right: 6rem\n\n.preTitle\n    margin-block: 4rem 2rem\n    font-family: 'Roboto Bold'\n    color: $dark-slate-grey\n    font-size: 4rem\n\n@media screen and (min-width: 600px)\n    .preTitle\n        font-size: 5.5rem\n        margin-block: 4rem 2rem\n\n.preDesc\n    color: $dark-slate-grey\n    margin-bottom: 3rem\n    line-height: 2.5rem\n    \n\n@media screen and (min-width: 600px)\n    .preDesc\n        margin-bottom: 1.5rem\n        \n\nul\n    display: flex\n    flex-direction: column\n    gap: 1rem\n    margin-bottom: 4rem\n\n@media screen and (min-width: 600px)\n    ul\n        margin-bottom: 3rem\n\nli\n    list-style: none\n    display: flex\n    gap: 2rem\n    position: relative\n    p\n        line-height: 2.4rem\n        color: $dark-slate-grey\n\n@media screen and (min-width: 600px)\n    li\n        gap: 1.3rem\n\n.iconList\n    position: relative\n    top: .2rem\n    max-width: 2.2rem\n    height: 2.2rem\n\n.inputContainer\n    display: flex\n    flex-direction: column\n    gap: 1rem\n\n@media screen and (min-width: 600px)\n    .inputContainer\n        gap: 1rem\n\n.labelContainer\n    display: flex\n    justify-content: space-between\n    align-items: center\n\nlabel[for=\"email\"]\n    color: $dark-slate-grey\n    font-size: 1.2rem\n    font-family: 'Roboto Bold'\n\np.errorState\n    font-size: 1.2rem\n    font-family: 'Roboto Bold'\n    color: $tomato\n\ninput#email\n    width: 100%\n    height: 5.5rem\n    padding-left: 2rem\n    border-radius: 8px\n    margin-bottom: 1.5rem\n    border: 1px solid lighten($grey, 20%)\n    transition: all 0.2s ease-in-out\n    &::placeholder\n        font-size: 1.4rem\n    &:hover\n        cursor: grab\n    &[invalid=\"\"]\n        border: 2px solid $tomato\n        outline: none\n        background-color: lighten($tomato, 30%)\n        color: $tomato\n    &[valid='']\n        border: 2px solid green\n        outline: none\n        background-color: lighten(green, 60%)\n        color: green\n\n@media screen and (min-width: 600px)\n    input#email\n        margin-bottom: 1rem\n        \n\n.subButton\n    width: 100%\n    height: 5.5rem\n    background: lighten($dark-slate-grey, 50%)\n    color: $white\n    font-family: 'Roboto Bold'\n    font-size: 1.6rem\n    border: none\n    border-radius: 8px\n    pointer-events: none\n    cursor: grab\n    transition: all 0.1s ease-in-out\n    &[success='']\n        pointer-events: all\n        background: $dark-slate-grey\n        transition: all 0.2s ease-in-out\n        &:hover\n            background: $tomato\n            box-shadow: 0 5px 10px $tomato\n\n.errorState\n    opacity: 0\n    transition: opacity 0.2s ease-in-out\n    &[visible='']\n        opacity: 1\n\n.postSignup\n    height: 0\n    overflow: hidden\n    &[active='']\n        display: grid\n        height: auto\n        // grid-template-rows: 25rem 17rem 1fr 10rem\n        grid-template-areas: \"image\" \"title\" \"message\" \"button\"\n        overflow: visible\n\n.successImg\n    grid-area: image\n    max-width: 6rem\n    margin-top: 20rem\n\n@media screen and (min-width: 600px)\n    .successImg\n        margin-top: unset\n\n.postSignup h2 \n    grid-area: title\n    color: $dark-slate-grey\n    font-size: 4rem\n    font-family: 'Roboto Bold'\n    margin-block: 4rem 3rem\n\n@media screen and (min-width: 600px)\n    .postSignup h2\n        margin-block: 3rem 2rem\n\n.postSignup p\n    grid-area: message\n    line-height: 2.5rem\n    color: $dark-slate-grey\n    padding-right: 2rem \n\n@media screen and (min-width: 600px)\n    .postSignup p\n        padding-right: unset   \n\nspan.userEmail\n    color: $dark-slate-grey\n    font-family: 'Roboto Bold'\n\nbutton.dismiss\n    height: 5.5rem\n    background: $dark-slate-grey\n    color: $white\n    font-family: 'Roboto Bold'\n    border-radius: 8px\n    border: none\n    cursor: pointer\n    margin-top: 34rem\n    &:hover\n        background: $tomato\n        box-shadow: 0 5px 10px $tomato\n        cursor: grab\n\n@media screen and (min-width: 600px)\n    button.dismiss\n        margin-top: 3rem\n\n.attribution\n    position: fixed\n    bottom: 0  "],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/fonts/Roboto-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Roboto-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35eab922fdbe4b5324d4.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "160d7a6ac26376e5e977.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");


// global variables
const emailInput = document.querySelector('input[type="email"]');
const subButton = document.querySelector('.subButton');
const errorState = document.querySelector('.errorState');
const preSignup = document.querySelector('.preSignup');
const postSignup = document.querySelector('.postSignup');
const emailRegex = /^\w+@\w+\.(?:com|fr|co\.uk|com\.br|net)/gmi;
const form = document.querySelector('.form');

/* An event listener that waits for user input and changes
when the user finally meets the requirements to proceed further
by allowing the submit button to be clicked once the requirements are
fulfilled. */

emailInput.addEventListener('input', () => {
    let message = 'Valid email required';
    if (!emailRegex.test(emailInput.value)) {
        if (emailInput.hasAttribute('valid')) {
            emailInput.removeAttribute('valid');
            errorState.textContent = message;
            errorState.setAttribute('visible', '');
            emailInput.setAttribute('invalid', '');
            emailInput.focus();
            subButton.removeAttribute('success');
        } else {
            errorState.textContent = message;
            errorState.setAttribute('visible', '');
            emailInput.setAttribute('invalid', '');
            emailInput.focus();
            subButton.removeAttribute('success');
        }
    } else {
        if (emailInput.hasAttribute('invalid')) {
            errorState.textContent = '';
            emailInput.removeAttribute('invalid');
            emailInput.setAttribute('valid', '');
            emailInput.blur();
            subButton.setAttribute('success', '');
        } else {
            errorState.textContent = '';
            errorState.removeAttribute('visible');
            emailInput.setAttribute('valid', '');
            emailInput.blur()
            subButton.setAttribute('success', '');
        }
    }
})

/* An event listener for the submit button that stores the
user's input into a variable and sets data attributes on
the form/presignup/postsignup portions of the projects. These
data attributes control the size as well as visibility of them */

subButton.addEventListener('click', () => {
        const emailAddress = emailInput.value;
        const userEmail = document.querySelector('.userEmail');
        userEmail.textContent = emailAddress;
        form.setAttribute('nextSuccess', '');
        preSignup.setAttribute('inactive', '');
        postSignup.setAttribute('active', '');
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtJQUE4QztBQUMxRiw0Q0FBNEMsNEhBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3RkFBd0YsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksWUFBWSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxRQUFRLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdB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Q0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ld3NsZXR0ZXItc2lnbnVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9uZXdzbGV0dGVyLXNpZ251cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ld3NsZXR0ZXItc2lnbnVwLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2JmYWQiLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ld3NsZXR0ZXItc2lnbnVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25ld3NsZXR0ZXItc2lnbnVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ld3NsZXR0ZXItc2lnbnVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXdzbGV0dGVyLXNpZ251cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXdzbGV0dGVyLXNpZ251cC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzbGV0dGVyLXNpZ251cC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9uZXdzbGV0dGVyLXNpZ251cC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3NsZXR0ZXItc2lnbnVwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmV3c2xldHRlci1zaWdudXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25ld3NsZXR0ZXItc2lnbnVwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBSZWd1bGFyXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjM0LCAyOSUsIDIwJSk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5mb3JtIHtcbiAgbWF4LXdpZHRoOiAzNy41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbiAgLmZvcm1bbmV4dFN1Y2Nlc3M9XCJcIl0ge1xuICAgIG1heC13aWR0aDogNTByZW07XG4gICAgcGFkZGluZzogNHJlbSA1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA4NTBweDtcbiAgfVxufVxuLnByZVNpZ251cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2VcIiBcImluZm9cIjtcbn1cbi5wcmVTaWdudXBbaW5hY3RpdmU9XCJcIl0ge1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5wcmVTaWdudXAge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW5mbyBpbWFnZVwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTUlIDQ1JTtcbiAgfVxufVxuLmJhY2tncm91bmRDb250YWluZXIge1xuICBncmlkLWFyZWE6IGltYWdlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYmFja2dyb3VuZENvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogNTJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBvYmplY3QtcG9zaXRpb246IDYwJTtcbiAgfVxufVxuLmluZm9Db250YWluZXIge1xuICBncmlkLWFyZWE6IGluZm87XG4gIHBhZGRpbmctaW5saW5lOiAyLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pbmZvQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1yaWdodDogNnJlbTtcbiAgfVxufVxuLnByZVRpdGxlIHtcbiAgbWFyZ2luLWJsb2NrOiA0cmVtIDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBCb2xkXCI7XG4gIGNvbG9yOiBoc2woMjM0LCAyOSUsIDIwJSk7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnByZVRpdGxlIHtcbiAgICBmb250LXNpemU6IDUuNXJlbTtcbiAgICBtYXJnaW4tYmxvY2s6IDRyZW0gMnJlbTtcbiAgfVxufVxuLnByZURlc2Mge1xuICBjb2xvcjogaHNsKDIzNCwgMjklLCAyMCUpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAucHJlRGVzYyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5saSBwIHtcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgY29sb3I6IGhzbCgyMzQsIDI5JSwgMjAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgbGkge1xuICAgIGdhcDogMS4zcmVtO1xuICB9XG59XG4uaWNvbkxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4ycmVtO1xuICBtYXgtd2lkdGg6IDIuMnJlbTtcbiAgaGVpZ2h0OiAyLjJyZW07XG59XG5cbi5pbnB1dENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmlucHV0Q29udGFpbmVyIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbi5sYWJlbENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubGFiZWxbZm9yPWVtYWlsXSB7XG4gIGNvbG9yOiBoc2woMjM0LCAyOSUsIDIwJSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQm9sZFwiO1xufVxuXG5wLmVycm9yU3RhdGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbiAgY29sb3I6IGhzbCg0LCAxMDAlLCA2NyUpO1xufVxuXG5pbnB1dCNlbWFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2FkMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5pbnB1dCNlbWFpbDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbmlucHV0I2VtYWlsOmhvdmVyIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuaW5wdXQjZW1haWxbaW52YWxpZD1cIlwiXSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCg0LCAxMDAlLCA2NyUpO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWYwO1xuICBjb2xvcjogaHNsKDQsIDEwMCUsIDY3JSk7XG59XG5pbnB1dCNlbWFpbFt2YWxpZD1cIlwiXSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNmZmIzO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGlucHV0I2VtYWlsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG4uc3ViQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNS41cmVtO1xuICBiYWNrZ3JvdW5kOiAjOWNhMWM5O1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBncmFiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cbi5zdWJCdXR0b25bc3VjY2Vzcz1cIlwiXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJhY2tncm91bmQ6IGhzbCgyMzQsIDI5JSwgMjAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uc3ViQnV0dG9uW3N1Y2Nlc3M9XCJcIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBoc2woNCwgMTAwJSwgNjclKTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCBoc2woNCwgMTAwJSwgNjclKTtcbn1cblxuLmVycm9yU3RhdGUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZXJyb3JTdGF0ZVt2aXNpYmxlPVwiXCJdIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBvc3RTaWdudXAge1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucG9zdFNpZ251cFthY3RpdmU9XCJcIl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2VcIiBcInRpdGxlXCIgXCJtZXNzYWdlXCIgXCJidXR0b25cIjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5zdWNjZXNzSW1nIHtcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcbiAgbWF4LXdpZHRoOiA2cmVtO1xuICBtYXJnaW4tdG9wOiAyMHJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnN1Y2Nlc3NJbWcge1xuICAgIG1hcmdpbi10b3A6IHVuc2V0O1xuICB9XG59XG4ucG9zdFNpZ251cCBoMiB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGNvbG9yOiBoc2woMjM0LCAyOSUsIDIwJSk7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbiAgbWFyZ2luLWJsb2NrOiA0cmVtIDNyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5wb3N0U2lnbnVwIGgyIHtcbiAgICBtYXJnaW4tYmxvY2s6IDNyZW0gMnJlbTtcbiAgfVxufVxuLnBvc3RTaWdudXAgcCB7XG4gIGdyaWQtYXJlYTogbWVzc2FnZTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgY29sb3I6IGhzbCgyMzQsIDI5JSwgMjAlKTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBvc3RTaWdudXAgcCB7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gIH1cbn1cbnNwYW4udXNlckVtYWlsIHtcbiAgY29sb3I6IGhzbCgyMzQsIDI5JSwgMjAlKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbn1cblxuYnV0dG9uLmRpc21pc3Mge1xuICBoZWlnaHQ6IDUuNXJlbTtcbiAgYmFja2dyb3VuZDogaHNsKDIzNCwgMjklLCAyMCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMzRyZW07XG59XG5idXR0b24uZGlzbWlzczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGhzbCg0LCAxMDAlLCA2NyUpO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IGhzbCg0LCAxMDAlLCA2NyUpO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGJ1dHRvbi5kaXNtaXNzIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG59XG4uYXR0cmlidXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFRQTtFQUNJLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxn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QUExQkk7RUFDSSxtQkFBQTtFQUNBLDhCQXZOVTtFQXdOVixnQ0FBQTtBQTRCUjtBQTNCUTtFQUNJLDZCQTNOSDtFQTRORyx3Q0FBQTtBQTZCWjs7QUEzQkE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7QUE4Qko7QUE3Qkk7RUFDSSxVQUFBO0FBK0JSOztBQTdCQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQWdDSjtBQS9CSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBRUEsdURBQUE7RUFDQSxpQkFBQTtBQWdDUjs7QUE5QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWlDSjs7QUEvQkE7RUFDSTtJQUNJLGlCQUFBO0VBa0NOO0FBQ0Y7QUFqQ0E7RUFDSSxnQkFBQTtFQUNBLHlCQXhQYztFQXlQZCxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQW1DSjs7QUFqQ0E7RUFDSTtJQUNJLHVCQUFBO0VBb0NOO0FBQ0Y7QUFuQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBcFFjO0VBcVFkLG1CQUFBO0FBcUNKOztBQW5DQTtFQUNJO0lBQ0ksb0JBQUE7RUFzQ047QUFDRjtBQXJDQTtFQUNJLHlCQTVRYztFQTZRZCwwQkFBQTtBQXVDSjs7QUFyQ0E7RUFDSSxjQUFBO0VBQ0EsOEJBalJjO0VBa1JkLHVCQWhSSTtFQWlSSiwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXdDSjtBQXZDSTtFQUNJLDZCQTFSQztFQTJSRCx3Q0FBQTtFQUNBLFlBQUE7QUF5Q1I7O0FBdkNBO0VBQ0k7SUFDSSxnQkFBQTtFQTBDTjtBQUNGO0FBekNBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUEyQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy92YXJpYWJsZXNcXG5cXG4kdG9tYXRvOiBoc2woNCwgMTAwJSwgNjclKVxcbiRkYXJrLXNsYXRlLWdyZXk6IGhzbCgyMzQsIDI5JSwgMjAlKVxcbiRncmV5OiBoc2woMjMxLCA3JSwgNjAlKVxcbiR3aGl0ZTogaHNsKDAsIDAlLCAxMDAlKVxcbiRwYXJhZ3JhcGgtZm9udDogMTZweFxcblxcbkBmb250LWZhY2UgXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZilcXG4gICAgZm9udC13ZWlnaHQ6IDQwMFxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXG5cXG5AZm9udC1mYWNlIFxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBCb2xkJ1xcbiAgICBzcmM6IHVybCguLi9mb250cy9Sb2JvdG8tQm9sZC50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuXFxuICAgIFxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG5cXG4qXFxuICAgIG1hcmdpbjogMFxcbiAgICBwYWRkaW5nOiAwXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoXFxuXFxuaHRtbFxcbiAgICBmb250LXNpemU6IDYyLjUlXFxuXFxuaW1nXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGhlaWdodDogYXV0b1xcbiAgICBvYmplY3QtZml0OiBjb3ZlclxcblxcbmJvZHlcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGJvZHlcXG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrLXNsYXRlLWdyZXlcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuIFxcbi5mb3JtXFxuICAgIG1heC13aWR0aDogMzcuNXJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuZm9ybVxcbiAgICAgICAgbWF4LXdpZHRoOiA5OCVcXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZVxcbiAgICAgICAgcGFkZGluZzogMnJlbVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweFxcbiAgICAgICAgJltuZXh0U3VjY2Vzcz0nJ11cXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcmVtXFxuICAgICAgICAgICAgcGFkZGluZzogNHJlbSA1cmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpXFxuICAgIC5mb3JtXFxuICAgICAgICBtYXgtd2lkdGg6IDg1MHB4XFxuXFxuLnByZVNpZ251cFxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpbWFnZVxcXCIgXFxcImluZm9cXFwiXFxuICAgICZbaW5hY3RpdmU9JyddXFxuICAgICAgICBoZWlnaHQ6IDBcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLnByZVNpZ251cFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImluZm8gaW1hZ2VcXFwiXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU1JSA0NSVcXG5cXG4uYmFja2dyb3VuZENvbnRhaW5lclxcbiAgICBncmlkLWFyZWE6IGltYWdlXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5iYWNrZ3JvdW5kQ29udGFpbmVyIGltZ1xcbiAgICAgICAgaGVpZ2h0OiA1MnJlbVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweFxcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA2MCVcXG4gICAgXFxuLmluZm9Db250YWluZXJcXG4gICAgZ3JpZC1hcmVhOiBpbmZvXFxuICAgIHBhZGRpbmctaW5saW5lOiAyLjVyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmluZm9Db250YWluZXJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZyZW1cXG5cXG4ucHJlVGl0bGVcXG4gICAgbWFyZ2luLWJsb2NrOiA0cmVtIDJyZW1cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCdcXG4gICAgY29sb3I6ICRkYXJrLXNsYXRlLWdyZXlcXG4gICAgZm9udC1zaXplOiA0cmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5wcmVUaXRsZVxcbiAgICAgICAgZm9udC1zaXplOiA1LjVyZW1cXG4gICAgICAgIG1hcmdpbi1ibG9jazogNHJlbSAycmVtXFxuXFxuLnByZURlc2NcXG4gICAgY29sb3I6ICRkYXJrLXNsYXRlLWdyZXlcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbVxcbiAgICBsaW5lLWhlaWdodDogMi41cmVtXFxuICAgIFxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAucHJlRGVzY1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtXFxuICAgICAgICBcXG5cXG51bFxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgZ2FwOiAxcmVtXFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgdWxcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW1cXG5cXG5saVxcbiAgICBsaXN0LXN0eWxlOiBub25lXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZ2FwOiAycmVtXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICBwXFxuICAgICAgICBsaW5lLWhlaWdodDogMi40cmVtXFxuICAgICAgICBjb2xvcjogJGRhcmstc2xhdGUtZ3JleVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBsaVxcbiAgICAgICAgZ2FwOiAxLjNyZW1cXG5cXG4uaWNvbkxpc3RcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgIHRvcDogLjJyZW1cXG4gICAgbWF4LXdpZHRoOiAyLjJyZW1cXG4gICAgaGVpZ2h0OiAyLjJyZW1cXG5cXG4uaW5wdXRDb250YWluZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogMXJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuaW5wdXRDb250YWluZXJcXG4gICAgICAgIGdhcDogMXJlbVxcblxcbi5sYWJlbENvbnRhaW5lclxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuXFxubGFiZWxbZm9yPVxcXCJlbWFpbFxcXCJdXFxuICAgIGNvbG9yOiAkZGFyay1zbGF0ZS1ncmV5XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnXFxuXFxucC5lcnJvclN0YXRlXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnXFxuICAgIGNvbG9yOiAkdG9tYXRvXFxuXFxuaW5wdXQjZW1haWxcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgaGVpZ2h0OiA1LjVyZW1cXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW1cXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkZ3JleSwgMjAlKVxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICAmOjpwbGFjZWhvbGRlclxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cXG4gICAgJjpob3ZlclxcbiAgICAgICAgY3Vyc29yOiBncmFiXFxuICAgICZbaW52YWxpZD1cXFwiXFxcIl1cXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR0b21hdG9cXG4gICAgICAgIG91dGxpbmU6IG5vbmVcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHRvbWF0bywgMzAlKVxcbiAgICAgICAgY29sb3I6ICR0b21hdG9cXG4gICAgJlt2YWxpZD0nJ11cXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuXFxuICAgICAgICBvdXRsaW5lOiBub25lXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKGdyZWVuLCA2MCUpXFxuICAgICAgICBjb2xvcjogZ3JlZW5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgaW5wdXQjZW1haWxcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW1cXG4gICAgICAgIFxcblxcbi5zdWJCdXR0b25cXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgaGVpZ2h0OiA1LjVyZW1cXG4gICAgYmFja2dyb3VuZDogbGlnaHRlbigkZGFyay1zbGF0ZS1ncmV5LCA1MCUpXFxuICAgIGNvbG9yOiAkd2hpdGVcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCdcXG4gICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgYm9yZGVyOiBub25lXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxcbiAgICBjdXJzb3I6IGdyYWJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXRcXG4gICAgJltzdWNjZXNzPScnXVxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbFxcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcmstc2xhdGUtZ3JleVxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9tYXRvXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAkdG9tYXRvXFxuXFxuLmVycm9yU3RhdGVcXG4gICAgb3BhY2l0eTogMFxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgJlt2aXNpYmxlPScnXVxcbiAgICAgICAgb3BhY2l0eTogMVxcblxcbi5wb3N0U2lnbnVwXFxuICAgIGhlaWdodDogMFxcbiAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICZbYWN0aXZlPScnXVxcbiAgICAgICAgZGlzcGxheTogZ3JpZFxcbiAgICAgICAgaGVpZ2h0OiBhdXRvXFxuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cmVtIDE3cmVtIDFmciAxMHJlbVxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImltYWdlXFxcIiBcXFwidGl0bGVcXFwiIFxcXCJtZXNzYWdlXFxcIiBcXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcXG5cXG4uc3VjY2Vzc0ltZ1xcbiAgICBncmlkLWFyZWE6IGltYWdlXFxuICAgIG1heC13aWR0aDogNnJlbVxcbiAgICBtYXJnaW4tdG9wOiAyMHJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuc3VjY2Vzc0ltZ1xcbiAgICAgICAgbWFyZ2luLXRvcDogdW5zZXRcXG5cXG4ucG9zdFNpZ251cCBoMiBcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZVxcbiAgICBjb2xvcjogJGRhcmstc2xhdGUtZ3JleVxcbiAgICBmb250LXNpemU6IDRyZW1cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQm9sZCdcXG4gICAgbWFyZ2luLWJsb2NrOiA0cmVtIDNyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLnBvc3RTaWdudXAgaDJcXG4gICAgICAgIG1hcmdpbi1ibG9jazogM3JlbSAycmVtXFxuXFxuLnBvc3RTaWdudXAgcFxcbiAgICBncmlkLWFyZWE6IG1lc3NhZ2VcXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbVxcbiAgICBjb2xvcjogJGRhcmstc2xhdGUtZ3JleVxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtIFxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAucG9zdFNpZ251cCBwXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAgIFxcblxcbnNwYW4udXNlckVtYWlsXFxuICAgIGNvbG9yOiAkZGFyay1zbGF0ZS1ncmV5XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnXFxuXFxuYnV0dG9uLmRpc21pc3NcXG4gICAgaGVpZ2h0OiA1LjVyZW1cXG4gICAgYmFja2dyb3VuZDogJGRhcmstc2xhdGUtZ3JleVxcbiAgICBjb2xvcjogJHdoaXRlXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICBib3JkZXI6IG5vbmVcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxuICAgIG1hcmdpbi10b3A6IDM0cmVtXFxuICAgICY6aG92ZXJcXG4gICAgICAgIGJhY2tncm91bmQ6ICR0b21hdG9cXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggJHRvbWF0b1xcbiAgICAgICAgY3Vyc29yOiBncmFiXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGJ1dHRvbi5kaXNtaXNzXFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtXFxuXFxuLmF0dHJpYnV0aW9uXFxuICAgIHBvc2l0aW9uOiBmaXhlZFxcbiAgICBib3R0b206IDAgIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuLy8gZ2xvYmFsIHZhcmlhYmxlc1xuY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuY29uc3Qgc3ViQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YkJ1dHRvbicpO1xuY29uc3QgZXJyb3JTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvclN0YXRlJyk7XG5jb25zdCBwcmVTaWdudXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlU2lnbnVwJyk7XG5jb25zdCBwb3N0U2lnbnVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RTaWdudXAnKTtcbmNvbnN0IGVtYWlsUmVnZXggPSAvXlxcdytAXFx3K1xcLig/OmNvbXxmcnxjb1xcLnVrfGNvbVxcLmJyfG5ldCkvZ21pO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbi8qIEFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgd2FpdHMgZm9yIHVzZXIgaW5wdXQgYW5kIGNoYW5nZXNcbndoZW4gdGhlIHVzZXIgZmluYWxseSBtZWV0cyB0aGUgcmVxdWlyZW1lbnRzIHRvIHByb2NlZWQgZnVydGhlclxuYnkgYWxsb3dpbmcgdGhlIHN1Ym1pdCBidXR0b24gdG8gYmUgY2xpY2tlZCBvbmNlIHRoZSByZXF1aXJlbWVudHMgYXJlXG5mdWxmaWxsZWQuICovXG5cbmVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSAnVmFsaWQgZW1haWwgcmVxdWlyZWQnO1xuICAgIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsSW5wdXQudmFsdWUpKSB7XG4gICAgICAgIGlmIChlbWFpbElucHV0Lmhhc0F0dHJpYnV0ZSgndmFsaWQnKSkge1xuICAgICAgICAgICAgZW1haWxJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbGlkJyk7XG4gICAgICAgICAgICBlcnJvclN0YXRlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgICAgIGVycm9yU3RhdGUuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgJycpO1xuICAgICAgICAgICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ludmFsaWQnLCAnJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBzdWJCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdzdWNjZXNzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvclN0YXRlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgICAgIGVycm9yU3RhdGUuc2V0QXR0cmlidXRlKCd2aXNpYmxlJywgJycpO1xuICAgICAgICAgICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ludmFsaWQnLCAnJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBzdWJCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdzdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZW1haWxJbnB1dC5oYXNBdHRyaWJ1dGUoJ2ludmFsaWQnKSkge1xuICAgICAgICAgICAgZXJyb3JTdGF0ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZW1haWxJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd2YWxpZCcsICcnKTtcbiAgICAgICAgICAgIGVtYWlsSW5wdXQuYmx1cigpO1xuICAgICAgICAgICAgc3ViQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3VjY2VzcycsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yU3RhdGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGVycm9yU3RhdGUucmVtb3ZlQXR0cmlidXRlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndmFsaWQnLCAnJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0LmJsdXIoKVxuICAgICAgICAgICAgc3ViQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3VjY2VzcycsICcnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8qIEFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3VibWl0IGJ1dHRvbiB0aGF0IHN0b3JlcyB0aGVcbnVzZXIncyBpbnB1dCBpbnRvIGEgdmFyaWFibGUgYW5kIHNldHMgZGF0YSBhdHRyaWJ1dGVzIG9uXG50aGUgZm9ybS9wcmVzaWdudXAvcG9zdHNpZ251cCBwb3J0aW9ucyBvZiB0aGUgcHJvamVjdHMuIFRoZXNlXG5kYXRhIGF0dHJpYnV0ZXMgY29udHJvbCB0aGUgc2l6ZSBhcyB3ZWxsIGFzIHZpc2liaWxpdHkgb2YgdGhlbSAqL1xuXG5zdWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGVtYWlsSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyRW1haWwnKTtcbiAgICAgICAgdXNlckVtYWlsLnRleHRDb250ZW50ID0gZW1haWxBZGRyZXNzO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbmV4dFN1Y2Nlc3MnLCAnJyk7XG4gICAgICAgIHByZVNpZ251cC5zZXRBdHRyaWJ1dGUoJ2luYWN0aXZlJywgJycpO1xuICAgICAgICBwb3N0U2lnbnVwLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=