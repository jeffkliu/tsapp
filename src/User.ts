import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `I am a user! ${this.name}`;
  }
  getSummary() {
    console.log(
      `This person's name is ${this.name}. It lives at ${this.location.lat}, ${this.location.lng}`
    );
  }
}
