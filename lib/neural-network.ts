import * as matrx from "./math";

export interface UpdateResult {
  w: number[];
  b: number;
}

export function Sigmoid(x: number[][]): number[] {
  const m = x.map(x1 => x1.map(x2 => x2 * -1));
  const bottom = m.map(v => v.map(v2 => Math.exp(v2))).map(v => v.map(v2 => v2 + 1));
  return bottom.map(v => v.map(v2 => 1 / v2))[0];
}

export function Activation(x: number[][], w: number[], b: number): number[] {
  const m = matrx.SumScalarM2(b, [matrx.DotM2M1(x, w)]);
  return Sigmoid(m);
}

export function Diff(x: number[][], y: number[], w: number[], b: number): number[] {
  const a: number[] = Activation(x, w, b);
  return matrx.SubtractM1Scalar(y, a[0]);
}

export function Loss(x: number[][], y: number[], w: number[], b: number): number {
  const dif = Diff(x, y, w, b);
  const diffSquare: number[] = matrx.SquareM1(dif);
  const d = matrx.DotDivideM2Scalar(diffSquare, 2 * y.length);
  return matrx.SumM1(d);
}

export function Predict(x: number[][], w: number[], b: number): number[] {
  const a = Activation(x, w, b);
  return a.map(v => (v < 0.5 ? 0.0 : 1.0));
}

export function Accuracy(x: number[][], y: number[], w: number[], b: number): number[] {
  const pre = Predict(x, w, b);
  const act = pre.map((v, i) => (v === y[i] ? 1 : 0));
  return matrx.DotDivideM2Scalar([matrx.SumM1(act)], act.length);
}

export function Update(x: number[][], y: number[], w: number[], b: number, eta: number): UpdateResult {
  const a = Activation(x, w, b);
  const a1 = matrx.SubtractM1M1(a, y);
  const a2 = a;
  const a3 = matrx.SubtracScalarM1(1, a);
  const as = matrx.MultiplyM1M1(matrx.MultiplyM1M1(a1, a2), a3);
  w = matrx.SubtractM1M1(
    w,
    matrx.MultiplyScalarM1(eta, matrx.MultiplyScalarM1(1 / y.length, matrx.SumAxis0M2(matrx.MultiplyM2M1(x, as)))),
  );
  b = b - matrx.MultiplyScalarM1(eta, matrx.MultiplyScalarM1(1 / y.length, [matrx.SumM2([as])]))[0];
  return { w, b };
}
