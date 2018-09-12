const Segment = require('./segment');

test('splits', () => {
  const segment = new Segment([-1, 0], [1, 0], true);
  expect(segment.split()).toEqual([
    [-1, 0], 
    [0, 1],
    [1, 0]
  ]);
});

test('splits right', () => {
  const segment = new Segment([-1, 0], [1, 0], false);
  expect(segment.split()).toEqual([
    [-1, 0], 
    [0, -1],
    [1, 0]
  ]);
});