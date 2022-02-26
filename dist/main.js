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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ghost */ \"./src/scripts/ghost.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //background and game\n  var canvas = document.getElementById(\"playground\");\n  var ctx = canvas.getContext(\"2d\");\n  ctx.canvas.width = 1000; //size of canvas and play area\n\n  ctx.canvas.height = 700; //size of canvas and play area\n\n  var skies = new Image(); //initialized presence of image bg\n\n  skies.src = \"../assets/sky_digital_moons.png\"; //linked image bg to source in assets folder\n\n  skies.onload = function () {\n    //begin the drawing\n    ctx.drawImage(skies, 0, 100); //give breathing room above\n  }; //does not follow resizing dynamically\n  // the properties are changing \n  // but for some reason, the object method isn't being defined on console\n\n\n  var test = new _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__.Ghost();\n  console.log(test);\n  test.hungry();\n  console.log(test);\n  test.full();\n  console.log(test);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWxEO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQUQsRUFBQUEsR0FBRyxDQUFDRixNQUFKLENBQVdJLEtBQVgsR0FBbUIsSUFBbkIsQ0FMa0QsQ0FLekI7O0FBQ3pCRixFQUFBQSxHQUFHLENBQUNGLE1BQUosQ0FBV0ssTUFBWCxHQUFvQixHQUFwQixDQU5rRCxDQU16Qjs7QUFDekIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZCxDQVBrRCxDQU92Qjs7QUFDM0JELEVBQUFBLEtBQUssQ0FBQ0UsR0FBTixHQUFZLGlDQUFaLENBUmtELENBUUo7O0FBQzlDRixFQUFBQSxLQUFLLENBQUNHLE1BQU4sR0FBZSxZQUFNO0FBQUU7QUFDckJQLElBQUFBLEdBQUcsQ0FBQ1EsU0FBSixDQUFjSixLQUFkLEVBQXFCLENBQXJCLEVBQXdCLEdBQXhCLEVBRG1CLENBQ1c7QUFDL0IsR0FGRCxDQVRrRCxDQWFsRDtBQU9BO0FBQ0E7OztBQUNBLE1BQU1LLElBQUksR0FBRyxJQUFJZCxpREFBSixFQUFiO0FBQ0FlLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FBLEVBQUFBLElBQUksQ0FBQ0csTUFBTDtBQUNBRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBQSxFQUFBQSxJQUFJLENBQUNJLElBQUw7QUFDQUgsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDRCxDQTVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL0dob3N0LVZpcnR1YWwtUGV0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHaG9zdH0gZnJvbSAnLi9zY3JpcHRzL2dob3N0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAvL2JhY2tncm91bmQgYW5kIGdhbWVcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5Z3JvdW5kXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjdHguY2FudmFzLndpZHRoID0gMTAwMDsgLy9zaXplIG9mIGNhbnZhcyBhbmQgcGxheSBhcmVhXG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gNzAwOyAvL3NpemUgb2YgY2FudmFzIGFuZCBwbGF5IGFyZWFcbiAgY29uc3Qgc2tpZXMgPSBuZXcgSW1hZ2UoKTsgLy9pbml0aWFsaXplZCBwcmVzZW5jZSBvZiBpbWFnZSBiZ1xuICBza2llcy5zcmMgPSBcIi4uL2Fzc2V0cy9za3lfZGlnaXRhbF9tb29ucy5wbmdcIiAvL2xpbmtlZCBpbWFnZSBiZyB0byBzb3VyY2UgaW4gYXNzZXRzIGZvbGRlclxuICBza2llcy5vbmxvYWQgPSAoKSA9PiB7IC8vYmVnaW4gdGhlIGRyYXdpbmdcbiAgICBjdHguZHJhd0ltYWdlKHNraWVzLCAwLCAxMDApOyAvL2dpdmUgYnJlYXRoaW5nIHJvb20gYWJvdmVcbiAgfVxuXG4gIC8vZG9lcyBub3QgZm9sbG93IHJlc2l6aW5nIGR5bmFtaWNhbGx5XG5cblxuXG5cblxuXG4gIC8vIHRoZSBwcm9wZXJ0aWVzIGFyZSBjaGFuZ2luZyBcbiAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiwgdGhlIG9iamVjdCBtZXRob2QgaXNuJ3QgYmVpbmcgZGVmaW5lZCBvbiBjb25zb2xlXG4gIGNvbnN0IHRlc3QgPSBuZXcgR2hvc3QoKVxuICBjb25zb2xlLmxvZyh0ZXN0KVxuICB0ZXN0Lmh1bmdyeSgpXG4gIGNvbnNvbGUubG9nKHRlc3QpXG4gIHRlc3QuZnVsbCgpXG4gIGNvbnNvbGUubG9nKHRlc3QpXG59KTsiXSwibmFtZXMiOlsiR2hvc3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsInNraWVzIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImh1bmdyeSIsImZ1bGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ghost.js":
/*!******************************!*\
  !*** ./src/scripts/ghost.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ghost\": function() { return /* binding */ Ghost; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Ghost = /*#__PURE__*/function () {\n  // // setting default start stats\n  function Ghost() {\n    _classCallCheck(this, Ghost);\n\n    // // level of fullness opposed to hunger\n    this.satiety = 10; // // true means no presence of star poop\n\n    this.hygiene = true; // // level meter, affection button is unlocked when ghost is full and clean\n    // // disabled for a moment after user uses\n    // // max lvl 3 for ghost to come to life\n\n    this.affection = 0; // if true, level meter is able to go up\n    // if falselevel meter goes down by 1\n  }\n\n  _createClass(Ghost, [{\n    key: \"hungry\",\n    value: function hungry() {\n      this.satiety -= 1;\n    }\n  }, {\n    key: \"full\",\n    value: function full() {\n      this.satiety += 1;\n    }\n  }, {\n    key: \"dirty\",\n    value: function dirty() {\n      this.hygiene -= 1;\n    }\n  }, {\n    key: \"clean\",\n    value: function clean() {\n      this.hygiene += 1;\n    } //i think this will be async\n\n  }, {\n    key: \"receiveAffection\",\n    value: function receiveAffection() {\n      this.affection += 1;\n    }\n  }, {\n    key: \"burning\",\n    value: function burning() {\n      this.affection -= 1;\n    } // I think i will do the text or levels as a separate class\n    // Next todo: export and import ghost and find on console\n\n  }]);\n\n  return Ghost;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9naG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0lBRU1BO0FBQ0o7QUFDQSxtQkFBYztBQUFBOztBQUNaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWYsQ0FGWSxDQUdaOztBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmLENBSlksQ0FLWjtBQUNBO0FBQ0E7O0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQixDQVJZLENBU1o7QUFDQTtBQUVEOzs7O1dBRUQsa0JBQVE7QUFDTixXQUFLRixPQUFMLElBQWdCLENBQWhCO0FBQ0Q7OztXQUNELGdCQUFNO0FBQ0osV0FBS0EsT0FBTCxJQUFnQixDQUFoQjtBQUNEOzs7V0FFRCxpQkFBTztBQUNMLFdBQUtDLE9BQUwsSUFBZ0IsQ0FBaEI7QUFDRDs7O1dBQ0QsaUJBQU87QUFDTCxXQUFLQSxPQUFMLElBQWdCLENBQWhCO0FBQ0QsTUFFRDs7OztXQUNBLDRCQUFrQjtBQUNoQixXQUFLQyxTQUFMLElBQWtCLENBQWxCO0FBQ0Q7OztXQUVELG1CQUFTO0FBQ1AsV0FBS0EsU0FBTCxJQUFrQixDQUFsQjtBQUNELE1BRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0dob3N0LVZpcnR1YWwtUGV0Ly4vc3JjL3NjcmlwdHMvZ2hvc3QuanM/NWNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge0dob3N0fVxuXG5jbGFzcyBHaG9zdCB7XG4gIC8vIC8vIHNldHRpbmcgZGVmYXVsdCBzdGFydCBzdGF0c1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyAvLyBsZXZlbCBvZiBmdWxsbmVzcyBvcHBvc2VkIHRvIGh1bmdlclxuICAgIHRoaXMuc2F0aWV0eSA9IDEwOyBcbiAgICAvLyAvLyB0cnVlIG1lYW5zIG5vIHByZXNlbmNlIG9mIHN0YXIgcG9vcFxuICAgIHRoaXMuaHlnaWVuZSA9IHRydWU7IFxuICAgIC8vIC8vIGxldmVsIG1ldGVyLCBhZmZlY3Rpb24gYnV0dG9uIGlzIHVubG9ja2VkIHdoZW4gZ2hvc3QgaXMgZnVsbCBhbmQgY2xlYW5cbiAgICAvLyAvLyBkaXNhYmxlZCBmb3IgYSBtb21lbnQgYWZ0ZXIgdXNlciB1c2VzXG4gICAgLy8gLy8gbWF4IGx2bCAzIGZvciBnaG9zdCB0byBjb21lIHRvIGxpZmVcbiAgICB0aGlzLmFmZmVjdGlvbiA9IDA7IFxuICAgIC8vIGlmIHRydWUsIGxldmVsIG1ldGVyIGlzIGFibGUgdG8gZ28gdXBcbiAgICAvLyBpZiBmYWxzZWxldmVsIG1ldGVyIGdvZXMgZG93biBieSAxXG5cbiAgfVxuXG4gIGh1bmdyeSgpe1xuICAgIHRoaXMuc2F0aWV0eSAtPSAxO1xuICB9XG4gIGZ1bGwoKXtcbiAgICB0aGlzLnNhdGlldHkgKz0gMTtcbiAgfVxuXG4gIGRpcnR5KCl7XG4gICAgdGhpcy5oeWdpZW5lIC09IDE7XG4gIH1cbiAgY2xlYW4oKXtcbiAgICB0aGlzLmh5Z2llbmUgKz0gMTtcbiAgfVxuXG4gIC8vaSB0aGluayB0aGlzIHdpbGwgYmUgYXN5bmNcbiAgcmVjZWl2ZUFmZmVjdGlvbigpe1xuICAgIHRoaXMuYWZmZWN0aW9uICs9IDE7XG4gIH1cblxuICBidXJuaW5nKCl7XG4gICAgdGhpcy5hZmZlY3Rpb24gLT0gMTtcbiAgfVxuXG4gIC8vIEkgdGhpbmsgaSB3aWxsIGRvIHRoZSB0ZXh0IG9yIGxldmVscyBhcyBhIHNlcGFyYXRlIGNsYXNzXG4gIC8vIE5leHQgdG9kbzogZXhwb3J0IGFuZCBpbXBvcnQgZ2hvc3QgYW5kIGZpbmQgb24gY29uc29sZVxufSJdLCJuYW1lcyI6WyJHaG9zdCIsInNhdGlldHkiLCJoeWdpZW5lIiwiYWZmZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/ghost.js\n");

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