/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./app/styles/style.css\");\n// import \"./styles/index.scss\";\n\n\nconst shortbtn = document.getElementById(\"submit\")\nshortbtn.addEventListener(\"click\", shortApi);\n\nconst divShort = document.getElementById(\"shorturl\");\nconst divLoader = document.getElementById(\"loader\");\nconst divNewUrl = document.getElementById(\"newurl\");\n\nasync function shortApi(){\n    const longUrl = document.getElementById(\"url_input\");\n    divShort.style.display = \"block\";\n\n    try{\n        let response = await axios.post(\"/api\",{\n            \"longUrl\":longUrl.value\n        })\n\n        newURL(response.data);\n        longUrl.value = \"\";\n    }\n    catch(error){\n        longUrl.value = \"\";\n        // removeAllChildNodes(divShort);\n        errormessage(error)\n    }\n}\n\n// error fun \nfunction newURL(response) {\n\n    const newURL = document.createElement('div');\n    const url = document.createElement(\"span\");\n\n    divShort.style.paddingBottom = \"1em\";\n    newURL.setAttribute(\"id\", \"newurl\");\n    newURL.classList.add(\"message\");\n\n    url.textContent = `${response}`;\n    url.setAttribute(\"id\", \"url\");\n    newURL.appendChild(url);\n    divShort.appendChild(newURL)\n    \n    const buttons = document.createElement(\"span\");\n    buttons.setAttribute(\"class\" ,\"buttons\");\n\n    // copy\n    const copyBtn = document.createElement(\"button\");\n    copyBtn.classList.add('close-loader-btn');\n    copyBtn.textContent = \"copy\";\n    copyBtn.addEventListener(\"click\", ()=>{\n        const copyText = document.getElementById(\"newurl\").textContent; // text\n        const url = copyText.split('copy')[0];\n        navigator.clipboard.writeText(url);                             // copy url\n    });\n    buttons.appendChild(copyBtn);\n\n    // show \n    const sticBtn = document.createElement(\"button\");\n    sticBtn.classList.add('close-loader-btn');\n    sticBtn.textContent = \"show statics\";\n    sticBtn.addEventListener(\"click\", showData);\n    buttons.appendChild(sticBtn);\n\n    newURL.appendChild(buttons)\n}\n\n// error fun \nfunction errormessage(error) {\n\n    divShort.style.paddingBottom = \"1em\";\n    const errorMessage = document.createElement('div')\n    errorMessage.classList.add(\"message\");\n\n    const errspan = document.createElement(\"span\");\n    errspan.textContent = error.response.data.error;\n    errspan.setAttribute(\"id\", \"errspan\");\n    \n    errorMessage.appendChild(errspan);\n    divShort.appendChild(errorMessage);\n    \n    const closeBtn = document.createElement(\"button\");\n    closeBtn.classList.add('close-loader-btn')\n    closeBtn.textContent = \"close\";\n    closeBtn.addEventListener(\"click\", ()=> {\n        document.querySelector(\".message\").remove()\n    });\n    errorMessage.appendChild(closeBtn);\n    \n    setTimeout(()=>{\n        divShort.removeChild(errorMessage)\n    },4000)\n    \n}\n\n// show my stic\nasync function showData(){\n    const idEl = document.getElementById(\"url\");\n    const id = idEl.textContent.split(\"api/\")[1];\n\n    // const divNewUrl = document.getElementById(\"newurl\");\n\n    // if(divNewUrl.hasChild())\n    // if (document.getElementsByClassName(\"divstatics\")){\n    //     document.getElementsByClassName(\"divstatics\").remove();\n    // }\n\n    const divNewUrl = document.getElementById(\"newurl\")\n    // removeAllChildNodes(div)\n    try {\n        const response = await axios.get(`/api/statistic/${id}`)\n        const data = (response.data);\n        const div = document.createElement(\"div\");\n        div.setAttribute(\"class\",\"divstatics\")\n    \n        div.innerText=(`Creation Date: ${data.date}  \n        Redirect Count: ${data.redirectCount}`);\n        divNewUrl.appendChild(div);\n        \n    } catch (error) {\n        console.log('err to show');\n    }\n}\n// remove childs\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ \"data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\\n  font-size: 16px;\\n  color: #222;\\n  background-color: #fff;\\n  text-align: center;\\n  line-height: 1.4em;\\n  /* background-color:gray; */\\n  background-color: rgb(177, 214, 206);\\n}\\n\\nmain {\\n  padding: 0;\\n  margin-top: 40px;\\n  background-color: rgb(75, 117, 156);\\n}\\n\\nh3 {\\n  margin-top: 1em;\\n}\\n\\ninput {\\n  padding: 5px;\\n}\\n\\ninput[type='text'] {\\n  width: 220px;\\n  text-align: center;\\n}\\n\\n/* ----navbar---- */\\n#log{\\n  display: flex;\\n}\\nul {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n  background-color: rgb(75, 117, 156);\\n}\\nli {\\n  float: left;\\n  border-right: 1px solid lightblue ;\\n}\\nli a {\\n  font-family:'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;\\n  display: block;\\n  color: white;\\n  text-align: center;\\n  padding: 14px 16px;\\n  text-decoration: none;\\n}\\n\\nli a:hover:not(#log) {\\n  background-color: rgb(67, 95, 156);\\n}\\n.active {\\n  border-left: 1px solid lightblue ;\\n  float: right;\\n  color: #ffffff;\\n}\\n/* ----navbar---- */\\n\\n/* url */\\n#longurl{\\n  padding: 1em;\\n  font-size: 1.5em;\\n  border-bottom: 3px solid #111;\\n}\\n#shorturl{\\n  margin: 1em;\\n}\\n#url{\\n  font-size: 1.3em;\\n  font-style: normal;\\n  font-family: Georgia, Times, 'Times New Roman', serif;\\n}\\n#newurl{\\n  padding: 1em;\\n  text-align: left;\\n}\\n.divstatics{\\n  font-style: normal;\\n  font-family: Verdana, Tahoma, sans-serif;\\n  font-size: 0.9em;\\n  padding: 0.5em;\\n}\\n\\n#url_input{\\n  border: 0.1em solid;\\n  border-radius: 1em;\\n\\n  text-align: center;\\n  font-size: 0.7em;\\n  font-style: italic;\\n  letter-spacing: 0.05em;\\n\\n  transition: all .5s ease-in-out;\\n  /* background-color: #b3ecf0; */\\n  min-width: 300px;\\n}\\n\\n/* -----copy------ */\\n.tooltip {\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n.tooltip .tooltiptext {\\n  visibility: hidden;\\n  width: 140px;\\n  background-color: #555;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 6px;\\n  padding: 5px;\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 150%;\\n  left: 50%;\\n  margin-left: -75px;\\n  opacity: 0;\\n  transition: opacity 0.3s;\\n}\\n\\n.tooltip .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: #555 transparent transparent transparent;\\n}\\n\\n.tooltip:hover .tooltiptext {\\n  visibility: visible;\\n  opacity: 1;\\n}\\n/* -----copy------ */\\n\\n\\n/* ---- message---- */\\n.message{\\n  padding-top: 0.5em;\\n  padding-bottom: 0.5em;\\n  background: rgba(175, 218, 233, 0.5);\\n  border: 0.1em solid;\\n  border-radius: 1em;\\n  font-size: 1em;\\n  flex:auto;\\n  margin-left:5%;\\n  margin-right:5%;\\n  margin-top:1em ;\\n  margin-bottom:1em ;\\n}\\n.buttons{\\n  float:right\\n}\\n.close-loader-btn{\\n  /* float: right; */\\n  margin-left: 0.5em;\\n  margin-right: 0.5em;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  background: #f7e78f;\\n  border-radius: 5px;\\n  display: inline-block;\\n  border: none;\\n  transition: all 0.4s ease 0s;\\n}\\n.close-loader-btn:hover{\\n  background: #b0b658;\\n  /* letter-spacing: 1px;\\n  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\\n  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\\n  box-shadow: 5px 40px -10px rgba(0,0,0,0.57); */\\n  transition: all 0.4s ease 0s;\\n}\\n\\n#errspan{\\n  font-size: 1.3em;\\n  font-style: normal;\\n  font-family: Georgia, Times, 'Times New Roman', serif;\\n}\\n/* ----err message---- */\\n\\n\\n/* ------button------ */\\n.center-content {\\n  display: grid;\\n  place-content: center;\\n}\\n.container {\\n  height: 100vh;\\n}\\n.submit-feedback {\\n  margin-left: 0.5em;\\n  margin-right: 0.5em;\\n\\tpadding: 5px;\\n  font-size: 24px;\\n  cursor: pointer;\\n  \\n\\tborder-radius: 7px;\\n\\tborder-bottom-left-radius: 0;\\n\\n\\tbackground-color: #ffe5e5;\\n\\tcolor:#53488d;\\n\\n\\ttransition: all 0.3s;\\n  \\n}\\n.submit-feedback:hover {\\n  letter-spacing: 0.5px;\\n  transition: all 0.4s ease 0s;\\n  border-radius: 6px;\\n\\n  color: #53488d;\\n  background-color: #ffe5e5;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\n  animation: animatedBackground 5s linear infinite alternate;\\n}\\n@keyframes animatedBackground {\\n\\tfrom {\\n\\t\\tbackground-position: 0 0;\\n\\t}\\n\\tto {\\n\\t\\tbackground-position: 100% 0;\\n\\t}\\n}\\n/* -----button----- */\\n\\n\\n/* ------icons------ */\\nfooter {\\n  background-color: rgb(75, 117, 156);\\n  color:#fff;\\n  width: 100%;\\n  padding: 0.8em;\\n  position: fixed;\\n  top: 80%;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n#by{\\n  /* color: rgb(177, 214, 206); */\\n  color: #fff;\\n  font-style: italic;\\n  text-decoration:none;\\n}\\n#by:hover{\\n  color: #111;\\n}\\n*:focus,\\n*:active {\\n  outline: none !important;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n.wrapper {\\n  display: inline-flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.wrapper .icon {\\n  position: relative;\\n  background-color: #ffffff;\\n  border-radius: 50%;\\n  padding: 10px;\\n  margin-top: 5px;\\n  margin-left: 25px;\\n  width: 30px;\\n  height: 30px;\\n  font-size: 18px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\n  cursor: pointer;\\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n  color: #222;\\n}\\n.wrapper .tooltip {\\n  position: absolute;\\n  top: 0;\\n  font-size: 14px;\\n  background-color: #ffffff;\\n  color: #ffffff;\\n  padding: 5px 8px;\\n  border-radius: 5px;\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n}\\n.wrapper .tooltip::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 8px;\\n  width: 8px;\\n  background-color: #ffffff;\\n  bottom: -3px;\\n  left: 50%;\\n  transform: translate(-50%) rotate(45deg);\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n}\\n.wrapper .icon:hover .tooltip {\\n  top: -45px;\\n  opacity: 1;\\n  visibility: visible;\\n  pointer-events: auto;\\n}\\n.wrapper .icon:hover span,\\n.wrapper .icon:hover .tooltip {\\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\\n}\\n.wrapper .facebook:hover,\\n.wrapper .facebook:hover .tooltip,\\n.wrapper .facebook:hover .tooltip::before {\\n  background-color: #3b5999;\\n  color: #ffffff;\\n}\\n.wrapper .instagram:hover,\\n.wrapper .instagram:hover .tooltip,\\n.wrapper .instagram:hover .tooltip::before {\\n  background-color: #e1306c;\\n  color: #ffffff;\\n}\\n.wrapper .github:hover,\\n.wrapper .github:hover .tooltip,\\n.wrapper .github:hover .tooltip::before {\\n  background-color: #333333;\\n  color: #ffffff;\\n}\\n/* ------icons------ */\\n\\n/* --------------------------------------- media --------------------------------- */\\n/* --------------------------------------- media --------------------------------- */\\n/* --------------------------------------- media --------------------------------- */\\n/* --------------------------------------- media --------------------------------- */\\n/* --------------------------------------- media --------------------------------- */\\n/* --------------------------------------- media --------------------------------- */\\n\\n\\n  /* heroku \\n  (min-width:300px) and (max-width:450px)\\n  */\\n\\n@media (max-width:900px) {\\n  body{\\n    font-size: 30px;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n  }\\n  main {\\n    padding: 0;\\n    margin-top: 40px;\\n    background-color: rgb(75, 117, 156);\\n  }\\n  \\n  h1 {\\n    margin-top: 1em;\\n    font-size: 3em;\\n  }\\n  h2 {\\n    padding: 0.8em;\\n    margin-top: 4em;\\n    font-size: 2em;\\n  }\\n  /* ----navbar---- */\\n  #navbar{\\n    /* text-align: center; */\\n    \\n    padding: auto;\\n    margin: auto;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    height: 4em;\\n  }\\n  li a{\\n    font-size: 1.4em;\\n    border-right: 1px solid lightblue ;\\n    /* width: 100%;\\n    height: 100%; */\\n  }\\n  .active {\\n    float: none;\\n    border: none;\\n  }\\n\\n  /* url */\\n  #longurl{\\n    padding: 0.8em;\\n    font-size: 1.9em;\\n    border-bottom: 3px solid #111;\\n  }\\n  #shorturl{\\n    margin: 3em;\\n  }\\n  #url{\\n    font-size: 1.7em;\\n    font-style: normal;\\n    font-family: Georgia, Times, 'Times New Roman', serif;\\n  }\\n  #newurl{\\n    padding: 1em;\\n    text-align: left;\\n  }\\n  .divstatics{\\n    font-style: normal;\\n    font-family: Verdana, Tahoma, sans-serif;\\n    font-size: 0.9em;\\n    padding: 0.5em;\\n  }\\n  \\n  #url_input{\\n    min-width: 12em;\\n  }\\n  \\n  \\n  /* ------button------ */\\n  #submit{\\n    margin-top: 1em;\\n  }\\n  .submit-feedback {\\n    margin: 10em;\\n    /* margin-left: 0.5em;\\n    margin-right: 0.5em; */\\n    padding: 10px;\\n    font-size: 30px;\\n    cursor: pointer;\\n    \\n    border-radius: 10px;\\n    border-bottom-left-radius: 0;\\n  \\n    background-color: #ffe5e5;\\n    color:#53488d;\\n  \\n    transition: all 0.3s;\\n    \\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./app/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/styles/style.css":
/*!******************************!*\
  !*** ./app/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./app/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./app/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3Csvg width=%2752%27 height=%2726%27 viewBox=%270 0 52 26%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffacac%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://calc/data:image/svg+xml,%253Csvg_width=%252752%2527_height=%252726%2527_viewBox=%25270_0_52_26%2527_xmlns=%2527http://www.w3.org/2000/svg%2527%253E%253Cg_fill=%2527none%2527_fill-rule=%2527evenodd%2527%253E%253Cg_fill=%2527%2523ffacac%2527_fill-opacity=%25270.4%2527%253E%253Cpath_d=%2527M10_10c0-2.21-1.79-4-4-4-3.314_0-6-2.686-6-6h2c0_2.21_1.79_4_4_4_3.314_0_6_2.686_6_6_0_2.21_1.79_4_4_4_3.314_0_6_2.686_6_6_0_2.21_1.79_4_4_4v2c-3.314_0-6-2.686-6-6_0-2.21-1.79-4-4-4-3.314_0-6-2.686-6-6zm25.464-1.95l8.486_8.486-1.414_1.414-8.486-8.486_1.414-1.414z%2527_/%253E%253C/g%253E%253C/g%253E%253C/svg%253E?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;