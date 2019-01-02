export function expM2(matrix: number[][]): number[][] {
  return matrix.map(m1 => m1.map(m2 => Math.exp(m2)));
}

export function MultiplyM1M1(matrix1: number[], matrix2: number[]): number[] {
  if (matrix1.length === matrix2.length) {
    return matrix1.map((m, i) => matrix1[i] * matrix2[i]);
  } else {
    if (matrix1.length < matrix2.length) {
      return matrix2.map((m, i) => matrix1[0] * matrix2[i]);
    } else {
      return matrix1.map((m, i) => matrix1[i] * matrix2[0]);
    }
  }
}

export function MultiplyM2M1(matrix1: number[][], matrix2: number[]): number[][] {
  const res = [];
  matrix1.forEach((m, i) => {
    m.forEach((m2, k) => res.push(matrix2.map(m2 => m2 * matrix1[i][k])));
  });
  return res;
}

export function MultiplyScalarM1(scalar: number, matrix2: number[]): number[] {
  return matrix2.map(m => m * scalar);
}

export function SumScalarM2(scalar: number, matrix2: number[][]): number[][] {
  return matrix2.map(m2 => m2.map((m3, i) => m3 + scalar));
}

export function SumM1(matrix: number[]): number {
  return matrix.reduce((p, c) => p + c);
}

export function SumM2(matrix: number[][]): number {
  return matrix.map(m => m.reduce((p, c) => p + c)).reduce((p, c) => p + c);
}

export function SumAxis0M2(matrix: number[][]): number[] {
  return matrix.map(m => m.reduce((p, c) => p + c));
}

export function DotDivideM2Scalar(matrix2: number[], scalar: number): number[] {
  return matrix2.map(m2 => m2 / scalar);
}

export function DotDivideScalarM1(scalar: number, matrix: number[]): number[] {
  return matrix.map(m => scalar / m);
}

export function SquareM1(matrix: number[]): number[] {
  return matrix.map((m, i) => matrix[i] * matrix[i]);
}

export function SubtractM2Scalar(matrix1: number[][], scalar: number): number[][] {
  return matrix1.map(m1 => m1.map((m2, i) => m2 - scalar));
}

export function SubtractM1Scalar(matrix1: number[], scalar: number): number[] {
  return matrix1.map(m => m - scalar);
}

export function SubtracScalarM1(scalar: number, matrix1: number[]): number[] {
  return matrix1.map(m => scalar - m);
}

export function SubtractM1M1(matrix1: number[], matrix2: number[]): number[] {
  if (matrix1.length === matrix2.length) {
    return matrix1.map((m, i) => matrix1[i] - matrix2[i]);
  } else {
    if (matrix1.length < matrix2.length) {
      return matrix2.map((m, i) => matrix1[0] - matrix2[i]);
    } else {
      return matrix1.map((m, i) => matrix1[i] - matrix2[0]);
    }
  }
}

export function DotscalarM2(scalar: number, matrix2: number[][]): number[][] {
  return matrix2.map(m2 => m2.map((m3, i) => m3 * scalar));
}

export function DotM2M1(matrix1: number[][], matrix2: number[]): number[] {
  const res = matrix1.map(m1 => m1.map((m2, i) => m2 * matrix2[i]));
  return res.map(m1 => m1.reduce((p, c) => p + c));
}
