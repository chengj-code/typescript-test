"use strict";
// TypeScript 命名空间示例
// 展示命名空间的定义、导出和使用
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMathNamespace = useMathNamespace;
exports.useMergedNamespace = useMergedNamespace;
exports.useAppNamespace = useAppNamespace;
// 1. 基础命名空间
// 命名空间用于组织相关的代码
var MathUtils;
(function (MathUtils) {
    // 命名空间内部的变量和函数
    MathUtils.PI = Math.PI;
    // 导出函数
    function calculateCircumference(radius) {
        return 2 * MathUtils.PI * radius;
    }
    MathUtils.calculateCircumference = calculateCircumference;
    function calculateArea(radius) {
        return MathUtils.PI * radius * radius;
    }
    MathUtils.calculateArea = calculateArea;
    // 嵌套命名空间
    let Geometry;
    (function (Geometry) {
        function calculateRectangleArea(width, height) {
            return width * height;
        }
        Geometry.calculateRectangleArea = calculateRectangleArea;
        function calculateTriangleArea(base, height) {
            return 0.5 * base * height;
        }
        Geometry.calculateTriangleArea = calculateTriangleArea;
    })(Geometry = MathUtils.Geometry || (MathUtils.Geometry = {}));
})(MathUtils || (MathUtils = {}));
// 2. 命名空间的使用
// 使用命名空间中的成员
function useMathNamespace() {
    console.log("=== 命名空间示例 ===");
    const radius = 5;
    console.log(`Circle with radius ${radius}:`);
    console.log(`Circumference: ${MathUtils.calculateCircumference(radius)}`);
    console.log(`Area: ${MathUtils.calculateArea(radius)}`);
    console.log("\nRectangle:");
    console.log(`Area: ${MathUtils.Geometry.calculateRectangleArea(10, 5)}`);
    console.log("\nTriangle:");
    console.log(`Area: ${MathUtils.Geometry.calculateTriangleArea(10, 5)}`);
}
// 3. 多个文件中的命名空间
// 如果命名空间分布在多个文件中，可以使用三斜杠引用
// /// <reference path="anotherNamespace.ts" />
// 4. 命名空间与模块的区别
// - 命名空间：内部模块，用于组织代码，避免命名冲突
// - 模块：外部模块，通过 import/export 进行导入导出
// - 命名空间可以跨文件共享，模块是文件级别的
// - 现代 TypeScript 开发中，模块系统更常用
// 5. 命名空间合并
// 可以在不同位置声明同一个命名空间，它们会自动合并
var Utils;
(function (Utils) {
    function log(message) {
        console.log(`[LOG] ${message}`);
    }
    Utils.log = log;
})(Utils || (Utils = {}));
(function (Utils) {
    function error(message) {
        console.error(`[ERROR] ${message}`);
    }
    Utils.error = error;
})(Utils || (Utils = {}));
// 使用合并后的命名空间
function useMergedNamespace() {
    console.log("\n=== 命名空间合并示例 ===");
    Utils.log("This is a log message");
    Utils.error("This is an error message");
}
// 6. 命名空间与类、接口结合
var App;
(function (App) {
    class UserService {
        constructor(users) {
            this.users = users;
        }
        getUserById(id) {
            return this.users.find(user => user.id === id);
        }
        addUser(user) {
            this.users.push(user);
        }
    }
    App.UserService = UserService;
})(App || (App = {}));
// 使用命名空间中的类和接口
function useAppNamespace() {
    console.log("\n=== 命名空间与类、接口结合示例 ===");
    const users = [
        { id: "1", name: "John" },
        { id: "2", name: "Jane" }
    ];
    const userService = new App.UserService(users);
    console.log(userService.getUserById("1"));
    userService.addUser({ id: "3", name: "Bob" });
    console.log(userService.getUserById("3"));
}
//# sourceMappingURL=namespaceExample.js.map