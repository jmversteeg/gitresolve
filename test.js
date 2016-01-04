'use strict';

const chai           = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

chai.should();

const resolve = require('./');

describe('gitresolve', () => {
	it('should resolve github repositories', () => {
		return resolve('jmversteeg/katapult')
			.should.eventually.have.deep.property('0.url').that.equals('https://github.com/jmversteeg/katapult.git');
	});
	it('should resolve bitbucket repositories', () => {
		return resolve('jmversteeg/public-repo')
			.should.eventually.have.deep.property('0.url').that.equals('git@bitbucket.org:jmversteeg/public-repo.git')
	});
	it('should fulfill to an empty array for non-existent repositories', () => {
		return resolve('jmversteeg/unicorns').should.eventually.deep.equal([]);
	});
});
