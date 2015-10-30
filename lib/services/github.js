'use strict';

var Repository = require('./../Repository'),
	http = require('q-io/http'),
	cheerio = require('cheerio');

module.exports = function (shorthand) {
	return http.request('https://github.com/' + shorthand).then(function (response) {
		if (response.status === 404) return false;
		else return response.body.read().then(function (body) {
			return new Repository(
				'GitHub',
				'https://github.com/' + shorthand + '.git',
				cheerio.load(body)('h1.entry-title strong').text()
			);
		});
	});
};
