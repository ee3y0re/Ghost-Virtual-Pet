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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ghost */ \"./src/scripts/ghost.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var sassper = new _scripts_ghost__WEBPACK_IMPORTED_MODULE_0__.Ghost();\n  var sassperBody = document.getElementById(\"ghost\");\n  var sassperSpeak = document.getElementById(\"dialogue\");\n  var sassperPoop = document.getElementById(\"poop\");\n\n  function start() {\n    if (sassper.satiety === false) sassper.satietySwitch();\n    sassperSpeak.innerText = \"Click here to start\";\n    var startBox = document.getElementById(\"dialogue-container\");\n    startBox.addEventListener('click', function (event) {\n      sassperSpeak.innerText = \"\";\n      hungryCycle();\n    });\n  }\n\n  start();\n  var hungerID;\n\n  function hungryCycle() {\n    if (!hungerID) {\n      hungerID = setInterval(getHungry, 6000);\n    }\n  }\n\n  function getHungry() {\n    if (sassper.satiety === true) {\n      sassperBody.src = \"./assets/ghost-Sheet-master-blazter-big2.png\";\n      sassperSpeak.innerText = \"I thought I was the creepy one LOL Would you mind stopping your staring and feeding me? xD\";\n      sassper.satietySwitch(); //false\n\n      sassper.testSatiety();\n    }\n  }\n\n  function notHungryAnymore() {\n    clearInterval(hungerID);\n    hungerID = null;\n  }\n\n  var feedButton = document.getElementById(\"feed\");\n  feedButton.addEventListener(\"click\", function (event) {\n    sassper.receiveAffection();\n    notHungryAnymore();\n\n    if (sassper.satiety === false) {\n      sassperBody.src = \"./assets/ghost-Sheet-master-blazter-big.png\";\n      sassperSpeak.innerText = \"\";\n      sassper.satietySwitch(); //true\n\n      makePoop();\n    }\n  });\n\n  function makePoop() {\n    setTimeout(function () {\n      if (sassper.hygiene === true) {\n        sassper.hygieneSwitch(); //false\n\n        sassperBody.src = \"./assets/ghost-Sheet-master-blazter-colllapse.png\";\n        sassperSpeak.innerText = \"What? I'm a ghost! You've got hands, go clean up the star poop :P\";\n        sassperPoop.src = \"./assets/star_nyknck.png\";\n      }\n    }, 5000);\n  }\n\n  var cleanButton = document.getElementById(\"clean\");\n  cleanButton.addEventListener(\"click\", function (event) {\n    sassper.receiveAffection();\n\n    if (sassper.hygiene === false) {\n      sassperBody.src = \"./assets/ghost-Sheet-master-blazter-big.png\";\n      sassperSpeak.innerText = \"\";\n      sassperPoop.src = \"\";\n      setTimeout(getHungry, 6000);\n      sassper.hygieneSwitch(); //true\n    }\n  });\n  var affectionButton = document.getElementById(\"love\");\n  affectionButton.addEventListener(\"click\", function (event) {\n    sassperSpeak.innerText = \"\";\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHM0IsUUFBUSxDQUFDSSxjQUFULENBQXdCLE9BQXhCLENBQXBCO0FBQ0F1QixFQUFBQSxXQUFXLENBQUMxQixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFBVyxLQUFLLEVBQUk7QUFDN0NWLElBQUFBLE9BQU8sQ0FBQ29CLGdCQUFSOztBQUNBLFFBQUlwQixPQUFPLENBQUN1QixPQUFSLEtBQW9CLEtBQXhCLEVBQStCO0FBQzdCdEIsTUFBQUEsV0FBVyxDQUFDYyxHQUFaLEdBQWtCLDZDQUFsQjtBQUNBWixNQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsRUFBekI7QUFDQUosTUFBQUEsV0FBVyxDQUFDVyxHQUFaLEdBQWtCLEVBQWxCO0FBQ0FPLE1BQUFBLFVBQVUsQ0FBQ1IsU0FBRCxFQUFZLElBQVosQ0FBVjtBQUNBZCxNQUFBQSxPQUFPLENBQUN3QixhQUFSLEdBTDZCLENBS0o7QUFDMUI7QUFDRixHQVREO0FBV0EsTUFBTUUsZUFBZSxHQUFHNUIsUUFBUSxDQUFDSSxjQUFULENBQXdCLE1BQXhCLENBQXhCO0FBQ0F3QixFQUFBQSxlQUFlLENBQUMzQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBQVcsS0FBSyxFQUFJO0FBQ2pEUCxJQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsRUFBekI7QUFDRCxHQUZEO0FBR0QsQ0FqRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HaG9zdC1WaXJ0dWFsLVBldC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2hvc3R9IGZyb20gJy4vc2NyaXB0cy9naG9zdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgY29uc3Qgc2Fzc3BlciA9IG5ldyBHaG9zdCgpO1xuICBjb25zdCBzYXNzcGVyQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2hvc3RcIik7XG4gIGNvbnN0IHNhc3NwZXJTcGVhayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9ndWVcIik7XG4gIGNvbnN0IHNhc3NwZXJQb29wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb29wXCIpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmIChzYXNzcGVyLnNhdGlldHkgPT09IGZhbHNlKSBzYXNzcGVyLnNhdGlldHlTd2l0Y2goKTtcbiAgICBzYXNzcGVyU3BlYWsuaW5uZXJUZXh0ID0gXCJDbGljayBoZXJlIHRvIHN0YXJ0XCJcbiAgICBjb25zdCBzdGFydEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9ndWUtY29udGFpbmVyXCIpO1xuICAgIHN0YXJ0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgc2Fzc3BlclNwZWFrLmlubmVyVGV4dCA9IFwiXCJcbiAgICAgIGh1bmdyeUN5Y2xlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGFydCgpO1xuXG4gIGxldCBodW5nZXJJRDtcblxuICBmdW5jdGlvbiBodW5ncnlDeWNsZSgpIHtcbiAgICBpZiAoIWh1bmdlcklEKSB7XG4gICAgICBodW5nZXJJRCA9IHNldEludGVydmFsKGdldEh1bmdyeSwgNjAwMCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SHVuZ3J5KCkge1xuICAgIGlmIChzYXNzcGVyLnNhdGlldHkgPT09IHRydWUpIHtcbiAgICAgIHNhc3NwZXJCb2R5LnNyYyA9IFwiLi9hc3NldHMvZ2hvc3QtU2hlZXQtbWFzdGVyLWJsYXp0ZXItYmlnMi5wbmdcIjtcbiAgICAgIHNhc3NwZXJTcGVhay5pbm5lclRleHQgPSBcIkkgdGhvdWdodCBJIHdhcyB0aGUgY3JlZXB5IG9uZSBMT0wgV291bGQgeW91IG1pbmQgc3RvcHBpbmcgeW91ciBzdGFyaW5nIGFuZCBmZWVkaW5nIG1lPyB4RFwiO1xuICAgICAgc2Fzc3Blci5zYXRpZXR5U3dpdGNoKCk7IC8vZmFsc2VcbiAgICAgIHNhc3NwZXIudGVzdFNhdGlldHkoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3RIdW5ncnlBbnltb3JlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaHVuZ2VySUQpO1xuICAgIGh1bmdlcklEID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGZlZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWRcIik7XG4gIGZlZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBzYXNzcGVyLnJlY2VpdmVBZmZlY3Rpb24oKTtcbiAgICBub3RIdW5ncnlBbnltb3JlKCk7XG4gICAgaWYgKHNhc3NwZXIuc2F0aWV0eSA9PT0gZmFsc2UpIHtcbiAgICAgIHNhc3NwZXJCb2R5LnNyYyA9IFwiLi9hc3NldHMvZ2hvc3QtU2hlZXQtbWFzdGVyLWJsYXp0ZXItYmlnLnBuZ1wiO1xuICAgICAgc2Fzc3BlclNwZWFrLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICBzYXNzcGVyLnNhdGlldHlTd2l0Y2goKTsgLy90cnVlXG4gICAgICBtYWtlUG9vcCgpXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIG1ha2VQb29wKCkge1xuICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICBpZiAoc2Fzc3Blci5oeWdpZW5lID09PSB0cnVlKSB7XG4gICAgICAgIHNhc3NwZXIuaHlnaWVuZVN3aXRjaCgpOyAvL2ZhbHNlXG4gICAgICAgIHNhc3NwZXJCb2R5LnNyYyA9IFwiLi9hc3NldHMvZ2hvc3QtU2hlZXQtbWFzdGVyLWJsYXp0ZXItY29sbGxhcHNlLnBuZ1wiXG4gICAgICAgIHNhc3NwZXJTcGVhay5pbm5lclRleHQgPSBcIldoYXQ/IEknbSBhIGdob3N0ISBZb3UndmUgZ290IGhhbmRzLCBnbyBjbGVhbiB1cCB0aGUgc3RhciBwb29wIDpQXCJcbiAgICAgICAgc2Fzc3BlclBvb3Auc3JjID0gXCIuL2Fzc2V0cy9zdGFyX255a25jay5wbmdcIlxuICAgICAgfVxuICAgIH0sIDUwMDApXG5cbiAgfVxuXG4gIGNvbnN0IGNsZWFuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhblwiKTtcbiAgY2xlYW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBzYXNzcGVyLnJlY2VpdmVBZmZlY3Rpb24oKTtcbiAgICBpZiAoc2Fzc3Blci5oeWdpZW5lID09PSBmYWxzZSkge1xuICAgICAgc2Fzc3BlckJvZHkuc3JjID0gXCIuL2Fzc2V0cy9naG9zdC1TaGVldC1tYXN0ZXItYmxhenRlci1iaWcucG5nXCI7XG4gICAgICBzYXNzcGVyU3BlYWsuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgIHNhc3NwZXJQb29wLnNyYyA9IFwiXCJcbiAgICAgIHNldFRpbWVvdXQoZ2V0SHVuZ3J5LCA2MDAwKVxuICAgICAgc2Fzc3Blci5oeWdpZW5lU3dpdGNoKCk7IC8vdHJ1ZVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBhZmZlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdmVcIik7XG4gIGFmZmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIHNhc3NwZXJTcGVhay5pbm5lclRleHQgPSBcIlwiO1xuICB9KVxufSk7Il0sIm5hbWVzIjpbIkdob3N0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Fzc3BlciIsInNhc3NwZXJCb2R5IiwiZ2V0RWxlbWVudEJ5SWQiLCJzYXNzcGVyU3BlYWsiLCJzYXNzcGVyUG9vcCIsInN0YXJ0Iiwic2F0aWV0eSIsInNhdGlldHlTd2l0Y2giLCJpbm5lclRleHQiLCJzdGFydEJveCIsImV2ZW50IiwiaHVuZ3J5Q3ljbGUiLCJodW5nZXJJRCIsInNldEludGVydmFsIiwiZ2V0SHVuZ3J5Iiwic3JjIiwidGVzdFNhdGlldHkiLCJub3RIdW5ncnlBbnltb3JlIiwiY2xlYXJJbnRlcnZhbCIsImZlZWRCdXR0b24iLCJyZWNlaXZlQWZmZWN0aW9uIiwibWFrZVBvb3AiLCJzZXRUaW1lb3V0IiwiaHlnaWVuZSIsImh5Z2llbmVTd2l0Y2giLCJjbGVhbkJ1dHRvbiIsImFmZmVjdGlvbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ghost.js":
/*!******************************!*\
  !*** ./src/scripts/ghost.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ghost\": function() { return /* binding */ Ghost; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Ghost = /*#__PURE__*/function () {\n  function Ghost() {\n    _classCallCheck(this, Ghost);\n\n    this.satiety = true; //true\n\n    this.hygiene = true; //true\n\n    this.affection = 0;\n  }\n\n  _createClass(Ghost, [{\n    key: \"satietySwitch\",\n    value: function satietySwitch() {\n      if (this.satiety === false) {\n        this.satiety = true;\n      } else {\n        this.satiety = false;\n      }\n    }\n  }, {\n    key: \"hygieneSwitch\",\n    value: function hygieneSwitch() {\n      if (this.hygiene === false) {\n        this.hygiene = true;\n      } else {\n        this.hygiene = false;\n      }\n    }\n  }, {\n    key: \"receiveAffection\",\n    value: function receiveAffection() {\n      this.affection += 1;\n    } //test methods\n\n  }, {\n    key: \"testSatiety\",\n    value: function testSatiety() {\n      console.log(this.satiety);\n    }\n  }, {\n    key: \"testHygiene\",\n    value: function testHygiene() {\n      console.log(this.hygiene);\n    } // possible dump\n    // // v2\n    // //v1\n\n  }]);\n\n  return Ghost;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9naG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0lBRU1BO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxPQUFMLEdBQWUsSUFBZixDQURZLENBQ1M7O0FBQ3JCLFNBQUtDLE9BQUwsR0FBZSxJQUFmLENBRlksQ0FFUzs7QUFDckIsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNEOzs7O1dBRUQseUJBQWdCO0FBQ2QsVUFBSSxLQUFLRixPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO0FBQzFCLGFBQUtBLE9BQUwsR0FBZSxJQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0EsT0FBTCxHQUFlLEtBQWY7QUFDRDtBQUNGOzs7V0FFRCx5QkFBZ0I7QUFDZCxVQUFJLEtBQUtDLE9BQUwsS0FBaUIsS0FBckIsRUFBNEI7QUFDMUIsYUFBS0EsT0FBTCxHQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBQ0Y7OztXQUVELDRCQUFtQjtBQUNqQixXQUFLQyxTQUFMLElBQWtCLENBQWxCO0FBQ0QsTUFFRDs7OztXQUVBLHVCQUFjO0FBQ1pDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtKLE9BQWpCO0FBQ0Q7OztXQUVELHVCQUFjO0FBQ1pHLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILE9BQWpCO0FBQ0QsTUFFRDtBQUVBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HaG9zdC1WaXJ0dWFsLVBldC8uL3NyYy9zY3JpcHRzL2dob3N0LmpzPzVjY2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtHaG9zdH1cblxuY2xhc3MgR2hvc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNhdGlldHkgPSB0cnVlOyAvL3RydWVcbiAgICB0aGlzLmh5Z2llbmUgPSB0cnVlOyAvL3RydWVcbiAgICB0aGlzLmFmZmVjdGlvbiA9IDA7IFxuICB9XG5cbiAgc2F0aWV0eVN3aXRjaCgpIHtcbiAgICBpZiAodGhpcy5zYXRpZXR5ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zYXRpZXR5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zYXRpZXR5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaHlnaWVuZVN3aXRjaCgpIHtcbiAgICBpZiAodGhpcy5oeWdpZW5lID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5oeWdpZW5lID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oeWdpZW5lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUFmZmVjdGlvbigpIHtcbiAgICB0aGlzLmFmZmVjdGlvbiArPSAxO1xuICB9XG5cbiAgLy90ZXN0IG1ldGhvZHNcblxuICB0ZXN0U2F0aWV0eSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNhdGlldHkpO1xuICB9XG5cbiAgdGVzdEh5Z2llbmUoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5oeWdpZW5lKTtcbiAgfVxuXG4gIC8vIHBvc3NpYmxlIGR1bXBcblxuICAvLyAvLyB2MlxuICBcblxuICAvLyAvL3YxXG59Il0sIm5hbWVzIjpbIkdob3N0Iiwic2F0aWV0eSIsImh5Z2llbmUiLCJhZmZlY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/ghost.js\n");

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