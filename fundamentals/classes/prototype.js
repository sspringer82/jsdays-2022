function User(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

User.prototype.getFullName = function () {
    return `${this.firstname} ${this.lastname} ${this.age}`;
};

User.createUser = function (firstname, lastname, age) {
    return new User(firstname, lastname, age);
};

const klaus = new User('Klaus', 'Müller', 53);
const lisa = User.createUser('Lisa', 'Müller', 51);

console.log(klaus.getFullName());
console.log(lisa.getFullName());