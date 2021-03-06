/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\nvar inputElement = document.getElementById('inputTodo');\nvar todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntodo.renderList(todo);\ninputElement.addEventListener('keyup', function (e) {\n  var list = todo.getList();\n\n  if (e.key === 'Enter') {\n    var obj = {\n      id: list.length,\n      value: inputElement.value,\n      isComplete: false\n    };\n    list.push(obj);\n    todo.setListValue(list);\n    clean();\n    todo.renderList(todo);\n  }\n});\n\nfunction clean() {\n  inputElement.value = '';\n}\n\ndocument.getElementById('btnAll').addEventListener('click', function () {\n  todo.showAll();\n});\ndocument.getElementById('btnComplete').addEventListener('click', function () {\n  todo.showCompleted();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Todo =\n/*#__PURE__*/\nfunction () {\n  function Todo() {\n    var arrayList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var eleHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    _classCallCheck(this, Todo);\n\n    this.arrayList = arrayList;\n    this.eleHtml = eleHtml;\n  }\n\n  _createClass(Todo, [{\n    key: \"setListValue\",\n    value: function setListValue(value) {\n      this.arrayList = value;\n      this.storeData(value);\n    }\n  }, {\n    key: \"setEleValue\",\n    value: function setEleValue(value) {\n      this.eleHtml = value;\n    } // get element to hanlde event click\n\n  }, {\n    key: \"getEleHtml\",\n    value: function getEleHtml() {\n      var edit = document.getElementsByClassName('btn-edit');\n      var save = document.getElementsByClassName('btn-save');\n      var cancel = document.getElementsByClassName('btn-cancel');\n      var remove = document.getElementsByClassName('btn-remove');\n      var undoLet = document.getElementsByClassName('btn-undo');\n      var list = [edit, save, cancel, remove, undoLet];\n      this.setEleValue(list);\n      var that = this;\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = list[0][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var key = _step.value;\n          key.addEventListener('click', function () {\n            var id = this.getAttribute('idbutton');\n            that.editItem(id);\n          });\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = list[1][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var _key = _step2.value;\n\n          _key.addEventListener('click', function () {\n            var id = this.getAttribute('idbutton');\n            that.saveEdit(id);\n          });\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n            _iterator2[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = list[2][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var _key2 = _step3.value;\n\n          _key2.addEventListener('click', function () {\n            var id = this.getAttribute('idbutton');\n            that.cancelSave(id);\n          });\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n            _iterator3[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = list[3][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var _key3 = _step4.value;\n\n          _key3.addEventListener('click', function () {\n            var id = this.getAttribute('idbutton');\n            that.removeItem(id);\n          });\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n            _iterator4[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n\n      var _iteratorNormalCompletion5 = true;\n      var _didIteratorError5 = false;\n      var _iteratorError5 = undefined;\n\n      try {\n        for (var _iterator5 = list[4][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n          var _key4 = _step5.value;\n\n          _key4.addEventListener('click', function () {\n            var id = this.getAttribute('idbutton');\n            that.undo(id);\n          });\n        }\n      } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion5 && _iterator5[\"return\"] != null) {\n            _iterator5[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError5) {\n            throw _iteratorError5;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"getList\",\n    value: function getList() {\n      var arrObj = JSON.parse(localStorage.getItem('items'));\n\n      if (!arrObj) {\n        return [];\n      }\n\n      var list = _toConsumableArray(arrObj);\n\n      list.sort(function (a, b) {\n        return a.id - b.id;\n      });\n      this.setListValue(list);\n      return list;\n    } // render list completed\n\n  }, {\n    key: \"renderCompleted\",\n    value: function renderCompleted() {\n      var str = '';\n      var list = this.getList();\n      var element = list.map(function (item, index) {\n        if (item.isComplete) {\n          return \"<li class=\\\"list-group-item\\\" \\n                        id=\\\"\".concat(item.id, \"\\\">\").concat(item.value, \" \\n                        <button class=\\\"float-right fas fa-undo btn btn-info btn-undo\\\" \\n                        idbutton=\\\"\").concat(item.id, \"\\\">\\n                        </button></li>\");\n        }\n      });\n      element.forEach(function (item) {\n        if (item !== undefined) {\n          str += item;\n        }\n      });\n      document.getElementById('list-item').innerHTML = str;\n      this.getEleHtml();\n    } // render list task to do\n\n  }, {\n    key: \"renderList\",\n    value: function renderList() {\n      var list = this.getList();\n      var str = '';\n      var element = list.map(function (item, index) {\n        if (!item.isComplete) {\n          return \"<li class=\\\"list-group-item\\\" \\n                        id=\\\"\".concat(item.id, \"\\\">\").concat(item.value, \" \\n                        <button class=\\\"float-right fas fa-trash btn btn-danger ml-2 btn-remove\\\" \\n                        idbutton=\\\"\").concat(item.id, \"\\\">\\n                        </button>\\n                        <button class=\\\"float-right fas fa-pencil-alt btn btn-warning btn-edit\\\" \\n                         idbutton=\\\"\").concat(item.id, \"\\\">\\n                        </button></li>\");\n        }\n      });\n      element.forEach(function (item) {\n        if (item !== undefined) {\n          str += item;\n        }\n      });\n      document.getElementById('list-item').innerHTML = str;\n      this.getEleHtml();\n    } // remove item from list\n\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(id) {\n      var list = this.getList();\n      list.find(function (item) {\n        if (item.id === parseInt(id)) {\n          item.isComplete = !item.isComplete;\n        }\n      });\n      this.setListValue(list);\n      this.storeData(list);\n      this.renderList();\n    } // edit item\n\n  }, {\n    key: \"editItem\",\n    value: function editItem(id) {\n      var list = this.getList();\n      var item = list.find(function (item) {\n        if (item.id === parseInt(id)) {\n          return item;\n        }\n      });\n      document.getElementById(item.id).innerHTML = \"<input id=\\\"input\".concat(item.id, \"\\\" value=\\\"\").concat(item.value, \"\\\"/>\\n                                                        <button class=\\\"float-right btn btn-success ml-2 btn-save\\\" \\n                                                        idbutton=\\\"\").concat(item.id, \"\\\">Save\\n                                                        </button>\\n                                                        <button class=\\\"float-right  btn btn-primary btn-cancel\\\" \\n                                                        idbutton=\\\"\").concat(item.id, \"\\\">Cancel\\n                                                        </button>\");\n      this.getEleHtml();\n    } // cancel save button when edit\n\n  }, {\n    key: \"cancelSave\",\n    value: function cancelSave(id) {\n      var list = this.getList();\n      var item = list.find(function (item) {\n        if (item.id === parseInt(id)) {\n          return item;\n        }\n      });\n      document.getElementById(item.id).innerHTML = \"\".concat(item.value, \" \\n                                                    <button class=\\\"float-right fas fa-trash btn btn-danger ml-2 btn-remove\\\" \\n                                                    idbutton=\\\"\").concat(item.id, \"\\\">\\n                                                    </button>\\n                                                    <button class=\\\"float-right fas fa-pencil-alt btn btn-warning btn-edit\\\" \\n                                                    idbutton=\\\"\").concat(item.id, \"\\\">\\n                                                    </button>\");\n      this.getEleHtml();\n    } // button save when edit\n\n  }, {\n    key: \"saveEdit\",\n    value: function saveEdit(id) {\n      var list = this.getList();\n      var item = list.find(function (item) {\n        if (item.id === parseInt(id)) {\n          return item;\n        }\n      });\n      var pos = list.indexOf(item);\n      item.value = document.getElementById(\"input\".concat(item.id)).value;\n      list.splice(pos, 1, item);\n      this.setListValue(list);\n      this.storeData(list);\n      document.getElementById(item.id).innerHTML = \"\".concat(item.value, \" \\n                                                    <button class=\\\"float-right fas fa-trash btn btn-danger ml-2 btn-remove\\\" \\n                                                    idbutton=\\\"\").concat(item.id, \"\\\">\\n                                                    </button>\\n                                                    <button class=\\\"float-right fas fa-pencil-alt btn btn-warning btn-edit\\\" \\n                                                    idbutton=\\\"\").concat(item.id, \"\\\">\\n                                                    </button>\");\n      this.getEleHtml();\n    }\n  }, {\n    key: \"undo\",\n    value: function undo(id) {\n      var list = this.getList();\n      list.forEach(function (item) {\n        if (item.id === parseInt(id)) {\n          item.isComplete = !item.isComplete;\n        }\n      });\n      this.storeData(list);\n      this.renderCompleted();\n    }\n  }, {\n    key: \"showCompleted\",\n    value: function showCompleted() {\n      this.renderCompleted();\n    }\n  }, {\n    key: \"showAll\",\n    value: function showAll() {\n      this.renderList();\n    }\n  }, {\n    key: \"storeData\",\n    value: function storeData(list) {\n      list.sort(function (a, b) {\n        return a.id - b.id;\n      });\n      localStorage.setItem('items', JSON.stringify(list));\n    }\n  }]);\n\n  return Todo;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });