import Vehicle from './Vehicle';

export default class Drone extends Vehicle {

  constructor(license, make, model, position, airHours) {
    super(license, make, model, position);
    this._airHours = airHours;
  }

  get airHours() {
    return this._airHours;
  }

  set airHours(value) {
    this._airHours = value;
  }
}
