'use strict';

const Repository = require('./../Repository');
const got        = require('got');

module.exports = shorthand => got('https://bitbucket.org/' + shorthand).then(response => new Repository(
	'Bitbucket',
	'git@bitbucket.org:' + shorthand + '.git'
)).catch(error => {
	if (error.statusCode === 404) return false;
	else throw error;
});
