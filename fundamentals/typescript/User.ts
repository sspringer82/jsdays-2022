import { Greetable } from "./Greetable";

export default class User implements Greetable {
    private age: number;

    constructor(private firstname: string, private lastname: string, age: number) {
        this.age = age;
    }

    getFullName() {
        return `${this.firstname} ${this.lastname} ${this.getFormattedAge()}`;
    }

    private getFormattedAge(): string {
        return `(${this.age})`;
    }
}