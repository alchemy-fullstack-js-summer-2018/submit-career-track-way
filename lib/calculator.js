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
    if(y === 0){
        throw new Error('DO NOT DIVIDE BY 0 PLEASE AND THANK YOU');
    }
    return x / y;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};