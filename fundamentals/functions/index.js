// named function
const result = greet('John'); // funktioniert, wegen hoisting
function greet(name) {
    return 'Hello ' + name;
}

console.log(result);

// anonymous function
const greet2 = function (name) {
    return 'Hello ' + name;
}
const result2 = greet2('John');
console.log(result2);

// arrow function
const greet3 = (name) => {
    return 'Hello ' + name;
}
const result3 = greet3('John');
console.log(result3);

const resultArr = [1, 2, 3].map(function (item) { return item * 2 });
console.log(resultArr);
const resultArr2 = [1, 2, 3].map(item => item * 2);
// Parameterliste: Klammern bei 1 Parameter optional
// Funktionskörper: bei einem Statement Klammern optional, Statement = Returnvalue
console.log(resultArr2);

// this binding
const o1 = {
    value: 'value1',
    doIt() {
        setTimeout(function () {
            console.log(this.value); // undefined
        }, 100);
    }
}
o1.doIt();

const o2 = {
    value: 'value2',
    doIt() {
        setTimeout(function () {
            console.log(this.value); // value2
        }.bind(this), 100);
    }
}
o2.doIt();

const o3 = {
    value: 'value3',
    doIt() {
        setTimeout(() => {
            console.log(this.value); // value3
        }, 100);
        // arrow function ist this immer der umgebende kontext
    }
}
o3.doIt();

// IIFE - anonyme selbstaufrufende funkion - für neuen Function scope
(function () {
    console.log('Immediate Function');
})();

function add(a, b) {
    return a + b;
}
console.log(add('a', 'b'));
console.log(add(1, 2));
console.log(add(1, 2, 3)); // ignoriert zu viele Parameter
console.log(add(1)); // add(1, undefined);

function add2(a, b) {
    if (b === undefined) {
        b = 0;
    }
    return a + b;
};
console.log(add2(1));

function add3(a, b = add(a, 2) * 2) {
    return a + b;
};
console.log(add3(1));

function add4(a = 42, b) { // nicht tun! optionale parameter nach hinten
    return a + b;
}
console.log('----')
console.log(add4()); // add4(42, undefined);
console.log(add4(1)); // add4(1, undefined);
console.log(add4(1, 2)); // add4(1, 2);
console.log(add4(1, 2, 3)); // add4(1, 2, 3);
console.log(add4(undefined, 2)); // nur undefined triggert den optionalen parameter
console.log('----')

function add5(a, b) {
    const valueOfB = b || 0;
    // let valueOfB = 0;
    // if (b) {
    //     valueOfB = b;
    // }
    return a + valueOfB;
}
console.log(add5(1, false));
console.log(add5(1, null));
console.log(add5(1, 0));
console.log(add5(1, 0n));
console.log(add5(1, NaN));

// function object
function doIt(callback) {
    const value = 42;
    callback(value);
}

function myCallback(callbackValue) {
    console.log('callback: ', callbackValue);
}

doIt(myCallback);

console.log('function object: ', myCallback); // function object
console.log('function call: ', myCallback()); // function call - return value