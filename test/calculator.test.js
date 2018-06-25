const assert = require('assert');
const { add, subtract, multiply, divide } = require('../lib/calculator');

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

    it('doesn\'t divide by 0', () => {
        try {
            divide(3, 0);
            assert.fail('should have thrown error');
        }
        catch(err) {
            assert.equal(err.message, 'Cannot divide by zero');
        }
    });
});
