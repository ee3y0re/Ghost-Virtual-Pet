/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ghost */ \"./src/scripts/ghost.js\");\nfunction _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var sassper = new _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__.Ghost(); // function getHungry() {\n  //   return new Promise(sayHunger => {\n  //     setTimeout(() => {\n  //       sassper.hungry();\n  //       sayHunger() //grab html element to show this on screen\n  //     }, 10000);\n  //   });\n  // }\n  // async function callHungry() {\n  //   const speak = await getHungry();\n  //   console.log(speak)\n  // }\n  // callHungry();\n\n  var repeatHunger;\n\n  function hungryV2() {\n    console.log(\"start\");\n\n    if (!repeatHunger) {\n      repeatHunger = setInterval(getHungry2, 5000);\n    }\n  }\n\n  function getHungry2() {\n    console.log(\"running hunger code\");\n    var hungryElm = document.getElementsByClassName(\"hunger\");\n\n    if (hungryElm === \"\") {\n      \"That disgusting thing hanging off your nose reminds me of boo-gers.<br> Speaking of which, I'm hungry!\", _readOnlyError(\"hungryElm\");\n    } else {\n      hungryElm === \"\";\n    }\n  }\n\n  function notHungryAnymore() {\n    clearInterval(repeatHunger);\n    repeatHunger = null;\n  }\n\n  hungryV2();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsT0FBTyxHQUFHLElBQUlILGlEQUFKLEVBQWhCLENBRGtELENBR2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQUlJLFlBQUo7O0FBRUEsV0FBU0MsUUFBVCxHQUFvQjtBQUNsQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7QUFDQSxRQUFJLENBQUNILFlBQUwsRUFBbUI7QUFDakJBLE1BQUFBLFlBQVksR0FBR0ksV0FBVyxDQUFDQyxVQUFELEVBQWEsSUFBYixDQUExQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0EsVUFBVCxHQUFxQjtBQUNuQkgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxRQUFNRyxTQUFTLEdBQUdULFFBQVEsQ0FBQ1Usc0JBQVQsQ0FBZ0MsUUFBaEMsQ0FBbEI7O0FBQ0EsUUFBSUQsU0FBUyxLQUFLLEVBQWxCLEVBQXNCO0FBQ1IsOEdBQVo7QUFDRCxLQUZELE1BRU87QUFDTEEsTUFBQUEsU0FBUyxLQUFLLEVBQWQ7QUFDRDtBQUNGOztBQUVELFdBQVNFLGdCQUFULEdBQTRCO0FBQzFCQyxJQUFBQSxhQUFhLENBQUNULFlBQUQsQ0FBYjtBQUNBQSxJQUFBQSxZQUFZLEdBQUcsSUFBZjtBQUNEOztBQUVEQyxFQUFBQSxRQUFRO0FBQ1QsQ0E1Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HaG9zdC1WaXJ0dWFsLVBldC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2hvc3R9IGZyb20gJy4vc2NyaXB0cy9naG9zdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHNhc3NwZXIgPSBuZXcgR2hvc3QoKTtcblxuICAvLyBmdW5jdGlvbiBnZXRIdW5ncnkoKSB7XG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKHNheUh1bmdlciA9PiB7XG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgc2Fzc3Blci5odW5ncnkoKTtcbiAgLy8gICAgICAgc2F5SHVuZ2VyKCkgLy9ncmFiIGh0bWwgZWxlbWVudCB0byBzaG93IHRoaXMgb24gc2NyZWVuXG4gIC8vICAgICB9LCAxMDAwMCk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBhc3luYyBmdW5jdGlvbiBjYWxsSHVuZ3J5KCkge1xuICAvLyAgIGNvbnN0IHNwZWFrID0gYXdhaXQgZ2V0SHVuZ3J5KCk7XG4gIC8vICAgY29uc29sZS5sb2coc3BlYWspXG4gIC8vIH1cblxuICAvLyBjYWxsSHVuZ3J5KCk7XG5cbiAgbGV0IHJlcGVhdEh1bmdlcjtcblxuICBmdW5jdGlvbiBodW5ncnlWMigpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIpXG4gICAgaWYgKCFyZXBlYXRIdW5nZXIpIHtcbiAgICAgIHJlcGVhdEh1bmdlciA9IHNldEludGVydmFsKGdldEh1bmdyeTIsIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEh1bmdyeTIoKXtcbiAgICBjb25zb2xlLmxvZyhcInJ1bm5pbmcgaHVuZ2VyIGNvZGVcIilcbiAgICBjb25zdCBodW5ncnlFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaHVuZ2VyXCIpXG4gICAgaWYgKGh1bmdyeUVsbSA9PT0gXCJcIikge1xuICAgICAgaHVuZ3J5RWxtID0gXCJUaGF0IGRpc2d1c3RpbmcgdGhpbmcgaGFuZ2luZyBvZmYgeW91ciBub3NlIHJlbWluZHMgbWUgb2YgYm9vLWdlcnMuPGJyPiBTcGVha2luZyBvZiB3aGljaCwgSSdtIGh1bmdyeSFcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaHVuZ3J5RWxtID09PSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdEh1bmdyeUFueW1vcmUoKSB7XG4gICAgY2xlYXJJbnRlcnZhbChyZXBlYXRIdW5nZXIpO1xuICAgIHJlcGVhdEh1bmdlciA9IG51bGw7XG4gIH1cblxuICBodW5ncnlWMigpO1xufSk7Il0sIm5hbWVzIjpbIkdob3N0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Fzc3BlciIsInJlcGVhdEh1bmdlciIsImh1bmdyeVYyIiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwiZ2V0SHVuZ3J5MiIsImh1bmdyeUVsbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJub3RIdW5ncnlBbnltb3JlIiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ghost.js":
/*!******************************!*\
  !*** ./src/scripts/ghost.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ghost\": function() { return /* binding */ Ghost; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Ghost = /*#__PURE__*/function () {\n  function Ghost() {\n    _classCallCheck(this, Ghost);\n\n    this.satiety = 10;\n    this.hygiene = true;\n    this.affection = 0;\n  }\n\n  _createClass(Ghost, [{\n    key: \"hungry\",\n    value: function hungry() {\n      this.satiety -= 1;\n    }\n  }, {\n    key: \"full\",\n    value: function full() {\n      this.satiety += 1;\n    }\n  }, {\n    key: \"dirty\",\n    value: function dirty() {\n      this.hygiene -= 1;\n    }\n  }, {\n    key: \"clean\",\n    value: function clean() {\n      this.hygiene += 1;\n    } //i think this will be async\n\n  }, {\n    key: \"receiveAffection\",\n    value: function receiveAffection() {\n      this.affection += 1;\n    }\n  }, {\n    key: \"burning\",\n    value: function burning() {\n      this.affection -= 1;\n    } //test methods\n\n  }, {\n    key: \"testSatiety\",\n    value: function testSatiety() {\n      console.log(this.satiety);\n    }\n  }]);\n\n  return Ghost;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9naG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0lBRU1BO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNEOzs7O1dBRUQsa0JBQVM7QUFDUCxXQUFLRixPQUFMLElBQWdCLENBQWhCO0FBQ0Q7OztXQUNELGdCQUFPO0FBQ0wsV0FBS0EsT0FBTCxJQUFnQixDQUFoQjtBQUNEOzs7V0FFRCxpQkFBUTtBQUNOLFdBQUtDLE9BQUwsSUFBZ0IsQ0FBaEI7QUFDRDs7O1dBQ0QsaUJBQVE7QUFDTixXQUFLQSxPQUFMLElBQWdCLENBQWhCO0FBQ0QsTUFFRDs7OztXQUNBLDRCQUFtQjtBQUNqQixXQUFLQyxTQUFMLElBQWtCLENBQWxCO0FBQ0Q7OztXQUVELG1CQUFVO0FBQ1IsV0FBS0EsU0FBTCxJQUFrQixDQUFsQjtBQUNELE1BRUQ7Ozs7V0FFQSx1QkFBYztBQUNaQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSixPQUFqQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vR2hvc3QtVmlydHVhbC1QZXQvLi9zcmMvc2NyaXB0cy9naG9zdC5qcz81Y2NlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7R2hvc3R9XG5cbmNsYXNzIEdob3N0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zYXRpZXR5ID0gMTA7IFxuICAgIHRoaXMuaHlnaWVuZSA9IHRydWU7IFxuICAgIHRoaXMuYWZmZWN0aW9uID0gMDsgXG4gIH1cblxuICBodW5ncnkoKSB7XG4gICAgdGhpcy5zYXRpZXR5IC09IDE7XG4gIH1cbiAgZnVsbCgpIHtcbiAgICB0aGlzLnNhdGlldHkgKz0gMTtcbiAgfVxuXG4gIGRpcnR5KCkge1xuICAgIHRoaXMuaHlnaWVuZSAtPSAxO1xuICB9XG4gIGNsZWFuKCkge1xuICAgIHRoaXMuaHlnaWVuZSArPSAxO1xuICB9XG5cbiAgLy9pIHRoaW5rIHRoaXMgd2lsbCBiZSBhc3luY1xuICByZWNlaXZlQWZmZWN0aW9uKCkge1xuICAgIHRoaXMuYWZmZWN0aW9uICs9IDE7XG4gIH1cblxuICBidXJuaW5nKCkge1xuICAgIHRoaXMuYWZmZWN0aW9uIC09IDE7XG4gIH1cblxuICAvL3Rlc3QgbWV0aG9kc1xuXG4gIHRlc3RTYXRpZXR5KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2F0aWV0eSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiR2hvc3QiLCJzYXRpZXR5IiwiaHlnaWVuZSIsImFmZmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ghost.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HaG9zdC1WaXJ0dWFsLVBldC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;