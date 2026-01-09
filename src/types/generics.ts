// TypeScript 泛型示例
// 展示泛型在函数、类、接口中的实际应用

// 1. 泛型函数
// 交换数组中两个元素的位置
function swap<T>(array: T[], index1: number, index2: number): T[] {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

// 使用泛型函数
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["a", "b", "c", "d", "e"];

const swappedNumbers = swap(numberArray, 0, 4);
const swappedStrings = swap(stringArray, 1, 3);

// 2. 泛型接口
// 定义一个泛型接口，表示一个容器
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

// 实现泛型接口
class NumberContainer implements Container<number> {
  constructor(public value: number) {}
  
  getValue(): number {
    return this.value;
  }
  
  setValue(value: number): void {
    this.value = value;
  }
}

class StringContainer implements Container<string> {
  constructor(public value: string) {}
  
  getValue(): string {
    return this.value;
  }
  
  setValue(value: string): void {
    this.value = value;
  }
}

// 3. 泛型类
// 定义一个泛型栈类
class Stack<T> {
  private items: T[] = [];
  
  // 入栈
  push(item: T): void {
    this.items.push(item);
  }
  
  // 出栈
  pop(): T | undefined {
    return this.items.pop();
  }
  
  // 获取栈顶元素
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  
  // 检查栈是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  
  // 获取栈的大小
  size(): number {
    return this.items.length;
  }
}

// 使用泛型类
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");

// 4. 泛型约束
// 定义一个接口，表示有长度的对象
interface Lengthwise {
  length: number;
}

// 泛型约束：T 必须实现 Lengthwise 接口
function logLength<T extends Lengthwise>(item: T): void {
  console.log(`Length: ${item.length}`);
}

// 可以传入字符串、数组等有 length 属性的类型
logLength("hello");
logLength([1, 2, 3]);

// 5. 泛型工具类型示例
// 使用泛型创建一个部分类型
interface User {
  id: string;
  name: string;
  email: string;
}

// 泛型与 Partial 结合
function updateUser<T extends User>(user: T, updates: Partial<T>): T {
  return { ...user, ...updates };
}

const user: User = {
  id: "user-001",
  name: "John",
  email: "john@example.com"
};

const updatedUser = updateUser(user, { name: "John Doe" });

// 6. 泛型与联合类型结合
type Result<T> = SuccessResult<T> | ErrorResult;

interface SuccessResult<T> {
  success: true;
  data: T;
}

interface ErrorResult {
  success: false;
  error: string;
}

function createSuccessResult<T>(data: T): Result<T> {
  return { success: true, data };
}

function createErrorResult(error: string): Result<never> {
  return { success: false, error };
}

// 使用泛型结果类型
const successResult = createSuccessResult<User>(user);
const errorResult = createErrorResult("Failed to fetch user");

export {
  swap,
  swappedNumbers,
  swappedStrings,
  NumberContainer,
  StringContainer,
  Stack,
  numberStack,
  stringStack,
  logLength,
  updateUser,
  user,
  updatedUser,
  createSuccessResult,
  createErrorResult,
  successResult,
  errorResult
};
