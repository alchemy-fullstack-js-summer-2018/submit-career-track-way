const assert = require('assert');
const { add, subtract, multiply, divide } = require('../lib/calculator');

describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtract two numbers', () => {
        const difference = subtract(7, 3);
        assert.equal(difference, 4);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 4);
        assert.equal(product, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(12, 4);
        assert.equal(quotient, 3);
    });

    it('throws error when diving by zero', () => {
        try {
            // run some code that we expect to throw error
            divide(3, 0);
            // if we get here, error didn't happen
            assert.fail('Should have thrown error');
        }
        catch(err) {
            // if error happens above, err here should
            // be the divide by zero error
            assert.equal(err.message, 'Cannot divide by zero');
        }
    });
});