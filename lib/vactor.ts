import * as Models from "../models";
import * as Matrix from "./matrix";

export function CreateArray(num: number, v: number): number[] {
  const result = [];
  for (let i = 0; i < num; i += 1) {
    result.push(v);
  }
  return result;
}

export function Zero(num: number): Models.Vector {
  return CreateVector(CreateArray(num, 0));
}

export function CreateVector(v: number[]): Models.Vector {
  let vectorInstance: number[];
  vectorInstance = v;

  function val(): number[] {
    return vectorInstance;
  }

  function size(): number {
    return vectorInstance.length;
  }

  function log(): number[] {
    return vectorInstance.map(v => Math.log(v));
  }

  function subtract(value: number | Models.Vector): Models.Vector {
    const vector = [];
    if (typeof value === "number") {
      for (let i = 0, li = vectorInstance.length; i < li; i += 1) {
        vector.push(vectorInstance[i] - value);
      }
    } else {
      const values: number[] = value.val();
      if (vectorInstance.length !== values.length) {
        throw new Error("Cannot operate two vectors with different dimensions.");
      }
      for (let i = 0, li = vectorInstance.length; i < li; i += 1) {
        vector.push(vectorInstance[i] - values[i]);
      }
    }
    return CreateVector(vector);
  }

  function sum(): number {
    return vectorInstance.reduce((p, c) => p + c);
  }

  function multiply(values: number[]): Models.Vector {
    const vector = [];
    for (let i = 0, li = vectorInstance.length; i < li; i += 1) {
      vector.push(vectorInstance[i] * values[i]);
    }
    return CreateVector(vector);
  }

  function dot(values: number[]): number {
    if (vectorInstance.length !== values.length) {
      throw new Error("Cannot operate two vectors with different dimensions.");
    }
    let product = 0;
    for (let i = 0; i < values.length; i += 1) {
      product += vectorInstance[i] * values[i];
    }
    return product;
  }

  function map(fn: (v: number) => number): Models.Vector {
    return CreateVector(vectorInstance.map(x => fn(x)));
  }

  function matrix(): Models.Matrix {
    return Matrix.CreateMatrix([vectorInstance]);
  }

  return {
    val,
    size,
    log,
    subtract,
    sum,
    multiply,
    dot,
    map,
    matrix,
  };
}
