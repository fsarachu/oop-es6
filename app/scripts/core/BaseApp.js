import TitleBar from '../ui/TitleBar';

export default class BaseApp {
  constructor(title) {
    this._title = title;
    this._titleBar = new TitleBar(title);
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

  run() {
    /* This is the application bootstrap */
    throw new Error('You must override run() in BaseApp');
  }

  render($parentElement) {
    this.titleBar.prependToElement($parentElement);
  }

  registerEvents() {
    /* This is where event listeners are registered */
    throw new Error('You must override registerEvents() in BaseApp');
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
      $pageContainer.children('.page-content').first().detach();

      this.routeMap[url].appendToElement($pageContainer);
    } else {
      throw new Error(`Route "${url}" is not registered in routeMap`);
    }
  }
}
