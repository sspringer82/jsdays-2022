const moduleVar = 'moduleVar'; // module scoped

export const pi = Math.PI;

export default function add(a, b) { // es kann nur 1 default export pro Modul geben
    return a + b;
}

export function subtract(a, b) { // es kann beliebig viele named exporte pro Modul geben
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}