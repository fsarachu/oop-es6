import Vehicle from './Vehicle';

export default class Drone extends Vehicle {
  constructor(licenseNumber) {
    super(licenseNumber);
  }

  start() {
    console.log('Starting Drone');
  }
}
