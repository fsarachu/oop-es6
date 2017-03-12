export default class BaseElement {

  constructor() {
    this._element = $(this.getElementString());
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

  appendToElement($element) {
    $element.append(this.element);
  }
}
