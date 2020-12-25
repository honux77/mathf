import { Mathf } from '../mathf';

test('IsOdd test', () => {
  expect(Mathf.isOdd(5)).toBe(true);
  expect(Mathf.isOdd(4)).toBe(false);
});

test('IsEven test', () => {
    expect(Mathf.isEven(5)).toBe(false);
    expect(Mathf.isEven(4)).toBe(true);
  });


test('Const test', () => {
    expect(Mathf.PI).toBeGreaterThanOrEqual(3.13);
    expect(Mathf.PI).toBeLessThanOrEqual(3.15);
});