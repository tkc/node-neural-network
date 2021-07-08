export type VarietyIrisSetosa = "Iris-setosa";
export type VarietyIrisVersicolor = "Iris-versicolor";
export type VarietyIrisVirginica = "Iris-virginica";
export type VarietyType = VarietyIrisSetosa | VarietyIrisVersicolor | VarietyIrisVirginica;

export interface Iris {
  sepalLength: number;
  sepalWidth: number;
  petalLength: number;
  petalWidth: number;
  variety: VarietyType;
}

export interface Vector {
  val(): number[];
  size(): number;
  log: () => number[];
  subtract: (v: number | Vector) => Vector;
  sum: () => number;
  multiply: (v: number[]) => Vector;
  dot: (v: number[]) => number;
  map(fn: (v: number) => number): Vector;
  matrix(): Matrix;
}

export interface Matrix {
  val(): number[][];
  multiply: (matrix: number | Matrix) => Matrix;
  isSameSize(matrix: Matrix): boolean;
  subtract(matrix: number | Matrix): Matrix;
  row(i: number): Vector;
  column(j: number): Vector;
  log(): Matrix;
  add(matrix: number | Matrix): Matrix;
}
