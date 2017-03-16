import BasePage from '../core/BasePage';
import DataTableHeader from '../ui/DataTableHeader';
import DataTable from "../ui/DataTable";

export default class CarsPage extends BasePage {

  constructor(title, cars) {
    super(title);
    this._cars = cars;
  }

  get cars() {
    return this._cars;
  }

  set cars(value) {
    this._cars = value;
  }

  createElement() {
    super.createElement();

    let headers = [
      new DataTableHeader('License', 'license', false, null),
      new DataTableHeader('Make', 'make', false, null),
      new DataTableHeader('Model', 'model', false, null),
      new DataTableHeader('Kilometers', 'kilometers', true, 'Km')
    ];

    let dataTable = new DataTable(headers, this.cars);
    dataTable.appendToElement(this.element);
  }
}
