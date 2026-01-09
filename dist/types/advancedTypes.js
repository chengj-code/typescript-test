"use strict";
// TypeScript 高级类型示例
// 展示 Partial、Required、Readonly、Record、Pick、Omit 等高级类型的实际应用
Object.defineProperty(exports, "__esModule", { value: true });
exports.productInstance = exports.newProduct = exports.productParams = exports.notNullableString = exports.stringOrNumber = exports.stringOrBoolean = exports.productDetails = exports.productSummary = exports.productInventory = exports.readonlyProduct = exports.requiredProduct = exports.partialProduct = void 0;
exports.createProduct = createProduct;
// 1. Partial<T> - 将所有属性变为可选
// 用于创建或更新操作，只需要提供部分属性
const partialProduct = {
    name: "New Product",
    price: 99.99
};
exports.partialProduct = partialProduct;
// 2. Required<T> - 将所有属性变为必填
// 确保对象包含所有必需属性
const requiredProduct = {
    id: "prod-001",
    name: "Required Product",
    price: 199.99,
    description: "This product has all required fields",
    inStock: true
};
exports.requiredProduct = requiredProduct;
// 3. Readonly<T> - 将所有属性变为只读
// 防止对象被修改
const readonlyProduct = {
    id: "prod-002",
    name: "Readonly Product",
    price: 49.99,
    description: "This product cannot be modified",
    inStock: true
};
exports.readonlyProduct = readonlyProduct;
// 4. Record<K, T> - 创建键值对类型
// 用于映射关系
const productInventory = {
    "prod-001": 100,
    "prod-002": 50,
    "prod-003": 200
};
exports.productInventory = productInventory;
const productSummary = {
    id: "prod-001",
    name: "Product 1",
    price: 99.99
};
exports.productSummary = productSummary;
const productDetails = {
    name: "Product 1",
    price: 99.99,
    description: "Detailed description"
};
exports.productDetails = productDetails;
const stringOrBoolean = "test";
exports.stringOrBoolean = stringOrBoolean;
const stringOrNumber = 123;
exports.stringOrNumber = stringOrNumber;
const notNullableString = "hello";
exports.notNullableString = notNullableString;
// 10. Parameters<T> - 提取函数参数类型
// 用于获取函数参数的类型元组
function createProduct(name, price) {
    return {
        id: `prod-${Date.now()}`,
        name,
        price,
        description: "",
        inStock: true
    };
}
const productParams = ["New Product", 49.99];
exports.productParams = productParams;
const newProduct = createProduct("Test", 99.99);
exports.newProduct = newProduct;
// 12. ThisParameterType<T> - 提取函数的 this 类型
// 用于获取函数中 this 的类型
function printProduct() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
}
// 13. InstanceType<T> - 提取构造函数的实例类型
// 用于获取类的实例类型
class ProductClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const productInstance = new ProductClass("Class Product", 149.99);
exports.productInstance = productInstance;
//# sourceMappingURL=advancedTypes.js.map