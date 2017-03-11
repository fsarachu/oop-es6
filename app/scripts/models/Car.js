import Vehicle from './Vehicle';

export default class Car extends Vehicle {

  constructor(id, licenseNumber, make, model, position, kilometers) {
    super(id, licenseNumber, make, model, position);
    this._kilometers = kilometers;
  }

  get kilometers() {
    return this._kilometers;
  }

  set kilometers(value) {
    this._kilometers = value;
  }
}
