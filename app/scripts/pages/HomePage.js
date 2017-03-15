import BasePage from '../core/BasePage';
import Hero from '../ui/Hero';
import Button from '../ui/Button';

export default class HomePage extends BasePage {

  constructor(title) {
    super(title);
  }

  createElement() {
    super.createElement();

    let hero = new Hero('Fleet Tracker', 'Total control over your fleet');
    hero.appendToElement(this.element);

    let carsButton = new Button('Cars');
    carsButton.appendToElement(hero.element);

    let dronesButton = new Button('Drones');
    dronesButton.appendToElement(hero.element);
  }
}
