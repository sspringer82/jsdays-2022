export function getTask(difficulty) {
    let op1 = 0;
    let op2 = 0;

    switch (difficulty) {
        default:
        case 1:
            op1 = getRandomInt(10);
            op2 = getRandomInt(10);
            break;
        case 2:
            op1 = getRandomInt(10);
            op2 = getRandomInt(100);
            break;
        case 3:
            op1 = getRandomInt(100);
            op2 = getRandomInt(100);
            break;
    }

    return {
        op1,
        op2,
        result: op1 + op2
    }
}

function getRandomInt(base) {
    return Math.floor(Math.random() * base);
}
