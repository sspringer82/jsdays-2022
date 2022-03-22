import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { question } from './question.js';

const rl = readline.createInterface({ input, output });

const answer = await question(rl, 'What do you think of Node.js? ');
console.log(`Thank you for your valuable feedback: ${answer}`);

const answer2 = await question(rl, '2 + 2 = ? ');
if (answer2 === '4') {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}
rl.close();