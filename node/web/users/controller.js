import { getAllUsers as modelGetAllUsers, getOneUser as modelGetOneUser } from './model.js';

async function getAllUsers(request, response) {
    const users = await modelGetAllUsers();
    response.json(users);
}
async function getOneUser(request, response) {
    const id = parseInt(request.params.id, 10);
    const users = await modelGetOneUser(id);
    response.json(users);
}



export { getAllUsers, getOneUser };