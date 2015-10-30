'use strict';

var Repository = require('./../Repository'),
	http = require('q-io/http');

module.exports = function (shorthand) {
	return http.request('https://bitbucket.org/' + shorthand).then(function (response) {
		if (response.status === 404) return false;
		else return new Repository(
			'Bitbucket',
			'git@bitbucket.org:' + shorthand + '.git'
		);
	});
};
