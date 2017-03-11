import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  constructor(licenseNumber) {
    super(licenseNumber);
  }

  start() {
    console.log('Starting Car');
  }
}
