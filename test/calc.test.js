const assert = require('assert');
const calc = require('../lib/calc');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;


describe('calc', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts two numbers', () => {
        const difference = subtract(10, 2);
        assert.equal(difference, 8);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 5);
        assert.equal(product, 15);
    });

    it('divides two numbers', () => {
        const quotient = divide(8, 2);
        assert.equal(quotient, 4);
    });
    
    it('throws error when dividing by zero', () => {
        try {
            //run some code that we expect to throw err
            divide(3, 0);
            //if we get here, err didn't happen
            assert.fail('Should have thrown error');
        }
        catch(err) {
            //if err happens above, err should be the divide by 0 err
            assert.equal(err.message, 'Cannot divide by zero');
        }
    });
});