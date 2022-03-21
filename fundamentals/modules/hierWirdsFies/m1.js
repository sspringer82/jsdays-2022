import { obj, token } from './value.js';

console.log(obj.value);
obj.value = 12; // ACHTUNG - change by reference - wirkt sich auf die Applikation aus

console.log('token: ', token);