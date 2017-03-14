import BasePage from './BasePage';
import GoogleMap from '../ui/GoogleMap';

export default class MapPage extends BasePage {
  constructor() {
    super();
  }

  loadMapsApi() {
    let scriptTag = $('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBezMSiS0N7mNrP_8tGovq_tdgJBdpKqPY&callback=initMap" async defer></script>');

    $('body').append(scriptTag);
  }

  render() {
    this.loadMapsApi();
    window.initMap = () => {
      let googleMap = new GoogleMap();
      googleMap.appendToElement($('.page-content'));
      googleMap.start();
    };
  }
}
