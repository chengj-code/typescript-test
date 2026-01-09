"use strict";
// TypeScript 综合性项目 - 应用初始化模块
// 导入并运行所有示例，展示 TypeScript 核心特性的实际应用
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = initializeApp;
// 导入装饰器示例
const decorators_1 = require("../decorators");
// 导入模块系统示例
const moduleExample_1 = require("./moduleExample");
const namespaceExample_1 = require("./namespaceExample");
// 导入异步编程示例
const asyncTypes_1 = require("../async/asyncTypes");
// 导入类型系统示例
const basicTypes_1 = require("../types/basicTypes");
const advancedTypes_1 = require("../types/advancedTypes");
const generics_1 = require("../types/generics");
const enums_1 = require("../types/enums");
const typeGuards_1 = require("../types/typeGuards");
// 导入接口示例
const user_1 = require("../interfaces/user");
// 应用初始化函数
function initializeApp() {
    console.log('========================================');
    console.log('TypeScript 综合性学习项目');
    console.log('========================================');
    console.log('展示 TypeScript 所有核心知识点的实际应用\n');
    // 运行各个示例模块
    runBasicTypesExample();
    runInterfacesExample();
    runAdvancedTypesExample();
    runGenericsExample();
    runEnumsExample();
    runTypeGuardsExample();
    (0, decorators_1.runDecoratorExamples)();
    runModuleSystemExample();
    runNamespaceExample();
    (0, asyncTypes_1.runAsyncExamples)();
    console.log('\n========================================');
    console.log('所有示例运行完毕！');
    console.log('========================================');
}
// 1. 基础类型示例
function runBasicTypesExample() {
    console.log('\n=== 1. 基础类型系统示例 ===');
    console.log(`Username: ${basicTypes_1.username}`);
    console.log(`Age: ${basicTypes_1.age}`);
    console.log(`Is Active: ${basicTypes_1.isActive}`);
    console.log(`Numbers: ${basicTypes_1.numbers}`);
    console.log(`Strings: ${basicTypes_1.strings}`);
    console.log(`User Info: ${basicTypes_1.userInfo}`);
    console.log(`User ID: ${basicTypes_1.userId}`);
    console.log(`Product ID: ${basicTypes_1.productId}`);
    console.log(`Staff Member: ${JSON.stringify(basicTypes_1.staffMember)}`);
    console.log(`Move Direction: ${basicTypes_1.moveDirection}`);
    (0, basicTypes_1.logMessage)('基础类型系统示例运行完毕');
}
// 2. 接口示例
function runInterfacesExample() {
    console.log('\n=== 2. 接口示例 ===');
    console.log(`Regular User: ${JSON.stringify(user_1.regularUser)}`);
    console.log(`Admin User: ${JSON.stringify(user_1.admin)}`);
    console.log(`User Info: ${(0, user_1.getUserInfo)(user_1.regularUser)}`);
    console.log(`Translations: ${JSON.stringify(user_1.translations)}`);
    console.log(`Number List: ${user_1.numberList}`);
    // 调用接口中定义的方法
    user_1.regularUser.login();
    user_1.admin.manageUsers();
}
// 3. 高级类型示例
function runAdvancedTypesExample() {
    console.log('\n=== 3. 高级类型示例 ===');
    console.log(`Partial Product: ${JSON.stringify(advancedTypes_1.partialProduct)}`);
    console.log(`Required Product: ${JSON.stringify(advancedTypes_1.requiredProduct)}`);
    console.log(`Readonly Product: ${JSON.stringify(advancedTypes_1.readonlyProduct)}`);
    console.log(`Product Inventory: ${JSON.stringify(advancedTypes_1.productInventory)}`);
    console.log(`Product Summary: ${JSON.stringify(advancedTypes_1.productSummary)}`);
    console.log(`Product Details: ${JSON.stringify(advancedTypes_1.productDetails)}`);
    // 使用 createProduct 函数
    const newProduct = (0, advancedTypes_1.createProduct)('Test Product', 99.99);
    console.log(`Created Product: ${JSON.stringify(newProduct)}`);
}
// 4. 泛型示例
function runGenericsExample() {
    console.log('\n=== 4. 泛型示例 ===');
    console.log(`Swapped Numbers: ${generics_1.swappedNumbers}`);
    console.log(`Swapped Strings: ${generics_1.swappedStrings}`);
    console.log(`Number Stack Size: ${generics_1.numberStack.size()}`);
    console.log(`String Stack Peek: ${generics_1.stringStack.peek()}`);
    console.log(`Original User: ${JSON.stringify(generics_1.user)}`);
    console.log(`Updated User: ${JSON.stringify(generics_1.updatedUser)}`);
    console.log(`Success Result: ${JSON.stringify(generics_1.successResult)}`);
    console.log(`Error Result: ${JSON.stringify(generics_1.errorResult)}`);
    // 测试泛型栈
    const testStack = new generics_1.Stack();
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    console.log(`Test Stack Pop: ${testStack.pop()}`);
    console.log(`Test Stack Size: ${testStack.size()}`);
}
// 5. 枚举示例
function runEnumsExample() {
    console.log('\n=== 5. 枚举示例 ===');
    console.log(`Direction Up: ${enums_1.upDirection}`);
    console.log(`Direction Left: ${enums_1.leftDirection}`);
    console.log(`Direction Name for 1: ${enums_1.directionName}`);
    console.log(`Success Code: ${enums_1.successCode}`);
    console.log(`Not Found Code: ${enums_1.notFoundCode}`);
    console.log(`Red Color: ${enums_1.redColor}`);
    console.log(`Direction Name (Chinese): ${enums_1.directionNameZh}`);
    console.log(`Success Response: ${JSON.stringify(enums_1.successResponse)}`);
    console.log(`Error Response: ${JSON.stringify(enums_1.errorResponse)}`);
    // 测试枚举 switch 函数
    console.log(`Direction Down in Chinese: ${(0, enums_1.getDirectionName)(enums_1.Direction.Down)}`);
}
// 6. 类型守卫示例
function runTypeGuardsExample() {
    console.log('\n=== 6. 类型守卫示例 ===');
    // 测试基础类型守卫
    console.log(`Is "test" a string? ${(0, typeGuards_1.isString)("test")}`);
    console.log(`Is 123 a number? ${(0, typeGuards_1.isNumber)(123)}`);
    console.log(`Is true a boolean? ${(0, typeGuards_1.isBoolean)(true)}`);
    // 测试 processValue 函数
    console.log('\nProcessing various values:');
    (0, typeGuards_1.processValue)("hello");
    (0, typeGuards_1.processValue)(123);
    (0, typeGuards_1.processValue)(true);
    (0, typeGuards_1.processValue)(null);
    // 测试 instanceof 类型守卫
    const circle = new typeGuards_1.Circle(5);
    const rectangle = new typeGuards_1.Rectangle(10, 5);
    console.log(`Circle Area: ${(0, typeGuards_1.getShapeArea)(circle)}`);
    console.log(`Rectangle Area: ${(0, typeGuards_1.getShapeArea)(rectangle)}`);
    // 测试 processData 函数
    console.log('\nProcessing complex data:');
    (0, typeGuards_1.processData)(["string", 123, true, { key: "value" }, new Date()]);
    // 测试 filterDefined 函数
    console.log(`Mixed Values: ${typeGuards_1.mixedValues}`);
    console.log(`Defined Values: ${typeGuards_1.definedValues}`);
}
// 7. 模块系统示例
function runModuleSystemExample() {
    console.log('\n=== 7. 模块系统示例 ===');
    (0, moduleExample_1.runModuleExamples)();
}
// 8. 命名空间示例
function runNamespaceExample() {
    console.log('\n=== 8. 命名空间示例 ===');
    (0, namespaceExample_1.useMathNamespace)();
    (0, namespaceExample_1.useMergedNamespace)();
    (0, namespaceExample_1.useAppNamespace)();
}
//# sourceMappingURL=app.js.map