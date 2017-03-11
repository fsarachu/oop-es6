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
          this.cars.push(FleetDataService.loadCar(vehicle));
          break;
        case 'drone':
          this.drones.push(FleetDataService.loadDrone(vehicle));
          break;
      }
    }
  }

  static loadCar(car) {
    return new Car(
      nextId(),
      car.license,
      car.make,
      car.model,
      car.position,
      car.kilometers
    );
  }

  static loadDrone(drone) {
    return new Drone(
      nextId(),
      drone.license,
      drone.make,
      drone.model,
      drone.position,
      drone.airHours
    );
  }
}
