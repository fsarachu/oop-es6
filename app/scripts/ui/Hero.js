import BaseElement from '../core/BaseElement';

export default class Hero extends BaseElement {

  constructor(heading = '', subheading = '') {
    super();
    this._heading = heading;
    this._subheading = subheading;
  }

  get heading() {
    return this._heading;
  }

  set heading(value) {
    this._heading = value;
  }

  get subheading() {
    return this._subheading;
  }

  set subheading(value) {
    this._subheading = value;
  }

  getElementString() {
    return `
    <div class="hero-section">
      <div class="hero-text mdl-typography--text-center">
        <h1 class="mdl-typography--display-2">${this.heading}</h1>
        <p class="mdl-typography--display-1">${this.subheading}</p>
      </div>
    </div>
    `;
  }
}
