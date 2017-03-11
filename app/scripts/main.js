import Drone from './Drone';

let drone = new Drone('P154', 'Parrot AR');

console.log(`drone: ${drone}`);
console.log(`typeof Drone: ${typeof Drone}`);
console.log(`typeof drone: ${typeof drone}`);
console.log(`drone instanceof Drone: ${drone instanceof Drone}`);
console.log(`drone instanceof Object: ${drone instanceof Object}`);
console.log(`drone.constructor.name: ${drone.constructor.name}`);
