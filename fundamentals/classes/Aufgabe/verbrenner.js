import Fahrzeug from "./fahrzeug.js";

export default class Verbrenner extends Fahrzeug {
    constructor(fuel, zylinder) {
        super(fuel);
        this.zylinder = zylinder;
    }

    static createVerbrenner(fuel, zylinder) {
        return new this(fuel, zylinder);
    }
}