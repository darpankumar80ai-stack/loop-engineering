import assert from 'node:assert/strict';
import test from 'node:test';

import { callGetUserById, divide, multiply, subtract } from './math.js';

test('multiply returns the product of two numbers', () => {
  assert.equal(multiply(6, 7), 42);
  assert.equal(multiply(-3, 4), -12);
  assert.equal(multiply(2.5, 4), 10);
});

test('subtract returns the difference between two numbers', () => {
  assert.equal(subtract(1, 4), 6);
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

test('callGetUserById returns the fetched user', async (context) => {
  const user = { id: 7, name: 'Jane Doe' };
  const fetchMock = context.mock.method(globalThis, 'fetch', async (url) => {
    assert.equal(url, 'https://jsonplaceholder.typicode.com/users/7');
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  });

  assert.deepEqual(await callGetUserById(7), user);
  assert.equal(fetchMock.mock.callCount(), 1);
});

test('callGetUserById rejects when the response is not OK', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => new Response(null, {
    status: 404,
    statusText: 'Not Found',
  }));
  context.mock.method(console, 'error', () => { });

  await assert.rejects(() => callGetUserById(999), {
    message: 'Network response was not ok',
  });
});
