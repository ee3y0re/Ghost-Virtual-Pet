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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ghost */ \"./src/scripts/ghost.js\");\n //this is the security thingy delete after\n// window.Ghost = Ghost;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //background and game\n  var canvas = document.getElementById(\"play\");\n  var ctx = canvas.getContext(\"2d\");\n  ctx.canvas.width = 1000; //size of canvas and play area\n\n  ctx.canvas.height = 562; //size of canvas and play area\n\n  /* \n  ghost\n  the properties are changing\n  but for some reason, the object method isn't being defined on console\n  const test = new Ghost() \n  */\n  // console.log(test)\n  // test.hungry()\n  // console.log(test)\n  // test.full()\n  // console.log(test)\n\n  var ghost = new Image(); //initialized presence of ghost\n\n  ghost.src = \"../assets/ghost-Sheet-master-blazter-big.png\"; //linked image ghost to source in assets folder\n\n  ghost.onload = function () {\n    //begin the drawing\n    ctx.drawImage(ghost, 500, 300); //image and position\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Q0FFQTtBQUNBOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWxEO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQUQsRUFBQUEsR0FBRyxDQUFDRixNQUFKLENBQVdJLEtBQVgsR0FBbUIsSUFBbkIsQ0FMa0QsQ0FLekI7O0FBQ3pCRixFQUFBQSxHQUFHLENBQUNGLE1BQUosQ0FBV0ssTUFBWCxHQUFvQixHQUFwQixDQU5rRCxDQU16Qjs7QUFFekI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkLENBcEJrRCxDQW9CdkI7O0FBQzNCRCxFQUFBQSxLQUFLLENBQUNFLEdBQU4sR0FBWSw4Q0FBWixDQXJCa0QsQ0FxQlM7O0FBQzNERixFQUFBQSxLQUFLLENBQUNHLE1BQU4sR0FBZSxZQUFNO0FBQUU7QUFDckJQLElBQUFBLEdBQUcsQ0FBQ1EsU0FBSixDQUFjSixLQUFkLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBRG1CLENBQ2E7QUFDakMsR0FGRDtBQUdELENBekJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vR2hvc3QtVmlydHVhbC1QZXQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dob3N0fSBmcm9tICcuL3NjcmlwdHMvZ2hvc3QnO1xuXG4vL3RoaXMgaXMgdGhlIHNlY3VyaXR5IHRoaW5neSBkZWxldGUgYWZ0ZXJcbi8vIHdpbmRvdy5HaG9zdCA9IEdob3N0O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gIC8vYmFja2dyb3VuZCBhbmQgZ2FtZVxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGN0eC5jYW52YXMud2lkdGggPSAxMDAwOyAvL3NpemUgb2YgY2FudmFzIGFuZCBwbGF5IGFyZWFcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSA1NjI7IC8vc2l6ZSBvZiBjYW52YXMgYW5kIHBsYXkgYXJlYVxuXG4gIC8qIFxuICBnaG9zdFxuICB0aGUgcHJvcGVydGllcyBhcmUgY2hhbmdpbmdcbiAgYnV0IGZvciBzb21lIHJlYXNvbiwgdGhlIG9iamVjdCBtZXRob2QgaXNuJ3QgYmVpbmcgZGVmaW5lZCBvbiBjb25zb2xlXG4gIGNvbnN0IHRlc3QgPSBuZXcgR2hvc3QoKSBcbiAgKi9cblxuICAvLyBjb25zb2xlLmxvZyh0ZXN0KVxuICAvLyB0ZXN0Lmh1bmdyeSgpXG4gIC8vIGNvbnNvbGUubG9nKHRlc3QpXG4gIC8vIHRlc3QuZnVsbCgpXG4gIC8vIGNvbnNvbGUubG9nKHRlc3QpXG4gIGNvbnN0IGdob3N0ID0gbmV3IEltYWdlKCk7IC8vaW5pdGlhbGl6ZWQgcHJlc2VuY2Ugb2YgZ2hvc3RcbiAgZ2hvc3Quc3JjID0gXCIuLi9hc3NldHMvZ2hvc3QtU2hlZXQtbWFzdGVyLWJsYXp0ZXItYmlnLnBuZ1wiIC8vbGlua2VkIGltYWdlIGdob3N0IHRvIHNvdXJjZSBpbiBhc3NldHMgZm9sZGVyXG4gIGdob3N0Lm9ubG9hZCA9ICgpID0+IHsgLy9iZWdpbiB0aGUgZHJhd2luZ1xuICAgIGN0eC5kcmF3SW1hZ2UoZ2hvc3QsIDUwMCwgMzAwKTsgLy9pbWFnZSBhbmQgcG9zaXRpb25cbiAgfVxufSk7Il0sIm5hbWVzIjpbIkdob3N0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJnaG9zdCIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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