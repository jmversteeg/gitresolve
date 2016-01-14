'use strict';

const _ = require('lodash');

module.exports = function (shorthand, servicesMask) {
	let resolvers = require('./lib/services');
	if (servicesMask)
		resolvers = _.filter(resolvers, service => _.includes(servicesMask, service.name));
	return Promise.all(_.map(resolvers, resolve => resolve(shorthand))).then(repos => _.filter(repos));
};
