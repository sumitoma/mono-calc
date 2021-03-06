const request = require('supertest');
const app = require('../app');


describe('GET /add', function(){
    it('return 200 for integers', function(){
        return request(app)
        .get('/add?x=10&y=12')
        .expect(200);
    });

    it('return 400 for non integers', function(){
        return request(app)
        .get('/add?x=10.12&y=12')
        .expect(400);
    });
});

describe('GET /multiply', function(){
    it('return 200 for integers', function(){
        return request(app)
        .get('/multiply?x=10&y=12')
        .expect(200);
    });

    it('return 400 for non integers', function(){
        return request(app)
        .get('/multiply?x=10.12&y=12')
        .expect(400);
    });

});