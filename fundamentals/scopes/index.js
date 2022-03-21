// global - überall gültig - var, const, let
// module - im aktuellen Modul gültig - var, const, let (mit einem Modulsystem)
// function - in der funktion gültig - var, const, let
// block - im aktuellen Block gültig - const, let
// closure scope - in der Funktion und ihrem deklarierenden Block gültig - var, const, let 

// global
const myGlobal = 'asdf';
console.log(myGlobal);

// function
function scoped() {
    const myFunctionScope = 'myFunctionScope';
    console.log(myFunctionScope);
}
// console.log(myFunctionScope); // Reference Error wg function scope

// block
{
    const myBlockScope = 'myBlockScope';
    console.log(myBlockScope);
}
// console.log(myBlockScope); // Reference Error wg block scope

for (let i = 0; i < 10; ++i) {
    console.log(i);
}
// console.log('xxx', i); // Reference Error wg block scope

function add(a, b) {
    let debug;
    try {
        debug = 'i am debugging'
        if (b === undefined) {
            throw Error('nooo!')
        }
        return a + b;
    } catch (e) {
        console.error('Whoops', e);
        console.log(debug);
    } finally {
        console.log('finally');
    }
}
add(1);
console.log('aaaah!');

// closure

function outer() {
    let counter = 0;
    return {
        increment() {
            counter++;
        },
        getValue() {
            return counter;
        }
    }
}

const o = outer();

o.increment(); // counter = 1
o.increment(); // counter = 2
console.log(o.getValue());

const o2 = outer(); // o2 ist unabhängig
console.log('o', o.getValue()); // 2
console.log('o2', o2.getValue()); // 0
