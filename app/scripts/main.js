import fleet from './data/fleetData';
import FleetDataService from './services/FleetDataService';

let dataService = new FleetDataService();
dataService.loadData(fleet);

for (let e of dataService.errors) {
  console.error(e.message);
}
