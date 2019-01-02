import * as Models from "../models";
import * as Vector from "./vactor";

export function CreateMatrix(v: number[][]): Models.Matrix {
  let matrixsInstance: number[][];
  matrixsInstance = v;

  function val(): number[][] {
    return matrixsInstance;
  }

  function row(i: number): Models.Vector {
    if (i < 0 || i >= matrixsInstance.length) {
      return Vector.CreateVector([0]);
    }
    return Vector.CreateVector(matrixsInstance[i]);
  }

  function column(j: number): Models.Vector {
    if (j < 0 || j >= matrixsInstance[0].length) {
      return Vector.CreateVector([0]);
    }
    const result = [];
    for (let i = 0; i < matrixsInstance.length; i += 1) {
      result.push(matrixsInstance[i][j]);
    }
    return Vector.CreateVector(result);
  }

  function log(): Models.Matrix {
    const res = matrixsInstance.map((x, i) => x.map((y, k) => Math.log(y)));
    return CreateMatrix(res);
  }

  function add(matrix: number | Models.Matrix): Models.Matrix {
    if (typeof matrix === "number") {
      const res = matrixsInstance.map((x: number[]) => x.map(y => (y + matrix) as number));
      return CreateMatrix(res);
    }

    if (!isSameSize(matrix)) {
      throw new Error("Cannot operate two matrix with different dimensions.");
    }

    const val: number[][] = matrix.val();
    const res = matrixsInstance.map((x, i) => x.map((y, k) => y + val[i][k]));
    return CreateMatrix(res);
  }

  function subtract(matrix: number | Models.Matrix): Models.Matrix {
    if (typeof matrix === "number") {
      const res = matrixsInstance.map((x: number[]) => x.map(y => (y - matrix) as number));
      return CreateMatrix(res);
    }

    if (!isSameSize(matrix)) {
      throw new Error("Cannot operate two matrix with different dimensions.");
    }

    const val: number[][] = matrix.val();
    const res = matrixsInstance.map((x, i) => x.map((y, k) => y - val[i][k]));
    return CreateMatrix(res);
  }

  function isSameSize(matrix: Models.Matrix): boolean {
    const val: number[][] = matrix.val();
    return matrixsInstance.length === val.length && matrixsInstance[0].length === val[0].length;
  }

  function multiply(matrix: number | Models.Matrix): Models.Matrix {
    if (typeof matrix === "number") {
      const result = CreateMatrix(matrixsInstance).val();
      for (let i = 0, li = result.length; i < li; i += 1) {
        for (let j = 0, lj = result[0].length; j < lj; j += 1) {
          result[i][j] *= matrix as number;
        }
      }
      return CreateMatrix(matrixsInstance);
    }

    let inputElements: number[][] = matrix.val();
    if (matrixsInstance[0].length !== inputElements.length) {
      throw new Error("Number of rows of A should match number of cols of B.");
    }

    const li = matrixsInstance.length;
    const lj = inputElements[0].length;
    const lk = matrixsInstance[0].length - 1;
    const result = [];
    for (let i = 0; i < li; i += 1) {
      const currentRow = [];
      for (let j = 0; j < lj; j += 1) {
        let sum = 0;
        for (let k = lk; k >= 0; k -= 1) {
          sum += matrixsInstance[i][k] * inputElements[k][j];
        }
        currentRow[j] = sum;
      }
      result[i] = currentRow;
    }

    return CreateMatrix(result);
  }

  return {
    val,
    multiply,
    isSameSize,
    subtract,
    row,
    column,
    log,
    add,
  };
}
