"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mathf = void 0;
var Mathf = /** @class */ (function () {
    function Mathf() {
    }
    Mathf.PI = 3.141592653589793;
    Mathf.E = 2.718281828459045;
    Mathf.TAU = 6.283185307179586;
    Mathf.isOdd = function (num) { return (num % 2 === 1); };
    Mathf.isEven = function (num) { return (num % 2 === 0); };
    return Mathf;
}());
exports.Mathf = Mathf;
