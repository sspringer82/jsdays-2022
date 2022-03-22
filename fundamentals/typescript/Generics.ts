export default class Collection<T> {
    private items: Array<T> = [];

    constructor(items?: Array<T>) {
        if (items) {
            this.items = items;
        }
    }

    add(item: T) {
        this.items.push(item);
    }

    getAll(): Array<T> {
        return this.items;
    }
}