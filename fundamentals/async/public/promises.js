function getUsers() {
    const promise = fetch('/api')
        .then(response => response.json())
    return promise;
}

console.log(1);
getUsers().then(users => {
    users.forEach(user => console.log(`${user.firstname} ${user.lastname}`));
})
console.log(2);