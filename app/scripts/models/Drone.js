import Vehicle from './Vehicle';

export default class Drone extends Vehicle {

  constructor(id, license, make, model, position, airHours) {
    super(id, license, make, model, position);
    this._airHours = airHours;
  }

  get airHours() {
    return this._airHours;
  }

  set airHours(value) {
    this._airHours = value;
  }
}
