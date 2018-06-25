const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const sub = calc.sub;
const multiply = calc.multiply;
const divide = calc.divide;


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

    it('attempts to divide by 0', () => {
        
    });
});