declare function swap<T>(array: T[], index1: number, index2: number): T[];
declare const swappedNumbers: number[];
declare const swappedStrings: string[];
interface Container<T> {
    value: T;
    getValue(): T;
    setValue(value: T): void;
}
declare class NumberContainer implements Container<number> {
    value: number;
    constructor(value: number);
    getValue(): number;
    setValue(value: number): void;
}
declare class StringContainer implements Container<string> {
    value: string;
    constructor(value: string);
    getValue(): string;
    setValue(value: string): void;
}
declare class Stack<T> {
    private items;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
declare const numberStack: Stack<number>;
declare const stringStack: Stack<string>;
interface Lengthwise {
    length: number;
}
declare function logLength<T extends Lengthwise>(item: T): void;
interface User {
    id: string;
    name: string;
    email: string;
}
declare function updateUser<T extends User>(user: T, updates: Partial<T>): T;
declare const user: User;
declare const updatedUser: User;
type Result<T> = SuccessResult<T> | ErrorResult;
interface SuccessResult<T> {
    success: true;
    data: T;
}
interface ErrorResult {
    success: false;
    error: string;
}
declare function createSuccessResult<T>(data: T): Result<T>;
declare function createErrorResult(error: string): Result<never>;
declare const successResult: Result<User>;
declare const errorResult: Result<never>;
export { swap, swappedNumbers, swappedStrings, NumberContainer, StringContainer, Stack, numberStack, stringStack, logLength, updateUser, user, updatedUser, createSuccessResult, createErrorResult, successResult, errorResult };
//# sourceMappingURL=generics.d.ts.map