const Curve = require('./curve');

test('iteration 1', () => {
  const curve = new Curve([-1, 0], [1, 0]);
  expect(curve.iterate(1).path()).toEqual([
    [-1, 0], 
    [0, 1],
    [1, 0]
  ]);
});

test('iteration 2', () => {
  const curve = new Curve([-1, 0], [1, 0]);
  expect(curve.iterate(2).path()).toEqual([
    [-1, 0], 
    [-1, 1], 
    [0, 1],
    [0, 0],
    [1, 0]
  ]);
});



test('iteration 4', () => {
  const curve = new Curve([-1, 0], [1, 0]);
  expect(curve.iterate(4).path()).toEqual([
    [-1, 0], 
    [-1, 1], 
    [0, 1],
    [0, 0],
    [1, 0]
  ]);
});
