import { program } from 'commander';

export function parseCli() {

    program
        .option('-d, --difficulty <n>', 'Difficulty level', 1)
        .option('-c, --count <n>', 'Count of questions', 4)

    program.parse();
    const options = program.opts();

    return options;
}
