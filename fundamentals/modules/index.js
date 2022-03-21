import { subtract as ziehDasAb, multiply, pi } from './math.js'; // named import Umbenennung mit "as"
import zählMirDasDochBitteZusammen from './math.js'; // default import (ohne {}) - Name ist frei wählbar

const value1 = 579;
const value2 = 347;
const add = 'foo';

console.log(pi);

console.log('add: ', zählMirDasDochBitteZusammen(value1, value2));
console.log('subtract: ', ziehDasAb(value1, value2));
console.log('multiply: ', multiply(value1, value2));