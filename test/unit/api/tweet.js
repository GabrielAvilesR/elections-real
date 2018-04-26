const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const Tweets = require('../../../src/customFunctions/sqlDB')
describe('Tweets', function() {
    context('Functions related to tweets', function() {
        it('Should return a json object with the politiicians and parties', function() {
            Tweets.getLiveMessage()
                .then(function(message) {
                    expect(message).to.be.an('object')
                })
                .catch((err) => {return})
            
        })
        it('Should return an object from the politician structure', function() {
            Tweets.getPoliticianJson('RicardoAnayaC')
            .then(function(message) {
                expect(message).to.be.an('object')
            })
            .catch((err) => {return})
        })
    })
})