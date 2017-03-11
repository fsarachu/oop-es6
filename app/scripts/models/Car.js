import Vehicle from './Vehicle';

export default class Car extends Vehicle {

  constructor(id, licenseNumber, make, model) {
    super(id, licenseNumber, make, model);
  }

  start() {
    console.log('Starting Car');
  }
}
