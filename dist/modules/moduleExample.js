"use strict";
// TypeScript 模块系统示例
// 展示如何使用 import/export 进行模块管理
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = exports.LogLevel = exports.DEFAULT_CONFIG = exports.Person = void 0;
exports.greet = greet;
exports.default = calculateSum;
exports.runModuleExamples = runModuleExamples;
// 1. 模块的定义
// 每个文件都是一个模块，通过 export 导出内容
// 通过 import 导入其他模块的内容
// 2. 导出函数
function greet(name) {
    return `Hello, ${name}!`;
}
// 3. 导出类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
exports.Person = Person;
// 6. 导出变量
exports.DEFAULT_CONFIG = {
    host: "localhost",
    port: 3000,
    ssl: false
};
// 7. 导出枚举
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
// 8. 命名导出 vs 默认导出
// 命名导出：可以导出多个，使用 { } 导入
// 默认导出：每个模块只能有一个默认导出，使用 import 直接导入
// 默认导出示例
function calculateSum(a, b) {
    return a + b;
}
// 9. 重导出
// 可以将导入的内容重新导出
var math_1 = require("./math"); // 假设 ./math 模块存在
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return math_1.add; } });
Object.defineProperty(exports, "subtract", { enumerable: true, get: function () { return math_1.subtract; } });
// 10. 导入语法示例
/*
// 导入默认导出
import calculateSum from "./moduleExample";

// 导入命名导出
import { greet, Person, Config } from "./moduleExample";

// 导入所有命名导出
import * as ModuleExample from "./moduleExample";

// 导入并重新命名
import { greet as sayHello } from "./moduleExample";

// 同时导入默认导出和命名导出
import calculateSum, { greet, Person } from "./moduleExample";
*/
// 11. 模块解析
// TypeScript 支持多种模块解析策略：
// - Node：Node.js 模块解析策略
// - Classic：传统 TypeScript 模块解析策略
// 在 tsconfig.json 中通过 moduleResolution 配置
// 12. 示例用法
function runModuleExamples() {
    console.log("=== 模块系统示例 ===");
    // 使用导出的函数
    const greeting = greet("TypeScript");
    console.log(greeting);
    // 使用导出的类
    const person = new Person("John", 30);
    console.log(person.getInfo());
    // 使用导出的变量
    console.log("Default Config:", exports.DEFAULT_CONFIG);
    // 使用导出的枚举
    console.log("Log Levels:", LogLevel);
    // 使用默认导出的函数
    const sum = calculateSum(10, 20);
    console.log(`Sum: ${sum}`);
}
//# sourceMappingURL=moduleExample.js.map