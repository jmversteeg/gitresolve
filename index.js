'use strict';

var _ = require('lodash');
var Promise = require('pinkie-promise');

module.exports = function (shorthand) {
	return Promise.all(_.map(require('./lib/services'), function (service) {
		return service(shorthand);
	})).then(function (repos) {
		return _.filter(repos);
	});
};
