import * as matrx from "./math";

test("Dot", () => {
  const a = [[1, 1, 1, 1]];
  const res1 = matrx.DotscalarM2(1, a);
  expect(res1).toEqual([[1, 1, 1, 1]]);

  const b: number[][] = [[1, 1], [1, 1]];
  const c: number[] = [1, 1];
  const res2 = matrx.DotM2M1(b, c);
  expect(res2).toEqual([2, 2]);

  const d: number[][] = [[1, 1, 1, 1]];
  const e: number[] = [0.1, 0.1, 0.1, 0.1];
  const res3 = matrx.DotM2M1(d, e);
  expect(res3).toEqual([0.4]);
});

test("Exp", () => {
  const a = [[1, 1, 1, 1]];
  const res = matrx.expM2(a);
  expect(res).toEqual([[2.718281828459045, 2.718281828459045, 2.718281828459045, 2.718281828459045]]);
});

test("Multiply", () => {
  const a = [1, 1, 1, 1];
  const b = [1, 1, 1, 1];
  const res = matrx.MultiplyM1M1(a, b);
  expect(res).toEqual([1, 1, 1, 1]);
});

test("Sum", () => {
  const a = 1;
  const b = [[1, 1, 1, 1]];
  const res = matrx.SumScalarM2(a, b);
  expect(res).toEqual([[2, 2, 2, 2]]);
});
