import Fahrzeug from "./fahrzeug.js";
import Verbrenner from "./verbrenner.js";

const tesla = new Fahrzeug('Strom');
tesla.startMotor();
checkStatus(tesla, 'Tesla');

const bmw = Verbrenner.createVerbrenner('Benzin', 8);
bmw.startMotor();
checkStatus(bmw, 'BMW');
bmw.stopMotor();
checkStatus(bmw, 'BMW');
function checkStatus(auto, name) {
    console.log(`der ${name} läuft ${!auto.isMotorRunning() ? 'nicht' : ''}`);
}

