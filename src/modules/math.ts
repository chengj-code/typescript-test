// 数学工具模块
// 提供基本的数学运算函数

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function squareRoot(n: number): number {
  if (n < 0) {
    throw new Error("Square root of negative number is not allowed");
  }
  return Math.sqrt(n);
}

export function absolute(n: number): number {
  return Math.abs(n);
}

export function round(n: number): number {
  return Math.round(n);
}

export function floor(n: number): number {
  return Math.floor(n);
}

export function ceil(n: number): number {
  return Math.ceil(n);
}
