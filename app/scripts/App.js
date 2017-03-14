import BaseApp from './framework/BaseApp';
import FleetDataService from './services/FleetDataService';
import fleet from './data/fleetData';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';

export default class App extends BaseApp {

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

    this.addRoute('Home', '/', new HomePage(`${this.title} - Home`), true, 'home');
    this.addRoute('Cars', '/cars', null, false, 'directions_car');
    this.addRoute('Drones', '/drones', null, false, 'toys');
    this.addRoute('Map', '/map', new MapPage(`${this.title} - Map`), false, 'map');

    this.render($('body'));

    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }

}
