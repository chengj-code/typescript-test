// TypeScript 装饰器示例
// 展示类装饰器、方法装饰器、属性装饰器和参数装饰器的实际应用

// 1. 类装饰器
// 类装饰器应用于类构造函数，可以用来修改类的行为
function Logger(prefix: string) {
  return function (constructor: Function) {
    console.log(`${prefix} - Creating new instance of ${constructor.name}`);

    // 可以修改类的原型
    constructor.prototype.log = function () {
      console.log(`${prefix} - ${JSON.stringify(this)}`);
    };
  };
}

// 使用类装饰器
@Logger("UserService")
class User {
  constructor(public name: string, public email: string) {
    console.log(`Creating user: ${name}`);
  }
}

// 2. 方法装饰器
// 方法装饰器应用于类的方法，可以用来修改方法的行为
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // 保存原始方法
  const originalMethod = descriptor.value;

  // 修改方法
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`${propertyKey} returned: ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}

// 3. 方法装饰器 - 可以修改方法的属性（如是否可枚举、可配置）
function Enumerable(enumerable: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = enumerable;
  };
}

// 4. 属性装饰器
// 属性装饰器应用于类的属性
function DefaultValue(value: any) {
  return function (target: any, propertyKey: string) {
    // 初始化属性的默认值
    target[propertyKey] = value;
  };
}

// 5. 参数装饰器
// 参数装饰器应用于函数的参数
function Required(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter ${parameterIndex} of ${propertyKey} is required`);

  // 可以保存参数信息，用于后续验证
  if (!target.requiredParameters) {
    target.requiredParameters = [];
  }
  target.requiredParameters.push(parameterIndex);
}

// 使用各种装饰器
class Product {
  @DefaultValue("Untitled")
  name: string = "Untitled";

  @DefaultValue(0)
  price: number = 0;

  constructor(name?: string, price?: number) {
    if (name) this.name = name;
    if (price) this.price = price;
  }

  @LogMethod
  @Enumerable(true)
  calculateTotal(quantity: number, @Required discount: number): number {
    return this.price * quantity * (1 - discount);
  }

  @LogMethod
  @Enumerable(false)
  updatePrice(newPrice: number): void {
    this.price = newPrice;
  }
}

// 6. 装饰器工厂 - 可以接受参数
function Timeout(milliseconds: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Delaying ${propertyKey} by ${milliseconds}ms`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };

    return descriptor;
  };
}

class Notifier {
  @Timeout(1000)
  sendNotification(message: string): void {
    console.log(`Sending notification: ${message}`);
  }
}

// 7. 装饰器组合
// 多个装饰器可以应用于同一个目标，按照从上到下的顺序执行
function Decorator1() {
  return function (target: any, propertyKey: string) {
    console.log("Decorator 1 applied");
  };
}

function Decorator2() {
  return function (target: any, propertyKey: string) {
    console.log("Decorator 2 applied");
  };
}

class Test {
  @Decorator1()
  @Decorator2()
  testProperty: string = "test";

  @Decorator1()
  @Decorator2()
  testMethod(): void {
    console.log("Test method called");
  }
}

// 8. 访问器装饰器
// 访问器装饰器应用于类的访问器（getter/setter）
function LogAccess(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalGet = descriptor.get;
  const originalSet = descriptor.set;

  if (originalGet) {
    descriptor.get = function () {
      console.log(`Getting ${propertyKey}`);
      return originalGet.apply(this);
    };
  }

  if (originalSet) {
    descriptor.set = function (value: any) {
      console.log(`Setting ${propertyKey} to ${value}`);
      originalSet.apply(this, [value]);
    };
  }

  return descriptor;
}

class Config {
  private _apiKey: string = "";

  get apiKey(): string {
    return this._apiKey;
  }

  @LogAccess
  set apiKey(value: string) {
    this._apiKey = value;
  }
}

// 9. 使用 Reflect Metadata
// 装饰器可以使用 Reflect Metadata API 来存储和检索元数据
// 注意：需要安装 reflect-metadata 包并在 tsconfig.json 中启用 emitDecoratorMetadata

// 10. 装饰器的执行顺序
// 1. 参数装饰器，然后依次是方法装饰器，访问器装饰器，或属性装饰器应用到每个实例成员
// 2. 参数装饰器，然后依次是方法装饰器，访问器装饰器，或属性装饰器应用到每个静态成员
// 3. 参数装饰器应用到构造函数
// 4. 类装饰器应用到类

// 示例用法
function runDecoratorExamples(): void {
  console.log("=== 装饰器示例 ===");

  // 1. 类装饰器示例
  console.log("\n1. 类装饰器示例:");
  const user = new User("John", "john@example.com");
  // 使用装饰器添加的方法
  (user as any).log();

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

export {
  User,
  Product,
  Notifier,
  Config,
  Test,
  runDecoratorExamples
};
