import BaseElement from '../core/BaseElement';

export default class Image extends BaseElement {

  constructor(url) {
    super();
    this._url = url;
  }

  get url() {
    return this._url;
  }

  set url(value) {
    this._url = value;
  }

  getElementString() {
    return `<img src="${this.url}" style="width: 100%;">`;
  }
}
