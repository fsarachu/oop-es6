import Car from '../models/Car';
import Drone from '../models/Drone';

let id = 1;

function nextId() {
  return id++;
}

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

  loadData(fleet) {
    for (let vehicle of fleet) {
      switch (vehicle.type) {
        case 'car':
          this.cars.push(
            new Car(
              nextId(),
              vehicle.license,
              vehicle.make,
              vehicle.model,
              vehicle.position,
              vehicle.kilometers
            )
          );
          break;
        case 'drone':
          this.drones.push(
            new Drone(
              nextId(),
              vehicle.license,
              vehicle.make,
              vehicle.model,
              vehicle.position,
              vehicle.airHours
            )
          );
          break;
      }
    }
  }
}
