export default class DataTableHeader {

  constructor(text, propertyName, isNumeric, suffix) {
    this._text = text;
    this._propertyName = propertyName;
    this._isNumeric = isNumeric;
    this._suffix = suffix;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
  }

  get propertyName() {
    return this._propertyName;
  }

  set propertyName(value) {
    this._propertyName = value;
  }

  get isNumeric() {
    return this._isNumeric;
  }

  set isNumeric(value) {
    this._isNumeric = value;
  }

  get suffix() {
    return this._suffix;
  }

  set suffix(value) {
    this._suffix = value;
  }
}
