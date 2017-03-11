export default class Vehicle {

  constructor(license, make, model, position) {
    this._license = license;
    this._make = make;
    this._model = model;
    this._position = position;
  }

  get license() {
    return this._license;
  }

  set license(value) {
    this._license = value;
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
