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
        const total = subtract(3, 4);
        assert.equal(total, 1);
    })

    it('multiplies two numbers', () => {
        const product = multiply(3, 4);
        assert.equal(product, 12);
    })

    it('divides two numbers', () => {
        const result = divide(12, 4);
        assert.equal(result, 3);
    })

    it('throws error when diving by zero', () => {
        try {
            // run some code that we expect to throw error
            divide(3,0);
            // if we get here, error didn't happen
            assert.fall('should have thrown error');
            // (NOTE:)

        }
        catch(err) {

        }

    });
});