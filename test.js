import test from 'ava';
import resolve from './';

test('jmversteeg/katapult is on github', t => {
	return resolve('jmversteeg/katapult').then(repos => {
		t.is(repos[0].url, 'https://github.com/jmversteeg/katapult.git');
	});
});

test('jmversteeg/public-repo is on bitbucket', t => {
	return resolve('jmversteeg/public-repo').then(repos => {
		t.is(repos[0].url, 'git@bitbucket.org:jmversteeg/public-repo.git');
	});
});

test('jmversteeg/cats-and-unicorns does not exist', t => {
	return resolve('jmversteeg/cats-and-unicorns').then(repos => {
		t.is(repos.length, 0);
	});
});
