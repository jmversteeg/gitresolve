# gitresolve [![Build Status][travis-image]][travis-url]

> Resolve shorthand repository names (github, bitbucket) into their full URLs


## Install

```
$ npm install --save gitresolve
```


## Usage

```js
var gitresolve = require('gitresolve');

gitresolve('jmversteeg/katapult').then(console.log);

//=> [ { service: 'GitHub',
//       url: 'https://github.com/jmversteeg/katapult.git',
//       name: 'katapult' } ]

```


## API

### gitresolve(shorthand)

#### shorthand

Type: `string`

Shorthand repository name.

## License

MIT © [JM Versteeg](https://github.com/jmversteeg)

[travis-image]: https://img.shields.io/travis/jmversteeg/gitresolve.svg?style=flat-square
[travis-url]: https://travis-ci.org/jmversteeg/gitresolve
