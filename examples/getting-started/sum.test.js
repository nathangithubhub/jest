// Copyright 2004-present Facebook. All Rights Reserved.

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 3 + 3 to equal 6", () => {
  expect(sum(3, 3)).toEqual(6);
});
test("adds 1 + 1 should return as a number", () => {
  expect(sum(1, 1)).toBeCalled
})
