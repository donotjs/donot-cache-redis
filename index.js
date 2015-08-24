var redis = require('redis');

exports = module.exports = function() {

  var client = redis.createClient.apply(this, arguments);

  return {
    get: function(file, cb) {
      client.get(file, function(err, json) {
        var data;
        try {
          data = JSON.parse(json);
        } catch (err) {
          return cb(err);
        }
        cb(null, data);
      });
    },
    set: function(file, data, cb) {
      var json;
      try {
        json = JSON.stringify(data);
      } catch (err) {
        return cb(err);
      }
      client.set(file, json, function(err) {
        cb(err);
      });
    },
    client: client
  }

};
