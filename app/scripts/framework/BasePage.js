import BaseElement from './BaseElement';

export default class BasePage extends BaseElement {

  constructor() {
    super();
  }

  getElementString() {
    return '<div class="page-content"></div>';
  }

  createElement() {
    // This is where all the page is built and appended to this.element (page container)
    throw new Error('You must override createElement() in BasePage');
  }
}
