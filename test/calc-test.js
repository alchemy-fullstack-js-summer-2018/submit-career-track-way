const assert = require('assert');
const calc = require('../lib/calc.js');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calc', () => {
    it('adds two numbers', () => {
        const sum = add(3, 2);
        assert.equal(sum, 5);
    });
    it('subtracts two numbers', () => {
        const sub = subtract(3, 2);
        assert.equal(sub, 1);
    });
    it('multiplies two numbers', () => {
        const prod = multiply(3, 2);
        assert.equal(prod, 6);
    });
    it('divides two numbers', () => {
        const quot = divide(4, 2);
        assert.equal(quot, 2);
    });
    it('throws an error when dividing by zero', () => {
        try {
            //run some code that has an error
            divide(3, 0);
            //if we get here, error didn't happen
            assert.fail('should have thrown an error');
        }
        catch(err){
            //if error happens above
            assert.equal(err.message, 'Cannot divide by zero');
        }
    });
    
});
