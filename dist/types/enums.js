"use strict";
// TypeScript 枚举示例
// 展示数字枚举、字符串枚举、异构枚举的实际应用
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextVersion = exports.currentVersion = exports.Version = exports.isRedPrimary = exports.primaryColor = exports.errorResponse = exports.successResponse = exports.directionNameZh = exports.tomorrow = exports.today = exports.yesValue = exports.noValue = exports.MixedEnum = exports.greenColor = exports.redColor = exports.Color = exports.notFoundCode = exports.successCode = exports.StatusCode = exports.directionName = exports.leftDirection = exports.upDirection = exports.Direction = void 0;
exports.getDirectionName = getDirectionName;
exports.isPrimaryColor = isPrimaryColor;
// 1. 数字枚举
// 默认从 0 开始自增
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (exports.Direction = Direction = {}));
// 访问枚举值
const upDirection = Direction.Up; // 0
exports.upDirection = upDirection;
const leftDirection = Direction.Left; // 2
exports.leftDirection = leftDirection;
// 访问枚举名称
const directionName = Direction[1]; // "Down"
exports.directionName = directionName;
// 2. 自定义数字枚举
// 手动设置起始值
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
// 使用自定义数字枚举
const successCode = StatusCode.Ok; // 200
exports.successCode = successCode;
const notFoundCode = StatusCode.NotFound; // 404
exports.notFoundCode = notFoundCode;
// 3. 字符串枚举
// 每个成员必须手动赋值
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (exports.Color = Color = {}));
// 使用字符串枚举
const redColor = Color.Red; // "RED"
exports.redColor = redColor;
const greenColor = Color.Green; // "GREEN"
exports.greenColor = greenColor;
// 4. 异构枚举
// 混合数字和字符串成员
var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["No"] = 0] = "No";
    MixedEnum["Yes"] = "YES";
})(MixedEnum || (exports.MixedEnum = MixedEnum = {}));
// 使用异构枚举
const noValue = MixedEnum.No; // 0
exports.noValue = noValue;
const yesValue = MixedEnum.Yes; // "YES"
exports.yesValue = yesValue;
// 5. 常量枚举
// 使用 const 关键字定义，编译时会被删除，提高性能
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
    Weekday[Weekday["Sunday"] = 7] = "Sunday";
})(Weekday || (Weekday = {}));
// 使用常量枚举
const today = Weekday.Monday; // 1
exports.today = today;
const tomorrow = Weekday.Tuesday; // 2
exports.tomorrow = tomorrow;
// 6. 枚举在 switch 语句中的应用
function getDirectionName(direction) {
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
exports.directionNameZh = directionNameZh;
// 使用枚举与接口结合
const successResponse = {
    status: StatusCode.Ok,
    message: "请求成功",
    data: { id: 1, name: "Test" }
};
exports.successResponse = successResponse;
const errorResponse = {
    status: StatusCode.NotFound,
    message: "资源未找到"
};
exports.errorResponse = errorResponse;
function isPrimaryColor(color) {
    return [Color.Red, Color.Green, Color.Blue].includes(color);
}
// 使用枚举成员类型
const primaryColor = Color.Red;
exports.primaryColor = primaryColor;
const isRedPrimary = isPrimaryColor(Color.Red); // true
exports.isRedPrimary = isRedPrimary;
// 9. 计算枚举成员
// 枚举成员可以是计算值
const getYear = () => new Date().getFullYear();
var Version;
(function (Version) {
    Version[Version["Current"] = getYear()] = "Current";
    Version[Version["Next"] = Version.Current + 1] = "Next";
})(Version || (exports.Version = Version = {}));
// 使用计算枚举成员
const currentVersion = Version.Current;
exports.currentVersion = currentVersion;
const nextVersion = Version.Next;
exports.nextVersion = nextVersion;
//# sourceMappingURL=enums.js.map