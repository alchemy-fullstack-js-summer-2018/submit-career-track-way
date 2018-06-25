const calc = require('../lib/calculator');
const assert = require('assert');
// const add = calc.add;
// const subtract = calc.subtract;
// const multiply = calc.multiply;
// const divide = calc.divide;
const { add, subtract, multiply, divide } = calc;
//this is the same as the above variables because it is a new ES6 feature for making things easier

describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts two numbers', () => {
        const diff = subtract(6, 2);
        assert.equal(diff, 4);
    });

    it('multiplies two numbers', () => {
        const product = multiply(4, 5);
        assert.equal(product, 20);
    });

    it('divides two numbers', () => {
        const quotient = divide(12, 6);
        assert.equal(quotient, 2);
    });

    it('throws a new error if someone is trying to divide by 0', () => {
        try {
            //run code we want to throw error
            divide(3, 0);
            //if we get here, error didnt happen
            assert.fail('should have thrown an error');
        }
        catch(err) {
            //if error happens above, err here should
            //be the divide by 0 error
            assert.equal(err.message, 'DO NOT DIVIDE BY 0 PLEASE AND THANK YOU');

        }
    });
});