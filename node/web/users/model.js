const users = [{
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    username: 'johndoe',
}, {
    id: 2,
    firstname: 'Jane',
    lastname: 'Doe',
    username: 'janedoe',
}];

async function getAllUsers() {
    return users;
}


export { getAllUsers };