import BaseElement from '../core/BaseElement';

export default class Button extends BaseElement {

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
    return `<button  class="mdl-button mdl-js-button mdl-button--flat mdl-js-ripple-effect">${this.title}</button>`;
  }
}
