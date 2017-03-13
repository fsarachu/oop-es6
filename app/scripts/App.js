import AppBase from './framework/AppBase';
import FleetDataService from './services/FleetDataService';
import fleet from './data/fleetData';

export default class App extends AppBase {

  constructor() {
    super('FleetTrackr');
    this._dataService = new FleetDataService();

    this.dataService.loadData(fleet);

    this.render($('body'));
  }
  get dataService() {
    return this._dataService;
  }

  set dataService(value) {
    this._dataService = value;
  }

}
