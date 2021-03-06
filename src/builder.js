export class Builder {
  constructor() {}

  static buildOneCountry(countryList) {
    const country = countryList[0];

    const countryParams = {
      name: country.name.official,
      flag: country.flags.svg,
      capitals: this.createCapitalsList(country.capital),
      languages: this.createLanguagesList(country.languages),
      population: country.population,
    };

    return this.createCountry(countryParams);
  }

  static buildCountryList(countryList) {
    let listContent = [];

    for (const country of countryList) {
      const countryParams = {
        name: country.name.official,
        flag: country.flags.svg,
      };
      listContent.push(this.createListOfCountries(countryParams));
    }
    return listContent.join('');
  }

  static createCapitalsList(capital) {
    const capitals = [];

    if (capital.length) {
      for (const cap of capital) {
        capitals.push(`<li class='country__item'>${cap}</li>`);
      }
    } else {
      capitals.push('This country has no capital');
    }
    return capitals.join(``);
  }

  static createLanguagesList(languages) {
    const langList = Object.values(languages);
    const langListHtml = [];

    for (const language of langList) {
      langListHtml.push(`<li class='country__item'>${language}</li>`);
    }

    return langListHtml.join(``);
  }

  static createListOfCountries({ name, flag }) {
    return `<li class="country many">
        <img src="${flag}" alt="falg of ${name}" class="country__flag many" />
        <h2 class="country__name Many">${name}</h2>
      </li>`;
  }

  static createCountry({ name, flag, capitals, languages, population }) {
    return `<li class="country">
        <div class="wrapper">
          <img src="${flag}" alt="flag of the ${name}" class="country__flag" />
          <h2 class="country__name">${name}</h2>
        </div>
        <h3 class='country__title'>Capital</h3>
        <ul class='country__list'>
          ${capitals}
        </ul>
        <h3 class='country__title'>Languages</h3>
        <ul class='country__list'>
          ${languages}
        </ul>
        <h3 class='country__title'>Population: <span class='country__population'>${population}</span></h3>
      </li>`;
  }
}
