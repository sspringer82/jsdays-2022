import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let answer = await rl.question('1 + 1 = ? ');

if (answer === '2') {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}

answer = await rl.question('2 + 2 = ? ');

if (answer === '4') {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}

rl.close();