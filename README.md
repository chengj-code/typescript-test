# TypeScript 综合性学习项目

这是一个综合性的 TypeScript 项目，旨在系统整合并应用 TypeScript 的所有核心知识点。通过实际代码示例，帮助学习者深入理解每个 TypeScript 特性的使用场景和实现方式。

## 项目特性

本项目包含以下 TypeScript 核心特性的实际应用：

### 基础类型系统

-   **基础类型**：string、number、boolean、null、undefined、symbol、bigint
-   **数组类型**：number[]、Array<string> 等
-   **元组类型**：固定长度和类型的数组
-   **联合类型**：`string | number` 等
-   **交叉类型**：`Person & Employee` 等
-   **字面量类型**：`"up" | "down" | "left" | "right"` 等

### 接口和类型别名

-   **接口（Interfaces）**：定义对象的结构和行为
-   **类型别名（Type Aliases）**：为类型创建自定义名称
-   **接口继承**：接口可以扩展其他接口
-   **接口与类实现**：类可以实现接口

### 高级类型

-   **泛型（Generics）**：在函数、类、接口中使用类型参数
-   **枚举（Enums）**：数字枚举、字符串枚举、异构枚举、常量枚举
-   **高级类型工具**：`Partial<T>`, `Required<T>`, `Readonly<T>`, `Record<K, T>`, `Pick<T, K>`, `Omit<T, K>`, `Exclude<T, U>`, `Extract<T, U>`, `NonNullable<T>`, `Parameters<T>`, `ReturnType<T>` 等

### 类型守卫和类型断言

-   **typeof 类型守卫**：检查基础类型
-   **instanceof 类型守卫**：检查对象实例
-   **in 操作符类型守卫**：检查对象属性
-   **类型谓词函数**：自定义类型守卫
-   **类型断言**：`as` 语法、`!` 非空断言、`as const` 断言

### 装饰器

-   **类装饰器**：修改类的行为
-   **方法装饰器**：修改方法的行为
-   **属性装饰器**：初始化属性值
-   **参数装饰器**：验证参数
-   **访问器装饰器**：修改 getter/setter 行为

### 模块系统

-   **命名空间**：内部模块，用于组织代码
-   **模块**：外部模块，使用 `import/export` 进行导入导出
-   **模块解析**：Node.js 模块解析策略
-   **重导出**：将导入的内容重新导出

### 类型声明文件

-   **全局类型声明**：为全局变量、函数、对象提供类型
-   **模块类型声明**：为 CommonJS、UMD 模块提供类型
-   **环境模块声明**：为没有类型定义的模块提供通用类型
-   **扩展内置类型**：为原生类型添加自定义方法

### 异步编程类型处理

-   **Promise 类型**：`Promise<T>` 表示异步操作
-   **async/await**：异步函数的类型处理
-   **Promise 工具方法**：`Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`
-   **泛型与异步结合**：`async function fetchApi<T>(url: string): Promise<ApiResponse<T>>`
-   **异步迭代器和生成器**：`for await...of` 循环、`async generator`

## 项目结构

