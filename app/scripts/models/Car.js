import Vehicle from './Vehicle';

export default class Car extends Vehicle {

  constructor(id, license, make, model, position, kilometers) {
    super(id, license, make, model, position);
    this._kilometers = kilometers;
  }

  get kilometers() {
    return this._kilometers;
  }

  set kilometers(value) {
    this._kilometers = value;
  }
}
