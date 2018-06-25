const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calculator', () => {
    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts two numbers', () => {
        const diff = subtract(4, 3);
        assert.equal(diff, 1);
    });

    it('multiplies two numbers', () => {
        const multiple = multiply(3, 4);
        assert.equal(multiple, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(60, 12);
        assert.equal(quotient, 5);
    });

    // it('doesn\'t divide by 0', () => {
    //     try {
    //         divide(60, 0);
    //     }
    //     catch {
    //         return 'Cannot divide by 0!';
    //     }
    // });
});
