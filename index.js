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
				resolved(JSON.parse(json));
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
