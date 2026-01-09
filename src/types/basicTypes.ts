// TypeScript 基础类型示例
// 展示基础类型、联合类型、交叉类型的实际应用

// 1. 基础类型
const username: string = "TypeScript Learner";
const age: number = 25;
const isActive: boolean = true;
const undefinedValue: undefined = undefined;
const nullValue: null = null;
const symbolValue: symbol = Symbol("unique");
const bigIntValue: bigint = 100n;

// 2. 数组类型
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: Array<string> = ["a", "b", "c"];

// 3. 元组类型
type UserInfo = [string, number, boolean];
const userInfo: UserInfo = ["Alice", 30, true];

// 4. 联合类型
// 表示值可以是多种类型中的一种
type ID = string | number;
const userId: ID = "user-123";
const productId: ID = 456;

// 5. 交叉类型
// 表示值同时具有多种类型的特性
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

// 交叉类型：同时是 Person 和 Employee
type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Bob",
  age: 35,
  employeeId: "emp-789",
  department: "Engineering"
};

// 6. 字面量类型
// 表示值只能是特定的字面量
type Direction = "up" | "down" | "left" | "right";
const moveDirection: Direction = "up";

// 7. void 类型
// 表示函数没有返回值
function logMessage(message: string): void {
  console.log(message);
}

// 8. never 类型
// 表示函数永远不会返回（例如抛出错误或无限循环）
function throwError(message: string): never {
  throw new Error(message);
}

// 导出示例供其他模块使用
export {
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
  logMessage,
  throwError
};

export type {
  ID,
  UserInfo,
  Staff,
  Direction
};
