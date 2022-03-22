import { getAllUsers as modelGetAllUsers } from './model.js';

async function getAllUsers(request, response) {
    const users = await modelGetAllUsers();
    response.json(users);
}

export { getAllUsers };