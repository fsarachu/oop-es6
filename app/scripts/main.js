import Vehicle from './models/Vehicle';
import Drone from './models/Drone';
import Car from './models/Car';

let drone = new Drone('DR-PA154');
let car = new Car('CA-BM078');

console.log(`drone.licenseNumber: ${drone.licenseNumber}`);
console.log(`car.licenseNumber: ${car.licenseNumber}`);

console.log('------------------');

console.log(`drone.start():`);
drone.start();
console.log(`car.start():`);
car.start();
