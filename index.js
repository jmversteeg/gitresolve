'use strict';

const _       = require('lodash');
const Promise = require('pinkie-promise');

module.exports = function (shorthand) {
	return Promise.all(_.map(require('./lib/services'), service => service(shorthand))).then(repos => _.filter(repos));
};
