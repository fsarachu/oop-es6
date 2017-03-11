import Vehicle from './Vehicle';

export default class Car extends Vehicle {

  constructor(license, make, model, position, kilometers) {
    super(license, make, model, position);
    this._kilometers = kilometers;
  }

  get kilometers() {
    return this._kilometers;
  }

  set kilometers(value) {
    this._kilometers = value;
  }
}
