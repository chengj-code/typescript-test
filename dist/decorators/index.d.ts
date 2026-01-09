declare class User {
    name: string;
    email: string;
    constructor(name: string, email: string);
}
declare class Product {
    name: string;
    price: number;
    constructor(name?: string, price?: number);
    calculateTotal(quantity: number, discount: number): number;
    updatePrice(newPrice: number): void;
}
declare class Notifier {
    sendNotification(message: string): void;
}
declare class Test {
    testProperty: string;
    testMethod(): void;
}
declare class Config {
    private _apiKey;
    get apiKey(): string;
    set apiKey(value: string);
}
declare function runDecoratorExamples(): void;
export { User, Product, Notifier, Config, Test, runDecoratorExamples };
//# sourceMappingURL=index.d.ts.map