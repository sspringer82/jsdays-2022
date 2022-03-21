import User from "./user.js";

export default class Admin extends User {
    perms = 'superadmin';

    constructor(firstname, lastname, age, perms) {
        super(firstname, lastname, age);
        this.perms = perms;
    }

    getFullName() {
        return super.getFullName() + ' ' + this.perms;
    }
}