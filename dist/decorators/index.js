"use strict";
// TypeScript 装饰器示例
// 展示类装饰器、方法装饰器、属性装饰器和参数装饰器的实际应用
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.Config = exports.Notifier = exports.Product = exports.User = void 0;
exports.runDecoratorExamples = runDecoratorExamples;
// 1. 类装饰器
// 类装饰器应用于类构造函数，可以用来修改类的行为
function Logger(prefix) {
    return function (constructor) {
        console.log(`${prefix} - Creating new instance of ${constructor.name}`);
        // 可以修改类的原型
        constructor.prototype.log = function () {
            console.log(`${prefix} - ${JSON.stringify(this)}`);
        };
    };
}
// 使用类装饰器
let User = class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        console.log(`Creating user: ${name}`);
    }
};
exports.User = User;
exports.User = User = __decorate([
    Logger("UserService"),
    __metadata("design:paramtypes", [String, String])
], User);
// 2. 方法装饰器
// 方法装饰器应用于类的方法，可以用来修改方法的行为
function LogMethod(target, propertyKey, descriptor) {
    // 保存原始方法
    const originalMethod = descriptor.value;
    // 修改方法
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`${propertyKey} returned: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
// 3. 方法装饰器 - 可以修改方法的属性（如是否可枚举、可配置）
function Enumerable(enumerable) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = enumerable;
    };
}
// 4. 属性装饰器
// 属性装饰器应用于类的属性
function DefaultValue(value) {
    return function (target, propertyKey) {
        // 初始化属性的默认值
        target[propertyKey] = value;
    };
}
// 5. 参数装饰器
// 参数装饰器应用于函数的参数
function Required(target, propertyKey, parameterIndex) {
    console.log(`Parameter ${parameterIndex} of ${propertyKey} is required`);
    // 可以保存参数信息，用于后续验证
    if (!target.requiredParameters) {
        target.requiredParameters = [];
    }
    target.requiredParameters.push(parameterIndex);
}
// 使用各种装饰器
class Product {
    constructor(name, price) {
        this.name = "Untitled";
        this.price = 0;
        if (name)
            this.name = name;
        if (price)
            this.price = price;
    }
    calculateTotal(quantity, discount) {
        return this.price * quantity * (1 - discount);
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
}
exports.Product = Product;
__decorate([
    DefaultValue("Untitled"),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    DefaultValue(0),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    LogMethod,
    Enumerable(true),
    __param(1, Required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Product.prototype, "calculateTotal", null);
__decorate([
    LogMethod,
    Enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "updatePrice", null);
// 6. 装饰器工厂 - 可以接受参数
function Timeout(milliseconds) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Delaying ${propertyKey} by ${milliseconds}ms`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, milliseconds);
        };
        return descriptor;
    };
}
class Notifier {
    sendNotification(message) {
        console.log(`Sending notification: ${message}`);
    }
}
exports.Notifier = Notifier;
__decorate([
    Timeout(1000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Notifier.prototype, "sendNotification", null);
// 7. 装饰器组合
// 多个装饰器可以应用于同一个目标，按照从上到下的顺序执行
function Decorator1() {
    return function (target, propertyKey) {
        console.log("Decorator 1 applied");
    };
}
function Decorator2() {
    return function (target, propertyKey) {
        console.log("Decorator 2 applied");
    };
}
class Test {
    constructor() {
        this.testProperty = "test";
    }
    testMethod() {
        console.log("Test method called");
    }
}
exports.Test = Test;
__decorate([
    Decorator1(),
    Decorator2(),
    __metadata("design:type", String)
], Test.prototype, "testProperty", void 0);
__decorate([
    Decorator1(),
    Decorator2(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Test.prototype, "testMethod", null);
// 8. 访问器装饰器
// 访问器装饰器应用于类的访问器（getter/setter）
function LogAccess(target, propertyKey, descriptor) {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;
    if (originalGet) {
        descriptor.get = function () {
            console.log(`Getting ${propertyKey}`);
            return originalGet.apply(this);
        };
    }
    if (originalSet) {
        descriptor.set = function (value) {
            console.log(`Setting ${propertyKey} to ${value}`);
            originalSet.apply(this, [value]);
        };
    }
    return descriptor;
}
class Config {
    constructor() {
        this._apiKey = "";
    }
    get apiKey() {
        return this._apiKey;
    }
    set apiKey(value) {
        this._apiKey = value;
    }
}
exports.Config = Config;
__decorate([
    LogAccess,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Config.prototype, "apiKey", null);
// 9. 使用 Reflect Metadata
// 装饰器可以使用 Reflect Metadata API 来存储和检索元数据
// 注意：需要安装 reflect-metadata 包并在 tsconfig.json 中启用 emitDecoratorMetadata
// 10. 装饰器的执行顺序
// 1. 参数装饰器，然后依次是方法装饰器，访问器装饰器，或属性装饰器应用到每个实例成员
// 2. 参数装饰器，然后依次是方法装饰器，访问器装饰器，或属性装饰器应用到每个静态成员
// 3. 参数装饰器应用到构造函数
// 4. 类装饰器应用到类
// 示例用法
function runDecoratorExamples() {
    console.log("=== 装饰器示例 ===");
    // 1. 类装饰器示例
    console.log("\n1. 类装饰器示例:");
    const user = new User("John", "john@example.com");
    // 使用装饰器添加的方法
    user.log();
    // 2. 属性装饰器示例
    console.log("\n2. 属性装饰器示例:");
    const product1 = new Product();
    console.log(`Product 1: ${product1.name}, ${product1.price}`);
    const product2 = new Product("Laptop", 999.99);
    console.log(`Product 2: ${product2.name}, ${product2.price}`);
    // 3. 方法装饰器示例
    console.log("\n3. 方法装饰器示例:");
    const total = product2.calculateTotal(2, 0.1);
    console.log(`Total: ${total}`);
    product2.updatePrice(899.99);
    // 4. 方法装饰器 - Timeout 示例
    console.log("\n4. Timeout 装饰器示例:");
    const notifier = new Notifier();
    notifier.sendNotification("Hello from decorator!");
    // 5. 访问器装饰器示例
    console.log("\n5. 访问器装饰器示例:");
    const config = new Config();
    config.apiKey = "secret-key-123";
    const key = config.apiKey;
    // 6. 装饰器组合示例
    console.log("\n6. 装饰器组合示例:");
    const test = new Test();
    test.testMethod();
}
//# sourceMappingURL=index.js.map