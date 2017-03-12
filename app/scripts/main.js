import fleet from './data/fleetData';
import FleetDataService from './services/FleetDataService';
import Button from './ui/Button';
import Image from './ui/Image';
import TitleBar from './ui/TitleBar';
import DataTable from './ui/DataTable';

let dataService = new FleetDataService();
dataService.loadData(fleet);

console.dir(dataService.filterCarsByMake('m'));

for (let e of dataService.errors) {
  console.error(e.message);
}

let $body = $('body');

let titleBar = new TitleBar('Some Title');
titleBar.addLink('Home', '#0', 'home');
titleBar.addLink('Cars', '#0', 'directions_car');
titleBar.addLink('Drones', '#0', 'toys');
titleBar.addLink('Map', '#0', 'map');
titleBar.prependToElement($body);

let $pageContent = $('.page-content');

let headers = [
  {
    text: 'License',
    propertyName: 'license',
    isNumeric: false
  },
  {
    text: 'Make',
    propertyName: 'make',
    isNumeric: false
  },
  {
    text: 'Model',
    propertyName: 'model',
    isNumeric: false
  },
  {
    text: 'Kilometers',
    propertyName: 'kilometers',
    isNumeric: true,
    suffix: 'Km'
  },
];
let dataTable = new DataTable(headers, dataService.cars);

dataTable.appendToElement($pageContent);
