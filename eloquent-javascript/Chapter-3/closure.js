function multiplier(factor) {
    // return number => number * factor;
    const inner = number => number * factor;
    return inner;
}

console.log(multiplier(3)(4));