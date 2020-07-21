const request = require('supertest');
const app = require('../index');

describe('Text', function() {

    it('Should return error on request method', async () => {
        await request(app).get('/text')
        .send({})
        .expect(404)
    });

    it('Should return the same text', async () => {
        await request(app).post('/text')
        .send({ text: 'Test message' })
        .expect(200)
    });

    it('Should return text is required', async () => {
        await request(app).post('/text')
        .expect(400)
    });

    it('Should return text is required', async () => {
        await request(app).post('/text')
        .send({ texto: 'Hi' })
        .expect(400)
    });

    it('Should return text should not be empty', async () => {
        await request(app).post('/text')
        .send({ text: '' })
        .expect(400)
    });
})
