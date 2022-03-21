let block = 'myBlock';
const myBlockConst = 'myBlock';
var functionVar = 'do not use me!';

// primitive types

// Boolean
const isTrue = true;
const isFalse = false;

// Null - Abwesenheit eines Wertes - dem Entwickelnden überlassen
const nullVar = null;

// undefined - Abwesenheit eines Wertes - gehört der Engine
const undefinedVar = undefined;

if (undefinedVar === undefined) {
    console.log('undefined is undefined');
}

// Number
const integerVar = 42;
const floatVar = 42.42;
const eVar = 1.0e+2;

console.log(Number.MAX_SAFE_INTEGER);

// BigInt
const bigIntVar = BigInt(42);
const bigIntVar2 = 42n;
const reallybigIntVar = 9007199254740996n;
console.log(reallybigIntVar);
console.log(typeof bigIntVar);

// String
const stringVar = 'Hello "World"';
const stringVar2 = "Hello 'World'";
const who = 'World';
const stringVar3 = `Hello ${who}`; // template string

const firstname = 'Basti';
const lastname = 'Springer';
const fn = firstname + ' ' + lastname + ' !';
const fullname = `${firstname} ${lastname}!!!`;

// Symbol
const sym = Symbol('name');
console.log(sym);
const o = {
    [sym]: 'Basti'
}
console.log(o[sym]);

// composite types

// Object
const objectType = {
    name: 'Basti!',
    getName() {
        return this.name;
    },
}
console.log(objectType.getName());

const objectType2 = new Object(); // unüblich

// Array
const arr = [1, 2, 3];
console.log(arr[0]);

const arr2 = new Array(1, 2, 3);
console.log(arr2);

// by-value (primitive) vs. by-reference (composite)

function modify(obj) {
    // schlecht, da seiteneffekt
    // obj.name = 'Ludmilla';
    // besser: objekt kopieren, modifizieren, zurückgeben
    const clone = { ...obj };
    clone.name = 'Günther';
    return clone;
}
const result = modify(objectType);
console.log(objectType);
console.log(result)

const primitiveString = 'asdf';
// primitiveString = 'jklö'; - TypeError
const compositeObj = {
    name: 'Klaus',
}
compositeObj.name = 'Hans-Peter';
console.log(compositeObj);
// compositeObj = {}; // - TypeError - neuzuweisung

// Merke: Objekte sind immer konstant!

const original = {
    a: '1',
    b: { name: 'Basti' },
    c: '3',
}

const clone = { ...original };

// const c = {};
// c.a = original.a;
// c.b = original.b;
// c.c = original.c;
clone.b.name = 'Justus';
console.log(original.b.name); // Justus
console.log(clone.b.name); // Justus

// Copy/Clone
// 1. JSON.parse(JSON.stringify(obj)) - verliert Methoden
// 2. Immutability-helper (https://github.com/kolodny/immutability-helper)
// 3. Immer.js (https://github.com/immerjs/immer)
// 4. Immutable.js (https://immutable-js.com/)