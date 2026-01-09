// TypeScript 类型声明文件示例
// 展示如何为 JavaScript 库提供类型信息

// 1. 全局变量类型声明
// 为全局变量提供类型声明
declare const MY_GLOBAL_VAR: string;
declare let MY_GLOBAL_LET: number;
declare var MY_GLOBAL_VAR2: boolean;

// 2. 全局函数类型声明
declare function myGlobalFunction(arg1: string, arg2: number): boolean;

declare function anotherGlobalFunction(...args: any[]): void;

// 3. 全局对象类型声明
declare namespace MyGlobalNamespace {
  function doSomething(): void;
  function doSomethingElse(value: string): string;
  
  interface Options {
    enabled: boolean;
    timeout: number;
  }
  
  const version: string;
  const options: Options;
}

// 4. 模块类型声明
// 为 CommonJS 模块提供类型声明
declare module 'my-commonjs-module' {
  export function hello(name: string): string;
  export const version: string;
  
  export interface User {
    id: string;
    name: string;
  }
  
  export default class MyModule {
    constructor(options: { debug?: boolean });
    start(): void;
    stop(): void;
  }
}

// 5. UMD 模块类型声明
// 为 UMD 模块提供类型声明
declare module 'my-umd-module' {
  export function init(config: any): void;
  export function getData(id: string): Promise<any>;
  
  export namespace Utils {
    function formatDate(date: Date): string;
    function generateId(): string;
  }
  
  export default {
    init,
    getData,
    Utils
  };
}

// 6. 环境模块声明
// 为没有类型定义的模块提供通用类型声明
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

// 7. 扩展内置类型
// 为 JavaScript 内置类型扩展方法
declare interface String {
  capitalize(): string;
  toSnakeCase(): string;
}

declare interface Array<T> {
  last(): T | undefined;
  first(): T | undefined;
  unique(): T[];
}

declare interface Number {
  isEven(): boolean;
  isOdd(): boolean;
  toCurrency(currency?: string): string;
}

// 8. 函数重载类型声明
declare function createElement(tagName: string): HTMLElement;
declare function createElement(tagName: 'div'): HTMLDivElement;
declare function createElement(tagName: 'span'): HTMLSpanElement;
declare function createElement(tagName: 'a'): HTMLAnchorElement;
declare function createElement(tagName: string, attributes: Record<string, any>): HTMLElement;

// 9. 类型声明合并
declare module 'my-module' {
  interface Options {
    name: string;
  }
}

declare module 'my-module' {
  interface Options {
    age?: number;
  }
  
  function create(options: Options): void;
}

// 10. 条件类型声明
declare type Nullable<T> = T | null | undefined;
declare type NonNullable<T> = T extends null | undefined ? never : T;
declare type ArrayElement<T> = T extends (infer U)[] ? U : never;
