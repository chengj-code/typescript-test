// TypeScript 模块系统示例
// 展示如何使用 import/export 进行模块管理

// 1. 模块的定义
// 每个文件都是一个模块，通过 export 导出内容
// 通过 import 导入其他模块的内容

// 2. 导出函数
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 3. 导出类
export class Person {
  constructor(private name: string, private age: number) {}
  
  public getInfo(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

// 4. 导出接口
export interface Config {
  host: string;
  port: number;
  ssl: boolean;
}

// 5. 导出类型别名
export type Status = "active" | "inactive" | "pending";

// 6. 导出变量
export const DEFAULT_CONFIG: Config = {
  host: "localhost",
  port: 3000,
  ssl: false
};

// 7. 导出枚举
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

// 8. 命名导出 vs 默认导出
// 命名导出：可以导出多个，使用 { } 导入
// 默认导出：每个模块只能有一个默认导出，使用 import 直接导入

// 默认导出示例
export default function calculateSum(a: number, b: number): number {
  return a + b;
}

// 9. 重导出
// 可以将导入的内容重新导出
export { add, subtract } from "./math"; // 假设 ./math 模块存在

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
function runModuleExamples(): void {
  console.log("=== 模块系统示例 ===");
  
  // 使用导出的函数
  const greeting = greet("TypeScript");
  console.log(greeting);
  
  // 使用导出的类
  const person = new Person("John", 30);
  console.log(person.getInfo());
  
  // 使用导出的变量
  console.log("Default Config:", DEFAULT_CONFIG);
  
  // 使用导出的枚举
  console.log("Log Levels:", LogLevel);
  
  // 使用默认导出的函数
  const sum = calculateSum(10, 20);
  console.log(`Sum: ${sum}`);
}

// 13. 模块的优势
// - 更好的代码组织
// - 避免命名冲突
// - 更好的可维护性和可扩展性
// - 支持代码分割和懒加载
// - 现代前端框架（React、Vue、Angular）都使用模块系统

// 14. 循环依赖
// TypeScript 支持循环依赖，但应尽量避免
// 循环依赖：A 依赖 B，B 依赖 A

// 15. 使用环境模块
// 对于没有类型定义的第三方库，可以使用环境模块
// 例如：declare module "*";

export { runModuleExamples };
