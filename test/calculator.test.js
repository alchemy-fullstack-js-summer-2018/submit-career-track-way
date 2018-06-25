const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts value Y from value X', () => {
        const remainder = subtract(10, 3);
        assert.equal(remainder, 7);
    });

    it('multiplies two numbers', () => {
        const multiplied = multiply(5, 5);
        assert.equal(multiplied, 25);
    });

    it('divides number X into separate parts Y', () => {
        const divided = divide(50, 5);
        assert.equal(divided, 10);
    });
});