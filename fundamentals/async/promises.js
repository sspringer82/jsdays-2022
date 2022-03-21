function asyncFunction() {
    return new Promise(function (resolve, reject) {
        const value = 4;
        setTimeout(function () {
            resolve(value);
            // reject('Oh no')
        }, 1000);
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