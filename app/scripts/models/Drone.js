import Vehicle from './Vehicle';

export default class Drone extends Vehicle {

  constructor(id, licenseNumber, make, model) {
    super(id, licenseNumber, make, model);
  }

  start() {
    console.log('Starting Drone');
  }
}
