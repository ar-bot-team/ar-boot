var chai = require('chai');
var processmaker = require('../../../libs/connectors/processmaker');
var should = chai.should();

describe('Blobs', function() {
    let config = {
        PM_URL : 'localhost:8080',
        PM_CLIENT_ID : '5',
        PM_CLIENT_SECRET : 'mfmAu5BDibnCqs9CurkycwN59bWDx8FYmJ2I2jAv',
        PM_USERNAME :'test',
        PM_PASSWORD :'test'
    }
    
    it('should retrieve access token', function(done) {
        let config = {
            PM_URL : 'localhost:8080',
            PM_CLIENT_ID : '5',
            PM_CLIENT_SECRET : 'mfmAu5BDibnCqs9CurkycwN59bWDx8FYmJ2I2jAv',
            PM_USERNAME :'test',
            PM_PASSWORD :'test'
        }

        processmaker.connect(config, function(res) {
            processmaker.access_token.should.be.equal(res)
            done()
        })
    })

    it('should retrieve process list', function(done) {
        let config = {
            PM_URL : 'localhost:8080',
            PM_CLIENT_ID : '5',
            PM_CLIENT_SECRET : 'mfmAu5BDibnCqs9CurkycwN59bWDx8FYmJ2I2jAv',
            PM_USERNAME :'test',
            PM_PASSWORD :'test'
        }

        processmaker.connect(config, function(res) {
            processmaker.getProcessList(function(res) {
                console.log(res)
                done()
            })
            
        })
    })

    it('should retrieve users list', function(done) {
        let config = {
            PM_URL : 'localhost:8080',
            PM_CLIENT_ID : '5',
            PM_CLIENT_SECRET : 'mfmAu5BDibnCqs9CurkycwN59bWDx8FYmJ2I2jAv',
            PM_USERNAME :'test',
            PM_PASSWORD :'test'
        }

        processmaker.connect(config, function(res) {
            processmaker.getUserList(function(res) {
                console.log(res)
                done()
            })
            
        })
    })
})