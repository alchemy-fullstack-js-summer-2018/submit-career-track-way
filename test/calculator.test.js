const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const sub = calc.sub;
const mult = calc.mult;
const div = calc.div;

describe('calculator', () => {
    it('add two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);

    });

    it('subtracts two numbers', () => {
        const difference = sub(16, 8);
        assert.equal(difference, 8);
    });

    it('multiplies two numbers', () => {
        const product = mult(3, 4);
        assert.equal(product, 12);
    });

    it('divides two numbers', () => {
        const quot = div(12, 4);
        assert.equal(quot, 3);
    });


});