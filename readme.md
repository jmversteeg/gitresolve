# gitresolve [![Build Status][travis-image]][travis-url]

> Resolve shorthand repository names (github, bitbucket) into their full URLs


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

[travis-image]: https://img.shields.io/travis/jmversteeg/gitresolve.svg?style=flat-square
[travis-url]: https://travis-ci.org/jmversteeg/gitresolve
