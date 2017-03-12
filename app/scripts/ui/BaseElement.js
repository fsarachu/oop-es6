import 'material-design-lite';

export default class BaseElement {

  constructor() {
    this._element = null;
  }

  get element() {
    return this._element;
  }

  set element(value) {
    this._element = value;
  }

  getElementString() {
    throw 'You must override getElementString() in BaseElement';
  }

  createElement() {
    this.element = $(this.getElementString());
  }

  appendToElement($element) {
    if (!this.element) {
      this.createElement();
    }

    $element.append(this.element);
    this.enableJs();
  }

  enableJs() {
    componentHandler.upgradeElement(this.element[0]);
  }
}
