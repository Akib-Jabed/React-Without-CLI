function deepEqual(valA, valB) {
    if (typeof valA === 'object' && typeof valB === 'object') {
        if (Object.keys(valA).length == Object.keys(valB).length) {
            for (let key of Object.keys(valA)) {
                return deepEqual(valA[key], valB[key]);
            }
        }
    }
    if (valA === valB) {
        return true;
    }
    return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));