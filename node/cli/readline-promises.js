import * as readline from 'readline';

import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

function promisifiedQuestion(rl, text) {
    return new Promise(resolve => rl.question(text, resolve));
}

// promise variante
const promise = promisifiedQuestion(rl, 'What do you think of Node.js? ');
promise.then(answer => console.log(`Thank you for your valuable feedback: ${answer}`));

// await variante
const answer2 = await promisifiedQuestion(rl, '2 + 2 = ? ');
if (answer2 === '4') {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}