```
typescript-comprehensive-project/
├── src/
│   ├── docs/                 # 项目文档
│   │   └── operators.md      # TypeScript 操作符详细列表
│   ├── types/                # 类型系统相关示例
│   │   ├── basicTypes.ts     # 基础类型、联合类型、交叉类型
│   │   ├── advancedTypes.ts  # 高级类型工具
│   │   ├── generics.ts       # 泛型示例
│   │   ├── enums.ts          # 枚举示例
│   │   ├── typeGuards.ts     # 类型守卫和类型断言
│   │   └── custom.d.ts       # 自定义类型声明文件
│   ├── interfaces/           # 接口相关示例
│   │   └── user.ts           # 用户接口定义
│   ├── decorators/           # 装饰器示例
│   │   └── index.ts          # 各种装饰器实现
│   ├── modules/              # 模块系统示例
│   │   ├── namespaceExample.ts  # 命名空间示例
│   │   ├── moduleExample.ts     # 模块系统示例
│   │   └── math.ts              # 数学工具模块
│   ├── async/                # 异步编程示例
│   │   └── asyncTypes.ts     # Promise、async/await 等
│   └── index.ts              # 入口文件
├── package.json              # 项目配置
├── tsconfig.json             # TypeScript 配置
└── README.md                 # 项目说明文档
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 编译项目

```bash
npm run build
```

### 运行项目

```bash
npm start
```

### 开发模式

```bash
npm run dev
```

## 学习指南

1. **从基础开始**：首先学习 `src/types/basicTypes.ts` 中的基础类型系统
2. **理解接口和类型**：学习 `src/interfaces/user.ts` 和 `src/types/advancedTypes.ts`
3. **掌握泛型和枚举**：学习 `src/types/generics.ts` 和 `src/types/enums.ts`
4. **学习类型守卫**：学习 `src/types/typeGuards.ts`
5. **探索装饰器**：学习 `src/decorators/index.ts`
6. **理解模块系统**：学习 `src/modules/namespaceExample.ts` 和 `src/modules/moduleExample.ts`
7. **掌握异步编程**：学习 `src/async/asyncTypes.ts`
8. **查看类型声明**：学习 `src/types/custom.d.ts`

## 代码示例

每个文件都包含详细的代码注释和示例，展示了 TypeScript 特性的实际应用。例如：

### 泛型函数示例

```typescript
function swap<T>(array: T[], index1: number, index2: number): T[] {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

// 使用泛型函数
const numberArray = [1, 2, 3, 4, 5];
const swappedNumbers = swap(numberArray, 0, 4); // [5, 2, 3, 4, 1]

const stringArray = ["a", "b", "c", "d", "e"];
const swappedStrings = swap(stringArray, 1, 3); // ["a", "d", "c", "b", "e"]
```

### 装饰器示例

```typescript
@Logger("UserService")
class User {
    constructor(public name: string, public email: string) {
        console.log(`Creating user: ${name}`);
    }
}

// 使用装饰器添加的方法
const user = new User("John", "john@example.com");
(user as any).log(); // 输出：UserService - {"name":"John","email":"john@example.com"}
```

### 异步编程示例

```typescript
async function fetchAndProcess(): Promise<void> {
    try {
        // await 后的数据类型为 string
        const data = await fetchData();
        console.log(`Async received data: ${data}`);

        // await 后的数据类型为 number
        const result = await calculate();
        console.log(`Async calculated result: ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
    }
}
```

## 项目特点

1. **实际可交互的功能**：所有 TypeScript 特性都以实际可交互的功能形式呈现，而非简单的语法演示
2. **清晰的模块划分**：项目结构遵循软件工程最佳实践，包含清晰的模块划分和合理的文件组织
3. **详细的代码注释**：每个示例都包含详细的注释，解释代码的功能和原理
4. **完整的配置文件**：包含必要的配置文件（如 tsconfig.json），方便学习者理解 TypeScript 的配置选项
5. **可编译和运行**：项目完成后可以成功编译并运行，学习者可以直接运行代码查看效果

## 适用人群

-   已掌握 JavaScript 基础的开发者
-   正在学习 TypeScript 的学习者
-   希望深入理解 TypeScript 核心特性的开发者
-   想要通过实际项目巩固 TypeScript 知识的开发者

## 学习建议

1. **循序渐进**：从基础类型开始，逐步学习更复杂的特性
2. **动手实践**：修改示例代码，尝试不同的使用方式
3. **查看编译结果**：运行 `npm run build` 查看编译后的 JavaScript 代码，理解 TypeScript 如何转换为 JavaScript
4. **探索配置选项**：修改 tsconfig.json 中的配置选项，观察对编译结果的影响
5. **结合文档**：参考 TypeScript 官方文档，深入理解每个特性的细节

## 许可证

MIT
