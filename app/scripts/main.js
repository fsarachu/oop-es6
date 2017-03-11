import Drone from './Drone';

let drone1 = new Drone('PA154', 'Parrot AR', 50);
let drone2 = new Drone('PH412', 'Phantom DJI', 32);

console.log('drone1.fly()');
drone1.fly();
console.log('drone2.fly()');
drone2.fly();

console.log('Drone.theFastestOf(drone1, drone2):');
console.dir(Drone.theFastestOf(drone1, drone2));

console.log(`drone1.id: ${drone1.id}`);
drone1.id = 'PA100';
console.log(`drone1.id: ${drone1.id}`);

