export type VarietyIrisSetosa = "Iris-setosa";
export type VarietyIrisVersicolor = "Iris-versicolor";
export type VarietyIrisVirginica = "Iris-virginica";
export type VarietyType = VarietyIrisSetosa | VarietyIrisVersicolor|VarietyIrisVirginica

export interface Iris {
    sepalLength: number;
    sepalWidth: number;
    petalLength: number;
    petalWidth: number;
    variety: VarietyType;
  }