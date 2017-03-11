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
          if (this.validateCarData(vehicle)) {
            let car = this.loadCar(vehicle);
            if (car) {
              this.cars.push(car);
            }
          } else {
            this.errors.push(new DataError('Invalid car data', vehicle));
          }
          break;
        case 'drone':
          if (this.validateDroneData(vehicle)) {
            let drone = this.loadDrone(vehicle);
            if (drone) {
              this.drones.push(drone);
            }
          } else {
            this.errors.push(new DataError('Invalid drone data', vehicle));
          }
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

  validateCarData(carData) {
    let hasErrors = false;

    let requiredProperties = [
      "license",
      "make",
      "model",
      "kilometers",
      "position"
    ];

    for (let property of requiredProperties) {
      if (!carData[property]) {
        this.errors.push(new DataError(`Missing required property: "${property}"`, carData));
        hasErrors = true;
      }
    }

    return !hasErrors;
  }

  validateDroneData(droneData) {
    let hasErrors = false;

    let requiredProperties = [
      "license",
      "make",
      "model",
      "airHours",
      "position"
    ];

    for (let property of requiredProperties) {
      if (!droneData[property]) {
        this.errors.push(new DataError(`Missing required property: "${property}"`, droneData));
        hasErrors = true;
      }
    }

    return !hasErrors;
  }

  getCarByLicense(license) {
    return this.cars.find(car => {
      return car.license === license;
    });
  }
}
