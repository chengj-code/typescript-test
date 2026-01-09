interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    inStock: boolean;
}
declare const partialProduct: Partial<Product>;
declare const requiredProduct: Required<Product>;
declare const readonlyProduct: Readonly<Product>;
declare const productInventory: Record<string, number>;
type ProductSummary = Pick<Product, "id" | "name" | "price">;
declare const productSummary: ProductSummary;
type ProductDetails = Omit<Product, "id" | "inStock">;
declare const productDetails: ProductDetails;
type Numeric = number | bigint;
type StringOrBoolean = Exclude<string | number | boolean, Numeric>;
declare const stringOrBoolean: StringOrBoolean;
type StringOrNumber = Extract<string | number | boolean, string | number>;
declare const stringOrNumber: StringOrNumber;
type NotNullableString = NonNullable<string | null | undefined>;
declare const notNullableString: NotNullableString;
declare function createProduct(name: string, price: number): Product;
type CreateProductParams = Parameters<typeof createProduct>;
declare const productParams: CreateProductParams;
type ProductType = ReturnType<typeof createProduct>;
declare const newProduct: ProductType;
declare class ProductClass {
    name: string;
    price: number;
    constructor(name: string, price: number);
}
type ProductInstance = InstanceType<typeof ProductClass>;
declare const productInstance: ProductInstance;
export { partialProduct, requiredProduct, readonlyProduct, productInventory, productSummary, productDetails, stringOrBoolean, stringOrNumber, notNullableString, productParams, newProduct, productInstance, createProduct };
export type { Product };
//# sourceMappingURL=advancedTypes.d.ts.map