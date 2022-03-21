class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
console.log(book1);
console.log(book1.getSummary());

Book.prototype.location = 'New York';

console.log(book1.hasOwnProperty('title'));
console.log(book1.hasOwnProperty('getSummary'));
console.log(book1.hasOwnProperty('location'));
console.log(book1.location);
book1.location = 'Boston';
console.log(book1.location);
console.log(book2.location);