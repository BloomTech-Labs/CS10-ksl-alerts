const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
  it('should run server and give status 200', async () => {
    const expectedStatusCode = 200;
    const expectedBody = { api: 'server running' };

    const response = await request(server).get('/');

    expect(response.status).toEqual(expectedStatusCode);
    expect(response.body).toEqual(expectedBody);
    expect(response.type).toEqual('application/json');
  })
});