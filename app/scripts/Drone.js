export default class Drone {
  constructor(id, name, maxSpeed) {
    this.id = id;
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  static theFastestOf(drone1, drone2) {
    let fastest = null;

    if (drone1.maxSpeed > drone2.maxSpeed) {
      fastest = drone1;
    }

    if (drone1.maxSpeed < drone2.maxSpeed) {
      fastest = drone2;
    }

    return fastest;
  }

  fly() {
    console.log(`Drone ${this.id} is flying.`);
  }
}

Drone.vehicleType = 'Rotorcraft';
