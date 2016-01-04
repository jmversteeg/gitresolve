'use strict';

const Repository = require('./../Repository');
const got        = require('got');
const cheerio    = require('cheerio');

module.exports = shorthand => got('https://github.com/' + shorthand).then(response => new Repository(
	'GitHub',
	'https://github.com/' + shorthand + '.git',
	cheerio.load(response.body)('h1.entry-title strong').text()
)).catch(error => {
	if (error.statusCode === 404) return false;
	else throw error;
});
