"use strict";
// TypeScript 类型守卫和类型断言示例
// 展示类型守卫、类型断言、类型谓词的实际应用
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.colors = exports.definedValues = exports.mixedValues = exports.Rectangle = exports.Circle = void 0;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.processValue = processValue;
exports.getShapeArea = getShapeArea;
exports.makeSound = makeSound;
exports.isFish = isFish;
exports.isBird = isBird;
exports.movePet = movePet;
exports.getLength = getLength;
exports.doubleAssertion = doubleAssertion;
exports.getFirstElement = getFirstElement;
exports.getElementById = getElementById;
exports.getInputElement = getInputElement;
exports.handleUserRole = handleUserRole;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isDate = isDate;
exports.processData = processData;
exports.createProduct = createProduct;
exports.isDefined = isDefined;
exports.filterDefined = filterDefined;
// 1. 基础类型守卫
// 使用 typeof 进行类型检查
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
// 2. 类型守卫的使用
function processValue(value) {
    if (isString(value)) {
        // 这里 value 被推断为 string 类型
        console.log(`String: ${value.toUpperCase()}`);
    }
    else if (isNumber(value)) {
        // 这里 value 被推断为 number 类型
        console.log(`Number: ${value.toFixed(2)}`);
    }
    else if (isBoolean(value)) {
        // 这里 value 被推断为 boolean 类型
        console.log(`Boolean: ${value ? 'true' : 'false'}`);
    }
    else {
        console.log('Unknown type');
    }
}
// 3.  instanceof 类型守卫
// 用于检查对象是否为特定类的实例
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() { return Math.PI * this.radius ** 2; }
}
exports.Circle = Circle;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() { return this.width * this.height; }
}
exports.Rectangle = Rectangle;
function getShapeArea(shape) {
    // 使用 instanceof 检查类型
    if (shape instanceof Circle) {
        // 这里 shape 被推断为 Circle 类型
        return shape.getArea();
    }
    else if (shape instanceof Rectangle) {
        // 这里 shape 被推断为 Rectangle 类型
        return shape.getArea();
    }
    return 0;
}
function makeSound(animal) {
    // 使用 in 操作符检查属性
    if ('meow' in animal) {
        // 这里 animal 被推断为 Cat 类型
        animal.meow();
    }
    else if ('bark' in animal) {
        // 这里 animal 被推断为 Dog 类型
        animal.bark();
    }
}
// 使用类型谓词：value is Fish
function isFish(pet) {
    return pet.type === 'fish';
}
function isBird(pet) {
    return pet.type === 'bird';
}
function movePet(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else if (isBird(pet)) {
        pet.fly();
    }
}
// 6. 类型断言
// 使用 as 语法进行类型断言
function getLength(value) {
    // 断言 value 为 string 类型
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        // 断言 value 为 number 类型
        return value.toString().length;
    }
}
// 7. 双重断言
// 谨慎使用，可能会绕过类型检查
function doubleAssertion(value) {
    // 先断言为 any，再断言为 string
    return value;
}
// 8. 非空断言
// 使用 ! 断言值不为 null 或 undefined
function getFirstElement(array) {
    return array.length > 0 ? array[0] : undefined;
}
// 9. 类型断言与 DOM 元素
// 断言 DOM 元素的类型
function getElementById(id) {
    // 断言为 HTMLElement 类型
    return document.getElementById(id);
}
function getInputElement(id) {
    // 断言为 HTMLInputElement 类型
    return document.getElementById(id);
}
// 使用字面量类型守卫
function handleUserRole(user) {
    switch (user.role) {
        case 'admin':
            // 这里 user 被推断为 Admin 类型
            user.manageUsers();
            break;
        case 'editor':
            // 这里 user 被推断为 Editor 类型
            user.editContent();
            break;
        case 'viewer':
            // 这里 user 被推断为 Viewer 类型
            user.viewContent();
            break;
    }
}
// 11. 自定义类型守卫函数的组合
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
function isArray(value) {
    return Array.isArray(value);
}
function isDate(value) {
    return value instanceof Date;
}
// 12. 使用类型守卫处理复杂数据
function processData(data) {
    if (isArray(data)) {
        console.log(`Array with ${data.length} items`);
        data.forEach(item => processValue(item));
    }
    else if (isDate(data)) {
        console.log(`Date: ${data.toISOString()}`);
    }
    else if (isObject(data)) {
        console.log(`Object with ${Object.keys(data).length} properties`);
    }
    else {
        processValue(data);
    }
}
function createProduct(data) {
    // 使用类型断言确保返回值为 Product 类型
    return {
        id: data.id,
        name: data.name,
        price: data.price
    };
}
// 14. 类型守卫与泛型结合
function isDefined(value) {
    return value !== undefined && value !== null;
}
function filterDefined(array) {
    return array.filter(isDefined);
}
// 示例用法
const mixedValues = [
    'hello', 123, true, undefined, null, 'world', 456
];
exports.mixedValues = mixedValues;
const definedValues = filterDefined(mixedValues);
exports.definedValues = definedValues;
// 15. 使用 as const 进行类型断言
// 断言为只读字面量类型
const colors = ['red', 'green', 'blue'];
exports.colors = colors;
// colors 被推断为 readonly ['red', 'green', 'blue']
// 使用 as const 断言对象
const config = {
    host: 'localhost',
    port: 3000
};
exports.config = config;
//# sourceMappingURL=typeGuards.js.map