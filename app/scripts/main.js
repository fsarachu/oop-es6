import fleet from './data/fleetData';
import FleetDataService from './services/FleetDataService';
import Button from './ui/Button';
import Image from './ui/Image';
import TitleBar from './ui/TitleBar';
import DataTable from './ui/DataTable';
import DataTableHeader from "./ui/DataTableHeader";

let dataService = new FleetDataService();
dataService.loadData(fleet);

let $body = $('body');

let titleBar = new TitleBar('Some Title');
titleBar.addLink('Home', '#0', 'home');
titleBar.addLink('Cars', '#0', 'directions_car');
titleBar.addLink('Drones', '#0', 'toys');
titleBar.addLink('Map', '#0', 'map');
titleBar.prependToElement($body);

let $pageContent = $('.page-content');

let headers = [
  new DataTableHeader('License', 'license', false, null),
  new DataTableHeader('Make', 'make', false, null),
  new DataTableHeader('Model', 'model', false, null),
  new DataTableHeader('Kilometers', 'kilometers', true, 'Km')
];

let dataTable = new DataTable(headers, dataService.getCarsSortedByLicense());

dataTable.appendToElement($pageContent);

for (let e of dataService.errors) {
  console.error(e.message);
}
