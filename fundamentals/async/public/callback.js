function getUsers(callback) {
    fetch('/api').then(response => response.json()).then(users => {
        console.log(users);
        callback(users);
    });
}

function handelUsers(users) {
    users.forEach(user => console.log(`${user.firstname} ${user.lastname}`));
    // fetch('/details').then(response => response.json()).then(details => {
    //     console.log(details);
    // })
}


console.log(1);
getUsers(handelUsers);
console.log(2);

// document.querySelector('button').addEventListener('click', function () {
//     console.log('Button was clicked')
// })