function promise_all(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let pending = totalPromise = promises.length;
        for (let i = 0; i < totalPromise; i++) {
            promises[i].then(result => {
                results[i] = result;
                pending--;
                if (pending == 0) 
                    resolve(results);
            }).catch(reject);
        }
        if (promises.length == 0)
            resolve(results);
    });
}


promise_all([]).then(array => {
    console.log('This should be []:', array);
})

function soon(val) {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});

promise_all([soon(1), Promise.reject('x'), soon(3)]).then(array => {
    console.log('Should not get here');
}).catch(error => {
    if (error != 'x') {
        console.log('Unexpected failure: ', error);
    } else {
        console.log(error);
    }
})
