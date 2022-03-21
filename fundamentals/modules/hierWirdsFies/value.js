export const obj = {
    value: 42
};

function generateToken() {
    return Math.random().toString(36).substring(2);
}

export const token = generateToken();