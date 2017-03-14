import BasePage from '../framework/BasePage';
import GoogleMap from '../ui/GoogleMap';

export default class MapPage extends BasePage {

  constructor(title) {
    super(title);
  }

  loadMapsApi() {
    let scriptTag = $('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBezMSiS0N7mNrP_8tGovq_tdgJBdpKqPY&callback=initMap" async defer></script>');
    $('body').append(scriptTag);
  }

  createElement() {
    super.createElement();

    this.loadMapsApi();
    window.initMap = () => {
      let googleMap = new GoogleMap();
      googleMap.appendToElement(this.element);
      googleMap.start();
    };
  }
}
