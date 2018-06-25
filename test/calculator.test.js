const assert = require('assert');
const { add, sub, multiply, divide } = require('../lib/calculator');




describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts two numbers', () => {
        const difference = sub(9, 3);
        assert.equal(difference, 6);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 4);
        assert.equal(product, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(6, 2);
        assert.equal(quotient, 3);
    });

    it('throw error when attempts to divide by 0', () => {
        try {
            //run some code that we expect to fail
            divide(3, 0);
            assert.fail('Should have thrown error');
        }
        catch(err) {
            assert.equal(err.message, 'Cannot divide by zero');
        }
    });
});