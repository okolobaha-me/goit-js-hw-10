export class Fetch {
  constructor() {
    this.URL = 'https://restcountries.com/v3.1/name';
  }

  getCountriesList(name) {
    return fetch(`${this.URL}/${name}?fields=name,capital,population,flags,languages`).then(
      response => {
        if (response.status == 404) {
          return [];
        }
        return response.json();
      },
    );
  }
}
