import fleet from './data/fleetData';
import FleetDataService from './services/FleetDataService';

let dataService = new FleetDataService();
dataService.loadData(fleet);

console.dir(dataService.getCarByLicense('C1030'));

for (let e of dataService.errors) {
  console.error(e.message);
}
