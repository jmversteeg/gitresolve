# gitresolve

> Resolve shorthand repository names (github, bitbucket) into their full URLs

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]

## Install

```
$ npm install --save gitresolve
```


## Usage

```js
var gitresolve = require('gitresolve');

gitresolve('jmversteeg/gitresolve').then(console.log);

//=> [ { service: 'GitHub',
//       url: 'https://github.com/jmversteeg/gitresolve.git',
//       name: 'gitresolve' } ]

```

## API

### gitresolve(shorthand, [servicesMask])

#### shorthand

Type: `string`

Shorthand repository name.

Example: `jmversteeg/gitresolve`

#### servicesMask

Type: `string[]`

Array of resolvers to use (by function name). If not provided, all resolvers will be tried. See [lib/services](https://github.com/jmversteeg/gitresolve/tree/master/lib/services) for the available services.

Example: `['github', 'bitbucket']`

## License

MIT © [JM Versteeg](https://github.com/jmversteeg)

[![dependency Status][david-image]][david-url]
[![devDependency Status][david-dev-image]][david-dev-url]

[travis-image]: https://img.shields.io/travis/jmversteeg/gitresolve.svg?style=flat-square
[travis-url]: https://travis-ci.org/jmversteeg/gitresolve

[codeclimate-image]: https://img.shields.io/codeclimate/github/jmversteeg/gitresolve.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jmversteeg/gitresolve

[david-image]: https://img.shields.io/david/jmversteeg/gitresolve.svg?style=flat-square
[david-url]: https://david-dm.org/jmversteeg/gitresolve

[david-dev-image]: https://img.shields.io/david/dev/jmversteeg/gitresolve.svg?style=flat-square
[david-dev-url]: https://david-dm.org/jmversteeg/gitresolve#info=devDependencies

[coveralls-image]: https://img.shields.io/coveralls/jmversteeg/gitresolve.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jmversteeg/gitresolve

[npm-image]: https://img.shields.io/npm/v/gitresolve.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/gitresolve
