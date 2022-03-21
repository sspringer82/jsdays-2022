function spread(a, b, c) {
    return a + b + c;
}

const result = spread(1, 2, 3);
console.log(result);
const arr = [1, 2, 3];
const result2 = spread(...arr);
console.log(result2);

const a2 = [...arr];

function rest(...myArgs) {
    return myArgs.reduce((prev, cur) => prev + cur, 0);
}

const result3 = rest(1, 2, 3,);
console.log(result3);

function lala() {
    console.log(arguments[2]); // bitte arguments vergessen!
}

lala(1, 2, 3);