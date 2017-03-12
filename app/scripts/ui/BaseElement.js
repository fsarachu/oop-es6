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
    return $(this.getElementString());
  }

  appendToElement($element) {
    if (!this.element) {
      this.createElement();
    }

    $element.append(this.element);
  }
}
