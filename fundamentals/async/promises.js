function asyncFunction(success = true, timeout = 1000) {
    return new Promise(function (resolve, reject) {
        const value = 4;
        setTimeout(function () {
            if (success) {
                resolve(value);
            } else {
                reject('Oh no')
            }
        }, timeout);
    })
}

const promise = asyncFunction()
promise.then(function (value) {
    console.log(42 + value);
});
console.log(1);
console.log(2);
console.log(3);


asyncFunction().then((value) => {
    console.log(value)
    return asyncFunction();
}, (error) => console.error(error)).then((value) => {
    console.log(value)
    return asyncFunction();
}).then((value) => {
    console.log(value)
    return asyncFunction();
}).then((value) => {
    console.log(value)
    return asyncFunction();
}).then((value) => {
    console.log(value)
    return asyncFunction();
}).then((value) => {
    console.log(value)
    return asyncFunction();
}).then((value) => {
    console.log(value)
    return asyncFunction();
}).catch(error => console.error(error));

const p1 = asyncFunction(true, 10);
const p2 = asyncFunction(true, 100);
const p3 = asyncFunction(true, 1000);
const p4 = asyncFunction(false, 100);

Promise.all([p1, p2, p3]).then(values => { // ausgeführt, wenn alle Promises resolved sind
    console.log(values);
});

Promise.race([p1, p2, p3]).then(values => { // ausgeführt, wenn die erste Promise resolved ist
    console.log('race', values);
});

Promise.allSettled([p1, p2, p3, p4]).then(values => { // ausgeführt, wenn alle Promises resolved sind
    console.log(values);
});

(async () => {
    const value = await Promise.allSettled([p1, p2, p3, p4]);
    console.log('await', value);
})(); 