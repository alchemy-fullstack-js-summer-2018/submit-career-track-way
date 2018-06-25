
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if(x === 0 || y === 0) {
        throw new Error('Cannot divide by zero');
    }
    return x / y;
}

module.exports = {
    add, subtract, multiply, divide
};