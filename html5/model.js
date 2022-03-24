import Dexie from './node_modules/dexie/dist/dexie.mjs';

const db = new Dexie('pw');
db.version(1).stores({
    pw: '++id, user, password, url',
})

// Declare tables, IDs and indexes
db.version(1).stores({
    friends: '++id, name, age'
});

const model = {
    save(entry) {
        if (entry.id) {
            return this.editElement(entry);
        } else {
            return this.addElement(entry);
        }
    },
    addElement(entry) {
        delete entry.id;
        return db.pw.add(entry);
    },
    editElement(entry) {
        localStorage.setItem(entry.id, JSON.stringify(entry));
    },
    deleteElement(id) {
        localStorage.removeItem(id);
    },
    getAllElements() {
        // return Object.values(localStorage).map(el => JSON.parse(el));
        return db.pw.toArray();
    },
    getOneById(id) {
        return JSON.parse(localStorage.getItem(id));
    },
};

export default model;
