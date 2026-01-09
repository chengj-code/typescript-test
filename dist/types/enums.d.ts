declare enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
declare const upDirection = Direction.Up;
declare const leftDirection = Direction.Left;
declare const directionName: string;
declare enum StatusCode {
    Ok = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ServerError = 500
}
declare const successCode = StatusCode.Ok;
declare const notFoundCode = StatusCode.NotFound;
declare enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
declare const redColor = Color.Red;
declare const greenColor = Color.Green;
declare enum MixedEnum {
    No = 0,
    Yes = "YES"
}
declare const noValue = MixedEnum.No;
declare const yesValue = MixedEnum.Yes;
declare const enum Weekday {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
declare const today = Weekday.Monday;
declare const tomorrow = Weekday.Tuesday;
declare function getDirectionName(direction: Direction): string;
declare const directionNameZh: string;
interface Response {
    status: StatusCode;
    message: string;
    data?: any;
}
declare const successResponse: Response;
declare const errorResponse: Response;
type PrimaryColor = Color.Red | Color.Green | Color.Blue;
declare function isPrimaryColor(color: string): color is PrimaryColor;
declare const primaryColor: PrimaryColor;
declare const isRedPrimary: boolean;
declare enum Version {
    Current,
    Next
}
declare const currentVersion = Version.Current;
declare const nextVersion = Version.Next;
export { Direction, upDirection, leftDirection, directionName, StatusCode, successCode, notFoundCode, Color, redColor, greenColor, MixedEnum, noValue, yesValue, today, tomorrow, getDirectionName, directionNameZh, successResponse, errorResponse, isPrimaryColor, primaryColor, isRedPrimary, Version, currentVersion, nextVersion };
export type { Weekday, Response };
//# sourceMappingURL=enums.d.ts.map