import fleet from './data/fleetData';
import FleetDataService from './services/FleetDataService';
import Button from './ui/Button';
import Image from './ui/Image';
import TitleBar from './ui/TitleBar';

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

let image = new Image('images/drone.jpg');
image.appendToElement($pageContent);

let button = new Button('Click Me!');
button.appendToElement($pageContent);
