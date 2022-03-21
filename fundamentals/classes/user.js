export default class User { // Klassennamen per Konvention mit Großbuchstaben

    firstname = 'default';
    lastname = 'default';
    #age = 0;

    constructor(firstname, lastname, age = 42) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.#age = age;
        User.userCount++;
    }

    getFullName() {
        return `${this.firstname} ${this.lastname} ${this.#getFormattedAge()}`;
    }

    #getFormattedAge() {
        return `(${this.#age})`;
    }

    get age() {
        console.log('getter')
        return this.#age;
    }

    set age(value) {
        if (typeof value !== 'number') {
            throw Error('Age must be a number');
        }
        this.#age = value;
    }

    static createUser(firstname, lastname, age) {
        return new User(firstname, lastname, age);
    }

    static userCount = 0;
}