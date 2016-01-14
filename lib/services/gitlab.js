'use strict';

const Repository = require('./../Repository');
const got        = require('got');
const cheerio    = require('cheerio');

module.exports = function gitlab(shorthand) {
	return new Promise((resolve, reject) => {
		let responseBody = '';
		got.stream('https://gitlab.com/' + shorthand)
			.on('data', buf => responseBody += buf.toString())
			.on('end', function () {
				resolve(new Repository(
					'GitLab',
					'https://gitlab.com/' + shorthand + '.git',
					cheerio.load(responseBody)('.project-home-desc h1').text()
				));
			})
			.on('error', e => {
				reject(e);
			})
			.on('redirect', response => {
				resolve(false);
			});
	});
};
