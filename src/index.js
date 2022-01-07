import './css/styles.css';
import { Fetch } from './fetch';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Builder } from './builder';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
};

const check = countries => {
  if (!countries.length) {
    Notify.failure('Oops, there is no country with that name');
    return;
  }

  if (countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }

  refs.countryList.innerHTML = Builder.build(countries);
};

const onInputSearch = e => {
  if (!e.target.value.trim()) {
    refs.countryList.innerHTML = '';
    return;
  }
  country.getCountriesList(e.target.value).then(check);
};

const country = new Fetch();

refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));
