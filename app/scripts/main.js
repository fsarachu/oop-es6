import fleet from './data/fleetData';
import FleetDataService from './services/FleetDataService';
import Button from "./ui/Button";

let dataService = new FleetDataService();
dataService.loadData(fleet);

console.dir(dataService.filterCarsByMake('m'));

for (let e of dataService.errors) {
  console.error(e.message);
}

let button = new Button('Click Me!');
button.appendToElement($('body'));
