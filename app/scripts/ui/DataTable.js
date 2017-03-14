import BaseElement from '../core/BaseElement';

export default class DataTable extends BaseElement {

  constructor(headers, data) {
    super();
    this._headers = headers;
    this._data = data;
  }

  get headers() {
    return this._headers;
  }

  set headers(value) {
    this._headers = value;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

  getElementString() {
    let thTags = '';

    for (let header of this.headers) {
      if (header.isNumeric) {
        thTags += `<th>${header.text}</th>`;
      } else {
        thTags += `<th class="mdl-data-table__cell--non-numeric">${header.text}</th>`;
      }
    }

    let trTags = '';

    for (let obj of this.data) {
      trTags += '<tr>';

      for (let header of this.headers) {
        if (header.isNumeric) {
          trTags += `<td>${obj[header.propertyName]} ${header.suffix || ''}</td>`
        } else {
          trTags += `<td class="mdl-data-table__cell--non-numeric">${obj[header.propertyName]} ${header.suffix || ''}</td>`
        }
      }

      trTags += '</tr>';
    }

    return `
      <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            ${thTags}
          </tr>
        </thead>
        <tbody>
          ${trTags}
        </tbody>
      </table>
    `;
  }
}
