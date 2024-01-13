import { describe, expect, it } from 'vitest';
import { fizzbuzz } from './fizzbuzz';

describe('all test for fizzbuz', () => {
	it('if param = 1 return 1', () => {
		expect(fizzbuzz(1)).toBe(1);
	});
	it('if param = 2 return 2', () => {
		expect(fizzbuzz(2)).toBe(2);
	});
	it('if param = 3 return "Fizz"', () => {
		expect(fizzbuzz(3)).toBe('Fizz');
	});
	it('if param = 5 return "Buzz"', () => {
		expect(fizzbuzz(5)).toBe('Buzz');
	});
	it('if param = 6 return "Fizz"', () => {
		expect(fizzbuzz(6)).toBe('Fizz');
	});
	it('if param = 10 return "Buzz"', () => {
		expect(fizzbuzz(10)).toBe('Buzz');
	});
	it('if param = 15 return "Fizz Buzz"', () => {
		expect(fizzbuzz(15)).toBe('Fizz Buzz');
	});
});
