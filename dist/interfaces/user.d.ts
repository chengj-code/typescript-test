interface User {
    readonly id: string | number;
    username: string;
    email: string;
    age?: number;
    login: () => void;
    logout(): void;
}
interface AdminUser extends User {
    adminLevel: number;
    manageUsers: () => void;
}
interface EmployeeUser {
    employeeId: string;
    department: string;
}
interface SuperUser extends User, EmployeeUser {
    permissions: string[];
}
declare const regularUser: User;
declare const admin: AdminUser;
declare function getUserInfo(user: User): string;
interface StringDictionary {
    [key: string]: string;
}
declare const translations: StringDictionary;
interface NumberArray {
    [index: number]: number;
}
declare const numberList: NumberArray;
export { regularUser, admin, getUserInfo, translations, numberList };
export type { User, AdminUser, SuperUser, StringDictionary, NumberArray };
//# sourceMappingURL=user.d.ts.map