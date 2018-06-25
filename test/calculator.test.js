const assert = require('assert');
const { add, subtract, multiply, divide } = require('../lib/calculator');

describe('calculator', () => {
    it('add two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);

    });

    it('subtracts two numbers', () => {
        const difference = subtract(16, 8);
        assert.equal(difference, 8);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 4);
        assert.equal(product, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(12, 4);
        assert.equal(quotient, 3);
    });

    it('throws error when dividing by zero', () => {
        try {
            // run some code that we expect to throw error
            divide(3, 0);
            // if we get here, error didn't happen
            assert.fail('should have thrown error');
            // (NOTE: assert fail will _throw_, meaning error
            // will be routed to catch)
        }
        catch(err) {
            assert.equal(err.message, 'Cannot divide by zero');
        }
    });

});