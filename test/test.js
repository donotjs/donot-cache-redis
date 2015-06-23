var expect = require('chai').expect;
var redis = require('../');

describe('cache', function() {

  var cache;
  before(function(done) {
    cache = redis();
    cache.client.once('ready', function() {
      done();
    });
    cache.client.once('error', function(err) {
      throw err;
    });
  });

  after(function() {
    cache.client.end();
  });

  it ('should set data without error', function(done) {
    cache.set('test/', { modified: new Date() }, function(err) {
      expect(err).to.be.null;
      done();
    })
  });

  it ('get data without error and correct format', function(done) {
    cache.get('test/', function(err, data) {
      expect(err).to.be.null;
      expect(data).to.be.an('object')
      expect(function() {
        return new Date(data.modified);
      }).to.not.throw(Error);
      done();
    });
  });

});
