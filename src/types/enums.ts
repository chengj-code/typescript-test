// TypeScript 枚举示例
// 展示数字枚举、字符串枚举、异构枚举的实际应用

// 1. 数字枚举
// 默认从 0 开始自增
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// 访问枚举值
const upDirection = Direction.Up; // 0
const leftDirection = Direction.Left; // 2

// 访问枚举名称
const directionName = Direction[1]; // "Down"

// 2. 自定义数字枚举
// 手动设置起始值
enum StatusCode {
  Ok = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500
}

// 使用自定义数字枚举
const successCode = StatusCode.Ok; // 200
const notFoundCode = StatusCode.NotFound; // 404

// 3. 字符串枚举
// 每个成员必须手动赋值
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

// 使用字符串枚举
const redColor = Color.Red; // "RED"
const greenColor = Color.Green; // "GREEN"

// 4. 异构枚举
// 混合数字和字符串成员
enum MixedEnum {
  No = 0,
  Yes = "YES"
}

// 使用异构枚举
const noValue = MixedEnum.No; // 0
const yesValue = MixedEnum.Yes; // "YES"

// 5. 常量枚举
// 使用 const 关键字定义，编译时会被删除，提高性能
const enum Weekday {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// 使用常量枚举
const today = Weekday.Monday; // 1
const tomorrow = Weekday.Tuesday; // 2

// 6. 枚举在 switch 语句中的应用
function getDirectionName(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "向上";
    case Direction.Down:
      return "向下";
    case Direction.Left:
      return "向左";
    case Direction.Right:
      return "向右";
    default:
      return "未知方向";
  }
}

// 使用枚举 switch 函数
const directionNameZh = getDirectionName(Direction.Up); // "向上"

// 7. 枚举与接口结合
interface Response {
  status: StatusCode;
  message: string;
  data?: any;
}

// 使用枚举与接口结合
const successResponse: Response = {
  status: StatusCode.Ok,
  message: "请求成功",
  data: { id: 1, name: "Test" }
};

const errorResponse: Response = {
  status: StatusCode.NotFound,
  message: "资源未找到"
};

// 8. 枚举成员类型和联合枚举类型
// 枚举成员可以作为类型使用
type PrimaryColor = Color.Red | Color.Green | Color.Blue;

function isPrimaryColor(color: string): color is PrimaryColor {
  return [Color.Red, Color.Green, Color.Blue].includes(color as PrimaryColor);
}

// 使用枚举成员类型
const primaryColor: PrimaryColor = Color.Red;
const isRedPrimary = isPrimaryColor(Color.Red); // true

// 9. 计算枚举成员
// 枚举成员可以是计算值
const getYear = (): number => new Date().getFullYear();

enum Version {
  Current = getYear(),
  Next = Current + 1
}

// 使用计算枚举成员
const currentVersion = Version.Current;
const nextVersion = Version.Next;

export {
  Direction,
  upDirection,
  leftDirection,
  directionName,
  StatusCode,
  successCode,
  notFoundCode,
  Color,
  redColor,
  greenColor,
  MixedEnum,
  noValue,
  yesValue,
  today,
  tomorrow,
  getDirectionName,
  directionNameZh,
  successResponse,
  errorResponse,
  isPrimaryColor,
  primaryColor,
  isRedPrimary,
  Version,
  currentVersion,
  nextVersion
};

export type {
  Weekday,
  Response
};
