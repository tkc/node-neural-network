import { irisData } from "./asset/iris";
import * as nn from "./lib/neural-network";

const X: number[][] = irisData
  .filter((i, index) => index <= 100)
  .map(i => [i.sepalLength, i.sepalWidth, i.petalLength, i.petalWidth]);
const Y: number[] = irisData.filter((i, index) => index < 100).map(i => (i.variety === "Iris-setosa" ? -1 : 1));

const XTrain: number[][] = X.filter((i, index) => index < 40 || (index >= 50 && index < 90));
const XTest: number[][] = X.filter((i, index) => (index >= 40 && index < 50) || (index >= 90 && index < 100));
const YTrain: number[] = Y.filter((i, index) => index < 40 || (index >= 50 && index < 90));
const YTest: number[] = Y.filter((i, index) => (index >= 40 && index < 50) || (index >= 90 && index < 100));

const eta = 0.1;
let weights1 = [0.1, 0.1, 0.1, 0.1];
let bias1 = 0.1;
let weights2 = [0.1, 0.1, 0.1, 0.1];
let bias2 = 0.2;

for (let count = 0; count < 15; count++) {
  const res1 = nn.Update(XTrain, YTrain, weights1, bias1, eta);
  weights1 = res1.w;
  bias1 = res1.b;

  const res2 = nn.Update(XTrain, YTrain, weights2, bias2, eta);
  weights2 = res2.w;
  bias2 = res2.b;

  const acc1 = nn.Accuracy(XTest, YTest, weights1, bias1);
  const loss1 = nn.Loss(XTrain, YTrain, weights1, bias1);
  const acc2 = nn.Accuracy(XTest, YTest, weights2, bias2);
  const loss2 = nn.Loss(XTest, YTest, weights2, bias2);
  console.log(`acc_1:${acc1} losss_1:${loss1} acc_2:${acc2} loss_2:${loss2}`);
}

console.log(`bias1:${bias1} bias2:${bias2}`);
