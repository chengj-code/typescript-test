// TypeScript 接口示例
// 展示接口的定义、扩展和实现

// 基础用户接口
interface User {
  // 只读属性
  readonly id: string | number;
  // 必填属性
  username: string;
  email: string;
  // 可选属性
  age?: number;
  // 函数属性
  login: () => void;
  // 函数属性的另一种写法
  logout(): void;
}

// 扩展接口 - 添加额外属性
interface AdminUser extends User {
  adminLevel: number;
  // 新的函数属性
  manageUsers: () => void;
}

// 接口继承多个接口
interface EmployeeUser {
  employeeId: string;
  department: string;
}

interface SuperUser extends User, EmployeeUser {
  permissions: string[];
}

// 使用接口定义对象
const regularUser: User = {
  id: "user-001",
  username: "john_doe",
  email: "john@example.com",
  age: 30,
  login: () => console.log("User logged in"),
  logout: () => console.log("User logged out")
};

// 使用扩展后的接口
const admin: AdminUser = {
  id: "admin-001",
  username: "admin_jane",
  email: "jane@example.com",
  adminLevel: 1,
  login: () => console.log("Admin logged in"),
  logout: () => console.log("Admin logged out"),
  manageUsers: () => console.log("Managing users")
};

// 函数参数使用接口
function getUserInfo(user: User): string {
  return `User: ${user.username}, Email: ${user.email}`;
}

// 索引签名接口
interface StringDictionary {
  [key: string]: string;
}

const translations: StringDictionary = {
  hello: "Hello",
  goodbye: "Goodbye"
};

// 数字索引签名接口
interface NumberArray {
  [index: number]: number;
}

const numberList: NumberArray = [1, 2, 3, 4, 5];

export {
  regularUser,
  admin,
  getUserInfo,
  translations,
  numberList
};

export type {
  User,
  AdminUser,
  SuperUser,
  StringDictionary,
  NumberArray
};
