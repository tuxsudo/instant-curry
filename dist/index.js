"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = curry;
function curry(fn) {

    return function (arg) {

        // invoked when only expecting one argument...
        // or
        // enought arguments where passed in to invoke the function
        // return invoked value
        if (fn.length <= 1 || arguments.length >= fn.length) {
            return fn.apply(this, arguments);
        }

        // not enough arguments were provided
        // return curried version of partially-applied function
        return [].reduce.call(arguments, function (l, c) {
            return curry(l.bind(null, c));
        }, fn);
    };
}

