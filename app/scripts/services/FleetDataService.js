import Car from '../models/Car';
import Drone from '../models/Drone';
import DataError from "./DataError";

let id = 1;

function nextId() {
  return id++;
}

export default class FleetDataService {

  constructor() {
    this._cars = [];
    this._drones = [];
    this._errors = [];
  }

  get cars() {
    return this._cars;
  }

  get drones() {
    return this._drones;
  }

  get errors() {
    return this._errors;
  }

  loadData(fleet) {
    for (let vehicle of fleet) {
      switch (vehicle.type) {
        case 'car':
          this.cars.push(this.loadCar(vehicle));
          break;
        case 'drone':
          this.drones.push(this.loadDrone(vehicle));
          break;
        default:
          this.errors.push(new DataError('Unkown vehicle type', vehicle));
          break;
      }
    }
  }

  loadCar(car) {
    try {
      return new Car(
        nextId(),
        car.license,
        car.make,
        car.model,
        car.position,
        car.kilometers
      );
    } catch (e) {
      this.errors.push(new DataError(`Error loading car: ${e.message}`, car));
    }

    return null;
  }

  loadDrone(drone) {
    try {
      return new Drone(
        nextId(),
        drone.license,
        drone.make,
        drone.model,
        drone.position,
        drone.airHours
      );
    } catch (e) {
      this.errors.push(new DataError(`Error loading drone; ${e.message}`, drone));
    }

    return null;
  }
}
