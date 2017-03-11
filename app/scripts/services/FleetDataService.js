import Car from '../models/Car';
import Drone from '../models/Drone';

export default class FleetDataService {

  constructor() {
    this._cars = [];
    this._drones = [];
  }

  get cars() {
    return this._cars;
  }

  get drones() {
    return this._drones;
  }
}
