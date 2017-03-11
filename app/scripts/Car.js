import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  constructor() {
    super();
    console.log('Constructing Car');
  }
}
