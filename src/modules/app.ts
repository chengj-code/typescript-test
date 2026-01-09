// TypeScript 综合性项目 - 应用初始化模块
// 导入并运行所有示例，展示 TypeScript 核心特性的实际应用

// 导入装饰器示例
import { runDecoratorExamples } from '../decorators/index';

// 导入模块系统示例
import { runModuleExamples } from './moduleExample';
import { useMathNamespace, useMergedNamespace, useAppNamespace } from './namespaceExample';

// 导入异步编程示例
import { runAsyncExamples } from '../async/asyncTypes';

// 导入类型系统示例
import {
  username,
  age,
  isActive,
  numbers,
  strings,
  userInfo,
  userId,
  productId,
  staffMember,
  moveDirection,
  logMessage
} from '../types/basicTypes';

import {
  partialProduct,
  requiredProduct,
  readonlyProduct,
  productInventory,
  productSummary,
  productDetails,
  createProduct
} from '../types/advancedTypes';

import {
  swap,
  swappedNumbers,
  swappedStrings,
  numberStack,
  stringStack,
  user,
  updatedUser,
  successResult,
  errorResult,
  Stack
} from '../types/generics';

import {
  Direction,
  upDirection,
  leftDirection,
  directionName,
  StatusCode,
  successCode,
  notFoundCode,
  Color,
  redColor,
  getDirectionName,
  directionNameZh,
  successResponse,
  errorResponse
} from '../types/enums';

import {
  isString,
  isNumber,
  isBoolean,
  processValue,
  Circle,
  Rectangle,
  getShapeArea,
  processData,
  filterDefined,
  mixedValues,
  definedValues
} from '../types/typeGuards';

// 导入接口示例
import {
  regularUser,
  admin,
  getUserInfo,
  translations,
  numberList
} from '../interfaces/user';

// 应用初始化函数
export function initializeApp(): void {
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
  runDecoratorExamples();
  runModuleSystemExample();
  runNamespaceExample();
  runAsyncExamples();

  console.log('\n========================================');
  console.log('所有示例运行完毕！');
  console.log('========================================');
}

// 1. 基础类型示例
function runBasicTypesExample(): void {
  console.log('\n=== 1. 基础类型系统示例 ===');

  console.log(`Username: ${username}`);
  console.log(`Age: ${age}`);
  console.log(`Is Active: ${isActive}`);
  console.log(`Numbers: ${numbers}`);
  console.log(`Strings: ${strings}`);
  console.log(`User Info: ${userInfo}`);
  console.log(`User ID: ${userId}`);
  console.log(`Product ID: ${productId}`);
  console.log(`Staff Member: ${JSON.stringify(staffMember)}`);
  console.log(`Move Direction: ${moveDirection}`);

  logMessage('基础类型系统示例运行完毕');
}

// 2. 接口示例
function runInterfacesExample(): void {
  console.log('\n=== 2. 接口示例 ===');

  console.log(`Regular User: ${JSON.stringify(regularUser)}`);
  console.log(`Admin User: ${JSON.stringify(admin)}`);
  console.log(`User Info: ${getUserInfo(regularUser)}`);
  console.log(`Translations: ${JSON.stringify(translations)}`);
  console.log(`Number List: ${numberList}`);

  // 调用接口中定义的方法
  regularUser.login();
  admin.manageUsers();
}

// 3. 高级类型示例
function runAdvancedTypesExample(): void {
  console.log('\n=== 3. 高级类型示例 ===');

  console.log(`Partial Product: ${JSON.stringify(partialProduct)}`);
  console.log(`Required Product: ${JSON.stringify(requiredProduct)}`);
  console.log(`Readonly Product: ${JSON.stringify(readonlyProduct)}`);
  console.log(`Product Inventory: ${JSON.stringify(productInventory)}`);
  console.log(`Product Summary: ${JSON.stringify(productSummary)}`);
  console.log(`Product Details: ${JSON.stringify(productDetails)}`);

  // 使用 createProduct 函数
  const newProduct = createProduct('Test Product', 99.99);
  console.log(`Created Product: ${JSON.stringify(newProduct)}`);
}

// 4. 泛型示例
function runGenericsExample(): void {
  console.log('\n=== 4. 泛型示例 ===');

  console.log(`Swapped Numbers: ${swappedNumbers}`);
  console.log(`Swapped Strings: ${swappedStrings}`);

  console.log(`Number Stack Size: ${numberStack.size()}`);
  console.log(`String Stack Peek: ${stringStack.peek()}`);

  console.log(`Original User: ${JSON.stringify(user)}`);
  console.log(`Updated User: ${JSON.stringify(updatedUser)}`);

  console.log(`Success Result: ${JSON.stringify(successResult)}`);
  console.log(`Error Result: ${JSON.stringify(errorResult)}`);

  // 测试泛型栈
  const testStack = new Stack<number>();
  testStack.push(1);
  testStack.push(2);
  testStack.push(3);
  console.log(`Test Stack Pop: ${testStack.pop()}`);
  console.log(`Test Stack Size: ${testStack.size()}`);
}

// 5. 枚举示例
function runEnumsExample(): void {
  console.log('\n=== 5. 枚举示例 ===');

  console.log(`Direction Up: ${upDirection}`);
  console.log(`Direction Left: ${leftDirection}`);
  console.log(`Direction Name for 1: ${directionName}`);
  console.log(`Success Code: ${successCode}`);
  console.log(`Not Found Code: ${notFoundCode}`);
  console.log(`Red Color: ${redColor}`);
  console.log(`Direction Name (Chinese): ${directionNameZh}`);

  console.log(`Success Response: ${JSON.stringify(successResponse)}`);
  console.log(`Error Response: ${JSON.stringify(errorResponse)}`);

  // 测试枚举 switch 函数
  console.log(`Direction Down in Chinese: ${getDirectionName(Direction.Down)}`);
}

// 6. 类型守卫示例
function runTypeGuardsExample(): void {
  console.log('\n=== 6. 类型守卫示例 ===');

  // 测试基础类型守卫
  console.log(`Is "test" a string? ${isString("test")}`);
  console.log(`Is 123 a number? ${isNumber(123)}`);
  console.log(`Is true a boolean? ${isBoolean(true)}`);

  // 测试 processValue 函数
  console.log('\nProcessing various values:');
  processValue("hello");
  processValue(123);
  processValue(true);
  processValue(null);

  // 测试 instanceof 类型守卫
  const circle = new Circle(5);
  const rectangle = new Rectangle(10, 5);
  console.log(`Circle Area: ${getShapeArea(circle)}`);
  console.log(`Rectangle Area: ${getShapeArea(rectangle)}`);

  // 测试 processData 函数
  console.log('\nProcessing complex data:');
  processData(["string", 123, true, { key: "value" }, new Date()]);

  // 测试 filterDefined 函数
  console.log(`Mixed Values: ${mixedValues}`);
  console.log(`Defined Values: ${definedValues}`);
}

// 7. 模块系统示例
function runModuleSystemExample(): void {
  console.log('\n=== 7. 模块系统示例 ===');
  runModuleExamples();
}

// 8. 命名空间示例
function runNamespaceExample(): void {
  console.log('\n=== 8. 命名空间示例 ===');
  useMathNamespace();
  useMergedNamespace();
  useAppNamespace();
}
