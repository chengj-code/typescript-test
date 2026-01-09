// TypeScript 类型守卫和类型断言示例
// 展示类型守卫、类型断言、类型谓词的实际应用

// 1. 基础类型守卫
// 使用 typeof 进行类型检查
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

// 2. 类型守卫的使用
function processValue(value: unknown): void {
  if (isString(value)) {
    // 这里 value 被推断为 string 类型
    console.log(`String: ${value.toUpperCase()}`);
  } else if (isNumber(value)) {
    // 这里 value 被推断为 number 类型
    console.log(`Number: ${value.toFixed(2)}`);
  } else if (isBoolean(value)) {
    // 这里 value 被推断为 boolean 类型
    console.log(`Boolean: ${value ? 'true' : 'false'}`);
  } else {
    console.log('Unknown type');
  }
}

// 3.  instanceof 类型守卫
// 用于检查对象是否为特定类的实例
class Circle {
  constructor(public radius: number) { }
  getArea() { return Math.PI * this.radius ** 2; }
}

class Rectangle {
  constructor(public width: number, public height: number) { }
  getArea() { return this.width * this.height; }
}

type Shape = Circle | Rectangle;

function getShapeArea(shape: Shape): number {
  // 使用 instanceof 检查类型
  if (shape instanceof Circle) {
    // 这里 shape 被推断为 Circle 类型
    return shape.getArea();
  } else if (shape instanceof Rectangle) {
    // 这里 shape 被推断为 Rectangle 类型
    return shape.getArea();
  }
  return 0;
}

// 4. in 操作符类型守卫
// 用于检查对象是否具有特定属性
interface Cat {
  type: 'cat';
  meow: () => void;
}

interface Dog {
  type: 'dog';
  bark: () => void;
}

type Animal = Cat | Dog;

function makeSound(animal: Animal): void {
  // 使用 in 操作符检查属性
  if ('meow' in animal) {
    // 这里 animal 被推断为 Cat 类型
    animal.meow();
  } else if ('bark' in animal) {
    // 这里 animal 被推断为 Dog 类型
    animal.bark();
  }
}

// 5. 类型谓词函数
// 使用自定义类型守卫函数
interface Fish {
  swim: () => void;
  type: 'fish';
}

interface Bird {
  fly: () => void;
  type: 'bird';
}

type Pet = Fish | Bird;

// 使用类型谓词：value is Fish
function isFish(pet: Pet): pet is Fish {
  return pet.type === 'fish';
}

function isBird(pet: Pet): pet is Bird {
  return pet.type === 'bird';
}

function movePet(pet: Pet): void {
  if (isFish(pet)) {
    pet.swim();
  } else if (isBird(pet)) {
    pet.fly();
  }
}

// 6. 类型断言
// 使用 as 语法进行类型断言
function getLength(value: string | number): number {
  // 断言 value 为 string 类型
  if (typeof value === 'string') {
    return value.length;
  } else {
    // 断言 value 为 number 类型
    return value.toString().length;
  }
}

// 7. 双重断言
// 谨慎使用，可能会绕过类型检查
function doubleAssertion(value: unknown): string {
  // 先断言为 any，再断言为 string
  return (value as any) as string;
}

// 8. 非空断言
// 使用 ! 断言值不为 null 或 undefined
function getFirstElement<T>(array: T[] | null | undefined): T | undefined {
  return array!.length > 0 ? array![0] : undefined;
}

// 9. 类型断言与 DOM 元素
// 断言 DOM 元素的类型
function getElementById(id: string): HTMLElement | null {
  // 断言为 HTMLElement 类型
  return document.getElementById(id);
}

function getInputElement(id: string): HTMLInputElement | null {
  // 断言为 HTMLInputElement 类型
  return document.getElementById(id) as HTMLInputElement | null;
}

// 10. 类型守卫与联合类型
// 处理复杂的联合类型
interface Admin {
  role: 'admin';
  manageUsers: () => void;
}

interface Editor {
  role: 'editor';
  editContent: () => void;
}

interface Viewer {
  role: 'viewer';
  viewContent: () => void;
}

type UserRole = Admin | Editor | Viewer;

// 使用字面量类型守卫
function handleUserRole(user: UserRole): void {
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
function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

// 12. 使用类型守卫处理复杂数据
function processData(data: unknown): void {
  if (isArray(data)) {
    console.log(`Array with ${data.length} items`);
    data.forEach(item => processValue(item));
  } else if (isDate(data)) {
    console.log(`Date: ${data.toISOString()}`);
  } else if (isObject(data)) {
    console.log(`Object with ${Object.keys(data).length} properties`);
  } else {
    processValue(data);
  }
}

// 13. 类型断言的实际应用
// 当我们确定某个值的类型，但 TypeScript 无法推断时
interface Product {
  id: string;
  name: string;
  price: number;
}

function createProduct(data: any): Product {
  // 使用类型断言确保返回值为 Product 类型
  return {
    id: data.id,
    name: data.name,
    price: data.price
  } as Product;
}

// 14. 类型守卫与泛型结合
function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

function filterDefined<T>(array: (T | undefined | null)[]): T[] {
  return array.filter(isDefined);
}

// 示例用法
const mixedValues: (string | number | boolean | undefined | null)[] = [
  'hello', 123, true, undefined, null, 'world', 456
];

const definedValues = filterDefined(mixedValues);

// 15. 使用 as const 进行类型断言
// 断言为只读字面量类型
const colors = ['red', 'green', 'blue'] as const;
// colors 被推断为 readonly ['red', 'green', 'blue']

// 使用 as const 断言对象
const config = {
  host: 'localhost',
  port: 3000
} as const;
// config 被推断为 readonly { host: 'localhost'; port: 3000; }

export {
  isString,
  isNumber,
  isBoolean,
  processValue,
  Circle,
  Rectangle,
  getShapeArea,
  makeSound,
  isFish,
  isBird,
  movePet,
  getLength,
  doubleAssertion,
  getFirstElement,
  getElementById,
  getInputElement,
  handleUserRole,
  isObject,
  isArray,
  isDate,
  processData,
  createProduct,
  isDefined,
  filterDefined,
  mixedValues,
  definedValues,
  colors,
  config
};

export type {
  Cat,
  Dog,
  Fish,
  Bird
};
