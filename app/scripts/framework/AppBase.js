import TitleBar from '../ui/TitleBar';

export default class AppBase {
  constructor(title) {
    this._title = title;
    this._titleBar = new TitleBar('FleetTracker');
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

  render($parentElement) {
    this.titleBar.appendToElement($parentElement);
  }
}
