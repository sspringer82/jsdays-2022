function asyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve(42);
            reject('Oh no')
        }, 1000);
    })
}

asyncFunction().then((value) => {
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
}).then((value) => {
    console.log(value)
    return asyncFunction();
}).catch(error => console.error(error));