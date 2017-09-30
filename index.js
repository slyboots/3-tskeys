(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tskeys", [], factory);
	else if(typeof exports === 'object')
		exports["tskeys"] = factory();
	else
		root["tskeys"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TSKeyNote = /** @class */ (function () {
    //Constructor
    function TSKeyNote(note) {
        this.isActive = false;
        this.note = note;
    }
    Object.defineProperty(TSKeyNote.prototype, "octave", {
        //Public Methods
        /**
         * gets the octave number from the note property
         * and then returns it as an int.
         */
        get: function () {
            return parseInt(this.note.replace(/([a-zA-Z#])*/, ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSKeyNote.prototype, "tone", {
        /**
         * returns the base tone of the note (e.g the 'D#' in 'D#9')
         */
        get: function () {
            return this.note.replace(/([0-9])+/, '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSKeyNote.prototype, "color", {
        /**
         * returns the color this key will be by
         * checking if it contains a "#" (Enharmonic)
         * or not (Natural)
         */
        get: function () {
            return this.note[1] === "#" ? "black" : "white";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSKeyNote.prototype, "type", {
        /**
         * returns the type of note "Natural" or "Enharmonic"
         * based on whether the note property contains a "#"
         */
        get: function () { return this.note[1] === "#" ? "Enharmonic" : "Natural"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSKeyNote.prototype, "frequency", {
        /** calculate the frequency of a note in HZ from its note string
         * by converting it to the corresponding midi value and
         * then using a standard formula for tuning
         */
        get: function () { return ((440 / 32) * Math.pow(2, ((this.midi - 9) / 12))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSKeyNote.prototype, "midi", {
        /** Convert a note string into a midi value using the note property */
        get: function () {
            return ((this.octave) * 12) +
                (['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].indexOf(this.tone));
        },
        enumerable: true,
        configurable: true
    });
    TSKeyNote.prototype.setOverlap = function (amount) {
        this.overlap = 100 / (amount * 7) / 4;
    };
    // event response methods
    TSKeyNote.prototype.activate = function () {
        this.isActive = true;
        this.background = "yellow";
    };
    TSKeyNote.prototype.deactivate = function () {
        this.isActive = false;
        this.background = this.color;
    };
    TSKeyNote.prototype.onPress = function () {
        console.log("not implemented: PianoKey onPress() method");
    };
    TSKeyNote.prototype.onRelease = function () {
        console.log("not implemented: PianoKey onRelease() method");
    };
    TSKeyNote.prototype.onOver = function () {
        console.log("not implemented: PianoKey onOver() method");
    };
    TSKeyNote.prototype.onOut = function () {
        console.log("not implemented: PianoKey onOut() method");
    };
    //Private Fields
    //Private Methods
    TSKeyNote.prototype.setElementStyles = function () {
        if (this.type == "Natural") {
            console.log("PianoKey class setElementStyles() method has not been implemented");
            // this.renderer.setElementClass(this.elRef.nativeElement, "natural", true);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', this.colors.primary);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'borderColor', this.colors.border);
            // this.renderer.setElementStyle(this.elRef.nativeElement, "borderLeft", "0")
        }
        else {
            console.log("PianoKey class setElementStyles() method has not been implemented");
            // this.renderer.setElementClass(this.elRef.nativeElement, "enharmonic", true);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', this.colors.accent);
            // this.renderer.setElementStyle(this.elRef.nativeElement, 'borderColor', this.colors.border);
            // this.renderer.setElementStyle(this.elRef.nativeElement, "marginLeft", "-" + this.offset + "%");
            // this.renderer.setElementStyle(this.elRef.nativeElement, "marginRight", "-" + this.offset + "%");
        }
    };
    return TSKeyNote;
}());
exports.TSKeyNote = TSKeyNote;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(0));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tskeynote_class_1 = __webpack_require__(0);
var TSKeys = /** @class */ (function () {
    //Constructor
    function TSKeys(config) {
        /**Internally store the keyboard note order*/
        this.notes = [
            'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
        ];
        this.name = config.id;
        this.rootNote = config.rootNote;
        this.container = config.container;
        this.octaves = config.octaves;
        this.majorNotes = this.octaves * 7;
        this.majorWidth = 100 / this.majorNotes;
        this.minorNotes = this.octaves * 5;
        this.minorOffset = 100 / (this.majorNotes) / 4;
        this.totalKeys = this.octaves * 12;
        this.orderNotes();
        this.createKeys();
    }
    //Public Methods
    /** Create an array of piano keys*/
    TSKeys.prototype.createKeys = function () {
        // let keyArray: Array<PianoKey> = [];
        // let note_counter = 0;
        // Initialize PianoKey array
        this.keys = new Array();
        var octaves = this.octaves;
        // Loop through the internal notes array ${octaves} times;
        for (var oIndex = 0; oIndex < octaves; oIndex++) {
            var baseOctave = parseInt(this.rootNote.replace(/([a-zA-Z#]*)/, ''));
            for (var nIndex = 0; nIndex < 12; nIndex++) {
                // get current note string and check its value to
                // determine if we should force increment the baseOctave
                // before appending it to the note string.
                var currentNote = this.notes[nIndex];
                baseOctave += ((currentNote === "C" && (nIndex !== 0)) ? 1 : 0);
                currentNote += (baseOctave + oIndex).toString();
                var newKey = new tskeynote_class_1.TSKeyNote(currentNote);
                if (newKey.type == 'Enharmonic') {
                    newKey.setOverlap(octaves);
                }
                this.keys.push(newKey);
            }
        }
    };
    TSKeys.prototype.render = function () {
        this.injectStyles();
        this.injectKeyboard();
    };
    //Private Methods
    TSKeys.prototype.rotateArray = function (array, index) {
        var length = array.length >>> 0;
        index = index >> 0;
        var newArray = (Array()).concat(array);
        newArray.push.apply(newArray, newArray.splice.call(newArray, 0, index));
        return newArray;
    };
    TSKeys.prototype.orderNotes = function () {
        //get the index of the desired starting note to use as count
        var shiftAmount = this.notes.indexOf(this.rootNote.replace(/([0-9])+/, ''));
        this.notes = this.rotateArray(this.notes, shiftAmount);
        console.log(JSON.stringify(this.notes));
    };
    TSKeys.prototype.injectStyles = function () {
        var cssel = document.createElement("style");
        cssel.innerHTML = "\n        #content {\n            width: 80%;\n            height: 200px;\n            margin: 0 auto;\n            border: 2px solid black;\n        }\n        .keyboard {\n            width: 100%;\n            height: 100%;\n            background-color: #16161D;\n            min-height: 100px;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: stretch;\n            margin: 0 auto;\n            border-radius: 0.25rem;\n            border: 1px solid purple;\n            position: relative;\n            overflow-x: auto;\n        }\n        .pianokey {\n            align-self: stretch;\n            user-select: none;\n            border: 1px solid orange;\n            color: grey;\n        }\n        .natural {\n            flex: 2 0 auto;\n            min-height: 100px;\n            height: 100%;\n            border-radius: 0 0 3px 3px;\n            z-index: 0;\n            border-width: 1px;\n            border-style: solid;\n            border-top: 0;\n            background-color: white;\n        }\n        .enharmonic {\n            flex: 1 1 auto;\n            min-height: 65px;\n            height: 65%;\n            border-radius: 0 0 2px 2px;\n            z-index: 2;\n            border-width: 1px;\n            border-style: solid;\n            border-top: 0;\n            background-color: black;\n        }\n        ";
        document.getElementsByTagName("head")[0].appendChild(cssel);
    };
    TSKeys.prototype.injectKeyboard = function () {
        var container = document.getElementById(this.container);
        var kbel = document.createElement("div");
        var getOffset = function (key) { key.type == 'Enharmonic' ? -(key.overlap) + '%' : ''; };
        kbel.style.backgroundColor = '#16161D';
        kbel.innerHTML = "\n        <h1 style=\"color: white\">" + this.name + "</h1>\n        <hr />\n        <div class=\"keyboard\">\n            " + this.keys.map(function (key, i) { return ("\n                    <div id=\"" + key.note + "\" class=\"pianokey " + ((key.type == "Natural") ? 'natural' : 'enharmonic') + "\"\n                    style=\"margin-left: " + getOffset(key) + ";margin-right: " + getOffset(key) + ";\"\n                    onmousedown\n                    ></div>\n                ").trim(); }).join('') + "\n        </div>\n        ";
        container.appendChild(kbel);
    };
    return TSKeys;
}());
exports.TSKeys = TSKeys;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMTYwYjNmYzJlMTM1NzAzODgyMyIsIndlYnBhY2s6Ly8vLi9zcmMvdHNrZXlub3RlLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHNrZXlzLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7SUFDSSxhQUFhO0lBQ2IsbUJBQVksSUFBWTtRQU1qQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBTkwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFBQSxDQUFDO0lBYTlDLHNCQUFXLDZCQUFNO1FBTGpCLGdCQUFnQjtRQUNoQjs7O1dBR0c7YUFDSDtZQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUFJRCxzQkFBVywyQkFB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Q0QsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ08sK0JBQWMsR0FBdEI7UUFDSSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksU0FBUyxHQUFhLFVBQUMsR0FBUSxJQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUMsR0FBRyxHQUFHLEVBQUUsR0FBQztRQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRywwQ0FDVSxJQUFJLENBQUMsSUFBSSw2RUFJNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLDZDQUNYLEdBQUcsQ0FBQyxJQUFJLDZCQUFxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLEdBQUcsU0FBUyxHQUFHLFlBQVksc0RBQ3BFLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQWtCLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0ZBR3ZFLEVBQUMsSUFBSSxFQUFFLEVBTGtCLENBS2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtCQUd6QjtRQUNELFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDO0FBcEtZLHdCQUFNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0c2tleXNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widHNrZXlzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRza2V5c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMTYwYjNmYzJlMTM1NzAzODgyMyIsImV4cG9ydCBjbGFzcyBUU0tleU5vdGUge1xuICAgIC8vQ29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3Rvcihub3RlOiBzdHJpbmcpIHsgdGhpcy5ub3RlID0gbm90ZTt9XG4gICAgXG4gICAgLy9QdWJsaWMgRmllbGRzXG4gICAgcHVibGljIG5vdGU6IHN0cmluZztcbiAgICAvL3B1YmxpYyBzdHlsZTogS2V5U3R5bGU7XG4gICAgcHVibGljIG92ZXJsYXA6IG51bWJlcjtcbiAgICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgYmFja2dyb3VuZDogc3RyaW5nO1xuICAgIC8vUHVibGljIE1ldGhvZHNcbiAgICAvKipcbiAgICAgKiBnZXRzIHRoZSBvY3RhdmUgbnVtYmVyIGZyb20gdGhlIG5vdGUgcHJvcGVydHlcbiAgICAgKiBhbmQgdGhlbiByZXR1cm5zIGl0IGFzIGFuIGludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG9jdGF2ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5ub3RlLnJlcGxhY2UoLyhbYS16QS1aI10pKi8sICcnKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIGJhc2UgdG9uZSBvZiB0aGUgbm90ZSAoZS5nIHRoZSAnRCMnIGluICdEIzknKVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdG9uZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RlLnJlcGxhY2UoLyhbMC05XSkrLywgJycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBjb2xvciB0aGlzIGtleSB3aWxsIGJlIGJ5XG4gICAgICogY2hlY2tpbmcgaWYgaXQgY29udGFpbnMgYSBcIiNcIiAoRW5oYXJtb25pYylcbiAgICAgKiBvciBub3QgKE5hdHVyYWwpXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RlWzFdID09PSBcIiNcIiA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgdHlwZSBvZiBub3RlIFwiTmF0dXJhbFwiIG9yIFwiRW5oYXJtb25pY1wiXG4gICAgICogYmFzZWQgb24gd2hldGhlciB0aGUgbm90ZSBwcm9wZXJ0eSBjb250YWlucyBhIFwiI1wiXG4gICAgICovXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm5vdGVbMV0gPT09IFwiI1wiP1wiRW5oYXJtb25pY1wiOlwiTmF0dXJhbFwiO31cbiAgICAvKiogY2FsY3VsYXRlIHRoZSBmcmVxdWVuY3kgb2YgYSBub3RlIGluIEhaIGZyb20gaXRzIG5vdGUgc3RyaW5nXG4gICAgICogYnkgY29udmVydGluZyBpdCB0byB0aGUgY29ycmVzcG9uZGluZyBtaWRpIHZhbHVlIGFuZFxuICAgICAqIHRoZW4gdXNpbmcgYSBzdGFuZGFyZCBmb3JtdWxhIGZvciB0dW5pbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZyZXF1ZW5jeSgpOiBudW1iZXIge3JldHVybiA8bnVtYmVyPigoNDQwIC8gMzIpICogTWF0aC5wb3coMiwgKCh0aGlzLm1pZGkgLSA5KSAvIDEyKSkpO31cbiAgICAvKiogQ29udmVydCBhIG5vdGUgc3RyaW5nIGludG8gYSBtaWRpIHZhbHVlIHVzaW5nIHRoZSBub3RlIHByb3BlcnR5ICovXG4gICAgcHVibGljIGdldCBtaWRpKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoKHRoaXMub2N0YXZlKSAqIDEyKSArXG4gICAgICAgICAgICAoWydDJywgJ0MjJywgJ0QnLCAnRCMnLCAnRScsICdGJywgJ0YjJywgJ0cnLCAnRyMnLCAnQScsICdBIycsICdCJ10uaW5kZXhPZih0aGlzLnRvbmUpKTtcbiAgICB9XG4gICAgcHVibGljIHNldE92ZXJsYXAoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5vdmVybGFwID0gMTAwIC8gKGFtb3VudCAqIDcpIC8gNDtcbiAgICB9XG4gICAgLy8gZXZlbnQgcmVzcG9uc2UgbWV0aG9kc1xuICAgIHB1YmxpYyBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IFwieWVsbG93XCI7XG4gICAgfVxuICAgIHB1YmxpYyBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuY29sb3I7XG4gICAgfVxuICAgIHB1YmxpYyBvblByZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBpbXBsZW1lbnRlZDogUGlhbm9LZXkgb25QcmVzcygpIG1ldGhvZFwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uUmVsZWFzZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3QgaW1wbGVtZW50ZWQ6IFBpYW5vS2V5IG9uUmVsZWFzZSgpIG1ldGhvZFwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uT3ZlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3QgaW1wbGVtZW50ZWQ6IFBpYW5vS2V5IG9uT3ZlcigpIG1ldGhvZFwiKTtcbiAgICB9XG4gICAgcHVibGljIG9uT3V0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBpbXBsZW1lbnRlZDogUGlhbm9LZXkgb25PdXQoKSBtZXRob2RcIik7XG4gICAgfVxuICAgIFxuICAgIC8vUHJpdmF0ZSBGaWVsZHNcbiAgICBcbiAgICBcbiAgICAvL1ByaXZhdGUgTWV0aG9kc1xuICAgIHByaXZhdGUgc2V0RWxlbWVudFN0eWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcIk5hdHVyYWxcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQaWFub0tleSBjbGFzcyBzZXRFbGVtZW50U3R5bGVzKCkgbWV0aG9kIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZFwiKTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgXCJuYXR1cmFsXCIsIHRydWUpO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZENvbG9yJywgdGhpcy5jb2xvcnMucHJpbWFyeSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdib3JkZXJDb2xvcicsIHRoaXMuY29sb3JzLmJvcmRlcik7XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIFwiYm9yZGVyTGVmdFwiLCBcIjBcIilcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQaWFub0tleSBjbGFzcyBzZXRFbGVtZW50U3R5bGVzKCkgbWV0aG9kIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZFwiKTtcblxuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBcImVuaGFybW9uaWNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kQ29sb3InLCB0aGlzLmNvbG9ycy5hY2NlbnQpO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnYm9yZGVyQ29sb3InLCB0aGlzLmNvbG9ycy5ib3JkZXIpO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBcIm1hcmdpbkxlZnRcIiwgXCItXCIgKyB0aGlzLm9mZnNldCArIFwiJVwiKTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgXCJtYXJnaW5SaWdodFwiLCBcIi1cIiArIHRoaXMub2Zmc2V0ICsgXCIlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIFBVQkxJQyBQUk9QRVJUSUVTXG4gICAgXG5cbiAgICAvLyBBY2Nlc3NvcnNcblxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90c2tleW5vdGUuY2xhc3MudHMiLCJleHBvcnQgKiBmcm9tICcuL3Rza2V5cy5jbGFzcyc7XG5leHBvcnQgKiBmcm9tICcuL3Rza2V5bm90ZS5jbGFzcyc7XG5leHBvcnQgKiBmcm9tICcuL3Rza2V5c2NvbmZpZy5pbnRlcmZhY2UnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCB7IFRTS2V5Q29uZmlnIH0gZnJvbSBcIi4vdHNrZXlzY29uZmlnLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgVFNLZXlOb3RlIH0gZnJvbSBcIi4vdHNrZXlub3RlLmNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBUU0tleXMge1xuICAgIC8vQ29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFRTS2V5Q29uZmlnKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5pZDtcbiAgICAgICAgdGhpcy5yb290Tm90ZSA9IGNvbmZpZy5yb290Tm90ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyO1xuICAgICAgICB0aGlzLm9jdGF2ZXMgPSBjb25maWcub2N0YXZlcztcbiAgICAgICAgdGhpcy5tYWpvck5vdGVzID0gdGhpcy5vY3RhdmVzICogNztcbiAgICAgICAgdGhpcy5tYWpvcldpZHRoID0gMTAwIC8gdGhpcy5tYWpvck5vdGVzO1xuICAgICAgICB0aGlzLm1pbm9yTm90ZXMgPSB0aGlzLm9jdGF2ZXMgKiA1O1xuICAgICAgICB0aGlzLm1pbm9yT2Zmc2V0ID0gMTAwIC8gKHRoaXMubWFqb3JOb3RlcykgLyA0O1xuICAgICAgICB0aGlzLnRvdGFsS2V5cyA9IHRoaXMub2N0YXZlcyAqIDEyO1xuICAgICAgICB0aGlzLm9yZGVyTm90ZXMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVLZXlzKCk7XG4gICAgfVxuICAgIFxuICAgIC8vUHVibGljIEZpZWxkc1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHJvb3ROb3RlOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnRhaW5lcjogc3RyaW5nO1xuICAgIHB1YmxpYyBvY3RhdmVzOiBudW1iZXI7XG4gICAgcHVibGljIG1ham9yTm90ZXM6IG51bWJlcjtcbiAgICBwdWJsaWMgbWFqb3JXaWR0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBtaW5vck5vdGVzOiBudW1iZXI7XG4gICAgcHVibGljIG1pbm9yT2Zmc2V0OiBudW1iZXI7XG4gICAgcHVibGljIHRvdGFsS2V5czogbnVtYmVyO1xuICAgIHB1YmxpYyBrZXlzOiBUU0tleU5vdGVbXTtcblxuICAgIHB1YmxpYyBtb3VzZUlzRG93bjogYm9vbGVhbjtcbiAgICBwdWJsaWMga2V5c0Rvd246IGFueTtcbiAgICBwdWJsaWMga2V5RG93bkNhbGxiYWNrOiBGdW5jdGlvbjtcbiAgICBwdWJsaWMga2V5VXBDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICAvL1B1YmxpYyBNZXRob2RzXG4gICAgLyoqIENyZWF0ZSBhbiBhcnJheSBvZiBwaWFubyBrZXlzKi9cbiAgICBwdWJsaWMgY3JlYXRlS2V5cygpOiB2b2lkIHtcbiAgICAgICAgLy8gbGV0IGtleUFycmF5OiBBcnJheTxQaWFub0tleT4gPSBbXTtcbiAgICAgICAgLy8gbGV0IG5vdGVfY291bnRlciA9IDA7XG4gICAgICAgIC8vIEluaXRpYWxpemUgUGlhbm9LZXkgYXJyYXlcbiAgICAgICAgdGhpcy5rZXlzID0gbmV3IEFycmF5PFRTS2V5Tm90ZT4oKTtcbiAgICAgICAgbGV0IG9jdGF2ZXM6IG51bWJlciA9IHRoaXMub2N0YXZlcztcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGludGVybmFsIG5vdGVzIGFycmF5ICR7b2N0YXZlc30gdGltZXM7XG4gICAgICAgIGZvciAobGV0IG9JbmRleDogbnVtYmVyID0gMDsgb0luZGV4IDwgb2N0YXZlczsgb0luZGV4KyspIHtcblxuICAgICAgICAgICAgbGV0IGJhc2VPY3RhdmU6IG51bWJlciA9IHBhcnNlSW50KHRoaXMucm9vdE5vdGUucmVwbGFjZSgvKFthLXpBLVojXSopLywgJycpKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgbkluZGV4OiBudW1iZXIgPSAwOyBuSW5kZXggPCAxMjsgbkluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgY3VycmVudCBub3RlIHN0cmluZyBhbmQgY2hlY2sgaXRzIHZhbHVlIHRvXG4gICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBmb3JjZSBpbmNyZW1lbnQgdGhlIGJhc2VPY3RhdmVcbiAgICAgICAgICAgICAgICAvLyBiZWZvcmUgYXBwZW5kaW5nIGl0IHRvIHRoZSBub3RlIHN0cmluZy5cbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudE5vdGU6IHN0cmluZyA9IHRoaXMubm90ZXNbbkluZGV4XTtcbiAgICAgICAgICAgICAgICBiYXNlT2N0YXZlICs9ICgoY3VycmVudE5vdGUgPT09IFwiQ1wiICYmIChuSW5kZXggIT09IDApKSA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm90ZSArPSAoYmFzZU9jdGF2ZSArIG9JbmRleCkudG9TdHJpbmcoKVxuXG4gICAgICAgICAgICAgICAgbGV0IG5ld0tleSA9IG5ldyBUU0tleU5vdGUoY3VycmVudE5vdGUpO1xuICAgICAgICAgICAgICAgIGlmKG5ld0tleS50eXBlID09ICdFbmhhcm1vbmljJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdLZXkuc2V0T3ZlcmxhcChvY3RhdmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzLnB1c2gobmV3S2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluamVjdFN0eWxlcygpO1xuICAgICAgICB0aGlzLmluamVjdEtleWJvYXJkKCk7XG4gICAgfVxuICAgIC8vUHJpdmF0ZSBGaWVsZHNcbiAgICBwcml2YXRlIGFjdGl2ZUtleXM6IFRTS2V5Tm90ZVtdO1xuICAgIC8qKkludGVybmFsbHkgc3RvcmUgdGhlIGtleWJvYXJkIG5vdGUgb3JkZXIqL1xuICAgIHByaXZhdGUgbm90ZXM6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgICdDJywgJ0MjJywgJ0QnLCdEIycsICdFJywgJ0YnLCdGIycsICdHJywgJ0cjJywnQScsICdBIycsICdCJ1xuICAgIF07XG4gICAgLy9Qcml2YXRlIE1ldGhvZHNcbiAgICBwcml2YXRlIHJvdGF0ZUFycmF5KGFycmF5OiBBcnJheTxhbnk+LCBpbmRleDogbnVtYmVyKTogQXJyYXk8YW55PiB7XG4gICAgICAgIGxldCBsZW5ndGggPSBhcnJheS5sZW5ndGggPj4+IDA7XG4gICAgICAgIGluZGV4ID0gaW5kZXggPj4gMDtcbiAgICAgICAgbGV0IG5ld0FycmF5OiBBcnJheTxzdHJpbmc+ID0gKEFycmF5PHN0cmluZz4oKSkuY29uY2F0KGFycmF5KTtcbiAgICAgICAgbmV3QXJyYXkucHVzaC5hcHBseShuZXdBcnJheSwgbmV3QXJyYXkuc3BsaWNlLmNhbGwobmV3QXJyYXksIDAsIGluZGV4KSk7XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcmRlck5vdGVzKCk6IHZvaWQge1xuICAgICAgICAvL2dldCB0aGUgaW5kZXggb2YgdGhlIGRlc2lyZWQgc3RhcnRpbmcgbm90ZSB0byB1c2UgYXMgY291bnRcbiAgICAgICAgbGV0IHNoaWZ0QW1vdW50OiBudW1iZXIgPSB0aGlzLm5vdGVzLmluZGV4T2YodGhpcy5yb290Tm90ZS5yZXBsYWNlKC8oWzAtOV0pKy8sICcnKSk7XG4gICAgICAgIHRoaXMubm90ZXMgPSB0aGlzLnJvdGF0ZUFycmF5KHRoaXMubm90ZXMsIHNoaWZ0QW1vdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5ub3RlcykpO1xuICAgIH1cbiAgICBwcml2YXRlIGluamVjdFN0eWxlcygpIHtcbiAgICAgICAgbGV0IGNzc2VsOiBIVE1MU3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBjc3NlbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICNjb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAua2V5Ym9hcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjFEO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5waWFub2tleSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuICAgICAgICAubmF0dXJhbCB7XG4gICAgICAgICAgICBmbGV4OiAyIDAgYXV0bztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5lbmhhcm1vbmljIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjVweDtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGNzc2VsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbmplY3RLZXlib2FyZCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXIpO1xuICAgICAgICBjb25zdCBrYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGdldE9mZnNldDogRnVuY3Rpb24gPSAoa2V5OiBhbnkpID0+IHtrZXkudHlwZSA9PSAnRW5oYXJtb25pYycgPyAtKGtleS5vdmVybGFwKSsnJScgOiAnJ31cbiAgICAgICAga2JlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE2MTYxRCc7XG4gICAgICAgIGtiZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDEgc3R5bGU9XCJjb2xvcjogd2hpdGVcIj4ke3RoaXMubmFtZX08L2gxPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkXCI+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cy5tYXAoKGtleSwgaSkgPT4gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHtrZXkubm90ZX1cIiBjbGFzcz1cInBpYW5va2V5ICR7KGtleS50eXBlID09IFwiTmF0dXJhbFwiKSA/ICduYXR1cmFsJyA6ICdlbmhhcm1vbmljJ31cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAke2dldE9mZnNldChrZXkpfTttYXJnaW4tcmlnaHQ6ICR7Z2V0T2Zmc2V0KGtleSl9O1wiXG4gICAgICAgICAgICAgICAgICAgIG9ubW91c2Vkb3duXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICBgLnRyaW0oKSkuam9pbignJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtiZWwpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHNrZXlzLmNsYXNzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==