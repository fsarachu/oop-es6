import BasePage from './BasePage';
import Image from '../ui/Image';

export default class HomePage extends BasePage {

  constructor() {
    super();
  }

  render() {
    let image = new Image('images/drones.jpg');
    image.appendToElement(this.container);
  }
}
