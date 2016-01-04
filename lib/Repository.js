'use strict';

class Repository {

	/**
	 * Represents a remote repository
	 * @param {String} service Name of the hosting service
	 * @param {String} url Full repository URL
	 * @param {String} [name] Repository name
	 * @constructor
	 */
	constructor(service, url, name) {
		this.service = service;
		this.url     = url;
		this.name    = name;
	}
}

module.exports = Repository;
