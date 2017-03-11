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
          this.loadCar(vehicle);
          break;
        case 'drone':
          this.loadDrone(vehicle);
          break;
      }
    }
  }

  loadCar(car) {
    this.cars.push(
      new Car(
        nextId(),
        car.license,
        car.make,
        car.model,
        car.position,
        car.kilometers
      )
    );
  }

  loadDrone(drone) {
    this.drones.push(
      new Drone(
        nextId(),
        drone.license,
        drone.make,
        drone.model,
        drone.position,
        drone.airHours
      )
    );
  }
}
