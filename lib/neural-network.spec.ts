import * as nn from "./neural-network";

test("Sigmoid", () => {
  const m = [[1, 1, 1]];
  const res = nn.Sigmoid(m);
  expect(res).toEqual([0.7310585786300049, 0.7310585786300049, 0.7310585786300049]);
});

test("Activation1", () => {
  const x = [[1, 1, 1, 1]];
  const w = [0.1, 0.1, 0.1, 0.1];
  const b = 0.1;
  const res = nn.Activation(x, w, b);
  expect(res).toEqual([0.6224593312018546]);
});

test("Activation2", () => {
  const x = [[1, 1, 1, 1], [1, 1, 1, 1]];
  const w = [0.1, 0.1, 0.1, 0.1];
  const b = 0.1;
  const res = nn.Activation(x, w, b);
  expect(res).toEqual([0.6224593312018546, 0.6224593312018546]);
});

test("Diff", () => {
  const x = [[1, 1, 1, 1]];
  const y = [1, 1, 1, 1];
  const w = [0.1, 0.1, 0.1, 0.1];
  const b = 0.1;
  const res = nn.Diff(x, y, w, b);
  expect(res).toEqual([0.3775406687981454, 0.3775406687981454, 0.3775406687981454, 0.3775406687981454]);
});

test("Loss", () => {
  const x = [[1, 1, 1, 1]];
  const y = [1, 1, 1, 1];
  const w = [0.1, 0.1, 0.1, 0.1];
  const b = 0.1;
  const res = nn.Loss(x, y, w, b);
  expect(res).toEqual(0.07126847829827546);
});

test("Accuracy", () => {
  const x = [[1, 1, 1, 1]];
  const y = [1, 1, 1, 1];
  const w = [0.1, 0.1, 0.1, 0.1];
  const b = 0.1;
  const res = nn.Accuracy(x, y, w, b);
  expect(res.valueOf()).toEqual([1]);
});

test("Predict", () => {
  const x = [[1, 1, 1, 1]];
  const w = [0.1, 0.1, 0.1, 0.1];
  const b = 0.1;
  const res = nn.Predict(x, w, b);
  expect(res.valueOf()).toEqual([1]);
});

test("Update", () => {
  const eta = 0.1;
  const x = [[1, 1, 1, 1]];
  const y = [1, 1, 1, 1];
  const w = [0.1, 0.1, 0.1, 0.1];
  const b = 0.1;
  const res = nn.Update(x, y, w, b, eta);
  expect(res.w).toEqual([0.1088723458674637, 0.1088723458674637, 0.1088723458674637, 0.1088723458674637]);
  expect(res.b).toEqual(0.1088723458674637);
});
