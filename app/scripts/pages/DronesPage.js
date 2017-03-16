import BasePage from '../core/BasePage';
import DataTableHeader from '../ui/DataTableHeader';
import DataTable from "../ui/DataTable";

export default class DronesPage extends BasePage {

  constructor(title, drones) {
    super(title);
    this._drones = drones;
  }

  get drones() {
    return this._drones;
  }

  set drones(value) {
    this._drones = value;
  }

  createElement() {
    super.createElement();

    let headers = [
      new DataTableHeader('License', 'license', false, null),
      new DataTableHeader('Make', 'make', false, null),
      new DataTableHeader('Model', 'model', false, null),
      new DataTableHeader('Air Hours', 'airHours', true, 'Km')
    ];

    let dataTable = new DataTable(headers, this.drones);
    dataTable.appendToElement(this.element);
  }
}
