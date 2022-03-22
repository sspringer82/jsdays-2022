export function question(rl, text) {
    return new Promise(resolve => rl.question(text, resolve));
}