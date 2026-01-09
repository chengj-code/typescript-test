// TypeScript 高级类型示例
// 展示 Partial、Required、Readonly、Record、Pick、Omit 等高级类型的实际应用

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

// 1. Partial<T> - 将所有属性变为可选
// 用于创建或更新操作，只需要提供部分属性
const partialProduct: Partial<Product> = {
  name: "New Product",
  price: 99.99
};

// 2. Required<T> - 将所有属性变为必填
// 确保对象包含所有必需属性
const requiredProduct: Required<Product> = {
  id: "prod-001",
  name: "Required Product",
  price: 199.99,
  description: "This product has all required fields",
  inStock: true
};

// 3. Readonly<T> - 将所有属性变为只读
// 防止对象被修改
const readonlyProduct: Readonly<Product> = {
  id: "prod-002",
  name: "Readonly Product",
  price: 49.99,
  description: "This product cannot be modified",
  inStock: true
};

// 4. Record<K, T> - 创建键值对类型
// 用于映射关系
const productInventory: Record<string, number> = {
  "prod-001": 100,
  "prod-002": 50,
  "prod-003": 200
};

// 5. Pick<T, K> - 从类型中选择指定属性
// 用于只需要对象的部分属性
type ProductSummary = Pick<Product, "id" | "name" | "price">;
const productSummary: ProductSummary = {
  id: "prod-001",
  name: "Product 1",
  price: 99.99
};

// 6. Omit<T, K> - 从类型中排除指定属性
// 用于排除不需要的属性
type ProductDetails = Omit<Product, "id" | "inStock">;
const productDetails: ProductDetails = {
  name: "Product 1",
  price: 99.99,
  description: "Detailed description"
};

// 7. Exclude<T, U> - 从 T 中排除可以赋值给 U 的类型
// 用于联合类型过滤
type Numeric = number | bigint;
type StringOrBoolean = Exclude<string | number | boolean, Numeric>;
const stringOrBoolean: StringOrBoolean = "test";

// 8. Extract<T, U> - 从 T 中提取可以赋值给 U 的类型
// 用于联合类型提取
type StringOrNumber = Extract<string | number | boolean, string | number>;
const stringOrNumber: StringOrNumber = 123;

// 9. NonNullable<T> - 从 T 中排除 null 和 undefined
// 用于确保类型不为空
type NotNullableString = NonNullable<string | null | undefined>;
const notNullableString: NotNullableString = "hello";

// 10. Parameters<T> - 提取函数参数类型
// 用于获取函数参数的类型元组
function createProduct(name: string, price: number): Product {
  return {
    id: `prod-${Date.now()}`,
    name,
    price,
    description: "",
    inStock: true
  };
}

type CreateProductParams = Parameters<typeof createProduct>;
const productParams: CreateProductParams = ["New Product", 49.99];

// 11. ReturnType<T> - 提取函数返回类型
// 用于获取函数返回值的类型
type ProductType = ReturnType<typeof createProduct>;
const newProduct: ProductType = createProduct("Test", 99.99);

// 12. ThisParameterType<T> - 提取函数的 this 类型
// 用于获取函数中 this 的类型
function printProduct(this: Product): void {
  console.log(`Product: ${this.name}, Price: $${this.price}`);
}

type PrintProductThis = ThisParameterType<typeof printProduct>;

// 13. InstanceType<T> - 提取构造函数的实例类型
// 用于获取类的实例类型
class ProductClass {
  constructor(public name: string, public price: number) { }
}

type ProductInstance = InstanceType<typeof ProductClass>;
const productInstance: ProductInstance = new ProductClass("Class Product", 149.99);

export {
  partialProduct,
  requiredProduct,
  readonlyProduct,
  productInventory,
  productSummary,
  productDetails,
  stringOrBoolean,
  stringOrNumber,
  notNullableString,
  productParams,
  newProduct,
  productInstance,
  createProduct
};

export type {
  Product
};
