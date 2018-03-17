import request from 'supertest';
import app from './../../server';

describe('GET /neo', () => {
  it('hazardous api should be return 200 OK', () => {
    return request(app)
      .get('/neo/hazardous')
      .expect(200);
  });

  it('fastest api should be return 200 OK', () => {
    return request(app)
      .get('/neo/fastest')
      .expect(200);
  });

  it('best-year api should be return 200 OK', () => {
    return request(app)
      .get('/neo/best-year')
      .expect(200);
  });

  it('best-month api should be return 200 OK', () => {
    return request(app)
      .get('/neo/best-month')
      .expect(200);
  });
});
