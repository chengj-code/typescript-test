declare function fetchData(): Promise<string>;
declare function calculate(): Promise<number>;
declare function processData(): Promise<number>;
declare function fetchAndProcess(): Promise<void>;
declare function getUser(): Promise<{
    id: string;
    name: string;
}>;
declare function fetchMultipleData(): Promise<void>;
declare function raceExamples(): Promise<void>;
declare function allSettledExample(): Promise<void>;
declare function anyExample(): Promise<void>;
interface User {
    id: string;
    name: string;
    email: string;
}
interface Product {
    id: string;
    name: string;
    price: number;
}
declare function fetchUser(): Promise<User>;
declare function fetchProduct(): Promise<Product>;
declare function iterateAsync(): Promise<void>;
declare function useAsyncGenerator(): Promise<void>;
declare function safeFetch(): Promise<string>;
declare function runAsyncExamples(): Promise<void>;
export { fetchData, calculate, processData, fetchAndProcess, getUser, fetchMultipleData, raceExamples, allSettledExample, anyExample, fetchUser, fetchProduct, iterateAsync, useAsyncGenerator, safeFetch, runAsyncExamples };
//# sourceMappingURL=asyncTypes.d.ts.map