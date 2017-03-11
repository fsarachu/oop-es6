export default class Vehicle {
  constructor(licenseNumber) {
    this._licenseNumber = licenseNumber;
  }

  get licenseNumber() {
    return this._licenseNumber;
  }

  set licenseNumber(value) {
    this._licenseNumber = value;
  }

  start() {
    console.log('Starting Vehicle');
  }
}
