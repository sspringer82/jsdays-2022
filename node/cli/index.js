import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { question } from './question.js';
import { getTask } from './get-task.js';
import { parseCli } from './cli-parser.js';

const rl = readline.createInterface({ input, output });

const options = parseCli();

const difficulty = parseInt(options.difficulty, 10);
const count = parseInt(options.count, 10);
const tasks = [];
for (let i = 0; i < count; i++) {
    tasks.push(getTask(difficulty));
}

for (let i = 0; i < count; i++) {
    const task = tasks[i];
    const answer = await question(rl, `${task.op1} + ${task.op2} = ?`);
    if (parseInt(answer, 10) === task.result) {
        console.log('Correct!');
    } else {
        console.log('FALSCH!');
    }
}


rl.close();