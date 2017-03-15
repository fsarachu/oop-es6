import BaseApp from './core/BaseApp';
import FleetDataService from './services/FleetDataService';
import fleet from './data/fleetData';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';

export default class App extends BaseApp {

  constructor() {
    super('FleetTrackr');
    this._dataService = new FleetDataService();
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
    this.registerEvents();

    try {
      this.activateRoute(document.location.pathname);
    } catch (e) {
      window.history.pushState('', this.routeMap[document.location.pathname].title, document.location.pathname);
      this.activateRoute(this.defaultRoute || '/');
    }
  }

  registerEvents() {
    $('nav a').on('click', e => {
      e.preventDefault();
      let $target = $(e.currentTarget);

      window.history.pushState('', $target.text(), $target.attr('href'));
      this.activateRoute($target.attr('href'));

      let $menuDrawer = this.titleBar.element.find('.mdl-layout__drawer');
      if ($menuDrawer.hasClass('is-visible')) {
        let layout = document.querySelector('.mdl-layout');
        layout.MaterialLayout.toggleDrawer();
      }
    });

    window.onpopstate = () => {
      console.log(document.location.pathname);
      this.activateRoute(document.location.pathname);
    };
  }
}
