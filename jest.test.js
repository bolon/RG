var endpoint = require('./endpoint.json');
var headers = require('./headers.json');

const supertest = require('supertest')
const api = supertest(endpoint.domain + endpoint.location.path)

describe('post test', () => {
  let cityWoeID;
  beforeAll(async (done) => {
    const responseCityID = await api.get(endpoint.location.search_path + endpoint.location.valid_search_keywords[0]).set(headers.default);
    cityWoeID = responseCityID.body[0].woeid; 
    done();
  });
  
  test('post test 1', async () => {
    const responseWeather = await api.get(`/${cityWoeID}/`).set(headers.default)
    expect(responseWeather.status).toBe(200);
  });
  
  test('post test 1', async () => {
    const responseWeather = await api.get(`/${cityWoeID}/`).set(headers.default)
    expect(responseWeather.status).not.toEqual(404);
  });
});