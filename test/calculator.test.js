const assert = require('assert');
const { add, subtract, multiply, divide } = require('../lib/calculator');

describe('calculator', () => {
    
    it('adds two numbers', () => {
        assert.equal(add(3, 4), 7);
    });

    it('subtracts two numbers', () => {
        assert.equal(subtract(7, 2), 5);
    });

    it('multiplies two numbers', () => {
        assert.equal(multiply(3, 5), 15);
    });

    it('divides two numbers', () => {
        assert.equal(divide(10, 2), 5);
    });

    it('throws error when dividing by 0', () => {
        try {
            divide(3, 0);
            assert.fail('Should have thrown error');
        }
        catch(err) {
            assert.equal(err.message, 'Cannot divide by zero');

        }
    });
});