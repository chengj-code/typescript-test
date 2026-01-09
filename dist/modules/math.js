"use strict";
// 数学工具模块
// 提供基本的数学运算函数
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.power = power;
exports.squareRoot = squareRoot;
exports.absolute = absolute;
exports.round = round;
exports.floor = floor;
exports.ceil = ceil;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function squareRoot(n) {
    if (n < 0) {
        throw new Error("Square root of negative number is not allowed");
    }
    return Math.sqrt(n);
}
function absolute(n) {
    return Math.abs(n);
}
function round(n) {
    return Math.round(n);
}
function floor(n) {
    return Math.floor(n);
}
function ceil(n) {
    return Math.ceil(n);
}
//# sourceMappingURL=math.js.map