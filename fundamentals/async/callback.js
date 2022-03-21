function myCallback(error, asyncValue) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(42 + asyncValue);
}

asyncFunction(myCallback);
console.log(1);
console.log(2);
console.log(3);

function asyncFunction(callback) {
    const value = 4;
    setTimeout(function () {
        callback(null, value);
    }, 1000);
}