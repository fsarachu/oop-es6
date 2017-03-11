export default class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  fly() {
    console.log(`Drone ${this.id} is flying.`);
  }
}

Drone.vehicleType = 'Rotorcraft';
