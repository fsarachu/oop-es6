import BaseElement from './BaseElement';

export default class GoogleMap extends BaseElement {

  constructor() {
    super();
    this._google = window.google;
    this._map = null;
  }

  get google() {
    return this._google;
  }

  set google(value) {
    this._google = value;
  }

  get map() {
    return this._map;
  }

  set map(value) {
    this._map = value;
  }

  getElementString() {
    return '<div id="map"></div>';
  }

  start() {
    if (this.map) {
      throw new Error('Map already created');
    }

    if (!this.element) {
      this.createElement();
    }

    this._map = new google.maps.Map(this.element[0], {
      center: {lat: 0, lng: 0},
      zoom: 2
    });
  }
}
