import BasePage from '../framework/BasePage';
import Image from '../ui/Image';

export default class HomePage extends BasePage {

  constructor(title) {
    super(title);
  }

  createElement() {
    super.createElement();

    let image = new Image('images/drones.jpg');
    image.appendToElement(this.element);
  }
}
