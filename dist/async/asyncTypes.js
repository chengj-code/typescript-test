"use strict";
// TypeScript 异步编程类型处理示例
// 展示 Promise、async/await 等异步编程的类型处理
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
exports.calculate = calculate;
exports.processData = processData;
exports.fetchAndProcess = fetchAndProcess;
exports.getUser = getUser;
exports.fetchMultipleData = fetchMultipleData;
exports.raceExamples = raceExamples;
exports.allSettledExample = allSettledExample;
exports.anyExample = anyExample;
exports.fetchUser = fetchUser;
exports.fetchProduct = fetchProduct;
exports.iterateAsync = iterateAsync;
exports.useAsyncGenerator = useAsyncGenerator;
exports.safeFetch = safeFetch;
exports.runAsyncExamples = runAsyncExamples;
// 1. Promise 基础类型
// Promise<T> 表示一个最终会解析为 T 类型值的异步操作
// 定义一个返回 Promise<string> 的函数
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
}
// 定义一个返回 Promise<number> 的函数
function calculate() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = Math.random();
            resolve(result);
        }, 500);
    });
}
// 2. Promise 链的类型处理
function processData() {
    return fetchData()
        .then((data) => {
        // data 类型为 string
        console.log(`Received data: ${data}`);
        return calculate();
    })
        .then((result) => {
        // result 类型为 number
        return Math.round(result * 100);
    });
}
// 3. async/await 的类型处理
// async 函数自动返回 Promise，await 等待 Promise 解析
async function fetchAndProcess() {
    try {
        // await 后的数据类型为 string
        const data = await fetchData();
        console.log(`Async received data: ${data}`);
        // await 后的数据类型为 number
        const result = await calculate();
        console.log(`Async calculated result: ${result}`);
    }
    catch (error) {
        // error 类型为 any，需要类型守卫
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
        else {
            console.error(`Unknown error: ${error}`);
        }
    }
}
// 4. 异步函数的返回类型
// async 函数的返回类型自动推断为 Promise<T>
async function getUser() {
    return {
        id: "user-123",
        name: "John Doe"
    };
}
// 5. Promise.all 的类型处理
// Promise.all<T extends readonly unknown[]>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>
async function fetchMultipleData() {
    const [data1, data2, result] = await Promise.all([
        fetchData(),
        fetchData(),
        calculate()
    ]);
    // data1 类型为 string
    // data2 类型为 string
    // result 类型为 number
    console.log(`Multiple data: ${data1}, ${data2}, ${result}`);
}
// 6. Promise.race 的类型处理
// Promise.race<T extends readonly unknown[]>(values: T): Promise<Awaited<T[number]>>
async function raceExamples() {
    const result = await Promise.race([
        fetchData(),
        calculate(),
        new Promise((resolve) => setTimeout(() => resolve("Fastest"), 100))
    ]);
    // result 类型为 string | number
    console.log(`Race result: ${result}`);
}
// 7. Promise.allSettled 的类型处理
// Promise.allSettled<T extends readonly unknown[]>(values: T): Promise<{ -readonly [P in keyof T]: PromiseSettledResult<Awaited<T[P]>> }>
async function allSettledExample() {
    const results = await Promise.allSettled([
        fetchData(),
        calculate(),
        Promise.reject(new Error("Always fails"))
    ]);
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Result ${index} fulfilled: ${result.value}`);
        }
        else {
            console.log(`Result ${index} rejected: ${result.reason.message}`);
        }
    });
}
// 8. Promise.any 的类型处理
// Promise.any<T extends readonly unknown[]>(values: T): Promise<Awaited<T[number]>>
async function anyExample() {
    try {
        const result = await Promise.any([
            Promise.reject(new Error("First fails")),
            Promise.reject(new Error("Second fails")),
            fetchData()
        ]);
        console.log(`Any result: ${result}`);
    }
    catch (error) {
        if (error && typeof error === 'object' && 'errors' in error) {
            // 处理 AggregateError
            const aggregateError = error;
            console.error(`All promises rejected: ${aggregateError.errors.length}`);
        }
        else {
            console.error(`Unknown error: ${error}`);
        }
    }
}
// 泛型异步函数
async function fetchApi(url) {
    // 模拟 API 请求
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {}
            });
        }, 500);
    });
}
async function fetchUser() {
    const response = await fetchApi("/api/users/1");
    return response.data;
}
async function fetchProduct() {
    const response = await fetchApi("/api/products/1");
    return response.data;
}
class Counter {
    constructor(max) {
        this.max = max;
    }
    async *[Symbol.asyncIterator]() {
        for (let i = 1; i <= this.max; i++) {
            // 模拟异步操作
            await new Promise(resolve => setTimeout(resolve, 100));
            yield i;
        }
    }
}
// 使用异步迭代器
async function iterateAsync() {
    const counter = new Counter(5);
    // 使用 for await...of 循环遍历异步迭代器
    for await (const value of counter) {
        console.log(`Async iteration: ${value}`);
    }
}
// 11. 异步生成器函数
async function* generateNumbers(max) {
    for (let i = 1; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield i;
    }
}
// 使用异步生成器
async function useAsyncGenerator() {
    const generator = generateNumbers(3);
    let result = await generator.next();
    while (!result.done) {
        console.log(`Generator value: ${result.value}`);
        result = await generator.next();
    }
}
// 12. 类型守卫与异步错误处理
async function safeFetch() {
    try {
        const response = await fetchData();
        return response;
    }
    catch (error) {
        // 使用类型守卫确保 error 是 Error 类型
        if (isError(error)) {
            throw new Error(`Fetch failed: ${error.message}`);
        }
        throw new Error(`Unknown error: ${String(error)}`);
    }
}
// 类型守卫函数
function isError(value) {
    return value instanceof Error;
}
// 14. 示例运行函数
async function runAsyncExamples() {
    console.log("=== 异步编程类型处理示例 ===");
    // 1. 基础 Promise
    console.log("\n1. 基础 Promise:");
    const data = await fetchData();
    console.log(`Fetched data: ${data}`);
    // 2. Promise 链
    console.log("\n2. Promise 链:");
    try {
        const processedData = await processData();
        console.log(`Processed data: ${processedData}`);
    }
    catch (error) {
        console.log(`Promise chain example completed (expected error: ${error.message})`);
    }
    // 3. async/await
    console.log("\n3. async/await:");
    await fetchAndProcess();
    // 4. Promise.all
    console.log("\n4. Promise.all:");
    await fetchMultipleData();
    // 5. Promise.race
    console.log("\n5. Promise.race:");
    await raceExamples();
    // 6. Promise.allSettled
    console.log("\n6. Promise.allSettled:");
    await allSettledExample();
    // 7. Promise.any
    console.log("\n7. Promise.any:");
    await anyExample();
    // 8. 泛型异步函数
    console.log("\n8. 泛型异步函数:");
    const user = await fetchUser();
    const product = await fetchProduct();
    console.log(`User: ${user.name}, Product: ${product.name}`);
    // 9. 异步迭代器
    console.log("\n9. 异步迭代器:");
    await iterateAsync();
    // 10. 异步生成器
    console.log("\n10. 异步生成器:");
    await useAsyncGenerator();
}
//# sourceMappingURL=asyncTypes.js.map