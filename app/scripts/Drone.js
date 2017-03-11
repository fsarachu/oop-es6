export default class Drone {
  constructor(id, name, maxSpeed) {
    this._id = id;
    this._name = name;
    this._maxSpeed = maxSpeed;
  }

  get id() {
    console.log('Accesing id property');
    return this._id;
  }

  set id(value) {
    console.log(`Setting id property from ${this._id} to ${value}`);
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  set maxSpeed(value) {
    this._maxSpeed = value;
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
