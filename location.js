var endpoint = require('./endpoint.json');
var headers = require('./headers.json');

const supertest = require('supertest')
const api = supertest(endpoint.domain + endpoint.location.path)

export function getCity(city_name) {
  const resp = api.get(endpoint.location.search_path + city_name).set(headers.default);
  return resp;
}

export async function getCityWeather(woeid) {
  const resp = api.get(`/${woeid}/`).set(headers.default)
  return resp;
}