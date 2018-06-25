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
});

describe('calculator', () => {

    it('subtracts two numbers', () => {
        const subtract = subtract(4, 3);
        assert.equal(subtract, 1);
    });
});

describe('calculator', () => {
    it('multiplies two numbers', () => {
        const multiply = multiply(4, 3);
        assert.equal(multiply, 12);
    });
});

describe('calculator', () => {
    it('divides two numbers', () => {
        const divide = divide(4, 2);
        assert.equal(quotient, 2);
    });
});