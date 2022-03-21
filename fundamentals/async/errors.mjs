function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(Error('Oh no!'));
        }, 1000);
    })
}

// asyncFunction().catch(e => console.error(e.message));

(async () => {
    try {
        asyncFunction(); // try/catch funktioniert nicht bei asynchronität, nur in Verbindung mit await!
        await asyncFunction();
    } catch (e) {
        console.error(e.message);
    }
})();