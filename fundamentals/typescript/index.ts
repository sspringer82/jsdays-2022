import Collection from "./Generics";
import { Greetable } from "./Greetable";
import User from "./User";

const myName: string = 'Basti';

console.log(myName);

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

const klaus = new User('Klaus', 'Müller', 32);
console.log(klaus.getFullName());

function greet(user: User): void {
    console.log(`Hallo ${user.getFullName()}`);
}
greet(klaus);

function greet2(user: Greetable): void {
    console.log(`Hallo ${user.getFullName()}`);
}
greet2({ getFullName() { return 'Basti' } });

console.log(typeof klaus);

const collection = new Collection<User | string>([klaus]);
collection.add(new User('Basti', 'Springer', 32));
collection.add('xxx');
console.log(collection.getAll());

enum Directions {
    North,
    South,
    East,
    West
}

function goto(direction: Directions): string {
    switch (direction) {
        case Directions.North:
            return 'Norden';
        case Directions.South:
            return 'Süden';
        case Directions.East:
            return 'Osten';
        case Directions.West:
            return 'Westen';
    }
}

console.log(goto(Directions.North));