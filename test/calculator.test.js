const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calculator', () => {

    it('add two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtract two numbers',() => {
        const diff = subtract(4, 3);
        assert.equal(diff, 1);
    });  
    it('multiply two numbers', () => {
        const product = multiply(2, 3);
        assert.equal(product, 6);
    });  
    it('divides tow numbers', () => {
        const quotient = divide(8, 4);
        assert.equal(quotient, 2); 
    }); 
});