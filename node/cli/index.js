const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('1 + 1 = ? ', (answer) => {
    if (answer === '2') {
        console.log('korrekt');
    } else {
        console.log('falsch');
    }

    rl.close();
});