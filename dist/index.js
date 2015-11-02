"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = curry;

function curry(fn, numArgs) {

    return function (arg) {
        return (numArgs || fn.length) <= 1 ? fn.call(this, arg) : curry(fn.bind(this, arg), (numArgs || fn.length) - 1);
    };
}

module.exports = exports["default"];

