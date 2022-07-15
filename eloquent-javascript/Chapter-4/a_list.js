function arrayToList(arr) {
    let list = null;
    for (let i = 0; i < arr.length; i++) {
        list = prepend(arr[i], list);
    }
    return list;
}

function listToArray(list) {
    if (list.rest === null) {
        return [list.value];
    }
    return listToArray(list.rest).concat(list.value);
}

function prepend(item, list) {
    return {value: item, rest: list};
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
