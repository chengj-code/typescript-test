declare function isString(value: unknown): value is string;
declare function isNumber(value: unknown): value is number;
declare function isBoolean(value: unknown): value is boolean;
declare function processValue(value: unknown): void;
declare class Circle {
    radius: number;
    constructor(radius: number);
    getArea(): number;
}
declare class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number);
    getArea(): number;
}
type Shape = Circle | Rectangle;
declare function getShapeArea(shape: Shape): number;
interface Cat {
    type: 'cat';
    meow: () => void;
}
interface Dog {
    type: 'dog';
    bark: () => void;
}
type Animal = Cat | Dog;
declare function makeSound(animal: Animal): void;
interface Fish {
    swim: () => void;
    type: 'fish';
}
interface Bird {
    fly: () => void;
    type: 'bird';
}
type Pet = Fish | Bird;
declare function isFish(pet: Pet): pet is Fish;
declare function isBird(pet: Pet): pet is Bird;
declare function movePet(pet: Pet): void;
declare function getLength(value: string | number): number;
declare function doubleAssertion(value: unknown): string;
declare function getFirstElement<T>(array: T[] | null | undefined): T | undefined;
declare function getElementById(id: string): HTMLElement | null;
declare function getInputElement(id: string): HTMLInputElement | null;
interface Admin {
    role: 'admin';
    manageUsers: () => void;
}
interface Editor {
    role: 'editor';
    editContent: () => void;
}
interface Viewer {
    role: 'viewer';
    viewContent: () => void;
}
type UserRole = Admin | Editor | Viewer;
declare function handleUserRole(user: UserRole): void;
declare function isObject(value: unknown): value is object;
declare function isArray(value: unknown): value is unknown[];
declare function isDate(value: unknown): value is Date;
declare function processData(data: unknown): void;
interface Product {
    id: string;
    name: string;
    price: number;
}
declare function createProduct(data: any): Product;
declare function isDefined<T>(value: T | undefined | null): value is T;
declare function filterDefined<T>(array: (T | undefined | null)[]): T[];
declare const mixedValues: (string | number | boolean | undefined | null)[];
declare const definedValues: (string | number | boolean)[];
declare const colors: readonly ["red", "green", "blue"];
declare const config: {
    readonly host: "localhost";
    readonly port: 3000;
};
export { isString, isNumber, isBoolean, processValue, Circle, Rectangle, getShapeArea, makeSound, isFish, isBird, movePet, getLength, doubleAssertion, getFirstElement, getElementById, getInputElement, handleUserRole, isObject, isArray, isDate, processData, createProduct, isDefined, filterDefined, mixedValues, definedValues, colors, config };
export type { Cat, Dog, Fish, Bird };
//# sourceMappingURL=typeGuards.d.ts.map