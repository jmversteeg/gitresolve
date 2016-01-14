'use strict';

const chai           = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

chai.should();

const resolve = require('./');

describe('gitresolve', function () {
	this.timeout(10000);
	it('should resolve github repositories', function () {
		return resolve('jmversteeg/gitresolve')
			.should.eventually.have.deep.property('0.url').that.equals('https://github.com/jmversteeg/gitresolve.git');
	});
	it('should accept an array of service names to use', function () {
		return resolve('jmversteeg/gitresolve', ['github', 'bitbucket'])
			.should.eventually.have.deep.property('0.url').that.equals('https://github.com/jmversteeg/gitresolve.git');
	});
	it('should accept an array of service names to use', function () {
		return resolve('jmversteeg/gitresolve', ['gitlab', 'bitbucket']).should.eventually.deep.equal([]);
	});
	it('should resolve bitbucket repositories', function () {
		return resolve('jmversteeg/public-repo')
			.should.eventually.have.deep.property('0.url').that.equals('git@bitbucket.org:jmversteeg/public-repo.git')
	});
	it('should resolve gitlab repositories', function () {
		return resolve('gitlab-org/gitlab-ce')
			.should.eventually.have.deep.property('0.url').that.equals('https://gitlab.com/gitlab-org/gitlab-ce.git');
	});
	it('should fulfill to an empty array for non-existent repositories', function () {
		return resolve('jmversteeg/unicorns').should.eventually.deep.equal([]);
	});
});
