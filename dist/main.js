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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ghost */ \"./src/scripts/ghost.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var sassper = new _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__.Ghost();\n  var sassperBody = document.getElementById(\"ghost\");\n  var sassperSpeak = document.getElementById(\"dialogue\"); // function getHungry() {\n  //   // return new Promise(() => {\n  //     // setTimeout(() => {\n  //       sassper.hungry();\n  //       sassperBody.src = \"./assets/ghost-Sheet-master-blazter-big2.png\";\n  //       sassperSpeak.innerText = \"I thought I was the creepy one lol would you mind stopping your staring and feeding me? xD\";\n  //       sassper.testSatiety();\n  //     // }, 10000);\n  //   // });\n  // }\n  // async function callHungry() {\n  //   const speak = await getHungry();\n  //   console.log(speak)\n  // }\n\n  function start() {\n    sassperSpeak.innerText = \"Click here to start\";\n    var startBox = document.getElementById(\"dialogue-container\");\n    startBox.addEventListener('click', function (event) {\n      sassperSpeak.innerText = \"\";\n      hungryCycle();\n    });\n  }\n\n  start();\n  var hungerID;\n\n  function hungryCycle() {\n    if (!hungerID) {\n      hungerID = setInterval(getHungry, 10000);\n    }\n  }\n\n  function getHungry() {\n    sassper.hungry();\n    sassperBody.src = \"./assets/ghost-Sheet-master-blazter-big2.png\";\n    sassperSpeak.innerText = \"I thought I was the creepy one lol would you mind stopping your staring and feeding me? xD\";\n    sassper.testSatiety();\n  }\n\n  function notHungryAnymore() {\n    clearInterval(hungerID);\n    hungerID = null;\n  }\n\n  var feedButton = document.getElementById(\"feed\");\n  feedButton.addEventListener(\"click\", function (event) {\n    notHungryAnymore();\n\n    if (sassper.satiety < 10) {\n      sassper.feed();\n      sassperBody.src = \"./assets/ghost-Sheet-master-blazter-big.png\";\n      sassperSpeak.innerText = \"\";\n    }\n\n    sassper.testSatiety();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQU1DLE9BQU8sR0FBRyxJQUFJSCxpREFBSixFQUFoQjtBQUNBLE1BQU1JLFdBQVcsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLE9BQXhCLENBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHTCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBckIsQ0FIa0QsQ0FLbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFTRSxLQUFULEdBQWlCO0FBQ2ZELElBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QixxQkFBekI7QUFDQSxRQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixvQkFBeEIsQ0FBakI7QUFDQUksSUFBQUEsUUFBUSxDQUFDUCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBUSxLQUFLLEVBQUk7QUFDMUNKLE1BQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QixFQUF6QjtBQUNBRyxNQUFBQSxXQUFXO0FBQ1osS0FIRDtBQUlEOztBQUVESixFQUFBQSxLQUFLO0FBRUwsTUFBSUssUUFBSjs7QUFFQSxXQUFTRCxXQUFULEdBQXVCO0FBQ3JCLFFBQUksQ0FBQ0MsUUFBTCxFQUFlO0FBQ2JBLE1BQUFBLFFBQVEsR0FBR0MsV0FBVyxDQUFDQyxTQUFELEVBQVksS0FBWixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0EsU0FBVCxHQUFxQjtBQUNuQlgsSUFBQUEsT0FBTyxDQUFDWSxNQUFSO0FBQ0FYLElBQUFBLFdBQVcsQ0FBQ1ksR0FBWixHQUFrQiw4Q0FBbEI7QUFDQVYsSUFBQUEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCLDRGQUF6QjtBQUNBTCxJQUFBQSxPQUFPLENBQUNjLFdBQVI7QUFDRDs7QUFFRCxXQUFTQyxnQkFBVCxHQUE0QjtBQUMxQkMsSUFBQUEsYUFBYSxDQUFDUCxRQUFELENBQWI7QUFDQUEsSUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRDs7QUFFRCxNQUFNUSxVQUFVLEdBQUduQixRQUFRLENBQUNJLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbkI7QUFDQWUsRUFBQUEsVUFBVSxDQUFDbEIsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQVEsS0FBSyxFQUFJO0FBQzVDUSxJQUFBQSxnQkFBZ0I7O0FBQ2hCLFFBQUlmLE9BQU8sQ0FBQ2tCLE9BQVIsR0FBa0IsRUFBdEIsRUFBMEI7QUFDeEJsQixNQUFBQSxPQUFPLENBQUNtQixJQUFSO0FBQ0FsQixNQUFBQSxXQUFXLENBQUNZLEdBQVosR0FBa0IsNkNBQWxCO0FBQ0FWLE1BQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QixFQUF6QjtBQUNEOztBQUNETCxJQUFBQSxPQUFPLENBQUNjLFdBQVI7QUFDRCxHQVJEO0FBU0QsQ0E5REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HaG9zdC1WaXJ0dWFsLVBldC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2hvc3R9IGZyb20gJy4vc2NyaXB0cy9naG9zdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHNhc3NwZXIgPSBuZXcgR2hvc3QoKTtcbiAgY29uc3Qgc2Fzc3BlckJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdob3N0XCIpXG4gIGNvbnN0IHNhc3NwZXJTcGVhayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9ndWVcIik7XG5cbiAgLy8gZnVuY3Rpb24gZ2V0SHVuZ3J5KCkge1xuICAvLyAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gIC8vICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgc2Fzc3Blci5odW5ncnkoKTtcbiAgLy8gICAgICAgc2Fzc3BlckJvZHkuc3JjID0gXCIuL2Fzc2V0cy9naG9zdC1TaGVldC1tYXN0ZXItYmxhenRlci1iaWcyLnBuZ1wiO1xuICAvLyAgICAgICBzYXNzcGVyU3BlYWsuaW5uZXJUZXh0ID0gXCJJIHRob3VnaHQgSSB3YXMgdGhlIGNyZWVweSBvbmUgbG9sIHdvdWxkIHlvdSBtaW5kIHN0b3BwaW5nIHlvdXIgc3RhcmluZyBhbmQgZmVlZGluZyBtZT8geERcIjtcbiAgLy8gICAgICAgc2Fzc3Blci50ZXN0U2F0aWV0eSgpO1xuICAvLyAgICAgLy8gfSwgMTAwMDApO1xuICAvLyAgIC8vIH0pO1xuICAvLyB9XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gY2FsbEh1bmdyeSgpIHtcbiAgLy8gICBjb25zdCBzcGVhayA9IGF3YWl0IGdldEh1bmdyeSgpO1xuICAvLyAgIGNvbnNvbGUubG9nKHNwZWFrKVxuICAvLyB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgc2Fzc3BlclNwZWFrLmlubmVyVGV4dCA9IFwiQ2xpY2sgaGVyZSB0byBzdGFydFwiXG4gICAgY29uc3Qgc3RhcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ3VlLWNvbnRhaW5lclwiKTtcbiAgICBzdGFydEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIHNhc3NwZXJTcGVhay5pbm5lclRleHQgPSBcIlwiXG4gICAgICBodW5ncnlDeWNsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhcnQoKTtcblxuICBsZXQgaHVuZ2VySUQ7XG5cbiAgZnVuY3Rpb24gaHVuZ3J5Q3ljbGUoKSB7XG4gICAgaWYgKCFodW5nZXJJRCkge1xuICAgICAgaHVuZ2VySUQgPSBzZXRJbnRlcnZhbChnZXRIdW5ncnksIDEwMDAwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIdW5ncnkoKSB7XG4gICAgc2Fzc3Blci5odW5ncnkoKTtcbiAgICBzYXNzcGVyQm9keS5zcmMgPSBcIi4vYXNzZXRzL2dob3N0LVNoZWV0LW1hc3Rlci1ibGF6dGVyLWJpZzIucG5nXCI7XG4gICAgc2Fzc3BlclNwZWFrLmlubmVyVGV4dCA9IFwiSSB0aG91Z2h0IEkgd2FzIHRoZSBjcmVlcHkgb25lIGxvbCB3b3VsZCB5b3UgbWluZCBzdG9wcGluZyB5b3VyIHN0YXJpbmcgYW5kIGZlZWRpbmcgbWU/IHhEXCI7XG4gICAgc2Fzc3Blci50ZXN0U2F0aWV0eSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm90SHVuZ3J5QW55bW9yZSgpIHtcbiAgICBjbGVhckludGVydmFsKGh1bmdlcklEKTtcbiAgICBodW5nZXJJRCA9IG51bGw7XG4gIH1cblxuICBjb25zdCBmZWVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVkXCIpO1xuICBmZWVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgbm90SHVuZ3J5QW55bW9yZSgpO1xuICAgIGlmIChzYXNzcGVyLnNhdGlldHkgPCAxMCkge1xuICAgICAgc2Fzc3Blci5mZWVkKCk7XG4gICAgICBzYXNzcGVyQm9keS5zcmMgPSBcIi4vYXNzZXRzL2dob3N0LVNoZWV0LW1hc3Rlci1ibGF6dGVyLWJpZy5wbmdcIjtcbiAgICAgIHNhc3NwZXJTcGVhay5pbm5lclRleHQgPSBcIlwiO1xuICAgIH1cbiAgICBzYXNzcGVyLnRlc3RTYXRpZXR5KCk7XG4gIH0pXG59KTsiXSwibmFtZXMiOlsiR2hvc3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXNzcGVyIiwic2Fzc3BlckJvZHkiLCJnZXRFbGVtZW50QnlJZCIsInNhc3NwZXJTcGVhayIsInN0YXJ0IiwiaW5uZXJUZXh0Iiwic3RhcnRCb3giLCJldmVudCIsImh1bmdyeUN5Y2xlIiwiaHVuZ2VySUQiLCJzZXRJbnRlcnZhbCIsImdldEh1bmdyeSIsImh1bmdyeSIsInNyYyIsInRlc3RTYXRpZXR5Iiwibm90SHVuZ3J5QW55bW9yZSIsImNsZWFySW50ZXJ2YWwiLCJmZWVkQnV0dG9uIiwic2F0aWV0eSIsImZlZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ghost.js":
/*!******************************!*\
  !*** ./src/scripts/ghost.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ghost\": function() { return /* binding */ Ghost; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Ghost = /*#__PURE__*/function () {\n  function Ghost() {\n    _classCallCheck(this, Ghost);\n\n    this.satiety = 10;\n    this.hygiene = 10;\n    this.affection = 0;\n  } // // v2\n  // satietySwitch() {\n  //   if (this.satiety === false) {\n  //     this.satiety = true;\n  //   } else {\n  //     this.satiety = false;\n  //   }\n  // }\n  // hygieneSwitch() {\n  //   if (this.hygiene === false) {\n  //     this.hygiene = true;\n  //   } else {\n  //     this.hygiene = false;\n  //   }\n  // }\n  // receiveAffection() {\n  //   this.affection += 1;\n  // }\n  // neglect() {\n  //   this.affection -= 1;\n  // }\n  // //v1\n\n\n  _createClass(Ghost, [{\n    key: \"hungry\",\n    value: function hungry() {\n      this.satiety -= 1;\n    }\n  }, {\n    key: \"feed\",\n    value: function feed() {\n      this.satiety += 1;\n    }\n  }, {\n    key: \"dirty\",\n    value: function dirty() {\n      this.hygiene = 1;\n    }\n  }, {\n    key: \"clean\",\n    value: function clean() {\n      this.hygiene += 1;\n    }\n  }, {\n    key: \"receiveAffection\",\n    value: function receiveAffection() {\n      this.affection += 1;\n    }\n  }, {\n    key: \"burning\",\n    value: function burning() {\n      this.affection -= 1;\n    } //test methods\n\n  }, {\n    key: \"testSatiety\",\n    value: function testSatiety() {\n      console.log(this.satiety);\n    }\n  }]);\n\n  return Ghost;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9naG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0lBRU1BO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNELElBRUQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Ozs7O1dBQ0Esa0JBQVM7QUFDUCxXQUFLRixPQUFMLElBQWdCLENBQWhCO0FBQ0Q7OztXQUNELGdCQUFPO0FBQ0wsV0FBS0EsT0FBTCxJQUFnQixDQUFoQjtBQUNEOzs7V0FFRCxpQkFBUTtBQUNOLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0Q7OztXQUNELGlCQUFRO0FBQ04sV0FBS0EsT0FBTCxJQUFnQixDQUFoQjtBQUNEOzs7V0FFRCw0QkFBbUI7QUFDakIsV0FBS0MsU0FBTCxJQUFrQixDQUFsQjtBQUNEOzs7V0FFRCxtQkFBVTtBQUNSLFdBQUtBLFNBQUwsSUFBa0IsQ0FBbEI7QUFDRCxNQUVEOzs7O1dBRUEsdUJBQWM7QUFDWkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0osT0FBakI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL0dob3N0LVZpcnR1YWwtUGV0Ly4vc3JjL3NjcmlwdHMvZ2hvc3QuanM/NWNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge0dob3N0fVxuXG5jbGFzcyBHaG9zdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2F0aWV0eSA9IDEwOyBcbiAgICB0aGlzLmh5Z2llbmUgPSAxMDsgXG4gICAgdGhpcy5hZmZlY3Rpb24gPSAwOyBcbiAgfVxuXG4gIC8vIC8vIHYyXG5cbiAgLy8gc2F0aWV0eVN3aXRjaCgpIHtcbiAgLy8gICBpZiAodGhpcy5zYXRpZXR5ID09PSBmYWxzZSkge1xuICAvLyAgICAgdGhpcy5zYXRpZXR5ID0gdHJ1ZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5zYXRpZXR5ID0gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gaHlnaWVuZVN3aXRjaCgpIHtcbiAgLy8gICBpZiAodGhpcy5oeWdpZW5lID09PSBmYWxzZSkge1xuICAvLyAgICAgdGhpcy5oeWdpZW5lID0gdHJ1ZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5oeWdpZW5lID0gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gcmVjZWl2ZUFmZmVjdGlvbigpIHtcbiAgLy8gICB0aGlzLmFmZmVjdGlvbiArPSAxO1xuICAvLyB9XG5cbiAgLy8gbmVnbGVjdCgpIHtcbiAgLy8gICB0aGlzLmFmZmVjdGlvbiAtPSAxO1xuICAvLyB9XG4gIFxuXG4gIC8vIC8vdjFcbiAgaHVuZ3J5KCkge1xuICAgIHRoaXMuc2F0aWV0eSAtPSAxO1xuICB9XG4gIGZlZWQoKSB7XG4gICAgdGhpcy5zYXRpZXR5ICs9IDE7XG4gIH1cblxuICBkaXJ0eSgpIHtcbiAgICB0aGlzLmh5Z2llbmUgPSAxO1xuICB9XG4gIGNsZWFuKCkge1xuICAgIHRoaXMuaHlnaWVuZSArPSAxO1xuICB9XG5cbiAgcmVjZWl2ZUFmZmVjdGlvbigpIHtcbiAgICB0aGlzLmFmZmVjdGlvbiArPSAxO1xuICB9XG5cbiAgYnVybmluZygpIHtcbiAgICB0aGlzLmFmZmVjdGlvbiAtPSAxO1xuICB9XG5cbiAgLy90ZXN0IG1ldGhvZHNcblxuICB0ZXN0U2F0aWV0eSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNhdGlldHkpO1xuICB9XG59Il0sIm5hbWVzIjpbIkdob3N0Iiwic2F0aWV0eSIsImh5Z2llbmUiLCJhZmZlY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/ghost.js\n");

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