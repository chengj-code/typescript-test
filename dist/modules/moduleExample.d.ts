export declare function greet(name: string): string;
export declare class Person {
    private name;
    private age;
    constructor(name: string, age: number);
    getInfo(): string;
}
export interface Config {
    host: string;
    port: number;
    ssl: boolean;
}
export type Status = "active" | "inactive" | "pending";
export declare const DEFAULT_CONFIG: Config;
export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}
export default function calculateSum(a: number, b: number): number;
export { add, subtract } from "./math";
declare function runModuleExamples(): void;
export { runModuleExamples };
//# sourceMappingURL=moduleExample.d.ts.map