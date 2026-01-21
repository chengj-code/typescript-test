"use strict";
// TypeScript 基础类型示例
// 展示基础类型、联合类型、交叉类型的实际应用
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveDirection = exports.staffMember = exports.productId = exports.userId = exports.userInfo = exports.strings = exports.numbers = exports.isActive = exports.age = exports.username = void 0;
exports.logMessage = logMessage;
exports.throwError = throwError;
// 1. 基础类型
const username = "TypeScript Learner";
exports.username = username;
const age = 25;
exports.age = age;
const isActive = true;
exports.isActive = isActive;
const undefinedValue = undefined;
const nullValue = null;
const symbolValue = Symbol("unique");
const bigIntValue = 100n;
// 2. 数组类型
const numbers = [1, 2, 3, 4, 5];
exports.numbers = numbers;
const strings = ["a", "b", "c"];
exports.strings = strings;
const userInfo = ["Alice", 30, true];
exports.userInfo = userInfo;
const userId = "user-123";
exports.userId = userId;
const productId = 456;
exports.productId = productId;
const staffMember = {
    name: "Bob",
    age: 35,
    employeeId: "emp-789",
    department: "Engineering"
};
exports.staffMember = staffMember;
const moveDirection = "up";
exports.moveDirection = moveDirection;
// 7. void 类型
// 表示函数没有返回值
function logMessage(message) {
    console.log(message);
}
// 8. never 类型
// 表示函数永远不会返回（例如抛出错误或无限循环）
function throwError(message) {
    throw new Error(message);
}
const optional = ["Alice"]; // ✅
const optionalWithAge = ["Bob", 30]; // ✅
const restTuple = ["first", 1, 2, 3]; // ✅
const fixedLength = [1, 2, 3]; // ✅
const readonlyTuple = ["read", 42]; // ✅
// 5、元组的解构赋值
const [name, ageFromTuple] = userInfo; // name: "Alice", ageFromTuple: 30
// 6、元组的类型断言
const mixedArray = ["hello", 123, "world"];
const stringTuple = mixedArray; // 断言为元组类型
const stringArray = ["a", "b"];
const numberArray = [1, 2];
const readonlyStringArray = ["a", "b"];
// 4、数组的解构赋值
const [first, second, ...rest] = numbers; // first: 1, second: 2, rest: [3, 4, 5]
// 5、数组的类型断言
const mixedArray2 = ["hello", 123, "world"];
const stringArray2 = mixedArray2; // 断言为字符串数组
const mixed = ["a", 1, true]; // ✅
//# sourceMappingURL=basicTypes.js.map