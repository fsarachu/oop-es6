export default class Vehicle {

  constructor(id, licenseNumber, make, model, position) {
    this._id = id;
    this._licenseNumber = licenseNumber;
    this._make = make;
    this._model = model;
    this._position = position;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get licenseNumber() {
    return this._licenseNumber;
  }

  set licenseNumber(value) {
    this._licenseNumber = value;
  }

  get make() {
    return this._make;
  }

  set make(value) {
    this._make = value;
  }

  get model() {
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
  }
}
