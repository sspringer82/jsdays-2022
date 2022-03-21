export default class Fahrzeug {
    #motorRunning = false;
    constructor(fuel) {
        this.fuel = fuel;
    }

    startMotor() {
        this.#motorRunning = true;
    }

    stopMotor() {
        this.#motorRunning = false;
    }

    isMotorRunning() {
        return this.#motorRunning;
    }

}