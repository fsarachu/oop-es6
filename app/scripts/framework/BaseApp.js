import TitleBar from '../ui/TitleBar';

export default class BaseApp {
  constructor(title) {
    this._title = title;
    this._titleBar = new TitleBar('FleetTracker');
    this._routeMap = [];
    this._defaultRoute = null;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get titleBar() {
    return this._titleBar;
  }

  set titleBar(value) {
    this._titleBar = value;
  }

  get routeMap() {
    return this._routeMap;
  }

  set routeMap(value) {
    this._routeMap = value;
  }

  get defaultRoute() {
    return this._defaultRoute;
  }

  set defaultRoute(value) {
    this._defaultRoute = value;
  }

  render($parentElement) {
    this.titleBar.prependToElement($parentElement);
  }

  addRoute(title, url, pageObject, defaultRoute = false, icon = null) {
    this.titleBar.addLink(title, url, icon);

    this.routeMap[url] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = url;
    }
  }

  activateRoute(url) {
    if (url in this.routeMap) {
      let $pageContainer = this.titleBar.element.find('main.mdl-layout__content');
      $pageContainer.empty();

      this.routeMap[url].appendToElement($pageContainer);
    } else {
      throw new Error(`Route "${url}" is not registered in routeMap`);
    }
  }
}
