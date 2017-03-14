import BaseElement from './BaseElement';

export default class BasePage extends BaseElement {

  constructor(title) {
    super();
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  getElementString() {
    return '<div class="page-content"></div>';
  }

  appendToElement($element) {
    super.appendToElement($element);
    $('title').text(this.title);
  }
}
