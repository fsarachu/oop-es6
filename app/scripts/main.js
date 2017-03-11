import Vehicle from './Vehicle';
import Drone from './Drone';
import Car from './Car';

let drone = new Drone();
let car = new Car();

console.log(`drone instanceof Drone: ${drone instanceof Drone}`);
console.log(`drone instanceof Vehicle: ${drone instanceof Vehicle}`);
console.log(`drone instanceof Object: ${drone instanceof Object}`);

console.log(`car instanceof Car: ${car instanceof Car}`);
console.log(`car instanceof Vehicle: ${car instanceof Vehicle}`);
console.log(`car instanceof Object: ${car instanceof Object}`);
