import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getSummary() {
    console.log(
      `This person's name is ${this.name}. It lives at ${this.location.lat}, ${this.location.lng}`
    );
  }
}
