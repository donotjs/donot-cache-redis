/*jshint expr: true*/

'use strict';

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

const RedisCache = require('../');

const cache = new RedisCache();

describe('cache', () => {

	it ('should set data without error', () => {
		return cache.set('test/', { data: new Buffer('this is my buffer'), modificationDate: new Date() }).should.eventually.be.fulfilled;
	});

	it ('get data without error and correct format', () => {
		return cache.get('test/').then((result) => {
			expect(result).to.be.an('object');
			expect(result.data).to.be.instanceOf(Buffer);
			expect(result.modificationDate).to.be.instanceOf(Date);
		}).should.eventually.be.fulfilled;
	});

});
