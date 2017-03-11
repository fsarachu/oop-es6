import fleet from './data/fleetData';
import FleetDataService from './services/FleetDataService';

let dataService = new FleetDataService();
dataService.loadData(fleet);

console.dir(dataService.cars);
console.dir(dataService.drones);
