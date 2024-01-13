export const fizzbuzz = (param: number) => {
	if (param % 3 === 0 && param % 5 === 0) return 'Fizz Buzz';
	if (param % 3 === 0) return 'Fizz';
	if (param % 5 === 0) return 'Buzz';
	return param;
};
