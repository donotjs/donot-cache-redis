'use strict';

const redis = require('redis');
const Cache = require('@donotjs/donot-cache');

class RedisCache extends Cache {

	constructor() {
		super();
		this.client = redis.createClient.call(this, arguments);
	}

	get(filename) {
		return new Promise((resolved, rejected) => {
			this.client.get(filename, (err, json) => {
				if (err) return rejected(err);

				var result = JSON.parse(json);

				// Convert date string to Date.
				if (result.modificationDate) {
					result.modificationDate = new Date(result.modificationDate);
				}

				resolved(result);

			});
		});
	}

	set(filename, data) {
		return new Promise((resolved, rejected) => {
			this.client.set(filename, JSON.stringify(data), function(err) {
				if (err) return rejected(err);
				resolved();
			});
		});
	}

}

exports = module.exports = RedisCache;
