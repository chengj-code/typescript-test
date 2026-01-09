"use strict";
// TypeScript 泛型示例
// 展示泛型在函数、类、接口中的实际应用
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResult = exports.successResult = exports.updatedUser = exports.user = exports.stringStack = exports.numberStack = exports.Stack = exports.StringContainer = exports.NumberContainer = exports.swappedStrings = exports.swappedNumbers = void 0;
exports.swap = swap;
exports.logLength = logLength;
exports.updateUser = updateUser;
exports.createSuccessResult = createSuccessResult;
exports.createErrorResult = createErrorResult;
// 1. 泛型函数
// 交换数组中两个元素的位置
function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
// 使用泛型函数
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["a", "b", "c", "d", "e"];
const swappedNumbers = swap(numberArray, 0, 4);
exports.swappedNumbers = swappedNumbers;
const swappedStrings = swap(stringArray, 1, 3);
exports.swappedStrings = swappedStrings;
// 实现泛型接口
class NumberContainer {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.NumberContainer = NumberContainer;
class StringContainer {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.StringContainer = StringContainer;
// 3. 泛型类
// 定义一个泛型栈类
class Stack {
    constructor() {
        this.items = [];
    }
    // 入栈
    push(item) {
        this.items.push(item);
    }
    // 出栈
    pop() {
        return this.items.pop();
    }
    // 获取栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }
    // 检查栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }
    // 获取栈的大小
    size() {
        return this.items.length;
    }
}
exports.Stack = Stack;
// 使用泛型类
const numberStack = new Stack();
exports.numberStack = numberStack;
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
const stringStack = new Stack();
exports.stringStack = stringStack;
stringStack.push("hello");
stringStack.push("world");
// 泛型约束：T 必须实现 Lengthwise 接口
function logLength(item) {
    console.log(`Length: ${item.length}`);
}
// 可以传入字符串、数组等有 length 属性的类型
logLength("hello");
logLength([1, 2, 3]);
// 泛型与 Partial 结合
function updateUser(user, updates) {
    return { ...user, ...updates };
}
const user = {
    id: "user-001",
    name: "John",
    email: "john@example.com"
};
exports.user = user;
const updatedUser = updateUser(user, { name: "John Doe" });
exports.updatedUser = updatedUser;
function createSuccessResult(data) {
    return { success: true, data };
}
function createErrorResult(error) {
    return { success: false, error };
}
// 使用泛型结果类型
const successResult = createSuccessResult(user);
exports.successResult = successResult;
const errorResult = createErrorResult("Failed to fetch user");
exports.errorResult = errorResult;
//# sourceMappingURL=generics.js.map