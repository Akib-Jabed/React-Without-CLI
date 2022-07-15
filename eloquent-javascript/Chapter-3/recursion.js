// program to get the number produced by either adding 5 or multiplying by 3
function getExpression(target) {
    function get(current, expression) {
        if (current == target) {
            return expression;
        } else if (current > target) {
            return null;
        } else {
            return get(current + 5, `(${expression} + 5)`) ||
                   get(current * 3, `(${expression} * 3)`); 
        }
    }
    return get(1, '1');
}

console.log(getExpression(13));
console.log(getExpression(15));
console.log(getExpression(18));



// Excercise
function isEven(number) {
    if (number < 0) {
        return false;
    } else if (number == 0) {
        return true
    }
    return isEven(number-2);
}

console.log(isEven(75));
console.log(isEven(50));
