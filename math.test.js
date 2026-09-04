import assert from 'node:assert/strict';
import test from 'node:test';

import { divide, multiply, subtract } from './math.js';

test('multiply returns the product of two numbers', () => {
  assert.equal(multiply(6, 7), 42);
  assert.equal(multiply(-3, 4), -12);
  assert.equal(multiply(2.5, 4), 10);
});

test('subtract returns the difference between two numbers', () => {
  assert.equal(subtract(10, 4), 6);
  assert.equal(subtract(-3, 4), -7);
  assert.equal(subtract(5.5, 2.25), 3.25);
});

test('divide returns the quotient of two numbers', () => {
  assert.equal(divide(20, 5), 4);
  assert.equal(divide(-12, 3), -4);
  assert.equal(divide(5, 2), 2.5);
});

test('divide throws an error when dividing by zero', () => {
  assert.throws(() => divide(10, 0), {
    message: 'Cannot divide by zero.',
  });
});
