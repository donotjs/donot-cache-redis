/*jshint expr: true*/

'use strict';

const expect = require('chai').expect;
const RedisCache = require('../');

const cache = new RedisCache();

describe('cache', () => {

	it ('should set data without error', () => {
		expect(cache.set('test/', { modified: new Date() })).to.be.fulfilled;
	});

	it ('get data without error and correct format', () => {
		return cache.get('test/').then((data) => {
			expect(data).to.be.an('object');
			expect(() => {
				return new Date(data.modified);
			}).to.not.throw(Error);
		});
	});

});
