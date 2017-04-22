# Neutrino TypeScript Loader Middleware
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]

`neutrino-middleware-ts-loader` is Neutrino middleware for loading and importing typescript modules.

## Requirements

- Node.js v6.9+
- Yarn or npm client
- Neutrino v5

## Installation

`neutrino-middleware-ts-loader` can be installed via the Yarn or npm clients.

#### Yarn

```bash
❯ yarn add neutrino-middleware-ts-loader
```

#### npm

```bash
❯ npm install --save neutrino-middleware-ts-loader
```

## Usage

`neutrino-middleware-ts-loader` can be consumed from the Neutrino API, middleware, or presets. Require this package
and plug it into Neutrino:

```js
const typescript = require('neutrino-middleware-ts-loader');

neutrino.use(typescript);
```

## Customization

`neutrino-middleware-ts-loader` creates some conventions to make overriding the configuration easier once you are
ready to make changes.

### Rules

The following is a list of rules and their identifiers which can be overridden:

- `typescript`: Allows importing and writing typescript modules. Contains a loader named `ts` which uses `ts-loader`.

[npm-image]: https://img.shields.io/npm/v/neutrino-middleware-ts-loader.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-middleware-ts-loader.svg
[npm-url]: https://npmjs.org/package/neutrino-middleware-ts-loader

