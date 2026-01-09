"use strict";
// TypeScript 接口示例
// 展示接口的定义、扩展和实现
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberList = exports.translations = exports.admin = exports.regularUser = void 0;
exports.getUserInfo = getUserInfo;
// 使用接口定义对象
const regularUser = {
    id: "user-001",
    username: "john_doe",
    email: "john@example.com",
    age: 30,
    login: () => console.log("User logged in"),
    logout: () => console.log("User logged out")
};
exports.regularUser = regularUser;
// 使用扩展后的接口
const admin = {
    id: "admin-001",
    username: "admin_jane",
    email: "jane@example.com",
    adminLevel: 1,
    login: () => console.log("Admin logged in"),
    logout: () => console.log("Admin logged out"),
    manageUsers: () => console.log("Managing users")
};
exports.admin = admin;
// 函数参数使用接口
function getUserInfo(user) {
    return `User: ${user.username}, Email: ${user.email}`;
}
const translations = {
    hello: "Hello",
    goodbye: "Goodbye"
};
exports.translations = translations;
const numberList = [1, 2, 3, 4, 5];
exports.numberList = numberList;
//# sourceMappingURL=user.js.map