var endpoint = require('../endpoint.json');
var headers = require('../headers.json');

const supertest = require('supertest')
const api = supertest(endpoint.domain + endpoint.location.path)
import * as location from '../location';

// import * as location from '../location';

describe('post test', () => {
  let city;
  beforeAll(async (done) => {
    const resp = await location.getCity(endpoint.location.valid_search_keywords[0]);
    city = resp.body;
    
    done();
  });
  
  it('post test 1', async () => {
    const responseWeather = await location.getCityWeather(city[0].woeid);
    
    expect(responseWeather.status).toBe(200);
  });

});