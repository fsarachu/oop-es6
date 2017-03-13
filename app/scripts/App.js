import AppBase from './framework/AppBase';
import FleetDataService from './services/FleetDataService';
import fleet from './data/fleetData';

export default class App extends AppBase {

  constructor(run = true) {
    super('FleetTrackr');
    this._dataService = new FleetDataService();

    if (run) {
      this.run();
    }
  }

  get dataService() {
    return this._dataService;
  }

  set dataService(value) {
    this._dataService = value;
  }

  run() {
    this.dataService.loadData(fleet);

    this.addRoute('Home', '/', null, true, 'home');
    this.addRoute('Cars', '/cars', null, false, 'directions_car');
    this.addRoute('Drones', '/drones', null, false, 'toys');
    this.addRoute('Map', '/map', null, false, 'map');

    this.render($('body'));
  }

}
