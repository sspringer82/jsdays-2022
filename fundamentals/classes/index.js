import Admin from "./admin.js";
import User from "./user.js";

const klaus = new User('Klaus', 'Müller', 53);

console.log(klaus);
console.log(klaus.getFullName());
// console.log(klaus.getFormattedAge()); TypeError
// console.log(klaus.#age);
// klaus.age = '14'; // Error
klaus.age = 14;
console.log('age', klaus.age);
console.log(typeof klaus); // object
console.log(klaus instanceof User); // true

const lisa = User.createUser('Lisa', 'Müller', 51);
console.log(lisa);
console.log(User.userCount);

const admin = new Admin('Admin', 'istrator', 11, 'superadmin!!!');
console.log(admin.getFullName());

Admin.prototype.doIt = function () {
    console.log('did it!');
}

admin.doIt();