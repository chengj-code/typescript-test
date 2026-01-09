declare const username: string;
declare const age: number;
declare const isActive: boolean;
declare const numbers: number[];
declare const strings: Array<string>;
type UserInfo = [string, number, boolean];
declare const userInfo: UserInfo;
type ID = string | number;
declare const userId: ID;
declare const productId: ID;
interface Person {
    name: string;
    age: number;
}
interface Employee {
    employeeId: string;
    department: string;
}
type Staff = Person & Employee;
declare const staffMember: Staff;
type Direction = "up" | "down" | "left" | "right";
declare const moveDirection: Direction;
declare function logMessage(message: string): void;
declare function throwError(message: string): never;
export { username, age, isActive, numbers, strings, userInfo, userId, productId, staffMember, moveDirection, logMessage, throwError };
export type { ID, UserInfo, Staff, Direction };
//# sourceMappingURL=basicTypes.d.ts.map