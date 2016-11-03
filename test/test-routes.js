const chai = require('chai')
const chaiHttp = require('chai-http')

const server = require('../server.js')

const should = chai.should()
const app = server.app
const storage = server.storage

chai.use(chaiHttp)

describe('Index route', function() {
  it('should return a 200', function(done) {
    chai.request(app).
      get('/').
      end((err, res) => {
        res.should.have.status(200)
        res.text.should.contain('Hello, world!')
        done()
      })
  })
})
