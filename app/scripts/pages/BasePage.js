export default class BasePage {
  constructor(title) {
    this._title = title;
    this._container = $('.page-content');
    $('title').text(title);
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get container() {
    return this._container;
  }

  set container(value) {
    this._container = value;
  }

  render() {
    throw new Error('Method render() on BasePage should be overridden by subclass');
  }
}
