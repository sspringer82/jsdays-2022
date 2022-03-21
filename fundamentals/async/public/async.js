function getUsers() {
    const promise = fetch('/api')
        .then(response => response.json())
    return promise;
}


// top level await
// console.log('1');
// const users = await getUsers();
// users.forEach(user => console.log(`${user.firstname} ${user.lastname}`));
// console.log('2');

// async/await 
async function handleUsers() { // gibt immer ein promise objekt mit dem Rückgabewert zurück
    console.log('1');
    try {
        const users = await getUsers();
        users.forEach(user => console.log(`${user.firstname} ${user.lastname}`));
    } catch (e) {
        console.error(e);
    }
    console.log('2');
    return 42;
}


console.log('a');
handleUsers();
console.log('b');