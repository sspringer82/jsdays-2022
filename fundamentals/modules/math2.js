function add(a, b) { // es kann nur 1 default export pro Modul geben
    return a + b;
}

function subtract(a, b) { // es kann beliebig viele named exporte pro Modul geben
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

export { add, subtract, multiply };